require("dotenv").config();
import grpc from "@grpc/grpc-js";

async function main() {
  let server = new grpc.Server();
  // server.addService(services.UserSvcService, {
  //     register: api.register,
  //     login: api.login,
  //     verify: api.verify,
  //     getUser: api.getUser,
  // });
  let address = process.env.HOST + ":" + process.env.PORT;
  server.bindAsync(address, grpc.ServerCredentials.createInsecure(), () => {
    server.start();
    console.log("Server running at " + address);
  });
}

main();
