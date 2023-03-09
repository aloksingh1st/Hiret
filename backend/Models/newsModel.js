const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    news: { type: String, required: false }
    
  },

  
  {
    timestamps: true,
  }
);
module.exports = News = mongoose.model('recentnews', newsSchema)
// export default User;
