<#import '/WEB-INF/template/ftl/inc/inc.ftl' as inc />

<@inc.header 'list'>
</@inc.header>

<@inc.body 'list'>
    <ul id="J_List">
    </ul>
</@inc.body>

<@inc.footer>
    <script type="text/javascript" src="${jsRoot}/app/list/main.js?v=${version}"></script>
</@inc.footer>