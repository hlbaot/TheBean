import Link from 'next/link'
import Image from 'next/image'

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-brown-900 via-brown-800 to-brown-900">
            <Image
              src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=1920&q=80"
              alt="Coffee drinks"
              fill
              className="object-cover opacity-60"
            />
          </div>
        </div>
        
        <div className="relative z-10 text-center">
          <h1 className="heading-serif text-white mb-4">Get in Touch</h1>
          <p className="text-white text-lg uppercase tracking-widest">WE'D LOVE TO HEAR FROM YOU</p>
        </div>
      </section>

      {/* Contact Form & Information Section */}
      <section className="bg-cream-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Form */}
            <div>
              <h2 className="heading-serif-md mb-4">Send us a message</h2>
              <p className="text-brown-600 mb-8 leading-relaxed">
                Whether you have a question about our beans or just want to say hi, our door is always open.
              </p>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-brown-800 mb-2 uppercase tracking-wider">
                    NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-brown-300 focus:border-brown-800 focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-brown-800 mb-2 uppercase tracking-wider">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    placeholder="hello@example.com"
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-brown-300 focus:border-brown-800 focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-brown-800 mb-2 uppercase tracking-wider">
                    MESSAGE
                  </label>
                  <textarea
                    rows={6}
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-brown-300 focus:border-brown-800 focus:outline-none transition-colors resize-none"
                  />
                </div>
                
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Right: Contact Information */}
            <div>
              <h2 className="heading-serif-md mb-8">Visit Us</h2>
              
              <div className="space-y-8 mb-8">
                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 text-brown-600 mt-1">📍</div>
                  <div>
                    <p className="text-sm font-medium text-brown-700 uppercase tracking-wider mb-1">OUR LOCATION</p>
                    <p className="text-brown-800 leading-relaxed">
                      123 Coffee Lane, Artisan District<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 text-brown-600 mt-1">📞</div>
                  <div>
                    <p className="text-sm font-medium text-brown-700 uppercase tracking-wider mb-1">PHONE</p>
                    <p className="text-brown-800">+1 (555) 123-4567</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 text-brown-600 mt-1">🕐</div>
                  <div>
                    <p className="text-sm font-medium text-brown-700 uppercase tracking-wider mb-1">HOURS</p>
                    <p className="text-brown-800 leading-relaxed">
                      Mon - Fri: 07:00 - 20:00<br />
                      Sat - Sun: 08:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <p className="text-sm font-medium text-brown-700 uppercase tracking-wider mb-4">FOLLOW OUR JOURNEY</p>
                <div className="flex space-x-3">
                  <div className="w-12 h-12 rounded-full bg-cream-200 flex items-center justify-center hover:bg-cream-300 cursor-pointer transition-colors">
                    <span className="text-brown-700">🔊</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-cream-200 flex items-center justify-center hover:bg-cream-300 cursor-pointer transition-colors">
                    <span className="text-brown-700">📷</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-cream-200 flex items-center justify-center hover:bg-cream-300 cursor-pointer transition-colors">
                    <span className="text-brown-700">📤</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Callout Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto bg-white rounded-lg p-8 text-center shadow-lg">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl">🗺️</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-brown-900 mb-4">
              Find us in the heart of the city
            </h3>
            <Link 
              href="https://maps.google.com" 
              target="_blank"
              className="inline-block text-brown-800 uppercase tracking-wider font-medium hover:text-brown-900 transition-colors"
            >
              OPEN IN GOOGLE MAPS →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
