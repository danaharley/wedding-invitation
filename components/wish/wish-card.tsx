import { User, WeddingMessage } from "@/app/generated/prisma";
import { TimeAgo } from "@/components/time-ago";

type MessageWithUser = WeddingMessage & {
  user: User;
};

type Props = {
  messages: MessageWithUser[] | null;
};

export const WishCard = ({ messages }: Props) => {
  if (!messages) return null;

  return (
    messages.length > 0 &&
    messages.map((message) => (
      <div
        key={message.id}
        className="rounded-lg p-6 flex flex-col gap-6 h-auto bg-amber-100/5 border border-amber-400/15 backdrop-blur-3xl shadow-lg w-full break-inside-avoid"
      >
        <div>
          <svg
            fill="currentColor"
            viewBox="0 0 8 8"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white/50 mb-3 h-8 w-8 md:h-12 md:w-12"
          >
            <path
              d="M3 0c-1.65 0-3 1.35-3 3v3h3v-3h-2c0-1.11.89-2 2-2v-1zm5 0c-1.65 0-3 1.35-3 3v3h3v-3h-2c0-1.11.89-2 2-2v-1z"
              transform="translate(0 1)"
            />
          </svg>
          <p className="text-amber-50 italic font-mulish tracking-tight">
            {message.message}
          </p>
          <svg
            fill="currentColor"
            viewBox="0 0 8 8"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-6 text-amber-500/50 rotate-180 h-4 w-6 md:h-6 md:w-6"
          >
            <path
              d="M3 0c-1.65 0-3 1.35-3 3v3h3v-3h-2c0-1.11.89-2 2-2v-1zm5 0c-1.65 0-3 1.35-3 3v3h3v-3h-2c0-1.11.89-2 2-2v-1z"
              transform="translate(0 1)"
            />
          </svg>
        </div>
        <div className="flex flex-row gap-2">
          <div className="h-9 w-9 rounded-full flex items-center justify-center bg-amber-800 border border-amber-600">
            <span className="font-bold text-xl text-amber-200">
              {message.user.name.charAt(0)}
            </span>
          </div>
          <div>
            <h2 className="font-semibold tracking-tight text-sm text-amber-600">
              {message.user.name}
            </h2>
            <TimeAgo timestamp={message.createdAt} />
          </div>
        </div>
      </div>
    ))
  );
};
