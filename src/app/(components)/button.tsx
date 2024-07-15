import * as React from "react"
 
import { cn } from "@/app/(lib)/utils"
 

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className,  ...props }, ref) => {
    
    return (
      
        <button className={cn(' text-2xl border px-2 pb-1 mt-3 rounded-sm border-[#40352F]',className)}
          onClick={props.onClick}
        >
          {props.children}
        </button>
     
    )
  }

)

Button.displayName = "Button"
export default Button