import { NextResponse } from 'next/server';
import { connectDB, getCategoryId, getCategoryFilters } from '@/utils/db-util';

export async function GET(request, { params }) {
  const { categoryName } = params;
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

  try {
    const catName = categoryName;
    const category = await getCategoryId(client, 'categories', catName);
    catId = category.catId;
  } catch (err) {
    client.close();
    return NextResponse.json(
      {
        message: `category not found for category: ${categoryName}`,
      },
      { status: 500 }
    );
  }

  try {
    const filters = await getCategoryFilters(client, 'categories', catId);
    await client.close();
    return NextResponse.json({ filters }, { status: 200 });
  } catch (err) {
    client.close();
    return NextResponse.json(
      {
        message: `filters not found for category: ${categoryName}`,
      },
      { status: 500 }
    );
  }
}
