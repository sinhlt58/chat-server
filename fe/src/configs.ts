export const ENV_DEVELOPMENT = "development";
export const ENV_PRODUCTION = "production";

export const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "";
export const ENV = process.env.REACT_APP_ENV || ENV_DEVELOPMENT;

export const configs = {
  isDevelopment: ENV === ENV_DEVELOPMENT,
  isProduction: ENV === ENV_PRODUCTION,
};
