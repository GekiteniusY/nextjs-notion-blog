import { Client } from '@notionhq/client';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { cache } from 'react';

// Configure Database ID
const DATABASE_1 : string = process.env.NOTION_DATABASE_ID ?? 'database id is undefined';

const notionClient: Client = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const getDatabase = cache(async (databaseId: string) => {
  const response: QueryDatabaseResponse = await notionClient.databases.query({
    database_id: databaseId,
  });
  return response.results;
});

export const getPage = cache(async (pageId: string) => {
  const response = await notionClient.pages.retrieve({ page_id: pageId });
  return response;
});