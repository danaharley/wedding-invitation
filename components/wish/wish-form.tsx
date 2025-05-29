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
      className="max-w-2xl mx-auto flex flex-col border p-6 rounded-lg border-amber-900 gap-4 bg-amber-600/5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        disabled
        value={user.name}
        type="text"
        placeholder="Name"
        className="rounded-md px-3 py-2 text-amber-600 border uppercase bg-amber-950 border-amber-800/35 focus:outline-1 transition duration-150 outline-none focus:shadow focus:border-amber-900 disabled:cursor-not-allowed font-semibold"
      />
      {user.id === 0 && (
        <p className="text-rose-500 text-xs -mt-2.5">
          Hanya tamu terdaftar yang bisa kirim ucapan.
        </p>
      )}
      <textarea
        placeholder="Write your wishes"
        disabled={disabled}
        className="rounded-md px-3 py-2 min-h-24 md:min-h-32 text-amber-50 border bg-amber-950 border-amber-800/35 focus:outline-1 transition duration-150 outline-none focus:shadow focus:border-amber-900 disabled:cursor-not-allowed"
        {...register("message", { required: true })}
      />

      <button
        type="submit"
        disabled={disabled}
        className="bg-amber-500 px-3 py-2 rounded-md font-semibold tracking-tight hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLoading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};
