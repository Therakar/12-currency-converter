import logo from "./logo.svg";
import "./App.css";
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  return (
    <div className="box">
      <h2>Currency Converter</h2>
      <div className="inputbox">
        <input type="text" />
        <select>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <select>
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
