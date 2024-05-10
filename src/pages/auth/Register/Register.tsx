import { Form, Link, redirect } from "react-router-dom";
import { Input, Text, Button } from "../../../components";
import baseApi from "../../../api/baseApi";
import {
  RegisterError,
  LoginRegisterPayload,
  LoginRegisterResponse,
} from "@/api/User";
import { AxiosError, AxiosResponse } from "axios";
import { setCookies } from "../../../utils/cookie";
import { useError } from "../../../hooks/useError";
import { IconX, IconCheck } from "@tabler/icons-react";
import { Notification, rem } from "@mantine/core";

async function action({ request }: { request: Request }) {
  const { setErrorMessage } = useError.getState();
  const formData = (await request.formData()) as FormData;
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const passwordConfirm = formData.get("passwordConfirm");
  if (password !== passwordConfirm) {
    setErrorMessage("password doesn't match");
    return redirect("/register");
  }

  const response = await baseApi
    .post<LoginRegisterPayload, AxiosResponse<LoginRegisterResponse>>(
      "/user/register",
      {
        username,
        email,
        password,
      }
    )
    .then((d) => {
      setCookies(d.data.access_token);
      console.log("get hit");
      return redirect("/");
    })
    .catch((error) => {
      const err = error as AxiosError;
      const errorMessage = err.response?.data as RegisterError;
      setErrorMessage(errorMessage.message);
      return redirect("/register");
    });
  console.log(response);
  if (response) {
    return redirect("/");
  } else {
    return redirect("/register");
  }
}

const Register = () => {
  // const [selectedUser] = useState<DataProps>();

  const { errorMessage, setErrorMessage } = useError();

  const hasErrorMessage = errorMessage.length > 0;
  const handleErrorMessage = () => {
    console.log("get click");
    setErrorMessage("");
  };
  const xIcon = (
    <IconX
      onClick={handleErrorMessage}
      style={{ width: rem(20), height: rem(20) }}
    />
  );
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

      {hasErrorMessage && (
        <Notification
          onClick={handleErrorMessage}
          icon={xIcon}
          color="red"
          title="Bummer!"
        >
          {errorMessage}
        </Notification>
      )}

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
            to="/login"
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
