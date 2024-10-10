import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Obsidian Essentials</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full bg-purple-700 text-white py-2 text-center font-bold">
        <div className="flex justify-between items-center px-4">
          <div className="text-2xl">Obsidian Essentials</div>
          <nav className="flex space-x-4">
            <a href="#" className="hover:underline">Documentation</a>
            <a href="#" className="hover:underline">Announcements</a>
          </nav>
        </div>
        <div className="text-xs mt-1">Coming Soon ∞</div>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <div className="relative w-full max-w-4xl">
          <img
            src="/your-image-path.jpg"
            alt="Minecraft Background"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <h1 className="text-4xl font-bold text-white mt-4">Obsidian Essentials</h1>
          <p className="text-white mb-2">Made By IDKDead</p>
          <button className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800">
            Download
          </button>
        </div>

        <div className="flex space-x-6 mt-8">
          <div className="bg-gray-800 text-white rounded-lg p-6 w-80">
            <h2 className="text-xl font-semibold">Custom Commands</h2>
            <p className="mt-2">There is a lot of custom commands in this add-on, so I recommend you take a look at our docs!</p>
            <button className="mt-4 bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800">
              View Documentation
            </button>
          </div>
          <div className="bg-gray-800 text-white rounded-lg p-6 w-80">
            <h2 className="text-xl font-semibold">Wanted System</h2>
            <p className="mt-2">Our add-on has a custom wanted system; there is a lot of customization to it!</p>
            <button className="mt-4 bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800">
              View Documentation
            </button>
          </div>
        </div>
      </main>

      <footer className="w-full py-4 bg-black text-center text-white mt-8">
        &copy; 2024 Obsidian Essentials
      </footer>
    </div>
  );
}
