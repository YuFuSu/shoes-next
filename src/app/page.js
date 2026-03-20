import HomeBanner from '@/components/home/HomeBanner'
import FeaturedSection from '@/components/home/FeaturedProducts'
import PopularSection from '@/components/home/PopularProducts';
import NewProducts from '@/components/home/NewProducts';

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <div className='page-containter'>
        <FeaturedSection />
        <PopularSection />
        <NewProducts />
      </div>
    </main>
  );
}
