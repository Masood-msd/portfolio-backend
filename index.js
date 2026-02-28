import "dotenv/config.js";
import express from "express";
import authRouter from "./server/routes/auth-route.js";
import formRoute from "./server/routes/contact-route.js";
import workRouter from "./server/routes/mywork-route.js"
import adminRouter from "./server/routes/admin-router.js"
import connectDb from "./server/utils/auth-mongo.js";
import cors from 'cors'
import errorMiddleware from "./server/middlewares/errormiddleware.js";

const app = express();
const PORT = process.env.PORT;
console.log("uri = ", process.env.MONGODB_URI);

const corsOrigin = {
  origin: "https://portfolio-frontend-nine-rouge.vercel.app",
  methods : "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true
}

app.use(cors(corsOrigin))
app.use(errorMiddleware)
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/form", formRoute);
app.use("/api/data", workRouter)

//===== admin data ========

app.use("/api/admin", adminRouter)


app.use(errorMiddleware);

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Your Server started on http://localhost:${PORT}`);
  });
});
