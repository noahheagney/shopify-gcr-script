window.renderOptIn = function() {
  window.gapi.load('surveyoptin', function() {
    window.gapi.surveyoptin.render({
      merchant_id: 573635580,
      order_id: "{{ checkout.order_number }}",
      email: "{{ checkout.email }}",
      delivery_country: "{{ checkout.shipping_address.country_code }}",
      estimated_delivery_date: "{{ 'now' | date: '%Y-%m-%d' | plus: 7 }}"
    });
  });
};

(function() {
  var s = document.createElement('script');
  s.src = 'https://apis.google.com/js/platform.js?onload=renderOptIn';
  s.async = true;
  s.defer = true;
  document.head.appendChild(s);
})();
