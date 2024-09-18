const scriptURL = 'https://script.google.com/macros/s/AKfycbw0GRHrwtxwmiP6KlnpTc1pzuKv2jASzhNXz-cB6jN62GiFYC-UdV03-BkfdlJlN6e7pw/exec'
const form = document.forms['submit-to-google-sheet-msg']
const msgtr = document.getElementById('msgtr');
const msgr = document.getElementById('msgr');
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msgr.innerHTML = "Message Sent."
        setTimeout(function(){
                msgr.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
    })
    
    if (msgr.innerHTML == "") {
      function timemsg(){
        msgtr.innerHTML = "Sending....."
        setTimeout(function(){
                msgtr.innerHTML = ""
        },3000)
    }}
