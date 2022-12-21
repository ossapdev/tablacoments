let url = 'https://sheets.googleapis.com/v4/spreadsheets/1_5XTljIJKVhpzBVlgHphzI3qkGiwkKgCzS30eIWzAQI/values/hoja!A:I?key=AIzaSyAjVKkVCiJX6QEbxEsyxqFzfllaX0CpQvU';


fetch(url)
 .then(res => res.json())
 .then(data => {

    let data_crud = data;

    links(data)
    
    numComent(data_crud)

   
  
 })


 // funccion de links

 function links(data) {

    let url_int =  document.querySelectorAll('.link-inst a');

    

    for(var l = 0; l < 8; l++){

       url_int[l].href = data.values[l + 1][8] ;

    }


 }

 function numComent(data) {
       
    let cantidad_coment = document.querySelectorAll('.num-comnt');
    // let url_int =  document.querySelectorAll('.link-inst');

  
  
    data.values[1].pop()
    data.values[2].pop()
    data.values[3].pop()
    data.values[4].pop()
    data.values[5].pop()
    data.values[6].pop()
    data.values[7].pop()
    data.values[8].pop()
    data.values[9].pop()
    data.values[10].pop()
    data.values[11].pop()
    data.values[12].pop()
    data.values[13].pop()
    data.values[14].pop()
    data.values[15].pop()
    data.values[16].pop()
    
    
    setTimeout(() => {

        let data_sheets = data.values[1].concat(data.values[2],data.values[3],data.values[4],data.values[5],data.values[6],data.values[7],data.values[8],data.values[9],data.values[10],data.values[11],data.values[12],data.values[13],data.values[14],data.values[15],data.values[16]);
        

        //console.log(cantidad_coment) 

        for(var i = 0; i <= cantidad_coment.length; i++){

           cantidad_coment[i].innerHTML = data_sheets[i];

           
        }

    },3000);


}



