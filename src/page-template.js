// create the manager section
const generateManager = managerData => {
    return `
    <section class="row justify-content-center">
    ${managerData
        .map(({ name, id, email, officeNumber }) => {
            return `
                <div class="card m-3 bg-light" style="width: 25rem;">
                    <div class="card-header bg-primary fs-3">
                        ${name}<br>
                        <i class="fas fa-user-tie"> Manager</i>
                    </div>
                    <div class="card mx-auto m-2" style="width: 20rem;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email: 
                                <a href = "mailto: ${email}">${email}</a>
                            </li>
                            <li class="list-group-item">Office Number: ${officeNumber}</li>
                        </ul>
                    </div>
                </div>
            `
        })
        .join('')}
    </section>
    `;
};

// create the engineer section
const generateEngineer = engineerData => {
    return `
    <section class="row justify-content-center">
    ${engineerData
        .map(({ name, id, email, github }) => {
            return `
                <div class="card m-3 bg-light" style="width: 25rem;">
                    <div class="card-header bg-danger fs-3">
                        ${name}<br>
                        <i class="fas fa-user-tie"> Manager</i>
                    </div>
                    <div class="card mx-auto m-2" style="width: 20rem;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email: 
                                <a href = "mailto: ${email}">${email}</a>
                            </li>
                            <li class="list-group-item">Github: 
                                <a href = "https://github.com/${github}" target = "_blank">${github}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            `
        })
        .join('')}
    </section>
    `;
};

// create the intern section
const generateIntern = internData => {
    return `
    <section class="row justify-content-center">
    ${internData
        .map(({ name, id, email, school }) => {
            return `
                <div class="card m-3 bg-light" style="width: 25rem;">
                    <div class="card-header bg-success fs-3">
                        ${name}<br>
                        <i class="fas fa-user-tie"> Manager</i>
                    </div>
                    <div class="card mx-auto m-2" style="width: 20rem;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email: 
                                <a href = "mailto: ${email}">${email}</a>
                            </li>
                            <li class="list-group-item">School: ${school}</li>
                        </ul>
                    </div>
                </div>
            `
        })
        .join('')}
    </section>
    `;
};

// export function to generate entire page
module.exports = employeeData => {
// filter page data by section
let managerData = employeeData.filter(manager => manager.role.includes('Manager'));
let engineerData = employeeData.filter(engineer => engineer.role.includes('Engineer'));
let internData = employeeData.filter(intern => intern.role.includes('Intern'));

return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" rel="stylesheet"/>
</head>

<body>
    <header>
        <h1 class="page-title text-white text-center bg-dark p-3">My Team</h1>
    </header>
    <!-- Manager Section -->
    <main class="container my-5">
        ${generateManager(managerData)}
        ${generateEngineer(engineerData)}
        ${generateIntern(internData)}
    </main>
    <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Matt </h3>
    </footer>
</body>
</html>
`;
};