const fs = require("node:fs");

/********************************************* 1- Read File *********************************************/
// // Async
// fs.readFile("./Fs-Modules.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log("ASync ::", data);
// });
// // Sync
// const data = fs.readFileSync("./Fs-Modules.txt", "utf8");
// console.log("Sync ::", data);

/********************************************* 2- Write File *********************************************/
// IMP:Note Write method First=>clear data File then Write New data

// Async
// const data = "Elsayed Hossny";
// const data2 = "Elsayed Hossny Elsayed";
// fs.writeFile("./Fs-Modules.txt", data, "utf8", (err) => {
//   if (err) throw err;
// });
// // Sync
// fs.writeFileSync("./Fs-Modules.txt", data2, "utf8");
// console.log('File has been saved!');

/********************************************* 3- Append File *********************************************/
// IMP:Note Append method Add data without remove old data

// // ASync
// const data = "Habiba norrrrr Hossny";
// fs.appendFile("./New.txt", data, "utf8", (err) => {
//   if (err) throw err;
//   console.log("Async :: The data was appended!");
// });
// // Sync
// fs.appendFileSync("./New2.txt", data, "utf8");
// console.log("sync :: The data was appended!");

/********************************************* 4- Delet File *********************************************/
// // Async
// fs.unlink("./New.txt", (err) => {
//   if (errr) throw err;
//   console.log("Async :: delete file");
// });

// //sync
// fs.unlinkSync("./New2.txt");

/********************************************* 5- Renaming Files *********************************************/
// // Async
// fs.rename("file.txt", "Fs-Modules.txt", (err) => {
//   if (err) throw err;
//   console.log("Async :: rename");
// });
// //sync
// fs.renameSync("file.txt", "Fs-Modules.txt");
// console.log("Sync :: rename");

/********************************************* 6- Copy File *********************************************/
// //Async
// fs.copyFile("./Fs-Modules.txt", "New2.txt", (err) => {
//   if (err) throw err;
// });
// //sync
// fs.copyFileSync("./Fs-Modules.js", "New2.txt");

/********************************************* 1- Create Floders *********************************************/
// // create Folders with check security
// if (!fs.existsSync("projects1/node1/app3")) {
//   fs.mkdir("projects1/node1/app3", { recursive: true }, (err) => {
//     if (err) throw err;
//   });
// }

// // create Files
// fs.writeFile("projects1/node1/app3/text.txt", "sayed", "utf8", (err) => {
//   if (err) throw err;
// });

/********************************************* 2- Remove Floders *********************************************/
// fs.rmdir("./projects1", { recursive: true, force: true }, (err) => {
//   if (err) throw err;
// });
// fs.rmdirSync("projects1", { recursive: true, force: true });

/********************************************* 3- Read Folders *********************************************/
// fs.readdir("./projects1", (err, files) => {
//   if (err) throw err;
//   console.log(files);
// });
/********************************************* 4- Check Folders *********************************************/

// console.log(fs.existsSync("projects1/node1/app3"));

/**********************************************   Example   ****************************************************/
// let data1 = [
//   { name: "sayed", id: 1 },
//   { name: "sama", id: 2 },
// ];

// const data = JSON.stringify(data1);

// fs.writeFile("./Fs-Modules.txt", data, "utf8", (err) => {
//   if (err) throw err;
// });
