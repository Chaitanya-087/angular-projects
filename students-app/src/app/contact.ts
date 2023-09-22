export class Contact {
    constructor(private name: string ,private contact: Contact) {

    }

    getContact(): Contact {
        return this.contact;
    }
}