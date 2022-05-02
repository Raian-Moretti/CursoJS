window.onload = function(){
    var nome = prompt('Insert your name');

    var email = prompt('Insert your email');
    
    var salario = prompt('Insert your salary');
    salario = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(salario);
    

    document.querySelector('.title').innerHTML = `Website developed by ${nome}`;
    document.querySelector('.description').innerHTML = `email: ${email.toLowerCase()}`;
    document.querySelectorAll('.description')[1].innerHTML = `salary: ${salario}`;
    
};
