'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Heart, ShoppingBag } from 'lucide-react'

export default function ProductCardList({ image, tags, name, category, price, salePrice, link }) {
    const [imgSrc, setImgSrc] = useState(image || '/images/default-img.svg')

    return (
        <div className="group">
            {/* 圖片 */}
            <Link href={link}>
                <div className="overflow-hidden relative aspect-square bg-gray-100">
                    <Image
                        src={imgSrc}
                        alt={name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={() => setImgSrc('/images/default-img.svg')}
                    />
                </div>
            </Link>

            {/* 標籤 */}
            <div className="flex gap-1 mt-3">
                {tags.map((tag, index) => (
                    <span key={index} className="text-xs border border-gray-400 px-2 py-0.5 text-gray-600">
                        {tag}
                    </span>
                ))}
            </div>

            {/* 商品資訊 */}
            <Link href={link}>
                <p className="font-bold mt-1">{name}</p>
                <p className="text-sm text-gray-500">{category}</p>
            </Link>

            {/* 價格 + icon */}
            <div className="flex items-center justify-between mt-2">
                <div>
                    {salePrice ? (
                        <>
                            <p className="text-red-500 font-bold">NT${salePrice.toLocaleString()}</p>
                            <p className="text-sm text-gray-400 line-through">NT${price.toLocaleString()}</p>
                        </>
                    ) : (
                        <p className="font-bold">NT${price.toLocaleString()}</p>
                    )}
                </div>
                <div className="flex gap-2 text-gray-500">
                    <button><Heart size={18} /></button>
                    <button><ShoppingBag size={18} /></button>
                </div>
            </div>
        </div>
    )
}