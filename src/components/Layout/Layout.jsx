import styles from "./Layout.module.scss";
import { Form } from "../Form/Form";
import { useEffect, useState } from "react";
import {
  BillContext,
  CustomInputValueContext,
  NumberOfPeopleContext,
  PeopleErrorContext,
  SelectedTipContext,
  TipContext,
} from "../../context/AppContext";
import { Display } from "../Display/Display";

export function Layout() {
  const [bill, setBill] = useState("");
  const [selectedTip, setSelectedTip] = useState(5);
  const [tip, setTip] = useState(String(selectedTip));
  const [customValue, setCustomValue] = useState("");
  const [people, setPeople] = useState("");
  const [isError, setIsError] = useState(false);
  const [tipAmout, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    handleSetError();
  }, [people]);

  useEffect(() => {
    handleSubmit();
  }, [bill, selectedTip, people]);

  const handleSubmit = () => {
    if (bill !== "" && people !== "") {
      const percent = selectedTip / 100;
      let personTipAmount = (bill * percent) / people;
      personTipAmount = personTipAmount.toFixed(2);

      let totalValue = (bill + bill * percent) / people;
      totalValue = totalValue.toFixed(2);
      setTipAmount(personTipAmount);
      setTotal(totalValue);
    }
  };

  const handleReset = () => {
    setBill("");
    setSelectedTip(5);
    setTip("5");
    setCustomValue("");
    setPeople("");
    setIsError(false);
    setTipAmount(0);
    setTotal(0);
  };

  const handleSetError = () => {
    if (people === 0) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  return (
    <BillContext.Provider value={[bill, setBill]}>
      <SelectedTipContext.Provider value={[selectedTip, setSelectedTip]}>
        <TipContext.Provider value={[tip, setTip]}>
          <CustomInputValueContext.Provider
            value={[customValue, setCustomValue]}
          >
            <NumberOfPeopleContext.Provider value={[people, setPeople]}>
              <PeopleErrorContext.Provider value={[isError, setIsError]}>
                <div className={styles.layout}>
                  <Form />
                  <Display
                    tipAmout={tipAmout}
                    total={total}
                    handleReset={handleReset}
                  />
                </div>
              </PeopleErrorContext.Provider>
            </NumberOfPeopleContext.Provider>
          </CustomInputValueContext.Provider>
        </TipContext.Provider>
      </SelectedTipContext.Provider>
    </BillContext.Provider>
  );
}
