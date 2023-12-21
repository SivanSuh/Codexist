import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../store/store";
import BasketCard from "../components/BasketCard";
import Button from "../components/Atoms/Button";
import Modal from "../components/Modal";
import Input from "../components/Atoms/Input";

const Basket = () => {
  const { books } = useSelector((state: RootState) => state.basket);
  const [open, setOpen] = useState(false);
  let total = 0;

  return (
    <div className="my-2 max-w-7xl mx-auto px-4">
      <Link to="/" className="hover:underline">
        Return Home
      </Link>
      <main className="flex flex-wrap justify-between">
        <div className="max-w-xl w-full">
          {books.length > 0 ? (
            books?.map((item) => {
              total += item.price * item.quantity;
              return <BasketCard item={item} />;
            })
          ) : (
            <span className="text-2xl text-center">
              Henuz sepetinizde ürün yoktur.
            </span>
          )}
        </div>
        {total > 0 && (
          <div className="max-w-xs w-full border-2 h-52 p-2">
            <h2 className="text-2xl text-center">Total</h2>
            <p className="text-center text-4xl my-3 font-bold">{total} $</p>
            <div className="text-center">
              <Button title="Satın Al" onClick={() => setOpen(true)} />
            </div>
          </div>
        )}
      </main>

      <Modal open={open} close={setOpen} title="Alışverişi Tamamla">
        <p>Bu işlemden sonra herhangi bir şey olmuyor :D</p>
        <Input placeholder="Kart üzerindeki İsim" />
        <Input placeholder="Kart Numarası" type="number" />
        <Input placeholder="CVC" type="number" />
        <Button title="Alışverişi Tamamla" />
      </Modal>
    </div>
  );
};

export default Basket;
