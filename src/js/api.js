async function api() {
  const url = 'https://api.covid19api.com/summary';
  var req = new Request(url);
  const response = await fetch(req);
  let data = await response.json();
  return data;
}

api().then(json => {
  console.log(json.Countries[0].Country);
  var table = document.getElementById('t-data');
  json.Countries.map((data, index) => {
    var row = table.insertRow(index + 1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    // var cell6 = row.insertCell(5);

    cell1.innerHTML = `${data.Country}`;
    cell2.innerHTML = `${data.TotalConfirmed}`;
    cell3.innerHTML = `${data.TotalDeaths}`;
    cell4.innerHTML = `${data.NewConfirmed}`;
    cell5.innerHTML = `${data.TotalRecovered}`;
    // cell6.innerHTML = `${data.critical}`;
  });
});
