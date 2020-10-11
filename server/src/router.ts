import * as core from "express-serve-static-core";

import cryptocurrencies from "./routes/cryptocurrencies";
import github from "./routes/github";
import passthrough from "./routes/passthrough";
import twitter from "./routes/twitter";
import weather from "./routes/weather";
import unsplash from "./routes/unsplash";

const routes = (app: core.Express) => {
    // NICE: use an API documentation framework
    cryptocurrencies(app);
    github(app);
    passthrough(app);
    twitter(app);
    weather(app);
    unsplash(app);
};

export default routes;
