enum SQLiteStatementType {
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
  BEGIN_TRANSACTION = "BEGIN( TRANSACTION)?",
  COMMIT = "COMMIT",
  ROLLBACK = "ROLLBACK",
  VACUUM = "VACUUM",
  ANALYZE = "ANALYZE",
  ATTACH = "ATTACH",
  DETACH = "DETACH",
  REINDEX = "REINDEX",
  SAVEPOINT = "SAVEPOINT",
  RELEASE = "RELEASE( SAVEPOINT)?",
  CREATE_TRIGGER = "CREATE TRIGGER",
  DROP_TRIGGER = "DROP TRIGGER",
  CREATE_VIRTUAL_TABLE = "CREATE VIRTUAL TABLE",
  DROP_VIRTUAL_TABLE = "DROP VIRTUAL TABLE",
}

export function isStatement(
  sqlStatement: string,
  statementType: SQLiteStatementType
): boolean {
  const regex = new RegExp(`^\\s*(${statementType})\\b`, "i");

  return regex.test(sqlStatement.trim());
}

export function getStatementType(sql: string): SQLiteStatementType | null {
  const trimmedSql = sql.trim().toUpperCase();

  for (const [key, value] of Object.entries(SQLiteStatementType)) {
    const regex = new RegExp(`^${value}\\b`, "i");

    if (regex.test(trimmedSql)) {
      return SQLiteStatementType[key as keyof typeof SQLiteStatementType];
    }
  }

  return null;
}

export const isSelect = (sql: string) =>
  getStatementType(sql) === SQLiteStatementType.SELECT;

export const isInsert = (sql: string) =>
  getStatementType(sql) === SQLiteStatementType.INSERT;

export const isUpdate = (sql: string) =>
  getStatementType(sql) === SQLiteStatementType.UPDATE;

export const isDelete = (sql: string) =>
  getStatementType(sql) === SQLiteStatementType.DELETE;

export const isCreateTable = (sql: string) =>
  getStatementType(sql) === SQLiteStatementType.CREATE_TABLE;

export const isAlterTable = (sql: string) =>
  getStatementType(sql) === SQLiteStatementType.ALTER_TABLE;

export const isDropTable = (sql: string) =>
  getStatementType(sql) === SQLiteStatementType.DROP_TABLE;

export const isCreateIndex = (sql: string) =>
  getStatementType(sql) === SQLiteStatementType.CREATE_INDEX;

export const isDropIndex = (sql: string) =>
  getStatementType(sql) === SQLiteStatementType.DROP_INDEX;

export const isCreateView = (sql: string) =>
  getStatementType(sql) === SQLiteStatementType.CREATE_VIEW;

export const isAlterView = (sql: string) =>
  getStatementType(sql) === SQLiteStatementType.ALTER_VIEW;

export const isDropView = (sql: string) =>
  getStatementType(sql) === SQLiteStatementType.DROP_VIEW;

export const isPragma = (sql: string) =>
  getStatementType(sql) === SQLiteStatementType.PRAGMA;

export const isBeginTransaction = (sql: string) =>
  getStatementType(sql) === SQLiteStatementType.BEGIN_TRANSACTION;

export const isCommit = (sql: string) =>
  getStatementType(sql) === SQLiteStatementType.COMMIT;

export const isRollback = (sql: string) =>
  getStatementType(sql) === SQLiteStatementType.ROLLBACK;

export const isVacuum = (sql: string) =>
  getStatementType(sql) === SQLiteStatementType.VACUUM;

export const isAnalyze = (sql: string) =>
  getStatementType(sql) === SQLiteStatementType.ANALYZE;

export const isAttach = (sql: string) =>
  getStatementType(sql) === SQLiteStatementType.ATTACH;

export const isDetach = (sql: string) =>
  getStatementType(sql) === SQLiteStatementType.DETACH;

export const isReindex = (sql: string) =>
  getStatementType(sql) === SQLiteStatementType.REINDEX;

export const isSavepoint = (sql: string) =>
  getStatementType(sql) === SQLiteStatementType.SAVEPOINT;

export const isRelease = (sql: string) =>
  getStatementType(sql) === SQLiteStatementType.RELEASE;

export const isCreateTrigger = (sql: string) =>
  getStatementType(sql) === SQLiteStatementType.CREATE_TRIGGER;

export const isDropTrigger = (sql: string) =>
  getStatementType(sql) === SQLiteStatementType.DROP_TRIGGER;

export const isCreateVirtualTable = (sql: string) =>
  getStatementType(sql) === SQLiteStatementType.CREATE_VIRTUAL_TABLE;

export const isDropVirtualTable = (sql: string) =>
  getStatementType(sql) === SQLiteStatementType.DROP_VIRTUAL_TABLE;
