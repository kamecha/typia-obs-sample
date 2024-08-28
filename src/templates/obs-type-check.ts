import typia from "typia";

import type { OBSRequestTypes } from "obs-websocket-js";
import {SimplifyDeep} from "type-fest"

type T = SimplifyDeep<OBSRequestTypes[keyof OBSRequestTypes]>;

export const isRequestType = typia.createIs<keyof OBSRequestTypes>();
export const isRequestData = typia.createIs<T>();
