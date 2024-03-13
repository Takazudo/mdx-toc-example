import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import Post1 from "./post1.mdx";

const components = {
  h1: (props) => <h1 style={{ color: "tomato" }} {...props} />,
  p: (props) => <p style={{ fontSize: "18px" }} {...props} />,
  Moge: (props) => <p style={{ border: "3px solid red" }} {...props} />,
};

const Body = () => {
  return (
    <MDXProvider components={components}>
      <Post1 />
    </MDXProvider>
  );
};

export { Body };
