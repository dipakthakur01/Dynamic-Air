export const dynamic = 'force-static';

export function GET() {
  return new Response('google-site-verification: googlee2fa6752e72140d2.html\n', {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
