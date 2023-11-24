import ProductContainer from "./ProductContainer";
import PRODUCTS from "../data";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const [searchParams, _] = useSearchParams();
  const nameParam = searchParams.get("name");
  const sortParam = searchParams.get("sort");

  const productsRender = useMemo(() => {
    let products = [...PRODUCTS];

    if (nameParam)
      products = products.filter((prod) =>
        prod.name.toLowerCase().includes(nameParam.toLowerCase())
      );
    if (sortParam === "ASC") products.sort((a, b) => a.rate - b.rate);
    if (sortParam === "DESC") products.sort((a, b) => b.rate - a.rate);

    return products.map((prod) => (
      <ProductContainer
        key={prod.name}
        productName={prod.name}
        rate={prod.rate}
      />
    ));
  }, [PRODUCTS, nameParam, sortParam]);

  return (
    <div className="grow pt-4 pb-10 px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {productsRender.length > 0 ? (
        productsRender
      ) : (
        <div>Oops, no product found...</div>
      )}
    </div>
  );
};

export default ProductList;
