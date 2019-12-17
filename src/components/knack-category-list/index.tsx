import * as React from "react";
import { useSelector } from "react-redux";

import KnackCategory from "../knack-category";
import { selectCategories } from "../../store/categories/selectors";

const KnackCatergories: React.FC = () => {
  const categories = useSelector(selectCategories);
  return (
    <div>
      {categories.map(({ id, ...categoryProps }) => (
        <KnackCategory key={id} {...categoryProps} />
      ))}
    </div>
  );
};

export default KnackCatergories;
