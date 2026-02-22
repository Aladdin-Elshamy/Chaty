import z from "zod";

const SignUpSchema = z.object({
  fullName: z.string("Please enter your full name"),
  email: z.email("Please enter a valid email"),
  password: z.string("Please enter a password").min(8, "Min length is 8 chars"),
});

export default SignUpSchema;
