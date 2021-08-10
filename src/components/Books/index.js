import React from "react";
import uniqBy from "lodash/uniqBy";
import Book from "./Book";

function Books({ items }) {
  return (
    <ul className={styles.wrapper}>
      {uniqBy(items, "id").map((item) => (
        <Book key={item.id} defaultClassName={styles.item} {...item} />
      ))}
    </ul>
  );
}

const styles = {
  wrapper: "mt-4",
  item: "mt-4",
};

export default Books;
