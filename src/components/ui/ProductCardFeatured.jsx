'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function ProductCardFeatured({ image, title, subtitle, link }) {
    const [imgSrc, setImgSrc] = useState(image || '/images/default-img.svg')

    return (
        <Link href={link} className="group">
            <div className="overflow-hidden relative aspect-[3/4]">
                <Image
                    src={imgSrc}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={() => setImgSrc('/images/default-img.svg')}
                />
            </div>
            <div className="mt-3">
                <p className="font-bold">{title}</p>
                <p className="text-sm text-gray-500">{subtitle}</p>
                <p className="text-sm mt-1 underline">立即選購 &gt;</p>
            </div>
        </Link>
    )
}