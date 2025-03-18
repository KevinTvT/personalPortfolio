const fs = require("fs");
const path = require("path");

// Define the path to the images folder
const imagesDir = path.join(__dirname, "public", "media");
const jsonFilePath = path.join(__dirname, "public", "images.json");

// Read the files in the images directory
fs.readdir(imagesDir, (err, files) => {
  if (err) {
    console.error("Error reading images directory:", err);
    return;
  }

  // Filter only image files (jpg, png, jpeg, gif, svg)
  const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif|svg)$/i.test(file));

  // Convert to JSON format
  const jsonContent = JSON.stringify({ images: imageFiles }, null, 2);

  // Write the JSON file
  fs.writeFileSync(jsonFilePath, jsonContent);
  console.log("✅ images.json has been generated!");
});