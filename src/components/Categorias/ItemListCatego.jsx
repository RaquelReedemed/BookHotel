import ItemCardCatego from "./ItemCardCatego";


const ItemListCatego = ({ items }) => {
  return (
    <div className="grid-container">
      {
        items.map((data) =>(
            <div>
                <ItemCardCatego itemData={data} key={data.id}/>
            </div>
           )

        )
        
      }
    </div>

  );
};

export default ItemListCatego;
