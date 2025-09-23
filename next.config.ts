import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [
      "./node_modules/@uswds/uswds/packages",
    ],
  },
};

export default nextConfig;
