import { Card } from "../../components";
// import Card2 from "../../components/Card/Card2";
import UserProfile from "../user/UserSnippet";

import baseApi from "../../api/baseApi";
import { BusinessPublic } from "@/api/Business";

import { useBusinessList } from "@/hooks/useBusinessList";
import InfiniteScroll from "react-infinite-scroll-component";

export async function loader() {
  const { initBusinessList } = useBusinessList.getState();
  const business = await baseApi
    .get<BusinessPublic>("/business?limit=3")
    .then((d) => {
      initBusinessList(d.data);
      return d.data;
    });
  return business;
}

const BusinessAllPage = () => {
  //const businessAll = useLoaderData() as AllBusiness[];
  const businessList = useBusinessList((s) => s.businessList);
  const { page, total_data, getMoreBusiness, total_page } = useBusinessList();
  const hasMore = page < total_page;
  return (
    <>
      <div className="flex flex-row">
        <InfiniteScroll
          next={getMoreBusiness}
          hasMore={hasMore}
          dataLength={total_data}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {businessList.map((business) => {
            const businessImage =
              business.profile_url.length > 0
                ? business.profile_url
                : "../src/assets/dummy.png";

            const userImage =
              business.profile_url.length > 0
                ? business.profile_url
                : "../src/assets/userDummy.png";

            return (
              <div className="sm:flex flex-row">
                <Card key={business.id}>
                  <div className="flex flex-row gap-3">
                    <img
                      src={userImage}
                      alt=""
                      className="size-10 rounded-full"
                    />
                    <p className="justify-end">{business.username}</p>
                  </div>
                  <div className="flex justify-center">
                    <img src={businessImage} alt="" className="size-full" />
                  </div>
                  <img
                    src={`${business.profile_url} | './src/assets/business.png' `}
                    alt=""
                  />

                  <h3 className="font-semibold">{business.business_name}</h3>
                  <div className="border-0 mr-3 p-3">
                    <p>{business.business_types}</p>
                    <p>{business.user_email}</p>
                    <p>{business.username}</p>
                    <h4 className="font-medium mt-3">Business Description</h4>
                    <p className="truncate ...">{business.description}</p>
                  </div>
                </Card>
                {/* <div className="hidden md:flex">
                  <UserProfile />
                </div> */}
              </div>
            );
          })}
        </InfiniteScroll>
        <div className="hidden md:flex">
          <UserProfile />
        </div>
      </div>
    </>
  );
};

export default BusinessAllPage;

export { loader as AllBusinessLoader };
