exports.up = function (knex) {
  return knex.schema.createTable("notifications", function (table) {
    table.increments("notificationId").primary();
    table.integer("senderId");
    table.integer("reciverId");
    table.string("readStatus");
    table.string("acceptStatus");
    table.string("content");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("notifications");
};
