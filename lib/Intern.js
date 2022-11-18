/**
 * Intern.js
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
class Intern extends Employee {
    constructor(name, id, email, school) {
        if (typeof school !== "string" || !school.trim().length) {
            throw new Error("Expected parameter 'school' to be a non-empty string");
        }
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;