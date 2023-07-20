'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useQRCode } from 'next-qrcode';
import Image from 'next/image'

 export default function Page (){

  const routerName = usePathname ()
  const { SVG } = useQRCode();
  return (
    
    <div className='flex justify-center pl-28 pt-36'>
      
    <Image priority src={'/sert.jpeg'} alt={'sert'} width={900} height={900}/>
    <div className='relative right-[200px] top-[60px]'>
    <h2 className='relative text-xl right-[620px] top-[280px]'>{routerName.slice(1,routerName.length)}</h2>
    
    <SVG
        text={window.location.href || "unknown"}
        options={{
            type: 'image/jpeg',
            quality: 0.3,
            level: 'M',
            margin: 3,
            scale: 4,
            width: 100,
            color: {
              dark: '#1240AB',
              light: '#FFF',
            },
          }}
      />
    </div>
    
    </div>
    
  )
}