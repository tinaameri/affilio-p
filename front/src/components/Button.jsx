import { Button } from '@mantine/core';
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
  mt,
  size,
}) {
  return (
    <>
      {href ? (
        <Link href={href} passHref>
          <Button
            ml={ml}
            mr={mr}
            mt={mt}
            className={className}
            component="a"
            target={targetBlank ? '_blank' : '_self'}
            type={actionType}
            onClick={onClick}
            p={size === 'sm' ? '21px 24px' : '21px 32px'}
            h={size === 'sm' && '42px'}
            radius={
              type === 'primary' && size === 'sm'
                ? '3px 14px 14px 14px'
                : type === 'secondary' && size === 'sm'
                  ? '14px 3px 14px 14px'
                  : type === 'primary'
                    ? '4px 16px 16px 16px'
                    : type === 'secondary'
                      ? '16px 3px 16px 16px'
                      : '3px 16px 16px 16px'
            }
            bg={
              type === 'primaryArrow' || type === 'primary'
                ? 'primary.7'
                : type === 'primaryOutline' || type === 'secondary'
                  ? 'white'
                  : type === 'disable'
                    ? '#EAEEF6'
                    : ''
            }
            sx={(theme) => ({
              cursor: !href && !onClick && 'unset',

              '&:hover': {
                border: `1px solid ${theme.colors.primary[0]}`,
                color:
                  type === 'primaryArrow' || type === 'primary'
                    ? theme.colors.primary[0]
                    : 'white',
                background:
                  type === 'primaryArrow' || type === 'primary'
                    ? 'white!important'
                    : theme.colors.primary[7],
              },
            })}
            variant={
              type === 'primaryOutline' ||
              type === 'primaryOutlineArrow' ||
              type === 'secondary'
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
          mt={mt}
          className={className}
          type={actionType}
          onClick={onClick}
          p={size === 'sm' ? '21px 24px' : '21px 32px'}
          h={size === 'sm' && '42px'}
          radius={
            type === 'primary' && size === 'sm'
              ? '3px 14px 14px 14px'
              : type === 'secondary' && size === 'sm'
                ? '14px 3px 14px 14px'
                : type === 'primary'
                  ? '4px 16px 16px 16px'
                  : type === 'secondary'
                    ? '16px 3px 16px 16px'
                    : '3px 16px 16px 16px'
          }
          bg={
            type === 'primaryArrow' || type === 'primary'
              ? 'primary.7'
              : type === 'primaryOutline' ||
                  type === 'secondaryArrow' ||
                  type === 'secondary'
                ? 'white'
                : ''
          }
          sx={() => ({
            cursor: !href && !onClick && actionType !== 'submit' && 'unset',
            '&:hover': {
              backgroundColor:
                type === 'primaryArrow' || type === 'primary'
                  ? 'white'
                  : 'primary.3',
            },
          })}
          rightIcon={
            rightIcon ??
            ((type === 'primaryArrow' || type === 'secondaryArrow') && (
              <IconArrowLeft size="23px" />
            ))
          }
          variant={
            type === 'primaryOutline' ||
            type === 'primaryOutlineArrow' ||
            type === 'secondary'
              ? 'outline'
              : 'filled'
          }
        >
          {/* <Text component="span"> */}
          {title}
          {/* </Text> */}
        </Button>
      )}
    </>
  );
}
