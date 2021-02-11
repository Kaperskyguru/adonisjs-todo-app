import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Todos extends BaseSchema {
  protected tableName = "todos";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("title");
      table.text("desc").nullable();
      table.integer("status").defaultTo(0);
      table.integer("user_id");
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
