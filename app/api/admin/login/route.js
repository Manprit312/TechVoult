import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const dataDir = path.join(process.cwd(), 'data');
const adminFile = path.join(dataDir, 'admin.json');

// Ensure data directory exists
function ensureDataDir() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Read admin credentials
function readAdmin() {
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
  try {
    const data = fs.readFileSync(adminFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading admin:', error);
    return null;
  }
}

// Write admin credentials
function writeAdmin(admin) {
  ensureDataDir();
  fs.writeFileSync(adminFile, JSON.stringify(admin, null, 2), 'utf8');
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

    const admin = readAdmin();

    if (admin && admin.username === username && admin.password === password) {
      // Generate session token
      const sessionToken = crypto.randomBytes(32).toString('hex');
      
      // Update admin file with session token
      admin.sessionToken = sessionToken;
      admin.lastLogin = new Date().toISOString();
      writeAdmin(admin);

      // Create response with cookie
      const response = NextResponse.json(
        { success: true, message: 'Login successful' },
        { status: 200 }
      );

      // Set cookie
      response.cookies.set('admin_token', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
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
    return NextResponse.json(
      { error: 'Failed to process login' },
      { status: 500 }
    );
  }
}
