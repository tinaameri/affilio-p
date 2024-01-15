import { Button, Text } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';

import Link from 'next/link';

export default function ButtonComponent({
  type,
  title,
  targetBlank,
  href,
  className,
  actionType,
  onClick,
  rightIcon,
  mr,
  ml,
}) {
  return (
    <>
      {href ? (
        <Link href={href} passHref>
          <Button
            ml={ml}
            mr={mr}
            className={className}
            component="a"
            target={targetBlank ? '_blank' : '_self'}
            type={actionType}
            onClick={onClick}
            bg={
              type === 'primaryArrow' || type === 'primary'
                ? 'primary.3'
                : type === 'disable' 
                  ? '#EAEEF6'
                  : ''
            }

            sx={(theme) => ({
              cursor: !href && !onClick && 'unset',
              '&:hover': {
                border:`1px solid ${theme.colors.primary[0]}`,
                color:type === 'primaryArrow' || type === 'primary' ? theme.colors.primary[0]: 'white',
                background:
                  type === 'primaryArrow' || type === 'primary'
                    ? 'transparent!important'
                    :  theme.colors.primary[3],
                   
              },

              padding: '0 20px',
            })}
            variant={
              type === 'primaryOutline' ||
              type === 'primaryOutlineArrow' 
                ? 'outline'
                : 'filled'
            }
            rightIcon={
              rightIcon ??
              ((type === 'primaryArrow' || type === 'secondaryArrow') && (
                <IconArrowLeft size="23px" />
              ))
            }
          >
            {title}
          </Button>
        </Link>
      ) : (
        <Button
          ml={ml}
          mr={mr}
          className={className}
          type={actionType}
          onClick={onClick}
          bg={
            type === 'primaryArrow' || type === 'primary'
              ? 'primary.3'
              : type === 'secondaryArrow' || type === 'secondary'
                ? 'white'
                : ''
          }
          sx={(theme) => ({
            cursor: !href && !onClick && actionType !== 'submit' && 'unset',
            '&:hover': {
              backgroundColor:
                type === 'primaryArrow' || type === 'primary'
                  ? 'transparent'
                  : 'primary.3',
            },

            padding: '0 20px',
          })}
          rightIcon={
            rightIcon ??
            ((type === 'primaryArrow' || type === 'secondaryArrow') && (
              <IconArrowLeft size="23px" />
            ))
          }
        >
          <Text component="span" c="#fff">
            {title}
          </Text>
        </Button>
      )}
    </>
  );
}
