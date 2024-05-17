import Image from 'next/image';
import { pastaShapes } from '@/app/(config)/config';
import { notFound } from 'next/navigation';
import Button from '@/app/(components)/button';
import { CustomMDX } from '@/app/(components)/mdx';
export async function generateStaticParams() {


  return pastaShapes.map((pasta) => ({
    name: pasta.name
  }))
}


export default function Page({ params }: { params: { name: string } }) {
  const pasta = pastaShapes.find((pasta) => pasta.name === params.name)
  if (!pasta) return notFound()
  return (
    <div className=" bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-[#40352F] py-20">
      <div className='flex items-center justify-center gap-5 w-full'>
        <Image className='w-48 h-48' src={`/${pasta.image}`} width={300} height={300} alt={pasta.name} /> 
        <div>
          <h2 className='pb-2 text-[#40352F] text-5xl font-bold'>{pasta.name}</h2>
          <p className='text-[#40352F] text-2xl'>{pasta.price} for {pasta.weight}</p>
          <Button className='bg-white hover:bg-[#40352F] hover:text-white ease-in-out duration-100'>Buy Now !</Button> 
        </div>

      </div>
      <section className='flex flex-col items-center justify-center my-10 md:mb-20 md:mt-40 gap-5 w-full'>
        <h3 className='text-[#40352F] text-5xl'>Our sugestion:</h3>
        <h4 className='text-[#40352F] text-2xl'>{pasta.recipe}</h4>
        
      </section>
      <p className=' prose lg:prose-lg text-[#40352F] font-serif'><CustomMDX source={pasta.recipeLong} /></p>

    </div>
  )
}
