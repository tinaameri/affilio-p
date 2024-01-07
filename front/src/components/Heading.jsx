import { Title, Center, Grid, Text } from '@mantine/core';
import Image from 'next/image';
import Markdown from '@/components/Markdown';


export default function Heading({ title, description }) {


    return (
        <>
            <Grid.Col xs={12} pt='50px' mb={!description ? '50px' : '10px'}>
                <Title order={2} ta='center'>
                    {title}
                </Title>
                <Center mt='lg'>
                    <Image src='/assets/images/adverge/bottom-heading.svg' width={213} height={12} alt={title} />
                </Center>
            </Grid.Col>
            {description && <Grid.Col xs={12} mt='xl' mb='50px'>
                <Text component='p' fz='lg' ta='center'>
                    {description}

                </Text>
            </Grid.Col>}
        </>
    );
}