'use client';
//Components
import React from "react";

import { useState } from "react";
import PanelButton from "@/Components/PanelButton";
import CharacterPanel from "@/Components/CharacterPanel";
//Types
import { dataProps, PanelState } from "@/Types/types";
//Data
import charactersData from "@/public/data/data.json";

export default function Home() {
  const data = charactersData as dataProps;

  const [panels, setPanels] = useState<PanelState>({
    one: 1,
    sec: 5,
    thr: 9,
  });

  const groups = [
    { key: "one", start: 1, characters: data.Characters.slice(0, 4) },
    { key: "sec", start: 5, characters: data.Characters.slice(4, 8) },
    { key: "thr", start: 9, characters: data.Characters.slice(8, 12) },
  ];

  const [activeSection, setActiveSection] = useState<number>(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;

    const isVertical = window.matchMedia("(min-width: 1024px)").matches;

    const scrollPos = isVertical ? el.scrollTop : el.scrollLeft;
    const size = isVertical ? el.clientHeight : el.clientWidth;

    const index = Math.round(scrollPos / size);
    setActiveSection(index);
  };

  return (
    <div className="font-bangers select-none bg-white flex min-h-screen items-center justify-center font-sans">
      <main onScroll={handleScroll} className="shadow-2xl flex flex-row lg:flex-col w-full max-w-[120rem] snap-x lg:snap-y snap-mandatory h-screen overflow-x-scroll lg:overflow-y-scroll scroll-smooth">
          {groups.map((group, groupIndex) => (
            <div key={groupIndex} className="flex flex-col lg:flex-row h-screen w-full snap-start bg-black">
              {group.characters.map((char, i) => {
                const index = group.start + i;

                return (
                  <React.Fragment key={index}>
                    <PanelButton
                      openPanel={panels[group.key]}
                      setOpenPanel={(value) =>
                        setPanels(prev => ({ ...prev, [group.key]: value }))
                      }
                      index={index}
                      name={char.name}
                      classN={char.color}
                    />
                    <CharacterPanel
                      openPanel={panels[group.key]}
                      classN={char.color}
                      fromFade={char.fromFade}
                      toFade={char.toFade}
                      classP={char.textClass}
                      order={index}
                      data={char}
                    />
                  </React.Fragment>
                );
              })}
            </div>
          ))}
        <div className="absolute pointer-events-none bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className={`transition-all font-bold text-white text-shadow-2xs text-shadow-[3px_3px_0px_#000] duration-500 ${
                activeSection === i ? "scale-150 opacity-100" : "scale-100 opacity-40"
              }`}
            >
              &#10754;
            </span>
          ))}
        </div>
      </main>
    </div>
  );
}
