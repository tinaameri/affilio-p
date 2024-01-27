import { useEffect, useState } from 'react';
import { IconSearch } from '@tabler/icons-react';
import { Grid } from '@mantine/core';
import { Flex, Input } from '@mantine/core';
import Layout from '@/components/LayoutComponent';
import { useRouter } from 'next/router';
import ButtonComponent from '@/components/Button';

const Search = ({ py, mt, searchDisplay, input_placeholder, button }) => {
  const router = useRouter();
  const [query, setQuery] = useState(router?.query?.query);

  useEffect(() => {
    setQuery(query);
  }, [router?.query?.query]);

  return (
    <>
      <Layout py={py} mt={mt ?? '20px'} display={searchDisplay}>
        <Grid.Col ta="center" mx="auto" xs={12} sm={12} md={10} lg={8} xl={8}>
          <form
            method="get"
            onSubmit={(e) => {
              e.preventDefault();
              router.push(`/blog/search?query=${query}`);
            }}
            action="/blog/search"
          >
            <Flex justify="space-between" className="border-radius-gray">
              <Input
                icon={<IconSearch />}
                placeholder={input_placeholder}
                radius="11px"
                size="lg"
                name="query"
                w="100%"
                className="search-input"
                defaultValue={query}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />

              <ButtonComponent
                mr="4px"
                mt="3px"
                size="sm"
                actionType={'submit'}
                type="primary"
                title={button}
              />
            </Flex>
            <span
              onClick={() => {
                // toggleLoader();
              }}
            ></span>
          </form>
        </Grid.Col>
      </Layout>
    </>
  );
};
export default Search;
