import { IMAGES_BASE_UR } from '@/api/clinet';
import { List, Box } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import { useMediaQuery } from '@mantine/hooks';

export default function Social({ social, position }) {
  const smallerLgScreen = useMediaQuery('(max-width: 75em)');

  return (
    <List
      listStyleType="none"
      display="flex"
      mt="3px"
      sx={{
        justifyContent: `${position === 'footer' ? 'center' : 'flex-start'}`,
        order: `${smallerLgScreen && '-1'}`,
      }}
    >
      {social?.map((item, i) => (
        <List.Item
          mr="xl"
          key={i}
          sx={{
            border: `2px solid ${item?.color}`,
            '&:hover': {
              backgroundColor: item?.color,
            },
          }}
          className="social-item cursor-pointer"
        >
          <Link prefetch={false} href={item?.link} passHref>
            <a
              className="cursor-pointer"
              target="_blank"
              aria-label={item?.social_title}
            >
              <Box
                h="22px"
                className="cover-center cursor-pointer"
                w="22px"
                bg={`url(${IMAGES_BASE_UR}${item?.icon?.data?.attributes?.url})`}
                sx={{
                  '&:hover': {
                    background: `url(${IMAGES_BASE_UR}${item?.icon_hover?.data?.attributes?.url}) center no-repeat`,
                  },
                }}
              ></Box>
            </a>
          </Link>
        </List.Item>
      ))}
    </List>
  );
}
