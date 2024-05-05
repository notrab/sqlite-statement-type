# sqlite-statement-type

This is a set of functions that let you test is the SQLite statement is a certain operation.

This is useful when you want to know if a statement is a SELECT, INSERT, UPDATE, DELETE, CREATE TABLE, etc.

**The next steps for this library would be to add support for checking recursive statements.**

## Install

```bash
npm install sqlite-statement-type
```

## Quickstart

```ts
import { isSelect } from "sqlite-statement-type";

const statement = "SELECT * FROM users";

console.log(isSelect(statement)); // true
```

## API Reference

### `isSelect`

```ts
import { isSelect } from "sqlite-statement-type";

const statement = "SELECT * FROM table";

const result = isSelect(statement);
```

### `isInsert`

```ts
import { isInsert } from "sqlite-statement-type";

const statement = "INSERT INTO table (column) VALUES ('value')";

const result = isInsert(statement);
```

### `isUpdate`

```ts
import { isUpdate } from "sqlite-statement-type";

const statement = "UPDATE table SET column = 'value'";

const result = isUpdate(statement);
```

### `isDelete`

```ts
import { isDelete } from "sqlite-statement-type";

const statement = "DELETE FROM table";

const result = isDelete(statement);
```

### `isCreateTable`

```ts
import { isCreateTable } from "sqlite-statement-type";

const statement = "CREATE TABLE table (column TEXT)";

const result = isCreateTable(statement);
```

### `isAlterTable`

```ts
import { isAlterTable } from "sqlite-statement-type";

const statement = "ALTER TABLE table ADD COLUMN column TEXT";

const result = isAlterTable(statement);
```

### `isDropTable`

```ts
import { isDropTable } from "sqlite-statement-type";

const statement = "DROP TABLE table";

const result = isDropTable(statement);
```

### `isCreateIndex`

```ts
import { isCreateIndex } from "sqlite-statement-type";

const statement = "CREATE INDEX index ON table (column)";

const result = isCreateIndex(statement);
```

### `isDropIndex`

```ts
import { isDropIndex } from "sqlite-statement-type";

const statement = "DROP INDEX index";

const result = isDropIndex(statement);
```

### `isCreateView`

```ts
import { isCreateView } from "sqlite-statement-type";

const statement = "CREATE VIEW view AS SELECT * FROM table";

const result = isCreateView(statement);
```

### `isAlterView`

```ts
import { isAlterView } from "sqlite-statement-type";

const statement = "ALTER VIEW view AS SELECT * FROM table";

const result = isAlterView(statement);
```

### `isDropView`

```ts
import { isDropView } from "sqlite-statement-type";

const statement = "DROP VIEW view";

const result = isDropView(statement);
```

### `isPragma`

```ts
import { isPragma } from "sqlite-statement-type";

const statement = "PRAGMA table_info(table)";

const result = isPragma(statement);
```

### `isBeginTransaction`

```ts
import { isBeginTransaction } from "sqlite-statement-type";

const statement = "BEGIN TRANSACTION";

const result = isBeginTransaction(statement);
```

### `isAttach`

```ts
import { isAttach } from "sqlite-statement-type";

const statement = "ATTACH DATABASE 'file.db' AS db";

const result = isAttach(statement);
```

### `isDetach`

```ts
import { isDetach } from "sqlite-statement-type";

const statement = "DETACH DATABASE db";

const result = isDetach(statement);
```

### `isCreateTrigger`

```ts
import { isCreateTrigger } from "sqlite-statement-type";

const statement = "CREATE TRIGGER trigger AFTER INSERT ON table BEGIN END";

const result = isCreateTrigger(statement);
```

### `isDropTrigger`

```ts
import { isDropTrigger } from "sqlite-statement-type";

const statement = "DROP TRIGGER trigger";

const result = isDropTrigger(statement);
```
