import { Box, Text } from '@mantine/core';
export const textSplitter = ({ text, style }) => {
  return text?.split('\n').map((line, idx) => (
    <Box {...style} key={idx}>
      {line}
    </Box>
  ));
};
export const textColorSplitter = ({
  text,
  style,
  beforeSymbol,
  afterSymbol,
}) => {
  return text?.split('؛').map((line, index) => (
    <Text
      component="span"
      {...style}
      color={index === 0 ? beforeSymbol : afterSymbol}
      key={index}
    >
      {' '}
      {index === 0 ? line : `؛${line}`}
    </Text>
  ));
};
