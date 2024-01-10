import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface Button extends ComponentPropsWithRef<"button">,
ButtonVariantProps {}

const Button = ({ children, size, variant, className, ...props}: Button) => (
    <button {...props} className={twMerge(ButtonCVA({ variant, size, className}))}>{children}</button>
  )

export default Button

const ButtonCVA = cva("btn rounded-md capitalize h-auto font-medium transition duration-300 ease-in-out text-base font-semibold font-serif", {
    variants: {
        variant: {
            primary: "btn-contain bg-blue-500 border-none text-white hover:bg-blue-700",
            secondary: "btn-outline btn-secondary",
        },
        size: {
            'sm': 'btn-sm py-1.5 px-3 text-sm',
            'default':'py-4 px-5 text-xl',
          }
    },
    defaultVariants: {
        variant: 'primary',
    }
})

type ButtonVariantProps = NonNullable<VariantProps<typeof ButtonCVA>>;
