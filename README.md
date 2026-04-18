# 🍲 Recipes API

## 📌 Project Description

This is a RESTful API for managing recipes built using **Node.js**, **Express.js**, and **MongoDB (Mongoose)**.
It allows users to perform full CRUD (Create, Read, Update, Delete) operations on recipes.

The project follows the **MVC (Model-View-Controller)** architecture and includes proper validation and error handling.

---

## 🚀 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Postman (for API testing)

---

## 📁 Project Structure

```
project-root/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── recipeController.js
│
├── models/
│   └── recipe.js
│
├── routes/
│   └── recipeRoutes.js
│
├── server.js
├── .env
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone <your-repo-link>
cd <project-folder>
```

### 2. Install dependencies

```
npm install
```

### 3. Create `.env` file

Add the following:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4. Run the server

```
npm run dev
```

Server will run at:

```
http://localhost:5000
```

---

## 📌 API Endpoints

### 1. ➕ Create Recipe

* **Method:** POST
* **URL:** `/api/create-recipe`
* **Body:**

```
{
  "title": "Pasta",
  "ingredients": "Noodles, Sauce",
  "instructions": "Boil and mix",
  "cookingTime": 20
}
```

---

### 2. 📄 Get All Recipes

* **Method:** GET
* **URL:** `/api/get-recipe`

---

### 3. 🔍 Get Recipe by ID

* **Method:** GET
* **URL:** `/api/get-recipe/:id`

---

### 4. ✏️ Update Recipe

* **Method:** PUT
* **URL:** `/api/update-recipe/:id`
* **Body:** (any fields to update)

```
{
  "title": "Updated Pasta"
}
```

---

### 5. ❌ Delete Recipe

* **Method:** DELETE
* **URL:** `/api/delete-recipe/:id`

---

## ✅ Features

* Full CRUD functionality
* MongoDB integration using Mongoose
* Input validation
* Proper error handling
* Clean and structured code (MVC pattern)

---

## 🧪 API Testing

All endpoints are tested using **Postman**.

---

## ⚠️ Error Handling

* 400 → Bad Request (missing fields)
* 404 → Resource not found
* 500 → Internal server error

---

## 📌 Notes

* This project focuses only on Recipe CRUD operations.
* Authentication (login/register) is not included as it is not part of the requirements.

---
