export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full p-4 bg-pink-200 gap-4">
      <div className="backdrop-blur-[2px] bg-white/30 border border-white/20 rounded-lg shadow-md p-6 max-w-sm">
        <h2 className="text-xl font-semibold mb-2">Glassmorphism Card</h2>
        <p className="text-sm text-gray-800">This is a frosted glass-style UI using Tailwind CSS.</p>
      </div>
      <div className="backdrop-blur-md bg-white/30 border border-white/20 rounded-lg shadow-md p-6 max-w-sm">
        <h2 className="text-xl font-semibold mb-2">Glassmorphism Card</h2>
        <p className="text-sm text-gray-800">This is a frosted glass-style UI using Tailwind CSS.</p>
      </div>
    </div>
  );
}
