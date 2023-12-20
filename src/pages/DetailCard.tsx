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
    <main>
      <Link to="/" className="mx-2 hover:underline">
        Return Home
      </Link>
      <br />
      <br />
      <div className="flex items-start gap-10 max-w-4xl w-full mx-auto">
        <img src={image} alt={title} className="w-96" />
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
