n=input()
a = list(map(int, input().split()))
i = 0
count=0
for i in range(len(a)-1):
    if (a[i]>0 and a[i+1]>0) or (a[i]<=0 and a[i+1]<=0):
        print('YES')
        break
    else:
        print('NO')

