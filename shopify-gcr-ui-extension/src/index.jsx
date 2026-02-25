import {extend, OrderStatus} from '@shopify/checkout-ui-extensions-react';

extend('Checkout::PostPurchase::Render', (root, {order}) => {
  const script = document.createElement('script');
  script.src = 'https://shopify-gcr-script.vercel.app/gcr.js'; // your Vercel script URL
  script.async = true;
  script.defer = true;

  script.onload = () => {
    if (window.renderOptIn) {
      window.renderOptIn({
        order_id: order.id,
        email: order.customer?.email,
        delivery_country: order.shippingAddress?.countryCode,
        estimated_delivery_date: new Date(Date.now() + 7*24*60*60*1000) // 7 days from now
      });
    }
  };

  root.appendChild(script);
});
