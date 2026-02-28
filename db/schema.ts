import { pgTable,text } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm/sql/sql";


export const user = pgTable("user", {
    id: text("id")
    .primaryKey()
    .default(sql `gen_random_uuid()`),
    organization_id: text("organization_id").notNull(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    image: text("image"),
    created_at: text("created_at").default(sql`now()`).notNull(),
    updated_at: text("updated_at").default(sql`now()`).notNull(),
});