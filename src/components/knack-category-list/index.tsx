import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import KnackCategory from "../knack-category";
import {
  selectCategories,
  selectCategoriesLoading
} from "../../store/categories/selectors";
import { fetchCategories } from "../../store/categories/actions";

const KnackCatergoryList: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectCategoriesLoading);

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        categories.map(({ id, ...categoryProps }) => (
          <KnackCategory key={id} {...categoryProps} />
        ))
      )}
    </div>
  );
};

export default KnackCatergoryList;
