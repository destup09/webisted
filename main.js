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
  let createText = document.querySelectorAll(".text-create");
  const apiImagesWrapper = document.querySelector(".api-images-wrapper");

  let click = 1;
  let currentZIndex = 1;

  divCreate.addEventListener("mouseup", createNewObject);
  createText.forEach(function(txt) {
    txt.addEventListener("click", createNewObject);
  });
  apiImagesWrapper.addEventListener("click", createNewObject);

  function createNewObject(e) {
    click++;
    var create = e.target;

    if (create.className !== "create-indicator") {
      //div append

      var divParent = document.createElement("div");
      divParent.className = "divParent" + click;
      let div;

      if (create.className == "text-create") {
        div = document.createElement(e.target.tagName);
      } else {
        div = document.createElement("div");
      }

      divParent.appendChild(div);

      div.className = "div" + click;
      workArea.appendChild(divParent);

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

      //console.log(divParent.style.width);

      div.style.margin = "0 auto";
      divParent.style.top = "150px";
      divParent.style.left = "900px";

      //div style config menu
      var config = document.createElement("div");
      config.className = click;
      config.classList.add("config-btn");
      config.style.display = "none";

      const menuIcon = document.createElement("i");
      menuIcon.className = "fas fa-bars";
      config.appendChild(menuIcon);

      //div delete btn
      var deleteBtn = document.createElement("div");
      deleteBtn.className = "delete-btn";
      deleteBtn.style.display = "none";

      const delIcon = document.createElement("i");
      delIcon.className = "fas fa-times";
      deleteBtn.appendChild(delIcon);

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
      resizersArr.forEach(function(res) {
        res.style.display = "none";
      });

      workArea.addEventListener("click", function(e) {
        let parent = divParent;
        let isChild = 0;

        parent.childNodes.forEach(function(child) {
          if (e.target == child) {
            isChild++;
          }

          if (isChild == 1 || e.target == menuIcon) {
            parent.style.border = "1px solid #2872c7";
            for (i = 1; i <= parent.childNodes.length - 1; i++) {
              parent.children[i].style.display = "";
            }
          } else if (isChild == 0) {
            parent.style.border = "none";
            for (i = 1; i <= parent.childNodes.length - 1; i++) {
              parent.children[i].style.display = "none";
            }
          }
        });
      });

      /*
      config.addEventListener("click", function(e) {
        document.querySelector(".object-menu").classList.remove("invisible");
      });
      */

      if (create.className == "text-create") {
        textCreate();
      }

      ///////////////////
      //SHAPE CONFIG

      console.log("e");
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
        console.log("s");
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
      function textCreate() {
        divParent.style.height = "40px";
        divParent.style.width = "200px";
        div.innerText = e.target.innerText;
        div.style.fontFamily = e.target.style.fontFamily;

        let currentText;

        div.addEventListener("dblclick", function() {
          this.setAttribute("contenteditable", "true");
          currentText = this;
          console.log(currentText);
        });

        workArea.addEventListener("click", function(e) {
          if (e.target !== currentText || e.target !== currentText.parentNode) {
            div.setAttribute("contenteditable", "false");
            console.log("s");
          }
        });
      }

      /////////////
      //IMG CREATE

      if (create.classList.contains("api-img")) {
        let imgSrc = e.target.getAttribute("src");
        let imgHeight = e.target.getAttribute("height");
        let imgWidth = e.target.style.width;
        console.log(e.target.getComputedStyle);

        imgCreateIndicator = divParent;
        divParent.style.backgroundImage = "url('" + imgSrc + "')";
        divParent.style.backgroundRepeat = "no-repeat";
        divParent.style.backgroundSize = "cover";
        divParent.style.backgroundPosition = "center center";
        divParent.style.height = "300px";
        divParent.style.width = "300px";
      }

      ///////////////////////
      //Resizable div

      let elArr = [];
      let el;
      //console.log(el);
      const resizer = document.querySelectorAll(".resizer");

      resizer.forEach(function(thisresizer) {
        thisresizer.addEventListener("mousedown", function() {
          elArr.unshift(this.parentNode);
          el = elArr[0];
          console.log(el);
          elCounter();
        });
      });

      let counter;
      function elCounter() {
        counter++;
        console.log(counter);
      }

      let isResizing = false;

      const resizers = divParent.querySelectorAll(".resizer");
      let currentResizer;

      for (let resizer of resizers) {
        resizer.addEventListener("mousedown", mousedown);

        function mousedown(e) {
          currentResizer = e.target;
          isResizing = true;

          //console.log(el);

          let prevX = e.clientX;
          let prevY = e.clientY;

          window.addEventListener("mousemove", mousemove);
          window.addEventListener("mouseup", mouseup);

          function mousemove(e) {
            const rect = el.getBoundingClientRect();

            if (currentResizer.classList.contains("resizerSE")) {
              el.style.width = rect.width - (prevX - e.clientX) + "px";
              el.style.height = rect.height - (prevY - e.clientY) + "px";
            } else if (currentResizer.classList.contains("resizerSW")) {
              el.style.width = rect.width + (prevX - e.clientX) + "px";
              el.style.height = rect.height - (prevY - e.clientY) + "px";
              el.style.left = rect.left - (prevX - e.clientX) + "px";
            } else if (currentResizer.classList.contains("resizerNE")) {
              el.style.width = rect.width - (prevX - e.clientX) + "px";
              el.style.height = rect.height + (prevY - e.clientY) + "px";
              el.style.top = rect.top - (prevY - e.clientY) + "px";
            } else if (currentResizer.classList.contains("resizerNW")) {
              el.style.width = rect.width + (prevX - e.clientX) + "px";
              el.style.height = rect.height + (prevY - e.clientY) + "px";
              el.style.top = rect.top - (prevY - e.clientY) + "px";
              el.style.left = rect.left - (prevX - e.clientX) + "px";
            } else if (currentResizer.classList.contains("resizerN")) {
              el.style.height = rect.height + (prevY - e.clientY) + "px";
              el.style.top = rect.top - (prevY - e.clientY) + "px";
            } else if (currentResizer.classList.contains("resizerE")) {
              el.style.width = rect.width - (prevX - e.clientX) + "px";
            } else if (currentResizer.classList.contains("resizerS")) {
              el.style.height = rect.height - (prevY - e.clientY) + "px";
            } else if (currentResizer.classList.contains("resizerW")) {
              el.style.width = rect.width + (prevX - e.clientX) + "px";
              el.style.left = rect.left - (prevX - e.clientX) + "px";
            }

            el.children[0].style.width = el.style.width;
            el.children[0].style.height = el.style.height;

            //console.log("prevX: " + prevX + " prevY: " + prevY);
            //console.log(divParent.style);
            prevX = e.clientX;
            prevY = e.clientY;
          }

          function mouseup() {
            window.removeEventListener("mousemove", mousemove);
            window.removeEventListener("mouseup", mouseup);
            isResizing = false;
          }
        }
      }

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

      const menuTop = document.querySelector(".top");
      dragElement(document.querySelector(".object-menu"));

      menuTop.style.cursor = "move";

      function dragElement(elmnt) {
        var pos1 = 0,
          pos2 = 0,
          pos3 = 0,
          pos4 = 0;
        if (menuTop) {
          // if present, the header is where you move the DIV from:
          menuTop.onmousedown = dragMouseDown;
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
      ////////////
      // LOCAL STORAGE
      /*
      saveBtn = document.querySelector(".save-project");
      saveBtn.addEventListener("click", function() {
        let myObj = JSON.stringify(divParent);
        localStorage.setItem("divParent", myObj);
        console.log(localStorage);
      });
      */
    }
  }
})();

////////////////////
//     TODO
// - może jakies template typy - header, right menu , content
// - pokazywanie który div jest teraz konfigurowany przez menu z prawej
// - wincyj opcji!
// - konsola css - pokazuje style wybranego elementu i mozna za jej pomoca edytowac element
// - rotate
// - dodawanie img z linku
// - ogarnąć aspect ratio wstawianych zdj

// - ogarnąć kropki do skalowania - ustawienie i dac je z kazdej strony
// - zrobic kształty tak samo jak tekst. główny div i do niego append kształtu
// - ogarnąć placement resizerów oraz menu i del buttonów po powiekszeniu bordera

// !!! // - ogarnąć poruszanie diva myszką, podpiąć divy i menu config pod 1 skrypt

//////////////////
// BUGI
// - show/hide border na tekscie nie działa poprawie jesli kliknie sie na text
// - szybkie poruszanie resizerem powoduje zatrzymanie powiekszania, nie mozna poruszac divem
//    dopóki nie kliknie sie znowu na resizera

/*
.create-new-text {
  background: none;
  width: 120px;
  height: 40px;
  border: 1px solid $secondary-color;
  font-family: "Roboto";
  font-size: 18px;
  transition: background-color 0.5s ease-in-out;
  margin: 20px auto 20px auto;
  text-align: center;
  display: block;

  &:hover {
    background: #f2f2f2;
  }
}

.text-input-wrapper {
  color: $secondary-color;
  margin: 10px auto 20px auto;
  width: 500px;
  height: 130px;

  .text-input {
    resize: none;
    width: 500px;
    height: 130px;
  }
}

.wrap-options,
.color-options-wrapper {
  margin: 0 auto;
  width: 380px;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
}

.font-size-wrapper,
.font-family-wrapper,
.font-color-wrapper,
.background-color-wrapper {
  width: 150px;
  height: 100px;
  margin-top: 10px;
  margin-left: 10px;
}

.color-options-wrapper {
  display: flex;
}

.background-color-wrapper {
  margin-top: -11px;
}

.color-preview,
.background-preview {
  width: 25px;
  height: 25px;
  margin: 8px auto 0 auto;
  border: 1px solid #e2e2e2;
}

.font-size-input,
.select-font {
  margin-top: 5px;
}

.select-font {
  width: 140px;
}

.wrap-options {
  display: flex;
}
*/
