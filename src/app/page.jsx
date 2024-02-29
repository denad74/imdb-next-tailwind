// Fix the problem for "search params object is empty in production with next 13 app dir"

// for more info "https://github.com/vercel/next.js/issues/43077"

export const dynamic = "force-dynamic"; // this is the fix

export default async function Home() {
  return (
    <div>
      <h1 className="text-red-400">Hello </h1>
    </div>
  );
}
