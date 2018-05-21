export function API() {
  return fetch('http://assets.studio71.io/test/news_feed.json')
    .then(response => {
      return response.json();
    })
    .then(data => data.items)
    .catch(e => {
      console.log(e);
    });
}
