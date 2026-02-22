import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRightIcon, Lock, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import loginSchema from "../schemas/LoginSchema";

interface LoginFormData {
  email: string;
  password: string;
}
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = (data: LoginFormData) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center gap-4 py-4">
        <div className="max-w-[90%] w-full mx-auto">
          <label htmlFor="email">Email</label>
          <div className="relative">
            <input
              type="email"
              placeholder="John Doe"
              {...register("email")}
              className="input pl-10 w-full"
            />
            <Mail className="absolute top-1/2 -translate-y-1/2 ml-2" />
          </div>
          {errors.email?.message}
        </div>
        <div className="max-w-[90%] w-full mx-auto">
          <label htmlFor="password">Password</label>
          <div className="relative">
            <input
              type="password"
              placeholder="••••••••"
              {...register("password")}
              name="password"
              className="input pl-10 w-full"
            />
            <Lock className="absolute top-1/2 -translate-y-1/2 ml-2" />
          </div>
          {errors.password?.message}
        </div>
        <button className="border max-w-[90%] mt-4 border-info-content btn shadow-[0] btn-block">
          Login <ArrowRightIcon />
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
