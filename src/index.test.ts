import { test, expect } from "vitest";

import {
  isSelect,
  isInsert,
  isUpdate,
  isDelete,
  isCreateTable,
  isAlterTable,
  isDropTable,
  isCreateIndex,
  isDropIndex,
  isCreateView,
  isAlterView,
  isDropView,
  isPragma,
  isBeginTransaction,
  isAttach,
  isDetach,
} from ".";

test("isSelect should correctly identify SELECT statements", () => {
  expect(isSelect("SELECT * FROM table")).toBe(true);
  expect(isSelect("select * from table")).toBe(true);
  expect(isSelect("INSERT INTO table (column) VALUES (value)")).toBe(false);
});

test("isInsert should correctly identify INSERT statements", () => {
  expect(isInsert("INSERT INTO table (column) VALUES (value)")).toBe(true);
  expect(isInsert("insert into table (column) values (value)")).toBe(true);
  expect(isInsert("UPDATE table SET column = value")).toBe(false);
});

test("isUpdate should correctly identify UPDATE statements", () => {
  expect(isUpdate("UPDATE table SET column = value")).toBe(true);
  expect(isUpdate("update table set column = value")).toBe(true);
  expect(isUpdate("DELETE FROM table")).toBe(false);
});

test("isDelete should correctly identify DELETE statements", () => {
  expect(isDelete("DELETE FROM table")).toBe(true);
  expect(isDelete("delete from table")).toBe(true);
  expect(
    isDelete("CREATE TABLE table_name (column1 datatype, column2 datatype)"),
  ).toBe(false);
});

test("isCreateTable should correctly identify CREATE TABLE statements", () => {
  expect(
    isCreateTable(
      "CREATE TABLE table_name (column1 datatype, column2 datatype)",
    ),
  ).toBe(true);
  expect(
    isCreateTable(
      "create table table_name (column1 datatype, column2 datatype)",
    ),
  ).toBe(true);
  expect(isCreateTable("ALTER TABLE table_name ADD column3 datatype")).toBe(
    false,
  );
});

test("isAlterTable should correctly identify ALTER TABLE statements", () => {
  expect(isAlterTable("ALTER TABLE table_name ADD column3 datatype")).toBe(
    true,
  );
  expect(isAlterTable("alter table table_name add column3 datatype")).toBe(
    true,
  );
  expect(isAlterTable("DROP TABLE table_name")).toBe(false);
});

test("isDropTable should correctly identify DROP TABLE statements", () => {
  expect(isDropTable("DROP TABLE table_name")).toBe(true);
  expect(isDropTable("drop table table_name")).toBe(true);
  expect(isDropTable("CREATE INDEX index_name ON table_name (column)")).toBe(
    false,
  );
});

test("isCreateIndex should correctly identify CREATE INDEX statements", () => {
  expect(isCreateIndex("CREATE INDEX index_name ON table_name (column)")).toBe(
    true,
  );
  expect(isCreateIndex("create index index_name on table_name (column)")).toBe(
    true,
  );
  expect(isCreateIndex("SELECT * FROM table")).toBe(false);
});

test("isDropIndex should correctly identify DROP INDEX statements", () => {
  expect(isDropIndex("DROP INDEX index_name")).toBe(true);
  expect(isDropIndex("drop index index_name")).toBe(true);
  expect(isDropIndex("CREATE INDEX index_name ON table_name (column)")).toBe(
    false,
  );
});

test("isCreateView should correctly identify CREATE VIEW statements", () => {
  expect(
    isCreateView("CREATE VIEW view_name AS SELECT * FROM table_name"),
  ).toBe(true);
  expect(
    isCreateView("create view view_name as select * from table_name"),
  ).toBe(true);
  expect(isCreateView("DROP VIEW view_name")).toBe(false);
});

test("isDropView should correctly identify DROP VIEW statements", () => {
  expect(isDropView("DROP VIEW view_name")).toBe(true);
  expect(isDropView("drop view view_name")).toBe(true);
  expect(
    isDropView("CREATE TABLE table_name (column1 datatype, column2 datatype)"),
  ).toBe(false);
});

test("isPragma should correctly identify PRAGMA statements", () => {
  expect(isPragma("PRAGMA foreign_keys = ON")).toBe(true);
  expect(isPragma("pragma foreign_keys = ON")).toBe(true);
  expect(
    isPragma("CREATE TABLE table_name (column1 datatype, column2 datatype)"),
  ).toBe(false);
});

test("isBeginTransaction should correctly identify BEGIN TRANSACTION statements", () => {
  expect(isBeginTransaction("BEGIN TRANSACTION")).toBe(true);
  expect(isBeginTransaction("begin transaction")).toBe(true);
  expect(
    isBeginTransaction(
      "CREATE TABLE table_name (column1 datatype, column2 datatype)",
    ),
  ).toBe(false);
});

test("isAttach should correctly identify ATTACH statements", () => {
  expect(isAttach("ATTACH DATABASE database_name AS alias_name")).toBe(true);
  expect(isAttach("attach database database_name as alias_name")).toBe(true);
  expect(
    isAttach("CREATE TABLE table_name (column1 datatype, column2 datatype)"),
  ).toBe(false);
});

test("isDetach should correctly identify DETACH statements", () => {
  expect(isDetach("DETACH DATABASE database_name")).toBe(true);
  expect(isDetach("detach database database_name")).toBe(true);
  expect(
    isDetach("CREATE TABLE table_name (column1 datatype, column2 datatype)"),
  ).toBe(false);
});

test("isAlterView should correctly identify ALTER VIEW statements", () => {
  expect(isAlterView("ALTER VIEW view_name RENAME TO new_name")).toBe(true);
  expect(isAlterView("alter view view_name rename to new_name")).toBe(true);
  expect(
    isAlterView("CREATE TABLE table_name (column1 datatype, column2 datatype)"),
  ).toBe(false);
});
