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
    <div className="select-none bg-white flex min-h-screen items-center justify-center font-sans">
      <main className="font-bangers flex flex-col lg:flex-row h-screen w-full max-w-[120rem] bg-black">
        {/* Panel 1 */}
        <PanelButton 
          openPanel={openPanel}
          setOpenPanel={setOpenPanel} 
          index={1} 
          name={data.Characters[0].name} 
          classN='bg-[#eccb00]'
        />
        <CharacterPanel 
          openPanel={openPanel}
          classN='bg-[#eccb00]'
          classP="text-shadow-[1px_1px_0px_#000] text-shadow-white text-black"
          order={1}
          data={data.Characters[0]}
        />
        {/* Panel 2 */}
        <PanelButton 
          openPanel={openPanel}
          setOpenPanel={setOpenPanel} 
          index={2} 
          name={data.Characters[1].name} 
          classN='bg-[#084772]'
        />
        <CharacterPanel 
          openPanel={openPanel}
          classN='bg-[#084772]'
          classP="text-shadow-[1px_1px_0px_#000] text-shadow-black text-white"
          order={2}
          data={data.Characters[1]}
        />
        {/* Panel 3 */}
        <PanelButton 
          openPanel={openPanel}
          setOpenPanel={setOpenPanel} 
          index={3} 
          name={data.Characters[2].name} 
          classN='bg-[#1d4c15]'
        />
        <CharacterPanel 
          openPanel={openPanel}
          classN='bg-[#1d4c15]'
          classP="text-shadow-[1px_1px_0px_#000] text-shadow-black text-white"
          order={3}
          data={data.Characters[2]}
        />
        {/* Panel 4 */}
        <PanelButton 
          openPanel={openPanel}
          setOpenPanel={setOpenPanel} 
          index={4} 
          name={data.Characters[3].name} 
          classN='bg-[#ae682d]'
        />
        <CharacterPanel 
          openPanel={openPanel}
          classN='bg-[#ae682d]'
          classP="text-shadow-[1px_1px_0px_#000] text-shadow-black text-white"
          order={4}
          data={data.Characters[3]}
        />
      </main>
    </div>
  );
}
