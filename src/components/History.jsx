// import { useEffect } from "react";
// import { data } from "../data/data";
const History = ({ list }) => {
  console.log(list);
  return (
    <>
      <h1 className="mt-6 text-center uppercase font-semibold text-lg">
        Riwayat Transaksi
      </h1>
      <table className="mt-2 w-full">
        <thead>
          <tr>
            <th className="p-1 border bg-indigo-100">Nama Barang</th>
            <th className="p-1 border bg-indigo-100">Total Harga</th>
            <th className="p-1 border bg-indigo-100">Dibayarkan</th>
            <th className="p-1 border bg-indigo-100">Kembalian</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => {
            const { id, items, total, paid, cashback } = item;
            return (
              <tr key={id} className="my-2 border">
                <td className="p-1 border">
                  {items.map((stuff) => {
                    const { id, name, price, sum, sumPrice } = stuff;
                    return (
                      <ul key={id}>
                        <li>
                          {`${name} @Rp ${price} (x ${sum} = `}
                          <b>{`Rp ${sumPrice})`}</b>
                        </li>
                      </ul>
                    );
                  })}
                </td>
                <td className="p-1 border">Rp {total}</td>
                <td className="p-1 border">Rp {paid}</td>
                <td className="p-1 border">Rp {cashback}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default History;
