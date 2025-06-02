"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

import { useAction } from "@/hooks/use-action";

import { createWeddingMessage } from "@/actions/wedding-message/create";
import { CreateWeddingMessageSchema } from "@/actions/wedding-message/create/schema";

import { User } from "@/app/generated/prisma";

type FormSchemaType = z.output<typeof CreateWeddingMessageSchema>;

type Props = {
  user: User;
};

export const WishForm = ({ user }: Props) => {
  const { register, handleSubmit, reset } = useForm<FormSchemaType>({
    resolver: zodResolver(CreateWeddingMessageSchema),
    defaultValues: {
      message: "",
      userId: user.id,
    },
  });

  const { execute, isLoading } = useAction(createWeddingMessage, {
    onSuccess: () => {
      toast.success("Ucapan terkirim.");
      reset();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (e) => {
    execute({ message: e.message, userId: user.id });
  };

  const disabled = user.id === 0 || user.name === "Tamu Undangan" || isLoading;

  return (
    <form
      className="mx-auto flex max-w-2xl flex-col gap-4 rounded-lg border border-amber-900 bg-amber-600/5 p-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        disabled
        value={user.name}
        type="text"
        placeholder="Name"
        className="rounded-md border border-amber-800/35 bg-amber-950 px-3 py-2 font-semibold text-amber-600 uppercase transition duration-150 outline-none focus:border-amber-900 focus:shadow focus:outline-1 disabled:cursor-not-allowed"
      />
      {user.id === 0 && (
        <p className="-mt-2.5 text-xs text-rose-500">
          Hanya tamu terdaftar yang bisa kirim ucapan.
        </p>
      )}
      <textarea
        placeholder="Write your wishes"
        disabled={disabled}
        className="min-h-24 rounded-md border border-amber-800/35 bg-amber-950 px-3 py-2 text-amber-50 transition duration-150 outline-none focus:border-amber-900 focus:shadow focus:outline-1 disabled:cursor-not-allowed md:min-h-32"
        {...register("message", { required: true })}
      />

      <button
        type="submit"
        disabled={disabled}
        className="rounded-md bg-amber-500 px-3 py-2 font-semibold tracking-tight hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLoading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};
