# API docs
## ORM used: [Prisma](https://www.prisma.io/docs)
- The default route gives the list of all available records<br/>
  Request Type: **GET**
  <hr/>
- Route to get information regarding a specific book:

      /data?id=book_id
  Request Type: **GET**
  <hr/>
- Route to create a new record:

      /create
  Request body example:

      {
        "id": "book-1",
        "name": "The return of Sherlock Holmes",
        "author": "Rudyard Kipling",
        "description": "To be updated",
        "genres": ["horror", "adventure", "thriller"]
      }
  **Note:** All fields are mandatory<br/>
  Request Type: **PUT**
  <hr/>
- Route to update a specific record:

       /update?id=book_id
  Request body example:
  
      {
        "author": "Sir Arthur Conan Doyle",
        "description": "Mr. Sherlock Holmes solving cases",
      }
  **Note:** Only add those fields that need to be updated<br/>
  Request Type: PUT
  <hr/>
- Route to delete a specific record:

      /delete?id=book_id

  Request Type: **PUT**
  <hr/>
## To start the application

    yarn devStart
## To install dependencies

    yarn install
  Make sure to add your mongodb url in a .env file in the root directory
