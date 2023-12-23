import React, { FC } from "react";
import Style from "./style.module.css";
import BasketCardProps from "./props";
import { FiMinus, FiPlus } from "react-icons/fi";
import { AppDispatch } from "../../store/store";
import { addBasket, removeBasket } from "../../store/slices/basketSlice";

const BasketCard: FC<BasketCardProps> = ({ item }) => {
  const dispatch = AppDispatch();
  return (
    <main className={Style.basketCard}>
      <div className={Style.wrapper}>
        <img className={Style.image} src={item.image} alt={item.title} />
        <div className=" md:text-start text-center ">
          <p className={Style.title}>{item.title}</p>
          <p>{item.author}</p>
          <div className={Style.delete}>
            <FiMinus
              className={Style.icon}
              onClick={() => dispatch(removeBasket(item))}
            />
            <span>{item.quantity}</span>
            <FiPlus
              className={Style.icon}
              onClick={() => dispatch(addBasket(item))}
            />
          </div>
        </div>
      </div>
      <span className="text-xl md:mx-0 mx-auto">
        ${Number(item.price) * item.quantity}
      </span>
    </main>
  );
};

export default React.memo(BasketCard);
