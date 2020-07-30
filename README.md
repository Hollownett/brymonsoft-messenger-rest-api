### Install app

1. Download the archive or clone the git repository
2. Open a terminal in the root folder of the project and enter the command

```brew
    nmp install

```

3.  enter in terminal command

```brew
    npm start

```

### App srtart on http://localhost:3000

### Docker

1.

```brew
docker-compose build
```

2.

```brew
docker-compose up
```

### API routes for Users

1. Add new user (method POST) http://localhost:3000/users

To create new user, we need to POST some JSON containing the details and configuration options.

Request body (JSON):

```json
{
  "firstName": "Platon",
  "lastName": "Aristocl",
  "type": "consumer",
  "phoneNumber": "+375447902341",
  "profileImage": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fum.plus%2Fwp-content%2Fuploads%2F2018%2F02%2F1-2.jpg&imgrefurl=https%3A%2F%2Fum.plus%2F2018%2F02%2F16%2Fwomen%2F&tbnid=KCqz_eHqdiwNEM&vet=12ahUKEwj_9rP-nfTqAhVQ5IUKHbaJBi0QMygGegUIARDZAQ..i&docid=XMSiavD1iFKHCM&w=740&h=491&q=%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0&ved=2ahUKEwj_9rP-nfTqAhVQ5IUKHbaJBi0QMygGegUIARDZAQ"
}
```

type shows the user group, it can be a "consumer" , "support" or "bot"

response (JSON):

```json
{
  "success": true,
  "user": {
    "firstName": "Platon",
    "lastName": "Aristocl",
    "phoneNumber": "+375447902341",
    "profileImage": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fum.plus%2Fwp-content%2Fuploads%2F2018%2F02%2F1-2.jpg&imgrefurl=https%3A%2F%2Fum.plus%2F2018%2F02%2F16%2Fwomen%2F&tbnid=KCqz_eHqdiwNEM &vet=12ahUKEwj_9rP-nfTqAhVQ5IUKHbaJBi0QMygGegUIARDZAQ..i&docid=XMSiavD1iFKHCM&w=740&h=491&q=%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0&ved=2ahUKEwj_9rP-nfTqAhVQ5IUKHbaJBi0QMygGegUIARDZAQ",
    "type": "consumer",
    "_id": "cf0bce622ef54ed0a14bccd64ccbe397",
    "createdAt": "2020-07-30T05:35:00.302Z",
    "updatedAt": "2020-07-30T05:35:00.302Z",
    "v": 0
  }
}
```

2. Get all users (method GET) http://localhost:3000/users/

   response (JSON): array of users

   ```json
   {
     "success": true,
     "users": [
       {
         "_id": "3e60d198d8d04d7fafc5e8637709da26",
         "firstName": "John",
         "lastName": "Doe",
         "phoneNumber": "+375447902341",
         "profileImage": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fum.plus%2Fwp-content%2Fuploads%2F2018%2F02%2F1-2.jpg&imgrefurl=https%3A%2F%2Fum.plus%2F2018%2F02%2F16%2Fwomen%2F&tbnid=KCqz_eHqdiwNEM&vet=12ahUKEwj_9rP-nfTqAhVQ5IUKHbaJBi0QMygGegUIARDZAQ..i&docid=XMSiavD1iFKHCM&w=740&h=491&q=%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0&ved=2ahUKEwj_9rP-nfTqAhVQ5IUKHbaJBi0QMygGegUIARDZAQ",
         "type": "consumer",
         "createdAt": "2020-07-29T01:51:53.214Z",
         "updatedAt": "2020-07-29T01:51:53.214Z",
         "**v": 0
       },
       {
         "_id": "e7353398d7914a2c99afae5b8c6cea64",
         "firstName": "Bob",
         "lastName": "Bobovski",
         "phoneNumber": "+3754411112222",
         "profileImage": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fum.plus%2Fwp-content%2Fuploads%2F2018%2F02%2F1-2.jpg&imgrefurl=https%3A%2F%2Fum.plus%2F2018%2F02%2F16%2Fwomen%2F&tbnid=KCqz_eHqdiwNEM&vet=12ahUKEwj_9rP-nfTqAhVQ5IUKHbaJBi0QMygGegUIARDZAQ..i&docid=XMSiavD1iFKHCM&w=740&h=491&q=%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0&ved=2ahUKEwj_9rP-nfTqAhVQ5IUKHbaJBi0QMygGegUIARDZAQ",
         "type": "consumer",
         "createdAt": "2020-07-29T03:06:12.009Z",
         "updatedAt": "2020-07-29T03:06:12.009Z",
         "**v": 0
       }
     ]
   }
   ```

3. Search user by option (method GET) http://localhost:3000/users/searchUser/

   Query parameters:

   - id - search for a user by his id
   - phoneNumber - search for a user by his phone number
   - lastName - search for a user by his last name
   - firstName - search for a user by his first name
   - fullName - search for a user by his full name

   response (JSON):

   ```json
   {
     "success": true,
     "user": {
       "_id": "3e60d198d8d04d7fafc5e8637709da26",
       "firstName": "John",
       "lastName": "Doe",
       "phoneNumber": "+375447902341",
       "profileImage": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fum.plus%2Fwp-content%2Fuploads%2F2018%2F02%2F1-2.jpg&imgrefurl=https%3A%2F%2Fum.plus%2F2018%2F02%2F16%2Fwomen%2F&tbnid=KCqz_eHqdiwNEM&vet=12ahUKEwj_9rP-nfTqAhVQ5IUKHbaJBi0QMygGegUIARDZAQ..i&docid=XMSiavD1iFKHCM&w=740&h=491&q=%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0&ved=2ahUKEwj_9rP-nfTqAhVQ5IUKHbaJBi0QMygGegUIARDZAQ",
       "type": "consumer",
       "createdAt": "2020-07-29T01:51:53.214Z",
       "updatedAt": "2020-07-29T01:51:53.214Z",
       "**v": 0
     }
   }
   ```

4. Delete user (method DELETE) http://localhost:3000/users/":userId"

   Path parameters:

   - userId - user ID

   delete user by his ID
   response (JSON):

   ```json
   {
     "success": true,
     "message": "0 users was deleted"
   }
   ```

5. login user by his ID (method POST) http://localhost:3000/login/:userId

   Path parameters:

   - userId - user ID

   using JWT authentication tokens

   response (JSON):

   ```json
   {
     "success": true,
     "authorization": "authToken"
   }
   ```

### API routes for chat rooms

1.  Create a new chat room(method POST) http://localhost:3000/room/initiate

    This is a protected route. A token is required in the headers:

    - key = "authorization"
    - value ="Bearer authToken"

    request body:

    ```json
    {
      "userIds": ["5bcc32d3ec394aed8285daee2fdec4b3"],
      "type": "consumer-to-consumer"
    }
    ```

userIds - an array of users to be added to the chat room
type - room type can be "consumer-to-support" or "consumer-to-consumer" or "consumer-to-bot"

response (JSON) :

```json
{
  "success": true,
  "chatRoom": {
    "isNew": false,
    "message": "retrieving an old chat room",
    "chatRoomId": "55ebabe69f5f4100bbbf762b1559b96c",
    "type": "consumer-to-consumer"
  }
}
```

isNew - means if the room was created earlier

2. Get conversation list in chat room(method GET) http://localhost:3000/room/

   This is a protected route. A token is required in the headers:

   - key = "authorization"
   - value ="Bearer authToken"

response (JSON): conversation list sorted by last message post date

```json
{
  "success": true,
  "conversation": [
    {
      "_id": "55ebabe69f5f4100bbbf762b1559b96c",
      "messageId": "abd9513e1ebe4cadb597a2b9d43dcb62",
      "chatRoomId": "55ebabe69f5f4100bbbf762b1559b96c",
      "message": {
        "messageText": "3. new room created"
      },
      "type": "text",
      "postedByUser": {
        "_id": "3e60d198d8d04d7fafc5e8637709da26",
        "firstName": "John",
        "lastName": "Doe",
        "phoneNumber": "+375447902341",
        "profileImage": "wedasdasdsdwe3q1",
        "type": "consumer",
        "createdAt": "2020-07-29T01:51:53.214Z",
        "updatedAt": "2020-07-29T01:51:53.214Z",
        "__v": 0
      },
      "readByRecipients": [
        {
          "readAt": "2020-07-30T04:15:54.675Z",
          "readByUserId": "3e60d198d8d04d7fafc5e8637709da26",
          "readByUser": [
            {
              "_id": "3e60d198d8d04d7fafc5e8637709da26",
              "firstName": "John",
              "lastName": "Doe",
              "phoneNumber": "+375447902341",
              "profileImage": "wedasdasdsdwe3q1",
              "type": "consumer",
              "createdAt": "2020-07-29T01:51:53.214Z",
              "updatedAt": "2020-07-29T01:51:53.214Z",
              "__v": 0
            }
          ]
        }
      ],
      "roomInfo": [
        [
          {
            "_id": "5bcc32d3ec394aed8285daee2fdec4b3",
            "firstName": "Bob",
            "lastName": "Bobovski",
            "phoneNumber": "+3754411112222",
            "profileImage": "imageUrl",
            "type": "consumer",
            "createdAt": "2020-07-29T23:51:19.951Z",
            "updatedAt": "2020-07-29T23:51:19.951Z",
            "__v": 0
          }
        ],
        [
          {
            "_id": "3e60d198d8d04d7fafc5e8637709da26",
            "firstName": "John",
            "lastName": "Doe",
            "phoneNumber": "+375447902341",
            "profileImage": "wedasdasdsdwe3q1",
            "type": "consumer",
            "createdAt": "2020-07-29T01:51:53.214Z",
            "updatedAt": "2020-07-29T01:51:53.214Z",
            "__v": 0
          }
        ]
      ],
      "createdAt": "2020-07-30T04:20:23.598Z"
    }
  ]
}
```

roomInfo contains array of users in the chat room

3. Send message to chat room(method POST) http://localhost:3000/room/:chatRoomId/message

   This is a protected route. A token is required in the headers:

   - key = "authorization"
   - value ="Bearer authToken"

   Path parameters:

   - chatRoomId - chat room ID

   Request body (JSON):

   ```json
   {
     "messageText": "3. new room created"
   }
   ```

   sdssd
   response (JSON):

```json
{
  "success": true,
  "post": {
    "_id": "55ebabe69f5f4100bbbf762b1559b96c",
    "postId": "6e0781a0887f4fa6a90d7e487b39ef4f",
    "chatRoomId": "55ebabe69f5f4100bbbf762b1559b96c",
    "message": {
      "messageText": "3. new room created"
    },
    "type": "text",
    "postedByUser": {
      "_id": "3e60d198d8d04d7fafc5e8637709da26",
      "firstName": "John",
      "lastName": "Doe",
      "phoneNumber": "+375447902341",
      "profileImage": "wedasdasdsdwe3q1",
      "type": "consumer",
      "createdAt": "2020-07-29T01:51:53.214Z",
      "updatedAt": "2020-07-29T01:51:53.214Z",
      "**v": 0
    },
    "readByRecipients": [
      {
        "readAt": "2020-07-30T05:33:54.215Z",
        "readByUserId": "3e60d198d8d04d7fafc5e8637709da26"
      }
    ],
    "chatRoomInfo": [
      {
        "_id": "3e60d198d8d04d7fafc5e8637709da26",
        "firstName": "John",
        "lastName": "Doe",
        "phoneNumber": "+375447902341",
        "profileImage": "wedasdasdsdwe3q1",
        "type": "consumer",
        "createdAt": "2020-07-29T01:51:53.214Z",
        "updatedAt": "2020-07-29T01:51:53.214Z",
        "**v": 0
      },
      {
        "_id": "5bcc32d3ec394aed8285daee2fdec4b3",
        "firstName": "Bob",
        "lastName": "Bobovski",
        "phoneNumber": "+3754411112222",
        "profileImage": "imageUrl",
        "type": "consumer",
        "createdAt": "2020-07-29T23:51:19.951Z",
        "updatedAt": "2020-07-29T23:51:19.951Z",
        "__v": 0
      }
    ],
    "createdAt": "2020-07-30T06:19:41.128Z",
    "updatedAt": "2020-07-30T06:19:41.128Z"
  }
}
```

         "postedByUser" - describes the user who sent the message
         "readByRecipients" - describes who read the message
         "chatRoomInfo" - contains information about chat room users

4.  Get chat room by chat rooms ID (method GET) http://localhost:3000/room/:chatRoomId/?page=0&limit=2

    This is a protected route. A token is required in the headers:

    - key = "authorization"
    - value ="Bearer authToken"

    Path parameters:

    - chatRoomId - chat room ID

    Query parameters:

    - page: conversation page
    - limit: the number of last chat room messages that will be sent by the server in response

response (JSON):

      ```json
      {
        "success": true,
        "conversation": [
          {
            "_id": "abd9513e1ebe4cadb597a2b9d43dcb62",
            "chatRoomId": "55ebabe69f5f4100bbbf762b1559b96c",
            "message": {
              "messageText": "3. new room created"
            },
            "postedByUser": {
              "_id": "3e60d198d8d04d7fafc5e8637709da26",
              "firstName": "John",
              "lastName": "Doe",
              "phoneNumber": "+375447902341",
              "profileImage": "wedasdasdsdwe3q1",
              "type": "consumer",
              "createdAt": "2020-07-29T01:51:53.214Z",
              "updatedAt": "2020-07-29T01:51:53.214Z",
              "__v": 0
            },
            "readByRecipients": [
              {
                "readAt": "2020-07-30T04:15:54.675Z",
                "readByUserId": "3e60d198d8d04d7fafc5e8637709da26"
              }
            ],
            "type": "text",
            "createdAt": "2020-07-30T04:20:23.598Z",
            "updatedAt": "2020-07-30T04:20:23.598Z",
            "__v": 0
          }
        ],
        "users": [
          {
            "_id": "3e60d198d8d04d7fafc5e8637709da26",
            "firstName": "John",
            "lastName": "Doe",
            "phoneNumber": "+375447902341",
            "profileImage": "wedasdasdsdwe3q1",
            "type": "consumer",
            "createdAt": "2020-07-29T01:51:53.214Z",
            "updatedAt": "2020-07-29T01:51:53.214Z",
            "__v": 0
          },
          {
            "_id": "5bcc32d3ec394aed8285daee2fdec4b3",
            "firstName": "Bob",
            "lastName": "Bobovski",
            "phoneNumber": "+3754411112222",
            "profileImage": "imageUrl",
            "type": "consumer",
            "createdAt": "2020-07-29T23:51:19.951Z",
            "updatedAt": "2020-07-29T23:51:19.951Z",
            "__v": 0
          }
        ]
      }
      ```

    ```
    сhat rooms sorted by last message post date

    ```

5.  Mark message as read (method PUT) http://localhost:3000/room/:chatRoomId/mark-read

    This is a protected route. A token is required in the headers:

    - key = "authorization"
    - value ="Bearer authToken"

    Path parameters:

    - chatRoomId - chat room ID

reeponse (JSON):

```json
{
  "success": true,
  "data": {
    "n": 0,
    "nModified": 0,
    "opTime": {
      "ts": "6855160497570840577",
      "t": 3
    },
    "electionId": "7fffffff0000000000000003",
    "ok": 1,
    "$clusterTime": {
      "clusterTime": "6855160497570840577",
      "signature": {
        "hash": "zXlqMMaEvMhT0g2H2BD1jN9SkK0=",
        "keyId": "6853050410203086851"
      }
    },
    "operationTime": "6855160497570840577"
  }
}
```

modify readByRecipients field in database and returns the number of fields changed

6. Delete chat room by ID (method DELETE) http://localhost:3000/delete/room/:chatRoomId

delete chat room by chat room ID

Path parameters:

- chatRoomId - chat room ID

response (JSON):

```json
{
  "success": true,
  "message": "Chat room deleted",
  "deletedRoomsCount": 1,
  "deletedMessagesCount": 2
}
```

7. Delete message by ID (method DELETE) http://localhost:3000/delete/message/:messageId

delete message in chat room by message id

Path parameters:

- chatRoomId - chat room ID

response (JSON):

```json
{
  "success": true,
  "deletedMessagesCount": 1
}
```
