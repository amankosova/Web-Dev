a=input()
b=len(a)-1
res=0
for i in range(len(a)):
    res+=2**i*int(a[b])
    b-=1
print(res)