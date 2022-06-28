module.exports = class UserDto {
    id;
    username;
    email;
    image;
    projects;
    processingTasks;
    completedTasks;

    constructor(model) {
        this.id = model._id;
        this.username = model.username
        this.email = model.email;
        this.image = model.image;
        this.projects = model.projects
        this.processingTasks = model.processingTasks
        this.completedTasks = model.completedTasks
    }
}