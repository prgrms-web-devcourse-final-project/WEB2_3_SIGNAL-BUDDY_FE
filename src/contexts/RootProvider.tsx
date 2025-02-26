"use client";

import AuthContext from "./AuthContext";

type Props = {
  children: React.ReactNode;
};

export default function RootProvider({ children }: Props) {
  return <AuthContext>{children}</AuthContext>;
}
