if (typeof window === 'undefined'){
    var Piece = require("./piece");
    var Board = require("./board");
    var Game = require("./game");
  }

  function AiPlayer(name = "Bill", color = "white", board) {
    this.name = name;
    this.color = color;
    this.board = board;
  }

  AiPlayer.prototype.makeMove() {
    let moves = this.board.validMoves(this.color);
  }