const searchForm = document.querySelector('.search');
const input = document.querySelector('.input');
const newsList = document.querySelector('.newsList');

searchForm.addEventListener('submit', retrieve);

function retrieve(res){
    
    res.preventDefault()

    const apiKey = '8368e4459d25495280471dc2f610a8bb';
    let topic = input.value;

    let url = `https://newsapi.org/v2/top-headlines?q=${topic}&country=us&category=business&apiKey=${apiKey}`;

    fetch(url)
        .then( res => res.json() )
        .then(data => {
            console.log(data)
            newsList.innerHTML = render(data.articles);       
        })

        function render(result){
            let list = '<div class="row">';

            result.forEach( article => {
                list += 
                    `
                    <div class="col col-lg-4">
                        <h4>${article.title}</h4>
                        <img width="100%" src="${article.urlToImage}">
                        <p>${article.description}</p>
                        <p>${article.content}</p>
                        <p>Published on: ${article.publishedAt}</p>
                        <a href="${article.url}" class="btn btn-primary">Read more</a>
                    </div>
                    `
            })

            list += `</div>`;
            return list;
        }
}
