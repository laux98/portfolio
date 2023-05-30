export type menuItemType = {
  label: string;
  id: number;
  icon: any;
};

export type competenceType = {
  mark: number;
  label: string;
  icon: any;
};

export type competenceSectionType = {
  label: string;
  competences: Array<competenceType>;
};

export type realisationType = {
  title: string;
  picture: string;
  date: string;
  techno: Array<string>;
  description: Array<string>;
  place: string;
};

export type competencesType = Array<competenceSectionType>;
export type realisationsType = Array<realisationType>;

export type cursusItemType = {
  date: string;
  type: "school" | "job";
  title: string;
  description: string;
  place: string;
};

export type hobbieType = {
  title: string;
  icon: any;
};

export type hobbiesType = Array<hobbieType>;
