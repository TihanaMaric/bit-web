/*Book*/
class Book{
    constructor(title, author, copyrightDate, ISBN, numPages){
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.ISBN = ISBN;
        this.numPages = numPages;
        this.numTimesCHeckout = 0;
        this.discarted = false;
    }
    discartedBook(){
        this.discarted = true;
    }
}
class Manuel extends Book{
    constructor(title, author, copyrightDate, ISBN, numPages){
        super(title, author, copyrightDate, ISBN, numPages);
    }
    checkDisposal(){
        var currentYear = new Date().getFullYear();
        if(currentYear - this.copyrightDate > 5){
            this.discartedBook();
        }
    }
}
class Novel extends Book{
    constructor(title, author, copyrightDate, ISBN, numPages){
        super(title, author, copyrightDate, ISBN, numPages);
    }
    checkDisposal(){
        if(this.numTimesCHeckout > 100){
            this.discartedBook();
        }
    }
    updateCheckout(numberOfTimesCheckout){
        this.numberOfTimesCheckout += numberOfTimesCheckout;
    }
}
var novel = new Novel("Na Drini ćuprija", "Ivo Andrić", 1945, "9780743273565", 366);
var manual = new Manuel("Python Programming for Beginers", "John Smith", 2016, "9781234567890", 300);
novel.updateCheckout(5);
manual.checkDisposal();

/*Calculator*/
class StackCalc {
    constructor() {
        this.stack = []
    }
    run(instructions) {
        var instArr = instructions.split(' ');
        for (var instruction of instArr) {
            if (["+", "-", "*", "/"].includes(instruction)) {
                if (this.stack.length < 2) {
                    return "Not enough values on the stack"
                }
                var val1 = this.stack.pop()
                var val2 = this.stack.pop()
                if (instruction === "+") {
                    this.stack.push(val1 + val2)
                } else if (instruction === "-") {
                    this.stack.push(val1 - val2)
                } else if (instruction === "*") {
                    this.stack.push(val1 * val2)
                } else if (instruction === "/") {
                    this.stack.push(val1 / val2)
                }
            } else if (instruction === "DUP") {
                if (this.stack.length === 0) {
                    return "Not enough values on the stack"
                }
                this.stack.push(this.stack[this.stack.length - 1])
            } else if (instruction === "POP") {
                if (this.stack.length === 0) {
                    return "Not enough values on the stack"
                }
                this.stack.pop()
            } else if (!isNaN(instruction)) {
                this.stack.push(parseFloat(instruction))
            } else {
                return `Invalid instruction: ${instruction}`
            }
        }
    }
    getValue() {
        if (this.stack.length === 0) {
            return 0
        }
        return this.stack[this.stack.length - 1]
    }
}
var stackCalc = new StackCalc();
console.log(stackCalc.run("")); 
console.log(stackCalc.getValue()); 
stackCalc.run("5 6 +");
console.log(stackCalc.getValue()); 
stackCalc.run("3 DUP +");
console.log(stackCalc.getValue()); 
stackCalc.run("6 5 5 7 * - /");
console.log(stackCalc.getValue()); 
console.log(stackCalc.run("x y +"));

// CoffeeShop
class CoffeeShop {
    constructor(name, menu) {
      this.name = name;
      this.menu = menu;
      this.orders = [];
    }
    addOrder(nameOfMenu) {
      const order = this.menu.find(el => nameOfMenu === el.menuName);
      if (order) {
        this.orders.push(order);
        return "Order added!";
      } else return "This item is currently unavailable!";
    }
  
    fulfillOrder() {
      if (this.orders.length > 0) {
        const removedOrder = this.orders.shift();
        return `The ${removedOrder.menuName} is ready!`;
      } else return "All orders have been fulfilled!";
    }
    listOrders() {
      if (this.orders.length > 0) {
        const ordersName = [];
        this.orders.forEach(el => ordersName.push(el.menuName));
        return ordersName;
      } else return [];
    }
    dueAmount() {
      if (this.orders.length > 0) {
        const totalPrice = this.orders.reduce(
          (acc, curr) => acc + curr.menuPrice,
          0
        );
        return totalPrice;
      } else return 0.0;
    }
    cheapestItem() {
      let min = this.menu[0].menuPrice;
      let cheapest = this.menu[0].menuName;
  
      this.menu.forEach(el => {
        if (el.menuPrice < min) {
          min = el.menuPrice;
          cheapest = el.menuName;
        }
      });
      return cheapest;
    }
    drinksOnly() {
      const drinks = [];
      this.menu.forEach(el => {
        if (el.menuType === "drink") drinks.push(el.menuName);
      });
      return drinks;
    }
    foodOnly() {
      const food = [];
      this.menu.forEach(el => {
        if (el.menuType === "food") food.push(el.menuName);
      });
      return food;
    }
  }
  
  const shop = new CoffeeShop("Coffee shop", [
    { menuName: "orange juice", menuType: "drink", menuPrice: 2 },
    { menuName: "lemonade", menuType: "drink", menuPrice: 1.4 },
    { menuName: "hot chocolate", menuType: "drink", menuPrice: 2.5 },
    { menuName: "iced coffee", menuType: "drink", menuPrice: 2.78 },
    { menuName: "tuna sandwich", menuType: "food", menuPrice: 4.2 },
    { menuName: "bacon and egg", menuType: "food", menuPrice: 4.5 },
    { menuName: "hamburger", menuType: "food", menuPrice: 5.25 },
  ]);

  console.log(shop);