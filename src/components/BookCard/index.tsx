import React, { FC } from "react";
import BookCardProps from "./props";
import Style from "./style.module.css";

const BookCard: FC<BookCardProps> = ({ item }) => {
  return (
    <div className={Style.bookCard}>
      <div className={Style.imageContainer}>
        <img className={Style.image} src={item.image} alt={item.title} />
      </div>
      <p>
        <strong>{item.author}</strong>
      </p>
      <p className={Style.title}>{item.title}</p>
      <p>{item.price} $</p>
    </div>
  );
};

export default BookCard;
