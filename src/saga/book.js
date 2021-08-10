import { getItemsStart, getItemsSuccess, getItemsFailure } from "store/books";
import { getBooks } from "api";

export const fetchBooks = (search, startIndex = 0) => async (dispatch) => {
  try {
    dispatch(getItemsStart(startIndex));
    const response = await getBooks(search, startIndex);
    const data = await response.json();
    dispatch(getItemsSuccess({ ...data, startIndex }));
  } catch (error) {
    dispatch(getItemsFailure(error));
  }
};
