import PostsPreview from '@/components/postsPreview';
import { BlogProvider } from '@/context/blogContext';
import { useState, useEffect } from 'react';
import HtmlHead from 'src/components/htmlHead';

export default function Home() {

  return (
    <>
      <BlogProvider>
        <HtmlHead />
        <main className="">
          <PostsPreview />
        </main>
      </BlogProvider>
    </>
  )
}
