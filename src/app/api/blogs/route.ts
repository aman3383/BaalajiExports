import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Blog from '@/lib/models/Blog';

// DB connection is always via dbConnect, which uses the .env file for the URI.
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    
    const blogs = await Blog.find({})
      .select('title slug content seo createdAt updatedAt')
      .sort({ createdAt: -1 });
    
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    
    const body = await request.json();
    const { title, slug, content, seo } = body;
    
    // Check if blog with slug already exists
    const existingBlog = await Blog.findOne({ slug });
    if (existingBlog) {
      return NextResponse.json(
        { error: 'Blog with this slug already exists' },
        { status: 400 }
      );
    }
    
    const newBlog = new Blog({
      title,
      slug,
      content,
      seo,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    const savedBlog = await newBlog.save();
    
    return NextResponse.json(savedBlog, { status: 201 });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { error: 'Failed to create blog' },
      { status: 500 }
    );
  }
} 