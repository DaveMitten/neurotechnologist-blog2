import React from "react";

interface RichTextProps {
  props: unknown;
}

const RichText = (props: RichTextProps) => {
  console.log("props", props);
  return <div>RichText</div>;
};

export default RichText;
