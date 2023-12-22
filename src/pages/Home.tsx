import React, { useMemo, useState } from "react";
import Input from "../components/Atoms/Input";
import { BookData } from "../mock";
import BookCard from "../components/BookCard";
import { useForm } from "react-hook-form";

const Home = () => {
  const [filterText, setFilterText] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  const { register } = useForm();

  // search filter
  const filteredBook = useMemo(
    () =>
      BookData.filter((value) =>
        value.title.toLowerCase().includes(filterText.toLocaleLowerCase())
      ),
    [filterText]
  );

  return (
    <main className="my-2 max-w-7xl mx-auto px-4">
      <div className="flex justify-center">
        <Input
          register={register}
          name="search"
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
