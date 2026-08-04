import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import { propagateServerField } from "next/dist/server/lib/render-server";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
};

export default function Button({
    children,
    variant ="primary",
    className,
    ...props
}: ButtonProps) {
  return (
    <button
    {...props}
    className={clsx(
    "rounded-full px-6 py-3 font-medium transition-all duration-300 active:scale-95",
    variant === "primary" &&
     "bg-[#D88C9A] text-white hover:bg-[#C96D80] hover:shadow-xl",
    variant ==="secondary" &&
     "bg-[#F7D6C8] text-[#3E3A39] hover:bg-[#F2CCBC]",
    variant ==="outline" &&
     "border border-[#D88C9A] text-[#D88C9A] hover:bg-[#D88C9A] hover:text-white",
     className
  )}
  
  >
    {children}
    </button>
)
}