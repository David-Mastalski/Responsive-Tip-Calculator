import styles from "./Layout.module.scss";
import { Display } from "../Display/Display";
import { Input } from "../Input/Input";
import { Tips } from "../Tips/Tips";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export function Layout() {
  const { register, watch, reset } = useForm({
    defaultValues: {
      bill: "",
      people: "",
      amount: "5",
      custom: "",
    },
  });

  const bill = watch("bill");
  const people = watch("people");
  const tip = watch("amount");
  const customTipValue = watch("custom");

  const [tipAmountForPerson, setTipAmountForPerson] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const validateTip = tip === "custom" ? customTipValue : tip;

    if (people !== "0") {
      if (bill && validateTip !== "" && people !== "") {
        const percent = Number(validateTip) / 100;
        let personTipAmount = (Number(bill) * Number(percent)) / Number(people);
        personTipAmount = personTipAmount.toFixed(2);

        let totalValue =
          (Number(bill) + Number(bill) * Number(percent)) / Number(people);
        totalValue = totalValue.toFixed(2);

        setTipAmountForPerson(personTipAmount);
        setTotal(totalValue);
      }
    }
  }, [bill, people, customTipValue, tip]);

  const handleReset = () => {
    reset();
    setTipAmountForPerson(0);
    setTotal(0);
  };

  return (
    <>
      <div className={styles.layout}>
        <form className={styles.form}>
          <div className={styles["form__wrapper"]}>
            <div>
              <p className={styles["groupTitle"]}>Bill</p>
              <Input id="bill" value={bill} icon="$" register={register} />
            </div>
            <div>
              <p className={styles["groupTitle"]}>Select Tip %</p>
              <Tips
                register={register}
                options={{
                  setValueAs: (v) => {
                    if (v === "" || /^0+$/.test(v)) {
                      return "0";
                    }
                    return v.replace(/^0+/, "");
                  },
                }}
                customValue={customTipValue}
                selectedTip={tip}
              />
            </div>
            <div>
              <div className={styles.errorWrapper}>
                <p className={styles["groupTitle"]}>Number of People</p>
                {people === "0" && (
                  <p className={styles.error}>Can't be zero</p>
                )}
              </div>
              <Input
                id="people"
                value={people}
                icon="#"
                register={register}
                options={{
                  setValueAs: (v) => {
                    if (v === "" || /^0+$/.test(v)) {
                      return "0";
                    }
                    return v.replace(/^0+/, "");
                  },
                }}
                isError={people === "0"}
              />
            </div>
          </div>
        </form>
        <Display
          tipAmount={tipAmountForPerson}
          totalAmount={total}
          handleReset={handleReset}
        />
      </div>
    </>
  );
}
