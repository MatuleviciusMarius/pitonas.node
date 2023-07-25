import dotenv from "dotenv";

dotenv.config();

type Config = {
  port: number;
  sendgridApiKey: string;
  gmailPass: string;
};

const getEnvVariable = (name: string): string => {
  const value = process.env[name];

  if (!value) {
    throw new Error(`${name} not found in process.env`);
  }

  return value;
};

const config: Config = {
  port: parseInt(getEnvVariable("PORT")),
  sendgridApiKey: getEnvVariable("SENDGRID_API_KEY"),
  gmailPass: getEnvVariable("GMAIL_PASS"),
};

export default config;
