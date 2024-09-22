document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const foodChoices = Array.from(document.querySelectorAll('input[name="food"]:checked'))
        .map(food => food.value)
        .join(', ');
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    // Validate at least 2 food choices
    if (foodChoices.split(', ').length < 2) {
        alert('Please select at least 2 food items.');
        return;
    }

    // Append data to the table
    const table = document.getElementById('dataTable').querySelector('tbody');
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${foodChoices}</td>
        <td>${state}</td>
        <td>${country}</td>
    `;

    // Clear the form fields
    document.getElementById('form').reset();
});
