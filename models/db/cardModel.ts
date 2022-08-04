import mongoose, {Schema, model, models, Model} from 'mongoose';

interface ICard {
    title: string,
    description: string,
    date: {}
    owner: {}
}

const schema: Schema = new Schema<ICard>({
    title: {type: String, required: true},
    description: {
        type: String,
        default: '',
    },
    date: {
        _id: false,
        startDate: {
            type: Date,
        },
        // dueDate: {
        //     type: Date,
        // },
        // dueTime: {
        //     type: String,
        // },
        completed: {
            type: Boolean,
            default: false,
        },
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List',
    },
})

export const Card: Model<ICard> = models.Card || model('Card', schema)