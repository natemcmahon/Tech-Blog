const editButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({title, content})
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to edit post');
      }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete post');
      }
    }
};

document
  .querySelector('.edit-button')
  .addEventListener('click', editButtonHandler);

document
  .querySelector('.delete-button')
  .addEventListener('click', delButtonHandler);