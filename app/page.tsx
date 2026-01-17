'use client'
import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion';
import AOS from 'aos';
import imgSlide1 from './public/img/imgSlide1.jpeg'
import imgSlide2 from './public/img/imgSlide2.jpg'
import imgSlide4 from './public/img/imgSlide4.jpg'
import img1 from './public/img/img1.jpg'

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const el = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const typed = new Typed(el.current!, {
      strings: [
        'Enjoy Your Morning Coffee Shot',
        'Start Your Day With Perfect Energy',
      ],
      typeSpeed: 80,     // tốc độ gõ
      backSpeed: 40,     // tốc độ xoá
      backDelay: 2000,   // chờ sau khi gõ xong
      loop: true,        // lặp lại
      showCursor: false,
    });

    return () => typed.destroy();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  const text = 'The Art of the Perfect Brew';
  const [animationTime, setAnimationTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationTime((prev) => prev + 0.1);
    }, 50);

    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-brown-900 via-brown-800 to-brown-900">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide h-full"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>

              <div className="carousel-inner h-full">
                <div className="carousel-item active h-full" data-bs-interval="2000">
                  <Image
                    src={imgSlide1}
                    alt="Slide 1"
                    fill
                    className="object-cover opacity-60"
                    priority
                  />
                </div>

                <div className="carousel-item h-full" data-bs-interval="2000">
                  <Image
                    src={imgSlide2}
                    alt="Slide 2"
                    fill
                    className="object-cover opacity-60"
                  />
                </div>

                <div className="carousel-item h-full" data-bs-interval="2000">
                  <Image
                    src={imgSlide4}
                    alt="Slide 4"
                    fill
                    className="object-cover opacity-60"
                  />
                </div>
              </div>

              <button
                className="carousel-control-prev z-20"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>

              <button
                className="carousel-control-next z-20"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="text-cream-200 text-sm uppercase tracking-widest mb-4">WELCOME TO THE BEAN</p>
            <h1 className="heading-serif text-white mb-8 min-h-[160px] flex items-center">
              <span ref={el}></span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center justify-center font-sans">
                <Link
                  href="/contact"
                  className="relative inline-flex items-center justify-center p-[1.5px] bg-gray-800 rounded-full overflow-hidden group"
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'conic-gradient(from var(--angle), transparent 25%, #ffffff, transparent 50%)',
                      animation: 'shimmer-spin 2.5s linear infinite',
                    }}
                  />

                  <span className="relative z-10 inline-flex items-center justify-center w-full h-full px-8 py-3 text-white bg-gray-950 rounded-full group-hover:bg-gray-900 transition-colors duration-300">
                    BOOK A TABLE
                  </span>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Heritage Section */}
      <section className="bg-cream-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div data-aos="fade-right" className="relative h-[600px] rounded-lg overflow-hidden">
              <Image
                src={img1}
                alt="Barista preparing coffee"
                fill
                className="object-cover"
              />
            </div>

            {/* Text Content */}
            <div>
              <p className="subtitle text-brown-500 mb-4">OUR HERITAGE</p>
              <h2 className="heading-serif-md mb-6">Crafting Memories Since 1992</h2>
              <div className="space-y-4 text-brown-700 leading-relaxed">
                <p data-aos="fade-left" data-aos-delay="100">
                  At THE BEAN, we believe that every cup tells a story. Our journey began over three decades ago
                  with a simple vision: to bring the finest specialty coffee to our community, one carefully crafted
                  cup at a time.
                </p>
                <p data-aos="fade-left" data-aos-delay="200">
                  Rooted in European coffee tradition and enriched by our travels across the world's most prestigious
                  coffee-growing regions, we've curated a selection that celebrates both heritage and innovation.
                  Our commitment to sustainable sourcing means we work directly with micro-lot farmers, ensuring
                  every bean meets our exacting standards for quality and ethical production.
                </p>
              </div>
              <Link href="/heritage" className="inline-block mt-6 text-brown-800 hover:text-brown-900 transition-colors">
                DISCOVER OUR STORY →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Art of the Perfect Brew Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif-md mb-4 text-center">
              {text.split('').map((char, i) => {
                const yOffset = Math.sin(animationTime + i * 0.3) * 8;

                return (
                  <motion.span
                    key={i}
                    animate={{ y: yOffset }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                      mass: 0.8,
                    }}
                    className="inline-block"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                );
              })}
            </h2>
            <p className="text-brown-600 text-lg max-w-2xl mx-auto">
              Refined through generations, our approach combines traditional methods with modern precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: Specialty Coffee */}
            <div className="text-center" data-aos="zoom-in-up" data-aos-delay="100">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brown-100 flex items-center justify-center">
                  <span className="text-3xl">⭐</span>
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold text-brown-900 mb-3">Specialty Coffee</h3>
              <p className="text-brown-600 leading-relaxed">
                Ethically sourced beans from the world's most prestigious high-altitude plantations, rated 80+ points.
              </p>
            </div>

            {/* Feature 2: Fresh Roasted Beans */}
            <div className="text-center" data-aos="zoom-in-up" data-aos-delay="200">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brown-100 flex items-center justify-center">
                  <span className="text-2xl">🔥</span>
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold text-brown-900 mb-3">Fresh Roasted Beans</h3>
              <p className="text-brown-600 leading-relaxed">
                Our in-house roasting drum hums every morning, bringing out the unique flavor profile of every single origin.
              </p>
            </div>

            {/* Feature 3: Cozy Space */}
            <div className="text-center" data-aos="zoom-in-up" data-aos-delay="300">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brown-100 flex items-center justify-center">
                  <span className="text-3xl">🪑</span>
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold text-brown-900 mb-3">Cozy Space</h3>
              <p className="text-brown-600 leading-relaxed">
                A sanctuary designed with natural textures and soft light, perfect for morning rituals or afternoon focus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

}
