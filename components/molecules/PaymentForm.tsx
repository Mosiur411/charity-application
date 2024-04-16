import React, { useState, FormEvent } from 'react';
import toast from 'react-hot-toast';

const PaymentForm: React.FC = () => {


  const [formData, setFormData] = useState<{ [key: string]: string }>({ amount: '', email: '', name: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { amount, email, name } = formData;
    const optionData = {
      amount: amount,
      currency: "INR",
      receipt: "qwsaq1"

    }
   /*  let Live_Key_ID = "rzp_live_Y7aHoeciCEVfKd" */

    /*   */
    if (amount && email && name) {
      fetch('https://charity-application-server.vercel.app/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(optionData),
      })
        .then((response) => response.json())
        .then(async (data) => {
          var options = {
            key: 'rzp_live_Y7aHoeciCEVfKd',
            currency: "INR", // Enter the Key ID generated from the Dashboard
            amount: amount,
            // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            name: name, //your business name
            description: email,
            image: "https://i.ibb.co/FW0pB7W/donationimg.jpg",
            order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            handler: async function (data: any) {
              const body = {
                ...data,
              };
              const validateRes = await fetch(
                "https://charity-application-server.vercel.app/order/validate",
                {
                  method: "POST",
                  body: JSON.stringify(body),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
              const jsonRes = await validateRes.json();
              console.log("jsonRes", jsonRes);
            },
            prefill: {
              //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
              name: "Deshbhakt", //your customer's name
              email: "tech.deshbhakt@gmail.com",
              contact: "+91 8123781857", //Provide the customer's phone number for better conversion rates
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#3399cc",
            },
          };

          const rzp1 = new (window as any).Razorpay(options);
          rzp1.on("payment.failed", function (data: any) {
            alert(data.error.code);
            alert(data.error.description);
            alert(data.error.source);
            alert(data.error.step);
            alert(data.error.reason);
            alert(data.error.metadata.order_id);
            alert(data.error.metadata.payment_id);
          });
          rzp1.open();



        })
        .catch((error) => {
          toast.error('Error: ' + error.message);
        })
    }

  };

  return (
    <div className="form-style-one" data-aos="fade-up">


      <div className="container">
        <div className="row">

          <div className="col-xl-6 m-auto py-3">
            <label>Choose your plan:</label>
            <div className="d-flex flex-wrap mb-30 mt-10 gap-4">
              <button className="btn-twentyOne fw-500 tran3s" onClick={() => setFormData({ ...formData, amount: '1000' })}>
                1000
              </button>
              <button className="btn-twentyOne fw-500 tran3s" onClick={() => setFormData({ ...formData, amount: '5000' })}>
                5000
              </button>
              <button className="btn-twentyOne fw-500 tran3s" onClick={() => setFormData({ ...formData, amount: '10000' })}>
                10000
              </button>
              <button className="btn-twentyOne fw-500 tran3s" onClick={() => setFormData({ ...formData, amount: '50000' })}>
                50000
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="messages" />
              <div className="row controls">
                <div className="col-12">
                  <div className="input-group-meta form-group mb-30">
                    <input type="email" placeholder="Your Email *" name="email" value={formData.email} onChange={handleChange} required data-error="Email is required." />
                    <div className="help-block with-errors" />
                  </div>
                </div>

                <div className="col-12">
                  <div className="input-group-meta form-group mb-50">
                    <input type="text" placeholder="Name  *" name="name" value={formData.name} onChange={handleChange} required data-error="Valid Name is required." />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="col-12">
                    <div className="input-group-meta form-group mb-50">
                      <input
                        type="number"
                        placeholder="Amount *"
                        value={formData.amount}
                        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                        required
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    className='btn-twentyOne fw-500 tran3s mt-10'>Donation</button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};
export default PaymentForm;

