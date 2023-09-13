import { NextResponse } from 'next/server';
import { connectDB, getProductData } from '@/utils/db-util';

export const revalidate = 0;

export async function GET(request, { params }) {
  const { productId } = params;

  let client;

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
    const productData = await getProductData(client, 'products', productId);
    client.close();
    return NextResponse.json({ productData }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      {
        message: err.message || 'product not found',
      },
      { status: 500 }
    );
  }
}
