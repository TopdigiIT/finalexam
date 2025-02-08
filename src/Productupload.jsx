import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function ProductUpload() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct({ ...product, image: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product submitted:", product);
    // API integration can be added here
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Upload Product</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input type="text" name="name" placeholder="Product Name" onChange={handleChange} required />
            <Textarea name="description" placeholder="Product Description" onChange={handleChange} required />
            <Input type="number" name="price" placeholder="Price" onChange={handleChange} required />
            <Input type="text" name="category" placeholder="Category" onChange={handleChange} required />
            <Input type="file" accept="image/*" onChange={handleImageChange} required />
            {preview && <img src={preview} alt="Preview" className="w-32 h-32 object-cover mt-2" />}
            <Button type="submit" className="w-full">Upload</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
