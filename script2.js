function fun1() {
var chbox;
chbox=document.getElementById('one');
	if (chbox.checked) {
		alert('Заказ отправлен! Скоро с Вами свяжутся) Спасибо, что выбраете ArtShop!');
	}
	else {
		alert ('Мы не можем принять Ваш заказ. Пожалуйста, подтвердите указанные Вами данные!');
	}
}
