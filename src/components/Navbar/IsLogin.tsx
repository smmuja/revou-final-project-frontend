// import { ImProfile } from "react-icons/im";
// import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { getCookies, setCookies } from "../../utils/cookie";
import { NavLink, Group, Button } from "@mantine/core";
import { IconUser, IconLogout } from "@tabler/icons-react";
// import { use } from "react-router-dom";

/**
 * 
 *  Abc1Abc1.
dummy2@email.com
 */
const IsLogin = () => {
  const access_token = getCookies() || "";
  const isLogin = access_token?.length > 0;
  const navigate = useNavigate();

  const handleLogout = () => {
    setCookies("");
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-row gap-5">
      {isLogin ? (
        <Group>
          <Link to="/user/:id" className="">
            <NavLink
              label="Profile"
              leftSection={<IconUser size="1rem" stroke={1.5} />}
            />
          </Link>
          <Button
            variant="transparent"
            color=""
            className="text-sm"
            onClick={handleLogout}
          >
            <IconLogout />
            Logout
          </Button>
        </Group>
      ) : (
        <Group justify="center" grow pb="xl" px="md">
          <Button className="mt-5" variant="default" onClick={handleLogin}>
            Log in
          </Button>
          <Button className="mt-5" onClick={handleRegister}>
            Register
          </Button>
        </Group>
      )}
    </div>
  );
};

export default IsLogin;
