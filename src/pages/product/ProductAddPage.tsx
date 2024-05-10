import { AxiosResponse } from "axios";
import baseApi from "../../api/baseApi";
import { ProductPayload, ProductPostEditResponse } from "@/api/Product";
import { Button, ButtonCancel, FormCard, Input, Text } from "../../components";
import { getCookies } from "../../utils/cookie";
import { Form, redirect } from "react-router-dom";
import { useBusiness } from "../../hooks/useUserBusiness";
import {
  Group,
  HoverCard,
  Button as MantineButton,
  Text as MantineText,
} from "@mantine/core";
import { BusinessCard } from "./BusinessCard";

async function action({ request }: { request: Request }) {
  const formData = (await request.formData()) as FormData;
  const product_name = formData.get("product_name");
  const product_price = formData.get("product_price");
  const description = formData.get("description");

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + getCookies(),
  };

  const response = await baseApi
    .post<ProductPayload, AxiosResponse<ProductPostEditResponse>>(
      "/product",
      {
        product_name,
        product_price,
        description,
      },
      {
        headers: headers,
      }
    )
    .then((d) => d.data);

  return redirect(`/product/${response.id}`);
}

const ProductAddPage = () => {
  const { business: businessList } = useBusiness();

  return (
    <div>
      <FormCard
        topLabel={"Add Product"}
        footer={"Explore more product?"}
        link={"/product"}
        footerLabel={"Explore"}
      >
        <Form method="post">
          <fieldset>
            <div className="flex flex-col gap-3">
              <div>
                <Text>{"Product Name"}</Text>
                <Input name="product_name" placeholder="Product name" />
              </div>
              <div>
                <Text>{"Price"}</Text>
                <Input
                  name="product_price"
                  type="number"
                  placeholder="Product Price"
                />
              </div>
              <div>
                <Text>{"Product Description"}</Text>
                <Input
                  name="description"
                  type="text"
                  placeholder="Product description"
                />
              </div>
            </div>
            <Group justify="center">
              <HoverCard width={280} shadow="md">
                <HoverCard.Target>
                  <MantineButton>Hover to reveal the card</MantineButton>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                  <ul>
                    {businessList.map((business) => {
                      return (
                        <li>
                          <BusinessCard business={business} key={business.id} />
                        </li>
                      );
                    })}
                  </ul>
                </HoverCard.Dropdown>
              </HoverCard>
            </Group>
            <div>
              <Button label={"Submit"} type="submit"></Button>
              <ButtonCancel label={"Cancel"}></ButtonCancel>
            </div>
          </fieldset>
        </Form>
      </FormCard>
    </div>
  );
};

export default ProductAddPage;
export { action as ProductAddAction };
