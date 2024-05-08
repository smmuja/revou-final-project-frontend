// import { Outlet } from "react-router-dom"
import { Button } from "../../components";

const ProductSnippet = () => {
  return (
    <div className=" flex flex-col border-slate-500 border-solid outline-8 container  m-20">
      <div>
        <div className="flex flex-row justify-evenly">
          <img src="./src/assets/product.png" alt="" className="size-40" />
          <h4 className="font-medium">Product name</h4>
        </div>
        <div className="">
          <p>Product</p>
          <p>Price</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi natus
            architecto voluptatum obcaecati cum ducimus ...
          </p>
        </div>
        <div>
          <Button label="See More" className="bg-green-500 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default ProductSnippet;
