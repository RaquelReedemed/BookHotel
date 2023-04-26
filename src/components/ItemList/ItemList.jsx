import ItemCard from "../ItemCard.jsx/ItemCard";


const ItemList = ({ items }) => {
  return (
    <div className="grid-container">
      {
        items.map((data) => <ItemCard itemData={data} key={data.id}/>)
      }
    </div>
  );
};

export default ItemList;
