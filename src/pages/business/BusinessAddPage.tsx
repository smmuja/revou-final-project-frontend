import { Form, redirect } from "react-router-dom";
import { Button, ButtonCancel, FormCard, Input, Text } from "../../components";
import { BusinessPayload, BusinessResponse } from "../../api/postBusiness";
import { AxiosResponse } from "axios";
import baseApi from "../../api/baseApi";
import { getCookies } from "../../utils/cookie";
import { NativeSelect } from "@mantine/core";
import SendImage from "./SendBusinessImage";

async function action({ request }: { request: Request }) {
  const formData = (await request.formData()) as FormData;
  const business_name = formData.get("business_name");
  const business_types = formData.get("business_types");
  const description = formData.get("description");
  // const access_token = ``;
  // console.log(business_name);
  // console.log(business_types);
  // console.log(description);

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + getCookies(),
  };
  console.log(getCookies());
  const response = await baseApi
    .post<BusinessPayload, AxiosResponse<BusinessResponse>>(
      "/business",
      {
        business_name,
        business_types,
        description,
      },
      {
        headers: headers,
      }
    )
    .then((d) => d.data);
  console.log(response);
  // setCookies(response.access_token);
  // return redirect(`/business/${response.id}`);
  return redirect(`/user/:id`);
}

// const response = await baseApi

const BusinessAddPage = () => {
  return (
    <div>
      <FormCard
        topLabel={"Register your business"}
        footer={"Explore more business?"}
        link={"/business"}
        footerLabel={"Explore"}
      >
        <Form method="post">
          <fieldset>
            <div className="flex flex-col gap-3">
              <div>
                <Text>Business Name</Text>
                <Input name="business_name" placeholder="Business name" />
              </div>

              <div>
                <Text>Business Type</Text>

                <NativeSelect
                  name="business_types"
                  data={[
                    { label: "Food and beverage", value: "food_and_beverage" },
                    { label: "fashion", value: "fashion" },
                    { label: "education", value: "education" },
                    { label: "health_care", value: "health_care" },
                    { label: "finance", value: "finance" },
                    { label: "entertainment", value: "entertainment" },
                    {
                      label: "advertising_and_media",
                      value: "advertising_and_media",
                    },
                    { label: "construction", value: "construction" },
                    {
                      label: "advertising_and_media",
                      value: "advertising_and_media",
                    },
                    { label: "manufacturing", value: "manufacturing" },
                    {
                      label: "hospitality_and_tourism",
                      value: "hospitality_and_tourism",
                    },
                  ]}
                />
              </div>

              {/* <div>
                <Text>{"Business Type"}</Text>
                <div className="">
                  <input
                    type="radio"
                    id="fashion"
                    value="fashion"
                    name="business_types"
                    placeholder="Business Type"
                  />
                  <label htmlFor="fashion">Fashion</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="food"
                    value="food"
                    name="business_types"
                    placeholder="Business Type"
                  />
                  <label htmlFor="food">Food</label>
                </div>
              </div> */}
              <div>
                <Text>Description</Text>
                <Input name="description" placeholder="Description" />
              </div>
              {/* <div>
                <SendImage />
              </div> */}
            </div>

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

export default BusinessAddPage;
export { action as BusinessAddAction };
