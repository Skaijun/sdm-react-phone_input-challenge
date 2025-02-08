import { useState } from 'react'
import './App.css'

function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState('');

  function handleChange(input: string) {
    if (!input || !input.trim()) {
      return;
    }

    let formattedInput = input.trim();

  }


  return <>
    <label>Phobe Number</label>
    <input type="tel" onChange={(e) => handleChange(e.target.value)} value={phoneNumber} />
  </>
}

function App() {
  return (
    <>
      <h1>Formatted Phone Input Challenge</h1>
      <div className="phone-number-wrapper">
        <PhoneNumberInput />
      </div>
    </>
  )
}

export default App
