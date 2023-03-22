
    let images = document.querySelectorAll(".box");

    for (let i = 0; i < images.length; i++) {
        let coun = i;
        images[i].style.left = `${coun * 100}%`;
    }

    let count = 0;

    function imageslider() {
        for (let i = 0; i < images.length; i++) {
            images[i].style.transform = `translateX(-${count * 100}%)`;

        }

        if (count == 3) {

            count=-1;
        }
        else if(count==0){
            count+0
        }
        
    }

    function nex() {
        count++;
        imageslider()
    }

    function pre() {
        count--;
        imageslider()
    }

        setInterval(()=>{
            count++
            imageslider()
         
     }, 10000);