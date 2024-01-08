import { IMAGES_BASE_UR } from '@/api/clinet';
import { List, Image } from '@mantine/core';
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
        <List.Item ml="xl" key={i}>
          <Link prefetch={false} href={item?.link} passHref>
            <a
              className="cursor-pointer"
              target="_blank"
              aria-label={item?.social_title}
            >
              <Image
                width={35}
                height={35}
                alt={item?.social_title}
                src={`${IMAGES_BASE_UR}${item?.icon?.data?.attributes?.url}`}
              />
            </a>
          </Link>
        </List.Item>
      ))}
    </List>
  );
}
