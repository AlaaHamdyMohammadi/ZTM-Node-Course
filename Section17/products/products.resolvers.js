const productModel = require("./products.model");

module.exports = {
  Query: {
    products: () => {
      return productModel.getAllProducts();
    },
    getProductsByPrice: (_, args) => {
      return productModel.getProductsByPrice(args.min, args.max)
    }
  },
};
