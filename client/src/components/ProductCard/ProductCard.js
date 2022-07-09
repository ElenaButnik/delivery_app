import s from "./ProductCard.module.css";

export function ProductCard({ item, addToCart }) {
  return (
    <>
      <div className={s.item}>
        <div className={s.content}>
          <img
            alt={item}
            width={300}
            height={300}
            src={process.env.REACT_APP_API_URL + item.img}
          />
          <p className={s.productItem}>{item.name}</p>
          <p>Price: {item.price}</p>
        </div>
        <button
          type="submit"
          onClick={() => {
            addToCart(item);
          }}
          className={s.button}
        >
          <p className={s.buttonText}>add to cart</p>
        </button>
      </div>
    </>
  );
}
