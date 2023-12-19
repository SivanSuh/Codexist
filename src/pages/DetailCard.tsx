import React from "react";
import { Link, useParams } from "react-router-dom";

const DetailCard = () => {
  const { id } = useParams();
  return (
    <div>
      <Link to="/">Return Home</Link>
      <br />
      DetailCard page {id}
    </div>
  );
};

export default DetailCard;
