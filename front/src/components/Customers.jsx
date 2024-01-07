import React from 'react'
import { Flex, Box,Image } from '@mantine/core';
// import Image from 'next/image';

export default function Customers({ customers }) {
    return (
        <Flex
            wrap='wrap' align='flex-start' justify='center' className='customer-wrapper tabs'>
            {customers?.map((item, index) => (
                <Box key={index} className="customer-item" pos='relative' >
                    <Image height={item?.height} width={item?.width}
                        alt={item?.alt} src={item?.src} />
                </Box>


            ))}
        </Flex>
    )
}
