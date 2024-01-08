import { useEffect, useCallback, useState } from 'react';
import classes from '@/components/cardCarousel/CardCarousel.module.scss';
import { Text, Paper, Flex, Box, Image } from '@mantine/core';
import { IMAGES } from '@/utils/constants';
import { IMAGES_BASE_UR } from '@/api/clinet';

function determineClasses(indexes, cardIndex) {
  if (indexes.currentIndex === cardIndex) {
    return `${classes.active}`;
  } else if (indexes.nextIndex === cardIndex) {
    return `${classes.next}`;
  } else if (indexes.previousIndex === cardIndex) {
    return `${classes.prev}`;
  }
  return `${classes.inactive}`;
}

const CardCarousel = ({ cardItems }) => {
  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1,
  });
  const [isMouseOver, setIsMouseOver] = useState(false);
  const handleCardTransition = useCallback(() => {
    if (indexes.currentIndex >= cardItems.length - 1) {
      setIndexes({
        previousIndex: cardItems.length - 1,
        currentIndex: 0,
        nextIndex: 1,
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === cardItems.length
            ? 0
            : prevState.currentIndex + 2,
      }));
    }
  }, [indexes.currentIndex]);

  useEffect(() => {
    const transitionInterval = setInterval(() => {
      if (!isMouseOver) {
        handleCardTransition();
      }
    }, 3000);

    return () => clearInterval(transitionInterval);
  }, [handleCardTransition, isMouseOver]);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ul className={classes.cardCarousel}>
        {cardItems?.map((card, index) => (
          <li
            key={card?.id}
            className={`${classes.card} ${determineClasses(indexes, index)}`}
          >
            <Card item={card} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardCarousel;

export function Card({ item }) {
  return (
    <Paper size="xl" w="100%" radius="lg">
      <Image
        src={`${IMAGES}/home/testimonial.svg`}
        width={45}
        height={40}
        alt="testimonial"
        mb="30px"
      />

      <Text component="p" color="rgba(14, 14, 14, 0.87)" mb="xl">
        {`”${item?.content}“`}
      </Text>

      <Flex align="center" mt="xl">
        <Box
          mr="xl"
          sx={{ borderRadius: '50%' }}
          className="flex-center"
          bg="gray.0"
          w="114px"
          h="114px"
        >
          <Image
            width="100%"
            p="xl"
            fit="contain"
            src={`${IMAGES_BASE_UR}${item?.image?.data?.attributes?.url}`}
            alt={item?.full_name}
          />
        </Box>
        <Box>
          <Text
            component="strong"
            fw="900"
            fz="lg"
            color="rgba(14, 14, 14, 0.87)"
            mt="md"
          >
            {item?.full_name}
          </Text>
          <Text c="rgba(14, 14, 14, 0.87)" fz="md" mt="xs">
            {item?.position}
          </Text>
        </Box>
      </Flex>
    </Paper>
  );
}
