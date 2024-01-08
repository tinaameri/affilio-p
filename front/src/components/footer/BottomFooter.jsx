import { Box, Container, Text, Flex, Divider } from '@mantine/core';

import { useMediaQuery } from '@mantine/hooks';
import Social from '@/components/Social';

export default function BottomFooter({ copy_right, social }) {
  const smallerLgScreen = useMediaQuery('(max-width: 75em)');
  const smallerSmallScreen = useMediaQuery('(max-width: 37.5em)');
  const largerXlgScreen = useMediaQuery('(min-width: 88em)');

  return (
    <Box
      bg={smallerSmallScreen ? 'primary.6' : 'secondary.1'}
      pb={smallerLgScreen ? '0' : '16px'}
    >
      {!smallerSmallScreen && (
        <Divider size="xs" w="80%" mx="auto" color="#989898" />
      )}
      <Container
        size={largerXlgScreen ? '1300px' : 'md'}
        pos="relative"
        sx={{ zIndex: '999' }}
      >
        <Flex
          direction={smallerLgScreen && 'column'}
          align="center"
          justify={smallerLgScreen ? 'center' : 'space-between'}
          order={smallerLgScreen && 1}
          pt={smallerLgScreen ? 'xl' : '20px'}
        >
          <Text
            fz="sm"
            fw="900"
            color="white"
            ta={smallerLgScreen && 'center'}
            py={smallerLgScreen && 'sm'}
          >
            {copy_right}
          </Text>
          <Social social={social} position="footer" />
        </Flex>
      </Container>
    </Box>
  );
}
