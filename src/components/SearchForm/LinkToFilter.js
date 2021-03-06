import React from "react";
import { Link, useLocation } from "react-router-dom";
import ROUTES from "utils/routerPath";
import IconFilter from "./IconFilter";

function LinkToFilter() {
  const location = useLocation();

  return (
    <Link
      to={{
        pathname: ROUTES.FILTERS,
        search: location.search,
      }}
      className={styles.wrapper}
    >
      <IconFilter />
    </Link>
  );
}

const styles = {
  wrapper: "text-blue-500 hover:text-blue-700",
};

export default LinkToFilter;
