let url = 'https://sheets.googleapis.com/v4/spreadsheets/1_5XTljIJKVhpzBVlgHphzI3qkGiwkKgCzS30eIWzAQI/values/hoja!A:J?key=AIzaSyAjVKkVCiJX6QEbxEsyxqFzfllaX0CpQvU';


fetch(url)
    .then(res => res.json())
    .then(data => {

        let data_crud = data;

        console.log(data)



        //  links(data)
        numComent(data_crud)



    })

/*
 // funccion de links

 function links(data) {

    let url_int =  document.querySelectorAll('.link-inst a');

    

    for(var l = 0; l < 8; l++){

       url_int[l].href = data.values[l + 1][8] ;

    }


 }

*/

function numComent(data) {

    let cantidad_coment = document.querySelectorAll('.num-coment');
    // let url_int =  document.querySelectorAll('.link-inst');


    console.log(data.values[1])


    setTimeout(() => {

        let data_sheets = data.values[2].concat(data.values[3], data.values[4], data.values[5], data.values[6], data.values[7], data.values[8], data.values[9], data.values[10], data.values[11], data.values[12], data.values[13], data.values[14], data.values[15], data.values[16], data.values[17]);

        

    
                for (var i = 0; i <= cantidad_coment.length; i++) {


                    if(data_sheets[i] == undefined) {

                        cantidad_coment[i].innerHTML = 0;


                    } else {

                        cantidad_coment[i].innerHTML = data_sheets[i];


                    }

                    


                }



    }, 3000);


}