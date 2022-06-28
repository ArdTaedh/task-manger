import mongoose, { Schema, model, models, Model } from 'mongoose';

interface IProject {
    name: string,
    description: string,
    lists: any []
}

const schema: Schema = new Schema <IProject> ({
    name: { type: String, required: true },
    description: { type: String, default: '' },
    lists: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'List'
        }
    ]
})

export const Project: Model <IProject> = models.Project || model('Project', schema)