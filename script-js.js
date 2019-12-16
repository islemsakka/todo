
function item() {

    var inpt = document.querySelector('input').value;
    if (inpt !== "") {
        var maDiv = document.createElement("div");
        //maDiv.setAttribute('id', 'output');
        maDiv.setAttribute('class', 'div');
        var monInput1 = document.createElement("button");
        monInput1.innerHTML = "complete";
        document.body.appendChild(maDiv);
        monInput1.setAttribute('class', 'b1');
        maDiv.appendChild(monInput1);

        var newInput = document.createElement("button");
        newInput.innerHTML = "delete";
        newInput.setAttribute('class', 'b2');
    

        maDiv.appendChild(newInput);

        var textnode = document.createElement("label");
        textnode.setAttribute('class', 'style');
        textnode.innerHTML = inpt;
        maDiv.appendChild(textnode);
        maDiv.appendChild(document.createElement("br"));
        var arr2 = document.getElementsByClassName('div');
        // for (let j of arr) {

        //     j.addEventListener('click', function dele() {
        //         for (let i of arr2) {
        //             if (arr2[i].parentElement) {
        //                 arr2[i].remove();


        //             }
        //         }
        //     });
        // }


        monInput1.addEventListener('click', function undo() {
            document.getElementById("b1").innerHTML = "undo";
            document.getElementById("style").style.textDecorationLine = "line-through";
        });

        supp()

undo()


    }
    else alert("Enter new task");
}
function supp() {
    let tab = document.getElementsByClassName("b2")
    for (let i = 0; i < tab.length; i++) {
           
        tab[i].onclick = function () {
            var div = this.parentElement
            div.style.display='none'
        }
    }

}
function undo(){
    let tab = document.getElementsByClassName("b1")
    for(let i=0;i<tab.length;i++)
    {
        tab[i].onclick=function(){
           tab[i].innerHTML = "undo";
            document.getElementsByClassName("style")[i].style.textDecorationLine = "line-through";
        }
    }
}