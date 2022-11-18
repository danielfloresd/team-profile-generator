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
const Employee = require('./Employee');
class Engineer extends Employee {
    constructor(name, id, email, github) {
        
        if (typeof github !== "string" || !github.trim().length) {
            throw new Error("Expected parameter 'github' to be a non-empty string");
        }
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;