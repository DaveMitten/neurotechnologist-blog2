import React from "react";
import RichText from "../payload/RichText";

interface PostProps {
  title: string;
  richtext: unknown;
}

const Post = (props: PostProps) => {
  console.log(props);
  return (
    <article>
      <h1>{props.title}</h1>
      <RichText props={props.richtext} />
    </article>
  );
};

export default Post;
