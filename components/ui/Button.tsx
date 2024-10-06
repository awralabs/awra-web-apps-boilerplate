import classNames from "classnames";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  kind?: string;
  className?: string;
}

export default function Button({
  children,
  kind = "primary",
  className,
  ...props
}: ButtonProps): JSX.Element {
  const kinds = {
    primary: "w-max h-max bg-primary text-white hover:bg-primary/90 px-4 py-2",
    secondary:
      "w-max h-max bg-transparent text-primary hover:text-white border border-primary hover:bg-primary px-4 py-2",
  };

  return (
    <button className={classNames(kinds[kind], className)} {...props}>
      {children}
    </button>
  );
}
