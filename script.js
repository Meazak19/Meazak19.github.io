document.getElementById("userInput").focus();
let btn = document.getElementById('addButton');
btn.addEventListener('click', function () {
    let ip = document.getElementById('userInput').value;
    let items = document.getElementById('addedItems');


    let delBtn = document.createElement('button');
    delBtn.append('Delete');
    delBtn.setAttribute('class', "delete");


    let compBtn = document.createElement('button');
    compBtn.append('Done');
    compBtn.setAttribute('class', "complete");


    let list = document.createElement('li');
    list.innerText = ip;

    // let delelm = document.getElementById('delete');
    // delelm.classList.add('delop');


    // compBtn.addEventListener('click', function () {
    //     compBtn.classList.add('completed');
    //     compBtn.classList.remove('complete');
    //     compBtn.classList.toggle('over');
    // });


    if (ip === "") {
        alert("Please enter any items to add");
    } else {
        if (confirm("Entered Task is : "+ip)) {
            addedItems.append(list);
            list.append(delBtn);
            list.append(compBtn);}
            delBtn.addEventListener('click',function() {
                if(confirm("Are You Sure To Delete")){
                    this.parentNode.remove();
                }
                
            });
            compBtn.addEventListener('click',function() {
            this.parentNode.classList.toggle('over');
            // this.parentNode.style.background = "green";
            });
            // let mk = document.querySelector('.over');
            // mk.addEventListener(function() {
            // this.parentNode.style.background = "green";
    
            // });
        
        }
        
    document.getElementById("userInput").focus();

    resetForm();
    event.preventDefault();

});


function resetForm() {
    document.getElementById('shoping').reset();
}