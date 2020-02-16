(function menuControl() {
  function toggleMenu() {
    const menuLeft = document.querySelector(".m-l");
    const menuRight = document.querySelector(".m-r");
    const paragraphs = menuLeft.getElementsByTagName("p");
    let elArr = [
      document.querySelector(".shape"),
      document.querySelector(".text"),
      document.querySelector(".image"),
      document.querySelector(".background")
    ];
    menuRight.style.display = "none";

    menuLeft.addEventListener("click", function(e) {
      if (!e.target.classList.contains("m-l")) {
        menuRight.style.display = "";
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
  let currentZIndex = 1;

  divCreate.addEventListener("mouseup", createNewObject);
  createText.addEventListener("click", createNewObject);
  apiImagesWrapper.addEventListener("click", createNewObject);

  function createNewObject(e) {
    click++;
    var create = e.target;

    if (create.className !== "create-indicator") {
      //div append
      var divParent = document.createElement("div");
      divParent.className = "divParent" + click;

      var div = document.createElement("div");
      divParent.appendChild(div);

      div.className = "div" + click;
      workArea.appendChild(divParent);

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
      div.style.zIndex = 1;

      divParent.style.position = "absolute";
      divParent.style.width = div.style.width;
      divParent.style.height = div.style.height;
      divParent.style.left = div.getBoundingClientRect().left + "px";
      divParent.style.top = div.getBoundingClientRect().top + "px";

      div.style.margin = "0 auto";
      divParent.style.top = "150px";
      divParent.style.left = "900px";

      //div style config menu
      var config = document.createElement("div");
      config.className = click;
      config.classList.add("config-btn");
      config.style.display = "none";

      //div delete btn
      var deleteBtn = document.createElement("div");
      deleteBtn.className = "delete-btn";
      deleteBtn.style.display = "none";

      //resizers
      var resizerNE = document.createElement("div");
      resizerNE.className = "resizerNE";
      resizerNE.classList.add("resizer");

      var resizerSE = document.createElement("div");
      resizerSE.className = "resizerSE";
      resizerSE.classList.add("resizer");

      var resizerSW = document.createElement("div");
      resizerSW.className = "resizerSW";
      resizerSW.classList.add("resizer");

      var resizerNW = document.createElement("div");
      resizerNW.className = "resizerNW";
      resizerNW.classList.add("resizer");

      var resizerN = document.createElement("div");
      resizerN.className = "resizerN";
      resizerN.classList.add("resizer");

      var resizerE = document.createElement("div");
      resizerE.className = "resizerE";
      resizerE.classList.add("resizer");

      var resizerS = document.createElement("div");
      resizerS.className = "resizerS";
      resizerS.classList.add("resizer");

      var resizerW = document.createElement("div");
      resizerW.className = "resizerW";
      resizerW.classList.add("resizer");

      //tutaj zmienic na div parenta \/

      if (divParent != undefined) {
        divParent.appendChild(config);
        divParent.appendChild(deleteBtn);
        divParent.appendChild(resizerNE);
        divParent.appendChild(resizerSE);
        divParent.appendChild(resizerSW);
        divParent.appendChild(resizerNW);
        divParent.appendChild(resizerN);
        divParent.appendChild(resizerE);
        divParent.appendChild(resizerS);
        divParent.appendChild(resizerW);
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
      let resizersArr = document.querySelectorAll(".resizer");
      console.log(resizersArr);
      resizersArr.forEach(function(res) {
        res.style.display = "none";
      });

      divParent.addEventListener("mouseenter", function() {
        let parent = this;
        parent.style.border = "1px solid #11a7e6";
        console.log(parent.childNodes);
        for (i = 1; i <= parent.childNodes.length - 1; i++) {
          parent.children[i].style.display = "";
        }
      });

      divParent.addEventListener("mouseleave", function() {
        let parent = this;
        parent.style.border = "none";
        console.log(parent.childNodes);
        for (i = 1; i <= parent.childNodes.length - 1; i++) {
          parent.children[i].style.display = "none";
        }
      });

      ///////////////////
      //SHAPE CONFIG

      config.addEventListener("click", updateShape);
      let styleApply = document.querySelectorAll(".style-apply");
      const shapeConfig = document.querySelector(".object-menu");
      let imgCreateIndicator;

      if (e.target.className == "api-img") {
        imgCreateIndicator = e.target;
      } else {
        imgCreateIndicator = undefined;
      }

      //opacity
      const shapeOpacityRange = document.querySelector(".opacity-input");
      const shapeOpacityNum = document.querySelector(".opacity-input-num");
      document
        .querySelectorAll(".style-apply-opacity")
        .forEach(function(opacity) {
          opacity.addEventListener("input", function(e) {
            if (e.target == shapeOpacityRange) {
              shapeOpacityNum.value = shapeOpacityRange.value;
            } else {
              shapeOpacityRange.value = shapeOpacityNum.value;
            }
            currentlyStyling.style.opacity = shapeOpacityRange.value / 100;
          });
        });

      function updateShape() {
        let configBtnClassName = this.classList[0];

        shapeConfig.classList.remove("invisible");

        if (imgCreateIndicator != undefined) {
          currentlyStyling = imgCreateIndicator;
        } else {
          currentlyStyling = document.querySelector(
            ".div" + configBtnClassName
          );
        }

        let divRect = currentlyStyling.getBoundingClientRect().right;
        shapeConfig.style.left = divRect + 25 + "px";

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
        let shapeShadowVertical = document.querySelector(".shape-shadow-v");
        let shapeShadowHorizontal = document.querySelector(".shape-shadow-h");
        let shapeShadowBlur = document.querySelector(".shape-shadow-b");
        let shapeShadowSpread = document.querySelector(".shape-shadow-s");
        let shadowColorinput = document.querySelector(".shadow-color-input");
        let shadowChbox = document.querySelector(".shadow-chbox");

        styleApply.forEach(function(style) {
          style.addEventListener("input", function() {
            //bg
            if (fillCheckbox.checked) {
              currentlyStyling.style.backgroundColor = fillColorInput.value;
            } else {
              currentlyStyling.style.backgroundColor = "transparent";
            }

            //border
            if (borderCheckbox.checked) {
              currentlyStyling.style.border =
                "solid" +
                " " +
                borderColorInput.value +
                " " +
                shapeBorderWidth.value +
                "px";
            } else {
              currentlyStyling.style.borderColor = "transparent";
            }

            //border radius
            currentlyStyling.style.borderRadius = `${borderRadius1.value}px ${borderRadius2.value}px ${borderRadius3.value}px ${borderRadius4.value}px`;

            //shadow
            let shadowInset;
            if (shadowChbox.checked) {
              shadowInset = " inset";
            } else {
              shadowInset = "";
            }

            currentlyStyling.style.boxShadow =
              shapeShadowHorizontal.value +
              "px " +
              shapeShadowVertical.value +
              "px " +
              shapeShadowBlur.value +
              "px " +
              shapeShadowSpread.value +
              "px " +
              shadowColorinput.value +
              shadowInset;
          });
        });
        ////////
        // Pododawać img krawędzi na border radiusie
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

      /////////////
      //IMG CREATE

      if (create.classList.contains("api-img")) {
        let imgSrc = e.target.getAttribute("src");
        console.log(imgSrc);

        imgCreateIndicator = divParent;
        divParent.style.backgroundImage = "url('" + imgSrc + "')";
        divParent.style.backgroundRepeat = "no-repeat";
        divParent.style.backgroundSize = "cover";
        divParent.style.backgroundPosition = "center center";
        divParent.style.height = "300px";
        divParent.style.width = "300px";

        console.log(div);
      }

      ///////////////////////
      //Resizable div

      let isResizing = false;
      //dac foreach na diva i parent diva

      let divChild = divParent.children[0];

      objArr = [divChild, divParent];
      objArr.forEach(function(obj) {
        function resizableDiv() {
          resizerSE.addEventListener("mousedown", initDrag, false);
          resizerS.addEventListener("mousedown", initDrag, false);
          resizerNE.addEventListener("mousedown", initDrag, false);

          let className;
          resizerS.addEventListener("mousedown", function() {
            className = "resizerS";
          });

          resizerNE.addEventListener("mousedown", function() {
            className = "resizerE";
          });

          resizerSE.addEventListener("mousedown", function() {
            className = "resizerSe";
          });

          function initDrag(e) {
            startX = e.clientX;
            startY = e.clientY;

            startWidth = parseInt(
              document.defaultView.getComputedStyle(obj).width,
              10
            );

            startHeight = parseInt(
              document.defaultView.getComputedStyle(obj).height,
              10
            );
            document.documentElement.addEventListener(
              "mousemove",
              doDrag,
              false
            );
            document.documentElement.addEventListener(
              "mouseup",
              stopDrag,
              false
            );
          }

          function doDrag(e) {
            isResizing = true;
            if (className == "resizerSe") {
              obj.style.width = startWidth + e.clientX - startX + "px";
              obj.style.height = startHeight + e.clientY - startY + "px";
            } else if (className == "resizerE") {
              obj.style.width = startWidth + e.clientX - startX + "px";
            } else if (className == "resizerS") {
              obj.style.height = startHeight + e.clientY - startY + "px";
            }
          }

          function stopDrag() {
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

          resizerSE.addEventListener("mouseup", stopResizing);
          resizerNE.addEventListener("mouseup", stopResizing);
          resizerS.addEventListener("mouseup", stopResizing);

          function stopResizing() {
            isResizing = false;
          }
        }

        resizableDiv();
      });

      /////////////////////
      //moving div with mouse
      let moveTarget = divParent;

      div.style.cursor = "move";

      const leftMenu = document.querySelector(".m");

      function moveDiv() {
        let mousePosition;
        let offset = [0, 0];
        let isDown = false;

        div.onmousedown = function() {
          currentZIndex++;
          this.style.zIndex = currentZIndex;
        };

        moveTarget.addEventListener(
          "mousedown",
          function(e) {
            isDown = true;
            offset = [
              moveTarget.offsetLeft - e.clientX,
              moveTarget.offsetTop - e.clientY
            ];

            //currentZIndex ++;

            leftMenu.children[0].classList.add("invisible");
            leftMenu.children[1].classList.add("invisible");
          },
          true
        );

        moveTarget.addEventListener(
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

            event.preventDefault();
            if (isDown) {
              if (!isResizing) {
                mousePosition = {
                  x: event.clientX,
                  y: event.clientY
                };
                moveTarget.style.left = mousePosition.x + offset[0] + "px";
                moveTarget.style.top = mousePosition.y + offset[1] + "px";
              }
            }
          },
          true
        );
      }
      moveDiv();

      dragElement(document.querySelector(".object-menu"));
      const menuTop = document.querySelector(".top");
      menuTop.style.cursor = "move";

      function dragElement(elmnt) {
        var pos1 = 0,
          pos2 = 0,
          pos3 = 0,
          pos4 = 0;
        if (document.querySelector(".top")) {
          // if present, the header is where you move the DIV from:
          document.querySelector(".top").onmousedown = dragMouseDown;
        } else {
          // otherwise, move the DIV from anywhere inside the DIV:
          elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          elmnt.style.top = elmnt.offsetTop - pos2 + "px";
          elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
        }

        function closeDragElement() {
          // stop moving when mouse button is released:
          document.onmouseup = null;
          document.onmousemove = null;
        }
      }
    }
  }
})();

////////////////////
//TODO
// - może jakies template typy - header, right menu , content
// - pokazywanie który div jest teraz konfigurowany przez menu z prawej
// - wincyj opcji!
// - konsola css - pokazuje style wybranego elementu i mozna za jej pomoca edytowac element
// - rotate
// - dodawanie img z linku

// - ogarnąć kropki do skalowania - ustawienie i dac je z kazdej strony
// - zrobic kształty tak samo jak tekst. główny div i do niego append kształtu
// - ogarnąć placement resizerów oraz menu i del buttonów po powiekszeniu bordera

//////////////////
// BUGI
// - show/hide border na tekscie nie działa poprawie jesli kliknie sie na text

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
