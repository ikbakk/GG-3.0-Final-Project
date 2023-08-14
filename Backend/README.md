# Backend

# Getting Started

Clone the repo:
`git clone https://github.com/ikbakk/GG-3.0-Final-Project.git`

cd to backend folder:

```bash
cd backend
```

run:

```bash
npm install
```

Then run the dev server

```bash
npm run dev
```

or with pnpm:

```bash
pnpm install
```

Then run the dev server:

```bash
pnpm dev
```

Then the server will run on port 3000 as default

## Environment Variables

example for `.env` file

```
NODE_ENV=production
PORT=80
DATABASE_URL=mongodb url
```

# Database structure

### Comments Collection

```
[
  {
    "id": <Mongodb ObjectId>,
    "videoID": <Mongodb ObjectId>
    "comment": string
    "username": string
    "timestamp": datetime(iso 8601)
  }
]
```

### Products Collection

```
[
  {
    "id": <Mongodb ObjectId>,
    "videoID": <Mongodb ObjectId>
    "title": string
    "urlProduct": string
    "price": number
  }
]
```

### Videos Collection

```
[
  {
    "id": <Mongodb ObjectId>,
    "title": string,
    "url": string,
  }
]
```

# API Structure

```mermaid
flowchart LR
    subgraph Routes
        direction LR
        subgraph Rc[index.ts]
          direction LR
          Rc1["/api/comments"]
          Rp1["/api/products"]
          Rs1["/api/search"]
          Rv1["/api/videos"]
        end
    end
    subgraph Controllers
        direction LR
        subgraph Cc[comments.ts]
            direction LR
            Cc1["getComments()"]
            Cc2["submitComment()"]
        end
        subgraph Cp[products.ts]
            direction LR
            Cp1["getProducts()"]
            Cp2["addProduct()"]

        end
        subgraph Cv[videos.ts]
            direction LR
            Cv1["getAllVideos()"]
            Cv2["addVideo()"]
        end
        subgraph Cs[searchedItems.ts]
            direction LR
            Cs1["searchVideos()"]
            Cs2["searchProducts()"]
        end
    end
    subgraph Services
        direction LR
        subgraph Sc[comments.ts]
            direction LR
            Sc1["fetchCommentsByVideoId()"]
            Sc2["createNewComment()"]
        end
        subgraph Sp[products.ts]
            direction LR
            Sp1["fetchProductByVideoId()"]
            Sp2["createNewProduct()"]
            Sp3["searchProductsByTitle()"]
        end
        subgraph Sv[videos.ts]
            direction LR
            Sv1["fetchAllVideos()"]
            Sv2["createNewVideo()"]
            Sv3["searchVideosByTitle()"]
        end
    end
    subgraph Models
        direction LR
        subgraph Mc[index.js]
            direction LR
            Mc1["`Comment Schema`"]
            Mp1["`Product Schema`"]
            Mv1["`Video Schema`"]
        end
    end

    Req([Requests]) --> Routes
    Routes --> Controllers
    Controllers --> Services
    Services --> Models

    Rc1 -- GET --> Cc1
    Rc1 -- POST --> Cc2
    Rp1 -- GET --> Cp1
    Rp1 -- POST --> Cp2
    Rv1 -- GET --> Cv1
    Rv1 -- POST --> Cv2
    Rs1 -- GET --> Cs1
    Rs1 -- GET --> Cs2
    Cc1 --> Sc1
    Cc2 --> Sc2
    Cp1 --> Sp1
    Cp2 --> Sp2
    Cv1 --> Sv1
    Cv2 --> Sv2
    Cs1 --> Sp3
    Cs2 --> Sv3
    Sc1 & Sc2 --> Mc1
    Sp1 & Sp2 & Sp3 --> Mp1
    Sv1 & Sv2 & Sv3 --> Mv1

```

##

# API Responses and Requests

## Comments

- Comment object
  ```
  {
    id: string,
    videoID: string,
    comment: string,
    username: string,
    timestamp: datetime(iso 8601)
  }
  ```

#### Get /api/comments

Returns all comments for particular video

- **URL Params**
  - **/:videoID**
    `videoID: string`
- **Data Params**
  None

- **Headers**
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```
    [
      {
        "status": "Success",
        "data": [{<comment object>}]
      }
    ]
    ```
- **Error Response:**
  - **Code:** 400
  - **Content:**
    ```
    {
      "status": "Failed",
      "message": "Video ID is required"
    }
    ```
    or
  - **Code:** 404
  - **Content:**
    ```
    {
      "status": "Failed",
      "message": "Video not found"
    }
    ```

#### Post /api/comments

Adds a new comment to a video

- **URL Params**
  - **/:videoID**
    `videoID: string`
- **Data Params**

  - **Body:**
    ```
    {
      comment: string,
      username: string
    }
    ```

- **Headers**
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```
    {
      status: "success",
      data: {<comment object>}
    }
    ```
- **Error Response:**

  - **Code:** 400
  - **Content:**

    ```
    {
      status: "Failed" ,
      message: "Missing required attributes"
    }
    ```

    or

  - **Code:** 404
  - **Content:**
    ```
    {
      status: "Failed",
      message: "Video not found"
    }
    ```

## Products

- Product object
  ```
  {
    id: string,
    videoID: string,
    title: string,
    urlProduct: string,
    price: number
  }
  ```

#### Get /api/products

Returns all products for particular video

- **URL Params**
  - **/:videoID**
    `videoID: string`
- **Data Params**
  None

- **Headers**
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```
    [
      {
        "status": "Success",
        "data": [{<product object>}]
      }
    ]
    ```
- **Error Response:**
  - **Code:** 400
  - **Content:**
    ```
    {
      "status": "Failed",
      "message": "Video ID is required"
    }
    ```
    or
  - **Code:** 404
  - **Content:**
    ```
    {
      "status": "Failed",
      "message": "Video not found"
    }
    ```

#### Post /api/products

Adds a new product to a video

- **URL Params**
  - **/:videoID**
    `videoID: string`
- **Data Params**

  - **Body:**
    ```
    {
      title: string,
      urlProduct: string,
      price: number
    }
    ```

- **Headers**
  Content-Type: application/json
- **Success Response:**
  - **Code:** 201
  - **Content:**
    ```
    {
      "status": "Success",
    }
    ```
- **Error Response:**
  - **Code:** 400
  - **Content:**
    ```
    {
      "status": "Failed",
      "message": "Video ID is required"
    }
    ```
    or
  - **Code:** 404
  - **Content:**
    ```
    {
      "status": "Failed",
      "message": "Video not found"
    }
    ```

#### Get /api/search/products

Returns products that contain query parameter in their title

- **URL Params**
  - **Query Params:**
    ```
    {
      title: string
    }
    ```
- **Data Params**
  None
- **Headers**
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```
      {
        "status": "Success",
        "data": [{<product object>}]
      }
    ```
- **Error Response:**
  - **Code:** 400
  - **Content:**
    ```
    {
      "status": "Failed",
      "message": "Title is required"
    }
    ```

## Videos

- Video object

  ```
  {
    id: string,
    title: string,
    url: string
  }
  ```

#### Get /api/videos

Returns all videos

- **URL Params**
  None
- **Data Params**
  None
- **Headers**
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```
    {
      "status": "Success",
      "data": [{<video object>}]
    }
    ```

#### Post /api/videos

Adds a new video to a video

- **URL Params**
  None
- **Data Params**

  - **Body:**
    ```
    {
      title: string,
      url: string
    }
    ```

- **Headers**
  Content-Type: application/json
- **Success Response:**
  - **Code:** 201
  - **Content:**
    ```
    {
      "status": "Success",
    }
    ```
- **Error Response:**
  - **Code:** 400
  - **Content:**
    ```
    {
      "status": "Failed",
      "message": "Missing required attributes"
    }
    ```

#### Get /api/search/videos

Returns videos that contain query parameter in their title

- **URL Params**
  - **Query Params:**
    ```
    {
      title: string
    }
    ```
- **Data Params**
  None
- **Headers**
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```
    {
      "status": "Success",
      "data": [{<video object>}]
    }
    ```
- **Error Response:**
  - **Code:** 400
  - **Content:**
    ```
    {
      "status": "Failed",
      "message": "Title is required"
    }
    ```
