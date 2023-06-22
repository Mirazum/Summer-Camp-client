import { Elements } from "@stripe/react-stripe-js";
import useOrder from "../../../hooks/UseClasses/useOrder";
import CheckoutFrom from "./CheckoutFrom";
import { loadStripe } from "@stripe/stripe-js";
const striptPKkey=import.meta.env.VITE_Payment_Gateway_PK
console.log(striptPKkey)
const stripePromise = loadStripe(striptPKkey);
const PaymentHistory = () => {
    const [order]=useOrder()
    console.log(order, "useOrder")
    const total = order.reduce((sum, item) => sum + item.price, 0);
       const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <h2 className="text-warning text-4xl font-bold text-center p-4 my-10">Payment history</h2>
            <Elements stripe={stripePromise}>
                <CheckoutFrom cart={order} price={price} ></CheckoutFrom>
            </Elements>
        </div>
    );
};

export default PaymentHistory;