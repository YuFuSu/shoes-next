'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, Menu, X, Handbag } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-widest">
          SHOES
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-gray-500 transition">主頁</Link>
          <Link href="/products" className="hover:text-gray-500 transition">商品</Link>
          <button className="hover:text-gray-500 transition"><Search size={20} /></button>
          <button className="hover:text-gray-500 transition"><ShoppingCart size={20} /></button>
        </nav>

        {/* 漢堡按鈕 */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* 手機選單 */}
      <nav className={`md:hidden fixed top-16 right-0 h-full w-full bg-white shadow-lg border-t border-gray-200
        flex flex-col gap-6 px-8 py-6 transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <Link href="/" className="flex justify-end items-center" onClick={() => setMenuOpen(false)}>
          主頁
        </Link>
        <Link href="/products" className="flex justify-end items-center" onClick={() => setMenuOpen(false)}>
          商品
        </Link>
        <button className="flex justify-end items-center w-full text-left">
          搜尋
        </button>
        <button className="flex flex justify-end items-center w-full text-left">
          購物車
        </button>
      </nav>
    </header>
  )
}