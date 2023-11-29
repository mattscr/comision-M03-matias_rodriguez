import jwt from "jsonwebtoken";
import { settingDotEnv } from "../settings/config.js";

const { secret_key } = settingDotEnv();

export const createAccesToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secret_key, { expiresIn: "1h" }, (err, token) => {
      err ? reject(err) : resolve(token);
    });
  });
};
