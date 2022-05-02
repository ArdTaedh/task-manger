import { Schema, model, models, Model } from 'mongoose';

interface IProject {
    name: string,
    description: string,
    toDo: any []
    processingTasks: any [],
    completedTasks: any []
}

const schema: Schema = new Schema <IProject> ({
    name: { type: String, required: true },
    description: { type: String },
    toDo: {  type: [], required: true, unique: true  },
    processingTasks: { type: [], required: true  },
    completedTasks: { type: [], required: true  }
})

export const Project: Model <IProject> = models.Project || model('Project', schema)