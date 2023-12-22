import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../store/store";
import BasketCard from "../components/BasketCard";
import Button from "../components/Atoms/Button";
import Modal from "../components/Modal";
import Input from "../components/Atoms/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// schema validation
const schema = yup
  .object({
    card: yup.string().trim().required("card name is  required"),
    cardNumber: yup.number().positive().required(),
    cvc: yup.number().positive().min(3).required(),
  })
  .required();

const INITIAL_STATE = {
  card: "",
  cardNumber: 0,
  cvc: 0,
};

const Basket = () => {
  const { books } = useSelector((state: RootState) => state.basket);
  const [open, setOpen] = useState(false);
  let total = 0;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<any>({
    defaultValues: INITIAL_STATE,
    resolver: yupResolver(schema),
  }); // react-hook-form

  const onSubmit = (e: any) => {
    console.log("eee", e);
  };

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
              return <BasketCard item={item} key={item.title} />;
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
            <p className="text-center text-4xl my-3 font-bold">$ {total}</p>
            <div className="text-center">
              <Button title="Buy" onClick={() => setOpen(true)} />
            </div>
          </div>
        )}
      </main>

      <Modal
        open={open}
        close={() => {
          setOpen(false);
          clearErrors(); // error message delete
        }}
        title="Alışverişi Tamamla"
      >
        <p>Bu işlemden sonra herhangi bir şey olmuyor :D</p>
        <form onSubmit={handleSubmit(onSubmit)} className="text-center">
          <Input
            register={register}
            name="card"
            placeholder="Kart üzerindeki İsim"
            errors={errors}
          />
          <Input
            register={register}
            name="cardNumber"
            placeholder="Kart Numarası"
            type="number"
            errors={errors}
          />
          <Input
            register={register}
            name="cvc"
            placeholder="CVC"
            type="number"
            errors={errors}
          />
          <Button title="Alışverişi Tamamla" type="submit" />
        </form>
      </Modal>
    </div>
  );
};

export default Basket;
