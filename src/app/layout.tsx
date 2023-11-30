import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Provider as QueryClientProvider } from "^/utils/react-query";

import "^/styles/globals.css";

const RootLayout = ({ children }: ChildrenComponent) => {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <QueryClientProvider>
          <MantineProvider>{children}</MantineProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
