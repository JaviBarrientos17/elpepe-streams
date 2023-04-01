import React from "react";
import { Navbar, Text } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { Logo } from "./Logo.js";

export default function NavbarComponent() {
  const [variant, setVariant] = React.useState("default");
  const [activeColor, setActiveColor] = React.useState("primary");

  return (
    <Layout>
      <Navbar isBordered="no" variant="static" activeColor={setActiveColor}>
        <Navbar.Brand>
          <Logo />
          <Text color="inherit" hideIn="xs">
            ElPepe Streams
          </Text>
        </Navbar.Brand>
        <Navbar.Content activeColor={activeColor} hideIn="xs" variant={variant}>
          <Navbar.Link href="/repeticiones">Repeticiones</Navbar.Link>
          <Navbar.Link href="#">Peliculas</Navbar.Link>
          <Navbar.Link href="#">Series</Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
}
