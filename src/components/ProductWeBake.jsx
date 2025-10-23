import { Badge } from "flowbite-react";
import { CardItem } from "./CardItem";
import cakes from "../data/cakes.json";
export default function ProductsWeBake() {
  const products = [
    { name: "Cookies", count: 12, color: "bg-[#e5d0ca] text-[#3b2f2f]" },
    { name: "Cake", count: 27, color: "bg-[#9dd9d2] text-[#1b3a3a]" },
    { name: "Bretzel", count: 8, color: "bg-[#d5c4f0] text-[#3c1e68]" },
    { name: "Pastries", count: 23, color: "bg-[#e4e4e4] text-[#212121]" },
    { name: "Croissant", count: 21, color: "bg-[#f9d71c] text-[#4e2c21]" },
    { name: "Bagel", count: 13, color: "bg-[#f4b79a] text-[#4e2c21]" },
  ];

  return (
    <section className="md:px-32 md:mb-10 md:py-10">
      <div className="flex flex-col py-12 md:flex-row md:items-center md:justify-between">
        <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-[#3b2f2f] md:mb-0">
          PRODUCT WE BAKE <br className="hidden md:block" /> HERE DAILY -
        </h2>

        {/* Badge Container */}
        <div className="flex flex-wrap justify-center gap-6 md:justify-start">
          {products.map((item, index) => (
            <Badge
              key={index}
              className={`flex items-center justify-between gap-2 rounded-full px-6 py-2 text-lg font-bold shadow-md ${item.color}`}
            >
              <span className="uppercase">{item.name}</span>
              <span className="rounded-full bg-[#3b2f2f] px-2 py-0.5 text-sm text-white">
                {item.count}
              </span>
            </Badge>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {cakes.map((cake) => (
          <CardItem
            key={cake.id}
            image={cake.image}
            title={cake.name}
            desc={cake.description}
            details={cake.details}
          />
        ))}
      </div>
    </section>
  );
}
