import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails'; // We'll create this component next
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import ProductModal from './components/ProductModal';
import SortByPrice from './components/SortByPrice';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('products.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);

        // Get unique categories
        const allCategories = data.map(product => product.category);
        const uniqueCategories = [...new Set(allCategories)];
        setCategories(uniqueCategories);
      })
      .catch(error => console.error('Error loading products:', error));
  }, []);

  const handleSearch = (searchTerm) => {
    const searchResults = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(searchResults);
  };

  const handleCategoryFilter = (category) => {
    if (category === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const handleSort = (order) => {
    if (order === 'none') {
      // If "None" is selected, keep the products in their original order
      setFilteredProducts(products); // Reset to the original unsorted list
      return;
    }

    if (!order) {
      return;  // Don't apply any sorting if "Select" is chosen
    }

    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setFilteredProducts(sortedProducts);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <Router>
      <div className="App">
        <h1>Product Catalog</h1>
        <SearchBar onSearch={handleSearch} />
        <CategoryFilter categories={categories} onFilter={handleCategoryFilter} />
        <SortByPrice onSort={handleSort} />
        
        {/* Product List Page Route */}
        <Routes>
          <Route 
            path="/" 
            element={<ProductList products={filteredProducts} onProductClick={handleProductClick} />} 
          />
          {/* Product Details Page Route */}
          <Route 
            path="/product/:id" 
            element={<ProductDetails products={products} />} 
          />
        </Routes>

        {/* Display the modal when a product is selected */}
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      </div>
    </Router>
  );
};

export default App;

