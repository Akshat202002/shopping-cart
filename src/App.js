import "./App.css";
import Cart from "./Cart";

const items = [
  { id: 1, name: "Cashews", price: 2.25, qty: 2 },
  { id: 2, name: "Chocolates", price: 1.99, qty: 3 },
  { id: 3, name: "Strawberries", price: 3.5, qty: 10 },
];

function App() {
  return <Cart item={items} />;
}

export default App;
