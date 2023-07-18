'use client'

import { usePathname, useRouter  } from 'next/navigation'
import { useQRCode } from 'next-qrcode';
import Image from 'next/image'

 export default function Page (){
  const router = usePathname ()
  const { SVG } = useQRCode();
  return (
    <div className='flex justify-center pl-28 pt-36'>
      
    <Image priority src={'/sert.jpeg'} alt={'sert'} width={900} height={900}/>
  <h2 className='relative right-[780px] top-[340px]'>{router.slice(1,router.length)}</h2>
    <div className='relative right-[200px] top-[60px]'>
    <SVG
        text={'http://localhost:3000/otabek'}
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