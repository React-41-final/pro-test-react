import { createAction } from "@reduxjs/toolkit";

const _Request = createAction("@test/_Requestt");
const _Success = createAction("@test/_Success");
const _Error = createAction("@test/_Errror");

export { _Error, _Success, _Request };
