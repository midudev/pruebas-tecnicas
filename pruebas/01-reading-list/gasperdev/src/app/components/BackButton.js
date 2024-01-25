import Link from "next/link";
export default function BackButton() {
  return (
    <Link
      href={"/"}
      className="flex items-center justify-center w-20 p-3 font-medium text-purple-500 border border-purple-700 rounded-full cursor-pointer dark:text-white dark:bg-gray-900 bg-slate-200 lg:order-2 "
    >
      Atras
    </Link>
  );
}
