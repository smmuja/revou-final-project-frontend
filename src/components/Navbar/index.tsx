// import { Hamburger } from "./Hamburger";
// import NavItem from "./NavItem";
import { Link, redirect } from "react-router-dom";
import SearchBar from "./SearchBar";
import IsLogin from "./IsLogin";

import {
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  NavLink,
} from "@mantine/core";
// import { MantineLogo } from "@mantinex/mantine-logo";
import { useDisclosure } from "@mantine/hooks";
import { IconHome2, IconBuildingStore, IconCake } from "@tabler/icons-react";

const Navbar = () => {
  // const navigate = useNavigate ();

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  // const theme = useMantineTheme();

  return (
    <Box pb={0} pt={0}>
      <header className="bg-green-500">
        <Group justify="space-between" h="100%">
          <Link to="/">
            <img src="/src/assets/logo.png" alt="" />
          </Link>
          <Group h="100%" gap={20} visibleFrom="sm">
            <Link to="/" className="">
              Home
            </Link>

            <Link to="/business" className="">
              Business
            </Link>
            <Link to="/product" className="">
              Product
            </Link>
          </Group>
          <IsLogin />

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="sm"
        padding="md"
        // title="InovHub"
        hiddenFrom="sm"
        zIndex={1000000}
        withCloseButton={false}
      >
        <Link to="/">
          <img src="/src/assets/logo.png" alt="" width={150} />
        </Link>
        <Divider my="sm" />

        <Link to="/" className="block ">
          <NavLink
            label="Home"
            leftSection={<IconHome2 size="1rem" stroke={1.5} />}
          />
        </Link>
        <Link to="/business" className="block ">
          <NavLink
            label="Business"
            leftSection={<IconBuildingStore size="1rem" stroke={1.5} />}
          />
        </Link>
        <Link to="/product" className="block ">
          <NavLink
            label="Product"
            leftSection={<IconCake size="1rem" stroke={1.5} />}
          />
        </Link>

        <Divider my="sm" />

        <Group justify="center" grow pb="xl" px="md">
          <Button variant="default" onClick={() => redirect("/login")}>
            Log in
          </Button>
          <Button>Register</Button>
        </Group>
      </Drawer>
    </Box>
  );
};

export default Navbar;
