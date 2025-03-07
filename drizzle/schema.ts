import { singlestoreTable, text } from "drizzle-orm/singlestore-core"
import { sql } from "drizzle-orm"

export const cmli = singlestoreTable("cmli", {
	name: text(),
	artist: text(),
	lyrics: text(),
	copyright: text(),
	musicbrainz: text(),
	img: text(),
	uuid: text(),
});
