import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface Button extends ComponentPropsWithRef<"button">,
ButtonVariantProps {}

const Button = ({ children, size, variant, className, ...props}: Button) => (
    <button {...props} className={twMerge(ButtonCVA({ variant, size, className}))}>{children}</button>
  )

export default Button

const ButtonCVA = cva("btn rounded-md capitalize h-auto font-medium transition duration-300 ease-in-out text-base font-semibold font-serif leading-none", {
    variants: {
        variant: {
            primary: "btn-contain bg-yolk-100 border-none text-black-300 hover:bg-yolk-200",
            secondary: "btn-link btn-secondary underline-offset-2",
        },
        size: {
            'sm': 'btn-sm py-1.5 px-3 text-base',
            'default':'py-4 px-5 text-lg tracking-wide',
          }
    },
    defaultVariants: {
        variant: 'primary',
        size:'default'
    }
})

type ButtonVariantProps = NonNullable<VariantProps<typeof ButtonCVA>>;
