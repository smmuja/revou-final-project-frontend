import { Button } from "@mantine/core";
import { Business } from "../../api/getUserDetail";
import { useBusiness } from "../../hooks/useUserBusiness";

export const BusinessCard = ({ business }: { business: Business }) => {
  const { setCurrentBusinessId } = useBusiness();
  const handleSetBusinessId = () => {
    setCurrentBusinessId(business.id);
  };
  return (
    <div>
      <p>
        <span>Business Name </span>
        <span>{business.business_name}</span>
      </p>
      <Button onClick={handleSetBusinessId}>Use Business</Button>
    </div>
  );
};
