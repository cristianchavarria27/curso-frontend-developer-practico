const menuEmail = document.querySelector(".navbar-email");
const menuCarrito = document.querySelector("#shoppingCardContainer");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carritoIcon = document.querySelector(".navbar-shopping-cart");
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener("click", toggleDesktopMenu);
carritoIcon.addEventListener("click", toggleMenuCarrito);
burguerIcon.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
    const isMenuCarritoClosed = menuCarrito.classList.contains('inactive');

    if(!isMenuCarritoClosed ) {
        menuCarrito.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMenuCarrito() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')


    if(!isMobileMenuClosed ) {
        mobileMenu.classList.add('inactive')
    } else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }

    menuCarrito.classList.toggle('inactive');
    

}

function toggleMobileMenu() {
    const isMenuCarritoClosed = menuCarrito.classList.contains('inactive');
    
    if(!isMenuCarritoClosed ) {
        menuCarrito.classList.add('inactive')
    }

    // if(!isMenuEmailClosed ) {
    //     menuEmail.classList.add('inactive')
    // }
    
    
    mobileMenu.classList.toggle('inactive');
    

}

const productList = [];
productList.push(
    {
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
    {
    name: 'Bike2',
    price: 140,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
    {
    name: 'Bike3',
    price: 160,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
);


function renderProducts(arr) {

    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p');
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgFigure = document.createElement('img');
        productImgFigure.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgFigure);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard)
    }
    
}
renderProducts(productList)

