import { ComponentProps, PropsWithChildren } from "react";
import { Business } from "@/api/Business";
import { Button, Card } from "../../components";
import { useNavigate } from "react-router-dom";
import SendImage from "../business/SendBusinessImage";
import { useBusiness } from "@/hooks/useUserBusiness";

interface BusinessCardProps extends ComponentProps<"div">, PropsWithChildren {
  business: Business;
}

export function BusinessCard({
  children,
  business,
  ...resProps
}: BusinessCardProps) {
  const navigate = useNavigate();

  const { setCurrentBusinessId } = useBusiness();

  const businessImage =
    business.profile_url.length > 0
      ? business.profile_url
      : "../src/assets/dummy.png";

  const handleBusinessDetail = () => {
    setCurrentBusinessId(business.id);
    navigate(`/business/${business.business_name}`);
  };

  return (
    <>
      <Card {...resProps} className="min-w-96">
        <img src={businessImage} alt="" className="size-32" />
        <div>
          <p>
            <span className="font-semibold">Name: </span>
            <span>{business.business_name}</span>
          </p>
          <p>
            <span className="font-semibold">Type: </span>
            <span>{business.business_types}</span>
          </p>
          <p>
            <span className="font-semibold">Description: </span>
            <span>{business.description}</span>
          </p>
          <div className="flex flex-row justify-end gap-2">
            <Button
              className="w-2/5 bg-yellow-400"
              label={"View"}
              onClick={handleBusinessDetail}
            />
            <Button
              className="w-2/5"
              label={"Edit"}
              onClick={() =>
                navigate(`/business/${business.business_name}/edit`)
              }
            />
          </div>
          <div>
            <SendImage />
          </div>
        </div>
      </Card>
    </>
  );
}
