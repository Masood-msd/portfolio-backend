import * as z from "zod";

const RegisterValidator = z.object({
  username: z
    .string({ required_error: "Username Required" })
    .trim()
    .min(3, { message: "Username must be at least 3 Characters" })
    .max(100, { message: "Username must be maximum 100 Characters" }),
  email: z
    .email({ required_error: "Email Required" })
    .trim()
    .min(4, { message: "Email Must be at least 4 Characters" })
    .max(110, { message: "Email maximum 110 Characters allowed" }),
  number: z
    .string({ required_error: "Phone Number required" })
    .trim()
    .min(10, {message : "Phone number minimum 10 digits"})
    .max(14, {message: "number maximum 14 digits only"}),
  password: z
    .string({ required_error: "Password Required" })
    .min(6, { message: "Password must be minimum 6 characters" })
    .max(200, { message: "Maximum 200 Characters allowed" }),
});

export default RegisterValidator;
