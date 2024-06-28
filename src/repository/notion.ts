import { Client } from '@notionhq/client';
import { cache } from 'react';


const databaseId : string = process.env.NOTION_DATABASE_ID ?? 'database id is undefined';

const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const getDatabase = cache(async () => {
  const response = await notionClient.databases.query({
    database_id: databaseId,
  });
  return response.results;
});

export const getPage = cache(async (pageId: string) => {
  const response = await notionClient.pages.retrieve({ page_id: pageId });
  return response;
});