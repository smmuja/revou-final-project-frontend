// import { useLoaderData } from "react-router-dom";
// import baseApi from "../../api/baseApi";
// import { getBusinessDetail } from "../../api/getBusinessDetail";
import { useNavigate } from "react-router-dom";
import { Button, Card, Table, TableRow } from "../../components";
// import Business from ".";

// export async function loader() {
//   const business = await baseApi
//     .get<getBusinessDetail>("/business/{business_id}")
//     .then((d) => d.data);

//   return business;
//   // console.log(business);
// }

// export async function loader({params}) {
//   const business = await baseApi
//   .get<getBusinessDetail>(`/business/${}`)
// }

const BusinessDetail = () => {
  const navigate = useNavigate();
  // const businessDetail = useLoaderData() as getBusinessDetail;

  return (
    <>
      <div>
        {/* <Card padding={15} key={businessDetail.id}>
          <h2 className="font-bold">Business Information</h2>
          <img src="../src/assets/business.png" alt="" className="size-60" />
          <h4>Sector : {businessDetail.business_types}</h4>
          <h4>Established at: {}</h4>
          <h4>Number of employees: </h4>
          <h4>Address: </h4>
          <p className="truncate ...">
            Description: Lorem ipsum dolor sit amet consectetur, adipisicing
            elit.
          </p>
        </Card> */}

        {/* <div>
          <Card>
            <h2 className="font-bold">Products</h2>
            <img src="../src/assets/product.png" alt="" className="size-60" />
            <h4>Title</h4>
            <h4>Price</h4>
            <p>Descrription :</p>
          </Card>
        </div> */}
      </div>

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
            <img src="../src/assets/business.png" alt="" className="size-60" />
          </div>
          <Table label={""} data={""}>
            <TableRow label={"Sector"} data={"Sector"}></TableRow>
            <TableRow label={"Established at:"} data={"00-00-00"}></TableRow>
            <TableRow label={"Number of employees: "} data={"00"}></TableRow>
            <TableRow label={"Address"} data={"Address detail"}></TableRow>
          </Table>

          <p className="">
            Description: Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Asperiores velit sit quod voluptatum obcaecati iure provident
            reprehenderit quos itaque commodi consequuntur, nihil nostrum
            corrupti, ipsam deleniti temporibus exercitationem. Illum,
            voluptatibus!
          </p>
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

export default BusinessDetail;
// export { loader as BusinessDetailLoader };
