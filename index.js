let textbox =document.getElementById("textbox");
textbox.addEventListener('input',function(){
    let text = this.value;
    let char = text.length;
    document.getElementById("char").innerHTML=char;

    text = text.trim();
    let words =text.split(" ");
    let cleanWords =words.filter(function(ele)
    {
        return ele != "";
    });

    document.getElementById("words").innerHTML=cleanWords.length;
    console.log(cleanWords)

});