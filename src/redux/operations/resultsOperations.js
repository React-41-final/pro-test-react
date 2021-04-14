import {
  resultsRequest,
  resultsSuccess,
  resultsError,
} from "../actions/resultsAction";
import { postTechResults, postTheoryResults } from "../../servises/reqToApi";

const resultsOperation = (credentials) => async (dispatch) => {
  dispatch(resultsRequest());
  try {
    const results = await postTechResults(credentials);
    dispatch(resultsSuccess(results));
  } catch (error) {
    dispatch(resultsError(error));
  }
};//нужно добавить операцию для "postTheoryResults"

export { resultsOperation };
