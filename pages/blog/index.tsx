import { NextPage } from 'next';
import React from 'react'
import Categories from '../../components/Categories';
import PostCard from '../../components/PostCard';
import PostWidget from '../../components/PostWidget';
import { getPosts } from '../../services';

interface Props {
    posts: any[]
}
const BlogPage: NextPage<Props> = ({posts}) => {
  return (
    <div className="container mx-auto px-10 mb-8 mt-44">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget slug={undefined}/>
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage

// Fetch data at build time
export async function getStaticProps() {
    const posts = (await getPosts()) || [];
    return {
      props: { posts }
    };
  }