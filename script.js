const sounds = ['Hihatb1', 'Hihatopen', 'Hihatopen3', 'BassDrum3b', 'FloortomA', 'MedtomB','SmalltomB','SnareB', 'CymbalcrashA', 'BassMonster', 'Buildupdrums', 'Wobbleback', 'Riddimbass', 'Neddiebass']

for (let i = 0; i < sounds.length; i++) {
    console.log(i)
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sounds[i]
    
    btn.addEventListener('mouseover', (e) => {
        stopSongs()

        document.getElementById(sounds[i]).play()
        
    })
    document.querySelector("#buttons").appendChild(btn)
}

function stopSongs() {
    for (let i = 0; i < sounds.length; i++){
        const song = document.getElementById(sounds[i]) 

        song.pause()
        song.currentTime = 0
    }

    }



