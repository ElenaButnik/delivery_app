import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Circles } from "react-loader-spinner";
import { getShops } from "../../redux/shops/thunks";
import { getShopsSelector, getLoading } from "../../redux/shops/selectors";
import { Hero } from "../../components/Hero/Hero";
import { ShopCard } from "../../components/ShopCard/ShopCard";
import { Products } from "../../components/Products/Products";
import s from "./Shops.module.css";

export function Shops() {
  const dispatch = useDispatch();
  const shops = useSelector(getShopsSelector);
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(getShops());
  }, [dispatch]);

  return (
    <>
      {loading && (
        <div className={s.loader}>
          <Circles type="Circles" height={100} width={100} color="orange" />
        </div>
      )}

      <Hero />
      <main className={s.container}>
        <div className={s.shopList}>
          <h1>Shops</h1>
          {shops.map((item) => (
            <li key={item.id} className={s.item}>
              <ShopCard item={item} />
            </li>
          ))}
        </div>
        <div>
          <Products />
        </div>
      </main>
    </>
  );
}
