import { validationResult, body } from "express-validator";

//register validation
export const registerValidate = [
  body("username")
    .notEmpty()
    .withMessage("Username no debe estar vacío")
    .isLength({ min: 6 })
    .withMessage("El Username debe tener al menos 6 caractéres"),

  body("email").isEmail().withMessage("Por favor ingrese un mail válido"),

  body("password")
    .notEmpty()
    .withMessage("El Password es obligatorio")
    .isLength({ min: 6 })
    .withMessage("Longitud mínima: 6 caractéres"),
];

//login validation
export const loginValidate = [
  body("email").isEmail().withMessage("Por favor ingrese un mail válido"),

  body("password")
    .notEmpty()
    .withMessage("El Password es obligatorio")
    .isLength({ min: 6 })
    .withMessage("Longitud mínima: 6 caractéres"),
];

export const handleErrorValidations = (req, res, next) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json([error.errors[0].msg]);
  }
  next();
};
