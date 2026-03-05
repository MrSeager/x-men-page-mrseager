export interface CharactersData {
  name: string; 
  image: string; 
  dis: string; 
  disPer: string; 
  disPhs: string; 
  pab: string[];
  color: string;
  fromFade: string;
  toFade: string;
  textClass: string;
}

export interface dataProps{
  Characters: CharactersData[];
}

export interface CharacterPanelProps {
    openPanel: number;
    classN: string;
    fromFade: string;
    toFade: string;
    classP: string;
    order: number;
    data: CharactersData;
}

export type PanelState = Record<string, number>;