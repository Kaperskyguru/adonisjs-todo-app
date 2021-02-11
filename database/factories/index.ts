import Factory from "@ioc:Adonis/Lucid/Factory";

import User from "App/Models/User";
import Todo from "App/Models/Todo";

export const TodoFactory = Factory.define(Todo, ({ faker }) => {
  return {
    title: faker.lorem.sentence(),
    desc: faker.lorem.paragraphs(4),
    status: 0,
  };
}).build();

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    name: faker.internet.userName(),
    email: faker.internet.email(),
    password: "password",
  };
})
  .relation("todos", () => TodoFactory)
  .build();
