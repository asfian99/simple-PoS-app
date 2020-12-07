const List = ({ items, deleteItem }) => {
  return (
    <>
      <table className="table-fixed w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 w-5/12 border">Nama Barang</th>
            <th className="p-2 w-1/6 border">Harga Satuan</th>
            <th className="p-2 w-1/6 border">Jumlah Barang</th>
            <th className="p-2 w-1/6 border">Jumlah Harga</th>
            <th className="p-2 w-1/12 border">Aksi</th>
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
                <td className="border p-2 text-center">
                  <button
                    className="py-1 px-2 bg-red-100 hover:bg-red-500 font-medium text-red-500 hover:text-white rounded"
                    onClick={() => deleteItem(id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default List;
