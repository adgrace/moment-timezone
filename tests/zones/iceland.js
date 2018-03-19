"use strict";

var helpers = require("../helpers/helpers");

exports["Iceland"] = {
	"1908" : helpers.makeTestYear("Iceland", [
		["1908-01-01T01:27:59+00:00", "23:59:59", "LMT", 88],
		["1908-01-01T01:28:00+00:00", "00:28:00", "-01", 60]
	]),

	"1917" : helpers.makeTestYear("Iceland", [
		["1917-02-19T23:59:59+00:00", "22:59:59", "-01", 60],
		["1917-02-20T00:00:00+00:00", "00:00:00", "+00", 0],
		["1917-10-21T00:59:59+00:00", "00:59:59", "+00", 0],
		["1917-10-21T01:00:00+00:00", "00:00:00", "-01", 60]
	]),

	"1918" : helpers.makeTestYear("Iceland", [
		["1918-02-19T23:59:59+00:00", "22:59:59", "-01", 60],
		["1918-02-20T00:00:00+00:00", "00:00:00", "+00", 0],
		["1918-11-16T00:59:59+00:00", "00:59:59", "+00", 0],
		["1918-11-16T01:00:00+00:00", "00:00:00", "-01", 60]
	]),

	"1919" : helpers.makeTestYear("Iceland", [
		["1919-02-19T23:59:59+00:00", "22:59:59", "-01", 60],
		["1919-02-20T00:00:00+00:00", "00:00:00", "+00", 0],
		["1919-11-16T00:59:59+00:00", "00:59:59", "+00", 0],
		["1919-11-16T01:00:00+00:00", "00:00:00", "-01", 60]
	]),

	"1921" : helpers.makeTestYear("Iceland", [
		["1921-03-19T23:59:59+00:00", "22:59:59", "-01", 60],
		["1921-03-20T00:00:00+00:00", "00:00:00", "+00", 0],
		["1921-06-23T00:59:59+00:00", "00:59:59", "+00", 0],
		["1921-06-23T01:00:00+00:00", "00:00:00", "-01", 60]
	]),

	"1939" : helpers.makeTestYear("Iceland", [
		["1939-04-29T23:59:59+00:00", "22:59:59", "-01", 60],
		["1939-04-30T00:00:00+00:00", "00:00:00", "+00", 0],
		["1939-10-29T01:59:59+00:00", "01:59:59", "+00", 0],
		["1939-10-29T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1940" : helpers.makeTestYear("Iceland", [
		["1940-02-25T02:59:59+00:00", "01:59:59", "-01", 60],
		["1940-02-25T03:00:00+00:00", "03:00:00", "+00", 0],
		["1940-11-03T01:59:59+00:00", "01:59:59", "+00", 0],
		["1940-11-03T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1941" : helpers.makeTestYear("Iceland", [
		["1941-03-02T01:59:59+00:00", "00:59:59", "-01", 60],
		["1941-03-02T02:00:00+00:00", "02:00:00", "+00", 0],
		["1941-11-02T01:59:59+00:00", "01:59:59", "+00", 0],
		["1941-11-02T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1942" : helpers.makeTestYear("Iceland", [
		["1942-03-08T01:59:59+00:00", "00:59:59", "-01", 60],
		["1942-03-08T02:00:00+00:00", "02:00:00", "+00", 0],
		["1942-10-25T01:59:59+00:00", "01:59:59", "+00", 0],
		["1942-10-25T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1943" : helpers.makeTestYear("Iceland", [
		["1943-03-07T01:59:59+00:00", "00:59:59", "-01", 60],
		["1943-03-07T02:00:00+00:00", "02:00:00", "+00", 0],
		["1943-10-24T01:59:59+00:00", "01:59:59", "+00", 0],
		["1943-10-24T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1944" : helpers.makeTestYear("Iceland", [
		["1944-03-05T01:59:59+00:00", "00:59:59", "-01", 60],
		["1944-03-05T02:00:00+00:00", "02:00:00", "+00", 0],
		["1944-10-22T01:59:59+00:00", "01:59:59", "+00", 0],
		["1944-10-22T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1945" : helpers.makeTestYear("Iceland", [
		["1945-03-04T01:59:59+00:00", "00:59:59", "-01", 60],
		["1945-03-04T02:00:00+00:00", "02:00:00", "+00", 0],
		["1945-10-28T01:59:59+00:00", "01:59:59", "+00", 0],
		["1945-10-28T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1946" : helpers.makeTestYear("Iceland", [
		["1946-03-03T01:59:59+00:00", "00:59:59", "-01", 60],
		["1946-03-03T02:00:00+00:00", "02:00:00", "+00", 0],
		["1946-10-27T01:59:59+00:00", "01:59:59", "+00", 0],
		["1946-10-27T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1947" : helpers.makeTestYear("Iceland", [
		["1947-04-06T01:59:59+00:00", "00:59:59", "-01", 60],
		["1947-04-06T02:00:00+00:00", "02:00:00", "+00", 0],
		["1947-10-26T01:59:59+00:00", "01:59:59", "+00", 0],
		["1947-10-26T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1948" : helpers.makeTestYear("Iceland", [
		["1948-04-04T01:59:59+00:00", "00:59:59", "-01", 60],
		["1948-04-04T02:00:00+00:00", "02:00:00", "+00", 0],
		["1948-10-24T01:59:59+00:00", "01:59:59", "+00", 0],
		["1948-10-24T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1949" : helpers.makeTestYear("Iceland", [
		["1949-04-03T01:59:59+00:00", "00:59:59", "-01", 60],
		["1949-04-03T02:00:00+00:00", "02:00:00", "+00", 0],
		["1949-10-30T01:59:59+00:00", "01:59:59", "+00", 0],
		["1949-10-30T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1950" : helpers.makeTestYear("Iceland", [
		["1950-04-02T01:59:59+00:00", "00:59:59", "-01", 60],
		["1950-04-02T02:00:00+00:00", "02:00:00", "+00", 0],
		["1950-10-22T01:59:59+00:00", "01:59:59", "+00", 0],
		["1950-10-22T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1951" : helpers.makeTestYear("Iceland", [
		["1951-04-01T01:59:59+00:00", "00:59:59", "-01", 60],
		["1951-04-01T02:00:00+00:00", "02:00:00", "+00", 0],
		["1951-10-28T01:59:59+00:00", "01:59:59", "+00", 0],
		["1951-10-28T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1952" : helpers.makeTestYear("Iceland", [
		["1952-04-06T01:59:59+00:00", "00:59:59", "-01", 60],
		["1952-04-06T02:00:00+00:00", "02:00:00", "+00", 0],
		["1952-10-26T01:59:59+00:00", "01:59:59", "+00", 0],
		["1952-10-26T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1953" : helpers.makeTestYear("Iceland", [
		["1953-04-05T01:59:59+00:00", "00:59:59", "-01", 60],
		["1953-04-05T02:00:00+00:00", "02:00:00", "+00", 0],
		["1953-10-25T01:59:59+00:00", "01:59:59", "+00", 0],
		["1953-10-25T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1954" : helpers.makeTestYear("Iceland", [
		["1954-04-04T01:59:59+00:00", "00:59:59", "-01", 60],
		["1954-04-04T02:00:00+00:00", "02:00:00", "+00", 0],
		["1954-10-24T01:59:59+00:00", "01:59:59", "+00", 0],
		["1954-10-24T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1955" : helpers.makeTestYear("Iceland", [
		["1955-04-03T01:59:59+00:00", "00:59:59", "-01", 60],
		["1955-04-03T02:00:00+00:00", "02:00:00", "+00", 0],
		["1955-10-23T01:59:59+00:00", "01:59:59", "+00", 0],
		["1955-10-23T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1956" : helpers.makeTestYear("Iceland", [
		["1956-04-01T01:59:59+00:00", "00:59:59", "-01", 60],
		["1956-04-01T02:00:00+00:00", "02:00:00", "+00", 0],
		["1956-10-28T01:59:59+00:00", "01:59:59", "+00", 0],
		["1956-10-28T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1957" : helpers.makeTestYear("Iceland", [
		["1957-04-07T01:59:59+00:00", "00:59:59", "-01", 60],
		["1957-04-07T02:00:00+00:00", "02:00:00", "+00", 0],
		["1957-10-27T01:59:59+00:00", "01:59:59", "+00", 0],
		["1957-10-27T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1958" : helpers.makeTestYear("Iceland", [
		["1958-04-06T01:59:59+00:00", "00:59:59", "-01", 60],
		["1958-04-06T02:00:00+00:00", "02:00:00", "+00", 0],
		["1958-10-26T01:59:59+00:00", "01:59:59", "+00", 0],
		["1958-10-26T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1959" : helpers.makeTestYear("Iceland", [
		["1959-04-05T01:59:59+00:00", "00:59:59", "-01", 60],
		["1959-04-05T02:00:00+00:00", "02:00:00", "+00", 0],
		["1959-10-25T01:59:59+00:00", "01:59:59", "+00", 0],
		["1959-10-25T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1960" : helpers.makeTestYear("Iceland", [
		["1960-04-03T01:59:59+00:00", "00:59:59", "-01", 60],
		["1960-04-03T02:00:00+00:00", "02:00:00", "+00", 0],
		["1960-10-23T01:59:59+00:00", "01:59:59", "+00", 0],
		["1960-10-23T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1961" : helpers.makeTestYear("Iceland", [
		["1961-04-02T01:59:59+00:00", "00:59:59", "-01", 60],
		["1961-04-02T02:00:00+00:00", "02:00:00", "+00", 0],
		["1961-10-22T01:59:59+00:00", "01:59:59", "+00", 0],
		["1961-10-22T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1962" : helpers.makeTestYear("Iceland", [
		["1962-04-01T01:59:59+00:00", "00:59:59", "-01", 60],
		["1962-04-01T02:00:00+00:00", "02:00:00", "+00", 0],
		["1962-10-28T01:59:59+00:00", "01:59:59", "+00", 0],
		["1962-10-28T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1963" : helpers.makeTestYear("Iceland", [
		["1963-04-07T01:59:59+00:00", "00:59:59", "-01", 60],
		["1963-04-07T02:00:00+00:00", "02:00:00", "+00", 0],
		["1963-10-27T01:59:59+00:00", "01:59:59", "+00", 0],
		["1963-10-27T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1964" : helpers.makeTestYear("Iceland", [
		["1964-04-05T01:59:59+00:00", "00:59:59", "-01", 60],
		["1964-04-05T02:00:00+00:00", "02:00:00", "+00", 0],
		["1964-10-25T01:59:59+00:00", "01:59:59", "+00", 0],
		["1964-10-25T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1965" : helpers.makeTestYear("Iceland", [
		["1965-04-04T01:59:59+00:00", "00:59:59", "-01", 60],
		["1965-04-04T02:00:00+00:00", "02:00:00", "+00", 0],
		["1965-10-24T01:59:59+00:00", "01:59:59", "+00", 0],
		["1965-10-24T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1966" : helpers.makeTestYear("Iceland", [
		["1966-04-03T01:59:59+00:00", "00:59:59", "-01", 60],
		["1966-04-03T02:00:00+00:00", "02:00:00", "+00", 0],
		["1966-10-23T01:59:59+00:00", "01:59:59", "+00", 0],
		["1966-10-23T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1967" : helpers.makeTestYear("Iceland", [
		["1967-04-02T01:59:59+00:00", "00:59:59", "-01", 60],
		["1967-04-02T02:00:00+00:00", "02:00:00", "+00", 0],
		["1967-10-29T01:59:59+00:00", "01:59:59", "+00", 0],
		["1967-10-29T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1968" : helpers.makeTestYear("Iceland", [
		["1968-04-07T01:59:59+00:00", "00:59:59", "-01", 60],
		["1968-04-07T02:00:00+00:00", "02:00:00", "GMT", 0]
	])
};