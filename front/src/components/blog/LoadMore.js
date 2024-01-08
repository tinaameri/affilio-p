import { getPostList } from '@/utils/posts';
import { Button } from '@mantine/core';
import { useState } from 'react';

export default function LoadMore({ posts, setPosts }) {
  const [buttonText, setButtonText] = useState('Load more posts');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(true);
  const handleOnClick = async () => {
    setLoading(true);
    setButtonText('Loading');
    setButtonDisabled(true);

    const morePosts = await getPostList(posts.pageInfo.endCursor);
    /**
     * load 5 by 5 post
     */
    let updatedPosts = {
      pageInfo: {},
      nodes: [],
    };
    /**  load all post
         *  const updatedPosts = {
            pageInfo: morePosts.pageInfo,
            nodes: [...posts.nodes, ...morePosts.nodes]
        };
         */

    updatedPosts.pageInfo = morePosts.pageInfo;
    posts.nodes.map((node) => {
      updatedPosts.nodes.push(node);
    });
    morePosts.nodes.map((node) => {
      updatedPosts.nodes.push(node);
    });
    setPosts(updatedPosts);
    if (morePosts.pageInfo.hasNextPage) {
      setLoading(false);
      setButtonText('Load more posts');
      setButtonDisabled(false);
    } else {
      setShow(false);
    }
  };
  return (
    show && (
      <Button
        onClick={handleOnClick}
        disabled={buttonDisabled}
        loading={loading}
      >
        {buttonText}
      </Button>
    )
  );
}
