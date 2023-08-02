let notifications = document.getElementById("notifications");
let popup = document.querySelector(".left #notifications .notification-popup");
notifications.addEventListener("click", ()=>{
    if(popup.style.display === "block")
        popup.style.display = "none"
    else 
        popup.style.display = "block"
})