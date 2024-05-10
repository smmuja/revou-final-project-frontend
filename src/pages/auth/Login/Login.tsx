import { Form, redirect } from "react-router-dom";
import { Input, Text, Button, FormCard } from "../../../components";
import { LoginRegisterPayload, LoginRegisterResponse } from "@/api/User";
import { AxiosResponse } from "axios";
import baseApi from "../../../api/baseApi";
import { setCookies } from "../../../utils/cookie";

async function action({ request }: { request: Request }) {
  const formData = (await request.formData()) as FormData;
  // const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  const response = await baseApi
    .post<LoginRegisterPayload, AxiosResponse<LoginRegisterResponse>>(
      "/user/login",
      {
        // username,
        email,
        password,
      }
    )
    .then((d) => d.data);
  console.log(response);
  setCookies(response.access_token);
  return redirect(`/user/${response.user_id}`);
}

const Login = () => {
  // const [selectedUser] = useState<DataProps>();

  return (
    <>
      <div>
        <FormCard
          topLabel={"Log in to your account"}
          footer={" Not a member yet?"}
          link={"/register"}
          footerLabel={"Register"}
        >
          <Form action="" method="post">
            <fieldset>
              <div>
                <Text>{"Email"}</Text>
                <Input className="" name={"email"} placeholder="Input email" />
              </div>
              <div>
                <Text>{"Password"}</Text>
                <Input
                  type="password"
                  className=""
                  name={"password"}
                  placeholder="Input password"
                />
              </div>
              <div className=" ">
                <Button label={"Login"} type="submit" className="" />
              </div>
            </fieldset>
          </Form>
        </FormCard>
      </div>
    </>

    // </div>
  );
};

export default Login;
export { action as loginAction };
