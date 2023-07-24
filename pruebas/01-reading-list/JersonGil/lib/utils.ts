import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { genre } from "@/interfaces/books"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getVariantGender(gender: genre) {
  switch (gender) {
    case "Ciencia ficción":
      return "primary"
    case "Terror":
      return "secondary"
    case "Zombies":
      return "destructive"
    case "Fantasía":
      return "default"
    default:
      return "default"
  }
}