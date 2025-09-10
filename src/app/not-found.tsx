import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" w-full h-screen grid place-items-center">
      <div className=" w-full px-[1rem] min-w-[20rem] text-center items-center justify-center grid gap-[.6rem]">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link
          href="/"
          className=" bg-blue-600 px-[1rem] py-[.6rem] rounded-sm text-white max-w-[20rem]"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
