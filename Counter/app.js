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
            value.style.color = "#50F283";
        } else if (count < 0) {
            value.style.color = "#F25551";
        } else {
            value.style.color = "#241722";
        }
        value.textContent = count;
    })
})