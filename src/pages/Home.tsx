import React, { useState } from "react";
import Input from "../components/Atoms/Input";
import { BookData } from "../mock";
import BookCard from "../components/BookCard";

const Home = () => {
  const [filterText, setFilterText] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  const filteredBook = BookData.filter((value) =>
    value.title.toLowerCase().includes(filterText.toLocaleLowerCase())
  );

  return (
    <main className="my-2 max-w-7xl mx-auto px-4">
      <div className="flex">
        <Input
          onChange={onChange}
          placeholder="Aramak istediginiz kitabı yazın..."
          type="text"
        />
      </div>
      <div className="flex gap-6 flex-wrap mx-auto max-w-7xl w-full my-5 justify-center items-center">
        {filteredBook.map((item) => (
          <BookCard item={item} key={item.id} />
        ))}
      </div>
    </main>
  );
};
export default Home;
