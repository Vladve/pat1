import productsInit, { categories } from "../hard";

function Categories({ setProducts }) {
  function categoryClick(categoryName) {
    setProducts(
      productsInit.filter((product) => categoryName == product.category)
    );
  }

  return (
    <div className="body-category" >
      {categories.map((item) => {
        return (
        <div onClick={() => categoryClick(item)}>{item}</div>
        )
      })}
    </div>
  );
}

export default Categories;
