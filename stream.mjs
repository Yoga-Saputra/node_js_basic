import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Yoga\n");
writer.write("Saputra\n");
writer.write("Testing\n");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
    console.info(data.toString());
});
