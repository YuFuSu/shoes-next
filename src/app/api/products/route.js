import { NextResponse } from 'next/server'

const mockProducts = [
    { id: 1, image: '/images/featured-1.jpg', tags: ['精選'], name: 'Air Max 系列', subtitle: '經典復刻新配色', category: '男/女．休閒', price: 3990, salePrice: null, featured: true },
    { id: 2, image: '/images/featured-2.jpg', tags: ['精選'], name: 'Running Pro', subtitle: '專業跑步系列', category: '男/女．跑步', price: 4890, salePrice: null, featured: true },
    { id: 3, image: '/images/featured-3.jpg', tags: ['精選'], name: 'Street Style', subtitle: '街頭潮流限定款', category: '男性．潮流', price: 3290, salePrice: null, featured: true },
    { id: 4, image: '/images/featured-4.jpg', tags: ['精選'], name: 'Classic White', subtitle: '百搭純白系列', category: '女性．休閒', price: 2990, salePrice: null, featured: true },
    { id: 5, image: '/images/popular-1.jpg', tags: ['NEW 新上市', '熱銷商品'], name: 'SAMBA OG 運動休閒鞋', subtitle: '', category: '女性．潮流', price: 3490, salePrice: null, featured: false },
    { id: 6, image: '/images/popular-2.jpg', tags: ['NEW 新上市'], name: 'ADIZERO EVO SL 跑鞋', subtitle: '', category: '男/女．跑步', price: 4890, salePrice: null, featured: false },
    { id: 7, image: '/images/popular-3.jpg', tags: ['NEW 新上市', '熱銷商品'], name: '網布短袖上衣', subtitle: '', category: '女性．潮流', price: 1490, salePrice: null, featured: false },
    { id: 8, image: '/images/popular-4.jpg', tags: ['3件8折', '熱銷商品'], name: 'OFFGOD 肩背包', subtitle: '', category: '男/女．潮流', price: 3090, salePrice: 2159, featured: false },
    { id: 9, image: '/images/new-1.jpg', tags: ['NEW 新上市'], name: 'Ultra Boost 2025', subtitle: '', category: '男/女．跑步', price: 5490, salePrice: null, featured: false },
    { id: 10, image: '/images/new-2.jpg', tags: ['NEW 新上市'], name: 'Classic Leather', subtitle: '', category: '男性．休閒', price: 3290, salePrice: null, featured: false },
    { id: 11, image: '/images/new-3.jpg', tags: ['NEW 新上市', '熱銷商品'], name: 'Slip-On Pro', subtitle: '', category: '女性．潮流', price: 2490, salePrice: 1990, featured: false },
    { id: 12, image: '/images/new-4.jpg', tags: ['NEW 新上市'], name: 'Trail Runner X', subtitle: '', category: '男/女．戶外', price: 4290, salePrice: null, featured: false },
]

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const tag = searchParams.get('tag')
    const featured = searchParams.get('featured')

    let filtered = mockProducts

    if (tag) {
        filtered = filtered.filter(p => p.tags.some(t => t.includes(tag)))
    }

    if (featured === 'true') {
        filtered = filtered.filter(p => p.featured === true)
    }

    return NextResponse.json(filtered)
}