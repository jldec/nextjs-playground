// API server is on the same host as the client.
// API paths are prefixed with /api unless running locally.
// Local API server is on a different port (except /testdata)

const LOCAL=!!process.env.NEXT_PUBLIC_LOCALHOST
if (LOCAL) { console.log(`Running locally`); }

const prefix = LOCAL ? "http://localhost:8000" : "/api";

// Untyped data Fetcher for use with SWR https://swr.vercel.app/
// Wraps fetch() with prefix - returns JSON promise.
export default async function fetcher(path: string) {
  const url = path.startsWith("/testdata") ? path : prefix + path;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} fetching ${url}`);
  return res.json();
}
