document.getElementById('btn-calculate').addEventListener('click', function(){
   const inputFieldIncome = allInputFelidValue('input-income');

   const inputFieldFood = allInputFelidValue('food-input')
   
   const inputFieldRent = allInputFelidValue('input-rent');

   const inputFieldClothes =allInputFelidValue('input-clothe');

   const totalExpensesAdded = inputFieldFood + inputFieldRent + inputFieldClothes;
  const totalExpenses = inputFieldIncome - totalExpensesAdded;

   const totalExpensesElement = document.getElementById('total-expenses');
   totalExpensesElement.innerText = totalExpensesAdded;

   const totalBalanceElement = document.getElementById('balance');
   totalBalanceElement.innerText = totalExpenses;
})

document.getElementById('btn-saving').addEventListener('click', function(){
   const savingInputFelid = allInputFelidValue('saving-input');

   const totalIncomeInput =allInputFelidValue('input-income');
   
   const initialAmount = savingInputFelid * 0.05;
   const totalSavingAmount = initialAmount + totalIncomeInput;
   const totalSavingAmountTofixed = totalSavingAmount.toFixed(2);
   const totalSavingAmountTofixedValue = parseFloat(totalSavingAmountTofixed)


   const savingAmountElement = document.getElementById('saving-amount');
   savingAmountElement.innerText = totalSavingAmountTofixedValue;

   const remainingAmount = document.getElementById('remaining-amount');
   remainingAmount.innerText = totalIncomeInput;
})