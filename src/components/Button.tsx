import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface Button extends ComponentPropsWithRef<"button">,
ButtonVariantProps {}

const Button = ({ children, size, variant, className, ...props}: Button) => (
    <button {...props} className={twMerge(ButtonCVA({ variant, size, className}))}>{children}</button>
  )

export default Button

const ButtonCVA = cva("btn rounded-md capitalize h-auto font-medium transition duration-300 ease-in-out text-base font-semibold", {
    variants: {
        variant: {
            primary: "btn-contain bg-[#0057ff] text-white hover:bg-[#0057ff]",
            secondary: "btn bg-black text-white border border-black bg-[#181818] hover:bg-[#181818] hover:border-black",
        },
        size: {
            'sm': 'px-6 text-sm',
            'default':'h-14 px-9 text-lg',
          }
    },
    defaultVariants: {
        variant: 'primary',
        size: 'default'
    }
})

type ButtonVariantProps = NonNullable<VariantProps<typeof ButtonCVA>>;
