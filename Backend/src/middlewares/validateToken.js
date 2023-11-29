import jwt from "jsonwebtoken";
import { settingDotEnv } from "../settings/config.js";

const { secret_key } = settingDotEnv();

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;
  if (!token)
    return res
      .status(401)
      .json({ message: "Autorización Denegada. por favor inicie sesión" });

  jwt.verify(token, secret_key, (err, user) => {
    if (err) return res.status(403).json({ message: "token invalido" });
    req.user = user;

    next();
  });
};
