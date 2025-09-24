import React from 'react';

interface ProductCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  description,
  price,
  onAddToCart,
}) => {
  return (
    <div className="flex flex-col w-80 md:w-96 p-4 rounded-md shadow-md bg-white">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-auto object-cover aspect-video rounded-md mb-4"
      />
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
        <p className="text-lg font-semibold text-blue-600 mb-4">${price.toFixed(2)}</p>
      </div>
      <button
        onClick={onAddToCart}
        className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;