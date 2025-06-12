
export const loadState = () => {
  try {
    const savedCart = localStorage.getItem('cart') || [];
    if (savedCart === null) {
      return undefined
    }
    return JSON.parse(savedCart);
  }catch (error) {
    console.error("Error loading state from localStorage:", error);
    return undefined;
  }
}

export const saveState = (cart) => {
  try {
    const savedCart = JSON.stringify(cart); 
    localStorage.setItem("cart", savedCart);
  } catch (error) {
    console.error("an error occurred while saving state to localStorage:", error);
  }
}

export const updateCartItemQuantity = (cart, itemId, delta) => {
  return cart?.map(item => {
    if (item?.id === itemId) {
      const newQuantity = item?.quantity + delta;

      // Prevent negative quantities — set to 0 minimum
      return {
        ...item,
        quantity: newQuantity > 0 ? newQuantity : 0
      };
    }
    return item;
  });
}