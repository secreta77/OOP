import UserConfig from './UserConfig.js';

export class User {
    constructor(name, email, avatar) {
        this.name = name;
        this.email = email;
        this.avatar = avatar;
        this.role = UserConfig.isAdmin ? 'ადმინი' : 'მომხმარებელი';
        this.isLogged = UserConfig.isLogged;
    }

    Role() {
        return this.role;
    }

    loggedIn() {
        return this.isLogged;
    }
}


export class Navbar {
    constructor(bgcolor, position, output) {
        this.bgcolor = bgcolor;
        this.position = position;
        this.output = output;
    }

    GetNavbar() {

        const Targetelement = document.getElementById(this.output);
        if (!Targetelement) {
            return;
        }

        Targetelement.innerHTML = `
            <nav style="
                background-color: ${this.bgcolor}; 
                text-align: ${this.position}; 
                padding: 15px; 
                color: white;
                font-family: sans-serif;">
                <a style="color: white; margin: 0 10px; text-decoration: none;">მთავარი</a>
                <a style="color: white; margin: 0 10px; text-decoration: none;">ჩვენ შესახებ</a>
                <a style="color: white; margin: 0 10px; text-decoration: none;">კონტაქტი</a>
            </nav>
        `;
    }
}











