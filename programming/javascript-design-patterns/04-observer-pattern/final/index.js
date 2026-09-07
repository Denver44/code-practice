import observable from './observable.js';
import './analytics.js';

function onCheckoutClick(data) {
  observable.notify(data);
}

function onWishlistClick(data) {
  observable.notify(data);
}

onCheckoutClick('checkout-button-clicked');
onWishlistClick('wishlist-button-clicked');
