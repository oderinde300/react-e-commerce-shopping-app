import { useState } from "react";

const useInput = (validate) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validate(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };
    const valueBlurHandler = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    };

    return ({
        enteredValue,
        isTouched,
        valueIsValid,
        hasError,
        valueChangeHandler,
        valueBlurHandler,
        reset,

    })
};

export default useInput;