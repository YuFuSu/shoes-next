import ProductCardFeatured from '@/components/ui/ProductCardFeatured'
import api from '@/lib/api'

export default async function FeaturedSection() {
    const data = await api.get('/products?featured=true')

    return (
        <section className="py-12">
            <h2 className="text-2xl font-bold mb-6">精選系列</h2>
            <div className="grid grid-cols-4 gap-4">
                {data.map((item) => (
                    <ProductCardFeatured key={item.id} {...item} link={`/products/${item.id}`} />
                ))}
            </div>
        </section>
    )
}