function News() {
  var node = document.getElementById('news-article');

  async function api() {
    const url =
      'http://newsapi.org/v2/top-headlines?' +
      'sources=bbc-news,cnn,null,cnbc&' +
      'q=corona+virus&' +
      'from=2020-03-24&' +
      'sortBy=popularity&' +
      'apiKey=74baf455e2c2433e80e7653531718dcb';
    var req = new Request(url);
    const response = await fetch(req);
    let data = await response.json();
    return data;
  }

  api().then(json => {
    console.log(json.articles[0], typeof json.articles[0].source.name);
    let data = json.articles;
    data.map((curr, index) => {
      console.log(curr.source.name);
      let source = curr.source.name;
      let title = curr.title;
      let description = curr.description;
      let published = curr.publishedAt;
      let author = curr.author;
      let img = curr.urlToImage;
      let url = curr.url;

      const html = `
					<section class="main-flex-container">
						<div class="grid-container-1">
						  <div class="grid-1">
							  <label for="Source">Source:${source}</label>
							  <img src=${img} alt="#"/>
						  </div>
						  <div class="grid-2">
							<h3>${title}</h3>
							<div>
							  <p>${description}</p>
							  <a href=${url} target="_blank">Read more</a>
							</div>
						  </div>
						</div>
						<div class="grid-container-2">
						  <div class="grid-3">
							<label for="Published At">Published At:${published}</label>
						  </div>
						  <div class="grid-4">
							<label for="Author">Author:${author}</label>
						  </div>
						</div>
					  </section>
			`;

      node.insertAdjacentHTML('beforeend', html);
    });
  });
}
window.onload = News();
