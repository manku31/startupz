// const categoryDropdown = document.getElementById("categoryDropdown");
// const subcategoryDropdown = document.getElementById("subcategoryDropdown");

// categoryDropdown.addEventListener("change", function () {
//   const selectedCategory = categoryDropdown.value;
//   console.log("subcategories", selectedCategory);

//   populateSubcategories(selectedCategory);
// });

// function populateSubcategories(category) {
//   // Replace the following lines with your logic to fetch subcategories based on the selected category
//   const subcategories = data[category]; // Assuming data is an object containing the subcategory data
//   console.log("subcategories", subcategories);
//   // Clear the subcategory dropdown
//   subcategoryDropdown.innerHTML =
//     "<option disabled selected>Subcategory</option>";

//   // Populate the subcategory dropdown with options
//   subcategories.forEach(function (subcategory) {
//     const option = document.createElement("option");
//     option.value = subcategory;
//     option.textContent = subcategory;
//     subcategoryDropdown.appendChild(option);
//   });
// }

let subcatageory;

(function data() {
  fetch("/user/dashboad/inventory/ajax")
    .then((response) => response.json())
    .then((subcategories) => {
      // const subcategorySelect = document.getElementById("subcategory");
      // subcategorySelect.innerHTML = '<option value="">Select a subcategory</option>';
      // subcategories.forEach(subcategory => {
      //   const option = document.createElement("option");
      //   option.value = subcategory._id;
      //   option.text = subcategory.name;
      //   subcategorySelect.appendChild(option);
      // });

      subcatageory = subcategories.data;
      
    })
    .catch((error) => {
      console.error(error);
    });
})();

function updateSubcategories() {
  const categorySelect = document.getElementById("category");
  const subcategorySelect = document.getElementById("subcategory");

  // Clear previous subcategories
  subcategorySelect.innerHTML = "";

  // Get the selected category
  const selectedCategory = categorySelect.value;

  // Populate subcategories based on the selected category
  if (selectedCategory in subcatageory) {
    const categorySubcategories = subcatageory[selectedCategory];
    categorySubcategories.forEach(function (subcategory) {
      const option = document.createElement("option");
      option.text = subcategory;
      subcategorySelect.add(option);
    });
  }
}
