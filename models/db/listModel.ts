import mongoose, {Schema, model, models, Model} from 'mongoose';

interface IList {
    title: string,
    cards: any [],
    owner: {}
}

const schema: Schema = new Schema<IList>({
    title: {type: String, required: true},
    cards: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Card',
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
    },
})

export const List: Model<IList> = models.List || model('List', schema)