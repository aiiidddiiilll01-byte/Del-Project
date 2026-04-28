export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-6">

      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Your Business Name
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Modern landing page built with Next.js
        </p>

        <div className="flex gap-4 justify-center">
          <a href="#contact" className="bg-white text-black px-6 py-3 rounded-xl font-semibold">
            Get Started
          </a>

          <a href="#about" className="border border-white px-6 py-3 rounded-xl">
            Learn More
          </a>
        </div>
      </div>

      <section id="about" className="mt-24 text-center max-w-3xl">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-400">
          We build fast, modern websites for businesses.
        </p>
      </section>

      <section id="contact" className="mt-24 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-400">contact@yourbusiness.com</p>
      </section>

    </main>
  );
}
