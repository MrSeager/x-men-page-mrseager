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
  const [openPanelSec, setOpenPanelSec] = useState<number>(5);
  const data = charactersData as dataProps;

  return (
    <div className="font-bangers select-none bg-white flex min-h-screen items-center justify-center font-sans">
      <main className="flex flex-col snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        <div className="flex flex-col lg:flex-row h-screen w-full snap-start max-w-[120rem] bg-black">
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
        </div>
        <div className="flex flex-col lg:flex-row h-screen w-full snap-start max-w-[120rem] bg-black">
          {/* Panel 1 */}
          <PanelButton 
            openPanel={openPanelSec}
            setOpenPanel={setOpenPanelSec} 
            index={5} 
            name={data.Characters[4].name} 
            classN='bg-[#d8b378]'
          />
          <CharacterPanel 
            openPanel={openPanelSec}
            classN='bg-[#d8b378]'
            classP="text-shadow-[1px_1px_0px_#000] text-shadow-white text-black"
            order={5}
            data={data.Characters[4]}
          />
          {/* Panel 2 */}
          <PanelButton 
            openPanel={openPanelSec}
            setOpenPanel={setOpenPanelSec} 
            index={6} 
            name={data.Characters[5].name} 
            classN='bg-[#002e87]'
          />
          <CharacterPanel 
            openPanel={openPanelSec}
            classN='bg-[#002e87]'
            classP="text-shadow-[1px_1px_0px_#000] text-shadow-black text-white"
            order={6}
            data={data.Characters[5]}
          />
          {/* Panel 3 */}
          <PanelButton 
            openPanel={openPanelSec}
            setOpenPanel={setOpenPanelSec} 
            index={7} 
            name={data.Characters[6].name} 
            classN='bg-[#ab3a87]'
          />
          <CharacterPanel 
            openPanel={openPanelSec}
            classN='bg-[#ab3a87]'
            classP="text-shadow-[1px_1px_0px_#000] text-shadow-black text-white"
            order={7}
            data={data.Characters[6]}
          />
          {/* Panel 4 */}
          <PanelButton 
            openPanel={openPanelSec}
            setOpenPanel={setOpenPanelSec} 
            index={8} 
            name={data.Characters[7].name} 
            classN='bg-[#902900]'
          />
          <CharacterPanel 
            openPanel={openPanelSec}
            classN='bg-[#902900]'
            classP="text-shadow-[1px_1px_0px_#000] text-shadow-black text-white"
            order={8}
            data={data.Characters[7]}
          />
        </div>
      </main>
    </div>
  );
}
