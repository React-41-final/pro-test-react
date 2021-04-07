import { createAction } from "@reduxjs/toolkit";

const _Request = createAction("@contacts/_Requestt");
const _Success = createAction("@contacts/_Success");
const _Error = createAction("@contacts/_Errror");

export { _Error, _Success, _Request };
