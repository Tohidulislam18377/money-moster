const allInputFelidValue =(inputFelidId)=>{
    const inputFieldElement = document.getElementById(inputFelidId);
    const inputFieldElementString = inputFieldElement.value;
    const inputFieldValue = parseFloat(inputFieldElementString);
    return inputFieldValue;
}