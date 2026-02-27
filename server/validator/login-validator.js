import * as z from "zod";

const LoginValidator = z.object({
  email: z
    .email({ required_error: "Email Required" })
    .trim()
    .min(4, { message: "Email Must be at least 4 Characters" })
    .max(110, { message: "Email maximum 110 Characters allowed" }),
  password: z
    .string({ required_error: "Password Required" })
    .min(6, { message: "Password must be minimum 6 characters" })
    .max(200, { message: "Maximum 200 Characters allowed" }),
});
export default LoginValidator;
