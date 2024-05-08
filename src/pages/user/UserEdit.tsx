import { Form, redirect, useLoaderData } from "react-router-dom";
import FormCard from "../../components/FormCard";
import { Button, ButtonCancel, Input, Text, TextArea } from "../../components";
import { UserEditPayload, UserEditResponse } from "../../api/editUserDetail";

import baseApi from "../../api/baseApi";
import { AxiosResponse } from "axios";
// import { getUserDetail } from "../../api/getUserDetail";
import { getCookies } from "../../utils/cookie";
import { useUser } from "../../hooks/useUser";

export async function loader() {
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + getCookies(),
  };

  const user = await baseApi
    .get<UserEditPayload>("/user", {
      headers: headers,
    })
    .then((d) => d.data);
  console.log(user);
  // getCookies(user.id);

  return user;
}

async function action({ request }: { request: Request }) {
  const formData = (await request.formData()) as FormData;
  const username = formData.get("username");
  const email = formData.get("email");
  const address = formData.get("address");
  const occupation = formData.get("occupation");
  const phone_number = formData.get("phone_number");

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + getCookies(),
  };

  const user = await baseApi
    .get<UserEditPayload>("/user", {
      headers: headers,
    })
    .then((d) => d.data);
  console.log(user);

  const response = await baseApi
    .put<UserEditPayload, AxiosResponse<UserEditResponse>>(
      `/user`,
      {
        username,
        email,
        address,
        occupation,
        phone_number,
      },
      {
        headers: headers,
      }
    )
    .then((d) => d.data);
  console.log(response);
  // setCookies(response.access_token);
  return redirect(`/user/${response.id}`);
}

const UserEdit = () => {
  // const userDetail = useLoaderData() as getUserDetail;
  const { user } = useUser();
  return (
    <div>
      <FormCard
        topLabel={"Edit Profile"}
        footer={""}
        link={""}
        footerLabel={""}
      >
        <Form method="put">
          <div>
            <Text>{"Username"}</Text>
            <Input
              className=""
              name="username"
              placeholder="Username"
              defaultValue={user?.username}
            ></Input>
          </div>
          <div>
            <Text>{"Email"}</Text>
            <Input
              className=""
              name="email"
              placeholder="Email"
              defaultValue={user?.email}
            ></Input>
          </div>

          <div>
            <Text>{"Address"}</Text>
            <Input
              className=""
              type="text"
              name="address"
              placeholder="Address"
              defaultValue={user.address}
            ></Input>
          </div>
          <div>
            <Text>{"Occupation"}</Text>
            <Input
              className=""
              type="text"
              name="occupation"
              placeholder="Occupation"
              defaultValue={user?.occupation}
            ></Input>
          </div>
          <div>
            <Text>{"Phone Number"}</Text>
            <Input
              className=""
              type="text"
              name="phone"
              placeholder="Phone number"
              defaultValue={user?.phone_number}
            ></Input>
          </div>
          <div>
            <Text>{"Description"}</Text>
            <TextArea
              className=""
              name="description"
              placeholder="Description"
              defaultValue={user?.description}
            ></TextArea>
          </div>
        </Form>
        <div className="w-full flex justify-stretch">
          <Button label="Save" type="submit" className=""></Button>
          <ButtonCancel label={"Cancel"}></ButtonCancel>
        </div>
      </FormCard>
    </div>
  );
};

export default UserEdit;
export { action as userEditAction };
export { loader as userEditLoader };
