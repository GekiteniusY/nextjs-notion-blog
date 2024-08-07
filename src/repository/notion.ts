import { NotionDatabaseResponseResult } from "@/types/notion.type";
import { Client } from "@notionhq/client";
import {
  GetPageResponse,
  PageObjectResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { cache } from "react";

// Configure Database ID
const DATABASE_1: string =
  process.env.NOTION_DATABASE_ID ?? "database id is undefined";

const notionClient: Client = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = cache(async (): Promise<PageObjectResponse[]> =>  {
  const response: PageObjectResponse[] = await notionClient.databases
    .query({
      database_id: DATABASE_1,
    })
    .then((res) => {
      let items:PageObjectResponse[] = [];
      res.results.forEach((result) => {
        if ("properties" in result) {
          // PageObjectResponse型のみ追加する
          items.push(result as PageObjectResponse);
        } else {
          throw new Error('getDatabase: result is not PageObjectResponse type\n')
        }
      });
      return items;
    });
    return response;
});

export const getPage = cache(
  async (pageId: string): Promise<GetPageResponse> => {
    const response = await notionClient.pages.retrieve({ page_id: pageId });
    return response;
  }
);

// TODO: return typeを :Promise<NotionDatabaseResponseResult>にしたい
export const getPageFromSlug = cache(
  async (slug: string, databaseId: string) => {
    const response = await notionClient.databases.query({
      database_id: DATABASE_1,
      filter: {
        property: "Slug",
        formula: {
          string: {
            equals: slug,
          },
        },
      },
    });
    if (response?.results?.length) {
      return response?.results?.[0];
    }
    return {};
  }
);
