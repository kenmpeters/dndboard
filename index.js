for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        switch (this.innerHTML) {
            case "Laugh":
                let wAudio = new Audio('sounds/laugh.mp3');
                wAudio.play();
                break;
            
            case "blank":
                let aAudio = new Audio('sounds/fart.mp3');
                aAudio.play();
                break;
        
            default:
                break;
        }
    })
};

// const tom1 = new Audio('sounds/tom-1.mp3');
// new Audio('sounds/tom-1.mp3').play();