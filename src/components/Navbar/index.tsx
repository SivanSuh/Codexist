import Style from "./style.module.css";
import { RiShoppingCartLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className={Style.nav}>
      <div />
      <h2 className={Style.title}>CODEXIST</h2>
      <div className={Style.basket}>
        <RiShoppingCartLine size={25} />
        <span>Sepetim</span>
      </div>
    </nav>
  );
};
export default Navbar;
