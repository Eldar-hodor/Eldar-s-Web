n=input()
a = list(map(int, input().split()))
i = 1
count=0
for i in range(len(a)):
    if a[i]>0:
        count=count+1
print(count)