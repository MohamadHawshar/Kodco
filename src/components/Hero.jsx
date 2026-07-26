import { HashLink as Link } from 'react-router-hash-link'

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative overflow-hidden
        bg-cover bg-center md:bg-center bg-no-repeat
        min-h-[75vh] sm:min-h-[85vh] md:min-h-[90vh]
        flex items-center
      "
      title="PVP construction house image"
    >
      {/* Left-side dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />

      {/* Optional subtle extra shadow on text side only */}
      <div className="absolute inset-y-0 left-0 w-full md:w-[55%] bg-black/15" />

      {/* Content container */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Text box */}
        <div
          className="
            max-w-[700px]
            bg-black/20 backdrop-blur-[2px]
            rounded-xl
            px-5 py-6
            sm:px-7 sm:py-8
            md:bg-transparent md:backdrop-blur-0 md:p-0
          "
        >
          <p className="mb-3 sm:mb-4 text-[#6DD8F5] uppercase tracking-[0.25em] font-semibold text-[12px] sm:text-[14px] md:text-[16px]">
            Construction PVP
          </p>

          <h1
            className="
              font-poppins font-semibold leading-[1.05]
              text-white
              text-[42px]
              sm:text-[56px]
              md:text-[64px]
            "
          >
            Construire avec précision.
            <span className="block text-[#35C3EA]">
              Livrer avec confiance.
            </span>
          </h1>

          <p
            className="
              mt-5 sm:mt-6
              max-w-[560px]
              text-white/90
              text-[16px] sm:text-[18px]
              leading-7 sm:leading-8
            "
          >
            Des solutions de construction professionnelles adaptées aux
            besoins de chaque projet.
          </p>

          <Link
            smooth
            to="/projects#Projects"
            className="
              mt-8 inline-flex items-center justify-center
              bg-[#00ADED] text-white font-poppins font-semibold uppercase
              px-6 py-4 sm:px-8
              text-[14px] sm:text-[16px]
              transition duration-300 hover:bg-[#0088B5]
            "
          >
            Voir nos réalisations
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero