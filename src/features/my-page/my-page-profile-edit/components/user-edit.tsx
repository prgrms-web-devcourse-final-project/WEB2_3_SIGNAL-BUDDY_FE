"use client";

import { useState } from "react";
import { User } from "next-auth";
import ProfileEdit from "@/src/features/my-page/my-page-profile-edit/components/profile-edit";
import UserConfirm from "@/src/features/my-page/my-page-profile-edit/components/user-confirm";
type Props = {
  user: User;
};

export default function UserEdit({ user }: Props) {
  const [confirm, setConfirm] = useState<boolean>(false);
  return (
    <>
      {confirm ? (
        <ProfileEdit user={user} />
      ) : (
        <UserConfirm onConfirm={() => setConfirm(true)} />
      )}
    </>
  );
}
