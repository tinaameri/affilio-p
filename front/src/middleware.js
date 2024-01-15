import { NextResponse } from 'next/server';

const redirects = {};

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  if (redirects[pathname]) {
    const absoluteUrl = `https://affilio.ir${redirects[pathname]}`;
    return NextResponse.redirect(absoluteUrl);
  }

  return NextResponse.next();
}
