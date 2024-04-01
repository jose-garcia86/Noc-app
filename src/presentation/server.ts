import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-cases/checks/check-service";

export class Server {
  public static start() {
    console.log("Server started...");
    CronService.createJob("*/5 * * * * *", () => {
      const url = "https://eightshapes.co";
      new CheckService(
        () => console.log(`${url} is OK!`),
        (error) => console.log(error),
      ).execute(url);
      //new CheckService().execute("http://localhost:3000");
    });
  }
}
