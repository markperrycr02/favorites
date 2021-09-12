var weblinks = [
  {
    title: "Bernews",
    url: "https://bernews.com",
    category: "News",
    bgColor: "orange",
    textColor: "green",
  },
  {
    title: "The Royal Gazette",
    url: "https://www.royalgazette.com",
    category: "News",
    bgColor: "orange",
    textColor: "black",
  },
];

function getLinks(linksContainer, filterBy) {
  let main = document.getElementById(linksContainer);

  // Return only the links with category = filteredBy
  let filtered = categoryFilter(filterBy, weblinks);

  let weblinksDiv = document.createElement("div");
  let categoryTitle = document.createElement("h4");

  categoryTitle.innerHTML = `Category : <i>${filterBy}</i>`;
  categoryTitle.style.paddingTop = "20px";
  weblinksDiv.className = "weblinks";

  if (filtered.length > 0) {
    main.appendChild(categoryTitle);
    main.appendChild(weblinksDiv);
    filtered.forEach((element) => {
      let hyperLink = document.createElement("a");
      hyperLink.className = "linkbox btn btn-secondary";
      hyperLink.href = element.url;
      hyperLink.target = "_blank";
      hyperLink.innerHTML = element.title;
      hyperLink.style.color = element.textColor;
      hyperLink.style.background = element.bgColor;
      weblinksDiv.appendChild(hyperLink);
    });
  }
}

// Return filtered array
function categoryFilter(searchFor, object) {
  let newArray = [];
  object.forEach((element) => {
    if (element.category === searchFor) newArray.push(element);
  });
  console.log(newArray);
  return newArray;
}
export function addLink() {
  console.log("addLink");
}

export default getLinks;
