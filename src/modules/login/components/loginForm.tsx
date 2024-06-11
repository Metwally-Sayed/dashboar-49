import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginFormSchema } from "../core/schema";
import { toast } from "@/components/ui/use-toast";
import { login } from "../core/requests";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "@/lib/hooks/useAuth";

type Props = {};

const LoginForm = (props: Props) => {
  const { setAuth, auth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    const loginValues = { ...values, fcmToken: "2131312" };
    try {
      const { data } = await login(loginValues);
      if (data.status) {
        const accessToken = await data.data.accessToken;
        const refreshToken = await data.data.refreshToken;
        // localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        setAuth({ email: values.email, accessToken, refreshToken });
        toast({
          title: "Login Successful",
        });
        navigate(from, { replace: true });
      }
      console.log(data);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
      });
      console.log(error);
    }
  };
  console.log(auth);

  return (
    <div className="flex flex-col w-1/3 border rounded-lg shadow-lg p-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
