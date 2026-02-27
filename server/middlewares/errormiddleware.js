const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Backend Error (error middleware)";
  const extraDetails = err.extraDetails || "Error from Backend error middleware";

  return res.status(status).json({ message, extraDetails });
  next()
};
export default errorMiddleware;
