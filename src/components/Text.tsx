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
  h1: "text-4xl font-bold sm:text-6xl",
  h2: "text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl",
  h3: "text-lg font-semibold sm:text-xl",
  p: "text-base sm:text-lg",
  small: "text-xs sm:text-sm",
};

const Text = ({ variant, children, color, className }: Text) => {
  const sizeClasses = sizes[variant];
  const Tag = tags[variant];

  return <Tag className={twMerge(sizeClasses, className, TextCVA({ color }))}>{children}</Tag>;
};

const TextCVA = cva("", {
  variants: {
    color: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      'dark-primary': 'text-gray-50',
      'dark-secondary': 'text-gray-200'
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

type TextVariantProps = NonNullable<VariantProps<typeof TextCVA>>;

export default Text;
