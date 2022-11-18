/**
 * Employee.js
 * This had better be a single object written in JavaScript, if you like your job.
 *
 *
 * @license The Unlicense, http://unlicense.org/
 * @version 1.0
 * @author  Daniel Flores, https://github.com/danielfloresd/
 * @updated 2022-11-16
 * @link    url goes here
 *
 *
 */
 class Employee {
    constructor(name, id, email) {
        
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }
        if (typeof id !== "number" || isNaN(id) || id < 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        }
        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }

        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() { 
        return this.name;
    }

    getId() { 
        return this.id; 
    }

    getEmail() { 
        return this.email;     
    }

    getRole() { 
        return 'Employee';
    }
}

module.exports = Employee;