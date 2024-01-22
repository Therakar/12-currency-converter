import { useState } from "react";
import "./App.css";
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  //state
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("EUR");

  return (
    <div className="box">
      <h2>Currency Converter</h2>
      <div className="inputbox">
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
      </div>

      <p>OUTPUT</p>
    </div>
  );
}
