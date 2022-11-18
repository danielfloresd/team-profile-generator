const Employee = require('../lib/Employee');

describe('Employee', () => {

    describe("Initialization", () => {

        it('should return a new "Employee" object when called with the "new" keyword and provided valid arguments', () => {
            const name = 'Dan';
            const id = 2;
            const email = 'dan@gmail.com';

            const employee = new Employee(name, id, email);

            expect(employee).toBeInstanceOf(Employee);
        });

        it('should create an object containing "name", "id", and "email" properties when provided valid arguments', () => {
            const name = 'Dan';
            const id = 2;
            const email = 'dan@gmail.com';

            const employee = new Employee(name, id, email);

            expect("name" in employee).toEqual(true);
            expect("id" in employee).toEqual(true);
            expect("email" in employee).toEqual(true);
        });

        it('should create an object with values for "name", "id", and "email" mapped to the correct keys if provided valid arguments in the correct order', () => {
            const name = 'Dan';
            const id = 2;
            const email = 'dan@gmail.com';

            const employee = new Employee(name, id, email);

            expect(employee.name).toEqual(name);
            expect(employee.id).toEqual(id);
            expect(employee.email).toEqual(email);
        });

        it("should throw an error if provided no arguments", () => {
            const cb = () => new Employee();
      
            expect(cb).toThrow();
        });

        it("should throw an error if 'name' is undefined", () => {
            let nameUndefined;
            const id = 2;
            const email = 'dan@gmail.com';
            
            const cb = () => new Employee(nameUndefined, id, email);
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'name' is not a string", () => {
            const nameNotAString = 10;
            const id = 2;
            const email = 'dan@gmail.com';
            
            const cb = () => new Employee(nameNotAString, id, email);
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(cb).toThrowError(err)
        });

        it("should throw an error if 'name' is an empty string", () => {
            const nameEmptyString = '';
            const id = 2;
            const email = 'dan@gmail.com';
            
            const cb = () => new Employee(nameEmptyString, id, email);
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(cb).toThrowError(err)
        });

        it("should throw an error if 'id' is undefined", () => {
            const name = 'Dan';
            let idUndefined;
            const email = 'dan@gmail.com';
            
            const cb = () => new Employee(name, idUndefined, email);
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is not a number", () => {
            const name = 'Dan';
            const idNotANumber = "2";
            const email = 'dan@gmail.com';
            
            const cb = () => new Employee(name, idNotANumber, email);
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is a negative number", () => {
            const name = 'Dan';
            const idNegativeNumber = -2;
            const email = 'dan@gmail.com';
            
            const cb = () => new Employee(name, idNegativeNumber, email);
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided an id or email", () => {
            const name = 'Dan';
            
            const cb = () => new Employee(name);
      
            expect(cb).toThrow();
        });

        it("should throw an error if not provided an email", () => {
            const name = 'Dan';
            const id = 2;
            
            const cb = () => new Employee(name, id);
            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' is not a string", () => {
            const name = 'Dan';
            const id = 2;
            const emailNotAString = 10;
                
            const cb = () => new Employee(name, id, emailNotAString);
            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' is an empty string", () => {
            const name = 'Dan';
            const id = 2;
            const emailEmptyString = '';
            
            const cb = () => new Employee(name, id, emailEmptyString);
            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });

    });

    describe("getName", () => {

        it("should return the 'Employee' object's 'name' value", () => {
            const name = 'Dan';
            const id = 2;
            const email = 'dan@gmail.com';
            const obj = new Employee(name, id, email);

            const result = obj.getName();

            expect(result).toEqual(name);
        });

    });

    describe("getId", () => {

        it("should return the 'Employee' object's 'id' value", () => {
            const name = 'Dan';
            const id = 2;
            const email = 'dan@gmail.com';
            const obj = new Employee(name, id, email);

            const result = obj.getId();

            expect(result).toEqual(id);
        });

    });

    describe("getEmail", () => {

        it("should return the 'Employee' object's 'email' value", () => {
            const name = 'Dan';
            const id = 2;
            const email = 'dan@gmail.com';
            const obj = new Employee(name, id, email);

            const result = obj.getEmail();

            expect(result).toEqual(email);
        });

    });

    describe("getRole", () => {

        it("should return the string 'Employee' which describes the 'Employee' class", () => {
            const name = 'Dan';
            const id = 2;
            const email = 'dan@gmail.com';
            const obj = new Employee(name, id, email);
            const str = 'Employee';

            const result = obj.getRole();

            expect(result).toEqual(str);
        });

    });

});