n=input()
a = list(map(int, input().split()))
i = 0
for i in range(len(a)):
    if a[i]%2==0:
        print(a[i],end=" ")