const updateButtonHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#post-content').value.trim();
  console.log(event);

    if (event.target) {
      const id = event.target.getAttribute('id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({title, content}),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace(`/profile`);
      } else {
        alert('Failed to edit post');
      }
    }
};

const delButtonHandler = async (event) => {
  event.preventDefault();
  console.log(event);  
  if (event.target) {
       const id = event.target.getAttribute('id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });

      console.log(response);
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete post');
      }
    }
};

document
  .querySelector('.update-button')
  .addEventListener('click', updateButtonHandler);

document
  .querySelector('.delete-button')
  .addEventListener('click', delButtonHandler);