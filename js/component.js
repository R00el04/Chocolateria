// component.js
new Vue({
    el: '#app',
    data: {
        products: [],
        selectedCategories: [],
    },
    computed: {
        uniqueCategories() {
            return [...new Set(this.products.map(product => product.category))];
        },
        filteredProducts() {
            if (this.selectedCategories.length === 0) {
                return this.products;
            } else {
                return this.products.filter(product => this.selectedCategories.includes(product.category));
            }
        }
    },
    methods: {
        handleCategoryChange() {
            console.log('Categorías seleccionadas:', this.selectedCategories);
        },
        fetchData() {
            // Simulando la obtención de datos desde un archivo JSON local
            fetch('products.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    this.products = data;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },
    },
    mounted() {
        this.fetchData();
    }
});
