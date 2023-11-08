# API docs
- The default route gives the list of all available records
  > Request Type: GET
- Route to get information regarding a specific book:

  > /data?id=book_id
  Request Type: GET
- Route to create a new record:

      /create
  Request body example:

      {
        "id": "id2",
        "name": "Harry Potter",
        "author": "Saptarshi Dey",
        "description": "Idk",
        "genres": ["horror", "adventure", "thriller"]
      }
  **Note:** Only all fields are mandatory
  > Request Type: PUT
- Route to update a specific record:

       /update?id=id4
  Request body example:
  
      {
        "author": "Rudyard Kipling",
        "description": "Tale of a boy who's lost in the jungle",
      }
  **Note:** Only add those fields that needs to be updated
  > Request Type: PUT

- Route to delete a specific record:
  > /delete?id=id4

PUT request:
