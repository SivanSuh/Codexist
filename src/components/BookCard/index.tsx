import React, { FC, useState } from "react";
import BookCardProps from "./props";
import Style from "./style.module.css";
import Button from "../Atoms/Button";
import { Link, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";
import { addBasket, selectBook } from "../../store/slices/basketSlice";
import { useSelector } from "react-redux";

const BookCard: FC<BookCardProps> = ({ item }) => {
  const [hover, setHover] = useState<any>("hidden");
  const { books } = useSelector((state: RootState) => state.basket);

  const navigate = useNavigate();
  const dispatch = AppDispatch();

  const handleClick = (e: any) => {
    e.stopPropagation();
    dispatch(selectBook(item));
    navigate(`/detail/${item.id}`);
  };

  const basket = (e: any) => {
    console.log("eee", e);
    e.stopPropagation();
    dispatch(addBasket({ ...item, quantity: 1 }));
  };

  const filteredValue = books.some((val) => val.id === item.id);

  return (
    <div
      className={Style.bookCard}
      onClick={handleClick}
      onMouseEnter={() => setHover("visible")}
      onMouseLeave={() => setHover("hidden")}
    >
      <div className={Style.imageContainer}>
        <img className={Style.image} src={item.image} alt={item.title} />
      </div>
      <p>
        <strong>{item.author}</strong>
      </p>
      <p className={Style.title}>{item.title}</p>
      <p>$ {item.price}</p>
      <div style={{ visibility: hover }}>
        {filteredValue ? (
          <Button
            title="Added the card"
            bgColor="orange"
            disabled={true}
            onClick={basket}
          />
        ) : (
          <Button title="Add To Cart" onClick={basket} />
        )}
      </div>
    </div>
  );
};

export default BookCard;
