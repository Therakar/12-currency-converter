import { useEffect, useState } from "react";
import "./App.css";
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  //state
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function convert() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
        );
        const data = await res.json();
        setOutput(data.rates[toCurrency]);
        setIsLoading(false);
      }
      convert();
    },
    [amount, fromCurrency, toCurrency]
  );

  return (
    <div className="box">
      <h2>Currency Converter</h2>
      <div className="inputbox">
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          disabled={isLoading}
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          disabled={isLoading}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          disabled={isLoading}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
      </div>
      {isLoading ? (
        <p>CALCULATING...</p>
      ) : (
        <p>
          {output} {toCurrency}
        </p>
      )}
    </div>
  );
}
