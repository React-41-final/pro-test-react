import { createAction } from "@reduxjs/toolkit";

const _Request = createAction("@test/_Request");
const _Success = createAction("@test/_Success");
const _Error = createAction("@test/_Error");

export { _Error, _Success, _Request };
