class Player {

    constructor(nickname) {
        this.nickname = nickname
    }

    getNickname() {
        return this.nickname
    }
}

const player1 = new Player('teste01')
console.log(player1.getNickname())