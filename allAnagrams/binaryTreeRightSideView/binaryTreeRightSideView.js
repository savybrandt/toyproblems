/*
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

For example:
Given the following binary tree,
   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
You should return [1, 3, 4].
*/

var rightSideView = function(root) {
    var rightSide = [];
    var traverseTree = function(branch) {
        if(!branch.right) {
            return rightSide;
        } else {
            rightSide.push(branch.right);
            traverseTree(branch.right);
        }
    };
    return traverseTree(root);
};