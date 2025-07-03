class WebData {

    async getStatusOfTheSite () {
    const webSitedata = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    if (!webSitedata.ok){
        throw new Error('Error message '+ webSitedata.status)
    }

     const dataFromWeb = webSitedata.json();

        return dataFromWeb;
}

}

const webData = new WebData;
webData.getStatusOfTheSite()
 .then(data => console.log('Web site data response', data))
 .catch(error => console.log('error', error));
 

class UserData {
    async getStatusOfTheUser () {
    const getUserData = await fetch('https://jsonplaceholder.typicode.com/users/1')

    if (!getUserData.ok){
      throw new Error('User status Error ' + getUserData.status)
    }
    const dataUser = getUserData.json();

    return dataUser;
}

}

const getUserdata = new UserData;
getUserdata.getStatusOfTheUser()
 .then(userData => console.log('User data', userData))
 .catch(userError => console.log('User data Error', userError))