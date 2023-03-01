const menuEmail = document.querySelector(".navbar-email");
const menuCarrito = document.querySelector(".product-detail");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carritoIcon = document.querySelector(".navbar-shopping-cart");



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

    if(!isMenuEmailClosed ) {
        menuEmail.classList.add('inactive')
    }
    
    
    mobileMenu.classList.toggle('inactive');
    

}
