import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getWhatsAppLink(message: string): string {
  return `https://wa.me/919952074007?text=${encodeURIComponent(message)}`;
}
