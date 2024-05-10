import { Form, redirect, useLoaderData } from "react-router-dom";
import { Button, ButtonCancel, Input, Text } from "../../components";
import FormCard from "../../components/FormCard";
import { Business } from "@/api/Business";
import baseApi from "../../api/baseApi";
import { getCookies } from "../../utils/cookie";
import {
  BusinessPostEditPayload,
  BusinessPostEditDetailResponse,
} from "@/api/Business";
import { AxiosResponse } from "axios";
import SendBusinessImage from "./SendBusinessImage";

export async function loader() {
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + getCookies(),
  };

  const business = await baseApi
    .get<BusinessPostEditPayload>(`/business`, {
      headers: headers,
    })
    .then((d) => d.data);
  console.log(business);
  // getCookies(business.id);

  return business;
}

async function action({ request }: { request: Request }) {
  const formData = (await request.formData()) as FormData;
  const business_name = formData.get("business_name");
  const business_types = formData.get("business_types");
  const description = formData.get("description");

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + getCookies(),
  };

  const business = await baseApi
    .get<BusinessPostEditPayload>("/business", {
      headers: headers,
    })
    .then((d) => d.data);
  console.log(business);

  const response = await baseApi
    .put<
      BusinessPostEditPayload,
      AxiosResponse<BusinessPostEditDetailResponse>
    >(
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
  return redirect(`/business/${response.id}`);
}

const BusinessEditPage = () => {
  const businessDetail = useLoaderData() as Business;

  return (
    <div>
      <FormCard
        topLabel={"Edit Business"}
        footer={""}
        link={""}
        footerLabel={""}
      >
        <Form action="">
          <fieldset>
            <div className="flex flex-col gap-3">
              <div>
                <Text>{"Business Name"}</Text>
                <Input
                  name="business_name"
                  placeholder="Business name"
                  type="text"
                  defaultValue={businessDetail.business_name}
                />
              </div>
              <div>
                <Text>{"Type"}</Text>
                <Input
                  name="business_types"
                  placeholder="Business Type"
                  type="text"
                  defaultValue={businessDetail.business_types}
                />
              </div>

              <div>
                <Text>{"Description"}</Text>
                <Input
                  name="description"
                  type="text"
                  placeholder="Description"
                  defaultValue={businessDetail.description}
                />
              </div>
            </div>
            <SendBusinessImage />

            <div>
              <Button label={"Submit"}></Button>
              <ButtonCancel label={"Cancel"}></ButtonCancel>
            </div>
          </fieldset>
        </Form>
      </FormCard>
    </div>
  );
};

export default BusinessEditPage;
export { loader as BusinessEditLoader };
export { action as BusinessEditAction };
