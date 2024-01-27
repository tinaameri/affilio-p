import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Link from 'next/link';
import React, { Children } from 'react';

const ActiveLink = ({ children, activeClassName, as, ...props }) => {
  const router = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';
  const className =
    router.asPath === props.href ||
    router.asPath === props.as ||
    (router.pathname?.includes('/blog') && props.href?.includes('blog'))
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <>
      <Link {...props} as={as}>
        {React.cloneElement(child, {
          className: className || null,
        })}
      </Link>
    </>
  );
};

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
};

export default ActiveLink;
