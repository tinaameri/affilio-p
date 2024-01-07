import { IMAGES_BASE_UR } from '@/api/clinet'
import { Box, Flex, Center, BackgroundImage } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import React from 'react'

export default function TrustLogo({ items }) {
    const smallerSmallScreen = useMediaQuery('(max-width: 37.5em)')
    return (
        <Box >
            <Flex mt='xl' justify={smallerSmallScreen ? 'center' : 'space-around'} w={smallerSmallScreen ? '100%' : '90%'} wrap="wrap"
            >
                {items?.map((logo, idx) => (
                    <Center key={idx} bg='white' w='105px' h='85px' className='trust-logo' mr='10px' mb='xl' dangerouslySetInnerHTML={{ __html: logo?.html }}>

                    </Center>

                ))

                }
            </Flex>
        </Box>
    )
}