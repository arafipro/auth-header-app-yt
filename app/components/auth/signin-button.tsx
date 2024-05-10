import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";

export default function SigninButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <Button type="submit" variant={"outline"}>
        {children}
      </Button>
    </form>
  );
}
