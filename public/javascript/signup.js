// Define an asynchronous function to handle the signup form submission
async function signupFormHandler(event) {
    event.preventDefault(); 

    
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    
    if (username && password) {
        
        const response = await fetch('/api/users', {
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
          
            alert(response.statusText);
        }
    }
}

// Add a submit event listener to the signup form that calls the signupFormHandler function when the form is submitted
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);