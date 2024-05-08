// import { Hamburger } from "./Hamburger";
// import NavItem from "./NavItem";
import { Link } from "react-router-dom";
// import SearchBar from "./SearchBar";
import IsLogin from "./IsLogin";

import { Group, Divider, Box, Burger, Drawer, NavLink } from "@mantine/core";
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
              <NavLink
                label="Home"
                leftSection={
                  <IconHome2 size="1rem" stroke={1.5} className="" />
                }
              />
            </Link>

            <Link to="/business" className="">
              <NavLink
                label="Business"
                leftSection={
                  <IconBuildingStore size="1rem" stroke={1.5} className="" />
                }
              />
            </Link>
            <Link to="/product" className="">
              <NavLink
                label="Product"
                leftSection={<IconCake size="1rem" stroke={1.5} className="" />}
              />
            </Link>
            <Group>
              <IsLogin />
            </Group>
          </Group>

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
          <IsLogin />
        </Group>
      </Drawer>
    </Box>
  );
};

export default Navbar;
