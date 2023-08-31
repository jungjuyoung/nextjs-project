import { NextRequest, NextResponse } from 'next/server'

// 전체 페이지에 대해 미들웨어 실행
export const middleware = (request: NextRequest) => {
  console.log('미들웨어가 실행중.... ✨')
  if (request.nextUrl.pathname.startsWith('/products/1004')) {
    console.log('미들웨어가 새로운 경로로 리다이렉트중 📌')
    return NextResponse.redirect(new URL('/products', request.url))
  }
}

// 일부 페이지에 부분적으로 미들웨어 실행
export const config = {
  // matcher: ['/products/:path*']// 이렇게 하면 path경로 전부다 실행. 고로 products로 와도 실행
  matcher: ['/products/:path+']
}
