document.addEventListener('DOMContentLoaded', function() {
    const emojis = ['😇', '😇', '😷', '😷', '🤬', '🤬', '🥶', '🥶', '🤑', '🤑', '😲', '😲', '😍', '😍', '🤗', '🤗', '🫥', '🫥', '😶‍🌫️', '😶‍🌫️', '😴', '😴', '😒', '😒', '🤪', '🤪', '🤡', '🤡', '😈', '😈', '💩', '💩', '😹', '😹', '😻', '😻'];

    const shuf_emoj = emojis.sort(() => Math.random() - 0.5);

    let error_score = 0;
    let match_score = 0;
    let combo = 0;
    let lastest =[];
    let skill_num = 0;
    let count_for_skill = 0;

    
    for (let i = 0; i < emojis.length; i++) {
     
        
        
        
        let box = document.createElement('div');
        box.className = 'item';
        box.innerHTML = shuf_emoj[i];

        box.onclick = function () {
            this.classList.add('boxOpen');

            lastest.push(this);

            if (lastest.length > 2) {
                lastest.shift();
            }
        
            // Extract the emoji characters from the lastest array and join them
            const emojiString = lastest.map(box => box.innerHTML).join(' ');
            
            // Set the joined emoji string as innerHTML
            document.getElementById('last').innerHTML = emojiString;
        
            setTimeout(function () {
                // Rest of your code...
            }, 500)

            setTimeout(function () {


                if (document.querySelectorAll('.boxOpen').length > 1) {
                    if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {
                        document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                        document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');
                        document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                        document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');

                        match_score+=1;
                        document.getElementById('match').innerHTML = match_score;

                        combo+=1;
                        document.getElementById('combo').innerHTML = combo;

                        if (document.querySelectorAll('.boxMatch').length == emojis.length) {
                            alert('Win !!!!!');
                        }

                    } else {

                        document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                        document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');

                        error_score+=1;
                        count_for_skill+=1;
                        document.getElementById('error').innerHTML = error_score;

                        combo=0;
                        document.getElementById('combo').innerHTML = combo;


                    }
                    if(count_for_skill>=3 || combo >=1){
                        count_for_skill =0;
                        
                        skill_num+=1;
                        document.getElementById('skill').innerHTML = skill_num;
            
                    }

                }

            }, 500)
        }

        document.querySelector('.game').appendChild(box);
    }
});
