# user authentication using Node js
The purpose of this project is to complete the internshala task. This is an authentication app for users. Also, try to implement a password rest API along with login and registration
![Screenshot (17)](https://user-images.githubusercontent.com/77377184/206264860-44a83f28-7cc7-4abf-af84-3aba640c9b88.png)
![Screenshot (18)](https://user-images.githubusercontent.com/77377184/206264876-8548c7a4-25b5-49b7-b7f0-a8d116abba9a.png)
![Screenshot (19)](https://user-images.githubusercontent.com/77377184/206264894-a4d1de84-804b-4f47-94d2-3f2c6b0f83fc.png)

 ## Features ##
 * Login and register functionality.
 * reset password with json web token.
 
  ## Run Locally ##
 ### 1. Clone Repo ###
 ```
 $ git clone https://github.com/krishnadev7/internshalaTask1.git
 $ npm install
 ```
 
  ### 2. create a .env folder ###
  * create a .env folder inside root folder.
  
 ### 3.  Setup MongoDB ###
  * create a Atlas Cloud MongoDB database at [ https://cloud.mongodb.com ]
  * In .env file update MONGO_URI = mongodb+srv://your-db-connection
  * IN .env file update JWT_SEC = your secret key.

# API #
* for  Registering users = (http://localhost:8800/api/auth/register) `POST Method`
* for  Login  = (http://localhost:8800/api/auth/login) `POST Method`
* for  creating a new post = (http://localhost:8800/api/post) `POST Mehod`
* for  updating a post = (http://localhost:8800/api/post/:id) `PUT Method`
* getting all post = (http://localhost:8800/api/post) `GET Method`
* deleting post = (http://localhost:8800/api/post/:id) `DELETE Method`
* for liking and disliking a post = (http://localhost:8800/api/post/:id/like) `PUT Method`
* for commenting a post = (http://localhost:8800/api/post/:id/comment) `PUT Method`
