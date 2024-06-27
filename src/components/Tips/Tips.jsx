import styles from "./Tips.module.scss";

export function Tips({ register, options, customValue, selectedTip }) {
  return (
    <div className={styles.tilesGrid}>
      {["5", "10", "15", "25", "50"].map((tipValue) => (
        <div key={tipValue} className={styles.tipAmount}>
          <input
            type="radio"
            id={`tip-${tipValue}`}
            value={tipValue}
            name="tip"
            checked={selectedTip === tipValue}
            {...register("amount")}
          />
          <label
            htmlFor={`tip-${tipValue}`}
            className={`${styles.tipButton} ${styles["tipButton--normal"]}`}
          >
            {tipValue}%
          </label>
        </div>
      ))}
      <div className={styles.tipAmount}>
        <input
          type="radio"
          id="tip-custom"
          value="custom"
          name="tip"
          {...register("amount")}
          checked={selectedTip === "custom"}
        />
        {selectedTip === "custom" ? (
          <input
            type="number"
            value={customValue}
            placeholder="0"
            {...register("custom", options)}
            className={styles.customInput}
          />
        ) : (
          <label
            htmlFor="tip-custom"
            className={`${styles.tipButton} ${styles["tipButton--custom"]}`}
          >
            Custom
          </label>
        )}
      </div>
    </div>
  );
}

{
  /* <div className={styles.tipAmount}>
        <input
          type="radio"
          id="tip-custom"
          value="custom"
          name="tip"
          checked={selectedTip === "custom"}
        />
        <label
          htmlFor="tip-custom"
          className={`${styles.tipButton} ${styles["tipButton--custom"]}`}
        >
          {selectedTip === "custom" ? (
            <input
              type="number"
              name="tip"
              placeholder="0"

              className={styles.customInput}
            />
          ) : (
            "Custom"
          )}
        </label>
      </div> */
}
