import React, { useEffect } from 'react'
import { clients } from '../constants'
import Aos from 'aos'
import 'aos/dist/aos.css'

// Change this path to your background image
import ConstructionStockEdited from '../assets/ConstructionStockEdited.jpg'

const Clients = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      once: true,
      offset: 80,
    })
  }, [])

  return (
    <section
      id="clients"
      className="relative isolate overflow-hidden bg-cover bg-center bg-no-repeat py-20 sm:py-24"
      style={{
        backgroundImage: `url(${ConstructionStockEdited})`,
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0 -z-10 bg-slate-950/65"
        aria-hidden="true"
      />

      {/* Optional gradient for more depth */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/40"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {/* Heading */}
        <div
          className="mb-12 text-center"
          data-aos="fade-up"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
            Ils nous font confiance
          </p>

          <h2 className="font-poppins text-4xl font-semibold text-white sm:text-5xl">
            Nos clients
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-white/80" />
        </div>

        {/* Client grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {clients.map((client, index) => (
            <div
              key={client.id}
              data-aos="fade-up"
              data-aos-delay={index * 70}
              className="
                group flex min-h-[140px] items-center justify-center
                rounded-2xl border border-white/20 bg-white/90
                p-5 shadow-lg backdrop-blur-sm
                transition duration-300
                hover:-translate-y-1 hover:bg-white hover:shadow-2xl
                sm:min-h-[170px] sm:p-7
              "
            >
              <img
                loading="lazy"
                src={client.image}
                title={client.title}
                alt={client.alt}
                className="
                  h-20 w-full object-contain
                  transition-transform duration-300
                  group-hover:scale-105
                  sm:h-24
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients