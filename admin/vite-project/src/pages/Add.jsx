import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState({ S: "", M: "", L: "", XL: "" });
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [bestseller, setBestseller] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [benefits, setBenefits] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (setImage, e) => {
    if (!e.target.files || e.target.files.length === 0) {
      toast.error("Please select an image");
      return;
    }
    const file = e.target.files[0];
    setImage(file);
};

  const handlePriceChange = (size, value) => {
    setPrice((prevPrice) => ({
      ...prevPrice,
      [size]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

    try {
      // Validate required fields
      if (!name.trim()) {
        toast.error("Product name is required");
        setIsLoading(false);
        return;
      }
      if (!category) {
        toast.error("Product category is required");
        setIsLoading(false);
        return;
      }
      if (!subcategory) {
        toast.error("Product sub-category is required");
        setIsLoading(false);
        return;
      }
      if (!stock) {
        toast.error("Stock status is required");
        setIsLoading(false);
        return;
      }
      if (!bestseller) {
        toast.error("Bestseller status is required");
        setIsLoading(false);
        return;
      }
      if (!ingredients.trim()) {
        toast.error("Ingredients are required");
        setIsLoading(false);
        return;
      }
      if (!benefits.trim()) {
        toast.error("Benefits are required");
        setIsLoading(false);
        return;
      }
      if (!description.trim()) {
        toast.error("Product description is required");
        setIsLoading(false);
        return;
      }

      // Validate at least one price is provided
      const hasPrice = Object.values(price).some(value => value !== "" && !isNaN(value) && Number(value) >= 0);
      if (!hasPrice) {
        toast.error("At least one price is required");
        setIsLoading(false);
        return;
      }

      // Validate at least the first image is provided
      if (!image1) {
        toast.error("At least the one image is required");
        setIsLoading(false);
        return;
      }

      const formData = new FormData();

      if (image1) formData.append("image1", image1);
      if (image2) formData.append("image2", image2);
      if (image3) formData.append("image3", image3);
      if (image4) formData.append("image4", image4);

      formData.append("name", name);
      formData.append("category", category);
      formData.append("subCategory", subcategory);
      formData.append("description", description);
      formData.append("stockStatus", stock);
      formData.append("bestseller", bestseller);
      
      formData.append("price", JSON.stringify(price));
      formData.append("ingredients", JSON.stringify(ingredients.split(",").map(item => item.trim())));
      formData.append("benefits", JSON.stringify(benefits.split(",").map(item => item.trim())));
      
      const response = await axios.post(`${backendUrl}/api/product/add`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        toast.success("Product added successfully!");
        setImage1(null);
        setImage2(null);
        setImage3(null);
        setImage4(null);
        setName("");
        setCategory("");
        setPrice({ S: "", M: "", L: "", XL: "" });
        setDescription("");
        setStock("");
        setSubcategory("");
        setBestseller("");
        setIngredients("");
        setBenefits("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error(error.response?.data?.message || "Failed to add product");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4 bg-white rounded-lg ml-6 md:ml-12">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Add New Product</h2>

      {/* Image Upload Section */}
      <section className="mb-4">
        <h3 className="mb-2 font-medium text-gray-700 text-sm">Upload Product Images</h3>
        <div className="flex flex-wrap gap-3">
          {[1, 2, 3, 4].map((num) => (
            <label key={num} htmlFor={`image${num}`}>
              <img
                className="w-24 h-24 object-cover rounded-lg"
                src={eval(`image${num}`) ? URL.createObjectURL(eval(`image${num}`)) : assets.upload_area}
                alt={`Upload area for image ${num}`}
              />
              <input
                type="file"
                id={`image${num}`}
                name={`image${num}`}
                className="hidden"
                accept="image/*"
                onChange={(e) => handleImageChange(eval(`setImage${num}`), e)}
                disabled={isLoading}
              />
            </label>
          ))}
        </div>
      </section>

      {/* Product Details Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">
            Product Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name"
            className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs"
            required
            disabled={isLoading}
          />
        </div>

        <div>
          <label htmlFor="category" className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">
            Product Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            id="category"
            name="category"
            className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs"
            required
            disabled={isLoading}
          >
            <option value="">Select category</option>
            <option value="Shampoo">Shampoo</option>
            <option value="Soap">Soap</option>
            <option value="Oil">Oil</option>
            <option value="Cream">Cream</option>
          </select>
        </div>

        <div>
          <label htmlFor="subCategory" className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">
            Product Sub-Category
          </label>
          <select
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            id="subCategory"
            name="subCategory"
            className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs"
            required
            disabled={isLoading}
          >
            <option value="">Select sub-category</option>
            <option value="Haircare">Haircare</option>
            <option value="Skincare">Skincare</option>
            <option value="Moisturizer">Moisturizer</option>
            <option value="Face Care">Face Care</option>
          </select>
        </div>

        <div>
          <label htmlFor="stockStatus" className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">
            Stock Status
          </label>
          <select
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            id="stockStatus"
            name="stockStatus"
            className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs"
            required
            disabled={isLoading}
          >
            <option value="">Select status</option>
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
            <option value="Low Stock">Low Stock</option>
          </select>
        </div>

        <div>
          <label htmlFor="bestseller" className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">
            Bestseller
          </label>
          <select
            value={bestseller}
            onChange={(e) => setBestseller(e.target.value)}
            id="bestseller"
            name="bestseller"
            className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs"
            required
            disabled={isLoading}
          >
            <option value="">Select option</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
      </section>

      {/* Price Section */}
      <section className="mb-4 grid grid-cols-4 gap-4 sm:grid-cols-2">
        {["S", "M", "L", "XL"].map((size) => (
          <div key={size}>
            <label htmlFor={`price${size}`} className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">
              Price ({size})
            </label>
            <input
              id={`price${size}`}
              name={`price${size}`}
              type="number"
              placeholder="0.00"
              step="1"
              min="0"
              value={price[size]}
              onChange={(e) => handlePriceChange(size, e.target.value)}
              className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs"
              disabled={isLoading}
            />
          </div>
        ))}
      </section>

      {/* Ingredients */}
      <section className="mb-4">
        <label htmlFor="ingredients" className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">
          Ingredients (comma separated)
        </label>
        <input
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          id="ingredients"
          name="ingredients"
          type="text"
          placeholder="Enter ingredients (e.g., Biotin, Caffeine, Peppermint Oil)"
          className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs"
          required
          disabled={isLoading}
        />
      </section>

      {/* Benefits */}
      <section className="mb-4">
        <label htmlFor="benefits" className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">
          Benefits (comma separated)
        </label>
        <input
          value={benefits}
          onChange={(e) => setBenefits(e.target.value)}
          id="benefits"
          name="benefits"
          type="text"
          placeholder="Enter benefits (e.g., Adds volume, Reduces thinning)"
          className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs"
          required
          disabled={isLoading}
        />
      </section>

      {/* Description */}
      <section className="mb-4">
        <label htmlFor="description" className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">
          Product Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="description"
          name="description"
          rows={3}
          placeholder="Enter detailed product description"
          className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs"
          required
          disabled={isLoading}
        />
      </section>

      <div className="flex justify-end">
        <button
          type="submit"
          className={`px-5 py-2 font-medium rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors text-sm sm:text-xs ${
            isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Add Product"}
        </button>
      </div>
    </form>
  );
};

export default Add;