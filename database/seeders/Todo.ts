import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import { UserFactory } from "Database/factories";

export default class TodoSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const user = await UserFactory.with("todos", 10).createMany(3);
  }
}
