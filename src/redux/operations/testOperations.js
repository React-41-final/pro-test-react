import { _Request, _Success, _Error } from "../actions/testAction";
import { getTestData } from "../../servises/reqToApi";

const test = (type) => async (dispatch) => {
  dispatch(_Request());

  try {
    const testData = await getTestData(type);
    dispatch(_Success({ data: testData.data, type }));
  } catch (error) {
    dispatch(_Error(error));
  }
};

export { test };
