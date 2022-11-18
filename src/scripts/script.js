function modification(){
    var LikeButton = document.getElementById("like-button");
    var aux= LikeButton.style.color;
    if(aux=="")
    {
        console.log("activo");
        LikeButton.style.color= "brown";
        LikeButton.style.transition="all 0.5s"
    }
    else if(aux=="brown")
    {
        console.log("dislike");
        LikeButton.style.color= "gray";
    }
    else if(aux=="gray")
    {
        console.log("like")
        LikeButton.style.color="brown";
    }
}

function load() {
        let LikeButton = document.getElementById("like-button");
        console.log("entra");
        LikeButton.addEventListener("click", modification, false);

}
document.addEventListener("DOMContentLoaded",load,false);
/* How print text in a div when clicked an object
* i create an array with the sentences that the 
program will print.
* i accessed at the container of objects (for id)
* i accessed at the childs of the container
* (when i click any of childs i targeted it its id )
* i create and assing an array of the sentences
* i check the id of the child
* i accessed at the space from i will print the info
* print the info  
*/
function testEvents(){
    let list = document.getElementById("first");
    list.addEventListener("click", (e)=> {
        let idElement=e.target.id
        if(e.target.classList!=""){
            let sentences = createSentences();
            console.log(sentences);
            checkId(idElement,sentences);
    }
    })
    /* list.childNodes.forEach((element) => {
        element.addEventListener("click", (e)=>{
            e.target.classList.toggle("activo");
        })
    }); */
    
}
function checkId(param, array){
    console.log(param);
    console.log(array);
    let view= array[param-1];
    printResult(view);
    /* array.forEach(element => {
        console.log(element.index);
        if(param==element){
            console.log(param);
            printResult(element);
        }
    }); */
}
function printResult(param2){
    let acces= document.getElementById("text");
    acces.innerHTML = `<h1>${param2}</h1>`
}
function createSentences(){
    const sentences = ["kirk", "james", "lee", "ulsrich"];
    return sentences;
}
testEvents();