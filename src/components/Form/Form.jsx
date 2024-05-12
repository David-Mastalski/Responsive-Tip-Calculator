import styles from "./Form.module.scss";
import { useContext } from "react";
import { Input } from "../Input/Input";
import {
  BillContext,
  NumberOfPeopleContext,
  PeopleErrorContext,
} from "../../context/AppContext";
import { Tips } from "../Tips/Tips";

export function Form() {
  const [isError] = useContext(PeopleErrorContext);
  const [people, setPeople] = useContext(NumberOfPeopleContext);
  const [bill, setBill] = useContext(BillContext);

  return (
    <form className={styles.form}>
      <div className={styles["form__wrapper"]}>
        <div>
          <p className={styles["groupTitle"]}>Bill</p>
          <Input icon="$" value={bill} setter={setBill} />
        </div>
        <div>
          <p className={styles["groupTitle"]}>Select Tip %</p>
          <Tips />
        </div>
        <div>
          <div className={styles.errorWrapper}>
            <p className={styles["groupTitle"]}>Number of People</p>
            {isError && <p className={styles.error}>Can't be zero</p>}
          </div>
          <Input icon="#" isError={isError} value={people} setter={setPeople} />
        </div>
      </div>
    </form>
  );
}
