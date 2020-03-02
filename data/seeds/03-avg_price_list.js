
exports.seed = function(knex) {
  return knex('avg_price_list').del()
    .then(function () {
      return knex('avg_price_list').insert([
        {id: 1,product_cat: 'Anamal Products', sub_category: 'Eggs',product: 'Eggs', avg_price: 4},
        {id: 2,product_cat: 'Anamal Products', sub_category: 'Eggs',product: 'Exotic Eggs', avg_price: 6},
        {id: 3,product_cat: 'Anamal Products', sub_category: 'Livestock',product: 'Goat Meat', avg_price: 150},
        {id: 4,product_cat: 'Cereals - Maize', sub_category: 'Maize',product: 'Dry Maize', avg_price:2},
        {id: 5,product_cat: 'Cereals - Maize', sub_category: 'Maize',product: 'Maize Bran', avg_price: 3},
        {id: 6,product_cat: 'Cereals - Other', sub_category: 'Millet',product: 'Bulrush Millet', avg_price: 4},
        {id: 7,product_cat: 'Cereals - Other', sub_category: 'Sorghum',product: 'Sorghum Flour', avg_price: 5},
        {id: 8,product_cat: 'Cereals - Rice', sub_category: 'Rice',product: 'Kahama Rice', avg_price: 1},
        {id: 9,product_cat: 'Fruits', sub_category: 'Bananas',product: 'Cavendish (Bogoya)', avg_price:2},
        {id: 10,product_cat: 'Fruits', sub_category: 'Mangoes',product: 'Mangoes Local', avg_price:4},
        {id: 11,product_cat: 'Vegitable', sub_category: 'Onions',product: 'Onions Dry', avg_price:5},
        {id: 12,product_cat: 'Vegetables', sub_category: 'Onions',product: 'Spring Onions', avg_price:10},
      ]);
    });
};