const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#body').value.trim();
  console.log(title, description)
    if (title && description) { 
        
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: { 'Content-Type': 'application/json' },
        
      });
     
      if (response.ok) {
         document.location.replace('/dashboard');
      } else {
        alert('Failed to create a post.');
      }
    }
  };

    
  document
  .querySelector('#submit')
  .addEventListener('click', loginFormHandler);