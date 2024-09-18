const scriptURL = 'https://script.google.com/macros/s/AKfycbxqMJET3sPMdoM9i2WP4A9nOOEu8PjJlENFNfmqqIt-P-kx-bDFASkVcl6IHzAqUc2qrw/exec'
const form = document.forms['submit-to-google-sheet-acc']
const msgt = document.getElementById('msgt');
const msg = document.getElementById('msg');
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Recived."
        setTimeout(function(){
                msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
    })
    
    if (msg.innerHTML == "") {
      function time(){
        msgt.innerHTML = "Sending....."
        setTimeout(function(){
                msgt.innerHTML = ""
        },3000)
    }}
