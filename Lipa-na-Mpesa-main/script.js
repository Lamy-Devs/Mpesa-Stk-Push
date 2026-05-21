document.addEventListener('DOMContentLoaded', function() {
    const payButton = document.getElementById('payButton');
    
    payButton.addEventListener('click', payWithPaystack);
    
    function payWithPaystack() {
      const ref = 'TICKET_' + Date.now();
      
      const handler = PaystackPop.setup({
        key: 'pk_live_a6a7b6c99eae2aecec47f303697111b1d5917a4a', 
        email: 'customer@example.com', 
        amount: 100*100, 
        currency: 'KES',
        ref: ref,
        label: "Lamycreatives",
        callback: function(response) {
          alert(`Payment successful! Reference: ${response.reference}`);
        },
        onClose: function() {
          alert('Payment was not completed. You can try again.');
        }
      });
      
      handler.openIframe();
    }
});