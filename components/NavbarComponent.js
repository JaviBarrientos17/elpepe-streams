import React from "react";
import { Navbar, Button, Link, Text, useTheme } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import "../styles/globals.css";

export default function App() {
  const [variant, setVariant] = React.useState("default");
  const [activeColor, setActiveColor] = React.useState("primary");

  return (
    <Layout>
      <Navbar isBordered="no" variant="static">
        <Navbar.Brand>
          {/* // TODO ADD LOGO */}
          <Text b color="inherit" hideIn="xs">
            ElPepe Streams
          </Text>
        </Navbar.Brand>
        <Navbar.Content activeColor={activeColor} hideIn="xs" variant={variant}>
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">
            Customers
          </Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
}
