const FormHandler = async (event) => {
    event.preventDefault();
  
    
    const description = document.querySelector('#body').value.trim();
    const post_id =  event.target.value
    console.log(description)
    console.log(post_id)
    if (description) { 
        
      const response = await fetch('/api/posts/comments', {
        method: 'POST',
        body: JSON.stringify({ description, post_id }),
        headers: { 'Content-Type': 'application/json' },
        
      });
     
      if (response.ok) {
        //  document.location.replace('/dashboard');
        console.log(response)
        res.status(200).json()
      } else {
        alert('Failed to create a post.');
      }
    }
  };

    
  document
  .querySelector('#submit')
  .addEventListener('click', FormHandler);