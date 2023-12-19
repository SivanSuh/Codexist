import React, { FC } from "react";
import BookCardProps from "./props";
import Style from "./style.module.css";

const BookCard: FC<BookCardProps> = ({ item }) => {
  return (
    <div className={Style.bookCard}>
      <img className={Style.image} src={item.image} alt={item.title} />
      <p>
        <strong>{item.author}</strong>
      </p>
      <p>{item.title}</p>
      <p>{item.price} $</p>
    </div>
  );
};

export default BookCard;
