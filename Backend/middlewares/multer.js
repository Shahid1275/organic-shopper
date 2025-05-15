import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    const uploadPath = path.join(__dirname, "../uploads"); // Go up one level to Backend folder
    console.log("Destination path:", uploadPath); // Debug log
    callback(null, uploadPath);
  },
  filename: function (req, file, callback) {
    const filename = Date.now() + path.extname(file.originalname);
    callback(null, filename);
  },
});

const upload = multer({ 
  storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB limit
  fileFilter: (req, file, callback) => {
    if (!file.mimetype.startsWith("image/")) {
      return callback(new Error("Only image files are allowed"));
    }
    callback(null, true);
  }
});

export default upload;