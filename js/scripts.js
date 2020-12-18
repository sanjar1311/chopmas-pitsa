//html dan js ga ozgaruvchilani ovolamiz
var elForm = document.querySelector('.js-form');
var elSelect = elForm.querySelector('.js-select');
var elNonOutput = elForm.querySelector('.js-non-output');
var elKattaligi = elForm.querySelector('.js-kattaligi');
var elKattaligiOutput = elForm.querySelector('.js-kattaligi-output');
var elUstigaOutput = elForm.querySelector('.js-ustiga');
var elToppingOutput = elForm.querySelector('.js-toppinng-output');
var elPizzaToppingElementsList = elForm.querySelector('.js-ustiga-list');

// non turiga array ochamiz
var nonTuri = ['Yupqa', 'Qalin', 'Buxanka'];
//pitsa razmariga array ochamiz
var pizzaSize = [25, 30, 35];
//pitsaning ustiga array ochamiz
var pizzaTopping = [`Pomidor`, `Kurka go'shti`, `Bodring`,`Qo'ziqorin`, `Zaytun`, `Qazi`];
//pitsaning ustiga qo'shiladigan elementlarni htmlga filtrlab chiqarish uchun bo'sh array yaratamiz
var pizzaToppingOrder = [];

// for loop orqali htmlda optionlar yaratamiz va ularga value name atributlarini qo'shamiz
for(let i = 0; i < nonTuri.length; i++) {
  var elOption = document.createElement('option');
  elOption.value = nonTuri[i];
  elOption.textContent = nonTuri[i];
  elSelect.appendChild(elOption);
  //htmlda yaratilgan selectga eventListener qoshamiz
  elSelect.addEventListener('change', function() {
    //agar change bosa selectning valuesini htmlda yaratilgan outputga tenglap qo'yamiz
    elNonOutput.innerHTML = this.value;
  });
}

// for loop blan htmlda pitsa o'lchami nomli arrayimizning uzinligiga teng bolgan label input va span larni yaratamiz
for(let i = 0; i < pizzaSize.length; i++) {
  var radioLabel = document.createElement('label');
  radioLabel.classList.add('radio-label', 'mr-3');
  var radioInput = document.createElement('input');
  radioInput.classList.add('sr-only','radio-input');
  radioInput.type = 'radio';
  radioInput.name = 'radio';
  radioInput.value = pizzaSize[i];
  var radioSpan = document.createElement('span');
  radioSpan.classList.add('radio-btn');
  radioSpan.textContent = `${pizzaSize[i]} cm`;

  //append child yardamida span va inputni labelning ichiga joyladik
  radioLabel.appendChild(radioInput);
  radioLabel.appendChild(radioSpan);
  //labelni htmldagi divga joyladik
  elKattaligi.appendChild(radioLabel);

  //radio inputning o'zgarishiga event listener qo'shdik
  radioInput.addEventListener('change', function() {
    //agar radio input change bo'sa uning valuesni htmlda yaratilgan outputning textcontentiga tenglashtirdik
    elKattaligiOutput.textContent = `${this.value} sm`;
  });
}

//for loop yordamida pitsa ustiga qo'shiladigan elementlarning arrayni uzunligiga teng bolgan checkbox, label va spanlarni yaratib olamiz
for(let i = 0; i < pizzaTopping.length; i++) {
  var elCheckboxLabel = document.createElement('label');
  elCheckboxLabel.classList.add('d-flex','align-items-center','w-50','mb-4');
  var elCheckboxTopping = document.createElement('input');
  elCheckboxTopping.name = pizzaTopping[i];
  elCheckboxTopping.value = pizzaTopping[i];
  elCheckboxTopping.type = 'checkbox';
  elCheckboxTopping.classList.add('checkbox-input','sr-only');
  var elCheckboxBig = document.createElement('span');
  elCheckboxBig.classList.add('checkbox-big');
  var elCheckboxController = document.createElement('span');
  elCheckboxController.classList.add('checkbox-controller');
  elCheckboxController.textContent = pizzaTopping[i];

  elCheckboxLabel.appendChild(elCheckboxTopping);
  elCheckboxLabel.appendChild(elCheckboxBig);
  elCheckboxLabel.appendChild(elCheckboxController);

  elUstigaOutput.appendChild(elCheckboxLabel);

  elCheckboxTopping.addEventListener('click', function () {
    if (pizzaToppingOrder.includes(this.name)) {
      var itemIndex = pizzaToppingOrder.indexOf(this.name);
      pizzaToppingOrder.splice(itemIndex, 1);
    } else {
      pizzaToppingOrder.push(this.name);
    }

    elPizzaToppingElementsList.innerHTML = '';
    for(var i = 0; i < pizzaToppingOrder.length; i++) {

      var toppingItem = document.createElement('li');
      toppingItem.textContent = pizzaToppingOrder[i];
      elPizzaToppingElementsList.appendChild(toppingItem);
    }
  });
}
