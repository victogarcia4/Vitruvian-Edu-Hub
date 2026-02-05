
export interface TutorChapter {
  id: string;
  title: string;
  url: string;
  icon: string;
  description?: string;
}

export interface GameLink {
  id: string;
  title: string;
  url: string;
  imagePlaceholder: string;
  isInternal?: boolean;
  internalContent?: string;
}

export enum TabView {
  TUTOR = 'TUTOR',
  LEARNING_STYLE = 'LEARNING_STYLE',
  GAMES = 'GAMES',
  CONVERTER = 'CONVERTER'
}
