"use client";

import Link from "next/link";
import { Search, Heart, ShoppingBag, User, Menu } from "lucide-react";
import Container from "../ui/Container";
import { navigation } from "@/constants/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#ECE4DF] bg-white/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <h1 className="text-3xl font-bold text-[#D88C9A] transition group-hover:scale-105">
              SweetBites
            </h1>

            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
              Freshly Baked Happiness
            </p>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-medium text-[#3E3A39] transition hover:text-[#D88C9A]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="rounded-full p-2 transition hover:bg-[#FFF3F5]">
              <Search size={20} />
            </button>

            <button className="rounded-full p-2 transition hover:bg-[#FFF3F5]">
              <Heart size={20} />
            </button>

            <button className="relative rounded-full p-2 transition hover:bg-[#FFF3F5]">
              <ShoppingBag size={20} />

              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D88C9A] text-xs text-white">
                0
              </span>
            </button>

            <button className="rounded-full p-2 transition hover:bg-[#FFF3F5]">
              <User size={20} />
            </button>

            <button className="rounded-full p-2 transition hover:bg-[#FFF3F5] lg:hidden">
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}