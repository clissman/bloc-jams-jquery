{
    $('button#play-pause').on('click', function() {
        player.playPause();
        $(this).attr('playState', player.playState);
    });

    $('button#next').on('click', () => changeSong(1));
    $('button#previous').on('click', () => changeSong(-1));

    function changeSong(direction) {
        if (player.playState !== 'playing') { return; }

        const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
        const newSongIndex = currentSongIndex + direction

        if (newSongIndex < 0 || newSongIndex >= album.songs.length) { return; }

        const newSong = album.songs[newSongIndex]
        player.playPause(newSong)
    }

    $('#time-control input').on('input', e => {
        player.skipTo(e.target.value);
    })

    setInterval(() => {
        if (player.playState !== 'playing') { return; }
        const currentTime = player.getTime();
        const duration = player.getDuration();
        const percent = (currentTime / duration) * 100;
        $('#time-control .current-time').text(currentTime);
        $('#time-control input').val(percent);
    }, 1000);
}

