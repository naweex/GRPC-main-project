const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
const path = require('path');
const productProtoPath = path.join(__dirname , '..' , '..' , 'protos' , 'product.proto');
const productProto = protoLoader.loadSync(productProtoPath);
const {productPackage} = grpc.loadPackageDefinition(productProto)
const productServiceURL = 'localhost:4001';
const productClient = new productPackage.ProductService(productServiceURL, grpc.credentials.createInsecure());
async function listProduct(req , res , next){
    productClient.listProduct(null , (err , data) => {
        if(err) return res.json(err);
        return res.json(data)
    })
}
async function getProduct(req , res , next){}
async function createProduct(req , res , next){}
async function updateProduct(req , res , next){}
async function deleteProduct(req , res , next){}

module.exports = {
    listProduct ,
    getProduct ,
    createProduct ,
    updateProduct ,
    deleteProduct
}