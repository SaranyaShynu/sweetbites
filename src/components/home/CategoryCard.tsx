import Image from "next/image";

type CategoryCardProps={
    name:string;
    image:string;
    items:string;
};

export default function CategoryCard({
    name,
    image,
    items,
}: CategoryCardProps) {
    return (
        <div className="group cursor-pointer overflow-hidden rounded-[28px] bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
          <div className="relative flex justify-center h-72 overflow-hidden rounded-[28px]">
            <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
            />
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#3E3A39]">
                    {name}
                    </h3>
                    
                    <p className="mt-2 text-[#6D6867]">
                        {items}
                    </p>
                    </div>  
        </div>
    )
}