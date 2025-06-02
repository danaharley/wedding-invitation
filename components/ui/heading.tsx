import { cn } from "@/lib/utils";

type BaseProps = {
  description?: string;
  className?: string;
  descriptionClassName?: string;
};

type SingleOrMultiple =
  | { type?: undefined; title: string }
  | { type: "multiple"; title: string; subTitle: string };

type HeadingProps = BaseProps & SingleOrMultiple;

export const Heading = (props: HeadingProps) => {
  return (
    <div
      className={cn(
        "font-prata text-3xl text-white md:text-center md:text-5xl",
        props.className,
      )}
    >
      <h1 className="font-bold capitalize">
        {props.type === "multiple" ? (
          <>
            {`${props.title}`} <br /> {`${props.subTitle}`}
          </>
        ) : (
          props.title
        )}
      </h1>
      {props.description && (
        <p
          className={cn(
            "mt-2 text-sm font-medium md:text-base",
            props.descriptionClassName,
          )}
        >
          {props.description}
        </p>
      )}
    </div>
  );
};
