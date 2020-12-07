// import { useEffect } from "react";
// import { data } from "../data/data";
const History = ({ list }) => {
  console.log(list);
  return (
    <>
      <table className="w-full">
        <thead>
          <tr>
            <th>Nama Barang</th>
            <th>Total Harga</th>
            <th>Dibayarkan</th>
            <th>Kembalian</th>
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
                        <li>{`${name} @${price} (x ${sum} = ${sumPrice})`}</li>
                      </ul>
                    );
                  })}
                </td>
                <td className="p-1 border">{total}</td>
                <td className="p-1 border">{paid}</td>
                <td className="p-1 border">{cashback}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default History;
