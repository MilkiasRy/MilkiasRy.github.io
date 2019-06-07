let url = 'https://example.com/profile'; 
let data = {
    username: 'example'
};
fetch(url, {
method: 'POST', // or 'PUT' body: JSON.stringify(data), headers:{
'Content-Type': 'application/json' }
}
).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response))) .catch(error => console.error('Error:', error));