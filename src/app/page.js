export default function Home() {
  return (
    <div className="">
      <main className="">
        {/* Hero Banner */}
        <section className="relative h-screen bg-gray-900 bg-[url('/image/home-banner.jpg')] bg-center bg-contain">
          {/* 暗色遮罩 */}
          <div className="absolute inset-0 bg-black/50"></div>
          {/* 文字區塊 */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-6xl font-bold mb-4">STEP INTO STYLE</h1>
            <p className="text-xl mb-8">探索最新潮流鞋款，找到屬於你的風格</p>
            <button className="bg-white text-gray-900 px-8 py-3 text-lg font-semibold hover:bg-gray-200">
              立即選購
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
