function ApiFetch() {
  let input = document.querySelector(".img-input");
  let btn = document.querySelector(".img-btn");

  btn.addEventListener("click", function (e) {
    let imagesWrapper = document.querySelector(".api-images-wrapper");

    let clientId =
      "f788ce0e3b30d533187f4df1b211e03282fd10964a4fe9396bc36ddcbf7e9f8a";
    let query = input.value;

    if (imagesWrapper.lastElementChild) {
      let child = imagesWrapper.lastElementChild;
      while (child) {
        imagesWrapper.removeChild(child);
        child = imagesWrapper.lastElementChild;
      }
    }

    let url =
      "https://api.unsplash.com/search/photos?page=1&per_page=16&query=" +
      query +
      "&client_id=" +
      clientId;

    console.log(url);

    fetch(url)
      .then(function (data) {
        return data.json();
      })
      .then(function (data) {
        console.log(data);
        data.results.forEach((photo) => {
          let img = document.createElement("img");
          img.src = photo.urls.regular;
          img.classList.add("api-img");

          imagesWrapper.append(img);
        });
      });
  });
}
ApiFetch();

// google fonts api: AIzaSyAhZuGKfMdu2GJ4az_GZ4XljVCqGgzGdwU

/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="../dist/main.css" />
    <link
      href="https://fonts.googleapis.com/css?family=Lato|Merriweather|Montserrat|Open+Sans|Oswald|Playfair+Display|Roboto|Roboto+Condensed|Roboto+Mono|Roboto+Slab|Source+Sans+Pro&display=swap"
      rel="stylesheet"
    />

    <title>Wixa</title>
  </head>
  <body>
    <div class="header">
      <div class="nav">
        <p class="menu-logo">website creator</p>
        <ul class="nav__items">         
          <li><a href="../index.html">Home</a></li>
          <li><a class="active" href="htmls/project.html">Project</a></li>
          <li><a href="#">Templates</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div class="tutorial-btn-wrapper">
          <button class="tutorial">tutorial</button>
        </div>
      </div>
      
    </div>

    <div class="menu-toggle" title="Toggle navigation bar">
      <i class="fas fa-sort-down"></i>
    </div>

    <div class="wrapper">
      <div class="menu">
        <div class="subsites-btn"><i class="fas fa-clipboard"></i></div>
        <div class="create-btn"><i class="fas fa-shapes"></i></div>
        <div class="background-btn">
          <i class="fas fa-images"></i>
        </div>
        
        
        <div class="components-btn"><i class="fas fa-plus"></i></div>
        

      </div>

      <div class="menu-options-wrapper">

        <div class="menu-options subsites-wrapper invisible"></div>

        <div class="menu-options create-wrapper invisible">
          <div class="div-create create-indicator">
            Div
            <div class="div-options">
              <p class="div-options-p">SHAPES</p>
              <div class="div-shapes-container">
                <div class="div-shape1 options"></div>
                <div class="div-shape2 options"></div>
                <div class="div-shape3 options"></div>
                <div class="div-shape4 options"></div>
              </div>

              <p class="div-options-p">LINES</p>
              <div class="div-shapes-container ">
                <div class="div-line-wrapper">
                  <div class="div-line1 options"></div>
                </div>
                <div class="div-line-wrapper">
                  <div class="div-line2 options"></div>
                </div>
              </div>

              <div class="div-shapes-container ">
                <div class="div-line-wrapper">
                  <div class="div-line3 options"></div>
                </div>
                <div class="div-line-wrapper">
                  <div class="div-line4 options"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-create create-indicator">
            Text
            
            <div class="text-options">
              <button class="create-new-text">Create Text</button>
              
              <div class="text-input-wrapper">
                
                <textarea
                  class="text-input"
                  placeholder="write text here"
                ></textarea>
              </div>

              <div class="wrap-options">
                <div class="font-size-wrapper">
                  <div class="font-size">
                    <p class="div-options-p">FONT SIZE</p>
                    <form>
                      <input
                        type="number"
                        class="font-size-input"
                        min="0"
                        value="18"
                      />
                    </form>
                  </div>
                </div>

                <div class="font-family-wrapper">
                  <p class="div-options-p">FONT STYLE</p>
                  <select class="select-font">
                    <option class="font-1" style="font-family: Roboto"
                      >Roboto</option
                    ><option class="font-1" style="font-family: fantasy;"
                      >Fantasy</option
                    ><option class="font-1" style="font-family: Verdana"
                      >Verdana</option
                    ><option class="font-1" style="font-family: Georgia"
                      >Georgia</option
                    ><option class="font-1" style="font-family: Lato"
                      >Lato</option
                    ><option class="font-1" style="font-family: Open Sans"
                      >Open Sans</option
                    ><option class="font-1" style="font-family: Montserrat"
                      >Montserrat</option
                    ><option
                      class="font-1"
                      style="font-family: Roboto Condensed"
                      >Roboto Condensed</option
                    ><option class="font-1" style="font-family: Source Sans Pro"
                      >Source Sans Pro</option
                    ><option class="font-1" style="font-family: Oswald"
                      >Oswald</option
                    ><option class="font-1" style="font-family: Roboto Mono"
                      >Roboto Mono</option
                    ><option class="font-1" style="font-family: Merriweather"
                      >Merriweather</option
                    ><option class="font-1" style="font-family: Roboto Slab"
                      >Roboto Slab</option
                    ><option
                      class="font-1"
                      style="font-family: Playfair Display"
                      >Playfair Display</option
                    >
                  </select>
                </div>
              </div>

              <div class="color-options-wrapper">
                <div class="font-color-wrapper">
                  <p class="div-options-p">FONT COLOR</p>
                  <form>
                    <input
                      type="text"
                      class="font-color-input"
                      placeholder="white / #ffffff"
                    />
                  </form>
                  <div class="color-preview"></div>
                </div>

                <div class="background-color-wrapper">
                  <p class="div-options-p">BACKGROUND </br> COLOR</p>
                  <form>
                    <input
                      type="text"
                      class="background-color-input"
                      placeholder="white / #ffffff / blank "
                    />
                  </form>
                  <div class="background-preview"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-create create-indicator">
            Button
            <div class="btn-options">
              <div class="btns-wrapper">
                <button class="btn1"></button>
                <button class="btn2"></button>
                <button class="btn3"></button>
                <button class="btn4"></button>
                <button class="btn5"></button>
                <button class="btn6"></button>
              </div>
            </div>
          </div>
          <div class="image-create create-indicator">
            Image
            <div class="image-options">
              <div class="image-inner-wrapper">
                <div class="image-top">
                  <input type="text" class="img-input" placeholder="search images">
                  <button class="img-btn">Search</button>
                </div>
                <div class="api-images-wrapper"></div>
              </div>
            </div>
          </div>
          <div class="icon-create create-indicator">
            Icon
            <div class="icon-options">e</div>
          </div>
          <div class="link-create create-indicator">
            Link
            <div class="link-options">f</div>
          </div>
          <div class="filler"></div>
        </div>

        <div class="menu-options background-wrapper invisible">
          <div class="bg-inner-wrapper">
            <div class="bg-color"></div>
            <div class="bg-position"></div>
            <div class="bg-image"></div>
          </div>
        </div>

        <div class="menu-options components-wrapper invisible"></div>
      </div>

      <div class="work-area">
        <div class="deleteQuestion invisible">
          <p>Are you sure you want to delete this element?</p>
          <div class="btn-wrapper">
            <button class="delYes">Yes</button>
            <button class="delNo">No</button>
          </div>
        </div>
      </div>
    </div>

    <script src="../main.js"></script>
    <script src="../api.js"></script>

    <script
      src="https://kit.fontawesome.com/2c2390af2a.js"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
*/

/*

.wrapper {
  height: 100vh;
  width: 100%;
}

.menu {
  width: 100px;
  height: 400px;
  position: absolute;
  left: 10px;
  margin-top: 100px;

  .subsites-btn,
  .create-btn,
  .background-btn,
  .components-btn {
    width: 58px;
    height: 58px;
    background: $primary-color;
    margin-bottom: 10px;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
    border: 2px solid $secondary-color;
    @include transition-ease;

    &:hover {
      background: $accent-color2;
    }
  }

  .btn-active {
    background: $accent-color2;
  }

  .fas {
    color: $secondary-color;
    font-size: 36px;
    margin-top: 12px;
  }

  .fa-clipboard {
    margin-top: 8px;
  }

  .fa-plus {
    margin-top: 10px;
  }

  .fa-shapes {
    margin-top: 9px;
  }

  .fa-images {
    margin-top: 10px;
  }
}

.subsites-wrapper,
.create-wrapper,
.background-wrapper,
.components-wrapper {
  position: absolute;
  left: 85px;
  width: 400px;
  height: 400px;
  background: $primary-color;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 140px;
}

.div-create,
.text-create,
.btn-create,
.image-create,
.icon-create,
.link-create,
.filler {
  width: 120px;
  height: 30px;
  cursor: pointer;
  padding-top: 5px;
  padding-left: 5px;
  font-size: 18px;
  font-family: sans-serif;
  text-transform: capitalize;
  list-style-type: none;
  background: $accent-color;
}

.div-create {
  margin-top: 0px;
  border-radius: 5px 0 0 0;
}

.filler {
  height: 320px;
  border-radius: 0 0 0 5px;
}

.div-options,
.text-options,
.btn-options,
.image-options,
.icon-options,
.link-options {
  position: absolute;
  left: 120px;
  top: 0;
  width: 400px;
  height: 400px;
  border-radius: 0 5px 5px 0;
  visibility: hidden;
  z-index: 5;
  cursor: initial;
  background: $primary-color;

  input {
    width: 150px;
  }
}

.div-options-p {
  margin-top: 10px;
  color: black;
  text-align: center;
}

.div-shapes-container {
  margin: 10px;
  display: flex;
  justify-content: space-evenly;
}

.invisible {
  display: none;
}

.menu-active {
  background-color: $secondary-color;
  color: $primary-color;
}

//////////////
//TEXT CREATE

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
  width: 350px;
  height: 90px;

  .text-input {
    resize: none;
    width: 350px;
    height: 90px;
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

//////////////
//  SHAPES:

//div
.options {
  cursor: pointer;
}

.div-shape1 {
  width: 45px;
  height: 45px;
  background: #333333;
}

.div-shape2 {
  width: 45px;
  height: 45px;
  background: #333333;
  border-radius: 10px;
}

.div-shape3 {
  width: 45px;
  height: 45px;
  background: #333333;
  border-radius: 1000px;
}

.div-shape4 {
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 45px solid #333333;
}

//line

.div-line-wrapper {
  width: 100px;
  height: 10px;
  background: #777777;
  padding-top: 10px;
  padding-bottom: 15px;
}

.div-line1 {
  width: 100px;
  height: 0;
  border-bottom: 5px solid #333333;
}

.div-line2 {
  width: 100px;
  height: 0;
  border-bottom: 5px dashed #333333;
}

.div-line3 {
  width: 100px;
  height: 0;
  border-bottom: 5px dotted #333333;
}

.div-line4 {
  width: 100px;
  height: 0;
  border-bottom: 5px double #333333;
}

.border {
  border: 1px solid $secondary-color;
}

////////////
//BUTTONS
.btn1 {
  width: 100px;
  height: 50px;
}

//////////////
// IMAGES

.image-options {
  width: 900px;
  height: 800px;

  .image-inner-wrapper {
    height: 100%;
    width: 100%;


    .image-top {
      margin-left: 20px;
      margin-top: 15px;
    }
  }
}

.api-images-wrapper {
  width: 860px;
  height: 700px;
  background: $accent-color;
  margin: 15px auto 0 auto;
  overflow-y: scroll;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.api-img {
  padding: 10px;
  cursor: pointer;
  width: 400px;
  height: auto;
}
////////////
//BACKGROUND

.bg-inner-wrapper {
  width: 380px;
  height: 380px;
  margin: 0 auto;
}

////////////
//WORK AREA

.work-area {
  width: 100%;
  height: 100vh;
  background: darkgray;
}

.config-btn {
  width: 18px;
  height: 3px;
  background: black;
  position: absolute;
  top: -10px;
  left: 25px;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    width: 18px;
    height: 3px;
    background: black;
  }

  &::after {
    content: "";
    position: absolute;
    top: 5px;
    width: 18px;
    height: 3px;
    background: black;
  }
}

.delete-btn {
  width: 17px;
  height: 3px;
  background: black;
  position: absolute;
  top: -10px;
  left: 3px;
  transform: translateX(10px);
  transform: rotate(45deg);
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    width: 17px;
    height: 3px;
    background: black;

    transform: rotate(90deg);
  }
}

.deleteQuestion {
  width: 300px;
  height: 150px;
  background: #fff;
  position: absolute;
  left: 100px;
  right: 0;
  top: 200px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid $secondary-color;
  z-index: 3;

  p {
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    padding: 15px;
  }

  .delYes,
  .delNo {
    background: $secondary-color;
    border: none;
    color: $primary-color;
    width: 50px;
    height: 30px;
    cursor: pointer;
    font-size: 20px;
    font-family: "Roboto", sans-serif;
  }

  .delYes {
    margin-right: 10px;
  }

  .delNo {
    margin-left: 10px;
  }

  .btn-wrapper {
    width: 140px;
    height: 30px;
    margin-left: 85px;
    margin-top: 10px;
  }
}

.resizerSe {
  width: 10px;
  height: 10px;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: se-resize;
  z-index: 2;
}

.resizerEast {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 10px;
  cursor: e-resize;
  z-index: 1;
}

.resizerSouth {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 10px;
  width: 100%;
  cursor: s-resize;
  z-index: 1;
}

*/

/*

  (function leftMenuToggle() {
    const menusWrapper = document.querySelector(".menu");
    let clickedMenu;
    let lastMenu;

    menusWrapper.addEventListener("click", function(e) {
      if (e.target.classList.contains("fas")) {
        clickedMenu = e.target.parentNode.className;
      } else {
        clickedMenu = e.target.className;
      }

      let menusArray = document.getElementsByClassName("menu-options");
      let menuSplit = clickedMenu.split("-", 1).join();
      let menuClass = menuSplit.concat("-wrapper");
      let correctClass = document.querySelector("." + menuClass);

      for (let i = 0; i < menusArray.length; i++) {
        menusArray[i].classList.add("invisible");
      }

      correctClass.classList.remove("invisible");
      if (lastMenu == correctClass) {
        correctClass.classList.add("invisible");
      }
      lastMenu = correctClass;
    });
  })();
  */
