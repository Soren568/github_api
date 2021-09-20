console.log('hello')

var gitButton = document.querySelector(".git-btn")

gitButton.addEventListener('click', function(e){
    e.preventDefault()
    fetch("https://api.github.com/users/soren568")
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        var userTxt = document.querySelector(".user-name")
        userTxt.innerHTML = data['login']
        var userImg = document.querySelector(".user-img")
        userImg.src = data.avatar_url
    })
})

var gitInput = document.querySelector(".git-user")
gitInput.addEventListener('submit', function(e){
    e.preventDefault()
    var form = new FormData(gitInput)
    console.log(gitInput)
    console.log(form)

    fetch('/git-user', {
        method: 'POST',
        body: form
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)

        fetch("https://api.github.com/users/" + data['user-input'])
        .then(resp => resp.json())
        .then(api_data =>{
            var userTxt = document.querySelector(".user-name")
            userTxt.innerHTML = api_data['login']
            var userImg = document.querySelector(".user-img")
            userImg.src = api_data.avatar_url
        })
    })
})