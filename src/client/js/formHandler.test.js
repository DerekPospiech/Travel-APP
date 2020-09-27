import "@babel/polyfill"
import { handleSubmit } from "./formHandler";
import { postData } from "./newsChecker";
import { checkForNews } from "./newsChecker";
const { TestScheduler } = require('jest');



test('Checking Valid value', () => {

  //built mock body for handlesubmit to run on:
    document.body.innerHTML = `
    <input id="search"></input>
    <button id="submitButton">Submit</button>
    <div id="polarity"></div>
    <div id="text">Hello!</div>
    <div id="subjectivity"></div>
  `;

    //sets the search input field to a constant
    const searchInput = document.getElementById('search');
    //gets the submit button
    const submitButton = document.getElementById('submitButton');
    //creates a blank event. the event is actually not used but is needed to run handle submit
    const event = new Event('build');

    //sets the input value to be used with newsChecker
    searchInput.value = 'Hello!';
    
    //runs handleSubmit with the above values. should set polarity, text, and subjectivity fields of document body
    handleSubmit(event);

    //expects to return same text that was used to intialize searchInput
    expect(document.getElementById('text').innerHTML).toBe(searchInput.value);
});


