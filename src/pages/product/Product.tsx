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
      {productAll.map((product) => {
        const productImage =
          product.profile_url.length > 0
            ? product.profile_url
            : "../src/assets/product.png";

        return (
          <Card key={product.id}>
            <p>{product.product_name}</p>
            <img src={productImage} alt="" className="size-50" />
            <p>{product.product_price}</p>
          </Card>
        );
      })}

      <div className="flex flex-row">
        <div>
          <Card>
            <img src="./src/assets/product.png" alt="" className="" />
            <h2 className="font-bold">Product Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores velit sit quod voluptatum obcaecati iure provident
              reprehenderit quos itaque commodi consequuntur, nihil nostrum
              corrupti, ipsam deleniti temporibus exercitationem. Illum,
              voluptatibus!
            </p>
          </Card>

          <Card>
            <img src="./src/assets/product.png" alt="" className="" />
            <h2 className="font-bold">Product Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores velit sit quod voluptatum obcaecati iure provident
              reprehenderit quos itaque commodi consequuntur, nihil nostrum
              corrupti, ipsam deleniti temporibus exercitationem. Illum,
              voluptatibus!
            </p>
          </Card>
        </div>
        <div className="hidden sm:flex">
          <UserProfile />
        </div>
      </div>
    </>
  );
};

export default Product;
export { loader as AllProductLoader };
