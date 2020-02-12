(function menuControl() {
  function toggleMenu() {
    const menuLeft = document.querySelector(".m-l");
    const paragraphs = menuLeft.getElementsByTagName("p");
    let elArr = [
      document.querySelector(".shape"),
      document.querySelector(".text"),
      document.querySelector(".image"),
      document.querySelector(".background")
    ];

    menuLeft.addEventListener("click", function(e) {
      if (!e.target.classList.contains("m-l")) {
        let selectedMenu = e.target.innerHTML.toLowerCase();
        let menuClass = document.querySelector("." + selectedMenu);
        elArr.forEach(function(item) {
          item.classList.add("invisible");
        });
        for (i = 0; i < paragraphs.length; i++) {
          paragraphs[i].classList.remove("btn-clicked");
        }
        e.target.classList.add("btn-clicked");
        menuClass.classList.remove("invisible");
      }
    });

    const btnToggle = document.querySelector(".m-toggle");
    const menu = document.querySelector(".m");
    let toggled = true;

    btnToggle.addEventListener("click", function() {
      if (toggled) {
        menu.classList.add("menu-hide");
        btnToggle.firstChild.classList.remove("lefty");
        toggled = false;
      } else {
        menu.classList.remove("menu-hide");
        btnToggle.firstChild.classList.add("lefty");
        toggled = true;
      }
    });

    const headerToggle = document.querySelector(".fa-sort-down");
    const header = document.querySelector(".header");
    const nav = document.querySelector(".project-nav");
    const navItems = document.querySelector(".nav__items");

    headerToggle.addEventListener("click", function() {
      header.classList.add("toggled");
      nav.classList.add("toggled");
      navItems.classList.add("toggled");
      //headerToggle.classList.add("toggled");
    });
  }
  toggleMenu();
})();

///////////////////
//create
(function() {
  const workArea = document.querySelector(".work-area");
  const divCreate = document.querySelector(".div-options");
  const createText = document.querySelector(".create-new-text");
  const apiImagesWrapper = document.querySelector(".api-images-wrapper");

  let click = 1;

  divCreate.addEventListener("mouseup", createNewObject);
  createText.addEventListener("click", createNewObject);
  apiImagesWrapper.addEventListener("click", createNewObject);

  function createNewObject(e) {
    click++;
    var create = e.target;

    if (create.className !== "create-indicator") {
      //div append
      var div = document.createElement("div");
      div.className = "div" + click;
      workArea.appendChild(div);

      //get style of selected shape
      //lines
      const lineWrapper = document.querySelector(".div-line-wrapper");

      if (e.target.parentNode.className == "div-shapes-container") {
        var computedStyle = window.getComputedStyle(create);
        Array.from(computedStyle).forEach(function(key) {
          return div.style.setProperty(
            key,
            computedStyle.getPropertyValue(key),
            computedStyle.getPropertyPriority(key)
          );
        });
      }

      div.style.position = "absolute";
      div.style.top = "150px";
      div.style.left = "450px";

      //div style config menu
      var config = document.createElement("div");
      config.className = click;
      config.classList.add("config-btn");
      config.classList.add("invisible");

      //div delete btn
      var deleteBtn = document.createElement("div");
      deleteBtn.className = "delete-btn";
      deleteBtn.classList.add("invisible");

      //resizers
      var resizerSe = document.createElement("div");
      resizerSe.className = "resizerSe";

      var resizerE = document.createElement("div");
      resizerE.className = "resizerEast";

      var resizerS = document.createElement("div");
      resizerS.className = "resizerSouth";

      if (div != undefined) {
        div.appendChild(config);
        div.appendChild(deleteBtn);
        div.appendChild(resizerSe);
        div.appendChild(resizerE);
        div.appendChild(resizerS);
      }

      //delete div

      deleteBtn.addEventListener("click", function() {
        const delQ = document.querySelector(".deleteQuestion");
        const delYes = document.querySelector(".delYes");
        const delNo = document.querySelector(".delNo");
        delQ.classList.remove("invisible");

        delNo.addEventListener("click", function() {
          delQ.classList.add("invisible");
        });

        delYes.addEventListener("click", function() {
          delQ.classList.add("invisible");
          workArea.removeChild(div);
        });
      });

      //hide/show del and menu btn on hover
      div.addEventListener("mouseenter", function() {
        this.children[0].classList.remove("invisible");
        this.children[1].classList.remove("invisible");
      });

      div.addEventListener("mouseleave", function() {
        this.children[0].classList.add("invisible");
        this.children[1].classList.add("invisible");
      });

      ///////////////////
      //shape config

      config.addEventListener("click", updateShape);
      let styleApply = document.querySelectorAll(".style-apply");
      const shapeConfig = document.querySelector(".object-menu");

      function updateShape(e) {
        let configBtnClassName = this.classList[0];
        shapeConfig.classList.remove("invisible");

        currentlyStyling = document.querySelector(".div" + configBtnClassName);
        console.log(currentlyStyling);

        let fillCheckbox = document.querySelector(".fill-chbox");
        let borderCheckbox = document.querySelector(".border-chbox");
        let fillColorInput = document.querySelector(".shape-color-input");
        let borderColorInput = document.querySelector(".border-color-input");
        let shapeBorderWidth = document.querySelector(
          ".shape-border-width-input"
        );
        let borderRadius1 = document.querySelector(".border-radius1");
        let borderRadius2 = document.querySelector(".border-radius2");
        let borderRadius3 = document.querySelector(".border-radius3");
        let borderRadius4 = document.querySelector(".border-radius4");
        let shapeShadowX = document.querySelector(".shape-shadow-x");
        let shapeShadowY = document.querySelector(".shape-shadow-y");
        let shapeShadowB = document.querySelector(".shape-shadow-b");

        styleApply.forEach(function(style) {
          style.addEventListener("change", function() {
            console.log(style.value);
            console.log(fillColorInput.value);
            currentlyStyling.style.backgroundColor = fillColorInput.value;
            console.log(currentlyStyling);
          });
        });

        ////////
        // Pododawać img krawędzi na border radiusie
        // dac wyższy z-index klikniętego elementu zeby byl na górze.

        //bg, border

        //console.log(borderType);
      }

      //////////////////
      //text create
      if (create == createText) {
        const textInput = document.querySelector(".text-input");
        div.classList.add("text-style");
        let currentTextDiv;
        let innerText = document.createElement("div");
        div.classList.add("border");

        div.addEventListener("click", function(e) {
          currentlyWritting = this;

          //show/hide border
          workArea.addEventListener("click", function(e) {
            if (e.target != div) {
              if (e.target != div.children[5]) {
                currentlyWritting.classList.remove("border");
              }

              currentlyWritting.classList.remove("border");
            } else {
              currentlyWritting.classList.add("border");
            }
          });

          //input from innerText to textInput
          if (currentlyWritting.children[5].innerHTML != "") {
            textInput.value = currentlyWritting.children[5].innerHTML;
          }

          //text input
          textInput.addEventListener("keyup", function() {
            currentlyWritting.children[5].innerHTML = textInput.value;
          });

          //font size
          const fontSizeInput = document.querySelector(".font-size-input");
          fontSizeInput.addEventListener("change", function() {
            currentlyWritting.children[5].style.fontSize =
              fontSizeInput.value + "px";
          });

          //font family
          const selectFont = document.querySelector(".select-font");
          selectFont.addEventListener("change", function() {
            currentlyWritting.style.fontFamily = selectFont.value;
          });

          //text background
          const bgColorInput = document.querySelector(
            ".background-color-input"
          );
          bgColorInput.addEventListener("keyup", function() {
            currentlyWritting.style.background = bgColorInput.value;
            let bgSample = document.querySelector(".background-preview");

            bgSample.style.background = bgColorInput.value;
          });
        });

        if (currentTextDiv !== undefined) {
          currentTextDiv.appendChild(innerText);
        } else {
          div.appendChild(innerText);
        }
      }

      if (create.classList.contains("api-img")) {
        let imgSrc = e.target.getAttribute("src");
        console.log(imgSrc);

        div.style.backgroundImage = "url('" + imgSrc + "')";
        div.style.backgroundRepeat = "no-repeat";
        div.style.backgroundSize = "cover";
        div.style.backgroundPosition = "center center";
        div.style.height = "300px";
        div.style.width = "300px";
        console.log(div);
        workArea.appendChild(div);
      }

      ///////////////////////
      //Resizable div
      let isResizing = false;

      function resizableDiv() {
        resizerSe.addEventListener("mousedown", initDrag, false);
        resizerS.addEventListener("mousedown", initDrag, false);
        resizerE.addEventListener("mousedown", initDrag, false);

        let className;
        resizerS.addEventListener("mousedown", function() {
          className = "resizerS";
        });

        resizerE.addEventListener("mousedown", function() {
          className = "resizerE";
        });

        resizerSe.addEventListener("mousedown", function() {
          className = "resizerSe";
        });

        function initDrag(e) {
          startX = e.clientX;
          startY = e.clientY;

          startWidth = parseInt(
            document.defaultView.getComputedStyle(div).width,
            10
          );

          startHeight = parseInt(
            document.defaultView.getComputedStyle(div).height,
            10
          );
          document.documentElement.addEventListener("mousemove", doDrag, false);
          document.documentElement.addEventListener("mouseup", stopDrag, false);
        }

        function doDrag(e) {
          isResizing = true;
          if (className == "resizerSe") {
            div.style.width = startWidth + e.clientX - startX + "px";
            div.style.height = startHeight + e.clientY - startY + "px";
          } else if (className == "resizerE") {
            div.style.width = startWidth + e.clientX - startX + "px";
          } else if (className == "resizerS") {
            div.style.height = startHeight + e.clientY - startY + "px";
          }
        }

        function stopDrag(e) {
          document.documentElement.removeEventListener(
            "mousemove",
            doDrag,
            false
          );
          document.documentElement.removeEventListener(
            "mouseup",
            stopDrag,
            false
          );
        }

        resizerSe.addEventListener("mouseup", stopResizing);
        resizerE.addEventListener("mouseup", stopResizing);
        resizerS.addEventListener("mouseup", stopResizing);

        function stopResizing() {
          isResizing = false;
        }
      }

      resizableDiv();

      /////////////////////
      //moving div with mouse
      const leftMenu = document.querySelector(".m");

      //restriction config
      let isOut = false;
      let OutDirection = 0;

      function moveDiv() {
        let mousePosition;
        let offset = [0, 0];
        let isDown = false;

        div.addEventListener(
          "mousedown",
          function(e) {
            isDown = true;
            offset = [div.offsetLeft - e.clientX, div.offsetTop - e.clientY];
            isOut = false;
            OutDirection = 0;

            leftMenu.children[0].classList.add("invisible");
            leftMenu.children[1].classList.add("invisible");
          },
          true
        );

        div.addEventListener(
          "mouseup",
          function() {
            isDown = false;

            leftMenu.children[0].classList.remove("invisible");
            leftMenu.children[1].classList.remove("invisible");
          },
          true
        );

        workArea.addEventListener(
          "mousemove",
          function(event) {
            //resitrict moving div outside workarea

            function restric() {
              var rectWorkArea = workArea.getBoundingClientRect();
              var rectDiv = div.getBoundingClientRect();

              if (OutDirection == "w") {
                div.style.left = rectWorkArea.left + "px";
              } else if (OutDirection == "e") {
                div.style.left = 1679 - div.offsetWidth + "px";
              } else if (OutDirection == "n") {
                div.style.top = rectWorkArea.top + "px";
              } else if (OutDirection == "s") {
                div.style.top =
                  rectWorkArea.bottom - div.offsetHeight - 1 + "px";
                OutDirection = 0;
              }

              if (rectDiv.left <= rectWorkArea.left - 1) {
                isOut = true;
                OutDirection = "w";
              } else if (rectDiv.right >= rectWorkArea.right) {
                isOut = true;
                OutDirection = "e";
              } else if (rectDiv.top <= rectWorkArea.top - 1) {
                isOut = true;
                OutDirection = "n";
              } else if (rectDiv.bottom >= rectWorkArea.bottom) {
                isOut = true;
                OutDirection = "s";
              }
            }
            restric();

            event.preventDefault();
            if (isDown) {
              if (!isResizing) {
                if (!isOut) {
                  mousePosition = {
                    x: event.clientX,
                    y: event.clientY
                  };
                  div.style.left = mousePosition.x + offset[0] + "px";
                  div.style.top = mousePosition.y + offset[1] + "px";
                }
              }
            }
          },
          true
        );
      }
      moveDiv();
    }
  }
})();

////////////////////
//TODO

// - text create
// - text append do diva jeśli został tam upuszczony ??
// - menu right clickiem na diva?
// - może jakies template typy - header, right menu , content
// - pokazywanie który div jest teraz konfigurowany przez menu z prawej
// - wincyj opcji!
// - konsola css - pokazuje style wybranego elementu i mozna za jej pomoca edytowac element
// - rotate
// - dodawanie img z linku

//////////////////
// BUGI
// - show/hide border na tekscie nie działa poprawie jesli kliknie sie na text
// - blokada wychodzenia za ekran buguje sie przy scrollu - naprawic

/*
//shape config
      const shapeConfig = document.querySelector(".object-menu");
      let borderType;

      config.addEventListener("click", updateShape);

      function updateShape(e) {
        let currentlyStyling;
        currentlyStylingObject = false;

        currentlyStylingObject = e.target.parentNode.className;
        currentlyStyling = document.querySelector("." + currentlyStylingObject);

        console.log(currentlyStyling);
        //zobaczyc czy to array, wybrac 1szy el

        shapeConfig.classList.remove("invisible");
        let styleApply = document.querySelectorAll(".style-apply");

        let rand = Math.floor(Math.random() * 100000) + 200000;
        console.log(currentlyStyling.style.backgroundColor);

        currentlyStyling.style.backgroundColor = "#" + rand;

        for (let i = 0; i < styleApply.length; i++) {
          styleApply[i].addEventListener("change", function() {
            const fillCheckbox = document.querySelector(".fill-chbox");
            const borderCheckbox = document.querySelector(".border-chbox");
            const fillColorInput = document.querySelector(".shape-color-input")
              .value;
            const borderColorInput = document.querySelector(
              ".border-color-input"
            ).value;
            const shapeBorderWidth = document.querySelector(
              ".shape-border-width-input"
            ).value;
            const borderRadius1 = document.querySelector(".border-radius1")
              .value;
            const borderRadius2 = document.querySelector(".border-radius2")
              .value;
            const borderRadius3 = document.querySelector(".border-radius3")
              .value;
            const borderRadius4 = document.querySelector(".border-radius4")
              .value;

            const shapeShadowX = document.querySelector(".shape-shadow-x")
              .value;
            const shapeShadowY = document.querySelector(".shape-shadow-y")
              .value;
            const shapeShadowB = document.querySelector(".shape-shadow-b")
              .value;

            ////////
            // Pododawać img krawędzi na border radiusie

            //console.log(fillCheckbox.checked);

            //bg, border

            //console.log(borderType);

            /*
            if (fillCheckbox.checked) {
              currentlyStyling.style.backgroundColor = fillColorInput;
            } else {
              currentlyStyling.style.backgroundColor = "transparent";
            }
*/
/*
if (borderCheckbox.checked) {
  currentlyStyling.style.border =
    borderType +
    " " +
    borderColorInput +
    " " +
    shapeBorderWidth +
    "px";
} else {
  currentlyStyling.style.border = "none";
}

currentlyStyling.style.borderRadius = `${borderRadius1}px ${borderRadius2}px ${borderRadius3}px ${borderRadius4}px`;

setStyle(fillColorInput);
});
}

function setStyle(fillColorInput) {
currentlyStyling.style.backgroundColor = fillColorInput;
}
}
const borderStyleWrapper = document.querySelectorAll(".brdr");

borderStyleWrapper.forEach(function(border) {
//console.log(border);
border.addEventListener("click", function() {
borderType = this.classList[0];
updateShape();
});
});
*/
