
var quotes = [
    [
        "Благородные люди, друг друга любя,      \
        Видят горе других, забывают себя.        \
        Если чести и блеска зеркал ты желаешь, — \
        Не завидуй другим, — и возлюбят тебя.",

        "Омар Хайям"
    ],

    [
        "Добродетель мудрецов напоминает собой путешествие в дальннюю страну \
        и восхождение на вершину: идущие                                     \
        в дальнюю страну начинают свой путь с первого шага;                  \
        восходящие на вершину начинают с подножия горы.",

        "Конфуций"
    ],

    [
        "Если вы хотите успеха, а готовитесь к поражению, то вы получите как раз то, к чему готовитесь.",

        "Флоренс Шин"
    ],

    [
        "Мы – рабы своих привычек. измени свои привычки, изменится твоя жизнь.",

        "Роберт Кийосаки"
    ]
];

document.getElementById("next-quote").addEventListener("click", function() {
    
   
    var quote = quotes[ Math.floor( Math.random() * quotes.length ) ];  
    var phrase = document.querySelector("#phrase");  
    var author = document.querySelector("#author");

    phrase.innerHTML = quote[0];
    author.innerHTML = quote[1]; 
    
});