import { DatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export function isDatabaseObjectResponse(obj: any): obj is DatabaseObjectResponse {
    return typeof  obj !== null && obj.object === "object" && "title" in obj;
}