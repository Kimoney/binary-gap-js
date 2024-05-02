# Task 1

# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def task_one(R, V):
    # Implement your solution here
    n = len(R)
    minimum_balance_A = minimum_balance_B = 0
    balance_A = 0
    balance_B = 0

    for i in range(n):
        if R[i] == 'A':
            balance_A += V[i]
            minimum_balance_A = min(minimum_balance_A,balance_A)
        else:
            balance_B += V[i]
            minimum_balance_B = min(minimum_balance_B,balance_B)
    return [-minimum_balance_A,-minimum_balance_B]


r1= 'BAABA'
v1=[2,4,1,1,2]
r2='ABAB'
v2=[10,5,10,15]
r3='B'
v3=[100]

print(task_one(r1,v1))
print(task_one(r2,v2))
print(task_one(r3,v3))

# Task 2

def task_two(A,B):
    A.sort()
    B.sort()
    i = 0
    for a in A:
        while i < len(B) and B[i] < a:
            i += 1
        if i<len(B) and a == B[i]:
            return a
    return -1
arr1 = [1,3,2,1]
arr2 = [4,2,5,3,2]
arr3 = [2,-3,1,2,2,1]
arr4 = [-3,3,3,5,6,5]
arr5=[2,1]
arr6=[3,3]
arr7=[5]
arr8=[5]
arr9=[4,5,6,7,8]
arr10=[3,6]
test1= task_two(arr1, arr2)
test2 = task_two(arr3, arr4)
test3 = task_two(arr5, arr6)
test4 = task_two(arr7, arr8)
test5 = task_two(arr9, arr10)

print(test1)
print(test2)
print(test3)
print(test4)
print(test5)


# Task 3
import itertools

def  solution(A,B,C,D):
    digits = [A,B,C,D]
    valid_times_counter = 0

    def valid_time(hh, mm):
        return 0 <= hh <= 23 and 0 <= mm <= 59

    for perm in itertools.permutations(digits):
        hh = perm[0] * 10 + perm[1]
        mm = perm[2] * 10 + perm[3]
        if valid_time(hh, mm):
            valid_times_counter += 1
    return valid_times_counter

print(solution(1,8,3,2))