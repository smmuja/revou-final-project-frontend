import { Form, redirect } from "react-router-dom";
import { Button, FormCard, Input, Text, TextArea } from "../../components";
import baseApi from "../../api/baseApi";
import {
  ProductEditPayload,
  ProductEditResponse,
} from "../../api/editProductDetail";
import { AxiosResponse } from "axios";

async function action({ request }: { request: Request }) {
  const formData = (await request.formData()) as FormData;
  const productName = formData.get("productName");
  const productPrice = formData.get("productPrice");
  const productDescription = formData.get("productDesription");

  const response = await baseApi
    .post<ProductEditPayload, AxiosResponse<ProductEditResponse>>("/product", {
      productName,
      productPrice,
      productDescription,
    })
    .then((d) => d.data);
  console.log(response);

  return redirect(`product/${response.id}`);
}

const ProductEditPage = () => {
  return (
    <div>
      <FormCard
        topLabel={"Edit Product"}
        footer={""}
        link={""}
        footerLabel={""}
      >
        <Form>
          <div>
            <Text>{"Product Name"}</Text>
            <Input
              className=""
              name="productName"
              placeholder="Product Name"
              defaultValue={""}
            ></Input>
          </div>
          <div>
            <Text>{"Price"}</Text>
            <Input
              className=""
              type="number"
              min={0}
              name="productPrice"
              placeholder="0"
              defaultValue={""}
            ></Input>
          </div>
          <div>
            <Text>{"Description"}</Text>
            <TextArea
              className=""
              name="productDescription"
              placeholder="Description"
              defaultValue={""}
            ></TextArea>
          </div>
          <div>
            <Button label={"Save"} className="w-full"></Button>
          </div>
        </Form>
      </FormCard>
    </div>
  );
};

export default ProductEditPage;
export { action as productEditAction };
