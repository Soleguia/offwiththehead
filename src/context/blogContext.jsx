import { createContext } from "react";
import { useState, useEffect } from "react";

export const BlogContext = createContext();

export function BlogProvider({ children }) {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      
    fetch('https://offwiththehead.soleguia.es/wp/wp-json/wp/v2/posts')
        .then(data => data.json())
        .then(posts => setPosts(posts));

  }, []);
  // https://developer.wordpress.org/rest-api/reference/

    return (
        <BlogContext.Provider value={{posts: posts}}>
            {children}
        </BlogContext.Provider>
    );
}