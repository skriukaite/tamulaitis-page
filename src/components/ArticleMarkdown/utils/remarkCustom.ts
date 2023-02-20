import { visit } from 'unist-util-visit';

// Defining subset type here, because wasn't able to find it in any package
interface AstNode {
  type: 'root' | 'link' | 'html' | 'text' | 'image';
  value: string;
  children?: AstNode[];
}

interface AstLinkNode extends AstNode {
  url: string;
}

const isYoutubeLink = (node: AstLinkNode) => {
  return node.url.indexOf('https://www.youtube.com/') === 0;
};

const isYoutubeImageLink = (node: AstLinkNode) => {
  return isYoutubeLink(node)
    && node.children?.findIndex((child) => child.type === 'image') !== -1;
};

const isYoutubeTextLink = (node: AstLinkNode) => {
  return isYoutubeLink(node)
    && node.children?.findIndex((child) => child.type === 'image') === -1
    && node.children?.findIndex((child) => child.type === 'text') !== -1;
};

const processLink = (node: AstLinkNode) => {
  console.log(node);
  if (isYoutubeTextLink(node)) {
    const url = node.url.replace('watch?v=', 'embed/');
    const title = node.children?.find((child) => child.type === 'text')?.value || 'YouTube Video Player';
    node.type = 'html';
    node.value = `<div class="youtube-embed"><iframe src="${url}" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;
    delete node.children;
  } else if (isYoutubeImageLink(node)) {
    node.type = 'text';
    node.value = '';
    delete node.children;
  }
};

// Written by following: https://swizec.com/blog/how-to-build-a-remark-plugin-to-supercharge-your-static-site/
// List of supported node types: https://github.com/syntax-tree/mdast
const remarkCustom = () => {
  return function transformer(tree: AstNode) {
    visit(tree, 'link', processLink);
  };
};

export default remarkCustom;