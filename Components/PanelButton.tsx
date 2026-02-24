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
          className={`${classN} cursor-pointer text-[35px] flex flex-col flex-shrink-0 px-4 py-6 duration-500
                    hover:pt-[15%]`}
        >
          {index}
          <span className="-rotate-90 mt-15 -mx-10">{name}</span>
        </button>
    );
}