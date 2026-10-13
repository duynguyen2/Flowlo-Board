import React from "react";

const priorityTags = ['low', 'medium', 'high', 'very high', 'top'];

class Task {
    constructor(title, description, completed = false, priority = 0) {
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.priority = priority;
        this.tags = [];
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

    changePriority(newPriority) {
        this.priority = newPriority;
    }

    addImage() {

    }

    addTag(newTags) {
        this.tags.push(newTags);
    }
}

export default Task;