// Başlangıç ürünleri
let products = [
    {name: 'Su', price: 10, image: 'https://via.placeholder.com/200x150?text=Su'},
    {name: 'Çay', price: 20, image: 'https://via.placeholder.com/200x150?text=Çay'},
    {name: 'Kahve', price: 80, image: 'https://via.placeholder.com/200x150?text=Kahve'},
    {name: 'Meyveli Soda', price: 40, image: 'https://via.placeholder.com/200x150?text=Meyveli+Soda'}
];

// Menü render fonksiyonu
function renderMenu() {
    const menuDiv = document.getElementById('menu');
    menuDiv.innerHTML = '';
    products.forEach((p, index) => {
        const div = document.createElement('div');
        div.className = 'menu-item';
        div.innerHTML = `
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>${p.price} TL</p>
            <button onclick="removeProduct(${index})">Sil</button>
        `;
        menuDiv.appendChild(div);
    });
}

// Ürün ekleme fonksiyonu
function addProduct() {
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const image = document.getElementById('productImage').value;
    if(name && price && image){
        products.push({name, price, image});
        renderMenu();
        document.getElementById('productName').value = '';
        document.getElementById('productPrice').value = '';
        document.getElementById('productImage').value = '';
    } else {
        alert('Lütfen tüm alanları doldurun!');
    }
}

// Ürün silme fonksiyonu
function removeProduct(index) {
    products.splice(index, 1);
    renderMenu();
}

// İlk render
renderMenu();