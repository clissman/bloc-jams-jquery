{
    album.songs.forEach( (song, index) => {
        let {title, duration} = song
        song.element = $(`
            <tr>
                <td>
                    <button>
                        <span class='song-number'>${index + 1}</span>
                        <span class='ion-play'></span>
                        <span class='ion-pause'></span>
                        <td>${title}</td>
                        <td>${duration}</td>
                    </button>
            </tr>
        `);
        
        song.element.on('click', () => {
            player.playPause(song)
        });

    $('#song-list').append(song.element)
    });
}

