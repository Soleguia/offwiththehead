import { decode } from 'html-entities';
import styles from './Post.module.css';
import { useState, useEffect } from 'react';

export default function Post(props) {
    const post = props.post;
    
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(
        () => {
            fetch(`https://offwiththehead.soleguia.es/wp/wp-json/wp/v2/categories?include=${post.categories.join(',')}`)
                .then(data => data.json())
                .then(categoriesData => setCategories(categoriesData));
        
            fetch(`https://offwiththehead.soleguia.es/wp/wp-json/wp/v2/tags?include=${post.tags.join(',')}`)
            .then(data => data.json())
            .then(tagsData => setTags(tagsData));

        }, []);

    return (
        <article className={styles.post}>
            <h2>{decode(post.title.rendered)}</h2><hr/>
            <p>
                {
                    categories.map((cat, index) => {
                        return (
                        <>
                            <span title={cat.slug}>{cat.name}</span>
                            {index > 0 ? ', ' : ''}
                        </>)
                        
                    })
                }
            </p>
            <p>
                {tags.join(', ')}
            </p>
            
        </article>
    )
}