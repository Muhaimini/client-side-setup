"use client";

import React, { memo } from "react";
import HomeLayout from "^/layouts/home";
import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";

const Home = () => {
  const { push } = useRouter();
  return (
    <HomeLayout>
      <HomeLayout.Header>
        <Button
          color="dark"
          variant="outline"
          onClick={() => push("/dashboard")}
        >
          go to dashborad
        </Button>
      </HomeLayout.Header>

      <HomeLayout.Body>
        <div>hello</div>
        <div>oke</div>
      </HomeLayout.Body>

      <HomeLayout.Footer>Test!</HomeLayout.Footer>
    </HomeLayout>
  );
};

export default memo(Home);
