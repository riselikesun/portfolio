 export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full h-screen max-h-[1000px] bg-[url('/risingsun.png')]  bg-cover bg-center bg-no-repeat flex justify-center">
        <h1 className="text-6xl font-bold text-white mt-40">Rise like sun</h1>
      </div>
      <div>
        <h2 className="text-4xl font-semibold mt-20">Welcome to the Rising Sun App</h2>
        <p className="mt-4 text-lg text-gray-600">Experience the beauty of a rising sun through our app.</p>
      </div>
    </main>
  );
}
