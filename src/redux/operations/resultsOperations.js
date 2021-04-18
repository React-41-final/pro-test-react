import {
  resultsRequest,
  resultsSuccess,
  resultsError,
} from "../actions/resultsAction";
import { postTechResults, postTheoryResults } from "../../servises/reqToApi";

const resultsOperation = (tests, typeOfTest) => async (dispatch) => {
  dispatch(resultsRequest());

  if (typeOfTest) { //Указать тип теста который проходили, для отправки запроса на бекенд
    try {
      const results = await postTechResults(tests);
      dispatch(resultsSuccess(results));
    } catch (error) {
      dispatch(resultsError(error));
    }
  } else {
    try {
      const results = await postTheoryResults(tests);
      dispatch(resultsSuccess(results));
    } catch (error) {
      dispatch(resultsError(error));
    }
  } //Дописать условие на тип теста
}; //нужно добавить операцию для "postTheoryResults"

export { resultsOperation };
