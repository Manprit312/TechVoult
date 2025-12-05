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

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create inquiry object
    const inquiry = {
      id: Date.now().toString(),
      name: body.name,
      email: body.email,
      phone: body.phone || '',
      message: body.message,
      budget: body.budget || '',
      meetingDate: body.meetingDate || '',
      meetingTime: body.meetingTime || '',
      status: 'new', // new, read, contacted, closed
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // Read existing inquiries
    const inquiries = readInquiries();
    
    // Add new inquiry
    inquiries.push(inquiry);
    
    // Write back to file
    writeInquiries(inquiries);

    return NextResponse.json(
      { success: true, message: 'Inquiry submitted successfully', id: inquiry.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving inquiry:', error);
    return NextResponse.json(
      { error: 'Failed to save inquiry' },
      { status: 500 }
    );
  }
}

