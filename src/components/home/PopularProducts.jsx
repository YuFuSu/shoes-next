import ProductCardList from '@/components/ui/ProductCardList'
import api from '@/lib/api'

export default async function PopularSection() {
    const data = await api.get('/products?tag=熱銷商品')

    return (
        <section className="py-12">
            <h2 className="text-2xl font-bold mb-6">人氣商品</h2>
            <div className="grid grid-cols-4 gap-6">
                {data.map((item) => (
                    <ProductCardList key={item.id} {...item} link={`/products/${item.id}`} />
                ))}
            </div>
        </section>
    )
}