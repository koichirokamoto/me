'use strict';

module.exports = exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);
    console.log(`\n`, fileNode.relativePath);
    createNodeField({
      node,
      name: `slug`,
      value: `/${fileNode.relativePath.replace('.md', '.html')}`
    });
  }
};
