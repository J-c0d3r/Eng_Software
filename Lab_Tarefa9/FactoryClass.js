const Player = (Nickname) => ({
    Nickname,
    getNickname: () => ({ Nickname })
})

const player1 = Player('teste01')
console.log(player1.getNickname())