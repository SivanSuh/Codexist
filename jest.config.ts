import type { Config } from "jest"

export default async () :Promise<Config> => {
    return {
        verbose:true
    }
}

module.exports = {
    testMatch: ["<rootDir>/src/**/*.test.tsx"],
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
      },
      testEnvironment:"jest-environment-jsdom"
  };