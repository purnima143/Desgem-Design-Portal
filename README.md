![deslogo](https://user-images.githubusercontent.com/57852378/129236354-e7a178ea-b659-4726-b62a-cddf68f56d4b.png)

[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/makes-people-smile.svg)](https://forthebadge.com)

Today Developers around the world are making efforts to enhance user experience of using
application as well as to enhance the developer’s workflow of designing applications to
deliver projects and rollout change requests under strict timeline. Stacks can be used to build
web applications in the shortest span of time. The stacks used in web development are
basically the response of software engineers to current demands. They have essentially
adopted pre-existing frameworks (including JavaScript) to make their lives easier.

## Problem statement😟
- This project is to create design portal with a server and users to enable the users to see each other’s design work.
- To develop a platform where people can post their design shots and other users can likeunlike the post and can make the comment on the post.
- The project has user profile where we can see the number of design shots posted by the user,number of followers and number of people we follow.
- This project can play an important role in design creative field where students can get inspiration from other designer’s designs.

## Solution 💡
**DESGEM** is a self-promotion and social networking platform for digital designers and
creatives. It serves as a design portfolio platform and is one of the platforms for designers to
share their work online. We’re on a mission to build the world’s best community for creatives
to share, grow, and get hired. Desgem is the go-to resource for discovering and connecting
with designers and creative talent around the globe.

## Project Objective
- **Get Feedback:** To develop a feedback on the designs, so that they can improve on their designing skills.
- **User friendliness:** The project should be very easy to use enabling even a novice person to use it.

## Areas of Collaboration 👨‍🏭

Project Managers, Developers, and Designers would be collaborating on various domains like:

-   **UI Prototyping** with figma tool [figma design](https://www.figma.com/file/1gYZlafa8bUZu61ji10unF/Kurakoo?node-id=0%3A1).
    
-   **Front-End Development with ReactJS**
    
-   **Developing Backend APIs with NodeJS and MongoDB**
    
-   **Working on a NoSQL Database Management System**
    
-   **Working on a User-Experience rich platform for a Social Cause**
    

This would be an enriching experience for all Student Developers, Project Managers, and Designers.


## Technology Stack 🛠️

- **Coding Languages**: <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>

- **Tools & Technologies**: <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/> <img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/> <img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/> 


- **Project Management Tools**: <img alt="Trello" src="https://img.shields.io/badge/Trello%20-%23026AA7.svg?&style=for-the-badge&logo=Trello&logoColor=white"/> <img alt="GitHub" src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/> <img alt="Git" src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/> <img alt="Markdown" src="https://img.shields.io/badge/markdown-%23000000.svg?&style=for-the-badge&logo=markdown&logoColor=white"/>



## Flow of the site :computer:
Below is a basic idea as to how the website works. 
**Login & Signup screen:** For authentication we build a login and signup screen. After signin we redirect to home page and then you can log out also.
![image](https://user-images.githubusercontent.com/57852378/129234522-4cd02d03-35b9-405e-9d71-66d8a8bcf290.png)
![image](https://user-images.githubusercontent.com/57852378/129234575-ea4d6f94-28f1-4993-b8d0-eef32730736d.png)
**User Profile Page:** Here we can see the number of shots you posted and no. of followers and following you have.
Also we can update the your profile pic.
![image](https://user-images.githubusercontent.com/57852378/129234644-8530d90a-4e7c-40ec-b67e-2d4d9c788b8b.png)
We can visit other user’s profile and can follow unfollow his/her profile.
![image](https://user-images.githubusercontent.com/57852378/129234689-e08115d9-209c-4606-8a82-05be45e32f96.png)
**Create design shots:** Here we can upload our own design shots and let others give feedback on your designs.
![image](https://user-images.githubusercontent.com/57852378/129234751-ce7fe839-d2d9-4a47-8a5f-74b310be8881.png)
**Home page or feed page:** Here, we can see the posts posted by other designers and also like-unlike their posts. We can see other’s comment on the design shots and also make the comment on the posts.
![image](https://user-images.githubusercontent.com/57852378/129234820-4c7f3493-faf6-4800-9b70-d0d4f41634e0.png)
**Following shots:** This is the page where you can the post posted by your followings.
![image](https://user-images.githubusercontent.com/57852378/129234868-f2194158-b114-402e-ba80-06db27b613cb.png)

**MongoDB**
![image](https://user-images.githubusercontent.com/57852378/129234916-e19c185c-6ea7-49bf-9361-7a0d334ba86f.png)
![image](https://user-images.githubusercontent.com/57852378/129234936-b691894f-22a9-41da-80df-65ff49a9949b.png)


## Setup Guidelines
Clone the repository -
```
git clone https://github.com/purnima143/Kurakoo.git
```

### Backend

1. Run `cd server` on your CLI.

2. Create a `.env` file and paste the MONGO_URL, node environment and email for nodemailer in the given format

    ```
    MONGO_URL = <your_url>
    NODE_ENV = development
    USER_MAIL=<Enter your mail-id from where you want to send the mails>
    MAIL_PASSWORD=<password of the entered mail-id for the authentication>
    ```
     or

  For the MONGO_URL, We have added a string for the local mongoDB connection inside index.js  `   mongodb://localhost:27017/kurakooDB`

Note: See the .env.example file for further clarity

    _NOTE: To get the MONGO_URL, take a look at this article for reference [Connection String URI Format](https://docs.mongodb.com/manual/reference/connection-string/)_

3. Install the dependencies by running
    ```
    npm install
    ```

4. Run the server
    ```
    npm run server
    ```

    Link for the screenshots, how to setup backend locally are kept in
    [assets->backend](assets/backend) folder.

### Frontend

1. Run `cd client` on your CLI.

2. Install the dependencies by running
    ```
    npm install
    ```

3. Run the server
    ```
    npm start
    ```
_NOTE: To run the Frontend side of the application is recommended to run the backend server too._

## Start Frontend & Backend simultaneously

 1. Navigate to the root folder i.e.  Kurakoo.git

 2. Install the dependencies by running

    ```
    npm install
    ```

 3. Start Frontend & Backend simultaneously

    ```
    npm run dev
    ```
## Conclusion 😊
Desgem posts and ads are key ways to drive traffic to any designer or developers website as
sharing content is a great way to get readers as soon as you publish a new post. People talking
about the designs on the portal, helps designers in building brand awareness and credibility.
Designers have to engage themselves for their customers and followers to be engaged by
responding to comments and questions which can help in boosting up sales. Monitoring the
competition on this portal will be easy and will increase the awareness of the developer hence
aiding them in self- improvement at every stage.In conclusion, Desgem is a portal the enhances
the digital awareness of the people and provides them will appreciable opportunities.
