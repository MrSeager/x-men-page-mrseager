//Components
import Image from "next/image";
//Types
import { CharactersData } from "@/Types/types";

interface CharacterPanelProps {
    openPanel: number;
    classN: string;
    order: number;
    data: CharactersData;
}

export default function CharacterPanel({ openPanel, classN, order, data }: CharacterPanelProps) {
    return(
    <div
        className={`
            ${openPanel === order ? "w-full" : "w-0"}
            ${classN} flex flex-col items-center py-5 gap-3
            overflow-y-auto custom-scroll
            transition-all duration-500
        `}
    >
        <h1 className="text-[50px]">{data.name}</h1>
        <Image 
            src={`/images/${data.image}`}
            alt={data.name}
            width={600}
            height={400}
        />
        <h2 className="text-center text-[40px]">Discription</h2>
        <p className="font-comic font-bold w-[75%] whitespace-pre-line indent-8">{data.dis}</p>
        <h2 className="text-center text-[40px]">Personality</h2>
        <p className="font-comic font-bold w-[75%] whitespace-pre-line indent-8">{data.disPer}</p>
        <h2 className="text-center text-[40px]">Physical appearance</h2>
        <p className="font-comic font-bold w-[75%] whitespace-pre-line indent-8">{data.disPhs}</p>
        <h2 className="text-center text-[40px]">Powers and abilities</h2>
        <ul className="w-[75%] list-disc pl-6 space-y-2">
            {data.pab.map((item, index) => (
            <li key={index} className="font-comic font-bold leading-relaxed">
                {item}
            </li>
            ))}
        </ul>
    </div>
    );
}