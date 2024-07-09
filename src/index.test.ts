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
  isCommit,
  isRollback,
  isVacuum,
  isAnalyze,
  isAttach,
  isDetach,
  isReindex,
  isSavepoint,
  isRelease,
  isCreateTrigger,
  isDropTrigger,
  isCreateVirtualTable,
  isDropVirtualTable,
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
    isDelete("CREATE TABLE table_name (column1 datatype, column2 datatype)")
  ).toBe(false);
});

test("isCreateTable should correctly identify CREATE TABLE statements", () => {
  expect(
    isCreateTable(
      "CREATE TABLE table_name (column1 datatype, column2 datatype)"
    )
  ).toBe(true);
  expect(
    isCreateTable(
      "create table table_name (column1 datatype, column2 datatype)"
    )
  ).toBe(true);
  expect(isCreateTable("ALTER TABLE table_name ADD column3 datatype")).toBe(
    false
  );
});

test("isAlterTable should correctly identify ALTER TABLE statements", () => {
  expect(isAlterTable("ALTER TABLE table_name ADD column3 datatype")).toBe(
    true
  );
  expect(isAlterTable("alter table table_name add column3 datatype")).toBe(
    true
  );
  expect(isAlterTable("DROP TABLE table_name")).toBe(false);
});

test("isDropTable should correctly identify DROP TABLE statements", () => {
  expect(isDropTable("DROP TABLE table_name")).toBe(true);
  expect(isDropTable("drop table table_name")).toBe(true);
  expect(isDropTable("CREATE INDEX index_name ON table_name (column)")).toBe(
    false
  );
});

test("isCreateIndex should correctly identify CREATE INDEX statements", () => {
  expect(isCreateIndex("CREATE INDEX index_name ON table_name (column)")).toBe(
    true
  );
  expect(isCreateIndex("create index index_name on table_name (column)")).toBe(
    true
  );
  expect(isCreateIndex("SELECT * FROM table")).toBe(false);
});

test("isDropIndex should correctly identify DROP INDEX statements", () => {
  expect(isDropIndex("DROP INDEX index_name")).toBe(true);
  expect(isDropIndex("drop index index_name")).toBe(true);
  expect(isDropIndex("CREATE INDEX index_name ON table_name (column)")).toBe(
    false
  );
});

test("isCreateView should correctly identify CREATE VIEW statements", () => {
  expect(
    isCreateView("CREATE VIEW view_name AS SELECT * FROM table_name")
  ).toBe(true);
  expect(
    isCreateView("create view view_name as select * from table_name")
  ).toBe(true);
  expect(isCreateView("DROP VIEW view_name")).toBe(false);
});

test("isDropView should correctly identify DROP VIEW statements", () => {
  expect(isDropView("DROP VIEW view_name")).toBe(true);
  expect(isDropView("drop view view_name")).toBe(true);
  expect(
    isDropView("CREATE TABLE table_name (column1 datatype, column2 datatype)")
  ).toBe(false);
});

test("isPragma should correctly identify PRAGMA statements", () => {
  expect(isPragma("PRAGMA foreign_keys = ON")).toBe(true);
  expect(isPragma("pragma foreign_keys = ON")).toBe(true);
  expect(
    isPragma("CREATE TABLE table_name (column1 datatype, column2 datatype)")
  ).toBe(false);
});

test("isBeginTransaction should correctly identify BEGIN TRANSACTION statements", () => {
  expect(isBeginTransaction("BEGIN TRANSACTION")).toBe(true);
  expect(isBeginTransaction("begin transaction")).toBe(true);
  expect(
    isBeginTransaction(
      "CREATE TABLE table_name (column1 datatype, column2 datatype)"
    )
  ).toBe(false);
});

test("isAttach should correctly identify ATTACH statements", () => {
  expect(isAttach("ATTACH DATABASE database_name AS alias_name")).toBe(true);
  expect(isAttach("attach database database_name as alias_name")).toBe(true);
  expect(
    isAttach("CREATE TABLE table_name (column1 datatype, column2 datatype)")
  ).toBe(false);
});

test("isDetach should correctly identify DETACH statements", () => {
  expect(isDetach("DETACH DATABASE database_name")).toBe(true);
  expect(isDetach("detach database database_name")).toBe(true);
  expect(
    isDetach("CREATE TABLE table_name (column1 datatype, column2 datatype)")
  ).toBe(false);
});

test("isAlterView should correctly identify ALTER VIEW statements", () => {
  expect(isAlterView("ALTER VIEW view_name RENAME TO new_name")).toBe(true);
  expect(isAlterView("alter view view_name rename to new_name")).toBe(true);
  expect(
    isAlterView("CREATE TABLE table_name (column1 datatype, column2 datatype)")
  ).toBe(false);
});

test("isCommit should correctly identify COMMIT statements", () => {
  expect(isCommit("COMMIT")).toBe(true);
  expect(isCommit("commit")).toBe(true);
  expect(isCommit("COMMIT TRANSACTION")).toBe(true);
  expect(isCommit("BEGIN TRANSACTION")).toBe(false);
});

test("isRollback should correctly identify ROLLBACK statements", () => {
  expect(isRollback("ROLLBACK")).toBe(true);
  expect(isRollback("rollback")).toBe(true);
  expect(isRollback("ROLLBACK TRANSACTION")).toBe(true);
  expect(isRollback("COMMIT TRANSACTION")).toBe(false);
});

test("isVacuum should correctly identify VACUUM statements", () => {
  expect(isVacuum("VACUUM")).toBe(true);
  expect(isVacuum("vacuum")).toBe(true);
  expect(isVacuum("VACUUM main")).toBe(true);
  expect(isVacuum("ANALYZE")).toBe(false);
});

test("isAnalyze should correctly identify ANALYZE statements", () => {
  expect(isAnalyze("ANALYZE")).toBe(true);
  expect(isAnalyze("analyze")).toBe(true);
  expect(isAnalyze("ANALYZE table_name")).toBe(true);
  expect(isAnalyze("VACUUM")).toBe(false);
});

test("isReindex should correctly identify REINDEX statements", () => {
  expect(isReindex("REINDEX")).toBe(true);
  expect(isReindex("reindex")).toBe(true);
  expect(isReindex("REINDEX table_name")).toBe(true);
  expect(isReindex("ANALYZE")).toBe(false);
});

test("isSavepoint should correctly identify SAVEPOINT statements", () => {
  expect(isSavepoint("SAVEPOINT my_savepoint")).toBe(true);
  expect(isSavepoint("savepoint my_savepoint")).toBe(true);
  expect(isSavepoint("RELEASE SAVEPOINT my_savepoint")).toBe(false);
});

test("isRelease should correctly identify RELEASE statements", () => {
  expect(isRelease("RELEASE SAVEPOINT my_savepoint")).toBe(true);
  expect(isRelease("release savepoint my_savepoint")).toBe(true);
  expect(isRelease("RELEASE my_savepoint")).toBe(true);
  expect(isRelease("SAVEPOINT my_savepoint")).toBe(false);
});

test("isCreateTrigger should correctly identify CREATE TRIGGER statements", () => {
  expect(
    isCreateTrigger(
      "CREATE TRIGGER trigger_name AFTER INSERT ON table_name BEGIN UPDATE ... END"
    )
  ).toBe(true);
  expect(
    isCreateTrigger(
      "create trigger trigger_name after insert on table_name begin update ... end"
    )
  ).toBe(true);
  expect(isCreateTrigger("DROP TRIGGER trigger_name")).toBe(false);
});

test("isDropTrigger should correctly identify DROP TRIGGER statements", () => {
  expect(isDropTrigger("DROP TRIGGER trigger_name")).toBe(true);
  expect(isDropTrigger("drop trigger trigger_name")).toBe(true);
  expect(
    isDropTrigger(
      "CREATE TRIGGER trigger_name AFTER INSERT ON table_name BEGIN UPDATE ... END"
    )
  ).toBe(false);
});

test("isCreateVirtualTable should correctly identify CREATE VIRTUAL TABLE statements", () => {
  expect(
    isCreateVirtualTable("CREATE VIRTUAL TABLE virtual_table USING module_name")
  ).toBe(true);
  expect(
    isCreateVirtualTable("create virtual table virtual_table using module_name")
  ).toBe(true);
  expect(isCreateVirtualTable("DROP VIRTUAL TABLE virtual_table")).toBe(false);
});

test("isDropVirtualTable should correctly identify DROP VIRTUAL TABLE statements", () => {
  expect(isDropVirtualTable("DROP VIRTUAL TABLE virtual_table")).toBe(true);
  expect(isDropVirtualTable("drop virtual table virtual_table")).toBe(true);
  expect(
    isDropVirtualTable("CREATE VIRTUAL TABLE virtual_table USING module_name")
  ).toBe(false);
});

// Additional test to ensure BEGIN TRANSACTION works with just BEGIN
test("isBeginTransaction should correctly identify BEGIN and BEGIN TRANSACTION statements", () => {
  expect(isBeginTransaction("BEGIN")).toBe(true);
  expect(isBeginTransaction("begin")).toBe(true);
  expect(isBeginTransaction("BEGIN TRANSACTION")).toBe(true);
  expect(isBeginTransaction("begin transaction")).toBe(true);
  expect(isBeginTransaction("COMMIT")).toBe(false);
});
