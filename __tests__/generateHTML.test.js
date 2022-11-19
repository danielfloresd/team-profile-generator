const generateHTML = require('../src/generateHTML');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

describe('generateHTML', () => {
    
        describe("Initialization", () => {

            it('should throw an error if no arguments provided', () => {
                const cb = () => generateHTML();
                const err = new Error("Expected parameter 'team' to be an array");
                expect(cb).toThrowError(err);
            });

            
            it('should throw an error if the team has 0 elements', () => {
                const cb = () => generateHTML([]);
                const err = new Error("Expected parameter 'team' to be an array with at least 1 element");
                expect(cb).toThrowError(err);
            });

            it('should throw an error if the team array does not contain at least a Manager', () => {
                const cb = () => generateHTML([new Engineer('Dan', 2, 'dan@gmail.com', 'danielforesd')]);
                const err = new Error("Expected parameter 'team' to contain at least a Manager");
                expect(cb).toThrowError(err);

            });

            it('should return an string', () => {
                const manager = new Manager('Lucia', 1, 'lucia@gmail.com', 3);
                const team = [manager];
                const html = generateHTML(team);

                expect(html).toEqual(expect.any(String));
            });
    
            it('should return an HTML document with the team Manager information including name, id, role and officeNumber', () => {
                const manager = new Manager('Lucia', 1, 'lucia@gmail.com', 3);
                const team = [manager];
                const html = generateHTML(team);

                expect(html).toContain(manager.getName());
                // Validate that the HTML contains the team members' roles
                expect(html).toContain(manager.getRole());
                // Validate that the HTML contains the team members' IDs
                expect(html).toContain(`${manager.getId()}`);
                // Validate that the HTML contains the team members' emails
                expect(html).toContain(manager.getEmail());
                // Validate that the HTML contains the team members' office numbers
                expect(html).toContain(`${manager.getOfficeNumber()}`);

            })

            it('should return an HTML document with the Engineer information including name, id, role, email and github', () => {
                const manager = new Manager('Lucia', 1, 'lucia@gmail.com', 3);
                const engineer = new Engineer('Daniel', 2, 'dan@gmail.com', 'danielfloresd');
                const team = [manager, engineer];
                const html = generateHTML(team);

                // Validate that the HTML contains the team members' names
                expect(html).toContain(engineer.getName());
                // Validate that the HTML contains the team members' roles
                expect(html).toContain(engineer.getRole());
                // Validate that the HTML contains the team members' IDs
                expect(html).toContain(`${engineer.getId()}`);
                // Validate that the HTML contains the team members' emails
                expect(html).toContain(engineer.getEmail());
                // Validate that the HTML contains the team members' office numbers
                expect(html).toContain(engineer.getGithub());

            })

            it('should return an HTML document with the Intern information including name, id, role, email and school', () => {
                const manager = new Manager('Lucia', 1, 'lucia@gmail.com', 3);
                const intern = new Intern('Luis', 3, 'luis#gmail.com', 'UCLA');
                const team = [manager, intern];
                const html = generateHTML(team);

                // Validate that the HTML contains the team members' names
                expect(html).toContain(intern.getName());
                // Validate that the HTML contains the team members' roles
                expect(html).toContain(intern.getRole());
                // Validate that the HTML contains the team members' IDs
                expect(html).toContain(`${intern.getId()}`);
                // Validate that the HTML contains the team members' emails
                expect(html).toContain(intern.getEmail());
                // Validate that the HTML contains the team members' office numbers
                expect(html).toContain(intern.getSchool());

            })

            it('should return an HTML with standard HTML boilerplate', () => {
                const manager = new Manager('Lucia', 1, 'lucia@gmail.com', 3);
                const engineer = new Engineer('Daniel', 2, 'dan@gmail.com', 'danielfloresd');
                const intern = new Intern('Luis', 3, 'luis@gmail.com', 'UCLA');
                const team = [manager, engineer, intern];
                const html = generateHTML(team);

                // Validate that the HTML contains the standard HTML boilerplate
                expect(html).toContain('<!DOCTYPE html>');
                expect(html).toContain('<html lang="en">');
                expect(html).toContain('<head>');
                expect(html).toContain('<meta charset="UTF-8">');
                expect(html).toContain('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
                expect(html).toContain('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
                expect(html).toContain('<title>Team Profile</title>');

            })
        });
    });

    