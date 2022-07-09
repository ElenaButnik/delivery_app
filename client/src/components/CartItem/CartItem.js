import { AiOutlineCloseCircle } from 'react-icons/ai';
import s from './CartItem.module.css';

export default function CartItem({
  name,
  price,
  totalPrice,
  totalCount,
  onRemove,
  onMinus,
  onPlus,
}) {
  return (
    <tr>
      <td>{name}</td>
      <td>
        <button type="button" onClick={onMinus} className={s.btn}>
          -
        </button>
        <b>{totalCount}</b>
        <button type="button" onClick={onPlus} className={s.btn}>
          +
        </button>
      </td>
      <td>{price}</td>
      <td>{totalPrice}</td>
      <td>{totalCount}</td>
      <td>
        <AiOutlineCloseCircle onClick={onRemove} className={s.icon} />
      </td>
    </tr>
  );
}