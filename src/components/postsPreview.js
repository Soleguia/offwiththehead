import {useContext, useEffect} from 'react';
import { BlogContext } from '@/context/blogContext';
import Post from 'src/components/post';
import styles from './PostsPreview.module.css';

export default function PostsPreview() {

    const getBlogContext = useContext(BlogContext);
    
    useEffect(() => console.log({getBlogContext}));

    const posts = getBlogContext.posts;

    return (
        <section className={styles.postsWrapper}>
            {
                posts.map(
                    post => (
                        <Post key={post.id} post={post}></Post>
                    )
                )
            }
        </section>
    )
}