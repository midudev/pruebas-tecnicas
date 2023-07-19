"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useAppContext } from "@/context/store";

export default function Navigation() {
  const { inReadingListCount, availableListCount } = useAppContext();
  
  return (
    <header className="sticky top-0 h-[70px] z-20 bg-gray-900 text-white shadow-md">
      <nav className="flex justify-between items-center h-full px-5 font-medium">
        <div>
          <Link href="/">Librería ({availableListCount}) </Link> |
          <Link href="/reading-list"> Mi lista ({inReadingListCount})</Link>
        </div>
        <input type="search" placeholder="Buscar"></input>
      </nav>
    </header>
  );
}
