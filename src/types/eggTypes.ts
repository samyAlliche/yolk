export interface EggType {
  id: string;
  nameFr: string;
  nameEn: string;
  time: number; // in minutes
  goodWith: string;
}

export const eggTypes: EggType[] = [
  {
    id: "coque",
    nameFr: "A la coque",
    nameEn: "Egg and soldiers",
    time: 3,
    goodWith: "on its own with some bread",
  },
  {
    id: "poached",
    nameFr: "Pochés",
    nameEn: "Poached",
    time: 3,
    goodWith: "egg benedict, salads, toasts",
  },
  {
    id: "mollet",
    nameFr: "Mollets",
    nameEn: "Medium boiled",
    time: 6,
    goodWith: "ramen, avocado toasts",
  },
  {
    id: "dur",
    nameFr: "Durs",
    nameEn: "Hard Boiled",
    time: 9,
    goodWith: "salads, sandwiches",
  },
  {
    id: "test",
    nameFr: "Test",
    nameEn: "Test",
    time: 0.1,
    goodWith: "dev only",
  },
];
