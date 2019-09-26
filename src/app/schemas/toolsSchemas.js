import mongoose from 'mongoose';

const toolsSchema = new mongoose.Schema({
  id: String,
  title: String,
  link: String,
  description: String,
  tags: [String],
},
{
  timestamps: true,
});

export default mongoose.model('tools', toolsSchema);
