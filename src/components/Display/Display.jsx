import styles from "./Display.module.scss";

export function Display({ tipAmount, totalAmount, handleReset }) {
  return (
    <div className={styles.display}>
      <div className={styles["display__group"]}>
        <div className={styles["display__row"]}>
          <div className={styles["display__label"]}>
            <p className={styles.header}>Tip Amount</p>
            <p className={styles.unit}>/ person</p>
          </div>
          <p className={styles["display__amt"]}>${tipAmount}</p>
        </div>
        <div className={styles["display__row"]}>
          <div className={styles["display__label"]}>
            <p className={styles.header}>Total</p>
            <p className={styles.unit}>/ person</p>
          </div>
          <p className={styles["display__amt"]}>${totalAmount}</p>
        </div>
      </div>
      <button
        type="reset"
        onClick={handleReset}
        className={styles["display__resetBtn"]}
      >
        Reset
      </button>
    </div>
  );
}
