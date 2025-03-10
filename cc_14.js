// Task 2: Adding Support Tickets Dynamically

// function creating a new support ticket
function createSupportTicket(name, issueDescription, priorityLevel) {
    // create a div for the ticket
    const ticket = document.createElement('div');
    ticket.classList.add('ticket');
    
    // creating the customer name element
    const customerName = document.createElement('h3');
    customerName.textContent = name;
    
    // creating the issue description element
    const issueDescriptionElem = document.createElement('p');
    issueDescriptionElem.textContent = issueDescription;

    // creating the priority level 
    const priorityLabel = document.createElement('p');
    priorityLabel.textContent = `Priority: ${priorityLevel}`;
    priorityLabel.classList.add('priority-level');

    // Task 3: Converting NodeList to Arrays for Bulk Updates

    // (adding if priority is high, add a class to change the border color)
    if (priorityLevel === 'High') {
        ticket.classList.add('high-priority-ticket'); // adds a class to the ticket div for border styling
    }
    
    // creating the resolve button
    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.classList.add('resolve-btn');
    
    // adding an event listener to the resolve button
    resolveButton.addEventListener('click', function(event) {
        ticket.remove(); // removes the ticket when its clicked
        event.stopPropagation(); // prevents the click event from bubbling up to the parent container
    });
    
    // append all elements to the ticket div
    ticket.appendChild(customerName);
    ticket.appendChild(issueDescriptionElem);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveButton);

    // get the ticket container and append the new ticket
    const ticketContainer = document.getElementById('ticketContainer');
    ticketContainer.appendChild(ticket);
}

// Task 3: Converting NodeList to Arrays for Bulk Updates
// highlights the high priority tickets
function highlightHighPriorityTickets() {
    // selecting all tickets with the "high-priority" class
    const highPriorityTickets = document.querySelectorAll('.high-priority-ticket');

    // converts nodeList to array
    const highPriorityTicketsArray = Array.from(highPriorityTickets);

    // loop through each ticket 
    highPriorityTicketsArray.forEach(ticket => {
        ticket.style.border = '2px solid red';  // adds a red border to the ticket div
    });
}
// Task 4: Implementing Event Bubbling and Ticket Resolution

// attaching an event listener to the ticket container when clicked
function setupTicketContainerEventListener() {
    const ticketContainer = document.getElementById('ticketContainer');

    // event listener for the container to log a message when each ticket is clicked
    ticketContainer.addEventListener('click', function(event) {
        console.log('A ticket was clicked!');
    });
}

// calling the function to set up event listener for event bubbling
setupTicketContainerEventListener();


// task 2 test cases
createSupportTicket('Harley Davidson', 'Cannot login to account', 'High'); // output: Harley Davidson, Cannot login to account, High
createSupportTicket('Jeff Buckley', 'Payment issue', 'Medium'); // output: Jeff Buckley, Payment issue, Medium
createSupportTicket('Elton John', 'Ordering navigation issue', 'Low'); // output: Elton John, Ordering navigation issue, Low

highlightHighPriorityTickets(); 





