import { Form, redirect } from "react-router-dom";
import { Button, ButtonCancel, FormCard, Input, Text } from "../../components";
import { BusinessPayload, BusinessResponse } from "../../api/postBusiness";
import { AxiosResponse } from "axios";
import baseApi from "../../api/baseApi";
import { getCookies } from "../../utils/cookie";

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
  return redirect(`/business/${response.id}`);
}

// const response = await baseApi

const BusinessAdd = () => {
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
                <Text>{"Business Name"}</Text>
                <Input name="business_name" placeholder="Business name" />
              </div>
              <div>
                <Text>{"Sector"}</Text>
                <Input name="business_types" placeholder="Business Sector" />
              </div>
              <div>
                <Text>{"Description"}</Text>
                <Input name="description" placeholder="Description" />
              </div>
              {/* <div>
                <Text>{"Established at"}</Text>
                <Input
                  name="established"
                  type="date"
                  placeholder="Established at"
                />
              </div> */}
              {/* <div>
                <Text>{"Total employee"}</Text>
                <Input
                  name="employee"
                  type="number"
                  min={0}
                  placeholder="Number of employees"
                />
              </div> */}
              {/* <div>
                <Text>Image</Text>
                <Input
                  name="image"
                  type=""
                  placeholder="Business Image"
                ></Input>
              </div> */}
              {/* <div>
                <Text>Address</Text>
                <Input
                  name="address"
                  type="text"
                  placeholder="Businness Address"
                />
              </div> */}
              <legend>Social Media</legend>
              {/* <div>
                <Text>Email</Text>
                <Input
                  name="email"
                  type="string"
                  placeholder="Business Email"
                ></Input>
              </div> */}
              {/* <div>
                <Text>Phone Number</Text>
                <Input
                  name="phone"
                  type="string"
                  placeholder="Phone Number"
                ></Input>
              </div> */}
              {/* <div>
                <Text>Instagram</Text>
                <Input
                  name="instagram"
                  type="string"
                  placeholder="Instagram"
                ></Input>
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

export default BusinessAdd;
export { action as BusinessAddAction };
