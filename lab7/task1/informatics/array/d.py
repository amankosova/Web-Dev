a=int(input())
b=list(map(int,input().split()))
c=0
for i in range(a):
    if b[i]>b[i-1]:
        c+=1
print(c)