import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Style from "./style.module.css";
import { RiShoppingCartLine } from "react-icons/ri";
import { RootState } from "../../store/store";

const Navbar = () => {
  const { books } = useSelector((state: RootState) => state.basket);

  return (
    <main className={Style.nav}>
      <div />
      <h2 className={Style.title}>
        <Link to="/">CODEXIST</Link>
      </h2>
      <Link to="/basket" className={Style.basket}>
        <div className={Style.shop}>
          <RiShoppingCartLine size={25} />
          <span className={Style.counter}>{books.length}</span>
        </div>
        <span className="text-white">My Cart</span>
      </Link>
    </main>
  );
};
export default Navbar;
