let user = prompt('Enter your login:', 'Your login');
const emailLenght = 6;
const passwordLenght = 5;
let emailUser = 'user@gmail.com';
let emailAdmin = 'admin@gmail.com';

if (user === emailUser || user === emailAdmin) {
    let password = prompt('Enter your password', 'Your password');
    if (user === emailUser && password === 'UserPass' || user === emailAdmin && password === 'AdminPass') {
        let changePaswAsk = confirm('Do you want to change your password?');
        if (changePaswAsk === false) {
            alert('You have failed the change.');
        } else if (changePaswAsk === true) {
            let password = prompt('Enter your old password', 'Your old password');
            if (user === emailUser && password === 'UserPass' || user === emailAdmin && password === 'AdminPass') {
                
                let newPassword = prompt('Enter new password', 'New password');
                if (newPassword.length < passwordLenght) {
                    alert('It\'s too short password. Sorry.');
                } else if (prompt('Enter new password again', 'Repeat new password') !== newPassword) {
                    alert('You wrote the wrong password.');
                } else {
                    alert('You have successfully changed your password.');
                }
            } else if (password === '' || password === null) {
                alert('Canceled.');
            } else {
                alert('Wrong password')
            }
        }
    } else if (password === '' || password === null) {
        alert('Canceled.');
    } else {
        alert('Wrong password')
    }
} else if (user === '' || user === null) {
    alert('Canceled.');
} else if (user.length < emailLenght) {
    alert('I don\'t know any emails having name length less than 6 symbols');
} else {
    alert('I don’t know you');
}
