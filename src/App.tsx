import Navbar from './workshop6/Navbar';
import ProductCard from './workshop6/ProductCard';
const products = [
  {
    id: 1, 
    imageUrl: 'https://images.unsplash.com/photo-1544723795-3fb6469e380e?q=80&w=1974&auto=formhttps://www.google.com/imgres?q=%E0%B8%81%E0%B8%B2%E0%B8%99%E0%B9%89%E0%B8%B3&imgurl=https%3A%2F%2Fwww.jibcha.com%2Fwp-content%2Fuploads%2F2019%2F02%2FMT314-%25E0%25B8%2581%25E0%25B8%25B2%25E0%25B8%2599%25E0%25B9%2589%25E0%25B8%25B3%25E0%25B8%258A%25E0%25B8%25B2%25E0%25B9%2580%25E0%25B8%258B%25E0%25B8%25A3%25E0%25B8%25B2%25E0%25B8%25A1%25E0%25B8%25B4%25E0%25B8%2581-2-324x324.jpg&imgrefurl=https%3A%2F%2Fwww.jibcha.com%2Fproduct%2Fk003-%25E0%25B8%2581%25E0%25B8%25B2%25E0%25B8%2599%25E0%25B9%2589%25E0%25B8%25B3%25E0%25B8%258A%25E0%25B8%25B2%25E0%25B9%2580%25E0%25B8%258B%25E0%25B8%25A3%25E0%25B8%25B2%25E0%25B8%25A1%25E0%25B8%25B4%25E0%25B8%2581-580ml%2F&docid=BZtQRQRphj7WiM&tbnid=yX1_7Z21zPTm0M&vet=12ahUKEwiI5JWe7PCPAxUYS3ADHehtDOsQM3oFCIABEAA..i&w=324&h=324&hcb=2&ved=2ahUKEwiI5JWe7PCPAxUYS3ADHehtDOsQM3oFCIABEAAat&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'สินค้าตัวอย่าง 1',
    description: 'กาน้ำาาาาาาาาาาา',
    price: 29.99,
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1510531704581-5b28709aa698?q=80&w=1974&auhttps://www.google.com/imgres?q=iphone%2017&imgurl=https%3A%2F%2Finstore.studio7thailand.com%2Fwp-content%2Fuploads%2F2025%2F09%2Fiphone-compare-iphone-17-pro-202509.jpg&imgrefurl=https%3A%2F%2Finstore.studio7thailand.com%2Fiphone%2F&docid=rqpM_jCGHFXPhM&tbnid=u2Z7HURRgc8E5M&vet=12ahUKEwjTy9nD7PCPAxXpS2wGHStCIP4QM3oECCAQAA..i&w=400&h=512&hcb=2&ved=2ahUKEwjTy9nD7PCPAxXpS2wGHStCIP4QM3oECCAQAAto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'สินค้าตัวอย่าง 2',
    description: 'IPhone 1777777',
    price: 79.50,
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1587836374929-2878707b9937?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'สินค้าตัวอย่าง 3',
    description: 'logitech',
    price: 33.25,
  },
];

const handleAddToCart = (productId: number) => {
  console.log(`เพิ่มสินค้า ID: ${productId} ลงในรถเข็นแล้ว`);
};

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-4 md:p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-purple-700 dark:text-purple-300">รายการสินค้าของเรา</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                imageUrl={product.imageUrl}
                title={product.title}
                description={product.description}
                price={product.price}
                onAddToCart={() => handleAddToCart(product.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;