fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())
    .then(data => {
        var { USD, GBP, EUR } = data.bpi

        document.querySelector('#usd').html = `<span class="code">${ USD.code }</span><span class="value">${ USD.symbol } ${ USD.rate }</span>`
        document.querySelector('#gbp').html = `<span class="code">${ GBP.code }</span><span class="value">${ GBP.symbol } ${ GBP.rate }</span>`
        document.querySelector('#eur').html = `<span class="code">${ EUR.code }</span><span class="value">${ EUR.symbol } ${ EUR.rate }</span>`

        document.querySelector('#update-time').text = data.time.updated
    })