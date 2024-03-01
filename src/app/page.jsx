// Fix the problem for "search params object is empty in production with next 13 app dir"

import Results from "@/components/Results";

// for more info "https://github.com/vercel/next.js/issues/43077"
const API_KEY = process.env.API_KEY;
export const dynamic = "force-dynamic"; // this is the fix
export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const url = `https://api.themoviedb.org/3/${
    genre === "fetchTrending" ? "movie/top_rated" : "trending/all/week"
  }?api_key=${API_KEY}s&language=en-US&page=1
`;
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTrending" ? "movie/top_rated" : "trending/all/week"
    }?api_key=s${API_KEY}&language=en-US&page=1
    `,
    { next: { revalidate: 100000 } }
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  const data = await res.json();
  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
