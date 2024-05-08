import { useLoaderData } from "react-router-dom";
import baseApi from "../../api/baseApi";
import { getUserDetail } from "../../api/getUserDetail";
import { useNavigate } from "react-router-dom";
import { Button, Card, Table, TableRow } from "../../components";
import { getCookies } from "../../utils/cookie";
import { useBusiness } from "../../hooks/useUserBusiness";

export async function loader() {
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + getCookies(),
  };

  const user = await baseApi
    .get<getUserDetail>("/user/sign-in", {
      headers: headers,
    })
    .then((d) => d.data);
  console.log(user);
  // getCookies(user.id);

  return user;
}

const UserDetail = () => {
  const navigate = useNavigate();
  const { setAllBusiness } = useBusiness();

  const userDetail = useLoaderData() as getUserDetail;
  setAllBusiness(userDetail.business);
  return (
    <>
      <div>
        <Card className="p-15">
          <div className="flex flex-row justify-between">
            <h2 className="font-bold">User Information</h2>
            <Button
              onClick={() => navigate("/user/:id/edit")}
              label={"Edit Profile"}
            ></Button>
          </div>
          <div className="flex justify-center">
            <img src="../src/assets/user.png" alt="" className="size-60" />
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
            <TableRow
              label={""}
              data={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae mollitia, unde veritatis provident voluptatum eligendi obcaecati ipsum soluta sequi illum excepturi non alias expedita a quia, magni voluptas, tempore doloribus?"
              }
            ></TableRow>
          </Table>
        </Card>

        <div className="mt-20">
          <Card className=" ">
            <h2 className="font-bold mb-5">Business List</h2>
            <Card className="">
              <div className="flex flex-row items-end gap-5">
                <img
                  src="../src/assets/business.png"
                  alt=""
                  className="size-32"
                />
                <h3 className="font-semibold">Business name</h3>
              </div>
              <Table className="text-sm" label={""} data={""}>
                <TableRow label={"Total Product"} data={"0"}></TableRow>
                <TableRow label={"Created at"} data={"00-00-00"}></TableRow>
              </Table>
              <div className="flex flex-row justify-end gap-2">
                <Button
                  className="w-1/5 bg-yellow-400"
                  label={"View"}
                  onClick={() => navigate("/business/:id")}
                />
                <Button
                  className="w-1/5"
                  label={"Edit"}
                  onClick={() => navigate("/business/:id/edit")}
                />
              </div>
            </Card>
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

export default UserDetail;
export { loader as userDetailLoader };
