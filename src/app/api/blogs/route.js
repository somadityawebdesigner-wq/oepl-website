import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { NextResponse } from 'next/server';
// import connectDB from '@/lib/mongodb';
// import Blog from '@/models/Blog';

export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: blogs });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// POST: Naya blog save karne ke liye
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    
    // Title se clean URL-friendly slug banana
    const slug = body.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    
    const newBlog = await Blog.create({
      title: body.title,
      slug: slug,
      content: body.content,
      image: body.image,
    });

    return NextResponse.json({ success: true, data: newBlog }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}