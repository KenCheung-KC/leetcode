/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function addNode(head, val) {
    while(head.next !== null){
        head = head.next
    }
    head.next = new ListNode(val, null)
}

function getListLength(head) {
    var length = 0
    while(head !== null) {
        length += 1
        head = head.next
    }
    return length
}

function getLongerList(l1, l2) {
    if(getListLength(l1) == getListLength(l2)){
       return l1
    }
    if(getListLength(l1) > getListLength(l2)){
       return l1
    }
    return l2
}

function getShorterList(l1, l2) {
    if(getListLength(l1) == getListLength(l2)) {
       return l2
    }
    if(getListLength(l1) > getListLength(l2)) {
       return l2
    }
    return l1
}

var addTwoNumbers = function(l1, l2) {
    var listOneNode = l1
    var listTwoNode = l2
    var longerList = getLongerList(l1, l2)
    var shorterList = getShorterList(l1, l2)
    var resultList;
    var carry = 0

    while(longerList !== null) {
        var sum = 0
        if(shorterList !== null) {
            sum = longerList.val + shorterList.val
            if(carry == 1) {
                sum += 1
                carry = 0
            }
            if (sum >= 10) {
                carry = 1
                sum = sum - 10
            }
            if(resultList === undefined) {
                resultList = new ListNode(sum, null)   
            } else {
                addNode(resultList, sum)
            }   
            longerList = longerList.next
            shorterList = shorterList.next
            continue;
        }
        if(shorterList === null) {
           sum = longerList.val
           if(carry == 1) {
              sum += 1
              carry = 0
           }
           if(sum >= 10) {
              carry = 1   
              sum = sum - 10
           }
           if(resultList === undefined) {
              resultList = new ListNode(sum, null)   
           } else {
              addNode(resultList, sum)
           }   
        }
        longerList = longerList.next
    }
    if(longerList === null && carry == 1) {
       addNode(resultList, carry)
    }
    
    return resultList
};