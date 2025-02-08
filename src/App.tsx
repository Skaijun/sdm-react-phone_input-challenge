import { useState } from 'react'
import './App.css'

function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [inputErrorMsg, setInputErrorMsg] = useState('');

  function handleChange(input: string) {
    let timer = null;
    if (timer) {
      clearTimeout(timer);
      setInputErrorMsg('');
    }

    if (!input || !input.trim()) {
      setPhoneNumber('')
      return null;
    }

    let formattedInput = input.replace(/\)/g, '').replace(/\(/g, '').replace(/-/g, '').replace(/ /g, '');

    if (isNaN(Number(formattedInput))) {
      return null;
    }

    if (formattedInput.length > 10) {
      setInputErrorMsg('Max phone number length: 10 digits!');
      timer = setTimeout(() => {
        setInputErrorMsg('');
      }, 3000);

      return null;
    }

    // phone number example: (999)1234-123
    if (formattedInput.length >= 8) {
      // 123 4567 8
      formattedInput = '( ' + formattedInput.substring(0, 3) + ' ) ' + formattedInput.substring(3, 7) + ' - ' + formattedInput.substring(7);
    } else if (formattedInput.length >= 4) {
      // 123 4
      formattedInput = '( ' + formattedInput.substring(0, 3) + ' ) ' + formattedInput.substring(3, 7);
    } else {
      // 12
      formattedInput = formattedInput.length > 0 ? '( ' + formattedInput : '';
    }

    setPhoneNumber(formattedInput)
  }


  return <>
    <label>Phobe Number</label>
    <input type="tel" onChange={(e) => handleChange(e.target.value)} value={phoneNumber} />
    <div className='invalid-input-message'>{inputErrorMsg}</div>
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
