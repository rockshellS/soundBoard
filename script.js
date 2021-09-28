const sounds = ['Hihatb1', 'Hihatopen', 'Hihatopen3', 'BassDrum3b', 'FloortomA', 'MedtomB','SmalltomB','SnareB', 'CymbalcrashA']

for (let i = 0; i < sounds.length; i++) {
    console.log(i)
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sounds[i]
    
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        document.getElementById(sounds[i]).play()
        btn.removeEventListener("click")
    })
    document.querySelector("#buttons").appendChild(btn)
}