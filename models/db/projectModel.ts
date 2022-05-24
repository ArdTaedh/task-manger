import { Schema, model, models, Model } from 'mongoose';

interface IProject {
    id: string,
    name: string,
    description: string,
    toDo: any []
    processingTasks: any [],
    completedTasks: any []
}

const schema: Schema = new Schema <IProject> ({
    id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    toDo: {  type: [], required: true, unique: true  },
    processingTasks: { type: [], required: true  },
    completedTasks: { type: [], required: true  }
})

export const Project: Model <IProject> = models.Project || model('Project', schema)