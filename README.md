# Daily Planner App

## Description

This application allows a user to plan their day on an hourly basis by entering text in each hour timeblock, and saving and storing this information in the browser. The user can close the page and return to find their entries later. The page will only reset once the user presses 'Reset' at the top. Each timeblock is colour-coded based on whether the timeblock is in the past, present or future.

With this project, I challenged myself to create the table dynamically using JavaScript, Bootstrap and jQuery. I used jQuery to add attributes, text and classes to elements within the page. I also learned to use Day.js to gather today's date and the current hour, the latter of which is compared to the hours in the schedule to check how the timeblocks should be colour-coded.

I also learned to consider other useful elements for the user, which I considered to be a reset button so that the user's entries will only disappear when they want them to. By removing the schedule in local storage, this initially resulted in some errors as there was no schedule to display on the page. I learned that it would be necessary to also assign variables to empty arrays or empty strings.


## Installation

N/A

## Usage

Instructions:

Visit the [Daily Planner App](https://elenimg.github.io/Daily-Planner-App/).

When you open the page, the planner will display today's date at the top.

You can enter any tasks or work you plan to do during the day. If the time is in the past, the timeblock will be a grey colour, if it is the current hour, the timeblock will be a light pink, and if the timeblock is in the future, it will be a white colour.

Make sure to click the save button on the right for each row where you enter any text. This information is saved in local storage so that the information remains even if you close the page. 

If you want to empty the planner for a new day, just press 'Reset' at the top!



Please see the following screenshots to see how the page works:

![Planner with entries](./images/Screenshot%201.png)
![Planner with current timeblock highlighted](./images/Screenshot%202.png)

![Reset planner](./images/Screenshot%203.png)

## Credits

The following third-party assets were used to assist with this code:

[setInterval() global function - MDN](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)

[Storage: setItem() method - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem)

[Using data attributes - MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

[JSON.parse() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

[Storage: removeItem() method - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem)

[Object() constructor - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)

[Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

[preventDefault() Event Method - W3Schools](https://www.w3schools.com/jsref/event_preventdefault.asp)

[jQuery addClass() Method - W3Schools](https://www.w3schools.com/jquery/html_addclass.asp#:~:text=The%20addClass()%20method%20adds,the%20class%20names%20with%20spaces.)

[Storing and retrieving JavaScript objects in localStorage - LogRocket](https://blog.logrocket.com/storing-retrieving-javascript-objects-localstorage/)

[localStorage in JavaScript: A complete guide - LogRocket](https://blog.logrocket.com/localstorage-javascript-complete-guide/#:~:text=removeItem()%20%3A%20Remove%20an%20item,Clear%20all%20data%20from%20localStorage)

[How to Use SVG Images in CSS and HTML – A Tutorial for Beginners - freeCodeCamp](https://www.freecodecamp.org/news/use-svg-images-in-css-html/)

[Grid system - Bootstrap](https://getbootstrap.com/docs/5.3/layout/grid/)

[Buttons - Bootstrap](https://getbootstrap.com/docs/4.0/components/buttons/)

[.data() - jQuery](https://api.jquery.com/data/)

[.each() - jQuery](https://api.jquery.com/each/)

[.text() - jQuery](https://api.jquery.com/text/#:~:text=For%20input%20field%20text%2C%20use,by%20passing%20in%20a%20function.)

[Iterating over jQuery and non-jQuery Objects - jQuery](https://learn.jquery.com/using-jquery-core/iterating/)

[Now - Day.js](https://day.js.org/docs/en/parse/now)

[Hour - Day.js](https://day.js.org/docs/en/get-set/hour)

[Start of Time - Day.js](https://day.js.org/docs/en/manipulate/start-of#list-of-all-available-units)

[Format - Day.js](https://day.js.org/docs/en/display/format)

[String + Format - Day.js](https://day.js.org/docs/en/parse/string-format)