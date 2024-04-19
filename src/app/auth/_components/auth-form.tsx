"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";

const AuthForm = () => {
  const form = useForm();

  const handleSubmit = form.handleSubmit(async (data) => {
    console.log(data);

    try {
      await signIn("email", { email: data.email, redirect: false });
      toast({
        title: "Magic Link Sent",
        description: "Check you email for the magic link to login",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "An error ocurred. Please try again.",
      });
    }
  });

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="m@example.com"
              required
              type="email"
              {...form.register("email")}
            />
          </div>
          <Button className="w-full" type="submit">
            Send Magic Link
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AuthForm;
