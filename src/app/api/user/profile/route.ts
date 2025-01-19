import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Mock user data that matches the existing data
const mockUserData = {
  name: "Charlene Reed",
  username: "Charlene Reed",
  email: "charlenereed@gmail.com",
  dateOfBirth: "1990-01-25",
  presentAddress: "San Jose, California, USA",
  permanentAddress: "San Jose, California, USA",
  city: "San Jose",
  postalCode: "45962",
  country: "USA",
  profileImage: "/user.png",
};

export async function GET(request: NextRequest) {
  try {
    // Return the mock data
    return NextResponse.json(mockUserData);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch user data" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const userData = await request.json();

    // In a real application, you would save this to a database
    // For now, just return the updated data
    return NextResponse.json(userData);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update user data" }, { status: 500 });
  }
}
