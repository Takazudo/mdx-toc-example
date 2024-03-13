import { createRoot } from 'react-dom/client';
import { Body } from "./body.jsx";
//import Post1 from "./post1.mdx";
const domNode = document.getElementById('app');
const root = createRoot(domNode);
root.render(Body())
