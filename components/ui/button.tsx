"use client"

import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center border bg-clip-padding text-sm font-bold whitespace-nowrap transition-all outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 uppercase tracking-wider font-family:var(--font-ibmplexmonibold)",
  {
    variants: {
      variant: {
        default: "border-[4px] border-[#0a0a0a] bg-[#0a0a0a] text-[#f5f0e8] shadow-neo hover:shadow-neo-lg active:translate-y-0.5 dark:border-[#f5f0e8] dark:bg-[#f5f0e8] dark:text-[#0a0a0a]",
        outline:
          "border-[3px] border-[#0a0a0a] bg-[#f5f0e8] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#f5f0e8] hover:shadow-neo aria-expanded:bg-[#0a0a0a] aria-expanded:text-[#f5f0e8] dark:border-[#f5f0e8] dark:bg-[#0a0a0a] dark:text-[#f5f0e8] dark:hover:bg-[#f5f0e8] dark:hover:text-[#0a0a0a]",
        secondary:
          "border-[3px] border-[#0066ff] bg-[#0066ff] text-[#f5f0e8] shadow-neo hover:shadow-neo-lg active:translate-y-0.5 dark:border-[#0066ff] dark:bg-[#0066ff] dark:text-[#0a0a0a]",
        ghost:
          "border-[3px] border-transparent hover:border-[#0a0a0a] hover:bg-[#f5f0e8] hover:text-[#0a0a0a] aria-expanded:border-[#0a0a0a] aria-expanded:bg-[#f5f0e8] dark:hover:border-[#f5f0e8] dark:hover:bg-[#1a1a1a] dark:hover:text-[#f5f0e8]",
        destructive:
          "border-[3px] border-[#ff3333] bg-[#ffcccc] text-[#8b0000] hover:bg-[#ff3333] hover:text-[#f5f0e8] shadow-neo dark:bg-[#ff3333] dark:text-[#0a0a0a] dark:border-[#ff3333]",
        link: "text-[#0a0a0a] underline-offset-4 hover:underline dark:text-[#f5f0e8]",
      },
      size: {
        default:
          "h-10 gap-2 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        xs: "h-7 gap-1 px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 px-3 text-[0.8rem] has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-12 gap-2 px-6 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4 text-base",
        icon: "size-10",
        "icon-xs":
          "size-7 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
