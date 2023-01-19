export enum Colors {
  DEFAULT = '#1698d9',
  DEFAULTHOVER = '#2ea8e6',
  SELECTED = '#d91667',
  SELECTEDHOVER = '#e52e7a',
  DISABLED = '#b3b3b3',
}

export interface CardData {
    taste: string;
    includes: React.FC[],
    weight: number,
    bought: string,
    runOut: string,
};