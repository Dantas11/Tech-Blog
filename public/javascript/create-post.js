// Define an asynchronous function to handle the click event of the "Create new post" button
async function createPostHandler(event) {
    event.preventDefault(); 
    document.location.replace('/dashboard/new')
}

document.querySelector('#create-new-post').addEventListener('click', createPostHandler);