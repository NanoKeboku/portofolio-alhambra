let toggle = document.querySelector(".left-side.active");
let btnPhone = document.querySelector(".phone");
let btnDesktop = document.querySelector(".desktop");
let act = toggle.addEventListener("click", function () {
  let tambah = document.querySelector(".left-nav");
  tambah.classList.toggle("open");
  toggle.classList.toggle("fix");
});

const text = document.querySelector(".secText");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = ` Web Dev `;
  }, 0);
  setTimeout(() => {
    text.textContent = ` Designer`;
  }, 4100);
  setTimeout(() => {
    text.textContent = ` UI/UX Designer`;
  }, 8100);
};

textLoad();
setInterval(textLoad, 12000);

const mode = document.getElementById("mode");
btnDesktop.addEventListener("click", lightMode());
function lightMode() {
  const blue = document.querySelectorAll("blue");
  const black = document.querySelectorAll(".black");
  const light = document.querySelectorAll(".light");

  blue.forEach((y) => {
    y.classList.toggle("blue-active");
  });

  light.forEach((x) => {
    x.classList.toggle("check");

    if (x.classList.contains("check")) {
      black.forEach((a) => {
        a.classList.add("black-active");
      });
      btnDesktop.innerHTML = `<img src="./ICON/dark.png" alt="lightMode" />`;
      btnPhone.innerHTML = `<img src="./ICON/dark.png" alt="lightMode" />`;
    } else {
      black.forEach((a) => {
        a.classList.remove("black-active");
      });
      btnDesktop.innerHTML = `<img src="./ICON/light.png" alt="lightMode" />`;
      btnPhone.innerHTML = `<img src="./ICON/light.png" alt="lightMode" />`;
    }
  });
}

lightMode();

// ================= JQUERY===============
$(document).ready(function () {
  $(".my-design").hide();
  let btnActive = document.querySelector(".project-btn");
  $(".project-btn").click(function () {
    $(".my-projects").show();
    $(".my-design").hide();
    // $(".project-btn").append(btnActive);
    btnActive.classList("btn-nav-active");
  });
  $(".design-btn").click(function () {
    $(".my-projects").hide();
    $(".my-design").show();
    // $(".design-btn").append(btnActive);
    btnActive.classList.add("btn-nav-active");
  });
});
