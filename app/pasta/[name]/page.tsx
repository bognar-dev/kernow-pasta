import Image from 'next/image';
import { pastaShapes } from '@/app/(config)/config';
export async function generateStaticParams() {
    
    
    return pastaShapes.map((pasta) => ({
      name: pasta.name
    }))
  }


export default function Page({ params }: { params: { name: string} }) {
    console.log(params.name)
    return (
            <div className="h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-[#40352F]">
                <h1>{params.name}</h1>
            </div>
        )
}
