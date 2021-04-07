import { createAction } from "@reduxjs/toolkit";

const _Request = createAction("@auth/_Requestt");
const _Success = createAction("@auth/_Success");
const _Error = createAction("@auth/_Errror");

export { _Error, _Success, _Request };
