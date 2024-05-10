import { useLoaderData } from "react-router-dom";
import baseApi from "../../api/baseApi";
import { BusinessPostEditDetailResponse } from "@/api/Business";
import { useNavigate } from "react-router-dom";
import { Button, Card, Table, TableRow } from "../../components";
import SendBusinessImage from "./SendBusinessImage";
import { useBusiness } from "@/hooks/useUserBusiness";
import { getCookies } from "@/utils/cookie";
// import Business from ".";

export async function loader() {
  const { currentBusinessId } = useBusiness.getState();

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + getCookies(),
  };

  const business = await baseApi
    .get<BusinessPostEditDetailResponse>(`/business/${currentBusinessId}`, {
      headers: headers,
    })
    .then((d) => d.data);

  return business;
  // console.log(business);
}

const BusinessDetailPage = () => {
  const businessResponse = useLoaderData() as BusinessPostEditDetailResponse;

  const navigate = useNavigate();
  // const businessDetail = useLoaderData() as getBusinessDetail;
  const businessImage =
    businessResponse.profile_url.length > 0
      ? businessResponse.profile_url
      : "../src/assets/dummy.png";
  return (
    <>
      <div>
        <Card>
          <div className="flex flex-row justify-between">
            <h2 className="font-bold">Business Information</h2>
            <Button
              label={"Edit Business"}
              onClick={() => navigate("/business/:id/edit")}
            ></Button>
          </div>
          <div className="flex  justify-center m-5">
            <img src={businessImage} alt="" className="size-60" />
          </div>
          <h3>{businessResponse.business_name}</h3>
          <Table label={""} data={""}>
            <TableRow
              label={"Sector"}
              data={businessResponse.business_types}
            ></TableRow>
          </Table>

          <p className="">{businessResponse.description}</p>
          <SendBusinessImage />
        </Card>

        <div>
          <Card>
            <h2 className="font-bold">Products</h2>
            <Card>
              <img src="../src/assets/product.png" alt="" className="size-60" />
              <h4>Title</h4>
              <h4>Price</h4>
              <p>Descrription :</p>
            </Card>
            <Button
              className="w-full"
              label={"Add Product"}
              onClick={() => navigate("/product/add")}
            ></Button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default BusinessDetailPage;
export { loader as BusinessDetailLoader };
