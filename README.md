# Product API Documentation
### Overview
This API provides endpoints to manage a collection of products, including retrieving all products, querying products based on specific criteria, and creating new products. The API uses MongoDB for data storage.

## Endpoints
### Get All Products
**Endpoint:** `GET /`
**Description:** Retrieves all products from the database.

*Response:*
`200 OK` - Returns an array of all products.
```
[
  {
    "_id": "60c72b2f5f1b2c001f8e4b8b",
    "name": "Product 1",
    "price": 29.99,
    "company": "Company A",
    "rating": 4.5
  },
  ...
]
```

### Get Products with Query
**Endpoint:** `GET /q`
**Description:** Retrieves products based on query parameters such as company, name, rating, sort, select, page, and limit.

*Query Parameters:*
company (optional) - Filter by company name.
name (optional) - Filter by product name (supports partial matches, case-insensitive).
rating (optional) - Filter by product rating.
sort (optional) - Sort the results (e.g., price,-rating).
select (optional) - Select specific fields to return (e.g., name,price).
page (optional) - Pagination page number (default is 1).
limit (optional) - Number of results per page (default is 3).

*Response:*
`200 OK` - Returns an array of products matching the query and the number of hits.
```
{
  "products": [
    {
      "_id": "60c72b2f5f1b2c001f8e4b8b",
      "name": "Product 1",
      "price": 29.99,
      "company": "Company A",
      "rating": 4.5
    },
    ...
  ],
  "nbHits": 10
}
```

### Create Product
**Endpoint:** `POST /create-product`
**Description:** Creates a new product.

*Request Body:*
name (required) - Name of the product.
price (required) - Price of the product.
company (required) - Company name.

*Response:*
`201 Created` - Returns a success message.
```
{
  "success": true,
  "message": "Product Created Successfully"
}
```

`400 Bad Request` - Returns an error message if any required fields are missing.
```
{
  "success": false,
  "error": "Something is missing"
}
```

