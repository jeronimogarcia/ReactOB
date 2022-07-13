export class Contact {
    name = '';
    apellido = '';
    email = '';
    conected = true;

    constructor(name, apellido, email, conected) {
        this.name = name;
        this.apellido = apellido;
        this.email = email;
        this.conected = conected;
    }
}