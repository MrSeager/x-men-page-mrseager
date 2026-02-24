'use client';
//Components
import { useState } from "react";
import Image from "next/image";
import PanelButton from "@/Components/PanelButton";
//Data
import charactersData from "@/public/data/data.json";

export default function Home() {
  const [openPanel, setOpenPanel] = useState<number>(1);
  const data = charactersData;

  return (
    <div className="bg-white flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-[120rem] bg-black">
        {/* Panel 1 Button */}
        <PanelButton 
          setOpenPanel={setOpenPanel} 
          index={1} 
          name={data.Characters[0].name} 
          classN='bg-[#FCE356]'
        />

        {/* Panel 1 Content */}
        <div
          className={`
            ${openPanel === 1 ? "w-full" : "w-0"}
            bg-[#FCE356] flex flex-col items-center py-5 gap-3
            overflow-hidden
            transition-all duration-500
          `}
        >
          <h1 className="text-[50px]">{data.Characters[0].name}</h1>
          <Image 
            src={`/images/${data.Characters[0].image}`}
            alt={data.Characters[0].name}
            width={600}
            height={400}
          />
          <h2 className="text-center text-[40px]">Discription</h2>
          <p className="w-[75%] whitespace-pre-line indent-8">{data.Characters[0].dis}</p>
          <h2 className="text-center text-[40px]">Personality</h2>
          <p className="w-[75%] whitespace-pre-line indent-8">{data.Characters[0].disPer}</p>
          <h2 className="text-center text-[40px]">Physical appearance</h2>
          <p className="w-[75%] whitespace-pre-line indent-8">{data.Characters[0].disPhs}</p>
        </div>

        {/* Panel 2 Button */}
        <button
          type="button"
          onClick={() => setOpenPanel(2)}
          className="bg-[#FF1955] flex-shrink-0 px-4 py-6"
        >
          2
        </button>

        {/* Panel 2 Content */}
        <div
          className={`
            ${openPanel === 2 ? "w-full" : "w-0"}
            bg-[#FF1955]
            overflow-hidden
            transition-all duration-500
          `}
        >
          {/* content goes here */}
        </div>
      </main>
    </div>
  );
}
