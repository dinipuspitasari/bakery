import  ButtonPrimary  from "./ButtonPrimary";
import heroBg from "../assets/hero-bg2.jpg"; 

export function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat pt-52 pb-32 text-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >

      <div className="absolute inset-0 bg-black/40"></div>

     {/* Konten hero */}
    <div className="relative z-10 text-gray-800 px-6 max-w-2xl bg-white/30 rounded-2xl py-8 backdrop-blur-sm">
      <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
        Freshly Baked, Just for You!
      </h1>
      <p className="text-lg text-yellow-900 mb-8 drop-shadow-md">
        Nikmati roti, kue, dan pastry terbaik langsung dari oven kami setiap hari.
      </p>

      <div className="flex justify-center">
        <ButtonPrimary className="justify-center items-center">Order Now</ButtonPrimary>
      </div>
    </div>


    </section>
  );
}
