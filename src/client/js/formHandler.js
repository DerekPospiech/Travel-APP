//import { checkForNews } from "./newsChecker"

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('search').value

    let country = document.getElementById('Country').value;
    let state = document.getElementById('State').value;
    let city = document.getElementById('City').value;
    let departDate = document.getElementById('Departure Date').value;
    let returnDate = document.getElementById('Return Date').value;

    console.log(country)
    console.log(state)
    console.log(city)
    console.log(departDate)
    console.log(returnDate)

    console.log("The function has completed!")


    //try is created for jest testing as the client library is not defined in jest
    //try{
   // Client.checkForNews(formText)
   // }
    //catch{
    //    checkForNews(formText)  
    //}
   // console.log("::: Data Submitted :::")
 
}

export { handleSubmit }
