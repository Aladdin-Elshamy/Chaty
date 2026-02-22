import z from "zod";

const loginSchema = z.object({
  email: z.email("Please enter a valid email"),
  password: z.string("Please enter a password").min(8, "Min length is 8 chars"),
});


export default loginSchema