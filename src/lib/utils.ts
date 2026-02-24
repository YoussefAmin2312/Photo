import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const BASE = import.meta.env.BASE_URL; // "/PHOTO/" in prod, "/" in dev

export function asset(path: string): string {
  if (path.startsWith("/")) {
    return `${BASE}${path.slice(1)}`;
  }
  return `${BASE}${path}`;
}
