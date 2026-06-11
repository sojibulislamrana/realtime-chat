import { treaty } from "@elysia/eden";
import type { APP } from "../app/api/[[...slugs]]/route"

export const client = treaty<APP>('localhost:3000').api