import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');
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

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();

    const inquiries = readInquiries();
    const index = inquiries.findIndex(inq => inq.id === id);

    if (index === -1) {
      return NextResponse.json(
        { error: 'Inquiry not found' },
        { status: 404 }
      );
    }

    // Update inquiry
    inquiries[index] = {
      ...inquiries[index],
      ...body,
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

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

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

