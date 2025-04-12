import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// convert prisma object to reqular js object
export function convertToPlainObject <XXX>(value:XXX):XXX{
  return JSON.parse(JSON.stringify(value));
}

// format number with decimal
export function formatNumberWithDecimal(num:number):string{
  const [int, decimal] = num.toString().split('.');
  
  // Handle padding directly here
  const formattedDecimal = decimal ? decimal.padEnd(2, '0') : '00';
  return `${int}.${formattedDecimal}`;
}