import cloudinary from "cloudinary";
import fs from "fs";

cloudinary.config({ secure: true });

const uploadOnClaudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.v2.uploader.upload(localFilePath, {
      resource_type: "image",
    });

    console.log("Cloudinary upload successful:", response.url);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export default uploadOnClaudinary;
