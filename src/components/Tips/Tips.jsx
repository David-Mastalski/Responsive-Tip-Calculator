import { useContext, useEffect } from "react";
import styles from "./Tips.module.scss";
import {
  CustomInputValueContext,
  SelectedTipContext,
  TipContext,
} from "../../context/AppContext";

export function Tips() {
  const [, setSelectedTip] = useContext(SelectedTipContext);
  const [tip, setTip] = useContext(TipContext);
  const [customValue, setCustomValue] = useContext(CustomInputValueContext);

  useEffect(() => {
    if (tip === "custom") {
      setSelectedTip(customValue === "" ? 0 : Number(customValue));
    } else {
      setSelectedTip(Number(tip));
    }
  }, [tip, customValue, setSelectedTip]);

  const handleRadioChange = (e) => {
    setTip(e.target.value);
  };

  return (
    <div className={styles.tilesGrid}>
      <div className={styles.tipAmount}>
        <input
          type="radio"
          id="tip-5"
          value="5"
          checked={tip === "5"}
          onChange={handleRadioChange}
        />
        <label
          htmlFor="tip-5"
          className={`${styles.tipButton} ${styles["tipButton--normal"]}`}
        >
          5%
        </label>
      </div>
      <div className={styles.tipAmount}>
        <input
          type="radio"
          id="tip-10"
          value="10"
          checked={tip === "10"}
          onChange={handleRadioChange}
        />
        <label
          htmlFor="tip-10"
          className={`${styles.tipButton} ${styles["tipButton--normal"]}`}
        >
          10%
        </label>
      </div>
      <div className={styles.tipAmount}>
        <input
          type="radio"
          id="tip-15"
          value="15"
          checked={tip === "15"}
          onChange={handleRadioChange}
        />
        <label
          htmlFor="tip-15"
          className={`${styles.tipButton} ${styles["tipButton--normal"]}`}
        >
          15%
        </label>
      </div>
      <div className={styles.tipAmount}>
        <input
          type="radio"
          id="tip-25"
          value="25"
          checked={tip === "25"}
          onChange={handleRadioChange}
        />
        <label
          htmlFor="tip-25"
          className={`${styles.tipButton} ${styles["tipButton--normal"]}`}
        >
          25%
        </label>
      </div>
      <div className={styles.tipAmount}>
        <input
          type="radio"
          id="tip-50"
          value="50"
          checked={tip === "50"}
          onChange={handleRadioChange}
        />
        <label
          htmlFor="tip-50"
          className={`${styles.tipButton} ${styles["tipButton--normal"]}`}
        >
          50%
        </label>
      </div>
      <div className={styles.tipAmount}>
        <input
          type="radio"
          id="tip-custom"
          value="custom"
          checked={tip === "custom"}
          onChange={handleRadioChange}
        />
        <label
          htmlFor="tip-custom"
          className={`${styles.tipButton} ${styles["tipButton--custom"]}`}
        >
          {tip === "custom" ? (
            <input
              type="number"
              value={customValue}
              placeholder="0"
              onChange={(e) =>
                setCustomValue(
                  e.target.value === "" ? 0 : e.target.valueAsNumber
                )
              }
              className={styles.customInput}
            />
          ) : (
            "Custom"
          )}
        </label>
      </div>
    </div>
  );
}
