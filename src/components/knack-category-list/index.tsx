import * as React from "react";

import { Cartegory } from "../../data";

import KnackCategory from "../knack-category";

interface Props {
  categories: Cartegory[];
}

const KnackCatergories: React.FC<Props> = ({ categories }) => {
  return (
    <div>
      {categories.map(category => (
        <KnackCategory key={category.title} {...category} />
      ))}
    </div>
  );
};

export default KnackCatergories;
