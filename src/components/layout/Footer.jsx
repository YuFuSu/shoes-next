export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Logo 區 */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">SHOES</h2>
                    <p className="text-gray-400 text-sm">探索最新潮流鞋款，找到屬於你的風格。</p>
                </div>

                {/* 導覽連結 */}
                <div>
                    <h3 className="font-semibold mb-4">導覽</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><a href="/" className="hover:text-white transition">主頁</a></li>
                        <li><a href="/products" className="hover:text-white transition">商品</a></li>
                    </ul>
                </div>

                {/* 聯絡資訊 */}
                <div>
                    <h3 className="font-semibold mb-4">聯絡我們</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>Email: info@shoes.com</li>
                        <li>電話: 02-1234-5678</li>
                    </ul>
                </div>

            </div>

            {/* 版權 */}
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
                © 2026 SHOES. All rights reserved.
            </div>
        </footer>
    )
}