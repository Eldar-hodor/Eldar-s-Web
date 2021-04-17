n=input()
a = list(map(int, input().split()))
a.reverse()
i = 0
for i in range(len(a)):
    print(a[i],end=" ")