import mongoose from "mongoose";

const {Schema}  = mongoose;

const topicSchema = new Schema(
    {
        title: String,
        description: String,
        imageURL: String,
    },{
        timestamps: true,
    }
);

// !!! Importanttttt
// Check if the Topic exists, if not create new Topic
const Topic = mongoose.models.Topic ||mongoose.model("Topic",topicSchema);

export default Topic;