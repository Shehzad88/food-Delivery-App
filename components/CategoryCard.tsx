import Image from "next/image";

type CategoryCardProps = {
  name: string;
  image: string;
};

export default function CategoryCard({
  name,
  image,
}: CategoryCardProps) {
  return (
    <div className="group flex min-w-[110px] cursor-pointer flex-col items-center">
      <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-[#F7F7F7] transition-all duration-300 group-hover:shadow-sm">
        <Image
          src={image}
          alt={`${name} food`}
          fill
          sizes="80px"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <p className="mt-3 text-center text-sm font-medium text-[#111111]">
        {name}
      </p>
    </div>
  );
}