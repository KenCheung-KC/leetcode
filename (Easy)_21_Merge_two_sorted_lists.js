/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Solution 1:
var mergeTwoLists = function(list1, list2) {
    let head = new ListNode()
    let result = head

    if(list1 == null && list2 != null) {
        return list2
    }
    
    if(list1 != null && list2 == null) {
        return list1
    }

    while(list1 != null && list2 != null){
        if(list1.val < list2.val) {
            head.next = list1
            head = head.next
            list1 = list1.next
        } else {
            head.next = list2
            head = head.next
            list2 = list2.next
        }
    }

    if(list1) {
        head.next = list1
    }
    if(list2) {
        head.next = list2
    }
    
    return result.next
}

// Solution 2: DP - recursive
var mergeTwoLists = function(list1, list2) {
    if(list1 == null) {
        return list2
    }
    if(list2 == null) {
        return list1
    }

    if(list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    } else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }
}