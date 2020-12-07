const List = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        const { id, name, price, sum, sumPrice } = item;

        return (
          <ul key={id}>
            <li>{name}</li>
            <li>{price}</li>
            <li>{sum}</li>
            <li>{sumPrice}</li>
          </ul>
        );
      })}
    </>
  );
};

export default List;
