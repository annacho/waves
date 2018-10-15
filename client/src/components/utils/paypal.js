import React, { Component } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

class Paypal extends Component {
  render() {

    const onSuccess = (payment) => {
      // console.log(JSON.stringify(payment));
      this.props.onSuccess(payment)

// this was an object, not stringify.
      // {
      //   "paid": true,
      //   "cancelled": false,
      //   "payerID": "3GFGQ6GNJ4PWA",
      //   "paymentID": "",
      //   "paymentToken": "",
      //   "returnUrl": "",
      //   "address": {
      //     "recipient_name": "",
      //     "line1": "",
      //     "city": "",
      //     "state": "",
      //     "postal_code": "",
      //     "country_code": "",
      //   },
      //   "email": ""
      // }

    }

    const onCancel = (data) => {
      console.log(JSON.stringify(data))
    }

    const onError = (err) => {
      console.log(JSON.stringify(err))
    }

    let env = 'sandbox';
    let currency = 'USD';
    let total = this.props.toPay;

    const client = {
      sandbox:'AcuddMeem1gORT7GvliYGRJBo4hbN2OVfrk1cPF2v5UDIyCtjccBqCBlvpYMj90e03obSWVHX0_0jYEA',
      production:''
    }

    return (
      <div>
        <PaypalExpressBtn
          env={env}
          client={client}
          currency={currency}
          total={total}
          onError={onError}
          onSuccess={onSuccess}
          onCancel={onCancel}
          style={{
            size: 'large',
            color: 'blue',
            shape: 'rect',
            label: 'checkout'
          }}

        />
      </div>
    );
  }
}

export default Paypal;
