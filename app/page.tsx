import Image from "next/image"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">
        Innox Flyers 🚀
      </h1>
      
      {/* SAFE TEST IMAGE - Using free Unsplash image */}
      <Image 
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600" 
        alt="Test flyer"
        width={600}
        height={400}
        className="rounded-lg"
        unoptimized
      />
      
      <p className="mt-4 text-lg">
        If you see this image, Vercel is working!
      </p>
    </main>
  )
}