class Bike {
    drive() {
        console.log('Driving a Bike ')
    }
}

class Car {
    drive() {
        console.log('Driving a Car ')
    }
}

class Bus {
    drive() {
        console.log('Driving a Bus ')
    }
}

class VehicleFactory {
    static createVehicle(type) {
        switch (type) {
            case "car":
                return new Car();
            case "bike":
                return new Bike();
            case "bus":
                return new Bus();
            default:
                throw new Error("Invalid vehicle type");
        }
    }
}




// The Factory Pattern provides a way to create objects without specifying the exact class of object that will be created. 
// This is especially useful when the creation process is complex or based on dynamic input.

const car = VehicleFactory.createVehicle("car");
car.drive(); // Driving a car!

const bike = VehicleFactory.createVehicle("bike");
bike.drive();