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