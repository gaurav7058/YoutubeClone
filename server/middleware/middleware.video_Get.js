const multer = require("multer");
const path = require("path");
const fs = require("fs");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    
    if (!fs.existsSync("uploads")) {
      fs.mkdirSync("uploads");
    }

    // if (!fs.existsSync("uploads")) {
    //   fs.mkdirSync("uploads");
    // }

    cb(null, "uploads");
   
  },
  filename: function (req, file, cb) {
    return cb(null, `${file.fieldname}${Date.now()}${path.extname(file.originalname)}`);
    
  },
});
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    var extension = path.extname(file.originalname);
    if (extension !== ".mkv" && extension !== ".mp4") {
      return cb(new Error("only video are allowed"));
    }
    cb(null, true);
    
  },
});

module.exports = upload;
