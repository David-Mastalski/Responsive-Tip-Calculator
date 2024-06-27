import styles from "./Input.module.scss";

export function Input({ id, value, icon, isError, register, options }) {
  return (
    <label
      htmlFor="bill"
      className={`${styles.inputWrapper} ${isError ? styles.error : ""}`}
    >
      <span className={styles.icon}>{icon}</span>
      <input
        type="number"
        id={id}
        value={value}
        placeholder="0"
        {...register(`${id}`, options)}
      />
    </label>
  );
}
