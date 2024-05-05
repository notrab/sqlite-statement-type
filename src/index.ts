export enum SQLiteStatementType {
  SELECT = "SELECT",
  INSERT = "INSERT",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
  CREATE_TABLE = "CREATE TABLE",
  ALTER_TABLE = "ALTER TABLE",
  DROP_TABLE = "DROP TABLE",
  CREATE_INDEX = "CREATE INDEX",
  DROP_INDEX = "DROP INDEX",
  CREATE_VIEW = "CREATE VIEW",
  ALTER_VIEW = "ALTER VIEW",
  DROP_VIEW = "DROP VIEW",
  PRAGMA = "PRAGMA",
  BEGIN_TRANSACTION = "BEGIN TRANSACTION",
  // COMMIT = "COMMIT",
  // ROLLBACK = "ROLLBACK",
  // VACUUM = "VACUUM",
  // ANALYZE = "ANALYZE",
  ATTACH = "ATTACH",
  DETACH = "DETACH",
  // REINDEX = "REINDEX",
  // SAVEPOINT = "SAVEPOINT",
  // RELEASE_SAVEPOINT = "RELEASE SAVEPOINT",
  // ROLLBACK_TO_SAVEPOINT = "ROLLBACK TO SAVEPOINT",
  CREATE_TRIGGER = "CREATE TRIGGER",
  DROP_TRIGGER = "DROP TRIGGER",
  // CREATE_VIRTUAL_TABLE = "CREATE VIRTUAL TABLE",
  // DROP_VIRTUAL_TABLE = "DROP VIRTUAL TABLE",
  // CREATE_FOREIGN_KEY = "CREATE FOREIGN KEY",
  // DROP_FOREIGN_KEY = "DROP FOREIGN KEY",
}

export function isStatement(
  sqlStatement: string,
  statementType: SQLiteStatementType,
): boolean {
  const regex = new RegExp(`^\\s*${statementType}\\b`, "i");
  return regex.test(sqlStatement.trim());
}

export function isSelect(sql: string): boolean {
  return isStatement(sql, SQLiteStatementType.SELECT);
}

export function isInsert(sql: string): boolean {
  return isStatement(sql, SQLiteStatementType.INSERT);
}

export function isUpdate(sql: string): boolean {
  return isStatement(sql, SQLiteStatementType.UPDATE);
}

export function isDelete(sql: string): boolean {
  return isStatement(sql, SQLiteStatementType.DELETE);
}

export function isCreateTable(sql: string): boolean {
  return isStatement(sql, SQLiteStatementType.CREATE_TABLE);
}

export function isAlterTable(sql: string): boolean {
  return isStatement(sql, SQLiteStatementType.ALTER_TABLE);
}

export function isDropTable(sql: string): boolean {
  return isStatement(sql, SQLiteStatementType.DROP_TABLE);
}

export function isCreateIndex(sql: string): boolean {
  return isStatement(sql, SQLiteStatementType.CREATE_INDEX);
}

export function isDropIndex(sql: string): boolean {
  return isStatement(sql, SQLiteStatementType.DROP_INDEX);
}

export function isCreateView(sql: string): boolean {
  return isStatement(sql, SQLiteStatementType.CREATE_VIEW);
}

export function isAlterView(sql: string): boolean {
  return isStatement(sql, SQLiteStatementType.ALTER_VIEW);
}

export function isDropView(sql: string): boolean {
  return isStatement(sql, SQLiteStatementType.DROP_VIEW);
}

export function isPragma(sql: string): boolean {
  return isStatement(sql, SQLiteStatementType.PRAGMA);
}

export function isBeginTransaction(sql: string): boolean {
  return isStatement(sql, SQLiteStatementType.BEGIN_TRANSACTION);
}

export function isAttach(sql: string): boolean {
  return isStatement(sql, SQLiteStatementType.ATTACH);
}

export function isDetach(sql: string): boolean {
  return isStatement(sql, SQLiteStatementType.DETACH);
}

export function isCreateTrigger(sql: string): boolean {
  return isStatement(sql, SQLiteStatementType.CREATE_TRIGGER);
}

export function isDropTrigger(sqlStatement: string): boolean {
  return isStatement(sqlStatement, SQLiteStatementType.DROP_TRIGGER);
}

// export interface SelectDetails {
//   isRecursive: boolean;
//   isDistinct: boolean;
//   usesAll: boolean;
// }

// export function getSelectDetails(sqlStatement: string): SelectDetails | null {
//   const regex = /^\s*(WITH\s+RECURSIVE\s+)?SELECT\s+(DISTINCT\s+)?(ALL\s+)?\*/i;
//   const match = regex.exec(sqlStatement.trim());
//   if (match) {
//     const isRecursive = !!match[1] && !!match[2];
//     return {
//       isRecursive,
//       isDistinct: !!match[2],
//       usesAll: !!match[3],
//     };
//   }
//   return null;
// }
