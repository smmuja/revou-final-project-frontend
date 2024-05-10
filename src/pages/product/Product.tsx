import { Card } from "../../components";
import UserProfile from "../user/UserSnippet";

import baseApi from "../../api/baseApi";
import { AllProduct } from "../../api/getProductAll";

import { useLoaderData } from "react-router-dom";

export async function loader() {
  const product = await baseApi
    .get<AllProduct[]>("/product")
    .then((d) => d.data);
  console.log(product);
  return product;
}

const Product = () => {
  const productAll = useLoaderData() as AllProduct[];

  return (
    <>
      <div className="flex flex-row">
        <div>
          {productAll.map((product) => {
            const productImage =
              product.profile_url.length > 0
                ? product.profile_url
                : "../src/assets/dummy.png";

            return (
              <Card key={product.id}>
                <img src={productImage} alt="" className="size-full" />
                <h2 className="font-bold">{product.product_name}</h2>
                <p className="">{`Rp${product.product_price}`}</p>
                <p>{product.description}</p>
              </Card>
            );
          })}
        </div>
        <div className="hidden md:flex">
          <UserProfile />
        </div>
      </div>
    </>
  );
};

export default Product;
export { loader as AllProductLoader };
