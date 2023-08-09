import { TypedDocumentNode, gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;
//recieved data name same as sended

export const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

//Use SUSEPENSE
interface Data {
  dog: {
    id: string;
    name: string;
  };
}

interface Variables {
  id: string;
}

export const GET_DOG_QUERY: TypedDocumentNode<Data, Variables> = gql`
  query GetDog($id: String) {
    dog(id: $id) {
      id
      name
    }
  }
`;

//MUTATIONS
export const ADD_TODO = gql`
mutation AddTodo($type: String!) {
  addTodo(type: $type) {
    id
    type
  }
}
`;