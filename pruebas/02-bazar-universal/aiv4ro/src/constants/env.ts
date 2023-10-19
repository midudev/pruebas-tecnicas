const vercelUrl = process.env.VERCEL_URL != null ? `https://${process.env.VERCEL_URL}` : null
export const hostUrl = vercelUrl ?? 'http://localhost:3000'
