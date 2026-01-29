import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function cutText(name: string, limit?: number, hasPoint = true) {
  const point = hasPoint ? "..." : "";
  if (name.length > (limit || 15)) {
    return name.slice(0, limit || 15) + point;
  }
  return name;
}


export function formatNumber(value: string | number): string {
  const str = value.toString().replace(/\s+/g, "");

  if (!/^-?\d+(\.\d+)?$/.test(str)) {
    throw new Error(
      "La valeur doit être un nombre valide (entier, décimal ou négatif)",
    );
  }

  const isNegative = str.startsWith("-");
  const absStr = isNegative ? str.slice(1) : str;

  const [integerPart, decimalPart] = absStr.split(".");

  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  const formattedNumber = decimalPart
    ? `${formattedInteger}.${decimalPart}`
    : formattedInteger;

  return isNegative ? `-${formattedNumber}` : formattedNumber;
}

export function formatDateTo(date: Date, model: "dash" | "slash" = "slash"): string {
  switch (model) {
    case "dash":
      return new Date(date).toLocaleDateString().replaceAll("/", "-");
    case "slash":
      return new Date(date).toLocaleDateString();
  }
}