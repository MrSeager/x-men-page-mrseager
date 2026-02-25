'use client';
//Components
import { useState } from "react";
import PanelButton from "@/Components/PanelButton";
import CharacterPanel from "@/Components/CharacterPanel";
//Types
import { dataProps } from "@/Types/types";
//Data
import charactersData from "@/public/data/data.json";

export default function Home() {
  const [openPanel, setOpenPanel] = useState<number>(1);
  const data = charactersData as dataProps;

  return (
    <div className="bg-white flex min-h-screen items-center justify-center font-sans">
      <main className="font-bangers flex h-screen w-full max-w-[120rem] bg-black">
        {/* Panel 1 Button */}
        <PanelButton 
          setOpenPanel={setOpenPanel} 
          index={1} 
          name={data.Characters[0].name} 
          classN='bg-[#FCE356]'
        />

        {/* Panel 1 Content */}
        <CharacterPanel 
          openPanel={openPanel}
          classN='bg-[#FCE356]'
          order={1}
          data={data.Characters[0]}
        />

        {/* Panel 2 Button */}
        <PanelButton 
          setOpenPanel={setOpenPanel} 
          index={2} 
          name={data.Characters[1].name} 
          classN='bg-[#FF1955]'
        />

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
