<#include 'global.ftl'>

<#macro header title>
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>${title!''} - Request Demo</title>

    <#if ENV == 'development'>
        <link type="text/css" rel="stylesheet" href="${cssRoot}/normalize.css?v=${version}" />
        <link type="text/css" rel="stylesheet" href="${cssRoot}/style.css?v=${version}" />
    <#else>
        <link type="text/css" rel="stylesheet" href="${cssRoot}/style.min.css?v=${version}" />
    </#if>

    <script type="text/javascript">
        var version = '${version}';
    </script>

    <#nested>
</head>
</#macro>

<#macro body className>
<body class="${className!''}">
    <#nested>
</#macro>

<#macro footer>
    <#if ENV == 'development'>
        <script type="text/javascript" src="${libRoot}/requirejs/require.js?v=${version}"></script>
    <#else>
        <script type="text/javascript" src="${libRoot}/almond/almond.js?v=${version}"></script>
    </#if>
    <script type="text/javascript" src="${jsRoot}/require-config.js?v=${version}"></script>
    <#nested>
</body>
</html>
</#macro>