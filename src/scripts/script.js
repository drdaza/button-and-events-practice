function modification(){
    var LikeButton = document.getElementById("#like-button");
    LikeButton.style.color="gray";
}
function load(){
    let LikeButton = document.getElementById("like-button");
    LikeButton.addEventListener("click", modification, false);
}
document.addEventListener("DOMContentLoaded",load,false);