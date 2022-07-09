import s from './Form.module.css';

export function CartForm() {
  return (
  
    <form className={s.form}>
        <label className={s.label}>
        Name:
        <input type="text" name="name" required/>
      </label>
      <label className={s.label}>
        Email:
        <input type="text" name="email" required/>
      </label>
      <label className={s.label}>
        Phone:
        <input type="text" name="phone" required/>
      </label>
      <label className={s.label}>
        Adress:
        <input type="text" name="adress" required/>
      </label>
    </form>
  );
}
