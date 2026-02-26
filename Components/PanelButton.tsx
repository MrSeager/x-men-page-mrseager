interface PanelButtonProps {
    setOpenPanel: (openPanel: number) => void;
    index: number;
    name: string;
    classN: string;
}

export default function PanelButton({ setOpenPanel, index, name, classN }: PanelButtonProps) {
    return(
        <button
          type="button"
          onClick={() => setOpenPanel(index)}
          className={`${classN} text-white text-shadow-[3px_3px_0px_#000] text-shadow-black cursor-pointer text-[25px] flex flex-col flex-shrink-0 px-4 py-6 duration-500
                    hover:pt-[15%]`}
        >
          {index}
          <span className="rotate-90 mt-15 -mx-10">{name}</span>
        </button>
    );
}