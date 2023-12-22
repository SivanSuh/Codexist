import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../store/store";
import { useSelector } from "react-redux";
import Button from "../components/Atoms/Button";
import { addBasket } from "../store/slices/basketSlice";
import book from "../mock/book";

const DetailCard = () => {
  const { id } = useParams();
  const { selectedBook, books } = useSelector(
    (state: RootState) => state.basket
  );

  const filterValue = book.find((val) => val.id === Number(id)); // book mock data find use params with ıd
  useEffect(() => {}, [id, books, book]);

  const dispatch = AppDispatch();

  const haveBooks = books.some((item) => item.id === filterValue?.id);

  return (
    <main className="my-2 max-w-7xl mx-auto px-4">
      <Link to="/" className="hover:underline">
        Return Home
      </Link>
      <br />
      <br />
      <div className="flex items-start gap-10 max-w-7xl w-full  flex-wrap justify-start">
        <img
          src={filterValue?.image}
          alt={filterValue?.title}
          className="max-w-sm w-full h-auto"
        />
        <div className="max-w-2xl w-full">
          <p className="text-2xl">{filterValue?.title}</p>
          <p>
            <strong>{filterValue?.author}</strong>
          </p>
          <br />
          <p>{filterValue?.description}</p>
          <br />
          <p className="text-2xl font-bold mb-4">{filterValue?.price} $</p>
          <div>
            {books?.length > 0 ? (
              haveBooks ? (
                <Button
                  title="Added the card"
                  bgColor="orange"
                  disabled={true}
                />
              ) : (
                <Button
                  title="Add the Card"
                  onClick={() =>
                    dispatch(addBasket({ ...selectedBook, quantity: 1 }))
                  }
                />
              )
            ) : (
              <Button
                title="Add the Card"
                onClick={() =>
                  dispatch(addBasket({ ...selectedBook, quantity: 1 }))
                }
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailCard;
