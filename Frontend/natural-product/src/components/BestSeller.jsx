import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products, currency } = useSelector((state) => state.shop);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products
      .filter((item) => item.bestseller === true)
      .slice(0, 5);
    setBestSeller(
      bestProduct.map((product) => ({
        ...product,
        sizes: product.sizes || Object.keys(product.price || {}),
      }))
    );
  }, [products]);

  const formatPriceWithCurrency = (price, sizes, currency) => {
    if (!price || typeof price !== "object") {
      console.warn("Invalid price format in BestSeller:", price);
      return { S: { display: `${currency}0.00`, value: 0 } };
    }

    const formattedPrice = {};
    const conversionRate = currency === "PKR" ? 278 : 1; // Hypothetical rate: 1 USD = 278 PKR
    sizes.forEach((size) => {
      if (price[size]) {
        const baseValue = Number(price[size].value || price[size].display || 0);
        const convertedValue = baseValue * conversionRate;
        formattedPrice[size] = {
          display: `${currency}${convertedValue.toFixed(2)}`,
          value: baseValue,
        };
      }
    });

    return formattedPrice;
  };

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1="BEST" text2="SELLING" />
        <p className="w-3/4 m-auto text-sm sm:text-sm md:text-base text-gray-500">
          🔥 Shop our most-loved products – these top picks are flying off the
          shelves! Discover what everyone’s raving about, <br />
          from trending styles to must-have essentials.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => {
          const formattedPrice = formatPriceWithCurrency(
            item.price,
            item.sizes,
            currency
          );
          return (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={formattedPrice}
              sizes={item.sizes}
              displaySize={item.sizes[0] || "S"}
              currency={currency}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BestSeller;
