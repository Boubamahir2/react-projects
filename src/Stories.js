import React from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
  const { loading, hits, removeStory } = useGlobalContext();
  if (loading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="stories">
      {hits.map((story) => {
        const {
          objectID: id,
          author,
          created_at,
          num_comments: comments,
          points,
          title,
          url,
        } = story;
        return (
          <article className="story" key={id}>
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author} | </span>
              {comments} comments created.{created_at}
            </p>
            <div>
              <a href={url} target="_blank" className="read-link">
                read more
              </a>
              <button className="remove-btn" onClick={() => removeStory(id)}>
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
