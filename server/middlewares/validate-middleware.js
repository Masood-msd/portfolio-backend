import { ZodError } from "zod";

const ValidateRegister = (Schema) => async (req, res, next) => {
  try {
    const parseBody = await Schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    let error = {
      status: 422,
      message: "Validation failed",
      extraDetails: err.message,
    };

    if (err instanceof ZodError) {
      error.extraDetails = err.issues[0].message;
    }

    next(error);
  }
};

export default ValidateRegister;
