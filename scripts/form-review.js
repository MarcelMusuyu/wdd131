const reviewCountElement = document.getElementById("product-review-count");
let reviewCount = localStorage.getItem("reviewCount") || 0; // Get stored review count or initialize to 0

reviewCountElement.textContent = reviewCount;
