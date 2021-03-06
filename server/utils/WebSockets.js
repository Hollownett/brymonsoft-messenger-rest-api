class WebSockets {
  users = [];
  connection(client) {
    //fire event when the chat rom is disconnected
    client.on("disconnect", () => {
      this.users = this.users.filter((user) => user.soketId !== client.id);
    });
    //add dentity of user mapped to the socket id
    client.on("identity", (userId) => {
      this.users.push({
        socketId: client.id,
        userId: userId,
      });
    });
    //subscribe person to chat & other user as well
    client.on("subscribe", (room, otherUserId = "") => {
      this.subscribeOtherUser(room, otherUserId);
      client.join(room);
    });
    //mute chat room
    client.on("unsubscribe", (room) => {
      client.leave(room);
    });
  }

  subscribeOtherUser(room, otherUserId) {
    const userSockets = this.users.filter(
      (user) => user.userId === otherUserId
    );
    userSockets.map((userInfo) => {
      const socketConnection = global.io.sokets.connected(userInfo.soketId);
      if (socketConnection) {
        socketConnection.join(room);
      }
    });
  }
}

export default new WebSockets();
