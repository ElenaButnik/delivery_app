import s from "./ShopCard.module.css";

export function ShopCard({ item }) {
  return (
    <>
      <div className={s.list}>
        <span className={s.productItem}>{item.name}</span>
      </div>
    </>
  );
}
