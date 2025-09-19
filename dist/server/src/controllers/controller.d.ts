import type { Core } from '@strapi/strapi';
declare const controller: ({ strapi }: {
    strapi: Core.Strapi;
}) => {
    index(ctx: any): void;
    getConfig(ctx: any): void;
};
export default controller;
