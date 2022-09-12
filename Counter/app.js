let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function(item){
    item.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')) {
            count--;
        } else if(styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "DarkGreen";
        } else if (count < 0) {
            value.style.color = "DarkRed";
        } else {
            value.style.color = "Black";
        }
        value.textContent = count;
    })
})