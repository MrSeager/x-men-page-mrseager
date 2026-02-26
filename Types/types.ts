export interface CharactersData {
  name: string; 
  image: string; 
  dis: string; 
  disPer: string; 
  disPhs: string; 
  pab: string[];
}

export interface dataProps{
  Characters: CharactersData[];
}

export interface CharacterPanelProps {
    openPanel: number;
    classN: string;
    classP: string;
    order: number;
    data: CharactersData;
}