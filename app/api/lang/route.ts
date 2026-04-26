import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
  const lang = request.nextUrl.searchParams.get('lang') === 'ru' ? 'ru' : 'en';
  const headerStore = headers();
  const referer = headerStore.get('referer');
  const fallback = new URL('/', request.url);
  const redirectUrl = referer ? new URL(referer) : fallback;

  const response = NextResponse.redirect(redirectUrl);
  response.cookies.set('site-lang', lang, {
    path: '/',
    httpOnly: false,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365
  });

  return response;
}
