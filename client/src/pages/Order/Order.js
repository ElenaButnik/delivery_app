import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../redux/orders/selectors';
import { OrderCard } from '../../components/OrderCard/OrderCard';
import { getThunkDataOrders } from '../../redux/orders/thunks';
import s from './Orders.module.css';

export function Orders() {
  const dispatch = useDispatch();
  const orders = useSelector(getOrders);

  useEffect(() => {
    dispatch(getThunkDataOrders());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <h4 className={s.title}>my orders</h4>
      <ol reversed className={s.bullet}>
        {orders.length > 0 &&
          orders
            .map(order => (
              <li key={order.id} className={s.item}>
                <OrderCard order={order} />
              </li>
            ))
            .sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
            .slice(37)}
      </ol>
    </div>
  );
}