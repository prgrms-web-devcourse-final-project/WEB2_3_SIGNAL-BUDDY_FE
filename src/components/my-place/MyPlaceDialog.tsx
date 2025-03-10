"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import client from "@/src/lib/api/client";
import { Bookmark } from "@/src/types/my-place";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "sonner";

interface MyPlaceNameChangeDialogProps {
  children: React.ReactNode;
  currentName?: string;
  bookmark: Bookmark;
  onSubmit?: (newName: string) => void;
}

interface RenameBody {
  lng: number;
  lat: number;
  address: string;
  name: string;
}

export function MyPlaceNameChangeDialog({
  children,
  bookmark,
}: MyPlaceNameChangeDialogProps) {
  const { data: session, status } = useSession();
  const { bookmarkId, lng, lat, address, name } = bookmark;
  const [newName, setNewName] = useState<string>("");
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);

  const renameMutation = useMutation({
    mutationFn: async (newName: string) => {
      if (!session?.user?.memberId) return;
      const body = {
        lng: lng,
        lat: lat,
        address: address,
        name: newName,
      };
      const response = await client.patch(
        `/api/members/${session.user.memberId}/bookmarks/${bookmarkId}`,
        body,
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["myPlaces", session?.user?.memberId],
      });
      setOpen(false);
    },
  });

  const handleSave = () => {
    if (!newName.trim() || newName === name) {
      toast.error("새로운 장소명을 입력해주세요.");
      return;
    }
    renameMutation.mutate(newName);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{name} 장소명 변경</DialogTitle>
          <DialogDescription>
            새롭게 변경하고 싶은 장소명을 입력해 주세요.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="new-name" className="text-right">
              새로운 장소명
            </Label>
            <Input
              id="new-name"
              onChange={(e) => setNewName(e.target.value)}
              className="col-span-3"
              required
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSave}>
            저장
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
