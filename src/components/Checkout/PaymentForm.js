
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { BsRecordCircle } from 'react-icons/bs'
import useInput from '../../hooks/use-input'
import visa from '../../assets/visa.png'
import Button from '../UI/Button';

const isNotEmpty = value => value.trim(" ") !== "";
const charOf16 = value => value.trim(" ").length === 16;
const charOf3 = value => value.trim(" ").length === 3;

const PaymentForm = (submitHandler) => {
    const cartItems = useSelector(state => state.cart.items);
    const userData = useSelector(state => state.cart.userInfo);

    const [submitting, setIsSubmitting] = useState(false);
    const [httpError, setHttpError] = useState(null)

    const {
        enteredValue: cardName,
        valueIsValid: cardNameIsValid,
        hasError: cardNameHasError,
        valueChangeHandler: cardNameChangeHandler,
        valueBlurHandler: cardNameBlurHandler,
    } = useInput(isNotEmpty);

    const {
        enteredValue: cardNumber,
        valueIsValid: cardNumberIsValid,
        hasError: cardNumberHasError,
        valueChangeHandler: cardNumberChangeHandler,
        valueBlurHandler: cardNumberBlurHandler,
    } = useInput(charOf16);

    const {
        enteredValue: cvv,
        valueIsValid: cvvIsValid,
        hasError: cvvHasError,
        valueChangeHandler: cvvChangeHandler,
        valueBlurHandler: cvvBlurHandler,
    } = useInput(charOf3);

    const {
        enteredValue: expiryDate,
        valueIsValid: expiryDateIsValid,
        valueChangeHandler: expiryDateChangeHandler,
        valueBlurHandler: expiryDateBlurHandler,
    } = useInput(isNotEmpty);


    let formIsValid;
    if (cardNameIsValid && cardNumberIsValid && cvvIsValid && expiryDateIsValid) {
        formIsValid = true;
    }


    submitHandler = async (event) => {
        event.preventDefault();
        if (formIsValid) {
            try {
                await fetch('https://landing-page-6409c-default-rtdb.firebaseio.com/orders.json', {
                    method: 'POST',
                    body: JSON.stringify({
                        userBilligInfo: userData,
                        orderedItems: cartItems,
                        paymentStatus: "successful",
                    }),
                });
            } catch (error) {
                console.log(error);
            }
        }
        console.log(cardName, cardNumber, expiryDate, cvv);

    }

    return (
        <form className='border border-gray-200 ' onSubmit={submitHandler} >
            <div className='flex items-center  p-2 bg-gray-200'>
                <span><BsRecordCircle size={20} /></span>
                <h1 className='font-[700] text-lg ml-2 flex justify-between items-center w-full'>
                    credit/debit card <span>
                        <img className='h-8' src={visa} alt='visa' /></span>
                </h1>
            </div>
            <div className='p-8'>
                <div className='flex flex-col my-4'>
                    <label>Name on card</label>
                    <input className={`border h-12 pl-2 outline-none border-gray-900
                    ${!cardNameHasError && 'border-gray-900'} 
                    ${cardNameHasError && 'border-red-300 border-4'}
                    `}
                        type='text' placeholder='Name on card'
                        value={cardName}
                        onChange={cardNameChangeHandler}
                        onBlur={cardNameBlurHandler}
                    />
                </div>
                <div className='flex flex-col my-4'>
                    <label>Card number</label>
                    <input className={`border h-12  pl-2 outline-none border-gray-900
                    ${!cardNumberHasError && 'border-gray-900'} 
                    ${cardNumberHasError && 'border-red-300 border-4'}
                    `}
                        type="tel" inputMode="numeric" maxLength="16"
                        placeholder='XXXX XXXX XXXX XXXX'
                        value={cardNumber}
                        onChange={cardNumberChangeHandler}
                        onBlur={cardNumberBlurHandler}
                    />
                </div>
                <div className='flex w-full justify-between items-center my-4'>
                    <div className='flex flex-col w-full'>
                        <label>CVC/CVV</label>
                        <input className={`border h-12  pl-2 outline-none border-gray-900 w-[90%]
                    ${!cvvHasError && 'border-gray-900'} 
                    ${cvvHasError && 'border-red-300 border-4'}
                    `}
                            type='text' inputMode='numeric' placeholder='CVC'
                            maxLength={3}
                            value={cvv}
                            onChange={cvvChangeHandler}
                            onBlur={cvvBlurHandler}
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label>Expiry date</label>
                        <input className='border h-12  pl-2 outline-none border-gray-900'
                            type='month' min="2019-01" placeholder='MM/YY' value={expiryDate}
                            onChange={expiryDateChangeHandler}
                            onBlur={expiryDateBlurHandler}
                        />
                    </div>
                </div>
            </div>
            <Button disabled={!formIsValid}>
                Complete Checkout
            </Button>
        </form>
    )
}

export default PaymentForm
