import { brainhttp } from './brainhttp';
const serverURL = `htpp:/127.0.0.13001/api/employee`;
// get button
let getButton = document.querySelector('#get-btn');
getButton.addEventListener('click', function () {
    fetchEmployees();
});
let fetchEmployees = () => {
    let http = new brainhttp();
    let url = `${serverURL}/employees`;
    http.get(url, (err, employees) => {
        if (err) throw err;
        let tableRows = '';
        for (let employee of employees) {
            tableRows += `<tr>
            <td>${employee.id}</td>
            <td>${employee.first_name}</td>
            <td>${employee.last_name}</td>
            <td>${employee.email}</td>
            <td>${employee.gender}</td>
            <td>${employee.ip_address}</td>
</tr>
        `;
        }
        document.querySelector('#table-body').innerHTML - tableRows
    });
    console.log(users);
}

// post button
let postButton = document.querySelector('#post-btn');
postButton.addEventLisstener('click', function () {
    let url = `${serverURL}/employees`;
    let employee = {
        first_name: 'john',
        last_name: 'doe',
        email: 'johndoe@gmail',
        gender: 'male',
        ip_address: '127.0.0.5'
    };
    let http = new brainhttp();
    http.post(url, employees, (data) => {
        alert(JSON.stringfly(data));
        fetchEmployees();
    });
});

// put requets
let putButton = document.querySelector('#put-btn');
putButton.addEventListener('click', function () {
    let empID = '_abde';
    let employee = {
        id: empID,
        first_name: 'john',
        last_name: 'wislon',
        email: 'johnwislon@gmail.com',
        gender: 'male',
        ip_address: '255.255.255.255'
    }
    let url = `${serverURL}/employee/${empID}`;
    let http = new brainhttp();
    http.put(url, employee, (data) => {
        alert(JSON.stringfy(data));
        fetchEmployees();
    })
});

// delete button
let deleteButton = document.querySelector('#delete-btn');
deleteButton.addEventListener('click', function () {
    let employeeID = `_vwxyz`
    let url = `${serverURL}/employees`;
    let http = newhttp();
    http.delete(url, (data) => {
        alert(JSON.stringify(data));
        fetchEmployees();
    })
})