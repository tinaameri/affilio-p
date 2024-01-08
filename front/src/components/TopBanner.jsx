import { IMAGES_BASE_UR } from '@/api/clinet';
import { Box, BackgroundImage } from '@mantine/core';
import Link from 'next/link';

export default function TopBanner({ content }) {
  const image = content?.image?.data?.attributes;

  return (
    <Box w="100%" h="100px">
      {content?.link ? (
        <Link href={content?.link}>
          <a target="_blank">
            <BackgroundImage
              src={`${IMAGES_BASE_UR}${image?.url}`}
              bgr="no-repeat"
              bgp="center"
              bgsz="cover"
              h="100px"
            ></BackgroundImage>
          </a>
        </Link>
      ) : (
        <BackgroundImage
          src={`${IMAGES_BASE_UR}${image?.url}`}
          bgr="no-repeat"
          bgp="center"
          bgsz="cover"
          h="100px"
        ></BackgroundImage>
      )}
    </Box>
  );
}
