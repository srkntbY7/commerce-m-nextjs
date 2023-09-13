import { NextResponse } from 'next/server';
import { connectDB, getCategoryId, getCategoryProducts } from '@/utils/db-util';

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
        message: err.message || 'category not found',
      },
      { status: 500 }
    );
  }

  try {
    const catProducts = await getCategoryProducts(client, 'products', catId);
    client.close();
    return NextResponse.json({ catProducts }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      {
        message: err.message || 'category products not found',
      },
      { status: 500 }
    );
  }
}
