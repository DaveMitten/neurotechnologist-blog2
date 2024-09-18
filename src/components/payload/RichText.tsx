import React from "react";
import * as showdown from "showdown";
import showdownHighlight from "showdown-highlight";
interface RichTextProps {
  text: string;
}

const RichText = ({text}: RichTextProps) => {
  console.log("text", text);
  

  const converter = new showdown.Converter({
    // That's it
    extensions: [showdownHighlight({
        // Whether to add the classes to the <pre> tag, default is false
        pre: true
        // Whether to use hljs' auto language detection, default is true
    ,   auto_detection: true
    })]
});
  const html = typeof text === "string" ? converter.makeHtml(text) : <div>No text provided</div>;

  console.log("html", html);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default RichText;
