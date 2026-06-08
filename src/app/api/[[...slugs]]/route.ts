import { Elysia, t }from "elysia";

const app = new Elysia({ prefix: "api/"})
.get("/", "Hello nextjs")
.post("/", ({body}) => body, {
    body: t.Object({
        name: t.String(),
    })
})

export const GET = app.fetch
export const POST = app.fetch

export const APP = typeof app;