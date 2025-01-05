function getRandNumb(min, max) {
  return Math.floor(Math.random() * (max - min) + max);
}

const app = Vue.createApp({
  data() {
    return {
      healthPlayer: 100,
      healthMonster: 100,
      round: 0,
      isGameOver: false,
      whoWon: null,
      log: [],
    };
  },
  methods: {
    attackToMonster() {
      this.round++;
      let attackValue = getRandNumb(5, 10);
      this.healthMonster -= attackValue;
      this.attackToPlayer();
      this.addLogMessage("Player", "Attack", attackValue);
    },
    attackToPlayer() {
      let attackValue = getRandNumb(8, 12);
      this.healthPlayer -= attackValue;
      this.addLogMessage("Monster", "Attack", attackValue);
    },
    attackToMonsterSpecial() {
      this.round++;
      let attackValue = getRandNumb(12, 20);
      this.healthMonster -= attackValue;
      this.attackToPlayer();
      this.addLogMessage("Player", "Special Attack", attackValue);
    },
    heal() {
      this.round++;
      let healValue = getRandNumb(12, 20);
      this.healthPlayer += healValue;
      if (this.healthPlayer >= 100) {
        this.healthPlayer = 100;
      }
      this.attackToPlayer();
      this.addLogMessage("Player", "Heal", healValue);
    },
    surrender() {
      this.whoWon = "monster";
    },
    restart() {
      this.healthPlayer = 100;
      this.healthMonster = 100;
      this.isGameOver = false;
      this.whoWon = null;
      this.round = 0;
    },
    addLogMessage(who, what, val) {
      this.log.unshift({
        who: who,
        what: what,
        val: val,
      });
    },
    logStyles(arg) {
      if (arg === "Attack") {
        return "attack";
      } else if (arg === "Special Attack") {
        return "special-attack";
      } else {
        return "heal";
      }
    },
  },
  computed: {
    healthbarPlayer() {
      return { width: this.healthPlayer + "%" };
    },
    healthbarMonster() {
      return { width: this.healthMonster + "%" };
    },
    canSpecialAttack() {
      return this.round % 3 !== 0;
    },
  },
  watch: {
    healthPlayer(val) {
      if (val <= 0) {
        this.isGameOver = true;
        this.whoWon = "monster";
      } else if (val <= 0 && this.healthMonster <= 0) {
        this.isGameOver = true;
        this.whoWon = "tie";
      }
    },
    healthMonster(val) {
      if (val <= 0) {
        this.isGameOver = true;
        this.whoWon = "player";
      } else if (this.healthPlayer <= 0 && val <= 0) {
        this.isGameOver = true;
        this.whoWon = "tie";
      }
    },
    isGameOver(val) {
      if (val) {
        this.healthPlayer = 0;
        this.healthMonster = 0;
      }
    },
  },
});

app.mount("#game");
