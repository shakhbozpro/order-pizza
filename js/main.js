/* Domdagi elementlarni olib kelish */
let elOrderForm = document.querySelector(".order-form");
let userName = elOrderForm.querySelector(".user-name");
let userTelNum = elOrderForm.querySelector(".user-tel-number");
let userAddress = elOrderForm.querySelector(".user-address");
let thicknessSelect = elOrderForm.querySelector(".thickness-select");
let thicknessOption = elOrderForm.querySelector(".thickness-option");
let elPizzaSize = elOrderForm.querySelector(".pizza-size");
let onPizza = elOrderForm.querySelector(".on-pizza");
let addToPizza = elOrderForm.querySelector(".add-to-pizza");
let elDataList = document.querySelector(".data-list");
let dataArray = [];

let price = {
  sm25: {
    sizeName: "25sm",
    price: 10
  },
  sm30: {
    sizeName: "30sm",
    price: 12
  },
  sm35: {
    sizeName: "35sm",
    price: 15
  }
}

/* Formni submit bo'lgan holatini eshitish */
elOrderForm.addEventListener("submit", evt => {
  evt.preventDefault();
  elDataList.innerHTML = null;

  thicknessSelectValue = thicknessSelect;
  let selectPrice = thicknessSelectValue.options[thicknessSelectValue.selectedIndex].dataset.price;

  let pizzaSizeValue = document.querySelector('input[name="pizza_size"]:checked').value;

  let onPizza = document.querySelectorAll('input[name="addings"]:checked');
  let onPizzaArr = [];
  for (const item of onPizza) {
    onPizzaArr.push(item.value);
  };

  let addBox = document.querySelectorAll('input[name="add"]:checked');
  let addBoxArr = [];
  for (const item of addBox) {
    addBoxArr.push(item.value);
  };

  let totalPrice = Number(selectPrice) + Number(price[pizzaSizeValue].price) + Number((onPizzaArr.length * 5)) + Number((addBoxArr.length * 3));

  /* Input valuelarini olib kelish va narx kiritish */
  let userData = {
    id: dataArray.length + 1,
    name: userName.value.trim(),
    phone: Number(userTelNum.value.trim()),
    address: userAddress.value.trim(),
    thickness: thicknessSelect.value,
    pizzaSize: pizzaSizeValue,
    onPizzaa: onPizzaArr.join(", "),
    addBoxInfo: addBoxArr.join(", "),
    price: totalPrice
  };

  console.log(userData);

  dataArray.push(userData);
  elDataList.style.display = "block"
  console.log(dataArray);


  for (const item of dataArray) {

    elDataList.innerHTML += `
      <li class="data-item rounded-3 mb-4 py-4 px-5">
         <h3>Order: ${item.id}</h3>
         <p><strong>Name:</strong> ${item.name}</p>
         <p><strong>Phone:</strong> ${item.phone}</p>
         <p><strong>Address:</strong> ${item.address}</p>

         <hr>

         <p><strong>Dough thickness:</strong> ${item.thickness}</p>
         <p><strong>Size:</strong>  ${price[`${item.pizzaSize}`].sizeName}</p>
         <p class="text-capitalize"><strong>On pizza:</strong> ${item.onPizzaa}</p>
         <p><strong>Add:</strong> ${item.addBoxInfo}</p>

         <hr>

         <strong class"d-block ms-auto">Total: ${item.price}$</strong>
       </li>
      `;
  }
});