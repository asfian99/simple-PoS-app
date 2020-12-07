const List = ({ items }) => {
  return (
    <>
      <table className="table-fixed w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 w-3/6 border">Nama Barang</th>
            <th className="p-2 w-1/6 border">Harga Satuan</th>
            <th className="p-2 w-1/6 border">Jumlah Barang</th>
            <th className="p-2 w-1/6 border">Jumlah Harga</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const { id, name, price, sum, sumPrice } = item;

            return (
              <tr key={id}>
                <td className="border p-2">{name}</td>
                <td className="border p-2">{price}</td>
                <td className="border p-2">{sum}</td>
                <td className="border p-2">{sumPrice}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default List;
