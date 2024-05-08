import { Form, Link, redirect } from "react-router-dom";
import { Input, Text, Button } from "../../../components";
import baseApi from "../../../api/baseApi";
import {
  RegisterPayload,
  RegisterResponse,
} from "../../../api/postUserRegister";
import { AxiosResponse } from "axios";
import { setCookies } from "../../../utils/cookie";

async function action({ request }: { request: Request }) {
  const formData = (await request.formData()) as FormData;
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const passwordConfirm = formData.get("passwordConfirm");
  if (password !== passwordConfirm) {
    throw Error("Password and password confirm doesn't match");
  }

  const response = await baseApi
    .post<RegisterPayload, AxiosResponse<RegisterResponse>>("/user/register", {
      username,
      email,
      password,
    })
    .then((d) => d.data);
  console.log(response);
  setCookies(response.access_token);
  // return redirect(`/user/${response.user_id}`);
  return redirect("/login");
}

const Register = () => {
  // const [selectedUser] = useState<DataProps>();

  return (
    // <div className="sm:flex flex-row">
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 ">
            Become a member
          </h2>
        </div>
      </div>

      <div className="mt-5 mx-10 sm:mx-auto sm:w-full sm:max-w-sm border border-slate-300 justify-center m-auto p-10">
        <Form method="post">
          <fieldset>
            <div className="flex flex-col gap-3">
              <div className="">
                <Text>{"Email"}</Text>
                <Input
                  className="block border-neutral-400 border"
                  name="email"
                  placeholder="Input email"
                />
              </div>
              <div>
                <Text>{"Username"}</Text>
                <Input
                  className="block border-neutral-400 border"
                  name="username"
                  placeholder="Input username"
                />
              </div>
              <div>
                <Text>{"Password"}</Text>
                <Input
                  type="password"
                  className="block border-neutral-400 border"
                  name="password"
                  placeholder="Input password"
                />
              </div>
              <div>
                <Text>{"Confirm Password"}</Text>
                <Input
                  type="password"
                  className="block border-neutral-400 border"
                  name="passwordConfirm"
                  placeholder="Confirm password"
                />
              </div>
            </div>

            <div className=" space-x-2 space-y-2">
              <Button
                label={"Register"}
                type="submit"
                className="bg-yellow-500"
              />
            </div>
          </fieldset>
        </Form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?
          <Link
            to="/register"
            className="font-semibold leading-6 text-black hover:text-indigo-500"
          >
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
    //   {/* <div className="hidden sm:flex">
    //     <ProductSnippet />
    //   </div> */}
    // </div>

    // </div>
  );
};

export default Register;
export { action as registerAction };
