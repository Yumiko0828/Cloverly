/**
 * Yutil.js
 * Copyright(c) 2022 - Yasu Yumiko
 * MIT Licensed
 */

/**
 * @param {number} length specifies the length of the string to return (if not specified, defaults to 18)
 */
function Id1(length = 18) {
  let l = "0123456789";
  let id = "";
  for (let i = 0; i < length; i++) {
    id += l[Math.floor(Math.random() * l.length)];
  }

  if (typeof length !== "number")
    throw new Error('the "length" parameter is not a number');
  if (length <= 0) throw new Error("value must be greater than 1");
  return id;
}

/**
 * @param {number} length specifies the length of the string to return (if not specified, defaults to 18)
 */
function Id2(length = 18) {
  let l = "0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz";
  let id = "";
  for (let i = 0; i < length; i++) {
    id += l[Math.floor(Math.random() * l.length)];
  }

  if (typeof length !== "number")
    throw new Error('the "length" parameter is not a number');
  if (length <= 0) throw new Error("value must be greater than 1");
  return id;
}

/**
 * @param {string} bytes the byte string to abbreviate (Bytes, KB, MB, GB, TB, PB, EB, ZB, YB)
 * @param {number} fixed the number of digits to appear after the decimal point (default 2, to remove set to 0)
 */
function Size(bytes, fixed = 2) {
  if (bytes == 0) return "0 Bytes";
  if (!bytes) throw new Error('you have not defined the "bytes" parameter');

  let k = 1024;
  let sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  let i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(fixed)) + " " + sizes[i];
}

/**
 * Percent converter
 * @param {number} portion Proportionality of the specified total.
 * @param {number} total Total of specified proportionality.
 * @param {number} fixed The number of digits to appear after the decimal point (default 2, to remove set to 0)
 */

function Percent(portion, total, fixed = 2) {
  if (!portion) throw new Error('you have not defined the "portion" parameter');
  if (!total) throw new Error('you have not defined the "total" parameter');
  return ((portion / total) * 100).toFixed(fixed) + "%";
}

/**
 * @param {number} ms The time in milliseconds
 */
function mstime(ms) {
  let ts = ms / 1000;

  let years = Math.floor(ts / 31557600);
  ts %= 31557600;
  let months = Math.floor(ts / 2629800);
  ts %= 2629800;
  let weeks = Math.floor(ts / 604800.02);
  ts %= 604800.02;
  let days = Math.floor(ts / 86400);
  ts %= 86400;
  let hours = Math.floor(ts / 3600);
  ts %= 3600;
  let minutes = Math.floor(ts / 60);
  let seconds = Math.floor(ts % 60);

  if (!ms) throw new Error('you have not defined the "ms" parameter');
  return { years, months, weeks, days, hours, minutes, seconds };
}

/**
 *
 * @param {Date} date data of type Date.
 */
function format(date) {
  date = new Date(date);

  let hh = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  let mm = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  let tt = date.getHours() >= 12 ? "PM" : "AM";

  if (!date) throw new Error('you have not defined the "date" parameter');

  let $hour = `${hh}:${mm} ${tt}`;
  let $date = date.toLocaleDateString();

  return { hour: $hour, date: $date };
}

/**
 * Choose the version of the Id function you want to use (v1 or v2)
 */
const id = {
  v1: Id1,
  v2: Id2,
};

/**
 * Exports
 */
exports.uuid = id;
exports.size = Size;
exports.percent = Percent;
exports.format = format;
exports.mstime = mstime;
