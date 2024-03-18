"use client";

import { useFormState, useFormStatus } from "react-dom";
import { AlertCircle } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Background from "@/asset/bioskop.jpg"

import { onSubmitLogin } from "@/utils/actions/auth";

const initialState = {
  message: "",
};

export default function Page() {
  const [state, formAction] = useFormState(onSubmitLogin, initialState);
  const { pending } = useFormStatus();

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center">
        <Card className="max-w-md w-full flex flex-col gap-y-6 shadow-lg p-10 bg-slate-900 border-none rounded-2xl">
        <a className="flex flex-col place-items-center">
          <span className="text-red-600 text-bold">Stream</span>ID</a>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Login into your account to watch movie in StreamID
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            action={formAction}
            className="flex flex-col gap-6 items-center"
          >
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                placeholder="Username"
                required
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <Button
              size="lg"
              type="submit"
              disabled={pending}
              aria-disabled={pending}
            >
              Login
            </Button>
          </form>
        </CardContent>
        {state.message.length !== 0 ? (
          <CardFooter>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{state.message}</AlertDescription>
            </Alert>
          </CardFooter>
        ) : null}
      </Card>
    </div>
  );
}