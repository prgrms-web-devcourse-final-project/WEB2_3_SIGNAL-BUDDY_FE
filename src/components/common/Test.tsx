"use client";

import { Button } from "@/components/ui/button";
import { refresh } from "@/src/services/auth.service";
import { useSession } from "next-auth/react";

export default function Test() {
  const { data: session } = useSession();
  const handleGetTest = async () => {
    try {
      const res = await refresh();
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };
  return <>{session && <Button onClick={handleGetTest}>Test</Button>}</>;
}
