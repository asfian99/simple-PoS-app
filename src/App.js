import { useState } from "react";
import List from "./components/List";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [sum, setSum] = useState("");
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPrice = Number(price);
    const newSum = Number(sum);
    const sumPrice = newPrice * newSum;
    const newItem = {
      id: new Date().getTime().toString(),
      name,
      price: newPrice,
      sum: newSum,
      sumPrice,
    };
    setTotal(total + sumPrice);
    setCart([...cart, newItem]);
    setName("");
    setPrice("");
    setSum("");
  };

  return (
    <div className="App">
      Hello
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">nama barang</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="price">harga</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="sum">Jumlah</label>
        <input
          type="number"
          name="sum"
          value={sum}
          onChange={(e) => setSum(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      <List items={cart} />
      <footer>
        <h1>Jumlah : {total}</h1>
      </footer>
    </div>
  );
}

export default App;
