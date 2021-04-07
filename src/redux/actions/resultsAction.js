import { createAction } from "@reduxjs/toolkit";

const _Request = createAction("@results/_Requestt");
const _Success = createAction("@results/_Success");
const _Error = createAction("@results/_Errror");

export { _Error, _Success, _Request };
