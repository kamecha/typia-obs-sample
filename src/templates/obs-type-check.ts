import typia from "typia";

import { OBSRequestTypes } from "obs-websocket-js";

export const isRequestType = typia.createIs<keyof OBSRequestTypes>();
export const isRequestData = typia.createIs<
  OBSRequestTypes[keyof OBSRequestTypes]
>();
