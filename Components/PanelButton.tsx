interface PanelButtonProps {
    openPanel: number;
    setOpenPanel: (openPanel: number) => void;
    index: number;
    name: string;
    classN: string;
}

export default function PanelButton({ openPanel, setOpenPanel, index, name, classN }: PanelButtonProps) {
    return(
        <button
          type="button"
          onClick={() => setOpenPanel(index)}
          className={`${classN} text-white text-shadow-[3px_3px_0px_#000] text-shadow-black cursor-pointer text-[25px] flex items-center justify-center lg:justify-start lg:flex-col flex-shrink-0 lg:py-6 gap-3 duration-500
                    ${openPanel === index ? 'h-0 w-auto lg:h-auto lg:w-0 lg:px-0' : 'h-10 w-auto lg:h-auto lg:px-4'} transition-all overflow-hidden
                    hover:pt-[15%]`}
        >
          <span className="hidden lg:block">{index}</span>
          <span className="lg:rotate-90 lg:mt-15 lg:-mx-10">{name}</span>
        </button>
    );
}