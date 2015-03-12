<#--<#global ENV = 'development'>-->
<#global ENV = 'testing'>
<#--<#global ENV = 'production'>-->

<#if ENV == 'development'>
    <#global jsRoot = '${ctx}/js'>
    <#global libRoot = '${ctx}/libs'>
    <#global cssRoot = '${ctx}/css'>
<#elseif ENV == 'testing'>
    <#global cdn = 'http://localhost:7000'>
    <#global jsRoot = '${cdn}/dist/js'>
    <#global libRoot = '${cdn}/libs'>
    <#global cssRoot = '${cdn}/dist/css'>
<#else>
    <#global cdn = 'http://ue.17173cdn.com/a/2035/manage/2014'>
    <#global jsRoot = '${cdn}/js'>
    <#global libRoot = '${cdn}/libs'>
    <#global cssRoot = '${cdn}/css'>
</#if>

<#global version = '201503121004'>