import { Container, List, Flex, Loader, Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import { useState } from 'react';
import { Bounce } from 'react-reveal';
import { content } from '/public/assets/contentJson';

export default function Categories({
  categories,
  categoriesTab,
  currentCategory,
}) {
  const allPosts = content.blog.categories;
  const uniqueCategories = new Set();
  const [categoryLoader, setcategoryLoader] = useState(false);
  const toggleLoading = () => {
    setcategoryLoader(true);
    setTimeout(() => {
      setcategoryLoader(false);
    }, 2000);
  };
  const largerLgScreen = useMediaQuery('(min-width: 75em)');
  return (
    categories && (
      <Bounce>
        <Container size={largerLgScreen ? 'md' : 'xl'} display={categoriesTab}>
          <Flex align="center" justify="center" direction="column">
            <List
              listStyleType="none"
              display="flex"
              sx={{
                flexWrap: 'wrap',
                minHeight: '110px',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <List.Item mx="2px">
                <Link href={`/blog/`} passHref>
                  <a aria-label={allPosts?.title}>
                    {/* <Button
                      className="text-medium"
                      bg={!currentCategory && 'secondary.0'}
                      // onClick={() => toggleLoaderAllCategory()}
                      onClick={() => toggleLoading()}
                      c={!currentCategory && 'white'}
                      color="secondary.2"
                      variant={currentCategory && 'outline'}
                      // loading={loadingAllCategory}
                    >
                      {allPosts.title}
                    </Button> */}
                    <button
                      className={`${
                        currentCategory
                          ? 'simple-button-transparent'
                          : 'simple-button-outline'
                      } simple-button`}
                    >
                      {allPosts?.title}
                    </button>
                  </a>
                </Link>
              </List.Item>

              {categories?.map((category) => {
                if (!uniqueCategories.has(category?.attributes?.slug)) {
                  uniqueCategories.add(category?.attributes?.slug);
                  return (
                    <List.Item key={category?.attributes?.slug} mx="2px">
                      <button
                        // loading={loadingStates[index]}
                        // onClick={() => toggleLoader(index)}
                        onClick={() => toggleLoading()}
                        className={`${
                          !currentCategory
                            ? 'simple-button-transparent'
                            : 'simple-button-outline'
                        } simple-button text-medium`}
                      >
                        <Link
                          href={`/blog/category/${category?.attributes?.slug}/page/1`}
                          passHref
                        >
                          <a aria-label={category?.attributes?.title}>
                            {category?.attributes?.title}
                          </a>
                        </Link>
                      </button>
                    </List.Item>
                  );
                }
                return null;
              })}
            </List>
            <Box h="20px">{categoryLoader && <Loader mr="sm" size="xs" />}</Box>
          </Flex>
        </Container>
      </Bounce>
    )
  );
}
