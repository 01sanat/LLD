

// The Abstract Factory Pattern is a creational design pattern that provides an interface for creating families of related or 
// dependent objects without specifying their concrete classes.

// This pattern is particularly useful when:

// You need to create multiple related objects that share a common theme.
// You want to enforce consistency among the objects being created.
// The exact types or classes of the objects are determined at runtime.


// Difference Between Factory and Abstract Factory
// Factory Pattern: Creates a single type of product (e.g., a Car, Bike, or Bus).
// Abstract Factory Pattern: Creates families of related or dependent products (e.g., a PetrolCar, PetrolBike, DieselBus).


// abstract class or base products

class Car {
    drive() {
        throw new Error('Method drive() must be implemented')
    }
}

class Bike {
    drive() {
        throw new Error('Method drive() must be implemented')
    }
}

// concrete products

class PetrolCar extends Car {
    drive() {
        console.log("Driving a petrol car.");
    }
}

class PetrolBike extends Bike {
    drive() {
        console.log("Driving a petrol Bike.");
    }
}

class DieselCar extends Car {
    drive() {
        console.log("Driving a diesel car.");
    }
}

class DieselBike extends Bike {
    drive() {
        console.log("Driving a diesel Bike.");
    }
}

// abstract factory
class VehicleFactory {
    createCar() {
        throw new Error('Method createCar() must be implemented')
    }

    createBike() {
        throw new Error('Method createBike() must be implemented')
    }
}

// concrete Factory
class PetrolFactory extends VehicleFactory {
    createCar() {
        return new PetrolCar();
    }
    createBike() {
        return new PetrolBike();
    }
}

class DieselFactory extends VehicleFactory {
    createCar() {
        return new DieselCar();
    }
    createBike() {
        return new DieselBike();
    }
}


// use concrete factories to create families of products 

function createVehicle(factory) {
    const car = factory.createCar();
    const bike = factory.createBike();

    car.drive();
    bike.drive();
}

const petrolFac = new PetrolFactory();
createVehicle(petrolFac);





