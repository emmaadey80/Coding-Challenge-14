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
    
    // creating the resolve button
    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.classList.add('resolve-btn');
    
    // adding an event listener to the resolve button
    resolveButton.addEventListener('click', function() {
        ticket.remove(); // removes the ticket when its clicked
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

// task 2 test cases
createSupportTicket('Harley Davidson', 'Cannot login to account', 'High'); // output: Harley Davidson, Cannot login to account, High
createSupportTicket('Elton John', 'Order not received', 'Low'); // output: Elton John, Order not received, Low
createSupportTicket('Jeff Buckley', 'Payment issue', 'Medium'); // output: Jeff Buckley, Payment issue, Medium