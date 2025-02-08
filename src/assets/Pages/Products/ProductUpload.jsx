import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";

// Firebase configuration (Replace with your own Firebase config)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const ProductUpload = () => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const [uploading, setUploading] = useState(false);

  const onSubmit = async (data) => {
    setUploading(true);

    // Upload image to Firebase Storage
    if (data.image[0]) {
      const imageFile = data.image[0];
      const storageRef = ref(storage, `product-images/${imageFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          console.error("Upload failed:", error);
          setUploading(false);
        },
        async () => {
          const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
          data.image = imageUrl;
          data.timePosted = new Date().toLocaleString();
          console.log("Product Data:", data);
          alert("Product uploaded successfully!");
          setUploading(false);
        }
      );
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Upload Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input type="text" placeholder="Product Name" {...register("productName")} className="w-full p-2 border rounded" required />
        <input type="file" {...register("image")} className="w-full p-2 border rounded" required />
        <input type="text" placeholder="Location" {...register("location")} className="w-full p-2 border rounded" required />
        <input type="number" placeholder="Resale Price" {...register("resalePrice")} className="w-full p-2 border rounded" required />
        <input type="number" placeholder="Original Price" {...register("originalPrice")} className="w-full p-2 border rounded" required />
        <input type="number" placeholder="Years of Use" {...register("yearsOfUse")} className="w-full p-2 border rounded" required />
        <input type="text" placeholder="Seller Name" {...register("sellerName")} className="w-full p-2 border rounded" required />
        <label className="flex items-center space-x-2">
          <input type="checkbox" {...register("isVerified")} />
          <span>Seller Verified</span>
        </label>
        <button type="submit" disabled={uploading} className="w-full bg-blue-500 text-white p-2 rounded">
          {uploading ? "Uploading..." : "Upload Product"}
        </button>
      </form>
    </div>
  );
};

export default ProductUpload;
