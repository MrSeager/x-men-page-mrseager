//Components
import Image from "next/image";
//Types
import { CharacterPanelProps } from "@/Types/types";

export default function CharacterPanel({ openPanel, classN, classP, order, data }: CharacterPanelProps) {
    return(
        <div
            className={`
                ${openPanel === order ? "h-500 py-5 lg:h-auto lg:w-full" : "h-0 py-0 lg:h-auto lg:w-0"}
                flex flex-col items-center gap-3 scroll-smooth
                ${classN}
                overflow-y-auto custom-scroll
                transition-all duration-500
            `}
        >
            <h1 className="text-[75px] text-white text-shadow-[3px_3px_0px_#000] text-shadow-black">{data.name}</h1>
            <Image 
                src={`/images/${data.image}`}
                alt={data.name}
                width={600}
                height={400}
                className="saturate-150 contrast-125 border-[6px] border-white shadow-[16px_16px_0px_#000]"
            />
            <h2 className="text-center text-[40px] text-white text-shadow-[3px_3px_0px_#000] text-shadow-black">Discription</h2>
            <p className={`${classP} font-comic font-bold w-[90%] md:w-[75%] whitespace-pre-line indent-8`}>{data.dis}</p>
            <h2 className="text-center text-[40px] text-white text-shadow-[3px_3px_0px_#000] text-shadow-black">Personality</h2>
            <p className={`${classP} font-comic font-bold w-[90%] md:w-[75%] whitespace-pre-line indent-8`}>{data.disPer}</p>
            <h2 className="text-center text-[40px] text-white text-shadow-[3px_3px_0px_#000] text-shadow-black">Powers and abilities</h2>
            <ul className="w-[90%] md:w-[75%] list-disc pl-6 space-y-2">
                {data.pab.map((item, index) => (
                <li key={index} className={`${classP} font-comic font-bold leading-relaxed`}>
                    {item}
                </li>
                ))}
            </ul>
        </div>
    );
}