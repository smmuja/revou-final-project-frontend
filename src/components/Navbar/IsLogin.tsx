// import { ImProfile } from "react-icons/im";
// import { FiLogOut } from "react-icons/fi";
import { Link, redirect } from "react-router-dom";
import { getCookies, setCookies } from "../../utils/cookie";
import { NavLink, Group, Button } from "@mantine/core";
import { IconUser, IconLogout } from "@tabler/icons-react";

const IsLogin = () => {
  const access_token = getCookies();
  const isLogin = access_token!.length > 0;
  const handleLogout = () => {
    setCookies("");
    redirect("/login");
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
          <Button
            className="mt-5"
            variant="default"
            onClick={() => redirect("/login")}
          >
            Log in
          </Button>
          <Button className="mt-5" onClick={() => redirect("/register ")}>
            Register
          </Button>
        </Group>
      )}
    </div>
  );
};

export default IsLogin;
