import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { getPosts, getPostDetails } from '../../../services';
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Loader from '../../../components/Loader';
import PostDetail from '../../../components/PostDetail';
import Author from '../../../components/Author';
import Comments from '../../../components/Comments';
import PostWidget from '../../../components/PostWidget';
import Categories from '../../../components/Categories';
import CommentsForm from '../../../components/CommentsForm';
import AdjacentPosts from '../../../components/AdjacentPosts';

const PostDetails: NextPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <div className="container mx-auto px-10 mb-8 mt-44">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <Author author={post.author} />
            <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget slug={post.slug} categories={post.categories.map((category: any) => category.slug)} />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostDetails;

// Fetch data at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data: any = await getPostDetails(params?.slug);
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export const getStaticPaths: GetStaticPaths = async() => {
  const posts:any[] = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}