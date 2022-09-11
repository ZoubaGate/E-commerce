const plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    num = document.querySelector(".num");
    let a = 1;
    
    plus.addEventListener("click", ()=>{
      a++;
      a = (a < 10) ? "0" + a : a;
      if(a>20){
        alert("impossible de depasser 20 commande");
        a=20;
      }
      num.innerText = a;

    });

    minus.addEventListener("click", ()=>{
      if(a > 1){
        a--;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
      }
    });


    /********debut boutton validate**********/
    let btn = document.querySelector(".button"),
                spinIcon = document.querySelector(".spinner"),
                btnText = document.querySelector(".btn-text");

            btn.addEventListener("click", () => {
                btn.style.cursor = "wait";
                btn.classList.add("checked");
                spinIcon.classList.add("spin");
                btnText.textContent = "Loading";

            setTimeout(() => {
                btn.style.pointerEvents = "none";
                spinIcon.classList.replace("spinner", "check");
                spinIcon.classList.replace("fa-circle-notch", "fa-check");
                btnText.textContent = "Done";

            }, 4000) //1s = 1000ms
            });
    /********fin boutton validate**********/
