import math
a=int(input())
b=int(input())
for i in range(a,b):
    if(math.sqrt(i)*math.sqrt(i)==i):
        print(i,end=" ")