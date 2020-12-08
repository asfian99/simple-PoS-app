import { useState } from "react";
import List from "./List";
import EmptyAlert from "./EmptyAlert";
// import { data } from "../data/data";

const Home = ({ transHandler }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [sum, setSum] = useState(1);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [paid, setPaid] = useState(0);
  const [cashback, setCashback] = useState(0);
  const [transaction, setTransaction] = useState({});

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

  const handlePaid = (e) => {
    e.preventDefault();

    if (paid >= total) {
      setCashback(paid - total);
    } else {
      setCashback(-(total - paid));
    }

    setTransaction({
      id: new Date().getTime().toString(),
      items: cart,
      total,
      paid,
    });
    // console.log(transaction);
  };

  const handleConfirm = () => {
    // const newTransaction = JSON.stringify(transaction);
    transHandler({ ...transaction, cashback });
    setCart([]);
  };

  const deleteItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    const selectedItem = cart.find((item) => item.id === id);
    setTotal(total - selectedItem.sumPrice);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-2 mb-8 mx-auto flex flex-col">
        <div className="my-4 mx-auto flex flex-row gap-7">
          <div className="flex flex-col">
            <label className="uppercase font-medium" htmlFor="name">
              Nama Barang
            </label>
            <input
              type="text"
              id="name"
              className="p-1 border-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase font-medium" htmlFor="price">
              Harga (Rp)
            </label>
            <input
              type="number"
              id="price"
              className="p-1 border-2"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase font-medium" htmlFor="sum">
              Jumlah
            </label>
            <input
              type="number"
              id="sum"
              className="p-1 border-2"
              value={sum}
              onChange={(e) => setSum(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-1/5 py-2 mx-auto bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-md"
        >
          Tambahkan ke Keranjang
        </button>
      </form>
      {cart.length > 0 ? (
        <List items={cart} deleteItem={deleteItem} />
      ) : (
        <EmptyAlert />
      )}

      <footer className="mt-8 p-4 bg-indigo-100 rounded-xl">
        <form
          onSubmit={handlePaid}
          className="flex flex-col gap-4 text-lg font-medium"
        >
          <div className="flex flex-row justify-between">
            <p>Total yang harus dibayar : </p>
            <p>Rp {total}</p>
          </div>
          <div className="flex flex-row justify-between">
            <label htmlFor="paid" className="py-1">
              Uang Dibayarkan :
            </label>
            <div className="flex flex-row">
              <p className="p-1">Rp</p>
              <input
                type="number"
                id="paid"
                value={paid}
                className="p-1 border-2"
                onChange={(e) => setPaid(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md font-medium"
          >
            Bayar
          </button>
          <div className="flex flex-row justify-between">
            <p>Total Kembalian :</p>
            <p className={cashback < 0 ? `text-red-500` : null}>
              Rp {cashback}
            </p>
          </div>

          <button
            onClick={handleConfirm}
            className="py-2 bg-green-500 hover:bg-green-600 text-white rounded-md font-medium"
          >
            Konfirmasi
          </button>
        </form>
      </footer>
    </>
  );
};
export default Home;
