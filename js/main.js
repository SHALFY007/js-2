const goods = [
{ title: 'Shirt', price: 150 },
{ title: 'Socks', price: 50 },
{ title: 'Jacket', price: 350 },
{ title: 'Shoes', price: 250 },
];
const renderGoodsItem = (title='Good', price='100') => {
    return `<div class="good-card">
                   <h3 class="good-card-header">${title}</h3>
                   <p class="good-card-price">${price}</p>
                   <a href="#" class="good-card-button">Purchase</a>
               </div>`;
};
const renderGoodsList = (list = []) => {
let goodsList = list.map(item => renderGoodsItem(item.title, item.price)).join('');
    document.querySelector('.goods-list').innerHTML = goodsList;
}
renderGoodsList(goods);
