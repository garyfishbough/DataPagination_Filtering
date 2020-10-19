/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
  let startIndex = (page * 9) - 9; // Sets the starting index for each page
  let endIndex = page * 9; // Sets the ending index for each page

  items = document.querySelector('.student-list'); // Variable set to main div with the class student-list
  items.innerHTML = ""; // Creates an empty html for the variable items

  /*
  A for that is set to the starting and ending index to populate each page with data in html format
  set inside a template literal.
  */
  for (let i = startIndex; i < endIndex; i++) {
    if (i === list.length) {
      break; // Will break out of loop once last photo is added, else it will continue until then.
    } else {
      items.insertAdjacentHTML('beforeend', `<li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src="${list[i].picture["thumbnail"]}" alt="Profile Picture">
            <h3>${list[i].name["first"]} ${list[i].name["last"]}</h3>
            <span class="email">${list[i].email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${list[i].registered["date"]}</span>
          </div>
        </li>`);
    }

  }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
  numbPages = list.length / 9; // sets the number of pages determined by the data length
  let pageNumber = document.querySelector(".link-list"); // Variable selects the div to populate the buttons

  // The first if statement checks to see if there is an even number of buttons, if there is it will addPagination
  // one more button for the extra page. else it will calculate if the number is even.
  if (list.length % 9 != 0) {
    for (let i = 1; i <= numbPages + 1; i++) {
      pageNumber.insertAdjacentHTML('beforeend', `<li>
    <button type="button">${i}</button>
  </li>`);
    }
  } else {
    for (let i = 1; i <= numbPages; i++) {
      pageNumber.insertAdjacentHTML('beforeend', `<li>
    <button type="button">${i}</button>
  </li>`);
    }
  }

  // sets the first button to the active class.
  document.querySelectorAll("div.pagination button")[0].className = "active";

  /*
  This for loop will call page number and put it in the showPage() to bring up the items which should be
  diplayed, it will also set the active class to the current button clicked and remove it from the  previous
  button that was clicked.
  */
  for (let i = 0; i <= numbPages; i++) {
    document.querySelectorAll('button')[i].addEventListener('click', function() {
      pageNumb = document.querySelectorAll("div.pagination button")[i].textContent;
      let previousButton = document.querySelector('.active');
      previousButton.className = '';
      document.querySelectorAll("div.pagination button")[i].className = 'active';
      showPage(data, pageNumb);
    });
  }
}


// Call functions
showPage(data, 1);
addPagination(data);