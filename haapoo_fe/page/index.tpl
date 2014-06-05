{%extends file="haapoo/page/layout.tpl"%}
{%block name="ico"%}
	<link href="favicon.ico" rel='icon' type="image/x-icon">
	<link href="favicon.ico" type="image/x-icon" rel="shortcut icon">
{%/block%}
{%block name="header"%}
	{%widget name="haapoo:widget/header/header.tpl"%}
{%/block%}
{%block name="body"%}
	{%widget name="haapoo:widget/alsace/alsace.tpl"%}
{%/block%}
