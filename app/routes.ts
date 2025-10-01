import { type RouteConfig, index } from "@react-router/dev/routes";
import { route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), 
    route("/chat", "routes/Chat.tsx"),
    route("/api/chat", "routes/ChatStream.tsx")

] satisfies RouteConfig;
