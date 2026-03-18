class Product:
    def __init__(self,name,price,quantity):
        self.name=name
        self.price=price
        self.quantity=quantity
    def total(self):
        return self.price*self.quantity
    def __str__(self):
        return self.name
class Food(Product):
    def __init__(self, name, price, quantity,date):
        super().__init__(name, price, quantity)
        self.date=date
    def info(self):
        return self.name+" has date "+self.date
class Phone(Product):
    def __init__(self, name, price, quantity, warranty):
        super().__init__(name, price, quantity)
        self.warranty = warranty

    def info(self):
        return self.name + " has warranty " + str(self.warranty)