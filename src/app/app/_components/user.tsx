'use client'

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

type UserProps = {
  user: Session["user"];
};

const User = ({ user }: UserProps) => {
  if (!user) return;
  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <Avatar>
        <AvatarFallback>
          {user.email && user.email[0].toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <span>{user.email}</span>

      <Button onClick={() => signOut()} variant="outline">Sair da conta</Button>
    </div>
  );
};

export default User;
