import React from "react";

class Task {
    constructor(title, description, completed = false) {
        this.title = title;
        this.description = description;
        this.completed = completed
    }

    toggleCompletion() {
        this.completed = !this.completed;
    }

    changeTitle(newTitle) {
        this.title = newTitle;
    }

    changeDescription(newDescription) {
        this.description = newDescription;
    }
}

export default Task;