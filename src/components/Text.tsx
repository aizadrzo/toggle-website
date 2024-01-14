import { cva, type VariantProps } from "class-variance-authority";
import { type ElementType, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Variant = "h1" | "h2" | "h3" | "p" | "small";

type Text = {
  variant: Variant;
  children: ReactNode;
  className?: string;
} & TextVariantProps;

const tags: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  p: "p",
  small: "span",
};

const sizes: Record<Variant, string> = {
  h1: "text-5xl font-semibold sm:text-7xl font-serif",
  h2: "text-3xl font-semibold sm:text-5xl tracking-tight font-serif",
  h3: "text-lg font-semibold sm:text-xl font-serif",
  p: "text-base sm:text-lg font-sans",
  small: "text-xs sm:text-sm font-sans",
};

const Text = ({ variant, children, color, className }: Text) => {
  const sizeClasses = sizes[variant];
  const Tag = tags[variant];

  return <Tag className={twMerge(sizeClasses, className, TextCVA({ color }))}>{children}</Tag>;
};

const TextCVA = cva("", {
  variants: {
    color: {
      primary: "text-black-300",
      secondary: "text-gray-300",
      'dark-primary': 'text-white',
      'dark-secondary': 'text-gray-100'
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

type TextVariantProps = NonNullable<VariantProps<typeof TextCVA>>;

export default Text;
