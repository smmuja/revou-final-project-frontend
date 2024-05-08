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
      <input type="radio" />

      <Button onClick={handleSetBusinessId}>{business.business_name}</Button>
    </div>
  );
};
