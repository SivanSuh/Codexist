import React from "react";
import Input from "./components/Atoms/Input";
import Navbar from "./components/Navbar";
import { BookData } from "./mock";
import BookCard from "./components/BookCard";

const App = () => {
  return (
    <div className="mx-auto ">
      <Navbar />
      <br />
      <div className="flex">
        <Input placeholder="aramak istediginiz kitabı yazın" type="text" />
      </div>

      <div className="flex gap-4 flex-wrap mx-auto max-w-7xl w-full my-5 justify-center items-center">
        {BookData.map((item) => (
          <BookCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
