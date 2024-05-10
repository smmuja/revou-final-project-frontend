import { Card } from "../../components";
// import Card2 from "../../components/Card/Card2";
import UserProfile from "../user/UserSnippet";

import baseApi from "../../api/baseApi";
import { AllBusiness } from "../../api/getBusinessAll";

import { useLoaderData } from "react-router-dom";
// import { AxiosResponse } from "axios";

export async function loader() {
  const business = await baseApi
    .get<AllBusiness[]>("/business")
    .then((d) => d.data);
  //   console.log(product);
  return business;
}

const Business = () => {
  const businessAll = useLoaderData() as AllBusiness[];
  //   console.log(business);
  return (
    <>
      <div className="flex flex-row">
        <div>
          {businessAll.map((business) => {
            return (
              <div className="sm:flex flex-row">
                <Card key={business.id}>
                  <div className="flex flex-row gap-3">
                    <img
                      src={business.profile_url}
                      alt=""
                      className="size-10 rounded-full"
                    />
                    <p className="justify-end">{business.username}</p>
                  </div>
                  <div className="flex justify-center">
                    <img
                      src={business.profile_url}
                      alt=""
                      className="size-60"
                    />
                  </div>
                  <img
                    src={`${business.profile_url} | './src/assets/business.png' `}
                    alt=""
                  />
                  {/* <div className="flex flex -row">
                <p>Joined :{business.create_at}</p>
                <p></p>
              </div> */}
                  <h3 className="font-semibold">{business.business_name}</h3>
                  <div className="border-0 mr-3 p-3">
                    <p>{business.business_types}</p>
                    <p>{business.user_email}</p>
                    <p>{business.username}</p>
                    <h4 className="font-medium mt-3">Business Description</h4>
                    <p className="truncate ...">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Possimus aspernatur asperiores ipsa, itaque magnam
                      recusandae, voluptatum eligendi nisi molestias sequi, quas
                      molestiae inventore ea quasi perferendis commodi delectus!
                      Qui, inventore!
                    </p>
                  </div>
                </Card>
                <div className="hidden md:flex">
                  <UserProfile />
                </div>
              </div>
            );
          })}
        </div>
        <div className="hidden md:flex">
          <UserProfile />
        </div>
      </div>
    </>
  );
};

export default Business;

export { loader as AllBusinessLoader };
