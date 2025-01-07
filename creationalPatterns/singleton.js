class Logger {
    constructor() {
        console.log('---this---');
        if (Logger.instance) {
            return Logger.instance; // Return the existing instance if it exists
        }
        Logger.instance = this;
        this.logs = [];
    }

    log(message) {
        this.logs.push(message);
        console.log(`[LOG]:${message}`);
    }
    getLogs() {
        return this.logs;
    }
}

// Usage
const logger1 = new Logger();
logger1.log('First Log message');

const logger2 = new Logger();
logger2.log('Second Log message');


// Verify Singleton behavior
console.log(logger1 === logger2); // true
console.log(logger1.getLogs());


// The Singleton Pattern ensures that a class has only one instance and provides a global point of access to that instance.