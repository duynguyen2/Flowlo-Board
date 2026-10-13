class User {
    constructor(name, team = null) {
        this.name = name;
        this.team = this.team;
        this.privileges = [];
    }

    changeName(name) {
        this.name = name;
    }

    setPrivileges(newPrivileges) {
        this.privileges.push(newPrivileges);
    }
}

export default User;