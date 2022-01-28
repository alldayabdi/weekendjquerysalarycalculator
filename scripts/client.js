$(document).ready(readyNow);
let employees =[];

function newEmployee(employeeFirstName, employeeLastName, employeeID, employeeTitle, employeeAnnualSalary){
    const newEmployeeObj = {
        firstName : employeeFirstName,
        lastName: employeeLastName,
        employeeID: employeeID,
        title: employeeTitle,
        annualSalary: employeeAnnualSalary

    }
    employees.push(newEmployeeObj);
    return true;

} // end newEmployee

function readyNow(){
    console.log('Js is working!');
   $('#submitButton').on('click', collectInfo);
}
function collectInfo(){
    //collect input values
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let employeeID = $('#iD').val();
    let title = $('#title').val();
    let annualSalary = $('#annualSalary').val();
    // call function passing input values through parameters
    newEmployee(firstName, lastName, employeeID, title, annualSalary);
    //empty inputs
    $('#firstName').val('');
    $('#lastName').val('');
    $('#iD').val('');
    $('#title').val('');
    $('#annualSalary').val('');

    displayEmployeeInfo();

}

function displayEmployeeInfo(){

    
}