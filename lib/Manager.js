/**
 * Manager.js
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
const Employee = require('./Employee');

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        
        if (typeof officeNumber !== "number" || isNaN(officeNumber) || officeNumber < 0) {
            throw new Error("Expected parameter 'officeNumber' to be a non-negative number");
        }

        super(name, id, email);
        this.officeNumber = officeNumber;

    }

    getOfficeNumber() {

        return this.officeNumber;

    }

    getRole() {

        return 'Manager';

    }
}

module.exports = Manager;