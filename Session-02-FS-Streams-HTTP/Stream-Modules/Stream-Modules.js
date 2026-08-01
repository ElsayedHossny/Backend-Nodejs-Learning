const fs = require("node:fs");
const { pipeline, Transform } = require("node:stream");

/********************************************* 1- Readable Stream *********************************************/

// const stream = fs.createReadStream("./Content.txt", {
//   encoding: "utf8",
//   highWaterMark: 5,
// });

// stream
//   .on("data", (chunk) => {
//     console.log(`Data :: ${chunk}`);
//   })
//   .on("open", () => {
//     console.log("open");
//   })
//   .on("resume", () => {
//     console.log("resume");
//   })
//   .on("close", () => {
//     console.log("close");
//   })
//   .on("end", () => {
//     console.log("end");
//   })
//   .on("err", (err) => {
//     console.log(`${err}`);
//   })
//   .on("ready", () => {
//     console.log(`ready`);
//   })
//   .on("pause", () => {
//     console.log("pause");
//   });

/********************************************* 2- Writable Stream *********************************************/

// const WriteStream = fs.createWriteStream("./Content.txt", { encoding: "utf8" });

// WriteStream.write("sayed\n");
// WriteStream.write("Habiba\n");
// WriteStream.write("Temo\n");
// WriteStream.end("Endddddd");

// WriteStream.on("finish", () => {
//   console.log("Finished writing to the file");
// })
//   .on("error", (err) => {
//     console.error("Error writing to the file:", err);
//   })
//   .on("close", () => {
//     console.log("Stream closed");
//   })
//   .on("open", () => {
//     console.log("Stream opened");
//   })
//   .on("ready", () => {
//     console.log("Stream ready");
//   });

/********************************************* 3- Duplex Stream *********************************************/

// const readable = fs.createReadStream("./Content.txt", {
//   encoding: "utf8",
// });
// const writable = fs.createWriteStream("./output.txt", { encoding: "utf8" });

// pipeline(readable, writable, (err) => {
//   if (err) throw err;
//   console.log("data sucess");
// });

/********************************************* 4- transform Stream *********************************************/

// const readable = fs.createReadStream("./Content.txt", {
//   encoding: "utf8",
// });
// const writable = fs.createWriteStream("./output.txt", { encoding: "utf8" });

// const upperCase = new Transform({
//   transform(chunk, encoding, callback) {
//     const data = chunk.toString().toUpperCase();
//     callback(null, data);
//   },
// });

// pipeline(readable, upperCase, writable, (err) => {
//   if (err) throw err;
//   console.log("data sucess");
// });
