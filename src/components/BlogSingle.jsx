import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import WPAPI from 'wpapi';
import parse from 'html-react-parser';

function BlogSingle({ postId }) {
  // Create WPAPI instance and add endpoint to /wp-json
  const wp = new WPAPI({
    endpoint: 'http://localhost:10004/wp-json',
    username: 'cgteam',
    password: '8gLw rmzE hQhZ av4L 1ljg x119',
  });

  const [post, setPost] = useState('');
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const fetchSinglePost = async () => {
      try {
        // Loading Spinner Starts
        setIsPending(true);
        // Fetch Single Post
        const singlePost = await wp.posts().id(postId).get();
        console.log('Single Post: ', singlePost);
        setPost(singlePost);

        // Loading Spinner Ends
        setIsPending(false);
      } catch (e) {
        // print error
        console.log(e);
        return [];
      }
    };
    fetchSinglePost();
  }, []);

  return (
    <div>
      {isPending && (
        <div className="text-center">
          <Loader type="ThreeDots" color="red" height={100} width={100} />
        </div>
      )}
      <section className="list-group">
        {post && (
          <article key={post.id} className="list-group-item">
            <div className="mb-2 row">
              <div className="col-sm-12">
                <Link className="btn btn-warning float-right" to={'/'}>
                  Back
                </Link>

                <h1 className="">{parse(post.title.rendered)} </h1>
                <span className="badge badge-primary">Post ID: {post.id}</span>
                <hr className="bg-primary" />
              </div>
              <div className="col-sm-12">
                <figure>
                  <img
                    src={post.featured_full}
                    className="w-100 animate__animated animate__zoomIn"
                    alt=""
                  />
                </figure>
              </div>
              <div className="col-sm-12">
                <span className="mt-3">{parse(post.content.rendered)} </span>
              </div>
            </div>
          </article>
        )}
      </section>
    </div>
  );
}

export default BlogSingle;
