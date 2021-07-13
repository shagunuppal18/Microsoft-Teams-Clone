# Microsoft Team Clone

# Agile Mthodology 
https://www.canva.com/design/DAEkBWXw4BQ/G-zdjJgYr08On-_e7CCiJA/view?utm_content=DAEkBWXw4BQ&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton

# Technologies Used:
Node.js , React.js , Express.js , Socket.io

# Features added :
1. Home Page with create/join the room
2. Create a room (set a username)
3. Copying the link to clipboard 
4. Start the coversation before the meeting
5. 3 to 4 users video calling
6. Mute/ Unmute 
7. Audio on/off
8. Presenting screen
9. View and Send message in the meeting
10. Continue the conversation after the meeting
11. Leave the chatroom

# Folder Structure
- client -> Frontend (ReactJs)
- server -> Backend (NodeJs)

# Run Frontend
- Change current directory to /client
- Run command `npm install` - to install the dependencies
- Run command `npm run start` - to start the project

# Run Backend
- Change current directory to /server
- Run command `npm install` - to install the dependencies
- Run command `npm run start` - to start the project

# Details about the code

# client -> src -> pages -> home.js
1. Function to handle the input button change event
2. Function to handle the button click event
3. UI of main home page

# client -> src -> pages -> video.js
1. Server URL
2. Configuration of the RTCPeerConnection [RTCPeerConnection represents a WebRTC connection between the local computer and a remote peer]
3. Function to handle the click event to start the video/audio functionality of the room
4. Function to get all the required permissions
5. Prompts the user for permission to use a video media
6. Prompts the user for permission to use a audio media
7. Check availabilty for the Display Screen - For screen sharing
8. Handle stream from the video or audio media
9. Function to set the state of the Component
10. Function to handle the video/audio stream of the user
11. Function to handle the screen share request
12. Function to handle the screen share stream
13. Function to handle the css change - when user added or removed from the chat application.
14. Function to handle the socket connection for audio, video, chat-messaging, user-left
15. Function to create black canvas for audio call
16. Function to handle the end call
17. Function to handle the add message in the list
18. Function to send the message through socket
19. Function to leave the room
20. Function to add the functionality - copy text 
21. Function to handle the click event - to join the room

# server -> app.js
-> Routes and Middleware

# server -> app.js
1. Initialise socket
2. Function to handle the cross site scription attacks

# server -> bin -> www
1. Get port from environment and store in Express.
2. Create HTTP server.
3. Listen on provided port, on all network interfaces.


# Screenshots :

# Home Page
![WhatsApp Image 2021-07-13 at 6 09 11 PM](https://user-images.githubusercontent.com/70344625/125455924-4895d322-a782-49af-9bf8-a65f218a268e.jpeg)

# setting the username
![WhatsApp Image 2021-07-13 at 6 09 11 PM (1)](https://user-images.githubusercontent.com/70344625/125456034-6415c9a0-ad70-422b-9601-2738fc99cdb7.jpeg)

# Before and after the meet
![WhatsApp Image 2021-07-13 at 6 09 11 PM (1)](https://user-images.githubusercontent.com/70344625/125456096-32c23c3c-463e-4074-a519-bfe0aff49c37.jpeg)

# Video conference
![WhatsApp Image 2021-07-13 at 6 09 11 PM (3)](https://user-images.githubusercontent.com/70344625/125456166-96c53973-7400-4f51-baa4-6ad1335282c4.jpeg)

# Chat room
![WhatsApp Image 2021-07-13 at 6 09 11 PM (4)](https://user-images.githubusercontent.com/70344625/125456366-36680575-1b65-4ffa-93d4-f699a9fdbdf0.jpeg)

