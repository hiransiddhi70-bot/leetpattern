// =====================================
// 🧠 LeetPattern Flashcards
// Part 1 (1–10)
// =====================================

const cards = [

{
  q: "Two Sum — Two Sum",
  cat: "Arrays",
  difficulty: "Easy",
  trick: "Store seen values in a hashmap for instant lookup.",
  code: `seen={}
for i,x in enumerate(nums):
    if target-x in seen:
        return [seen[target-x],i]
    seen[x]=i`
},

{
  q: "Sliding Window — Longest Substring Without Repeating Characters",
  cat: "Sliding Window",
  difficulty: "Medium",
  trick: "Expand right, shrink left only when rule breaks.",
  code: `l=0
for r in range(len(s)):
    while False:
        l+=1
    ans=max(ans,r-l+1)`
},

{
  q: "Fast & Slow Pointer — Linked List Cycle",
  cat: "Two Pointers",
  difficulty: "Easy",
  trick: "Move one pointer twice as fast.",
  code: `slow=fast=head
while fast and fast.next:
    slow=slow.next
    fast=fast.next.next`
},

{
  q: "Merge Intervals — Merge Intervals",
  cat: "Arrays",
  difficulty: "Medium",
  trick: "Sort first, then merge overlaps.",
  code: `intervals.sort()
res=[]
for cur in intervals:
    pass`
},

{
  q: "Binary Search — Binary Search",
  cat: "Binary Search",
  difficulty: "Easy",
  trick: "Always remove half of the search space.",
  code: `l,r=0,len(nums)-1
while l<=r:
    mid=(l+r)//2`
},

{
  q: "Top K Elements — Top K Frequent Elements",
  cat: "Heap",
  difficulty: "Medium",
  trick: "Keep only K best elements.",
  code: `import heapq
heap=[]
heapq.heappush(heap,x)`
},

{
  q: "DFS — Number of Islands",
  cat: "Graphs",
  difficulty: "Medium",
  trick: "Go deep before changing direction.",
  code: `def dfs(node):
    if not node:
        return
    dfs(node)`
},

{
  q: "BFS — Binary Tree Level Order Traversal",
  cat: "Graphs",
  difficulty: "Medium",
  trick: "Use a queue to visit level by level.",
  code: `from collections import deque
q=deque([root])
while q:
    node=q.popleft()`
},

{
  q: "Subsets — Subsets",
  cat: "Backtracking",
  difficulty: "Medium",
  trick: "Choose or skip every element.",
  code: `def dfs(i):
    if i==len(nums):
        return
    dfs(i+1)`
},

{
  q: "0/1 Knapsack — Partition Equal Subset Sum",
  cat: "DP",
  difficulty: "Medium",
  trick: "Reuse previous answers instead of recalculating.",
  code: `dp={0}
for x in nums:
    dp|={s+x for s in dp}`
},
  {
  q: "Prefix Sum — Subarray Sum Equals K",
  cat: "Arrays",
  difficulty: "Medium",
  trick: "Store previous sums for quick lookup.",
  code: `prefix=0
seen={0:1}
for x in nums:
    prefix+=x`
},

{
  q: "Kadane's Algorithm — Maximum Subarray",
  cat: "Arrays",
  difficulty: "Easy",
  trick: "Restart when current sum becomes worse.",
  code: `best=cur=nums[0]
for x in nums[1:]:
    cur=max(x,cur+x)
    best=max(best,cur)`
},

{
  q: "Monotonic Stack — Daily Temperatures",
  cat: "Stack",
  difficulty: "Medium",
  trick: "Keep stack in useful order.",
  code: `stack=[]
for i,x in enumerate(nums):
    while stack:
        break`
},

{
  q: "Next Greater Element — Next Greater Element I",
  cat: "Stack",
  difficulty: "Easy",
  trick: "Pop until a greater value appears.",
  code: `stack=[]
for n in nums:
    while stack:
        break`
},

{
  q: "Matrix DFS — Flood Fill",
  cat: "Graphs",
  difficulty: "Easy",
  trick: "Visit four directions after bounds check.",
  code: `for dx,dy in dirs:
    nr=r+dx
    nc=c+dy`
},

{
  q: "Union Find — Number of Connected Components",
  cat: "Graphs",
  difficulty: "Medium",
  trick: "Merge connected groups efficiently.",
  code: `parent=list(range(n))
def find(x):
    while x!=parent[x]:
        x=parent[x]`
},

{
  q: "Trie — Implement Trie",
  cat: "Trees",
  difficulty: "Medium",
  trick: "Store one character at each level.",
  code: `node={}
for ch in word:
    node=node.setdefault(ch,{})`
},

{
  q: "Tree DFS — Maximum Depth of Binary Tree",
  cat: "Trees",
  difficulty: "Easy",
  trick: "Solve left and right recursively.",
  code: `def dfs(root):
    if not root:
        return 0
    return 1+max(dfs(root.left),dfs(root.right))`
},

{
  q: "Tree BFS — Minimum Depth of Binary Tree",
  cat: "Trees",
  difficulty: "Easy",
  trick: "First leaf found gives the answer.",
  code: `from collections import deque
q=deque([root])
while q:
    node=q.popleft()`
},

{
  q: "Permutations — Permutations",
  cat: "Backtracking",
  difficulty: "Medium",
  trick: "Pick one unused element each step.",
  code: `def dfs(path):
    if len(path)==len(nums):
        return
    for x in nums:
        pass`
},
  {
  q: "Greedy — Jump Game",
  cat: "Greedy",
  difficulty: "Medium",
  trick: "Always keep the farthest reachable index.",
  code: `reach=0
for i,x in enumerate(nums):
    reach=max(reach,i+x)`
},

{
  q: "Product of Array Except Self",
  cat: "Arrays",
  difficulty: "Medium",
  trick: "Build prefix and suffix products separately.",
  code: `left=1
for i in range(n):
    ans[i]=left
    left*=nums[i]`
},

{
  q: "Container With Most Water",
  cat: "Two Pointers",
  difficulty: "Medium",
  trick: "Move the pointer with smaller height.",
  code: `l,r=0,len(nums)-1
while l<r:
    area=min(nums[l],nums[r])*(r-l)`
},

{
  q: "Trapping Rain Water",
  cat: "Two Pointers",
  difficulty: "Hard",
  trick: "Track left and right maximum heights.",
  code: `l,r=0,len(height)-1
leftMax=rightMax=0
while l<r:
    pass`
},

{
  q: "3Sum",
  cat: "Two Pointers",
  difficulty: "Medium",
  trick: "Sort first, then use two pointers.",
  code: `nums.sort()
for i in range(len(nums)):
    l,r=i+1,len(nums)-1`
},

{
  q: "Search in Rotated Sorted Array",
  cat: "Binary Search",
  difficulty: "Medium",
  trick: "Find the sorted half first.",
  code: `l,r=0,len(nums)-1
while l<=r:
    mid=(l+r)//2`
},

{
  q: "Find Peak Element",
  cat: "Binary Search",
  difficulty: "Medium",
  trick: "Move toward the increasing side.",
  code: `l,r=0,len(nums)-1
while l<r:
    mid=(l+r)//2`
},

{
  q: "House Robber",
  cat: "DP",
  difficulty: "Medium",
  trick: "Choose rob or skip for each house.",
  code: `prev=curr=0
for x in nums:
    prev,curr=curr,max(curr,prev+x)`
},

{
  q: "Coin Change",
  cat: "DP",
  difficulty: "Medium",
  trick: "Build answers from smaller amounts.",
  code: `dp=[999]*(amount+1)
dp[0]=0
for coin in coins:
    pass`
},

{
  q: "Longest Increasing Subsequence",
  cat: "DP",
  difficulty: "Medium",
  trick: "Update best answer ending at each index.",
  code: `dp=[1]*len(nums)
for i in range(len(nums)):
    pass`
},
  {
  q: "Longest Common Subsequence",
  cat: "DP",
  difficulty: "Medium",
  trick: "Compare characters and reuse previous answers.",
  code: `dp=[[0]*(m+1) for _ in range(n+1)]
for i in range(n):
    for j in range(m):
        pass`
},

{
  q: "Edit Distance",
  cat: "DP",
  difficulty: "Hard",
  trick: "Try insert, delete and replace.",
  code: `dp=[[0]*(m+1) for _ in range(n+1)]
for i in range(n+1):
    pass`
},

{
  q: "Word Break",
  cat: "DP",
  difficulty: "Medium",
  trick: "Check every valid previous split.",
  code: `dp=[False]*(len(s)+1)
dp[0]=True
for i in range(len(s)):
    pass`
},

{
  q: "Decode Ways",
  cat: "DP",
  difficulty: "Medium",
  trick: "Use one-digit and two-digit choices.",
  code: `dp=[0]*(len(s)+1)
dp[0]=1
dp[1]=1`
},

{
  q: "Clone Graph",
  cat: "Graphs",
  difficulty: "Medium",
  trick: "Map old nodes to copied nodes.",
  code: `copies={}
def dfs(node):
    if node in copies:
        return copies[node]`
},

{
  q: "Course Schedule",
  cat: "Graphs",
  difficulty: "Medium",
  trick: "Detect cycles using DFS.",
  code: `graph={}
visited=set()
def dfs(node):
    pass`
},

{
  q: "Pacific Atlantic Water Flow",
  cat: "Graphs",
  difficulty: "Medium",
  trick: "Run DFS from both oceans.",
  code: `pac=set()
atl=set()
def dfs(r,c,visit):
    pass`
},

{
  q: "Lowest Common Ancestor",
  cat: "Trees",
  difficulty: "Medium",
  trick: "Return the node where paths meet.",
  code: `def lca(root,p,q):
    if not root:
        return None`
},

{
  q: "Validate Binary Search Tree",
  cat: "Trees",
  difficulty: "Medium",
  trick: "Keep valid min and max range.",
  code: `def valid(node,low,high):
    if not node:
        return True`
},

{
  q: "Kth Smallest Element in BST",
  cat: "Trees",
  difficulty: "Medium",
  trick: "Inorder traversal gives sorted values.",
  code: `stack=[]
while stack or root:
    pass`
},
  {
  q: "Serialize Binary Tree",
  cat: "Trees",
  difficulty: "Hard",
  trick: "Store nodes in preorder with null markers.",
  code: `def dfs(node):
    if not node:
        return
    dfs(node.left)
    dfs(node.right)`
},

{
  q: "Reorder List",
  cat: "Linked List",
  difficulty: "Medium",
  trick: "Find middle, reverse second half, then merge.",
  code: `slow=fast=head
while fast and fast.next:
    slow=slow.next
    fast=fast.next.next`
},

{
  q: "LRU Cache",
  cat: "Design",
  difficulty: "Medium",
  trick: "Combine hashmap with doubly linked list.",
  code: `cache={}
def get(key):
    return cache.get(key,-1)`
},

{
  q: "Median of Two Sorted Arrays",
  cat: "Binary Search",
  difficulty: "Hard",
  trick: "Binary search the smaller array.",
  code: `l,r=0,len(a)
while l<=r:
    mid=(l+r)//2`
},

{
  q: "Search a 2D Matrix",
  cat: "Binary Search",
  difficulty: "Medium",
  trick: "Treat matrix as one sorted array.",
  code: `l,r=0,m*n-1
while l<=r:
    mid=(l+r)//2`
},

{
  q: "Rotate Array",
  cat: "Arrays",
  difficulty: "Medium",
  trick: "Reverse whole array, then parts.",
  code: `k%=len(nums)
nums.reverse()
# reverse parts`
},

{
  q: "Meeting Rooms",
  cat: "Greedy",
  difficulty: "Easy",
  trick: "Sort intervals before checking overlap.",
  code: `intervals.sort()
for i in range(1,len(intervals)):
    pass`
},

{
  q: "Interval Scheduling",
  cat: "Greedy",
  difficulty: "Medium",
  trick: "Always pick the earliest finishing interval.",
  code: `intervals.sort(key=lambda x:x[1])
count=0
for it in intervals:
    pass`
},

{
  q: "Minimum Window Substring",
  cat: "Sliding Window",
  difficulty: "Hard",
  trick: "Expand window, then shrink while valid.",
  code: `l=0
for r in range(len(s)):
    while True:
        break`
},

{
  q: "Binary Search on Answer",
  cat: "Binary Search",
  difficulty: "Medium",
  trick: "Search the smallest valid answer.",
  code: `l,r=1,max(nums)
while l<r:
    mid=(l+r)//2`
}

];
  
  
