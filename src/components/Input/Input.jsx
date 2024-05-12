import styles from "./Input.module.scss";

export function Input({ icon, isError, value, setter }) {
  const handleOnChange = (e) => {
    setter(e.target.value === "" ? "" : e.target.valueAsNumber);
  };

  return (
    <label
      htmlFor="bill"
      className={`${styles.inputWrapper} ${isError ? styles.error : ""}`}
    >
      <span className={styles.icon}>{icon}</span>
      <input
        type="number"
        id="bill"
        value={value}
        onChange={handleOnChange}
        placeholder="0"
      />
    </label>
  );
}
