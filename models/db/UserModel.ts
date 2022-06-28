import mongoose, { Schema, model, models, Model } from 'mongoose';

interface IUser {
    username: string,
    image: string,
    email: string,
    password: string,
    projects: any []

}

const schema: Schema = new Schema <IUser> ({
    username: { type: String, required: true },
    image: { type: String },
    email: {  type: String, required: true, unique: true  },
    password: { type: String, required: true },
    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project'
        }
    ]
})

export const User: Model <IUser> = models.User || model('User', schema)