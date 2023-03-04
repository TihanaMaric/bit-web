// displaying  shows on html

export default class Shows {
  constructor() {
    this.showList = [];
  };

  addShow(obj) {
    this.showList.push(obj);
  }

  getShow() {
    let html = "";
    this.showList.forEach(el => {
      html += `<article class='col-8 col-md-4 mx-auto mb-2 px-2  article' data-id='${el.id}' '>
              <div class='p-1 h-100 border rounded shadow-sm'>
                <img src='${el.img}' class='img-fluid' alt='show'>
                <h3 class ='text-center'>${el.showName} </h3>
              </div>
              </article>`;
    });
    return html;
  }

};