import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

const DetailCard = () => {
  // const { id } = useParams();
  const { selectedBook } = useSelector((state: RootState) => state.basket);

  const { id, title, author, image, price } = selectedBook;
  useEffect(() => {}, [id]);

  return (
    <main className="my-2 max-w-7xl mx-auto px-4">
      <Link to="/" className="hover:underline">
        Return Home
      </Link>
      <br />
      <br />
      <div className="flex items-start gap-10 max-w-4xl w-full mx-auto flex-wrap justify-center">
        <img src={image} alt={title} className="max-w-sm w-full h-auto" />
        <div>
          <p className="text-2xl">{title}</p>
          <p>
            <strong>{author}</strong>
          </p>
          <p>{price} $</p>
        </div>
      </div>
    </main>
  );
};

export default DetailCard;
