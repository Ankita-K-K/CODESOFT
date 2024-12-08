const mongoose = require("mongoose");
const connectDB = async () => {
    await mongoose.connect("mongodb+srv://ankitakanakagiri:mvwgrjcAasXKOwhv@nodiee-node.nwvnu.mongodb.net/eShopie");
}

module.exports = { connectDB };