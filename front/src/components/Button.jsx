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
}) {
  return (
    <>
      {href ? (
        <Link href={href} passHref>
          <Button
            className={className}
            component="a"
            target={targetBlank ? '_blank' : '_self'}
            type={actionType}
            onClick={onClick}
            bg={
              type === 'primaryArrow' || type === 'primary'
                ? 'primary.0'
                : type === 'secondaryArrow' || type === 'secondary'
                  ? 'white'
                  : ''
            }
            sx={(theme) => ({
              cursor: !href && !onClick && 'unset',
              '&:hover': {
                backgroundColor:
                  type === 'secondaryArrow' || type === 'secondary'
                    ? 'white'
                    : theme.colors.primary[0],
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
            {title}
          </Button>
        </Link>
      ) : (
        <Button
          className={className}
          type={actionType}
          onClick={onClick}
          bg={
            type === 'primaryArrow' || type === 'primary'
              ? 'primary.0'
              : type === 'secondaryArrow' || type === 'secondary'
                ? 'white'
                : ''
          }
          sx={(theme) => ({
            cursor: !href && !onClick && actionType !== 'submit' && 'unset',
            '&:hover': {
              backgroundColor:
                type === 'secondaryArrow' || type === 'secondary'
                  ? 'white'
                  : theme.colors.primary[0],
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
          <Text component="span" c="primary.6">
            {title}
          </Text>
        </Button>
      )}
    </>
  );
}
