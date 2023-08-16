#include <iostream>
using namespace std;

// Definition for singly-linked list.
struct ListNode {
    int val;
    ListNode *next;
    // ListNode() : val(0), next(nullptr) {}
    // ListNode(int x) : val(x), next(nullptr) {}
    // ListNode(int x, ListNode *next) : val(x), next(next) {}
};

void appendNode(ListNode* mergedListHead, ListNode* node) {
    while(mergedListHead->next != NULL) {
        mergedListHead = mergedListHead->next;
    }
    node->next = NULL;
    mergedListHead->next = node;
}

class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        if(list1 == NULL && list2 != NULL) {
            return list2;
        }
        if(list1 != NULL && list2 == NULL) {
            return list1;
        }
        if(list1 == NULL && list2 == NULL) {
            return list1;
        }
        ListNode* mergedListHead = NULL;
        ListNode* head1 = list1;
        ListNode* head2 = list2;
        
        while(list1->next != NULL) {
            if(mergedListHead == NULL) {
                
            }
        }
        
        while(list1!=NULL && list2!=NULL) {
            if(mergedListHead == NULL) {
                mergedListHead = (head1->val < head2->val) ? head1 : head2;    
                (head1->val < head2->val) ? head1 = head1->next : head2 = head2->next;
            }
            if(head1->val < head2->val) {
                appendNode(mergedListHead, head1);
                head1 = head1->next;
                continue;
            }
            if(head2->val < head1->val) {
                appendNode(mergedListHead, head2);
                head2 = head2->next;
                continue;
            }
            appendNode(mergedListHead, head2);
            head2 = head2->next;
        }

        return mergedListHead;
    }
};

int main() {
    cout << "Hello world" << endl;

    Solution solution;

    solution.mergeTwoLists();

    return 0;
}