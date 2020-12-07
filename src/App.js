import { useState } from "react";
import List from "./components/List";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [sum, setSum] = useState(1);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [paid, setPaid] = useState(0);
  const [cashback, setCashback] = useState(0);

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
    setSum(1);
  };

  const handleConfirm = (e) => {
    e.preventDefault();

    if (paid >= total) {
      setCashback(paid - total);
    }
  };

  return (
    <div className="App">
      Hello
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">nama barang</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="price">harga</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="sum">Jumlah</label>
        <input
          type="number"
          id="sum"
          value={sum}
          onChange={(e) => setSum(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      <List items={cart} />
      <footer>
        <form onSubmit={handleConfirm}>
          <p>Total yang harus dibayar : Rp {total}</p>
          <div>
            <label htmlFor="paid">Uang Dibayarkan</label>
            <input
              type="number"
              id="paid"
              value={paid}
              onChange={(e) => setPaid(e.target.value)}
            />
          </div>
          <button type="submit">Konfirmasi</button>
          <p>Total Kembalian : Rp {cashback}</p>
        </form>
      </footer>
    </div>
  );
}

export default App;
