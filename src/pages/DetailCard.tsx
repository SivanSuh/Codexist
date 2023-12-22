import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../store/store";
import { useSelector } from "react-redux";
import Button from "../components/Atoms/Button";
import { addBasket, removeBasket } from "../store/slices/basketSlice";

const DetailCard = () => {
  const { selectedBook, books } = useSelector(
    (state: RootState) => state.basket
  );

  const { id, title, author, image, price, description } = selectedBook;
  useEffect(() => {}, [id]);

  const filterValue = books.find((val) => val.id === id);

  const dispatch = AppDispatch();

  return (
    <main className="my-2 max-w-7xl mx-auto px-4">
      <Link to="/" className="hover:underline">
        Return Home
      </Link>
      <br />
      <br />
      <div className="flex items-start gap-10 max-w-7xl w-full  flex-wrap justify-start">
        <img src={image} alt={title} className="max-w-sm w-full h-auto" />
        <div className="max-w-2xl w-full">
          <p className="text-2xl">{title}</p>
          <p>
            <strong>{author}</strong>
          </p>
          <br />
          <p>{description}</p>
          <br />
          <p className="text-2xl font-bold mb-4">{price} $</p>
          <div>
            {filterValue && (
              <Button
                title="-"
                onClick={() => dispatch(removeBasket(selectedBook))}
              />
            )}
            <span className="mx-4">
              {filterValue ? filterValue?.quantity : 0}
            </span>
            <Button
              title="+"
              onClick={() =>
                dispatch(addBasket({ ...selectedBook, quantity: 1 }))
              }
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailCard;
