async function getStatusOfTheSite () {
    const webSitedata = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    if (!webSitedata.ok){
        throw new Error('Error message '+ webSitedata.status)
    }

     const dataFromWeb = webSitedata.json();

        return dataFromWeb;
}


getStatusOfTheSite()
.then(todo => {
    console.log('Getted Status ', todo)
})

.catch(error => {
    console.log('Error Status ', error.message)
});



async function getStatusOfTheUser () {
    const getUserData = await fetch('https://jsonplaceholder.typicode.com/users/1')

    if (!getUserData.ok){
      throw new Error('User status Error ' + getUserData.status)
    }
    const dataUser = getUserData.json();

    return dataUser;
}

getStatusOfTheUser()
.then(user => {
    console.log('User data', user)
})

.catch(userError => {
    console.log('User error', userError)
})