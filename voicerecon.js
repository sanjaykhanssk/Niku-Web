function recon(pagename) {
    var sc = 0;
    // $(":focus").each(function() {
    //     alert($(this).attr("id") + " has focus!");
    //   });
    // say a message
    // setInterval(function() { 
        
    //     focused_id = document.querySelector(":focus");
    
    // }, 1000);
    // setInterval(function() { console.log(document.querySelector(":focus")); }, 1000);
    // alert(document.activeElement.id)

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
    function type(text){
        console.log('type called')
        val = document.activeElement.id;
        console.log(val + 'focused');
        inp = document.getElementById(val);
        inp.value += text;
    }

    function clicklocal(query) {
        console.log('click called')
        speak(splited_text[0]+'ing' + splited_text[1])
        func = document.getElementById(splited_text[1])
        func.click();
        func.focus();
        console.log(splited_text[1])
        // alert()
    }

    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = function (e) {
        var textarea = document.getElementById('results');
        for (var i = e.resultIndex; i < e.results.length; ++i) {
                console.log(e.results[i][0].transcript);


            if (e.results[i].isFinal) {
                console.log('voice called')

                result = e.results[i][0].transcript;
                result = result.toLowerCase();
                splited_text = result.split(' ');
                textarea.value += result;
                // speak("moving to " + splited_text);

                //to remove undefiend value splited_text[0]
                if (splited_text[0] == '') {
                    var index = splited_text.indexOf('');
                    if (index !== -1) splited_text.splice(index, 1);
                }
                if (splited_text[0] =='type'){
                    // textarea = document.getElementById(focused_id);
                    // console.log(focused_id)
                    // textarea.value += splited_text;
                    val_splited = splited_text.shift();
                    // val_splited = val_splited.toString();
                    
                    var arr2 = splited_text.join(' ');
                    // val_splited.join("");
                    type(arr2)
                    console.log((arr2))
                }

               if (splited_text[0] == 'homepage') {
                    document.location.href = 'home.html'
                    speak("moving to homepage ")
                }

              if (splited_text[0] == 'click' || splited_text[0] == 'focus' || splited_text[0] == 'press') {
                    clicklocal(splited_text)
                }

            

                if (splited_text[0] == pagename) {
                    speak("you are already in " + pagename)
                }
                
                // if (splited_text[0] == 'turn'){
                //     if (splited_text[1] == 'on')
                //     {
                //         document.getElementById('onoff').checked =true;
                //     }
                //     if (splited_text[1] == 'off' || splited_text[1] == 'of'){
                //         document.getElementById('onoff').checked =false;
                //         console.log('turned off')

                //     }
                //     else{
                //         console.log('turn else is called')
                //     }
                // }
               
                if (splited_text[0] == 'scroll'){
                    if (splited_text[1] == 'down'){
                        sc += 500;
                        window.scrollTo(0, sc);

                    }
                    else if (splited_text[1] == 'up'){
                        sc -= 500;
                        window.scrollTo(0,sc);

                    }
                    else if (splited_text[1] == 'right'){
                        sc += 500;
                        window.scrollTo(sc,0);

                    }
                    else if (splited_text[1] == 'left'){
                        sc -= 500;
                        window.scrollTo(sc,0);

                    }
                    
                    
                       
                   
                }
                if (splited_text[0] == 'read') {
                    var txt = '';
                    if (window.getSelection) {
                        txt = window.getSelection();
                    }
                    else if (document.getSelection) {
                        txt = document.getSelection();
                    }
                    else if (document.selection) {
                        txt = document.selection.createRange().text;
                    }
                    else return;
                    speak(txt);
            
                }

                // console.log(splited_text[0]);                

                else if (splited_text[1] == 'page') {
                    if (splited_text[0] == 'home') {
                        document.location.href = 'home.html';
                        speak("moving to " + splited_text);
                    }
                    if (splited_text[0] == 'about') {
                        document.location.href = 'about.html';
                        speak("moving to " + splited_text);
                    }
                    if (splited_text[0] == 'contact') {
                        document.location.href = 'contact.html';
                        speak("moving to " + splited_text);
                    }
                    if (splited_text[0] == 'profile') {
                        document.location.href = 'profile.html';
                        speak("moving to " + splited_text);
                    }
                    if (splited_text[0] == 'post') {
                        document.location.href = 'post.html';
                        speak("moving to " + splited_text);
                    }
                    
                    

                    // else {
                    //     speak('sorry' + splited_text[0] + 'page not found')
                    // }
                }

            }
        }

    // type(result)
    }


 

    recognition.start();

    var txt = '';
    if (window.getSelection) {
        txt = window.getSelection();
    }
    else if (document.getSelection) {
        txt = document.getSelection();
    }
    else if (document.selection) {
        txt = document.selection.createRange().text;
    }
    else return;
    speak(txt);
   

    

}




    //

    // start listening
