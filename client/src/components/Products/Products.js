import React, { useEffect, useCallback  } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsThunk } from "../../redux/products/thunks";
import { getProductsSelector } from "../../redux/products/selectors";
import { ProductCard } from "../ProductCard/ProductCard";
import { addProductToCart } from '../../redux/cart/actions';
import s from "./Products.module.css";

export function Products() {
  const dispatch = useDispatch();
  const products = useSelector(getProductsSelector);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  const handleAddProductToCart = useCallback(
    item => {
      dispatch(addProductToCart(item));
    },
    [dispatch],
  );

  return (
    <ul className={s.list}>
      {products.map((item) => (
        <li key={item.id} className={s.item}>
          {<ProductCard item={item} addToCart={handleAddProductToCart} />}
        </li>
      ))}
    </ul>
  );
}
