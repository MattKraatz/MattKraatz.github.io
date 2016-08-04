$.getJSON("spotlight.json").then(d => spotPrint(d.spotlight))

function spotPrint(content) {
  for (i in content) {
    $('.spotlightOutput').append(`
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <img src="${content[i].img_src}">
        <p>${content[i].title}</p>
      </div>
      `)
  }
}
