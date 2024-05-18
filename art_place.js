function calculateTotalPrice(quantity = 2,price = 15000000){
    const totalPrice = quantity * price;
    const formattedTotalPrice = totalPrice.toLocaleString('ru-RU' , {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0
    })
    //alert(`Стоимость покупки: ${formattedTotalPrice}`);
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Стоимость покупки: ${formattedTotalPrice}`;
    resultDiv.style.display = 'block';
}
    