a=int(input())
if a<1:
    print("NO")
while a>1:
    if a%2!=0:
        print("NO")
        break
    a=a/2 
else:
    print("YES")