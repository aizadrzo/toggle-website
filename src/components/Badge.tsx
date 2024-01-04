import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge'

type Badge = {
    children: ReactNode;
    className?: string;
}

const Badge = ({ children, className }: Badge) =>  (
    <div className={twMerge("py-1 px-2 text-base bg-slate-600 rounded-md", className)}>{children}</div>
  )

export default Badge;