import { Elysia }from "elysia";

const rooms = new Elysia({ prefix: "/room"}).post("/", () => {
    console.log("CREATE A NEW ROOM!");
})
const app = new Elysia({ prefix: "/api"}).get("/user", { user: {name : "Rana"}});

export const GET = app.fetch
export const POST = app.fetch

export type App = typeof app;