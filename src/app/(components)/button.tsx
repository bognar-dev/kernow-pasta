import { cn } from "@/app/(lib)/utils"

const Button = (props:{onClick?:()=>void,children: React.ReactNode,className?:string}) => { 
    
    return (
      
        <button className={cn(' text-2xl border px-2 pb-1 mt-3 rounded-sm border-[#40352F]',props.className)}
          onClick={props.onClick}
        >
          {props.children}
        </button>
     
    )
  }


export default Button