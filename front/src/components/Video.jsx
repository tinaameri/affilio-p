import { Box, Grid } from '@mantine/core';
import React from 'react';
import Layout from '@/components/LayoutComponent';
import Heading from '@/components/Heading';
import LazyLoad from 'react-lazy-load';
import { IMAGES_BASE_UR } from '@/api/clinet';
// import { CARD_BACKGROUNDS } from '@/utils/constants';

export default function Video({ content, bgSection }) {
  return (
    <Box className="cover-bottom" bg={bgSection} pt="30px" pb="80px">
      <Layout>
        <Heading title={content?.title} />

        <Grid.Col xs={12} mt="xl">
          {/* <div className="h_iframe-aparat_embed_frame shadow-left" >
                        <style>{`.h_iframe-aparat_embed_frame{position:relative;}.h_iframe-aparat_embed_frame .ratio{display:block;width:100%;height:auto;}.h_iframe-aparat_embed_frame iframe{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:'15px'}`}</style>
                        <span style={{ display: 'block', paddingTop: '57%' }}></span>
                        <iframe
                            src={video_link}
                            allowFullScreen="true"
                            webkitallowfullscreen="true"
                            mozallowfullscreen="true"
                        ></iframe>
                    </div> */}
          <Box mih="400px">
            <LazyLoad width="100%" offsetVertical={300}>
              <video controls width="100%" className="shadow-left-green">
                <source
                  src={`${IMAGES_BASE_UR}${content?.video?.data?.attributes?.url}`}
                  type="video/mp4"
                  style={{
                    borderRadius: '15px',
                    border: 'unset',
                    width: '100%',
                    height: '500px',
                  }}
                />
              </video>
            </LazyLoad>
          </Box>

          {/* <Box mih='500px' height='auto'>
                        <iframe
                            className='shadow-left-green'
                            src={video_link}
                            allowFullScreen={true}
                            webkitallowfullscreen="true"
                            mozallowfullscreen="true"
                        ></iframe>
                    </Box> */}
        </Grid.Col>
      </Layout>
    </Box>
  );
}
