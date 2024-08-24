"use client";

import { Url } from "next/dist/shared/lib/router/router";
import styles from "./button.module.scss";
import Link from "next/link";
import { FC, ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  className?: string;
  variant?: string;
  color?: string;
  type?: string;
  size?: string;
  children: ReactNode;
  href?: Url;
  ref?: string;
  target?: string;
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({
  className,
  variant,
  color,
  type,
  size,
  children,
  href,
  ref,
  ...props
}) => {
  const variants = !variant
    ? styles.DefaultVariant
    : variant == "outline" && styles.OutlineVariant;

  const sizes = !size
    ? styles.DefaultSize
    : size == "sm"
      ? styles.SmSize
      : size == "lg"
        ? styles.LgSize
        : size == "icon" && styles.IconSize;

  const colors = !color
    ? styles.DefaultColor
    : color == "muted" && styles.MutedColor;

  const types = !type
    ? styles.defaulttype
    : type == "withicon" && styles.withicontype;

  const classNames = [sizes, variants, colors, types];
  return (
    <>
      {href ? (
        <Link
          href={href}
          ref={ref}
          className={clsx(classNames, className)}
          {...props}
        >
          {children}
        </Link>
      ) : (
        <button ref={ref} {...props} className={clsx(classNames, className)}>
          {children}
        </button>
      )}
    </>
  );
};

// export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
// 	({ className, variant, size, asChild = false, ...props }, ref) => {
// 		const Comp = asChild ? Slot : 'button'
// 		return (
// 			<Comp
// 				className={clsx(buttonVariants({ variant, size, className }))}
// 				ref={ref}
// 				{...props}
// 			/>
// 		)
// 	}
// )
