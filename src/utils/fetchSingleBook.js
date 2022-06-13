import axios from "axios";
export const fetchSingleBook = async (id, user, dispatchBook) => {
    try {
      const response = await axios({
        method: "GET",
        url:
          "https://www.googleapis.com/books/v1/volumes/" +
          id +
          "?key=" +
          process.env.REACT_APP_API_KEY,
      });
      if (response.status === 200 && response.data) {
        // console.log(response.data)
        dispatchBook({ type: "SET_SINGLE_BOOK", payload: response.data });
      } else {
        throw new Error("SINGLE BOOK NOt AVAILABLE");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  