import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');
const adminFile = path.join(dataDir, 'admin.json');

export async function POST(request) {
  try {
    const response = NextResponse.json({ success: true });
    
    // Clear cookie
    response.cookies.set('admin_token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 0,
    });

    // Clear session token from admin file
    if (fs.existsSync(adminFile)) {
      const adminData = JSON.parse(fs.readFileSync(adminFile, 'utf8'));
      delete adminData.sessionToken;
      fs.writeFileSync(adminFile, JSON.stringify(adminData, null, 2), 'utf8');
    }

    return response;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json({ success: true });
  }
}

