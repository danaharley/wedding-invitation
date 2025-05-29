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
        "font-prata text-3xl md:text-5xl text-white md:text-center",
        props.className
      )}
    >
      <h1 className="capitalize font-bold">
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
            "font-medium text-sm mt-2 md:text-base",
            props.descriptionClassName
          )}
        >
          {props.description}
        </p>
      )}
    </div>
  );
};
