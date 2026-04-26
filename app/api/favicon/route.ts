import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { NextResponse } from 'next/server';

export async function GET() {
  const faviconPath = join(process.cwd(), 'docs', 'screenshots', 'favicon.png');

  try {
    const favicon = await readFile(faviconPath);

    return new NextResponse(favicon, {
      headers: {
        'content-type': 'image/png',
        'cache-control': 'public, max-age=3600'
      }
    });
  } catch {
    return new NextResponse('Favicon file not found at docs/screenshots/favicon.png', {
      status: 404
    });
  }
}
