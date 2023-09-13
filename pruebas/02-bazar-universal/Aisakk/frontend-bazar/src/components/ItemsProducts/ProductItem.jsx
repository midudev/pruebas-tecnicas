import StarItem from "../StarItems/StarItem";
function ProductItem({ item, navigate }) {
    const { id, thumbnail, title, description, price, rating } = item;
  
    function detailProduct() {
      navigate(`${id}`);
    }
  
    return (
      <div
        className="flex gap-2 my-6 mx-5 shadow-lg py-5 px-4"
        id={id}
        onClick={detailProduct}
      >
        <div className="img h-full w-full">
          <img
            src={thumbnail}
            alt={title}
            className="rounded-full h-32 w-32"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="title">
            <h2 className="font-bold">{title}</h2>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
          <div className="flex justify-between">
            <div className="price">
              <p className="font-bold">{price}$</p>
            </div>
            <div className="stars">
              <StarItem rating={rating} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default ProductItem