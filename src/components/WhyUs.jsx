import { Button } from "flowbite-react";
import Image from "./Image";

export function WhyUs() {
  return (
    <section className="flex flex-col items-center justify-between gap-10 bg-[#fdf8f3] px-6 py-16 md:flex-row md:px-32">
      {/* Bagian Kiri */}
      <div className="space-y-6 text-center md:w-1/2 md:text-left">
        <h2 className="text-3xl font-bold text-[#3b2f2f] md:text-4xl">
          Baked with Love — Here’s Why We Stand Out
        </h2>
        <p className="text-gray-600">
          Every pastry we create is a labor of love, made from premium
          ingredients, baked fresh every day, and crafted with care to bring
          comfort and joy in every bite. From our oven to your heart, we’re
          dedicated to making your sweet moments truly unforgettable.
        </p>

        <Button className="rounded-full bg-[#6b3e2e] px-6 py-2 text-white shadow-md hover:bg-[#4e2c21]">
          Shop Now
        </Button>
      </div>

      {/* Bagian Kanan */}
      <div className="relative flex justify-center md:w-1/2">
        <Image>
          <div className="relative flex gap-4">
            <img
              src="./assets/2.jpg"
              alt="Red Velvet"
              className="h-64 w-64 rounded-2xl object-cover shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <img
              src="./assets/1.jpg"
              alt="Croissant"
              className="h-64 rounded-2xl object-cover shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </Image>
      </div>
    </section>
  );
}
