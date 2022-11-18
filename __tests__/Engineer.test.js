const Engineer = require('../lib/Engineer');

describe('Engineer', () => {

    describe("Initialization", () => {

        it('should return a new "Engineer" object when called with the "new" keyword and provided valid arguments', () => {
            const name = 'Daniel';
            const id = 2;
            const email = 'daniel@gmail.com';
            const github = 'danielfloresd';

            const engineer = new Engineer(name, id, email, github);

            expect(engineer).toBeInstanceOf(Engineer);
        });

        it('should create an object containing "name", "id", "email", and "github" properties when provided valid arguments', () => {
            const name = 'Daniel';
            const id = 2;
            const email = 'daniel@gmail.com';
            const github = 'danielfloresd';

            const engineer = new Engineer(name, id, email, github);

            expect("name" in engineer).toEqual(true);
            expect("id" in engineer).toEqual(true);
            expect("email" in engineer).toEqual(true);
            expect("github" in engineer).toEqual(true);
        });

        it('should create an object with values for "name", "id", "email", and "github" mapped to the correct keys if provided valid arguments in the correct order', () => {
            const name = 'Daniel';
            const id = 2;
            const email = 'daniel@gmail.com';
            const github = 'danielfloresd';

            const engineer = new Engineer(name, id, email, github);

            expect(engineer.name).toEqual(name);
            expect(engineer.id).toEqual(id);
            expect(engineer.email).toEqual(email);
            expect(engineer.github).toEqual(github);
        });

        it("should throw an error if provided no arguments", () => {
            const cb = () => new Engineer();
      
            expect(cb).toThrow();
        });

        it("should throw an error if 'name' is undefined", () => {
            let nameUndefined;
            const id = 2;
            const email = 'daniel@gmail.com';
            const github = 'danielfloresd';
            
            const cb = () => new Engineer(nameUndefined, id, email, github);
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'name' is not a string", () => {
            const nameNotAString = 10;
            const id = 2;
            const email = 'daniel@gmail.com';
            const github = 'danielfloresd';

            const cb = () => new Engineer(nameNotAString, id, email, github);
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(cb).toThrowError(err)
        });

        it("should throw an error if 'name' is an empty string", () => {
            const nameEmptyString = '';
            const id = 2;
            const email = 'daniel@gmail.com';
            const github = 'danielfloresd';
            
            const cb = () => new Engineer(nameEmptyString, id, email, github);
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(cb).toThrowError(err)
        });

        it("should throw an error if not provided an id, email, or github", () => {
            const name = 'Daniel';
            
            const cb = () => new Engineer(name);
      
            expect(cb).toThrow();
        });

        it("should throw an error if 'id' is undefined", () => {
            const name = 'Daniel';
            let idUndefined;
            const email = 'daniel@gmail.com';
            const github = 'danielfloresd';
            
            const cb = () => new Engineer(name, idUndefined, email, github);
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is not a number", () => {
            const name = 'Daniel';
            const idNotANumber = "2";
            const email = 'daniel@gmail.com';
            const github = 'danielfloresd';
            
            const cb = () => new Engineer(name, idNotANumber, email, github);
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is a negative number", () => {
            const name = 'Daniel';
            const idNegativeNumber = -2;
            const email = 'daniel@gmail.com';
            const github = 'danielfloresd';
            
            const cb = () => new Engineer(name, idNegativeNumber, email, github);
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided an email or github", () => {
            const name = 'Daniel';
            const id = 2;
            
            const cb = () => new Engineer(name, id);
      
            expect(cb).toThrow();
        });

        it("should throw an error if 'email' is not a string", () => {
            const name = 'Daniel';
            const id = 2;
            const emailNotAString = 10;
            const github = 'danielfloresd';
                
            const cb = () => new Engineer(name, id, emailNotAString, github);
            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' is an empty string", () => {
            const name = 'Daniel';
            const id = 2;
            const emailEmptyString = '';
            const github = 'danielfloresd';
            
            const cb = () => new Engineer(name, id, emailEmptyString, github);
            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' is undefined", () => {
            const name = 'Daniel';
            const id = 2;
            let emailUndefined;
            const github = 'danielfloresd';
            
            const cb = () => new Engineer(name, id, emailUndefined, github);
            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided a github", () => {
            const name = 'Daniel';
            const id = 2;
            const email = 'daniel@gmail.com';
            
            const cb = () => new Engineer(name, id, email);
            const err = new Error("Expected parameter 'github' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'github' is not a string", () => {
            const name = 'Daniel';
            const id = 2;
            const email = 'daniel@gmail.com';
            const githubNotAString = 10;

            const cb = () => new Engineer(name, id, email, githubNotAString);
            const err = new Error("Expected parameter 'github' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'github' is an empty string", () => {
            const name = 'Daniel';
            const id = 2;
            const email = 'daniel@gmail.com';
            const githubEmptyString = '';
            
            const cb = () => new Engineer(name, id, email, githubEmptyString);
            const err = new Error("Expected parameter 'github' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

    });

    describe("getName", () => {

        it("should return the 'Engineer' object's 'name' value", () => {
            const name = 'Daniel';
            const id = 2;
            const email = 'daniel@gmail.com';
            const github = 'danielfloresd';
            const obj = new Engineer(name, id, email, github);

            const result = obj.getName();

            expect(result).toEqual(name);
        });

    });

    describe("getId", () => {

        it("should return the 'Engineer' object's 'id' value", () => {
            const name = 'Daniel';
            const id = 2;
            const email = 'daniel@gmail.com';
            const github = 'danielfloresd';
            const obj = new Engineer(name, id, email, github);

            const result = obj.getId();

            expect(result).toEqual(id);
        });

    });

    describe("getEmail", () => {

        it("should return the 'Engineer' object's 'email' value", () => {
            const name = 'Daniel';
            const id = 2;
            const email = 'daniel@gmail.com';
            const github = 'danielfloresd';
            const obj = new Engineer(name, id, email, github);

            const result = obj.getEmail();

            expect(result).toEqual(email);
        });

    });

    describe("getGithub", () => {

        it("should return the 'Engineer' object's 'github' value", () => {
            const name = 'Daniel';
            const id = 2;
            const email = 'daniel@gmail.com';
            const github = 'danielfloresd';
            const obj = new Engineer(name, id, email, github);

            const result = obj.getGithub();

            expect(result).toEqual(github);
        });

    });

    describe("getRole", () => {

        it("should return the string 'Engineer' which describes the 'Engineer' class", () => {
            const name = 'Daniel';
            const id = 2;
            const email = 'daniel@gmail.com';
            const github = 'danielfloresd';
            const obj = new Engineer(name, id, email, github);
            const str = 'Engineer';

            const result = obj.getRole();

            expect(result).toEqual(str);
        });

        it("should not return the string 'Employee' since the getRole method extended from the Employee class has been overridden to return the string 'Engineer'", () => {
            const name = 'Daniel';
            const id = 2;
            const email = 'daniel@gmail.com';
            const github = 'danielfloresd';
            const obj = new Engineer(name, id, email, github);
            const str = 'Employee';

            const result = obj.getRole();

            expect(result).not.toEqual(str);
        });

    });

});