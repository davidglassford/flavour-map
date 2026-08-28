import { defineMiddleware } from 'astro:middleware';
import { env } from 'cloudflare:workers';

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

export const onRequest = defineMiddleware(async (context, next) => {
  const user = (env as any).BASIC_AUTH_USER as string | undefined;
  const pass = (env as any).BASIC_AUTH_PASSWORD as string | undefined;

  if (!user || !pass) {
    return next();
  }

  const authHeader = context.request.headers.get('Authorization') ?? '';
  const [scheme, encoded] = authHeader.split(' ');

  if (scheme === 'Basic' && encoded) {
    try {
      const [suppliedUser, suppliedPass] = atob(encoded).split(':');
      if (timingSafeEqual(suppliedUser ?? '', user) && timingSafeEqual(suppliedPass ?? '', pass)) {
        return next();
      }
    } catch {
      // fall through to 401
    }
  }

  return new Response('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Global Flavour Explorer", charset="UTF-8"' },
  });
});
