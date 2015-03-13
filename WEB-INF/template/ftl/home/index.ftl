<#import '/WEB-INF/template/ftl/inc/inc.ftl' as inc />

<@inc.header 'home'>
</@inc.header>

<@inc.body 'home'>
    <p><a href="/">home</a></p>
    <p><a href="/list">list</a></p>
</@inc.body>

<@inc.footer>
    <script type="text/javascript" src="${jsRoot}/app/home/main.js?v=${version}"></script>
</@inc.footer>