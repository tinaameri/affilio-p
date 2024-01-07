import Link from 'next/link'
// import Image from 'next/image'
import { Image } from '@mantine/core';
import { IMAGES_BASE_UR } from '@/api/clinet';

export default function Logo({ position, logo }) {

    return (
        <>
            <Link prefetch={false} href='/' as='/'>
                
                <a className='cursor-pointer flex-align-center' aria-label={logo?.footer?.data?.attributes?.alternativeText}>
                    <Image src={position === 'footer' ? (`${IMAGES_BASE_UR}${logo?.footer?.data?.attributes?.url}`) : (`${IMAGES_BASE_UR}${logo?.header?.data?.attributes?.url}`)}
                     alt={logo?.footer?.data?.attributes?.alternativeText} fit="contain" width={150} height={48} />
   
                </a>
            </Link>
        </>
    )

}


