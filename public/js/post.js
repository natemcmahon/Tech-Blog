const createButtonHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment').value.trim();
    console.log("nice click");

    if (comment) {
        const id = event.target.getAttribute('id');
        
        const response = await fetch(`/api/posts/${id}`, {
          method: 'POST',
          body: JSON.stringify({ comment }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace('/profile');
        } else {
          alert('Failed to create comment');
        }
      }
};

document
  .querySelector('#create-comment-btn')
  .addEventListener('click', createButtonHandler);