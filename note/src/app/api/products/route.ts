import { getProducts } from '@/utils/products'
import { NextResponse } from 'next/server'

export async function GET(
    req: Request,
) {
    const products = await getProducts()
    return NextResponse.json({ products })
}
// api 라우트란 full stack 구현을 가능하게 하는 backend api 와 같음.