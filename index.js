
function getUnemploymentRateFromAPI () {
    var endpoint = 'https://controllerdata.lacity.org/resource/7w5n-ybsg.json'
    fetch(endpoint)
    .then(function(data){
        return data.json()
    })
    .then(function(json){
        console.log(json)
        resultDiv = document.getElementById('result')
        var finalHTML = ''
        
        json.forEach(function(item){
            var title = item.median_age
            var unemploymentRate = item.unemployment_rate
            var fiscalYear = item.fiscal_year            
            var card = 
            `

                <div class="col s6 m4">
                  <div class="card">
                    </div>
                      <p>
                         For the median age which is ${title}, the unemployment rate was ${unemploymentRate} in the year ${fiscalYear}.
                      </p>
                    </div>
                    <div class="card-action">
                   
                    
                    </div>
                  </div>
                </div>
            `
            finalHTML += card
        })
      
        resultDiv.innerHTML = finalHTML
    })
    .catch(function(error){
        console.log(error)
    })
}



      
            
          
       

