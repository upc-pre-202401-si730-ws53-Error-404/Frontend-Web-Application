class User {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.membership = membership;
    }

    // Método para obtener la información del usuario
    getUserInfo() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
        };
    }