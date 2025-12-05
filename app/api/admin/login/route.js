import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

// Use /tmp on Vercel (writable), or ./data locally
const isVercel = process.env.VERCEL === '1' || process.env.NODE_ENV === 'production';
const dataDir = isVercel ? '/tmp/data' : path.join(process.cwd(), 'data');
const adminFile = path.join(dataDir, 'admin.json');

// Ensure data directory exists
function ensureDataDir() {
  try {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
  } catch (error) {
    console.error('Error creating data directory:', error);
    throw error;
  }
}

// Read admin credentials
function readAdmin() {
  try {
    ensureDataDir();
    if (!fs.existsSync(adminFile)) {
      // Default admin credentials (should be changed on first login)
      const defaultAdmin = {
        username: 'admin',
        password: 'admin123', // Change this in production!
        createdAt: new Date().toISOString(),
      };
      writeAdmin(defaultAdmin);
      return defaultAdmin;
    }
    const data = fs.readFileSync(adminFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading admin:', error);
    // Return default admin if file read fails
    return {
      username: 'admin',
      password: 'admin123',
      createdAt: new Date().toISOString(),
    };
  }
}

// Write admin credentials
function writeAdmin(admin) {
  try {
    ensureDataDir();
    fs.writeFileSync(adminFile, JSON.stringify(admin, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing admin file:', error);
    // On Vercel, file writes to /tmp might fail, but we can still proceed
    // The session token will be in the cookie, which is sufficient
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    let admin;
    try {
      admin = readAdmin();
    } catch (error) {
      console.error('Error reading admin file:', error);
      // Use default credentials if file read fails
      admin = {
        username: 'admin',
        password: 'admin123',
      };
    }

    if (admin && admin.username === username && admin.password === password) {
      // Generate session token
      const sessionToken = crypto.randomBytes(32).toString('hex');
      
      // Try to update admin file with session token (may fail on Vercel)
      try {
        admin.sessionToken = sessionToken;
        admin.lastLogin = new Date().toISOString();
        writeAdmin(admin);
      } catch (writeError) {
        console.error('Warning: Could not write admin file:', writeError);
        // Continue anyway - cookie is sufficient for authentication
      }

      // Create response with cookie
      const response = NextResponse.json(
        { success: true, message: 'Login successful' },
        { status: 200 }
      );

      // Set cookie (this works on Vercel)
      response.cookies.set('admin_token', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      });

      return response;
    } else {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Error during login:', error);
    console.error('Error stack:', error.stack);
    return NextResponse.json(
      { 
        error: 'Failed to process login',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
