import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./vn/konichiwa.mp3";
	conn.sendFile(m.chat, vn, "konnichiwa.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(konichiwa|selamat siang|mat siang|siang|konnichiwa)$/i;
handler.command = new RegExp();

export default handler;
