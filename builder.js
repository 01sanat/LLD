class Pizza {
    constructor() {
        this.size = null;
        this.crust = null;
        this.toppings = [];
    }
}

class PizzaBuilder {
    constructor() {
        this.Pizza = new Pizza();
    }
    setSize(size) {
        this.Pizza.size = size;
        return this;
    }

    setCrust(crust) {
        this.Pizza.crust = crust;
        return this;
    }
    addToppings(topping) {
        this.Pizza.toppings.push(topping);
        return this;
    }

    build() {
        return this.Pizza;
    }
}
// usage 
const pizza = new PizzaBuilder().setSize('Large').setCrust('Thin').addToppings('cheese').addToppings('Pepperoni').build();

console.log('------', pizza);

// The Builder Pattern separates the construction of a complex object from its representation.
// This allows you to build objects step-by-step.

