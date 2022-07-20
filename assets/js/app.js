document.title = ' Counter Clock App ';


// get elements

const fiverr = document.getElementById('fiverr');
const counter = document.querySelector('.counter');


// fiverr form submit

fiverr.onsubmit = (e) =>{

    e.preventDefault();

    // get form value
    const form_data = new FormData(e.target);

    const { date , time } = Object.fromEntries(form_data.entries());


    let count = setInterval(() =>{

        // get timestamps
    
        let start_time = Date.now();
        let end_time = new Date(date + '  ' + time);
        let order_time = Math.floor(Math.abs(end_time.getTime() - start_time));
    
        
        // get val form times
    
        let total_sec = Math.floor(order_time / 1000);
        let total_minit = Math.floor(total_sec / 60);
        let total_hour = Math.floor(total_minit / 60);
        let total_day = Math.floor(total_hour / 24);
    
    
    
        
        let hours = total_hour - (total_day * 24);
        let minit = total_minit - (total_day * 24 * 60) - (hours * 60);
        let sec = total_sec - (total_day * 24 * 60 * 60) - (hours * 60 * 60) - (minit * 60);
    
    
    
    counter.innerHTML = `<h1>${total_day} Days : ${hours} Hours : ${minit} Minutes : ${sec} Seconds</h1>`;

    if (total_sec <= 0) {

        clearInterval(count);
        
    }


    },1000);




}