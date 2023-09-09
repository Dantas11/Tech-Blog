// Define an asynchronous function to handle the submit event of the "Log In" form
async function loginFormHandler(event) {
    event.preventDefault(); 

    
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    
    if (username && password) {
        
        const response = await fetch('/api/users/login', {
            method: 'post', 
            body: JSON.stringify({ 
                username,
                password
            }),
            headers: { 
                'Content-Type': 'application/json'
            }
        });

       
        if (response.ok) {
           
            document.location.replace('/dashboard');
        } else { 
            if (response.status === 400) {
                alert('Invalid username/password. If not a member, please sign up!');
            } 
        }
    }
}


document.querySelector('.login-form').addEventListener('submit', loginFormHandler);