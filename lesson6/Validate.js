// регистрация события загрузки документа.
if (window.addEventListener) window.addEventListener("load", init, false);
else if (window.attachEvent) window.attachEvent("onload", init);

// регистрация обработчиков событий элементов формы.
function init() {
    form1.userName.addEventListener('change', function(){
        var pattern = /\S/;
        validate(this, pattern);
    });
    form1.email.addEventListener('change', function(){
        var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
        validate(this, pattern);
    });
    form1.zip.addEventListener('change', function(){
        var pattern = /\d{5}/;
        validate(this, pattern);
    });
    form1.onsubmit = onsubmitHandler;
}

// метод проверки значения в элементе по регулярному выражению.
function validate(elem, pattern) {
    var res = pattern.test(elem.value);
    if (res === false) {
        elem.className = "invalid";
    } // установка CSS класса 
    else {
        elem.className = "valid";
    }
}

// событие при отправке формы на сервер.
function onsubmitHandler(event) {
    for (var i = 0; i < form1.elements.length; ++i) {
        if (form1.elements[i].type === "text" && form1.elements[i].className === "invalid") {
            alert("Допущены ошибки при заполнении формы.");
            event.preventDefault();
            return false;
        }
    }
}