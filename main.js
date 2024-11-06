
const categoriesUrl = 'https://dummyjson.com/products/category-list';
const productsUrl = 'https://dummyjson.com/products';


async function getCategories() {
    try {
        const response = await fetch(categoriesUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}

// الدالة لجلب المنتجات
async function getProducts() {
    try {
        const response = await fetch(productsUrl);
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}


async function getProductsByCategories() {
    try {
        const categories = await getCategories();
        const products = await getProducts();


        const categorizedProducts = categories.map(category => ({
            category,
            products: products.filter(product => product.category === category),
        }));

        return categorizedProducts;
    } catch (error) {
        console.error('Error fetching products by categories:', error);
    }
}


getProductsByCategories().then(categorizedProducts => {
    console.log('Products by Category:', categorizedProducts);
});

