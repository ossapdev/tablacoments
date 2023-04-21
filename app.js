let url = 'https://sheets.googleapis.com/v4/spreadsheets/1_5XTljIJKVhpzBVlgHphzI3qkGiwkKgCzS30eIWzAQI/values/hoja!A:J?key=AIzaSyAjVKkVCiJX6QEbxEsyxqFzfllaX0CpQvU';


fetch(url)
    .then(res => res.json())
    .then(data => {

        let data_crud = data;

         // modificando los links

         linksData(data_crud)


        //  links(data)
        numComent(data_crud)

        // dataDescription

        dataDescription(data_crud)

       



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


function linksData(data) {


   let links = document.querySelectorAll('.link-post a')

   

   setTimeout( () => {

    

       for(var i = 0; i < links.length; i++) {

      

        let link_final = links[i];

        link_final.href = data.values[1][i]

        console.log(link_final)


      }



    }, 5000);
  
    

  


}



//**************** */

function numComent(data) {

    
    // let url_int =  document.querySelectorAll('.link-inst');



    setTimeout(() => {

        let cantidad_coment = document.querySelectorAll('.num-coment');

        let data_sheets = data.values[3].concat(data.values[4], data.values[5], data.values[6], data.values[7], data.values[8], data.values[9], data.values[10], data.values[11], data.values[12], data.values[13], data.values[14], data.values[15], data.values[16], data.values[17], data.values[18]);

       

      

        for (var i = 0; i <= cantidad_coment.length; i++) {



           



            if (data_sheets[i] == undefined || data_sheets[i] == 'undefined' || data_sheets[i] == '') {

                cantidad_coment[i].innerHTML = 0;


            } else {

                cantidad_coment[i].innerHTML = data_sheets[i];


            }




        }



    }, 3000);


}

// funcion de copiar

let copybtn = document.querySelector('tfoot')
    //let botonesu = document.querySelectorAll('.btn-copy')


// listeners
/*
llamada();

function llamada() {

    copybtn.addEventListener('click', botonescopi)


}


function botonescopi(e) {

    e.preventDefault();

    if (e.target.classList.contains('btn-copy')) {



        //botonesu[0].dataset.description = 'comprando'


        // console.log(botonesu[0].dataset.description)
        for (var i = 0; i <= botonesu.length; i++) {

            console.log(botonesu[i])
        }


    }


}*/

// funcion para otener la informacion de data-description

let bott = document.querySelectorAll('.btn-copy')

function dataDescription(data) {



    for (var l = 0; l <= bott.length; l++) {

        let data_d = data.values[2][l];

         bott[l].dataset.description = data_d;

       //  bott[l].setAttribute('data-description', data_d);


    }





}


// funcion de los botones


for (let i = 0; i <= 9; i++) {

    let bott = document.querySelectorAll('.btn-copy')





    bott[i].addEventListener('click', function() {

      //  let data_des = bott[i].dataset.description;
       let data_des = bott[i].getAttribute('data-description');

        navigator.clipboard.writeText(data_des)
          .then(() => {
           console.log('Texto copiado al portapapeles')
         })
         .catch(err => {
           console.error('Error al copiar al portapapeles:', err)
         })
      



    });


}


// agregando links de las cuentas
















