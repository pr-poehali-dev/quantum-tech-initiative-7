export default function Index() {
  return (
    <main className="min-h-screen bg-[#FDF8F5]" style={{ fontFamily: "'Jost', sans-serif" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#FDF8F5] border-b border-[#D4A5A5]">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter text-[#3D2B2B]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            CandyCandle
          </a>
          <div className="flex space-x-8">
            <a href="#catalog" className="text-sm uppercase tracking-widest text-[#3D2B2B] hover:text-[#C97B7B] transition-colors">
              Каталог
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest text-[#3D2B2B] hover:text-[#C97B7B] transition-colors">
              О нас
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest text-[#3D2B2B] hover:text-[#C97B7B] transition-colors">
              Заказать
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <h1
              className="text-8xl md:text-9xl font-bold tracking-tighter leading-none mb-6 text-[#3D2B2B]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              CANDY
              <br />
              <span className="italic font-normal text-[#C97B7B]">Candle</span>
            </h1>
            <p className="text-xl max-w-xl text-[#5C3D3D]">
              Натуральные свечи ручной работы. Тепло, аромат и уют — созданные с любовью для вашего дома.
            </p>
            <a
              href="#catalog"
              className="inline-block mt-8 px-8 py-3 bg-[#C97B7B] text-white text-sm uppercase tracking-widest hover:bg-[#3D2B2B] transition-colors"
            >
              Смотреть каталог
            </a>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square">
              <img
                src="https://cdn.poehali.dev/projects/20ca0f26-38bb-4805-b91f-899895c65a02/files/729a7a55-4412-4e3a-881c-0f785fb609a7.jpg"
                alt="Свечи CandyCandle"
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#C97B7B]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 px-4 md:px-8 bg-[#3D2B2B] text-white">
        <div className="container mx-auto">
          <h2
            className="text-6xl font-bold tracking-tighter mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            КАТАЛОГ
          </h2>
          <p className="text-[#D4A5A5] mb-12 text-lg">Каждая свеча — это маленькое произведение искусства</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/20ca0f26-38bb-4805-b91f-899895c65a02/files/404a9e86-b2cc-42f2-a42f-a8bcd06e5ba8.jpg"
                  alt="Свеча Ваниль и Роза"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Свеча «Ваниль & Роза»</h3>
              <p className="text-[#D4A5A5] mb-2">Нежный аромат, время горения 40 часов</p>
              <p className="text-[#C97B7B] font-semibold text-lg">2 000 ₽</p>
            </div>

            {/* Product 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/20ca0f26-38bb-4805-b91f-899895c65a02/files/dafc2598-e0dc-4a8d-9735-b58439b47d71.jpg"
                  alt="Набор Уютный вечер"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Набор «Уютный вечер»</h3>
              <p className="text-[#D4A5A5] mb-2">3 свечи с разными ароматами в подарочной коробке</p>
              <p className="text-[#C97B7B] font-semibold text-lg">5 500 ₽</p>
            </div>

            {/* Product 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/20ca0f26-38bb-4805-b91f-899895c65a02/files/84bbedfb-b0f6-40b1-8390-517921a74fdb.jpg"
                  alt="Набор Коллекция"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Набор «Коллекция»</h3>
              <p className="text-[#D4A5A5] mb-2">6 свечей + аромадиффузор, идеальный подарок</p>
              <p className="text-[#C97B7B] font-semibold text-lg">8 000 ₽</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2
                className="text-6xl font-bold tracking-tighter mb-8 text-[#3D2B2B]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                О НАС
              </h2>
              <div className="aspect-[4/5] relative mb-8 md:mb-0 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/20ca0f26-38bb-4805-b91f-899895c65a02/files/404a9e86-b2cc-42f2-a42f-a8bcd06e5ba8.jpg"
                  alt="О нас — CandyCandle"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-[#C97B7B] pointer-events-none"></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6 text-[#5C3D3D]">
                CandyCandle — это маленькая мастерская, где каждая свеча создаётся вручную с любовью и вниманием к деталям.
              </p>
              <p className="mb-6 text-[#5C3D3D]">
                Мы используем только натуральный соевый и кокосовый воск, хлопковые фитили и премиальные ароматические масла. Никакой химии — только природные ингредиенты для вашего дома.
              </p>
              <p className="mb-6 text-[#5C3D3D]">
                Наши свечи — идеальный подарок для близких или уютный ритуал для себя. Продаём поштучно и красивыми наборами в подарочной упаковке.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2 text-[#C97B7B]">Наши принципы</h3>
                  <ul className="space-y-2 text-[#5C3D3D]">
                    <li>Натуральный воск</li>
                    <li>Ручная работа</li>
                    <li>Без парабенов</li>
                    <li>Эко-упаковка</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2 text-[#C97B7B]">Форматы</h3>
                  <ul className="space-y-2 text-[#5C3D3D]">
                    <li>Штучные свечи</li>
                    <li>Подарочные наборы</li>
                    <li>Корпоративные заказы</li>
                    <li>Свечи на заказ</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-[#C97B7B] text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2
                className="text-6xl font-bold tracking-tighter mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                ЗАКАЗАТЬ
              </h2>
              <p className="text-xl mb-8">Хотите сделать заказ или подобрать подарок? Напишите нам — ответим в течение часа.</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="w-28 text-sm uppercase tracking-widest">Почта</span>
                  <a href="mailto:hello@candycandle.ru" className="hover:underline">
                    hello@candycandle.ru
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-28 text-sm uppercase tracking-widest">Telegram</span>
                  <a href="https://t.me/candycandle" className="hover:underline">
                    @candycandle
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-28 text-sm uppercase tracking-widest">Телефон</span>
                  <a href="tel:+79001234567" className="hover:underline">
                    +7 (900) 123-45-67
                  </a>
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-[#3D2B2B] placeholder-white/50"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2">
                    Почта
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-[#3D2B2B] placeholder-white/50"
                    placeholder="Ваш email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-[#3D2B2B] placeholder-white/50"
                    placeholder="Что вас интересует? Штучные свечи или набор?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-8 px-8 py-3 bg-[#3D2B2B] text-white text-sm uppercase tracking-widest hover:bg-white hover:text-[#3D2B2B] transition-colors"
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-[#3D2B2B] text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0 text-[#D4A5A5]">© 2025 CandyCandle. Натуральные свечи ручной работы.</p>
          <div className="flex space-x-8">
            <a href="#" className="text-sm uppercase tracking-widest hover:text-[#C97B7B] transition-colors">
              Instagram
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-[#C97B7B] transition-colors">
              VK
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-[#C97B7B] transition-colors">
              Telegram
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}