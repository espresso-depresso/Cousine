export function ContactUs() {
return (
    <div className="bg-[#faf9f6] text-[#3d1f1f] font-sans">
        <section className="relative bg-cover bg-center py-24 px-6 text-center text-white" style={{ backgroundImage: "url('http://cousine-v2.local/wp-content/uploads/2019/12/cooked-dish.jpg')" }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <p className="text-xl font-serif text-[#e9bf6d]">Where Smoke Meets Soul</p>
            <h1 className="text-5xl md:text-6xl font-serif font-normal">About Us</h1>
            <p className="text-lg text-white/90 leading-relaxed">
                From humble beginnings at weekend cookouts to becoming a destination for BBQ lovers, our passion has always been simple: slow-smoked meats, bold flavors, and sharing unforgettable moments with every guest.
            </p>
            </div>
        </section>

        <section className="py-20 px-6 max-w-5xl mx-auto space-y-12 text-center">
            <div className="space-y-4">
            <h2 className="text-4xl font-serif">Our Restaurant</h2>
            <p className="text-xl font-medium text-[#b87d1e]">Serving best steaks and BBQs since 1984</p>
            <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Our restaurant was built on a love for authentic BBQ and the art of slow-smoking. From the first sizzle on the grill to the final smoky aroma, every dish is crafted with care, passion, and the finest ingredients.
            </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md space-y-4 text-left max-w-3xl mx-auto">
            <h3 className="text-2xl font-serif text-[#3d1f1f]">
                We believe that great food is more than just a meal — it’s an experience to be shared with friends, family, and fellow BBQ enthusiasts.
            </h3>
            <p className="text-gray-600 leading-relaxed">
                Step inside and you’ll feel the warmth of our kitchen, the inviting scent of wood smoke, and the lively atmosphere that keeps our guests coming back. Whether you’re here for tender ribs, juicy brisket, or our signature sides, every plate reflects our commitment to flavor, quality, and the joy of good company.
            </p>
            </div>
        </section>

        <section className="bg-[#e9bf6d] py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto rounded-xl my-12">
            <div className="space-y-6 px-4">
            <h2 className="text-3xl font-serif">Our BBQ, Your Flavor Adventure</h2>
            <p className="text-lg font-medium text-[#3d1f1f]">Crafted with Passion, Served with Pride</p>
            <div className="w-12 h-1 bg-[#d95f3a]"></div>
            <p className="text-gray-800 leading-relaxed">
                We believe great BBQ is all about patience, fire, and flavor. From slow-smoked meats to bold, house-made sauces, every dish is crafted to bring friends and family together over unforgettable meals.
            </p>
            <button className="bg-[#d95f3a] text-white px-8 py-3 rounded-full font-medium hover:bg-[#b87d1e] transition-colors">
                View Menu
            </button>
            </div>

            <div className="bg-gradient-to-b from-[#d95f3a] to-[#7a4a3b] p-8 rounded-lg text-white text-center space-y-4 shadow-xl">
            <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 640 512" fill="currentColor">
                <path d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"></path>
                </svg>
            </div>
            <h3 className="text-2xl font-serif">Free WiFi For Everyone</h3>
            <p className="text-white/80">Ask for password to any staff</p>
            </div>
        </section>
        </div>
    );
}