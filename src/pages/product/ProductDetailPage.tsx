import { Card, Button } from "../../components";

const ProductDetailPage = () => {
  return (
    <>
      <Card>
        <h2 className="font-bold">Business Information</h2>
        <img src="../src/assets/business.png" alt="" className="size-60" />
        <h4>Sector :</h4>
        <h4>Established at: </h4>
        <h4>Number of employees: </h4>
        <h4>Address: </h4>
        <p className="truncate ...">
          Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Asperiores velit sit quod voluptatum obcaecati iure provident
          reprehenderit quos itaque commodi consequuntur, nihil nostrum
          corrupti, ipsam deleniti temporibus exercitationem. Illum,
          voluptatibus!
        </p>
      </Card>

      <div>
        <Card>
          <h2 className="font-bold">Products</h2>
          <img src="../src/assets/product.png" alt="" className="size-60" />
          <h4>Title: </h4>
          <h4>Price: </h4>
          <p>Description :</p>

          <div className="flex flex-row m-5 gap-5 justify-start">
            <Button
              label="Buy now"
              className="bg-yellow-500 p-3 rounded-md"
            ></Button>
            <Button
              label="Contact WhatsApp"
              className="bg-green-500 p-3 rounded-md"
            ></Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ProductDetailPage;
