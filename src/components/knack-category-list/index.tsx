import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import KnackCategory from "../knack-category";
import { selectCategories } from "../../store/categories/selectors";
import { fetchCategories } from "../../store/categories/actions";

const KnackCatergoryList: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      {categories.map(({ id, ...categoryProps }) => (
        <KnackCategory key={id} {...categoryProps} />
      ))}
    </div>
  );
};

export default KnackCatergoryList;
