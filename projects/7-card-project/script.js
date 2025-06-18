  const requestUrl = 'https://api.github.com/users/shivapareek'
    const xhr = new XMLHttpRequest()
    xhr.open('GET' , requestUrl)



     
    xhr.onreadystatechange = function (){
    // console.log(xhr.readyState);
    if (xhr.readyState === 4 ){
        const data = JSON.parse(this.responseText)
        const avatar = data.avatar_url
        const name = data.name
        const followers = data.followers
        const btn = data.html_url
        document.getElementById('avatar').src = avatar
        document.getElementById('name').innerHTML = name
        document.getElementById('followers').innerHTML = followers
        document.getElementById('btn').href = btn
        
       

    }
    }
    xhr.send()