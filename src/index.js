
$.get('https://api.coindesk.com/v1/bpi/currentprice.json', function (response) {

    response = JSON.parse(response)

    var values = response.bpi;

    $('#usd').html(`<span class="code">${values.USD.code}</span><span class="value">${values.USD.symbol + values.USD.rate}</span>`);
    $('#gbp').html(`<span class="code">${values.GBP.code}</span><span class="value">${values.GBP.symbol + values.GBP.rate}</span>`);
    $('#eur').html(`<span class="code">${values.EUR.code}</span><span class="value">${values.EUR.symbol + values.EUR.rate}</span>`);

    $('#update-time').text(response.time.updated);
})