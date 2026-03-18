from models import Product, Food, Phone

p1 = Product("Book", 100, 2)
p2 = Food("Apple", 50, 5, "2026")
p3 = Phone("iPhone", 1000, 1, 2)

items = [p1, p2, p3]

for x in items:
    print(x)
    print("Total:", x.total())
    
    if hasattr(x, "info"):
        print(x.info())
    
    print("-----")