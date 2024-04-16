import { PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

interface PayPalPaymentProps {
  formData: any; // Replace 'any' with the type of formData if possible
}

const PayPalPayment: React.FC<PayPalPaymentProps> = ({ formData }) => {
  const router = useRouter()



  const createOrder = async (data: any, actions: any) => {

    // Order is created on the server and the order id is returned
    const response = await fetch("http://localhost:5001/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart: [
          {
            sku: "YOUR_PRODUCT_STOCK_KEEPING_UNIT",
            quantity: 1,
            price: parseFloat(formData?.amount)
          },
        ],
      }),
    });
    const order = await response.json();

    return order.id
  };

  const onApprove = async (data: any, actions: any) => {

    // Order is captured on the server and the response is returned to the browser
    const response = await fetch(`http://localhost:5001/api/orders/${data.orderID}/capture`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID
      })
    }).then(res => res.json()).then((ResData) => {
      console.log(ResData)



   /*    toast.success('Payment Successful')
      router.push('/') */

    }).catch(err => console.log(err));


  };

  return (
    <div>
      <PayPalButtons
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)} />

    </div>
  );
};

export default PayPalPayment;