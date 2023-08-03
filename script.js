// SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");

// MESSAGES
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages")
const message = document.querySelectorAll(".message")
const messageSearch = document.querySelector("#message-search")

// THEME
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme")
const fontSizes = document.querySelectorAll(".choose-size span");
let root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose-color span")
const backgrounds = document.querySelectorAll(".background .choose-bg > div")

// ========================= SIDEBAR =========================

// remove active class fromm all menu items
const removeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove("active");
    })
}
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        if (document.querySelector(".notification-popup").style.display == "block") {
            document.querySelector(".notification-popup").style.display = "none"
            return;
        }
        removeActiveItem();
        item.classList.add("active");
        if (item.id != "notifications") {
            document.querySelector(".notification-popup").style.display = "none"
        } else {
            document.querySelector(".notification-popup").style.display = "block"
            document.querySelector("#notifications .notification-count").style.display = "none";
        }
    })
})

// ========================= MESSAGES =========================
// searches chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector("h5").textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            chat.style.display = "flex"
        } else {
            chat.style.display = "none"
        }
    })
}

// search chat
messageSearch.addEventListener("keyup", searchMessage);

// hightlight messages card when mesages menu item is clicked
messagesNotification.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    messagesNotification.querySelector(".notification-count").style.display = "none";
    setTimeout(() => {
        messages.style.boxShadow = "none"
    }, 1500)
})

// ========================= THEME CUSTOMIZATION =========================

// open modal
theme.addEventListener("click", () => {
    themeModal.style.display = "grid";
});

// close modal
themeModal.addEventListener("click", (e) => {
    if (e.target.classList.contains("customize-theme")) {
        themeModal.style.display = "none";
    }
});

// ========================= FONTS =========================
// remove action class from spans or font size selector
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove("active");
    })
}

// change font size
fontSizes.forEach(size => {
    size.addEventListener("click", (e) => {
        let fontSize;
        removeSizeSelector();
        size.classList.add("active");
        if (size.classList.contains("font-size-1")) {
            fontSize = "10px"
            root.style.setProperty("----sticky-top-left", "5.4rem")
            root.style.setProperty("--sticky-top-right", "5.4rem")
        } else if (size.classList.contains("font-size-2")) {
            fontSize = "13px"
            root.style.setProperty("----sticky-top-left", "5.4rem")
            root.style.setProperty("----sticky-top-right", "-7rem")
        } else if (size.classList.contains("font-size-3")) {
            fontSize = "16px"
            root.style.setProperty("----sticky-top-left", "-2rem")
            root.style.setProperty("----sticky-top-right", "-17rem")
        } else if (size.classList.contains("font-size-4")) {
            fontSize = "19px"
            root.style.setProperty("----sticky-top-left", "-5rem")
            root.style.setProperty("----sticky-top-right", "-25rem")
        } else if (size.classList.contains("font-size-5")) {
            fontSize = "22px"
            root.style.setProperty("----sticky-top-left", "-12rem")
            root.style.setProperty("----sticky-top-right", "-35rem")
        }

        // change font size of the root html element
        document.querySelector("html").style.fontSize = fontSize;
    })
})

// ========================= COLORS =========================
// remove active class from colors
const removeColorSelector = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove("active");
    })
}

//  change primary colors
colorPalette.forEach(color => {
    color.addEventListener("click", () => {
        let primaryHue;
        color.classList.add("active");
        removeColorSelector();

        if (color.classList.contains("color-1")) {
            primaryHue = 252;
        } else if (color.classList.contains("color-2")) {
            primaryHue = 52;
        } else if (color.classList.contains("color-3")) {
            primaryHue = 352;
        } else if (color.classList.contains("color-4")) {
            primaryHue = 152;
        } else if (color.classList.contains("color-5")) {
            primaryHue = 202;
        }

        root.style.setProperty("--primary-color-hue", primaryHue);
    })
})

// ========================= THEME BACKGROUND =========================
// theme background values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// change background color
const changeBG = () => {
    root.style.setProperty("--light-color-lightness", lightColorLightness)
    root.style.setProperty("--white-color-lightness", whiteColorLightness)
    root.style.setProperty("--dark-color-lightness", darkColorLightness)
}

// remove active class from background
const removeAllBG = () => {
    backgrounds.forEach((background) => {
        background.classList.remove("active");
    })
}

backgrounds.forEach((background) => {
    background.addEventListener("click", () => {
        if (background.classList.contains("bg-1")) {
            darkColorLightness = "17%"
            whiteColorLightness = "100%"
            lightColorLightness = "95%"
        } else if (background.classList.contains("bg-2")) {
            darkColorLightness = "95%"
            whiteColorLightness = "20%"
            lightColorLightness = "15%"
        } else if (background.classList.contains("bg-3")) {
            darkColorLightness = "95%"
            whiteColorLightness = "10%"
            lightColorLightness = "0%"
        }
        removeAllBG();
        background.classList.add("active");
        changeBG();
    });
})
