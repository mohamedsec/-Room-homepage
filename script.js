const hamblist = document.getElementById("hambList");
const showNav = document.querySelector(".showNav");
/*const for shadow*/
const shadoDiv = document.querySelector(".shadowForMobe");
const close = document.getElementById("close");
const rightMob = document.getElementById("rightM");
const leftMob = document.getElementById("leftM");
const rightDisk = document.getElementById("rightD");
const leftDisk = document.getElementById("leftD");
/*where can i update new info*/ 
const header = document.getElementById("header");
const intro = document.getElementById("intro");
const para = document.getElementById("para");
/*counter to store the currunt slide*/ 
let current = 1;



/*Data to organizing sliding info consist of image header and intro and paragraph*/ 
const dataMob = [
  {
    id: 1,
    img: "./images/mobile-image-hero-1.jpg",
    intro: "Discover innovative ways to decorate",
    paragraph:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love. ",
  },
  {
    id: 2,
    img: "./images/mobile-image-hero-2.jpg",
    intro: "We are available all across the globe",
    paragraph:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    id: 3,
    img: "./images/mobile-image-hero-3.jpg",
    intro: "Manufactured with the best materials",
    paragraph:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];
const dataDisk = [
  {
    id: 1,
    img: "./images/desktop-image-hero-1.jpg",
    intro: "Discover innovative ways to decorate",
    paragraph:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love. ",
  },
  {
    id: 2,
    img: "./images/desktop-image-hero-2.jpg",
    intro: "We are available all across the globe",
    paragraph:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    id: 3,
    img: "./images/desktop-image-hero-3.jpg",
    intro: "Manufactured with the best materials",
    paragraph:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];
/*two funtions for update sliding on click*/ 
function updateDataMob(currentID) {
  let dataObject = dataMob.filter((object) => {
    return currentID == object.id;
  });

  header.style.backgroundImage = `url(${dataObject[0].img})`;
  intro.innerText = `${dataObject[0].intro}`;
  para.innerText = `${dataObject[0].paragraph}`;
}


function updateDataDisk(currentID) {
  let dataObject = dataDisk.filter((object) => {
    return currentID == object.id;
  });
  header.style.backgroundImage = `url(${dataObject[0].img})`;
  intro.innerText = `${dataObject[0].intro}`;
  para.innerText = `${dataObject[0].paragraph}`;
}
/*end______________of function*/ 

/* event listener for btn to call above function*/ 
rightMob.addEventListener("click", () => {
    if (current == dataMob.length) {
      current = 1;
    } else {
      current++;
    }
    updateDataMob(current);
  });
  
  leftMob.addEventListener("click", () => {
    if (current == 1) {
      current = dataMob.length;
    } else {
      current--;
    }
    updateDataMob(current);
  });
  
  rightDisk.addEventListener("click", () => {
    if (current == dataDisk.length) {
      current = 1;
    } else {
      current++;
    }
    updateDataDisk(current);
  });
  
  leftDisk.addEventListener("click", () => {
    if (current == 1) {
      current = dataDisk.length;
    } else {
      current--;
    }
    updateDataDisk(current);
  });
  /*end__________of btn listeneing*/ 

/*two event listener with handling humb and close which in Navbar for small screen like phone....*/ 
hamblist.addEventListener("click", () => {
  showNav.style.display = "flex";
  shadoDiv.style.position = 'absolute'

});

close.addEventListener("click", () => {
  showNav.style.display = "none";
  shadoDiv.style.position = 'static'
});
