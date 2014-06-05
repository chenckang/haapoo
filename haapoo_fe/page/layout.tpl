<!doctype html>
{%html framework="haapoo:static/libs/mod.js"%}
{%head%}
	<meta charset="utf-8">
	<title>Alsace</title>
	{%block name="ico"%}{%/block%}
	<link rel="stylesheet" type="text/css" href="/static/global.css">
	<link rel="stylesheet" type="text/css" href="/static/reset.css">
{%/head%}
{%body%}
<div id="container">
{%block name="header"%}{%/block%}
{%block name="body"%}{%/block%}
{%block name="footer"%}
	{%widget name="haapoo:widget/footer/footer.tpl"%}
{%/block%}
</div>
{%/body%}
{%/html%}