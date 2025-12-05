import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');
const adminFile = path.join(dataDir, 'admin.json');

export async function GET(request) {
  try {
    const token = request.cookies.get('admin_token')?.value;
    
    if (!token) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    if (!fs.existsSync(adminFile)) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    const adminData = JSON.parse(fs.readFileSync(adminFile, 'utf8'));
    
    if (adminData.sessionToken === token) {
      return NextResponse.json({ authenticated: true });
    } else {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}

