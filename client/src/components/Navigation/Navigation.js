import { NavLink } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { getTotalPrice } from '../../redux/cart/selectors';
import s from "./Navigation.module.css";

export function Navigation() {
  const cost = useSelector(getTotalPrice);

  return (
 
      <header className={s.header}>
        <nav className={s.nav}>
          <ul className={s.list}>
            <li className={s.item}>
              <NavLink to="/" className={s.navLink}>
                Shops
              </NavLink>
            </li>
            <li className={s.item}>
              <NavLink to="/cart" className={s.navLink}>
                Shopping cart <BsFillCartFill className={s.icon} />
                {cost ? <span>{cost}</span> : null}
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
  
  );
}
