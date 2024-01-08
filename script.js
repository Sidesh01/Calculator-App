(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.clear');

    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            if (value === '=') {
                try {
                    screen.value = eval(screen.value);
                } catch (error) {
                    screen.value = 'Error';
                }
            } else if (value === 'C') {
                screen.value = '';
            } else {
                screen.value += value;
            }
        })
    });

    equal.addEventListener('click',function(e){
        try {
            screen.value = eval(screen.value);
        } catch (error) {
            screen.value = 'Error';
        }
    });

    clear.addEventListener('click',function(e){
        screen.value = '';
    });
})();
