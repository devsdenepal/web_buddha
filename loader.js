const URL =
  "resources.json";
setTimeout(feed_more, 2500);
setInterval(feed_more, 10000);
feed_more();
function feed_more() {
  let main = document.querySelector("div");
  main.className = "main";
  console.log("Succesfully loaded more data.");
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      // data.posts[].thumbnail, data.posts[].name
      data.post.forEach(post => {
        let container = document.createElement("div");
        container.className = ".container";
        let card = document.createElement("div");
        card.className = "card";
        //card elements{
        let card_header = document.createElement("div");
        card_header.className = "card_header";


        let card_body = document.createElement("div");
        card_body.className = "card_body";
        let category_span = document.createElement("span");
        category_span.textContent = post.category;
        category_span.classList += "tag tag-blue";
        if (post.thumbnail !== "not-available") {
          
        }

        let card_article = document.createElement("p");
        card_article.textContent = post.article;
        let card_footer = document.createElement("div");
        card_footer.className = "card_footer";
        let card_source = document.createElement("div");
        card_source.className = "user";
        let card_source_info = document.createElement("div");
        card_source_info.className = "user_info";
        let card_source_info_h5 = document.createElement("span");
        // card_source_info_h5.style.textAlign = "center";
        card_source_info_h5.textContent = post.source.replace("fb", "Facebook Page");
        let card_src_img = document.createElement("img");
        card_src_img.classList = "icon round";
        card_src_img.src = `../assets/icons/${post.source}.jpg`;
        let card_headings = document.createElement("h4");
        main.appendChild(container);
        container.appendChild(card);
        card_headings.textContent = post.name;
        card_body.appendChild(card_headings);
        card_body.appendChild(card_article);
        if (post.thumbnail != "not-available") {
          let thumbnail = document.createElement("img");
          thumbnail.src = `http://localhost/github/devsdenepal.github.io/dcn.com/assets/images/${post.thumbnail}`;
          thumbnail.alt = post.name;
          thumbnail.className = "card_image";
          card_header.appendChild(thumbnail);
        }
        card.appendChild(card_header);
        card_header.appendChild(category_span);
        card.appendChild(card_body);
        card.appendChild(card_footer);
        card_footer.appendChild(card_source);
        card_footer.appendChild(card_source_info);
        card_source_info.appendChild(card_source_info_h5);
        card_source.appendChild(card_src_img);
        card_footer.appendChild(document.createElement("br"));
        card_headings.appendChild(document.createElement("br"));
        card_footer.appendChild(document.createElement("br"));
      });
    });
}
