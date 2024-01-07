import { Text, Grid, createStyles, Box, Image } from "@mantine/core";
// import { IconGitBranch, IconGitPullRequest, IconGitCommit, IconMessageDots } from '@tabler/icons-react';
import Layout from "@/components/LayoutComponent";
import Heading from "@/components/Heading";
//import Image from 'next/image';
import ButtonComponent from "@/components/Button";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { IMAGES_BASE_UR } from "@/api/clinet";
import classes from './TimelineComponent.module.scss'
export default function TimelineComponent({ heading_title, content }) {
  const [activeButton, setActiveButton] = useState(0);
  const smallermidScreen = useMediaQuery("(max-width: 64em)"); //(max-600)md green
  const handleScroll = () => {
    const buttons = document.querySelectorAll(".btn-date");
    buttons.forEach((button, index) => {
      const buttonPosition = button.getBoundingClientRect();
      if (buttonPosition.top < window.innerHeight * 0.5) {
        setActiveButton(index);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout pb="100px">
      <Heading title={heading_title} />

      <Grid.Col xs={12} className={classes.svg}>
        {content?.map((item, index) => (
          <>
            {smallermidScreen ? (
              <Grid
                justify="space-between"
                align="flex-end"
                className={classes.itemBody}
              >
                <Grid.Col span={4} className="flex-center">
                  <ButtonComponent
                    type={`${activeButton >= index ? "primary" : "secondary"}`}
                    title={item?.date}
                    className={`${classes.date} ${
                      activeButton >= index && classes.activeItem
                    }  btn-date`}
                  />
                </Grid.Col>
                <Grid.Col span={8}>
                  <Box
                    span={4}
                    className="flex-center"
                    order={index % 2 !== 0 && -1}
                    mih={150}
                    pos="relative"
                  >
                    <Image
                      src={`${IMAGES_BASE_UR}${item?.image.data?.attributes?.url}`}
                      alt={item?.description}
                      height={100}
                      width={100}
                      fit="contain"
                      className={`${
                        activeButton >= index ? "" : classes.deactiveImg
                      })`}
                    />
                    {/* <Image src={item?.img} alt={item?.title} height={150} width={200} objectFit='none'
                                            className={`${activeButton >= index ? '' : classes.deactiveImg}`} /> */}
                  </Box>
                  <Box span={4} order={index % 2 !== 0 && 1} px="xs">
                    <Text component="p" fz="md" ta="center">
                      {item?.description}
                    </Text>
                  </Box>
                </Grid.Col>
              </Grid>
            ) : (
              <Grid
                justify="space-between"
                align="center"
                className={classes.itemBody}
              >
                <Grid.Col span={4} order={index % 2 !== 0 && 1}>
                  <Text component="p" fz="lg" ta="center">
                    {item?.description}
                  </Text>
                </Grid.Col>
                <Grid.Col span={4} className="flex-center">
                  <ButtonComponent
                    type={`${activeButton >= index ? "primary" : "secondary"}`}
                    title={item?.date}
                    className={`${classes.date} ${
                      activeButton >= index && classes.activeItem
                    }  btn-date`}

                  />
                </Grid.Col>
                <Grid.Col
                  span={4}
                  className="flex-center"
                  order={index % 2 !== 0 && -1}
                  mih={100}
                  pos="relative"
                >
                  <Image
                    src={`${IMAGES_BASE_UR}${item?.image.data?.attributes?.url}`}
                    fit="unset"
                    alt={item?.description}
                    height={100}
                    width={200}
                    className={`${
                      activeButton >= index ? "" : classes.deactiveImg
                    }`}
                  />
                </Grid.Col>
              </Grid>
            )}
          </>
        ))}
      </Grid.Col>
    </Layout>
  );
}
