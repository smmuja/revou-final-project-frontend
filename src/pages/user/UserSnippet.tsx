// import { Outlet } from "react-router-dom"
import { getUserDetail } from "@/api/User";
import { Button } from "../../components";
import baseApi from "@/api/baseApi";
import { getCookies } from "@/utils/cookie";
import { useBusiness } from "@/hooks/useUserBusiness";
import { useUser } from "@/hooks/useUser";

export async function loader() {
  const setAllBusiness = useBusiness.getState().setAllBusiness;
  const setUser = useUser.getState().setUser;
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + getCookies(),
  };

  const user = await baseApi
    .get<getUserDetail>("/user/sign-in", {
      headers: headers,
    })
    .then((d) => d.data);
  setAllBusiness(user.business);
  setUser({
    address: user.address,
    description: user.description,
    email: user.email,
    occupation: user.occupation,
    phone_number: user.phone_number,
    username: user.username,
  });
  console.log(user);
  // getCookies(user.id);

  return user;
}

const UserSnippet = () => {
  // const userDetail = useLoaderData() as getUserDetail;
  // const userImage =
  //   userDetail.profile_url.length > 0
  //     ? userDetail.profile_url
  //     : "../src/assets/userDummy.png";

  return (
    <div className=" flex flex-col border-slate-500 border-solid outline-8 container  m-20">
      <div>
        <div className="flex flex-row justify-evenly">
          <img
            src="../src/assets/userDummy.png"
            alt=""
            className="rounded-full size-20"
          />
          <h4 className="font-medium">User name</h4>
        </div>
        <div className="">
          <p>Name</p>
          <p>Email</p>
          <p>Contact</p>
          <p>Business</p>
          <p>Product</p>
        </div>
        <div>
          <Button label="See More" className="bg-green-500 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default UserSnippet;
export { loader as UserSnippetLoader };
