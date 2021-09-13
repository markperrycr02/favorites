const weblinks = [
  {
    id: 1,
    title: "Clarien Bank",
    url: "https://www.clarienibank.com/#/login",
    category: "Banking",
    logo: "./images/clarenlogo.jpeg",
    logoSize: 140,
  },
  {
    id: 2,
    title: "Bank of America",
    url: "https://www.bankofamerica.com/",
    category: "Banking",
    logo: "./images/bankofamerica.png",
  },
  {
    id: 3,
    title: "HSBC Bermuda",
    url: "https://www.hsbc.bm/security/",
    category: "Banking",
    logo: "./images/hsbclogo.png",
  },
];

function getLinks(linksContainer, filterBy) {
  let main = document.getElementById(linksContainer);

  // Return only the links with category = filteredBy
  let filtered = categoryFilter(filterBy, weblinks);

  let parentDiv = document.createElement("div");
  let categoryTitle = document.createElement("h4");

  parentDiv.style.marginTop = "-7px";
  categoryTitle.innerHTML = `Category : <i>${filterBy}</i>`;
  categoryTitle.style.padding = "20px";
  categoryTitle.style.width = "100%";
  categoryTitle.style.marginTop = "10px";

  categoryTitle.style.background = "#b8cdf8";
  parentDiv.className = "linksContainer";

  if (filtered.length > 0) {
    main.appendChild(categoryTitle);
    main.appendChild(parentDiv);
    let idCount = 0;
    let hyperLink;
    filtered.forEach((element) => {
      let linkImage = document.createElement("img");
      let anchorTag = parentDiv.appendChild(document.createElement("a"));

      linkImage.setAttribute("id", element.id);

      anchorTag.href = element.url;
      anchorTag.className = "linkbox btn border";
      anchorTag.setAttribute("target", "_blank");
      anchorTag.appendChild(linkImage);

      linkImage.width = element.logoSize ? element.logoSize : 100;
      linkImage.setAttribute("src", element.logo);
    });
  }
}

// Return filtered array
function categoryFilter(searchFor, object) {
  let newArray = [];
  object.forEach((element) => {
    if (element.category === searchFor) newArray.push(element);
  });
  //console.log(newArray);
  return newArray;
}

function addLink() {
  return "Hello";
}
module.exports = {
  weblinks,
  getLinks,
  addLink,
};
