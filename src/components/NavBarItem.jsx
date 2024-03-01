"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
function NavBarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={`m-4 hover:text-purple-600 p-2 font-semibold ${
          genre &&
          genre === param &&
          "underline underline-offset-8 decoration-4 decoration-purple-500 rounded-lg"
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}

export default NavBarItem;
