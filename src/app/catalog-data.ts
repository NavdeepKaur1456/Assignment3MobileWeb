
import { CatalogJson } from './json-structure';

export const catalog: CatalogJson = {
  "_embedded": {
    "pets": [
      {
        "id": 1,
        "name": "Charlie",
        "petKind": "dog",
        "age": 3,
        "image": "charlie_dog.jpg",
        "ownerId": 1
      },
      {
        "id": 2,
        "name": "Fluffy",
        "petKind": "cat",
        "age": 2,
        "image": "fluffy_cat.jpg",
        "ownerId": 1
      },
      {
        "id": 3,
        "name": "Oscar",
        "petKind": "cat",
        "age": 6,
        "image": "oscar_cat.jpg",
        "ownerId": 2
      },
      {
        "id": 4,
        "name": "Tweety",
        "petKind": "canary",
        "age": 3,
        "image": "tweety_canary.jpg",
        "ownerId": 4
      },
      {
        "id": 5,
        "name": "Riley",
        "petKind": "dog",
        "age": 5,
        "image": "riley_dog.jpg",
        "ownerId": 4
      },
      {
        "id": 6,
        "name": "Sam",
        "petKind": "rabbit",
        "age": 2,
        "image": "sam_rabbit.jpg",
        "ownerId": 4
      },
      {
        "id": 7,
        "name": "Marx",
        "petKind": "hamster",
        "age": 1,
        "image": "marx_hamster.jpg",
        "ownerId": 4
      }
    ]
  },
  "_links": {
    "self": {
      "href": "http://localhost:8080/api/pets?page=0&size=20"
    },
    "profile": {
      "href": "http://localhost:8080/api/profile/pets"
    }
  },
  "page": {
    "size": 20,
    "totalElements": 7,
    "totalPages": 1,
    "number": 0
  }
};
