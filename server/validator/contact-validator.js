import * as z from "zod";

const contactValidator = z.object({
     username:z
     .string({required_error : "Username required"}),

     email:z
     .email({email:"Email required"}),

     message:z
     .string({required_error:"Message cannot be empty"})
     
})
export default contactValidator    