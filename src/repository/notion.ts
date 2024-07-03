import { NotionDatabaseResponseResult } from '@/types/notion.type';
import { Client } from '@notionhq/client';
import { GetPageResponse, QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { cache } from 'react';

// Configure Database ID
const DATABASE_1 : string = process.env.NOTION_DATABASE_ID ?? 'database id is undefined';

const notionClient: Client = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const getDatabase = cache(async () => {
  const response: QueryDatabaseResponse = await notionClient.databases.query({
    database_id: DATABASE_1,
  });
  return response.results;
});

export const getPage = cache(async (pageId: string): Promise<GetPageResponse> => {
  const response = await notionClient.pages.retrieve({ page_id: pageId });
  return response;
});

// TODO: return typeを :Promise<NotionDatabaseResponseResult>にしたい
export const getPageFromSlug = cache(async (slug: string, databaseId: string,) => {
  const response = await notionClient.databases.query({
    database_id: DATABASE_1,
    filter: {
      property: 'Slug',
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
});