import React from "react";
import { Button } from "@mantine/core";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div>Hello!</div>
      <Button variant="outline" color="dark">
        <Link href="/dashboard">hello!</Link>
      </Button>
    </div>
  );
};

export default Home;
