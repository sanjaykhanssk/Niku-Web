function btnclicked(){

    function speak(text, callback) {
        console.log('speak called:' + text);
        var u = new SpeechSynthesisUtterance();
        u.text = text;
        u.lang = 'en-US';
        
        u.onend = function () {
            if (callback) {

                callback();
            }
        };

        u.onerror = function (e) {
            if (callback) {
                callback(e);
                
            }
        };
        
        speechSynthesis.speak(u);
    }

    var name = document.getElementById('name').value;
    message =document.getElementById('message');


    speak('thanks for your message ' + name);
    alert('thanks for your message ' + name);

    name.value ='';
    message.value ='';


    
}