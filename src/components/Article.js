import React from 'react';

function Article(props) {
  const { post } = props;
  const { title, date = 'January 1, 1970', preview, minutes } = post;

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} - {minutes} minute read</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
