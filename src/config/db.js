const mongoose = require("mongoose");

// Hàm kết nối MongoDB
const mongoDb = async function main() {
  mongoose.connection.on("connected", () => {
    console.log("DB connected");
  });

  // Kết nối MongoDB (sử dụng chuỗi kết nối của bạn)
  await mongoose.connect("mongodb+srv://hiephoang1007:hiep1007@cluster0.dotzh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}

// Xuất hàm mongoDb dưới dạng module
module.exports = mongoDb;
