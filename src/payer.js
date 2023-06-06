
import React, { useState } from 'react'

export default function Payer() {
 const [textref, setTextref] = useState()
const submitter=(e)=>{
  e.preventDefault();
  alert(textref)

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "CHASECK_TEST-Wm1IEDC5iAcCIRD8MlrfiCX9djFyGz66");
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    "amount": "100",
    "currency": "ETB",
    "email": "abebech_bekele@gmail.com",
    "first_name": "Bilen",
    "last_name": "Gizachew",
    "phone_number": "0912345678",
    "tx_ref": textref,
    "callback_url": "https://api.chapa.co/v1/transaction/initialize",
    "return_url": "https://www.google.com/",
    "customization[title]": "Payment for my favourite merchant",
    "customization[description]": "I love online payments"
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://api.chapa.co/v1/transaction/initialize", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
  return (
    <div>
      <h1>payer</h1>
      <form action="" onSubmit={(e)=>submitter(e)}>
      <label htmlFor="inp">ref</label>
        <input type="text" name='inp' onChange={(e)=>setTextref(e.target.value)} />
      </form>
    </div>
  )
}
