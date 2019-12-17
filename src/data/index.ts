export interface Cartegory {
  id: string;
  title: string;
  imgUrl: string;
  link: string;
}

export const cards = [];

export const categories: Cartegory[] = [
  { id: "1", title: "Skills", imgUrl: "/assets/img/people.png", link: "" },
  { id: "2", title: "People", imgUrl: "/assets/img/people.png", link: "" },
  { id: "3", title: "Audiences", imgUrl: "/assets/img/people.png", link: "" },
  { id: "3", title: "Journeys", imgUrl: "/assets/img/people.png", link: "" }
];
