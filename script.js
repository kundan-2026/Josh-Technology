document.addEventListener("DOMContentLoaded", function () {
  // Popular Items Data
  const popularItems = [
    {
      name: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "(50-79 min)",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Tandoori Chicken",
      price: "₹184",
      discount: "20% ",
      rating: "4.5",
      time: "(15-20 min)",
      image:
        "https://t4.ftcdn.net/jpg/06/12/03/85/360_F_612038524_JSdZDp3QCWCntBgWTFuli5XtV0JIxZza.jpg",
    },
    {
      name: "Chilli Chicken",
      price: "$15.99",
      discount: "25% ",
      rating: "4.8",
      time: "(35 min)",
      image:
        "https://png.pngtree.com/thumb_back/fw800/background/20240109/pngtree-chilli-chicken-realistic-images-image_15609003.jpg",
    },
    {
      name: "Hawaiian Pizza",
      price: "$14.49",
      discount: "5% ",
      rating: "4.2",
      time: "(25 min)",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Tandoori Chorma",
      price: "₹190",
      discount: "10% ",
      rating: "4.3",
      time: "(20 min)",
      image:
        "https://t4.ftcdn.net/jpg/06/12/03/85/360_F_612038524_JSdZDp3QCWCntBgWTFuli5XtV0JIxZza.jpg",
    },
  ];

  // Home Kitchen Data (updated with ratings and time)
  const homeKitchenItems = [
    {
      name: "Home made pizza",
      price: "₹190",
      discount: "50%",
      rating: "4.2",
      time: "(50-79 min)",
      image:
        "https://i.pinimg.com/736x/b0/ca/32/b0ca32465f36b9b135c021e5f25dc938.jpg",
    },
    {
      name: "Home made pizza",
      price: "₹123",
      rating: "4.0",
      time: "(50-79 min)",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBpenphJTIwcG5nfGVufDB8fDB8fHww",
    },
    {
      name: "Home made pizza",
      price: "₹190",
      discount: "20% ",
      rating: "4.5",
      time: "(50-79 min)",
      image:
        "https://t4.ftcdn.net/jpg/06/07/04/41/360_F_607044129_mlPAREptH5szQjdJ8cku2tC718zawrxu.jpg",
    },
    {
      name: "Home made pizza",
      price: "₹190",
      rating: "4.1",
      time: "(50-79 min)",
      image:
        "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?semt=ais_hybrid&w=740",
    },
    {
      name: "Home made pizza",
      price: "$19",
      discount: "50% ",
      rating: "4.7",
      time: "(50-79 min)",
      image:
        "https://i.pinimg.com/736x/b0/ca/32/b0ca32465f36b9b135c021e5f25dc938.jpg",
    },
    {
      name: "Home made pizza",
      price: "₹190",
      rating: "4.3",
      time: "(50-79 min)",
      image:
        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emElMjBwbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Home made pizza",
      price: "₹190",
      discount: "20%",
      rating: "4.4",
      time: "(50-79 min)",
      image:
        "https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?semt=ais_hybrid&w=740",
    },
    {
      name: "Home made pizza",
      price: "₹190",
      discount: "50%",
      rating: "4.6",
      time: "(50-79 min)",
      image:
        "https://c4.wallpaperflare.com/wallpaper/886/874/504/pizza-cheese-tomatoes-mushrooms-wallpaper-preview.jpg",
    },
    {
      name: "Home made pizza",
      price: "₹190",
      discount: "50%",
      rating: "4.6",
      time: "(50-79 min)",
      image:
        "https://i.pinimg.com/736x/b0/ca/32/b0ca32465f36b9b135c021e5f25dc938.jpg",
    },
  ];

  // Generate Popular Items
  const popularItemsCarousel = document.getElementById(
    "popular-items-carousel"
  );
  popularItems.forEach((item) => {
    popularItemsCarousel.appendChild(createFoodCard(item, true));
  });

  // Generate Home Kitchen Items (now with showMeta set to true)
  const homeKitchenGrid = document.getElementById("home-kitchen-grid");
  homeKitchenItems.forEach((item) => {
    homeKitchenGrid.appendChild(createFoodCard(item, true)); // Changed to true to show meta
  });

  // Function to create food card
  function createFoodCard(item, showMeta) {
    const card = document.createElement("div");
    card.className = "food-card";

    card.innerHTML = `
    <div class="food-image">
      <img src="${item.image}" alt="${item.name}">
      ${item.discount ? `<div class="discount-tag">${item.discount}</div>` : ""}
    </div>
    <div class="food-details">
      <div class="food-title-price">
  <span class="food-name">${item.name}</span>
  <span class="food-price">${item.price}</span> <!-- Fixed line -->
</div>

      ${
        showMeta
          ? `
        <div class="food-meta">
          <div class="rating">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="black" stroke="black" stroke-width="1"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <polygon
                                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                            </polygon>
                                        </svg>
            <span>${item.rating}</span>
          </div>
          <div class="time">${item.time}</div>
          <button class="add-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="12" y1="5" x2="12" y2="19"></line>
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                        </svg>
                                    </button>
        </div>
        `
          : ""
      }
    </div>
  `;

    // Optionally, you can add a click listener to the button
    const addBtn = card.querySelector(".add-btn");
    if (addBtn) {
      addBtn.addEventListener("click", () => {
        alert(`${item.name} added to cart!`);
      });
    }

    return card;
  }

  // Carousel functionality
  const carousel = document.querySelector(".carousel-items");
  const prevBtn = document.querySelector(".carousel-arrow.prev");
  const nextBtn = document.querySelector(".carousel-arrow.next");

  if (!carousel || !prevBtn || !nextBtn) return;

  // Set fixed width for food cards in carousel
  const foodCards = carousel.querySelectorAll(".food-card");
  foodCards.forEach((card) => {
    card.style.minWidth = "300px"; // Fixed width for consistent scrolling
  });

  const scrollAmount = 320; // Card width + gap
  let maxScroll = carousel.scrollWidth - carousel.clientWidth;

  // Update button states
  function updateButtons() {
    prevBtn.disabled = carousel.scrollLeft <= 0;
    nextBtn.disabled = carousel.scrollLeft >= maxScroll;
  }

  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setTimeout(updateButtons, 300); // Update after scroll completes
  });

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    setTimeout(updateButtons, 300);
  });

  // Initialize button states
  updateButtons();

  // Recalculate on window resize
  window.addEventListener("resize", () => {
    maxScroll = carousel.scrollWidth - carousel.clientWidth;
    updateButtons();
  });
});

const requestDishBtn = document.querySelector(".request-dish-btn");
const requestDishModal = document.getElementById("requestDishModal");
const cancelBtn = document.querySelector(".cancel-btn");
const dishRequestForm = document.getElementById("dishRequestForm");

// Open modal when Request Dish button is clicked
requestDishBtn.addEventListener("click", () => {
  requestDishModal.style.display = "flex";
});

// Close modal when Cancel button is clicked
cancelBtn.addEventListener("click", () => {
  requestDishModal.style.display = "none";
});

// Close modal when clicking outside the modal content
requestDishModal.addEventListener("click", (e) => {
  if (e.target === requestDishModal) {
    requestDishModal.style.display = "none";
  }
});

// Handle form submission
dishRequestForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const dishName = document.getElementById("dishName").value;
  const dishImage = document.getElementById("dishImage").value;

  // Here you would typically send this data to your server
  console.log("Dish Request Submitted:", { dishName, dishImage });

  // Show success message
  alert("Your dish request has been submitted successfully. I will notify!");

  // Reset and close the form
  dishRequestForm.reset();
  requestDishModal.style.display = "none";
});
