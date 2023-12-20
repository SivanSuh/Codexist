import React, { FC } from "react";
import BookCardProps from "./props";
import Style from "./style.module.css";
import Button from "../Atoms/Button";
import { Link, useNavigate } from "react-router-dom";
import { AppDispatch } from "../../store/store";
import { addBasket, selectBook } from "../../store/slices/basketSlice";

const BookCard: FC<BookCardProps> = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = AppDispatch();

  const handleClick = (e: any) => {
    e.stopPropagation();
    dispatch(selectBook(item));
    navigate(`/detail/${item.id}`);
  };

  const basket = (e: any) => {
    e.stopPropagation();
    dispatch(addBasket({ ...item, quantity: 1 }));
  };
  return (
    <div className={Style.bookCard} onClick={handleClick}>
      <div className={Style.imageContainer}>
        <img className={Style.image} src={item.image} alt={item.title} />
      </div>
      <p>
        <strong>{item.author}</strong>
      </p>
      <p className={Style.title}>{item.title}</p>
      <p>{item.price} $</p>
      <Button title="Add To Basket" onClick={basket} />
    </div>
  );
};

export default BookCard;
