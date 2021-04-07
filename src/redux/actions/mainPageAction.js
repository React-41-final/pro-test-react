import { createAction } from "@reduxjs/toolkit";

const _Request = createAction("@mainPage/_Requestt");
const _Success = createAction("@mainPage/_Success");
const _Error = createAction("@mainPage/_Errror");

export { _Error, _Success, _Request };
