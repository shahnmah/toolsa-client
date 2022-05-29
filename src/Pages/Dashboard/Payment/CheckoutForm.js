import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';

const CheckoutForm = ({ purchaseItems }) => {
    const [displayCardError, setDisplayCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId , setTransactionId ] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const { _id,amount, name, email } = purchaseItems;
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ amount })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })

    }, [amount])
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setDisplayCardError(error?.message)
        }
        else {
            setDisplayCardError('')
        }
        setSuccess('')
        // confirm payment
        const { paymentIntent, error: paymentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );
        if (paymentError) {
            setDisplayCardError(paymentError?.message)
        }
        else {
            setDisplayCardError('')
            console.log(paymentIntent)
            setSuccess('Your payment is completed')
            setTransactionId(paymentIntent.id)

            // update payment info database 
            const payment ={
                transactionId: paymentIntent.id
            }
            fetch(`http://localhost:5000/purchase/${_id}`,{
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ payment })
            })
            .then(res => res.json())
            .then(data => {
               console.log(data)
            })
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" style={{ backgroundColor: '#3366cc' }} className='btn btn-sm text-white px-3 my-3 mx-1' disabled={!stripe || !clientSecret}>
                Pay
            </button>
            {
                displayCardError && <p className='text-danger'>{displayCardError}</p>
            }
            {
                success && <p className='text-success'>{success}</p>
            }
            {
                success && <p className='text-primary fw-bold'>Transaction ID: {transactionId}</p>
            }
        </form>
    );
};

export default CheckoutForm;