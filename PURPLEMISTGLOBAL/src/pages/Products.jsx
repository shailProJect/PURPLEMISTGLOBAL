import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionReveal } from '../components/sections/SectionReveal';
import { products } from '../mock';
import { SEO } from '../components/SEO';


const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Perfumery', 'Cosmetics'];

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-[#0a0a0a] pt-32 pb-24">
      <SEO
      title="Products"
      description="Browse Purplemist Global's sourcing categories: perfumery oils and cosmetics ingredients imported from trusted manufacturers across Hong Kong, Singapore and Asia."
      path="/products"
    />
      {/* Hero Section */}
      <section className="px-6 mb-24">
        <div className="max-w-[1440px] mx-auto">
          <SectionReveal>
            <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-6">
              PRODUCTS · CATALOGUE
            </p>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-12 max-w-[900px]"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              What we bring
              <br />
              <span className="italic text-[#9d8fd9]">across the sea.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-[800px] leading-relaxed">
              Curated compounds from six continents. Perfumery oils from the Middle East, cosmetic actives from Europe and Asia, sourced with precision and delivered with care.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 mb-16">
        <div className="max-w-[1440px] mx-auto">
          <SectionReveal>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 text-sm tracking-[0.1em] transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-white text-black'
                      : 'bg-transparent border border-white/20 text-white hover:border-white/40'
                  }`}
                >
                  {category.toUpperCase()}
                </button>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                {/* Product Image with Spotlight Effect */}
                <div className="relative overflow-hidden mb-4 aspect-[3/4] bg-white/5">
                  {/* Spotlight overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background:
                        'radial-gradient(circle at 50% 50%, rgba(157, 143, 217, 0.2) 0%, transparent 60%)'
                    }}
                  />

                  <motion.img
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 translate-y-[-100px] group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-[#9d8fd9]/20 border border-[#9d8fd9]/30 backdrop-blur-sm text-[#9d8fd9] text-xs tracking-wider">
                      {product.category}
                    </span>
                  </div>

                  {/* Description on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-sm text-gray-300 leading-relaxed mb-2">
                      {product.description}
                    </p>
                    <p className="text-xs text-[#9d8fd9] tracking-wider">
                      ORIGIN: {product.origin}
                    </p>
                  </div>
                </div>

                {/* Product Info */}
                <h3 className="text-lg font-light text-white mb-2 group-hover:text-[#9d8fd9] transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 uppercase tracking-wider">
                  {product.origin}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;