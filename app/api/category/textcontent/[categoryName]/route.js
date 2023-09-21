import { NextResponse } from 'next/server';
import {
  connectDB,
  getCategoryId,
  getCategoryTextContent,
} from '@/utils/db-util';

export async function GET(request, { params }) {
  const { categoryName } = params;
  console.log('this is the correct path for api', categoryName);
  let client, catId;
  try {
    client = await connectDB();
  } catch (err) {
    return NextResponse.json(
      {
        message: 'database connection failed',
      },
      { status: 500 }
    );
  }
  console.log('categoryName', categoryName);
  try {
    const catName = categoryName;
    const category = await getCategoryId(client, 'categories', catName);
    catId = category.catId;
  } catch (err) {
    client.close();
    return NextResponse.json(
      {
        message: err.message || 'category not found',
      },
      { status: 500 }
    );
  }
  console.log('catId', catId);
  try {
    const catContent = await getCategoryTextContent(client, catId);
    client.close();
    return NextResponse.json({ catContent }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      {
        message: err.message || 'category content not found',
      },
      { status: 500 }
    );
  }
}
