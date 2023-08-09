import React, { useState } from "react";
import {
  ADD_TODO,
  GET_DOGS,
  GET_DOG_PHOTO,
  GET_DOG_QUERY,
  GET_LOCATIONS,
} from "./getLocations";
import {
  useLazyQuery,
  useMutation,
  useQuery,
//   useSuspenseQuery,
} from "@apollo/client";

const UserTable = () => {
  const [selectedDog, setSelectedDog] = useState(null);
  const [inputValue, setInputValue] = useState<any>("");

  //   const { loading, error, data } = useQuery(GET_LOCATIONS);
  const { data: allDogs } = useQuery(GET_DOGS);
  const { data, previousData, refetch, networkStatus } = useQuery(
    GET_DOG_PHOTO,
    {
      variables: { breed: selectedDog }, //payload is send in variables with key value pair
      // notifyOnNetworkStatusChange: true,
      // pollInterval: 500, //calling api after every 0.5 s
    }
  );

  console.log("networkStatus", networkStatus);
  console.log("previous selected dog", previousData);

  console.log("allDogs", allDogs);
  function onDogSelected(e: any) {
    setSelectedDog(e.target.value);
  }

  const [
    getDog,
    { loading: useLazyQueryDogLoading, data: useLazyQueryDogData },
  ] = useLazyQuery(GET_DOG_PHOTO, {
    // fetchPolicy: "network-only", // Doesn't check cache before making a network request(for removing cache)
    nextFetchPolicy: "cache-first",
  });

  console.log("useLazyQueryDogData", useLazyQueryDogData);

  //USE SUSPENSE
//   const { data: dogSuspenseData } = useSuspenseQuery<any>(GET_DOG_QUERY, {
//     variables: { id: "2" },
//   });

  const [addToDo, { data: mutationData }] = useMutation(ADD_TODO);

  console.log("inputValue",inputValue);
  

  return (
    <div>
      <h1>hello</h1>
      {/* {data?.locations?.map((it: any) => (
        <div style={{ marginBottom: "20px", borderBottom: "1px solid black" }}>
          <h1>{it.name}</h1>
          <h1>{it.description}</h1>
        </div>
      ))} */}

      <select name="dog" onChange={(e: any) => onDogSelected(e)}>
        {allDogs?.dogs.map((dog: any) => (
          <option key={dog.id} value={dog.breed}>
            {dog.breed}
          </option>
        ))}
      </select>

      {data?.dog && (
        <div>
          <img
            src={data?.dog?.displayImage}
            style={{ height: 100, width: 100 }}
            alt="dog"
          />
          {/* <button onClick={() => refetch()}>Refetch!</button> */}
          <button
            onClick={() =>
              refetch({
                breed: "dalmatian", // Always refetches a dalmatian instead of original breed
              })
            }
          >
            Refetch!
          </button>
        </div>
      )}

      <button onClick={() => getDog({ variables: { breed: "bulldog" } })}>
        Use Lazy Query
      </button>

      {/* //SUSPENSE */}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <div>Name: {dogSuspenseData?.dog?.name}</div>
      </Suspense> */}

      {/* MUTATIONS */}
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          addToDo({ variables: { type: inputValue } });
          setInputValue("")
        }}
      >
        <input
          value={inputValue}
          onChange={(e: any) => setInputValue(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default UserTable;
