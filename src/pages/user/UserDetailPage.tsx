import { useLoaderData } from "react-router-dom";
import baseApi from "../../api/baseApi";
import { getUserDetail } from "@/api/User";
import { useNavigate } from "react-router-dom";
import { Button, Card, Table, TableRow } from "../../components";
import { getCookies } from "../../utils/cookie";
import { useBusiness } from "../../hooks/useUserBusiness";
import { useUser } from "../../hooks/useUser";
import { BusinessCard } from "./BusinessCard";

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

const UserDetailPage = () => {
  const navigate = useNavigate();
  // const { setAllBusiness } = useBusiness();
  const userDetail = useLoaderData() as getUserDetail;

  const userImage =
    userDetail.profile_url.length > 0
      ? userDetail.profile_url
      : "../src/assets/userDummy.png";

  return (
    <>
      <div>
        <Card className="p-15">
          <div className="flex flex-row justify-between">
            <h2 className="font-bold">User Information</h2>
            <Button
              onClick={() => navigate("/user/edit")}
              label={"Edit Profile"}
            ></Button>
          </div>
          <div className="flex justify-center">
            <img src={userImage} alt="" className="size-60" />
            <p></p>
          </div>
          <Table label="" data="">
            <TableRow label="Username" data={userDetail.username}></TableRow>
            <TableRow label={"Email"} data={userDetail.email}></TableRow>
            <TableRow
              label={"Business Amount"}
              data={userDetail.business_amount}
            ></TableRow>
            <TableRow
              label={"Product Amount"}
              data={userDetail.product_amount}
            ></TableRow>
            <TableRow label={"Address"} data={userDetail.address}></TableRow>
            <TableRow
              label={"Occupation"}
              data={userDetail.occupation}
            ></TableRow>
          </Table>
          <p className="ml-4 mt-3">{userDetail.description}</p>
        </Card>

        <div className="mt-20">
          <Card className=" ">
            <h2 className="font-bold mb-5">Business List</h2>
            {userDetail.business.map((business) => {
              return <BusinessCard business={business} key={business.id} />;
            })}

            <Button
              className="w-full m-12"
              label={"Add Business"}
              onClick={() => navigate("/business/add")}
            ></Button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default UserDetailPage;
export { loader as userDetailLoader };
