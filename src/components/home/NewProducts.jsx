import ProductCardList from '@/components/ui/ProductCardList'
import api from '@/lib/api'

export default async function NewProducts() {
    const data = await api.get('/products?tag=NEW')

    return (
        <section className="py-12">
            <h2 className="text-2xl font-bold mb-6">新品上市</h2>
            <div className="grid grid-cols-4 gap-6">
                {data.map((item) => (
                    <ProductCardList key={item.id} {...item} link={`/products/${item.id}`} />
                ))}
            </div>
        </section>
    )
}