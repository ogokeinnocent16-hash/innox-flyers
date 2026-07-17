export default function Shop() {
  const products = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: i < 20 ? `RC Helicopter ${i + 1}` : i < 40 ? `RC Car ${i - 19}` : `Helidrop ${i - 39}`,
    category: i < 20 ? "Helicopters" : i < 40 ? "Cars" : "Helidrop",
    image: `https://picsum.photos/seed/innox${i}/400/300`,
    desc: "Can last on air for about 24hrs and can go far as from Nigeria to United States. Used for viewing info and places humans can't visit."
  }));

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">INNOX Shop</h1>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Can last on air for about 24hrs and can go as far as from Nigeria to United States. 
          Mostly used for viewing information and going to places where humans can't visit, to get information.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">{product.category}</span>
                <h3 className="font-bold text-lg mt-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.desc}</p>
                <button className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}