import { ComponentProps, PropsWithChildren } from "react";
import { Business } from "../../api/getUserDetail";

interface BusinessCardProps extends ComponentProps<"div">, PropsWithChildren {
  business: Business;
}

export function BusinessCard({
  children,
  business,
  ...resProps
}: BusinessCardProps) {
  const businessImage =
    business.profile_url.length > 0
      ? business.profile_url
      : "../src/assets/business.png";
  return (
    <div {...resProps}>
      <img src={businessImage} alt="" />
      <div>
        <p>
          <span>Name</span>
          <span>{business.business_name}</span>
        </p>
        <p>
          <span>Type</span>
          <span>{business.business_types}</span>
        </p>
        <p>
          <span>Description </span>
          <span>{business.description}</span>
        </p>
      </div>
    </div>
  );
}
