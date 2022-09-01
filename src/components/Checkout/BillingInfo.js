import React from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../../hooks/use-input';
import Button from '../UI/Button';
import { cartActions } from '../../store/cart-slice';

const isEmpty = (value) => value.trim() !== "";
const isSixChar = (value) => value.length === 6;
const BillingInfo = () => {
    const dispatch = useDispatch();

    //array of Cart items
    const {
        enteredValue: enteredFirstName,
        valueIsValid: firstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        valueBlurHandler: firstNameBlurHandler,
        reset: firstNameReset,
    } = useInput(isEmpty);
    const {
        enteredValue: enteredLastName,
        valueIsValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        valueBlurHandler: lastNameBlurHandler,
        reset: lastNameReset,
    } = useInput(isEmpty);
    const {
        enteredValue: enteredEmail,
        valueIsValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        valueBlurHandler: emailBlurHandler,
        reset: emailReset,
    } = useInput(isEmpty);
    const {
        enteredValue: enteredCountry,
        valueIsValid: countryIsValid,
        hasError: countryHasError,
        valueChangeHandler: countryChangeHandler,
        valueBlurHandler: countryBlurHandler,
        reset: countryReset,
    } = useInput(isEmpty);
    const {
        enteredValue: enteredAddress,
        valueIsValid: addressIsValid,
        hasError: addressHasError,
        valueChangeHandler: addressChangeHandler,
        valueBlurHandler: addressBlurHandler,
        reset: addressReset,
    } = useInput(isEmpty);
    const {
        enteredValue: enteredCity,
        valueIsValid: cityIsValid,
        hasError: cityHasError,
        valueChangeHandler: cityChangeHandler,
        valueBlurHandler: cityBlurHandler,
        reset: cityReset,
    } = useInput(isEmpty);
    const {
        enteredValue: enteredZip,
        valueIsValid: zipIsValid,
        hasError: zipHasError,
        valueChangeHandler: zipChangeHandler,
        valueBlurHandler: zipBlurHandler,
        reset: zipReset,
    } = useInput(isSixChar);
    const {
        enteredValue: enteredMobile,
        valueIsValid: mobileIsValid,
        hasError: mobileHasError,
        valueChangeHandler: mobileChangeHandler,
        valueBlurHandler: mobileBlurHandler,
        reset: mobileReset,
    } = useInput(isEmpty);



    let formIsValid;
    if (firstNameIsValid &&
        lastNameIsValid &&
        emailIsValid &&
        countryIsValid &&
        addressIsValid &&
        cityIsValid &&
        zipIsValid &&
        mobileIsValid) {
        formIsValid = true;
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        if (formIsValid) {
            const userBilligInfo = {
                firstName: enteredFirstName,
                lastName: enteredLastName,
                email: enteredEmail,
                country: enteredCountry,
                address: enteredAddress,
                city: enteredCity,
                zip: enteredZip,
                mobileNo: enteredMobile
            };
            dispatch(cartActions.addUserDataToCart(userBilligInfo));

        };
    };

    return (
        <section className='p-8 w-full'>
            <h1 className='mb-8 border-b text-3xl uppercase font-[700] w-[50%]'>Billing/Delivery Address</h1>
            <div>
                <form onSubmit={submitHandler}>
                    <div className='flex items-center mb-4'>
                        <label className='w-[150px]'>First Name</label>
                        <input className={
                            `border ml-24 h-12 pl-2 w-[350px] outline-none
                            ${!firstNameHasError && 'border-gray-900'} 
                            ${firstNameHasError && 'border-red-300 border-4'}
                         `}
                            type='text'
                            onChange={firstNameChangeHandler}
                            onBlur={firstNameBlurHandler}
                            value={enteredFirstName}
                        />
                    </div>
                    <div className='flex items-center mb-4'>
                        <label className='w-[150px]'>Last Name</label>
                        <input className={
                            `border ml-24 h-12 pl-2 w-[350px] outline-none
                            ${!lastNameHasError && 'border-gray-900'} 
                            ${lastNameHasError && 'border-red-300 border-4'}
                         `}
                            type='text'
                            onChange={lastNameChangeHandler}
                            onBlur={lastNameBlurHandler}
                            value={enteredLastName}
                        />
                    </div>
                    <div className='flex items-center mb-4'>
                        <label className='w-[150px]'>Email</label>
                        <input className={
                            `border ml-24 h-12 pl-2 w-[350px] outline-none
                            ${!emailHasError && 'border-gray-900'} 
                            ${emailHasError && 'border-red-300 border-4'}}
                         `}
                            type='email'
                            onChange={emailChangeHandler}
                            onBlur={emailBlurHandler}
                            value={enteredEmail}
                        />
                    </div>
                    <div className='flex items-center mb-4'>
                        <label className='w-[150px]'>Country</label>
                        <input className={
                            `border ml-24 h-12 pl-2 w-[350px] outline-none
                            ${!countryHasError && 'border-gray-900'} 
                            ${countryHasError && 'border-red-300 border-4'}
                         `}
                            type='text'
                            onChange={countryChangeHandler}
                            onBlur={countryBlurHandler}
                            value={enteredCountry}
                        />
                    </div>
                    <div className='flex items-center mb-4'>
                        <label className='w-[150px]'>Address Line</label>
                        <input className={
                            `border ml-24 h-12 pl-2 w-[350px] outline-none
                            ${!addressHasError && 'border-gray-900'} 
                            ${addressHasError && 'border-red-300 border-4'}
                         `}
                            type='address'
                            onChange={addressChangeHandler}
                            onBlur={addressBlurHandler}
                            value={enteredAddress}
                        />
                    </div>
                    <div className='flex items-center mb-4'>
                        <label className='w-[150px]'>City/Suburb</label>
                        <input className={
                            `border ml-24 h-12 pl-2 w-[350px] outline-none
                            ${!cityHasError && 'border-gray-900'} 
                            ${cityHasError && 'border-red-300 border-4'}
                         `}
                            type='text'
                            onChange={cityChangeHandler}
                            onBlur={cityBlurHandler}
                            value={enteredCity}
                        />
                    </div>
                    <div className='flex items-center mb-4'>
                        <label className='w-[150px]'>Zip/Postal Code</label>
                        <input className={
                            `border ml-24 h-12 pl-2 w-[350px] outline-none
                            ${!zipHasError && 'border-gray-900'} 
                            ${zipHasError && 'border-red-300 border-4'}
                         `}
                            type='text' inputMode='numeric'
                            onChange={zipChangeHandler}
                            onBlur={zipBlurHandler}
                            value={enteredZip}
                        />
                    </div>
                    <div className='flex items-center mb-4'>
                        <label className='w-[150px]'>Mobile Phone No</label>
                        <input className={
                            `border ml-24 h-12 pl-2 w-[350px] outline-none
                            ${!mobileHasError && 'border-gray-900'} 
                            ${mobileHasError && 'border-red-300 border-4'}
                         `}
                            type='tel'
                            onChange={mobileChangeHandler}
                            onBlur={mobileBlurHandler}
                            value={enteredMobile}
                        />
                    </div>
                    <div className='w-full md:w-[50%]'>
                        <Button onSubmit={submitHandler} disabled={!formIsValid}>Submit</Button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default BillingInfo;
