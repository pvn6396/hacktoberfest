<<<<<<< HEAD
console.log('Hello World!')
=======
let contributors = document.querySelectorAll('.card-text a')
contributors.forEach(con => {
    console.log(con.href)
    con.innerHTML += '<img style="width: 62px; margin-left: 12px" src="https://avatars.githubusercontent.com/'+ con.href.split('https://github.com/')[1] + '" />'
})
>>>>>>> 7cb6e7b55d8c2306ad4c8bbdde42f6083e6c6fdb
