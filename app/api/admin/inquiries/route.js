import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Use /tmp on Vercel (writable), or ./data locally
const isVercel = process.env.VERCEL === '1' || process.env.NODE_ENV === 'production';
const dataDir = isVercel ? '/tmp/data' : path.join(process.cwd(), 'data');
const inquiriesFile = path.join(dataDir, 'inquiries.json');

// Ensure data directory exists
function ensureDataDir() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Read inquiries from JSON file
function readInquiries() {
  ensureDataDir();
  if (!fs.existsSync(inquiriesFile)) {
    return [];
  }
  try {
    const data = fs.readFileSync(inquiriesFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading inquiries:', error);
    return [];
  }
}

// Write inquiries to JSON file
function writeInquiries(inquiries) {
  ensureDataDir();
  fs.writeFileSync(inquiriesFile, JSON.stringify(inquiries, null, 2), 'utf8');
}

// Simple authentication check (in production, use proper session/JWT)
function isAuthenticated(request) {
  // For simplicity, we'll check a header or cookie
  // In production, implement proper session management
  const authHeader = request.headers.get('authorization');
  // For now, we'll use a simple token check
  // You should implement proper authentication
  return true; // Remove this and implement proper auth
}

export async function GET(request) {
  try {
    // Uncomment when implementing proper auth
    // if (!isAuthenticated(request)) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    const inquiries = readInquiries();
    
    // Sort by createdAt (newest first)
    inquiries.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return NextResponse.json(
      { success: true, inquiries },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    return NextResponse.json(
      { error: 'Failed to fetch inquiries' },
      { status: 500 }
    );
  }
}

export async function PATCH(request) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: 'ID and status are required' },
        { status: 400 }
      );
    }

    const inquiries = readInquiries();
    const index = inquiries.findIndex(inq => inq.id === id);

    if (index === -1) {
      return NextResponse.json(
        { error: 'Inquiry not found' },
        { status: 404 }
      );
    }

    // Update inquiry status
    inquiries[index] = {
      ...inquiries[index],
      status,
      updatedAt: new Date().toISOString(),
    };

    writeInquiries(inquiries);

    return NextResponse.json(
      { success: true, inquiry: inquiries[index] },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating inquiry:', error);
    return NextResponse.json(
      { error: 'Failed to update inquiry' },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'ID is required' },
        { status: 400 }
      );
    }

    const inquiries = readInquiries();
    const filteredInquiries = inquiries.filter(inq => inq.id !== id);

    if (filteredInquiries.length === inquiries.length) {
      return NextResponse.json(
        { error: 'Inquiry not found' },
        { status: 404 }
      );
    }

    writeInquiries(filteredInquiries);

    return NextResponse.json(
      { success: true, message: 'Inquiry deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting inquiry:', error);
    return NextResponse.json(
      { error: 'Failed to delete inquiry' },
      { status: 500 }
    );
  }
}
