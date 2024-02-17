import mongoose from 'mongoose';

const projectScheme = mongoose.Schema({
    first_var: {
        type: String,
        required: true,
        unique: true
    },
    second_var: {
        type: String,
        required: true
    },
}, { timestamps: true });

export default mongoose.model('project', projectScheme);