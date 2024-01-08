import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge'

type Badge = {
    children: ReactNode;
    className?: string;
}

const Badge = ({ children, className }: Badge) =>  (
    <div className={twMerge("py-1 px-4 text-sm bg-gray-50 rounded-md inline-block w-auto", className)}>{children}</div>
  )

export default Badge;