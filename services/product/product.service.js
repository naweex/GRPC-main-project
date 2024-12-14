require('./config/db.connection')
const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
const path = require('path')
const protoPath = path.join(__dirname , '..' , '..' , 'protos' , 'product.proto');
const productProto = protoLoader.loadSync(protoPath);
const {productPackage} = grpc.loadPackageDefinition(productProto)
const productServiceURL = 'localhost:4001';
function main(){
    const server = new grpc.Server()
    server.addService(productPackage.ProductService.service)
}
