import React from "react";
import { Navbar, Text } from "@nextui-org/react";
import { Layout } from "../components/Layout";

export default function App() {
  return (
    <Layout>
      <Navbar variant="static">
        <Navbar.Brand>
          {/* // TODO ADD LOGO */}
          <Text color="inherit" hideIn="xs">
            ElPepe Streams
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
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
