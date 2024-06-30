# backend-repo

# backend-repo

## Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/backend-repo.git
    cd backend-repo
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up Firebase:
    - Place your Firebase service account key in the `config` folder as `serviceAccountKey.json`.

4. Start the server:
    ```bash
    npm start
    ```

## Endpoints
### Update User Data
- **URL:** `/api/users/update`
- **Method:** `POST`
- **Body:**
    ```json
    {
      "userId": "string",
      "data": {
        // user data
      }
    }
    ```
- **Response:**
    ```json
    {
      "message": "User data updated successfully"
    }
    ```

### Fetch User Data
- **URL:** `/api/users/fetch/:userId`
- **Method:** `GET`
- **Response:**
    ```json
    {
      // user data
    }
    ```

## Middleware
- `authMiddleware`: Validates the request token. Ensure to include an `Authorization` header with each request.
