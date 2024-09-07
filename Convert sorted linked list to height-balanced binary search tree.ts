/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 /*
    WE NEED TO INSERT THE MIDDLE NODE AS THE ROOT AND SPLIT THE LINKED LIST INTO LEFT HALF AND RIGHT HALF
    NEXT, WE NEED TO INSERT THE TAILS OF THE TWO LISTS
*/
function getMiddleAndSplit(head: ListNode | null): ListNode | null{
    if(head === null || head.next === null){
        return head;
    }
    else{
        let prev: ListNode | null= null;
        let slow: ListNode | null = head;
        let fast: ListNode | null = head;
        while(fast !== null && fast.next !== null){
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        if(prev !== null){
            prev.next = null;
        }
        return slow;
    }
}


function sortedListToBST(head: ListNode | null): TreeNode | null {
    if(head === null){
        return null;
    }
    let middle: ListNode = getMiddleAndSplit(head);
    let root: TreeNode = new TreeNode(middle.val);
    // now that we have our left and right lists, we need to insert them by finding the middle of each half and recursively inserting the middle into the tree

    if(head === middle){
        return root;
    }

    root.left = sortedListToBST(head);
    root.right = sortedListToBST(middle.next);
    return root;

};