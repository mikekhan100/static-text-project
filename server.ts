import { serve } from "bun";

const server = serve({
    port: 3000,
    fetch(req): Response | Promise<Response> {
        return new Response(Bun.file("index.html"), {
            headers: {
                "Content-Type": "text/html",
            },
        });
    },
});

console.log(`Server is running on http://localhost:${server.port}`);