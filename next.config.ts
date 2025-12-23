import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    loadPaths: ["./node_modules/@uswds/uswds/packages"],
    implementation: "sass-embedded",
  },
};

export default nextConfig;
