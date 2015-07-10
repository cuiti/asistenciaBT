


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>Cordova-sqlite-storage/SQLitePlugin.coffee.md at master-rc · litehelpers/Cordova-sqlite-storage</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="litehelpers/Cordova-sqlite-storage" name="twitter:title" /><meta content="Cordova-sqlite-storage - A Cordova/PhoneGap plugin to open and use sqlite databases on Android/iOS/Windows Universal(8.1)/Amazon Fire-OS/WP(7/8) with HTML5/Web SQL API" name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/5294634?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/5294634?v=3&amp;s=400" property="og:image" /><meta content="litehelpers/Cordova-sqlite-storage" property="og:title" /><meta content="https://github.com/litehelpers/Cordova-sqlite-storage" property="og:url" /><meta content="Cordova-sqlite-storage - A Cordova/PhoneGap plugin to open and use sqlite databases on Android/iOS/Windows Universal(8.1)/Amazon Fire-OS/WP(7/8) with HTML5/Web SQL API" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MTE4OTMwMjU6NmNlMjcyMmU5NThlZTQzOTYwNGUzNDczNDkzMjI4MmQ6NmZkZjg4N2Y0ODBiZTU5ODMxZDJkMmRjZGU0NTNkMjQ3NGYyOTM2NDI1ODU0NTc0NDA3NGNlNjlhYWE3MjAyYg==--9ad4876c7a6cdb6771afe233698ea9cf9cf277a2">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="BEBF46A5:07EB:8E0C32B:55573BB8" name="octolytics-dimension-request_id" /><meta content="11893025" name="octolytics-actor-id" /><meta content="jffs" name="octolytics-actor-login" /><meta content="66774c808893b0298d1138e169859b417e9597fd0536ff7eabd6028190d1e314" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />
    <meta class="js-ga-set" name="dimension1" content="Logged In">
    <meta class="js-ga-set" name="dimension2" content="Header v3">
    <meta name="is-dotcom" content="true">
    <meta name="hostname" content="github.com">
    <meta name="user-login" content="jffs">

    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="XWbD7WRQ8GUdayKYZNE0ca7ydQMcIc78N9dBF6kwrnr9c0cdNn+ulIy2IShEETy6ehzUA9GXxJrGmuVWX2b76A==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github/index-d80e093fe7c48ff920ce83dfd2ad7c02806722220d164b49101ed783098ea618.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2/index-99a58ea750b0547d1266460cd4ade0c2c81ed8c524cbba4ea5e3b37e18daec79.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="282d80bd51fc0e03270191711c02f726">

      
  <meta name="description" content="Cordova-sqlite-storage - A Cordova/PhoneGap plugin to open and use sqlite databases on Android/iOS/Windows Universal(8.1)/Amazon Fire-OS/WP(7/8) with HTML5/Web SQL API">
  <meta name="go-import" content="github.com/litehelpers/Cordova-sqlite-storage git https://github.com/litehelpers/Cordova-sqlite-storage.git">

  <meta content="5294634" name="octolytics-dimension-user_id" /><meta content="litehelpers" name="octolytics-dimension-user_login" /><meta content="10120864" name="octolytics-dimension-repository_id" /><meta content="litehelpers/Cordova-sqlite-storage" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="10120864" name="octolytics-dimension-repository_network_root_id" /><meta content="litehelpers/Cordova-sqlite-storage" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/litehelpers/Cordova-sqlite-storage/commits/master-rc.atom" rel="alternate" title="Recent Commits to Cordova-sqlite-storage:master-rc" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      


        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/litehelpers/Cordova-sqlite-storage/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/litehelpers/Cordova-sqlite-storage/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item explore">
            <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
          </li>
            <li class="header-nav-item">
              <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
            </li>
            <li class="header-nav-item">
              <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
            </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
          </li>
      </ul>

      
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/jffs" data-ga-click="Header, go to profile, text:username">
      <img alt="@jffs" class="avatar" data-user="11893025" height="20" src="https://avatars0.githubusercontent.com/u/11893025?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">jffs</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="/new" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu">
        
<li>
  <a href="/new" data-ga-click="Header, create new repository, icon:repo"><span class="octicon octicon-repo"></span> New repository</a>
</li>
<li>
  <a href="/organizations/new" data-ga-click="Header, create new organization, icon:organization"><span class="octicon octicon-organization"></span> New organization</a>
</li>


  <li class="dropdown-divider"></li>
  <li class="dropdown-header">
    <span title="litehelpers/Cordova-sqlite-storage">This repository</span>
  </li>
    <li>
      <a href="/litehelpers/Cordova-sqlite-storage/issues/new" data-ga-click="Header, create new issue, icon:issue"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>

      </ul>
    </div>
  </li>

  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:jffs"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
          <span class="mail-status all-read"></span>
          <span class="octicon octicon-inbox"></span>
</a>  </span>

  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="KtweufuVbYnfFnMl9EczgcUCQkafnEgSwBTbjjPtRRKXhSOe080brmZ1z8toFCiyF6K72BdU4NctzOqB1/Uz6Q==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>



    
  </div>
</div>

        

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

  <li>
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Y7Wp8cTJ2JHH1jUtp61r1E6CSFT4/haYJUn5ThaSVRDhGKowzYOzqWycBbWZbcf6VdpkN4BWCSKJwwBR9zzc0Q==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="10120864" />

      <div class="select-menu js-menu-container js-select-menu">
        <a href="/litehelpers/Cordova-sqlite-storage/subscription"
          class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:blob#show">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>
        <a class="social-count js-social-count" href="/litehelpers/Cordova-sqlite-storage/watchers">
          78
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/litehelpers/Cordova-sqlite-storage/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="U4sxyP82W/Gk3VsmyMDQLonaZ44kt+4w2YJenDvx0xKuUdtbMr4wAUpWPE7gTiSOkTbqissg9BSgqMC2tYswSw==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar litehelpers/Cordova-sqlite-storage"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/litehelpers/Cordova-sqlite-storage/stargazers">
          680
        </a>
</form>
    <form accept-charset="UTF-8" action="/litehelpers/Cordova-sqlite-storage/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="J5Pn6XIpbN4DinOl5vZiQo50qwY13Hgd4KjbC8nKH6+4VL/NNmqyEWXD4cIUklxZ8OKUq9mFlRdPOCi7HX1xAA==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star litehelpers/Cordova-sqlite-storage"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/litehelpers/Cordova-sqlite-storage/stargazers">
          680
        </a>
</form>  </div>

  </li>

        <li>
          <form accept-charset="UTF-8" action="/litehelpers/Cordova-sqlite-storage/fork" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="VoshvajVhsTJWhHinIWeQaNj6h+/kyAZAoSRNNvk2JUfmijLfY4YFMwKPpu8IlQRnR2XWaDJzvtUgT/l5snmfg==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of litehelpers/Cordova-sqlite-storage to your account"
                aria-label="Fork your own copy of litehelpers/Cordova-sqlite-storage to your account">
              <span class="octicon octicon-repo-forked"></span>
              Fork
            </button>
            <a href="/litehelpers/Cordova-sqlite-storage/network" class="social-count">296</a>
</form>        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/litehelpers" class="url fn" itemprop="url" rel="author"><span itemprop="title">litehelpers</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/litehelpers/Cordova-sqlite-storage" class="js-current-repository" data-pjax="#js-repo-pjax-container">Cordova-sqlite-storage</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/litehelpers/Cordova-sqlite-storage/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/litehelpers/Cordova-sqlite-storage" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /litehelpers/Cordova-sqlite-storage">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/litehelpers/Cordova-sqlite-storage/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /litehelpers/Cordova-sqlite-storage/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/litehelpers/Cordova-sqlite-storage/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /litehelpers/Cordova-sqlite-storage/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/litehelpers/Cordova-sqlite-storage/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /litehelpers/Cordova-sqlite-storage/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/litehelpers/Cordova-sqlite-storage/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /litehelpers/Cordova-sqlite-storage/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/litehelpers/Cordova-sqlite-storage.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:litehelpers/Cordova-sqlite-storage.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/litehelpers/Cordova-sqlite-storage" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="github-windows://openRepo/https://github.com/litehelpers/Cordova-sqlite-storage" class="btn btn-sm sidebar-button" title="Save litehelpers/Cordova-sqlite-storage to your computer and use it in GitHub Desktop." aria-label="Save litehelpers/Cordova-sqlite-storage to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/litehelpers/Cordova-sqlite-storage/archive/master-rc.zip"
                   class="btn btn-sm sidebar-button"
                   aria-label="Download the contents of litehelpers/Cordova-sqlite-storage as a zip file"
                   title="Download the contents of litehelpers/Cordova-sqlite-storage as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

          

<a href="/litehelpers/Cordova-sqlite-storage/blob/ca64e6da82c1e83ce3e3da3fe8b75d6aa9cd28e3/SQLitePlugin.coffee.md" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:54db3ae4e398875f8603b8cbc4777a23 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master-rc"
    data-ref="master-rc"
    title="master-rc"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master-rc</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/common-src/SQLitePlugin.coffee.md"
               data-name="common-src"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="common-src">
                common-src
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/common-test/SQLitePlugin.coffee.md"
               data-name="common-test"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="common-test">
                common-test
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/cordova-sqlite-common/SQLitePlugin.coffee.md"
               data-name="cordova-sqlite-common"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="cordova-sqlite-common">
                cordova-sqlite-common
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/cordova-sqlite-test/SQLitePlugin.coffee.md"
               data-name="cordova-sqlite-test"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="cordova-sqlite-test">
                cordova-sqlite-test
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/litehelpers/Cordova-sqlite-storage/blob/master-rc/SQLitePlugin.coffee.md"
               data-name="master-rc"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master-rc">
                master-rc
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/master-src/SQLitePlugin.coffee.md"
               data-name="master-src"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master-src">
                master-src
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/new-common-rc/SQLitePlugin.coffee.md"
               data-name="new-common-rc"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="new-common-rc">
                new-common-rc
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/new-common-src/SQLitePlugin.coffee.md"
               data-name="new-common-src"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="new-common-src">
                new-common-src
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/new-src/SQLitePlugin.coffee.md"
               data-name="new-src"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="new-src">
                new-src
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/vb-master-dev-with-wp-dll-2014.07/SQLitePlugin.coffee.md"
               data-name="vb-master-dev-with-wp-dll-2014.07"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="vb-master-dev-with-wp-dll-2014.07">
                vb-master-dev-with-wp-dll-2014.07
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/windows-common/SQLitePlugin.coffee.md"
               data-name="windows-common"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="windows-common">
                windows-common
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/windows-common-src/SQLitePlugin.coffee.md"
               data-name="windows-common-src"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="windows-common-src">
                windows-common-src
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/wp-master-rc/SQLitePlugin.coffee.md"
               data-name="wp-master-rc"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="wp-master-rc">
                wp-master-rc
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/wp-src/SQLitePlugin.coffee.md"
               data-name="wp-src"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="wp-src">
                wp-src
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/xb-aarononeal-201501/SQLitePlugin.coffee.md"
               data-name="xb-aarononeal-201501"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="xb-aarononeal-201501">
                xb-aarononeal-201501
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/xb-aarononeal-201502/SQLitePlugin.coffee.md"
               data-name="xb-aarononeal-201502"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="xb-aarononeal-201502">
                xb-aarononeal-201502
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/xb-android-json-error-code-2013.08/SQLitePlugin.coffee.md"
               data-name="xb-android-json-error-code-2013.08"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="xb-android-json-error-code-2013.08">
                xb-android-json-error-code-2013.08
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/xb-android-lock-workaround/SQLitePlugin.coffee.md"
               data-name="xb-android-lock-workaround"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="xb-android-lock-workaround">
                xb-android-lock-workaround
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/xb-first-sqlite4java-amd64-fix/SQLitePlugin.coffee.md"
               data-name="xb-first-sqlite4java-amd64-fix"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="xb-first-sqlite4java-amd64-fix">
                xb-first-sqlite4java-amd64-fix
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/xb-full-test-rc/SQLitePlugin.coffee.md"
               data-name="xb-full-test-rc"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="xb-full-test-rc">
                xb-full-test-rc
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/xb-ios-ef4-tx-fix-in-coffeescript-2013.07/SQLitePlugin.coffee.md"
               data-name="xb-ios-ef4-tx-fix-in-coffeescript-2013.07"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="xb-ios-ef4-tx-fix-in-coffeescript-2013.07">
                xb-ios-ef4-tx-fix-in-coffeescript-2013.07
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/xb-mark-wp8-callbacks/SQLitePlugin.coffee.md"
               data-name="xb-mark-wp8-callbacks"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="xb-mark-wp8-callbacks">
                xb-mark-wp8-callbacks
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/xb-new-rc-20150330/SQLitePlugin.coffee.md"
               data-name="xb-new-rc-20150330"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="xb-new-rc-20150330">
                xb-new-rc-20150330
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/xb-old-common-src/SQLitePlugin.coffee.md"
               data-name="xb-old-common-src"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="xb-old-common-src">
                xb-old-common-src
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/xb-open-cb-fix/SQLitePlugin.coffee.md"
               data-name="xb-open-cb-fix"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="xb-open-cb-fix">
                xb-open-cb-fix
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/xb-rikshadriver-2013-10/SQLitePlugin.coffee.md"
               data-name="xb-rikshadriver-2013-10"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="xb-rikshadriver-2013-10">
                xb-rikshadriver-2013-10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/xb-rikshadriver-2014-03/SQLitePlugin.coffee.md"
               data-name="xb-rikshadriver-2014-03"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="xb-rikshadriver-2014-03">
                xb-rikshadriver-2014-03
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/xb-sqlite4java-test1/SQLitePlugin.coffee.md"
               data-name="xb-sqlite4java-test1"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="xb-sqlite4java-test1">
                xb-sqlite4java-test1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/xb-vacation-2014-09/SQLitePlugin.coffee.md"
               data-name="xb-vacation-2014-09"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="xb-vacation-2014-09">
                xb-vacation-2014-09
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/xb-vldmrrr-windows-pr1/SQLitePlugin.coffee.md"
               data-name="xb-vldmrrr-windows-pr1"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="xb-vldmrrr-windows-pr1">
                xb-vldmrrr-windows-pr1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/xb-vldmrrr-windows-pr2/SQLitePlugin.coffee.md"
               data-name="xb-vldmrrr-windows-pr2"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="xb-vldmrrr-windows-pr2">
                xb-vldmrrr-windows-pr2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/xb-windows-test-2015-03/SQLitePlugin.coffee.md"
               data-name="xb-windows-test-2015-03"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="xb-windows-test-2015-03">
                xb-windows-test-2015-03
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/xb-wp8-native-2013.09/SQLitePlugin.coffee.md"
               data-name="xb-wp8-native-2013.09"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="xb-wp8-native-2013.09">
                xb-wp8-native-2013.09
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/litehelpers/Cordova-sqlite-storage/blob/xb-wp-csharp-sqlite-2013.10/SQLitePlugin.coffee.md"
               data-name="xb-wp-csharp-sqlite-2013.10"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="xb-wp-csharp-sqlite-2013.10">
                xb-wp-csharp-sqlite-2013.10
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/xv-wp8-dllimport-pre-merge-2014.07/SQLitePlugin.coffee.md"
                 data-name="xv-wp8-dllimport-pre-merge-2014.07"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="xv-wp8-dllimport-pre-merge-2014.07">xv-wp8-dllimport-pre-merge-2014.07</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/xv-wp8-dllimport-merge-2014.07/SQLitePlugin.coffee.md"
                 data-name="xv-wp8-dllimport-merge-2014.07"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="xv-wp8-dllimport-merge-2014.07">xv-wp8-dllimport-merge-2014.07</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/xv-pre-wp8-merge-2014.07/SQLitePlugin.coffee.md"
                 data-name="xv-pre-wp8-merge-2014.07"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="xv-pre-wp8-merge-2014.07">xv-pre-wp8-merge-2014.07</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/xt-open-cb-success-fix-android-2013.10/SQLitePlugin.coffee.md"
                 data-name="xt-open-cb-success-fix-android-2013.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="xt-open-cb-success-fix-android-2013.10">xt-open-cb-success-fix-android-2013.10</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/xt-ios-ef4-tx-fix-in-coffeescript-2013.07/SQLitePlugin.coffee.md"
                 data-name="xt-ios-ef4-tx-fix-in-coffeescript-2013.07"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="xt-ios-ef4-tx-fix-in-coffeescript-2013.07">xt-ios-ef4-tx-fix-in-coffeescript-2013.07</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/wp-csharp-sqlite-pre-merge-2014-1/SQLitePlugin.coffee.md"
                 data-name="wp-csharp-sqlite-pre-merge-2014-1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="wp-csharp-sqlite-pre-merge-2014-1">wp-csharp-sqlite-pre-merge-2014-1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/wp-csharp-sqlite-2014-2/SQLitePlugin.coffee.md"
                 data-name="wp-csharp-sqlite-2014-2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="wp-csharp-sqlite-2014-2">wp-csharp-sqlite-2014-2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/wp-csharp-sqlite-2014-1/SQLitePlugin.coffee.md"
                 data-name="wp-csharp-sqlite-2014-1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="wp-csharp-sqlite-2014-1">wp-csharp-sqlite-2014-1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-wp-orig-2013.07/SQLitePlugin.coffee.md"
                 data-name="vv-wp-orig-2013.07"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-wp-orig-2013.07">vv-wp-orig-2013.07</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-wp-dlls-first-2014.07/SQLitePlugin.coffee.md"
                 data-name="vv-wp-dlls-first-2014.07"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-wp-dlls-first-2014.07">vv-wp-dlls-first-2014.07</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-wp-csharp-sqlite-src-2013.09/SQLitePlugin.coffee.md"
                 data-name="vv-wp-csharp-sqlite-src-2013.09"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-wp-csharp-sqlite-src-2013.09">vv-wp-csharp-sqlite-src-2013.09</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-wp-csharp-sqlite-pre-merge-1-2014.07/SQLitePlugin.coffee.md"
                 data-name="vv-wp-csharp-sqlite-pre-merge-1-2014.07"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-wp-csharp-sqlite-pre-merge-1-2014.07">vv-wp-csharp-sqlite-pre-merge-1-2014.07</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-wp-csharp-sqlite-pre-2013.09/SQLitePlugin.coffee.md"
                 data-name="vv-wp-csharp-sqlite-pre-2013.09"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-wp-csharp-sqlite-pre-2013.09">vv-wp-csharp-sqlite-pre-2013.09</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-wp-csharp-merge-2-2014.07/SQLitePlugin.coffee.md"
                 data-name="vv-wp-csharp-merge-2-2014.07"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-wp-csharp-merge-2-2014.07">vv-wp-csharp-merge-2-2014.07</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-wp-csharp-merge-1-2014.07/SQLitePlugin.coffee.md"
                 data-name="vv-wp-csharp-merge-1-2014.07"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-wp-csharp-merge-1-2014.07">vv-wp-csharp-merge-1-2014.07</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-windows-arm-fix-2015.04.28/SQLitePlugin.coffee.md"
                 data-name="vv-windows-arm-fix-2015.04.28"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-windows-arm-fix-2015.04.28">vv-windows-arm-fix-2015.04.28</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-perflogs-2013.09-0/SQLitePlugin.coffee.md"
                 data-name="vv-perflogs-2013.09-0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-perflogs-2013.09-0">vv-perflogs-2013.09-0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-orig-ios-pre-merge-2012.04/SQLitePlugin.coffee.md"
                 data-name="vv-orig-ios-pre-merge-2012.04"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-orig-ios-pre-merge-2012.04">vv-orig-ios-pre-merge-2012.04</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-orig-ios-first-2011.06/SQLitePlugin.coffee.md"
                 data-name="vv-orig-ios-first-2011.06"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-orig-ios-first-2011.06">vv-orig-ios-first-2011.06</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-orig-droidgap-2014.04/SQLitePlugin.coffee.md"
                 data-name="vv-orig-droidgap-2014.04"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-orig-droidgap-2014.04">vv-orig-droidgap-2014.04</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-orig-android-pre-merge-2012.04/SQLitePlugin.coffee.md"
                 data-name="vv-orig-android-pre-merge-2012.04"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-orig-android-pre-merge-2012.04">vv-orig-android-pre-merge-2012.04</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-orig-android-ios-combo-merge-2014.04/SQLitePlugin.coffee.md"
                 data-name="vv-orig-android-ios-combo-merge-2014.04"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-orig-android-ios-combo-merge-2014.04">vv-orig-android-ios-combo-merge-2014.04</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-orig-android-ios-combo-2012.12/SQLitePlugin.coffee.md"
                 data-name="vv-orig-android-ios-combo-2012.12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-orig-android-ios-combo-2012.12">vv-orig-android-ios-combo-2012.12</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-ios-stormtek-2013.06/SQLitePlugin.coffee.md"
                 data-name="vv-ios-stormtek-2013.06"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-ios-stormtek-2013.06">vv-ios-stormtek-2013.06</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-ios-r2013.08/SQLitePlugin.coffee.md"
                 data-name="vv-ios-r2013.08"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-ios-r2013.08">vv-ios-r2013.08</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-ios-r2013.07/SQLitePlugin.coffee.md"
                 data-name="vv-ios-r2013.07"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-ios-r2013.07">vv-ios-r2013.07</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-ios-r2013.05/SQLitePlugin.coffee.md"
                 data-name="vv-ios-r2013.05"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-ios-r2013.05">vv-ios-r2013.05</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-ios-pre-merge-2013.09/SQLitePlugin.coffee.md"
                 data-name="vv-ios-pre-merge-2013.09"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-ios-pre-merge-2013.09">vv-ios-pre-merge-2013.09</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-ios-json-error-fix-2013.08/SQLitePlugin.coffee.md"
                 data-name="vv-ios-json-error-fix-2013.08"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-ios-json-error-fix-2013.08">vv-ios-json-error-fix-2013.08</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-ios-exec-json-fix-2013.08/SQLitePlugin.coffee.md"
                 data-name="vv-ios-exec-json-fix-2013.08"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-ios-exec-json-fix-2013.08">vv-ios-exec-json-fix-2013.08</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-ios-bind-number-values-as-numbers-2013.05/SQLitePlugin.coffee.md"
                 data-name="vv-ios-bind-number-values-as-numbers-2013.05"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-ios-bind-number-values-as-numbers-2013.05">vv-ios-bind-number-values-as-numbers-2013.05</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-fix-cb-order-2014.07/SQLitePlugin.coffee.md"
                 data-name="vv-fix-cb-order-2014.07"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-fix-cb-order-2014.07">vv-fix-cb-order-2014.07</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-droidgap-orig-2012.04/SQLitePlugin.coffee.md"
                 data-name="vv-droidgap-orig-2012.04"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-droidgap-orig-2012.04">vv-droidgap-orig-2012.04</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-android-tx-cb-fix-2013.07/SQLitePlugin.coffee.md"
                 data-name="vv-android-tx-cb-fix-2013.07"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-android-tx-cb-fix-2013.07">vv-android-tx-cb-fix-2013.07</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-android-pre-merge-2013.09/SQLitePlugin.coffee.md"
                 data-name="vv-android-pre-merge-2013.09"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-android-pre-merge-2013.09">vv-android-pre-merge-2013.09</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-android-orig-2012.04/SQLitePlugin.coffee.md"
                 data-name="vv-android-orig-2012.04"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-android-orig-2012.04">vv-android-orig-2012.04</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-android-ios-merge-2013.09/SQLitePlugin.coffee.md"
                 data-name="vv-android-ios-merge-2013.09"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-android-ios-merge-2013.09">vv-android-ios-merge-2013.09</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-android-ics-tx-fix-2013.10/SQLitePlugin.coffee.md"
                 data-name="vv-android-ics-tx-fix-2013.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-android-ics-tx-fix-2013.10">vv-android-ics-tx-fix-2013.10</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-android-ef4-tx-fix-2013.07/SQLitePlugin.coffee.md"
                 data-name="vv-android-ef4-tx-fix-2013.07"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-android-ef4-tx-fix-2013.07">vv-android-ef4-tx-fix-2013.07</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-android-ef4-tx-error-fix-2013.07/SQLitePlugin.coffee.md"
                 data-name="vv-android-ef4-tx-error-fix-2013.07"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-android-ef4-tx-error-fix-2013.07">vv-android-ef4-tx-error-fix-2013.07</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-android-2013.02/SQLitePlugin.coffee.md"
                 data-name="vv-android-2013.02"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-android-2013.02">vv-android-2013.02</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-android-2013.01/SQLitePlugin.coffee.md"
                 data-name="vv-android-2013.01"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-android-2013.01">vv-android-2013.01</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/vv-2013.09-perflogs-1/SQLitePlugin.coffee.md"
                 data-name="vv-2013.09-perflogs-1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="vv-2013.09-perflogs-1">vv-2013.09-perflogs-1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/r2015.02/SQLitePlugin.coffee.md"
                 data-name="r2015.02"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="r2015.02">r2015.02</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/r2014.09/SQLitePlugin.coffee.md"
                 data-name="r2014.09"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="r2014.09">r2014.09</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/r2014.07/SQLitePlugin.coffee.md"
                 data-name="r2014.07"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="r2014.07">r2014.07</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/r2014.06/SQLitePlugin.coffee.md"
                 data-name="r2014.06"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="r2014.06">r2014.06</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/r2013.10/SQLitePlugin.coffee.md"
                 data-name="r2013.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="r2013.10">r2013.10</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/r2013.05/SQLitePlugin.coffee.md"
                 data-name="r2013.05"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="r2013.05">r2013.05</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/r2012.11/SQLitePlugin.coffee.md"
                 data-name="r2012.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="r2012.11">r2012.11</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/r2012.10/SQLitePlugin.coffee.md"
                 data-name="r2012.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="r2012.10">r2012.10</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/r1.0.4/SQLitePlugin.coffee.md"
                 data-name="r1.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="r1.0.4">r1.0.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/r0.7.5-old/SQLitePlugin.coffee.md"
                 data-name="r0.7.5-old"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="r0.7.5-old">r0.7.5-old</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/0.7.7/SQLitePlugin.coffee.md"
                 data-name="0.7.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.7.7">0.7.7</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/0.7.6/SQLitePlugin.coffee.md"
                 data-name="0.7.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.7.6">0.7.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litehelpers/Cordova-sqlite-storage/tree/0.7.5/SQLitePlugin.coffee.md"
                 data-name="0.7.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.7.5">0.7.5</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/litehelpers/Cordova-sqlite-storage/find/master-rc"
          class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/litehelpers/Cordova-sqlite-storage" class="" data-branch="master-rc" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">Cordova-sqlite-storage</span></a></span></span><span class="separator">/</span><strong class="final-path">SQLitePlugin.coffee.md</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="@brodybits" class="avatar" data-user="1559888" height="24" src="https://avatars1.githubusercontent.com/u/1559888?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/brodybits" rel="contributor">brodybits</a></span>
        <time datetime="2015-05-15T11:33:01Z" is="relative-time">May 15, 2015</time>
        <div class="commit-title">
            <a href="/litehelpers/Cordova-sqlite-storage/commit/8857dd5e72e5187fcd48d2c5d26b99507a6b17e2" class="message" data-pjax="true" title="Merge branch &#39;cordova-sqlite-common&#39; into master-rc (with minor fixes to README.md)">Merge branch 'cordova-sqlite-common' into master-rc (with minor fixes…</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>3</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="brodybits" href="/litehelpers/Cordova-sqlite-storage/commits/master-rc/SQLitePlugin.coffee.md?author=brodybits"><img alt="@brodybits" class="avatar" data-user="1559888" height="20" src="https://avatars3.githubusercontent.com/u/1559888?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="aarononeal" href="/litehelpers/Cordova-sqlite-storage/commits/master-rc/SQLitePlugin.coffee.md?author=aarononeal"><img alt="@aarononeal" class="avatar" data-user="1740567" height="20" src="https://avatars1.githubusercontent.com/u/1740567?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="nolanlawson" href="/litehelpers/Cordova-sqlite-storage/commits/master-rc/SQLitePlugin.coffee.md?author=nolanlawson"><img alt="@nolanlawson" class="avatar" data-user="283842" height="20" src="https://avatars0.githubusercontent.com/u/283842?v=3&amp;s=40" width="20" /> </a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="@brodybits" data-user="1559888" height="24" src="https://avatars1.githubusercontent.com/u/1559888?v=3&amp;s=48" width="24" />
            <a href="/brodybits">brodybits</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@aarononeal" data-user="1740567" height="24" src="https://avatars3.githubusercontent.com/u/1740567?v=3&amp;s=48" width="24" />
            <a href="/aarononeal">aarononeal</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@nolanlawson" data-user="283842" height="24" src="https://avatars2.githubusercontent.com/u/283842?v=3&amp;s=48" width="24" />
            <a href="/nolanlawson">nolanlawson</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
    <div class="file-actions">

      <div class="btn-group">
        <a href="/litehelpers/Cordova-sqlite-storage/raw/master-rc/SQLitePlugin.coffee.md" class="btn btn-sm " id="raw-url">Raw</a>
          <a href="/litehelpers/Cordova-sqlite-storage/blame/master-rc/SQLitePlugin.coffee.md" class="btn btn-sm js-update-url-with-hash">Blame</a>
        <a href="/litehelpers/Cordova-sqlite-storage/commits/master-rc/SQLitePlugin.coffee.md" class="btn btn-sm " rel="nofollow">History</a>
      </div>

        <a class="octicon-btn tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/litehelpers/Cordova-sqlite-storage?branch=master-rc&amp;filepath=SQLitePlugin.coffee.md"
           aria-label="Open this file in GitHub for Windows"
           data-ga-click="Repository, open with desktop, type:windows">
            <span class="octicon octicon-device-desktop"></span>
        </a>

            <form accept-charset="UTF-8" action="/litehelpers/Cordova-sqlite-storage/edit/master-rc/SQLitePlugin.coffee.md" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="8Pd0cz9CGV5tgnjSkzIoV3xyPe/BvkKlXfefhKV1ndJPkKkpGMzVTfAurUX9wlYHfLC0OG6qyGiugYD3LtBAaQ==" /></div>
              <button class="octicon-btn tooltipped tooltipped-n" type="submit" aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
                <span class="octicon octicon-pencil"></span>
              </button>
</form>
          <form accept-charset="UTF-8" action="/litehelpers/Cordova-sqlite-storage/delete/master-rc/SQLitePlugin.coffee.md" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="HOdSbHyPRqXbpHV20EFVRKnOpogzlwK986CFNgyfaUgtOQUNMLmBPGLXOwMNO711N2q59RiOqlTLkfxzw0t05A==" /></div>
            <button class="octicon-btn octicon-btn-danger tooltipped tooltipped-n" type="submit" aria-label="Fork this project and delete this file" data-disable-with>
              <span class="octicon octicon-trashcan"></span>
            </button>
</form>    </div>

    <div class="file-info">
        604 lines (455 sloc)
        <span class="file-info-divider"></span>
      18.995 kb
    </div>
  </div>
    <div id="readme" class="blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1>
<a id="user-content-sqlite-plugin-in-markdown-litcoffee" class="anchor" href="#sqlite-plugin-in-markdown-litcoffee" aria-hidden="true"><span class="octicon octicon-link"></span></a>SQLite plugin in Markdown (litcoffee)</h1>

<h4>
<a id="user-content-use-coffee-compiler-to-compile-this-directly-into-javascript" class="anchor" href="#use-coffee-compiler-to-compile-this-directly-into-javascript" aria-hidden="true"><span class="octicon octicon-link"></span></a>Use coffee compiler to compile this directly into Javascript</h4>

<h4>
<a id="user-content-license-for-common-script-mit-or-apache" class="anchor" href="#license-for-common-script-mit-or-apache" aria-hidden="true"><span class="octicon octicon-link"></span></a>License for common script: MIT or Apache</h4>

<h1>
<a id="user-content-top-level-sqlite-plugin-objects" class="anchor" href="#top-level-sqlite-plugin-objects" aria-hidden="true"><span class="octicon octicon-link"></span></a>Top-level SQLite plugin objects</h1>

<h2>
<a id="user-content-root-window-object" class="anchor" href="#root-window-object" aria-hidden="true"><span class="octicon octicon-link"></span></a>root window object:</h2>

<div class="highlight highlight-coffee"><pre><span class="pl-v"><span class="pl-v">root <span class="pl-k">=</span></span></span> <span class="pl-smi">@</span></pre></div>

<h2>
<a id="user-content-constants" class="anchor" href="#constants" aria-hidden="true"><span class="octicon octicon-link"></span></a>constant(s):</h2>

<div class="highlight highlight-coffee"><pre><span class="pl-v"><span class="pl-v">READ_ONLY_REGEX <span class="pl-k">=</span></span></span> <span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\s</span><span class="pl-k">*</span>(?:drop<span class="pl-k">|</span>delete<span class="pl-k">|</span>insert<span class="pl-k">|</span>update<span class="pl-k">|</span>create)<span class="pl-c1">\s</span><span class="pl-pds">/</span>i</span>

<span class="pl-c"># per-db state</span>
<span class="pl-v"><span class="pl-v">DB_STATE_INIT <span class="pl-k">=</span></span></span> <span class="pl-s"><span class="pl-pds">"</span>INIT<span class="pl-pds">"</span></span>
<span class="pl-v"><span class="pl-v">DB_STATE_OPEN <span class="pl-k">=</span></span></span> <span class="pl-s"><span class="pl-pds">"</span>OPEN<span class="pl-pds">"</span></span></pre></div>

<h2>
<a id="user-content-globals" class="anchor" href="#globals" aria-hidden="true"><span class="octicon octicon-link"></span></a>global(s):</h2>

<div class="highlight highlight-coffee"><pre><span class="pl-c"># per-db map of locking and queueing</span>
<span class="pl-c"># XXX NOTE: This is NOT cleaned up when a db is closed and/or deleted.</span>
<span class="pl-c"># If the record is simply removed when a db is closed or deleted,</span>
<span class="pl-c"># it will cause some test failures and may break large-scale</span>
<span class="pl-c"># applications that repeatedly open and close the database.</span>
<span class="pl-c"># [BUG #210] TODO: better to abort and clean up the pending transaction state.</span>
<span class="pl-c"># XXX TBD this will be renamed and include some more per-db state.</span>
<span class="pl-v"><span class="pl-v">txLocks <span class="pl-k">=</span></span></span> {}</pre></div>

<h2>
<a id="user-content-utility-functions" class="anchor" href="#utility-functions" aria-hidden="true"><span class="octicon octicon-link"></span></a>utility functions:</h2>

<div class="highlight highlight-coffee"><pre><span class="pl-c"># Errors returned to callbacks must conform to `SqlError` with a code and message.</span>
<span class="pl-c"># Some errors are of type `Error` or `string` and must be converted.</span>
<span class="pl-en">newSQLError </span><span class="pl-k">=</span><span class="pl-smi"> <span class="pl-smi">(error, code)</span></span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
  <span class="pl-v"><span class="pl-v">sqlError <span class="pl-k">=</span></span></span> error
  <span class="pl-v"><span class="pl-v">code <span class="pl-k">=</span></span></span> <span class="pl-c1">0</span> <span class="pl-k">if</span> <span class="pl-k">!</span>code <span class="pl-c"># unknown by default</span>

  <span class="pl-k">if</span> <span class="pl-k">!</span>sqlError
    <span class="pl-v"><span class="pl-v">sqlError <span class="pl-k">=</span></span></span> <span class="pl-k">new</span> <span class="pl-en">Error</span> <span class="pl-s"><span class="pl-pds">"</span>a plugin had an error but provided no response<span class="pl-pds">"</span></span>
    <span class="pl-v"><span class="pl-v">sqlError.code <span class="pl-k">=</span></span></span> code

  <span class="pl-k">if</span> <span class="pl-k">typeof</span> sqlError <span class="pl-k">is</span> <span class="pl-s"><span class="pl-pds">"</span>string<span class="pl-pds">"</span></span>
    <span class="pl-v"><span class="pl-v">sqlError <span class="pl-k">=</span></span></span> <span class="pl-k">new</span> <span class="pl-en">Error</span> error
    <span class="pl-v"><span class="pl-v">sqlError.code <span class="pl-k">=</span></span></span> code

  <span class="pl-k">if</span> <span class="pl-k">!</span>sqlError.code <span class="pl-k">&amp;&amp;</span> sqlError.message
    <span class="pl-v"><span class="pl-v">sqlError.code <span class="pl-k">=</span></span></span> code

  <span class="pl-k">if</span> <span class="pl-k">!</span>sqlError.code <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>sqlError.message
    <span class="pl-v"><span class="pl-v">sqlError <span class="pl-k">=</span></span></span> <span class="pl-k">new</span> <span class="pl-en">Error</span> <span class="pl-s"><span class="pl-pds">"</span>an unknown error was returned: <span class="pl-pds">"</span></span> <span class="pl-k">+</span> JSON.stringify(sqlError)
    <span class="pl-v"><span class="pl-v">sqlError.code <span class="pl-k">=</span></span></span> code

  <span class="pl-k">return</span> sqlError

<span class="pl-v"><span class="pl-v">nextTick <span class="pl-k">=</span></span></span> <span class="pl-c1">window</span>.setImmediate <span class="pl-k">||</span> <span class="pl-smi">(fun)</span> <span class="pl-k">-&gt;</span>
  <span class="pl-c1">window</span>.setTimeout(fun, <span class="pl-c1">0</span>)
  <span class="pl-k">return</span>

<span class="pl-c">###</span>
<span class="pl-c">  Utility that avoids leaking the arguments object. See</span>
<span class="pl-c">  https://www.npmjs.org/package/argsarray</span>
<span class="pl-c">###</span>
<span class="pl-en">argsArray </span><span class="pl-k">=</span><span class="pl-smi"> <span class="pl-smi">(fun)</span></span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
  <span class="pl-k">return</span> <span class="pl-k">-&gt;</span>
    <span class="pl-v"><span class="pl-v">len <span class="pl-k">=</span></span></span> arguments.length
    <span class="pl-k">if</span> len
      <span class="pl-v"><span class="pl-v">args <span class="pl-k">=</span></span></span> []
      <span class="pl-v"><span class="pl-v">i <span class="pl-k">=</span></span></span> <span class="pl-k">-</span><span class="pl-c1">1</span>
      <span class="pl-k">while</span> <span class="pl-k">++</span>i <span class="pl-k">&lt;</span> len
        args[i] <span class="pl-k">=</span> arguments[i]
      <span class="pl-k">return</span> fun.<span class="pl-c1">call</span> <span class="pl-v">this</span>, args
    <span class="pl-k">else</span>
      <span class="pl-k">return</span> fun.<span class="pl-c1">call</span> <span class="pl-v">this</span>, []</pre></div>

<h2>
<a id="user-content-sqlite-plugin-db-connection-handle" class="anchor" href="#sqlite-plugin-db-connection-handle" aria-hidden="true"><span class="octicon octicon-link"></span></a>SQLite plugin db-connection handle</h2>

<h4>
<a id="user-content-note-there-can-be-multipe-sqliteplugin-db-connection-handles-per-open-db" class="anchor" href="#note-there-can-be-multipe-sqliteplugin-db-connection-handles-per-open-db" aria-hidden="true"><span class="octicon octicon-link"></span></a>NOTE: there can be multipe SQLitePlugin db-connection handles per open db.</h4>

<h4>
<a id="user-content-sqlite-plugin-db-connection-handle-object-is-defined-by-a-constructor-function-and-prototype-member-functions" class="anchor" href="#sqlite-plugin-db-connection-handle-object-is-defined-by-a-constructor-function-and-prototype-member-functions" aria-hidden="true"><span class="octicon octicon-link"></span></a>SQLite plugin db connection handle object is defined by a constructor function and prototype member functions:</h4>

<div class="highlight highlight-coffee"><pre><span class="pl-en">SQLitePlugin </span><span class="pl-k">=</span><span class="pl-smi"> <span class="pl-smi">(openargs, openSuccess, openError)</span></span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
  <span class="pl-c"># console.log "SQLitePlugin openargs: #{JSON.stringify openargs}"</span>

  <span class="pl-k">if</span> <span class="pl-k">!</span>(openargs <span class="pl-k">and</span> openargs[<span class="pl-s"><span class="pl-pds">'</span>name<span class="pl-pds">'</span></span>])
    <span class="pl-k">throw</span> newSQLError <span class="pl-s"><span class="pl-pds">"</span>Cannot create a SQLitePlugin db instance without a db name<span class="pl-pds">"</span></span>

  <span class="pl-v"><span class="pl-v">dbname <span class="pl-k">=</span></span></span> openargs.name

  <span class="pl-c"># XXX Brody TODO add test for this:</span>
  <span class="pl-k">if</span> <span class="pl-k">typeof</span> dbname <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">'</span>string<span class="pl-pds">'</span></span>
    <span class="pl-k">throw</span> newSQLError <span class="pl-s"><span class="pl-pds">'</span>sqlite plugin database name must be a string<span class="pl-pds">'</span></span>

  <span class="pl-smi">@openargs</span> <span class="pl-k">=</span> openargs
  <span class="pl-smi">@dbname</span> <span class="pl-k">=</span> dbname

  <span class="pl-smi">@openSuccess</span> <span class="pl-k">=</span> openSuccess
  <span class="pl-smi">@openError</span> <span class="pl-k">=</span> openError

  <span class="pl-smi">@openSuccess</span> <span class="pl-k">or</span>
    <span class="pl-en">@openSuccess </span><span class="pl-k">=</span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
      <span class="pl-en">console</span>.<span class="pl-c1">log</span> <span class="pl-s"><span class="pl-pds">"</span>DB opened: <span class="pl-pds">"</span></span> <span class="pl-k">+</span> dbname
      <span class="pl-k">return</span>

  <span class="pl-smi">@openError</span> <span class="pl-k">or</span>
    <span class="pl-en">@openError </span><span class="pl-k">=</span><span class="pl-smi"> <span class="pl-smi">(e)</span></span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
      <span class="pl-en">console</span>.<span class="pl-c1">log</span> e.message
      <span class="pl-k">return</span>

  <span class="pl-smi">@open</span> <span class="pl-smi">@openSuccess</span>, <span class="pl-smi">@openError</span>
  <span class="pl-k">return</span>

SQLitePlugin<span class="pl-k">::</span><span class="pl-v"><span class="pl-v">databaseFeatures <span class="pl-k">=</span></span></span> <span class="pl-v"><span class="pl-v">isSQLitePluginDatabase:</span></span> <span class="pl-c1">true</span>

<span class="pl-c"># Keep track of state of open db connections</span>
<span class="pl-c"># XXX TBD this will be moved and renamed or</span>
<span class="pl-c"># combined with txLocks.</span>
SQLitePlugin<span class="pl-k">::</span><span class="pl-v"><span class="pl-v">openDBs <span class="pl-k">=</span></span></span> {}

<span class="pl-en">SQLitePlugin::addTransaction </span><span class="pl-k">=</span><span class="pl-smi"> <span class="pl-smi">(t)</span></span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
  <span class="pl-k">if</span> <span class="pl-k">!</span>txLocks[<span class="pl-smi">@dbname</span>]
    txLocks[<span class="pl-smi">@dbname</span>] <span class="pl-k">=</span> {
      <span class="pl-v"><span class="pl-v">queue:</span></span> []
      <span class="pl-v"><span class="pl-v">inProgress:</span></span> <span class="pl-c1">false</span>
    }
  txLocks[<span class="pl-smi">@dbname</span>].queue.<span class="pl-c1">push</span> t
  <span class="pl-k">if</span> <span class="pl-smi">@dbname</span> <span class="pl-k">of</span> <span class="pl-smi">@openDBs</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">@openDBs</span>[<span class="pl-smi">@dbname</span>] <span class="pl-k">isnt</span> DB_STATE_INIT
    <span class="pl-c"># XXX TODO: only when queue has length of 1 [and test it!!]</span>
    <span class="pl-smi">@startNextTransaction</span>()

  <span class="pl-k">else</span>
    <span class="pl-k">if</span> <span class="pl-smi">@dbname</span> <span class="pl-k">of</span> <span class="pl-smi">@openDBs</span>
      <span class="pl-en">console</span>.<span class="pl-c1">log</span> <span class="pl-s"><span class="pl-pds">'</span>new transaction is waiting for open operation<span class="pl-pds">'</span></span>
    <span class="pl-k">else</span>
      <span class="pl-c"># XXX TBD TODO: in this case (which should not happen), should abort and discard the transaction.</span>
      <span class="pl-en">console</span>.<span class="pl-c1">log</span> <span class="pl-s"><span class="pl-pds">'</span>database is closed, new transaction is [stuck] waiting until db is opened again!<span class="pl-pds">'</span></span>
  <span class="pl-k">return</span>

<span class="pl-en">SQLitePlugin::transaction </span><span class="pl-k">=</span><span class="pl-smi"> <span class="pl-smi">(fn, error, success)</span></span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
  <span class="pl-c"># FUTURE TBD check for valid fn here</span>
  <span class="pl-k">if</span> <span class="pl-k">!</span><span class="pl-smi">@openDBs</span>[<span class="pl-smi">@dbname</span>]
    error newSQLError <span class="pl-s"><span class="pl-pds">'</span>database not open<span class="pl-pds">'</span></span>
    <span class="pl-k">return</span>

  <span class="pl-smi">@addTransaction</span> <span class="pl-k">new</span> <span class="pl-en">SQLitePluginTransaction</span>(<span class="pl-v">this</span>, fn, error, success, <span class="pl-c1">true</span>, <span class="pl-c1">false</span>)
  <span class="pl-k">return</span>

<span class="pl-en">SQLitePlugin::readTransaction </span><span class="pl-k">=</span><span class="pl-smi"> <span class="pl-smi">(fn, error, success)</span></span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
  <span class="pl-c"># FUTURE TBD check for valid fn here (and add test for this)</span>
  <span class="pl-k">if</span> <span class="pl-k">!</span><span class="pl-smi">@openDBs</span>[<span class="pl-smi">@dbname</span>]
    error newSQLError <span class="pl-s"><span class="pl-pds">'</span>database not open<span class="pl-pds">'</span></span>
    <span class="pl-k">return</span>

  <span class="pl-smi">@addTransaction</span> <span class="pl-k">new</span> <span class="pl-en">SQLitePluginTransaction</span>(<span class="pl-v">this</span>, fn, error, success, <span class="pl-c1">true</span>, <span class="pl-c1">true</span>)
  <span class="pl-k">return</span>

<span class="pl-en">SQLitePlugin::startNextTransaction </span><span class="pl-k">=</span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
  <span class="pl-v"><span class="pl-v">self <span class="pl-k">=</span></span></span> <span class="pl-smi">@</span>

  nextTick <span class="pl-k">=&gt;</span>
    <span class="pl-k">if</span> <span class="pl-k">!</span>(<span class="pl-smi">@dbname</span> <span class="pl-k">of</span> <span class="pl-smi">@openDBs</span>) <span class="pl-k">||</span> <span class="pl-smi">@openDBs</span>[<span class="pl-smi">@dbname</span>] <span class="pl-k">isnt</span> DB_STATE_OPEN
      <span class="pl-en">console</span>.<span class="pl-c1">log</span> <span class="pl-s"><span class="pl-pds">'</span>cannot start next transaction: database not open<span class="pl-pds">'</span></span>
      <span class="pl-k">return</span>

    <span class="pl-v"><span class="pl-v">txLock <span class="pl-k">=</span></span></span> txLocks[self.dbname]
    <span class="pl-k">if</span> <span class="pl-k">!</span>txLock
      <span class="pl-en">console</span>.<span class="pl-c1">log</span> <span class="pl-s"><span class="pl-pds">'</span>cannot start next transaction: database connection is lost<span class="pl-pds">'</span></span>
      <span class="pl-c"># XXX TBD TODO (BUG #210/??): abort all pending transactions with error cb [and test!!]</span>
      <span class="pl-c"># @abortAllPendingTransactions()</span>
      <span class="pl-k">return</span>

    <span class="pl-k">else</span> <span class="pl-k">if</span> txLock.queue.length <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>txLock.inProgress
      <span class="pl-c"># start next transaction in q</span>
      <span class="pl-v"><span class="pl-v">txLock.inProgress <span class="pl-k">=</span></span></span> <span class="pl-c1">true</span>
      txLock.queue.<span class="pl-c1">shift</span>().start()
    <span class="pl-k">return</span>

  <span class="pl-k">return</span>

<span class="pl-en">SQLitePlugin::abortAllPendingTransactions </span><span class="pl-k">=</span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
  <span class="pl-c"># extra debug info:</span>
  <span class="pl-c"># if txLocks[@dbname] then console.log 'abortAllPendingTransactions with transaction queue length: ' + txLocks[@dbname].queue.length</span>
  <span class="pl-c"># else console.log 'abortAllPendingTransactions with no transaction lock state'</span>

  <span class="pl-v"><span class="pl-v">txLock <span class="pl-k">=</span></span></span> txLocks[<span class="pl-smi">@dbname</span>]
  <span class="pl-k">if</span> <span class="pl-k">!!</span>txLock <span class="pl-k">&amp;&amp;</span> txLock.queue.length <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>
    <span class="pl-c"># XXX TODO: what to do in case there is a (stray) transaction in progress?</span>
    <span class="pl-c">#console.log 'abortAllPendingTransactions - cleanup old transaction(s)'</span>
    <span class="pl-k">for</span> tx <span class="pl-k">in</span> txLock.queue
      tx.abortFromQ newSQLError <span class="pl-s"><span class="pl-pds">'</span>Invalid database handle<span class="pl-pds">'</span></span>

    <span class="pl-c"># XXX TODO: consider cleaning up (delete) txLocks[@dbname] resource,</span>
    <span class="pl-c"># in case it is known there are no more pending transactions</span>
    <span class="pl-v"><span class="pl-v">txLock.queue <span class="pl-k">=</span></span></span> []
    <span class="pl-v"><span class="pl-v">txLock.inProgress <span class="pl-k">=</span></span></span> <span class="pl-c1">false</span>

  <span class="pl-k">return</span>

<span class="pl-en">SQLitePlugin::open </span><span class="pl-k">=</span><span class="pl-smi"> <span class="pl-smi">(success, error)</span></span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
  <span class="pl-k">if</span> <span class="pl-smi">@dbname</span> <span class="pl-k">of</span> <span class="pl-smi">@openDBs</span>
    <span class="pl-en">console</span>.<span class="pl-c1">log</span> <span class="pl-s"><span class="pl-pds">'</span>database already open: <span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">@dbname</span>

    <span class="pl-c"># for a re-open run the success cb async so that the openDatabase return value</span>
    <span class="pl-c"># can be used in the success handler as an alternative to the handler's</span>
    <span class="pl-c"># db argument</span>
    nextTick <span class="pl-k">=&gt;</span>
      success <span class="pl-smi">@</span>
      <span class="pl-k">return</span>

  <span class="pl-k">else</span>
    <span class="pl-en">console</span>.<span class="pl-c1">log</span> <span class="pl-s"><span class="pl-pds">'</span>OPEN database: <span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">@dbname</span>

    <span class="pl-en">opensuccesscb </span><span class="pl-k">=</span> <span class="pl-k"><span class="pl-k">=&gt;</span></span>
      <span class="pl-c"># NOTE: the db state is NOT stored (in @openDBs) if the db was closed or deleted.</span>
      <span class="pl-c"># console.log 'OPEN database: ' + @dbname + ' succeeded'</span>

      <span class="pl-c">#if !@openDBs[@dbname] then call open error cb, and abort pending tx if any</span>
      <span class="pl-k">if</span> <span class="pl-k">!</span><span class="pl-smi">@openDBs</span>[<span class="pl-smi">@dbname</span>]
        <span class="pl-en">console</span>.<span class="pl-c1">log</span> <span class="pl-s"><span class="pl-pds">'</span>database was closed during open operation<span class="pl-pds">'</span></span>
        <span class="pl-c"># XXX TODO [BUG #210] (and test!!):</span>
        <span class="pl-c"># if !!error then error newSQLError 'database closed during open operation'</span>
        <span class="pl-c"># @abortAllPendingTransactions()</span>

      <span class="pl-k">if</span> <span class="pl-smi">@dbname</span> <span class="pl-k">of</span> <span class="pl-smi">@openDBs</span>
        <span class="pl-smi">@openDBs</span>[<span class="pl-smi">@dbname</span>] <span class="pl-k">=</span> DB_STATE_OPEN

      <span class="pl-k">if</span> <span class="pl-k">!!</span>success <span class="pl-k">then</span> success <span class="pl-smi">@</span>

      <span class="pl-v"><span class="pl-v">txLock <span class="pl-k">=</span></span></span> txLocks[<span class="pl-smi">@dbname</span>]
      <span class="pl-k">if</span> <span class="pl-k">!!</span>txLock <span class="pl-k">&amp;&amp;</span> txLock.queue.length <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>txLock.inProgress
        <span class="pl-smi">@startNextTransaction</span>()
      <span class="pl-k">return</span>

    <span class="pl-en">openerrorcb </span><span class="pl-k">=</span> <span class="pl-k"><span class="pl-k">=&gt;</span></span>
      <span class="pl-en">console</span>.<span class="pl-c1">log</span> <span class="pl-s"><span class="pl-pds">'</span>OPEN database: <span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">@dbname</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span> failed, aborting any pending transactions<span class="pl-pds">'</span></span>
      <span class="pl-c"># XXX TODO: newSQLError missing the message part!</span>
      <span class="pl-k">if</span> <span class="pl-k">!!</span>error <span class="pl-k">then</span> error newSQLError <span class="pl-s"><span class="pl-pds">'</span>Could not open database<span class="pl-pds">'</span></span>
      <span class="pl-k">delete</span> <span class="pl-smi">@openDBs</span>[<span class="pl-smi">@dbname</span>]
      <span class="pl-smi">@abortAllPendingTransactions</span>()
      <span class="pl-k">return</span>

    <span class="pl-c"># store initial DB state:</span>
    <span class="pl-smi">@openDBs</span>[<span class="pl-smi">@dbname</span>] <span class="pl-k">=</span> DB_STATE_INIT

    cordova.exec opensuccesscb, openerrorcb, <span class="pl-s"><span class="pl-pds">"</span>SQLitePlugin<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>open<span class="pl-pds">"</span></span>, [ <span class="pl-smi">@openargs</span> ]

  <span class="pl-k">return</span>

<span class="pl-en">SQLitePlugin::close </span><span class="pl-k">=</span><span class="pl-smi"> <span class="pl-smi">(success, error)</span></span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
  <span class="pl-k">if</span> <span class="pl-smi">@dbname</span> <span class="pl-k">of</span> <span class="pl-smi">@openDBs</span>
    <span class="pl-k">if</span> txLocks[<span class="pl-smi">@dbname</span>] <span class="pl-k">&amp;&amp;</span> txLocks[<span class="pl-smi">@dbname</span>].inProgress
      <span class="pl-c"># XXX TBD: wait for current tx then close (??)</span>
      <span class="pl-en">console</span>.<span class="pl-c1">log</span> <span class="pl-s"><span class="pl-pds">'</span>cannot close: transaction is in progress<span class="pl-pds">'</span></span>
      error newSQLError <span class="pl-s"><span class="pl-pds">'</span>database cannot be closed while a transaction is in progress<span class="pl-pds">'</span></span>
      <span class="pl-k">return</span>

    <span class="pl-en">console</span>.<span class="pl-c1">log</span> <span class="pl-s"><span class="pl-pds">'</span>CLOSE database: <span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">@dbname</span>

    <span class="pl-c"># XXX [BUG #209] closing one db handle disables other handles to same db</span>
    <span class="pl-k">delete</span> <span class="pl-smi">@openDBs</span>[<span class="pl-smi">@dbname</span>]

    <span class="pl-k">if</span> txLocks[<span class="pl-smi">@dbname</span>] <span class="pl-k">then</span> <span class="pl-en">console</span>.<span class="pl-c1">log</span> <span class="pl-s"><span class="pl-pds">'</span>closing db with transaction queue length: <span class="pl-pds">'</span></span> <span class="pl-k">+</span> txLocks[<span class="pl-smi">@dbname</span>].queue.length
    <span class="pl-k">else</span> <span class="pl-en">console</span>.<span class="pl-c1">log</span> <span class="pl-s"><span class="pl-pds">'</span>closing db with no transaction lock state<span class="pl-pds">'</span></span>

    <span class="pl-c"># XXX [BUG #210] TODO: when closing or deleting a db, abort any pending transactions [and test it!!]</span>

    cordova.exec success, error, <span class="pl-s"><span class="pl-pds">"</span>SQLitePlugin<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>close<span class="pl-pds">"</span></span>, [ { <span class="pl-v"><span class="pl-v">path:</span></span> <span class="pl-smi">@dbname</span> } ]

  <span class="pl-k">else</span>
    <span class="pl-en">console</span>.<span class="pl-c1">log</span> <span class="pl-s"><span class="pl-pds">'</span>cannot close: database is not open<span class="pl-pds">'</span></span>
    <span class="pl-k">if</span> error <span class="pl-k">then</span> nextTick <span class="pl-k">-&gt;</span> error()

  <span class="pl-k">return</span>

<span class="pl-en">SQLitePlugin::executeSql </span><span class="pl-k">=</span><span class="pl-smi"> <span class="pl-smi">(statement, params, success, error)</span></span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
  <span class="pl-c"># XXX TODO: better to capture the result, and report it once</span>
  <span class="pl-c"># the transaction has completely finished.</span>
  <span class="pl-c"># This would fix BUG #204 (cannot close db in db.executeSql() callback).</span>
  <span class="pl-en">mysuccess </span><span class="pl-k">=</span><span class="pl-smi"> <span class="pl-smi">(t, r)</span></span> <span class="pl-k"><span class="pl-k">-&gt;</span></span> <span class="pl-k">if</span> <span class="pl-k">!!</span>success <span class="pl-k">then</span> success r
  <span class="pl-en">myerror </span><span class="pl-k">=</span><span class="pl-smi"> <span class="pl-smi">(t, e)</span></span> <span class="pl-k"><span class="pl-k">-&gt;</span></span> <span class="pl-k">if</span> <span class="pl-k">!!</span>error <span class="pl-k">then</span> error e

  <span class="pl-en">myfn </span><span class="pl-k">=</span><span class="pl-smi"> <span class="pl-smi">(tx)</span></span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
    tx.addStatement(statement, params, mysuccess, myerror)
    <span class="pl-k">return</span>

  <span class="pl-smi">@addTransaction</span> <span class="pl-k">new</span> <span class="pl-en">SQLitePluginTransaction</span>(<span class="pl-v">this</span>, myfn, <span class="pl-c1">null</span>, <span class="pl-c1">null</span>, <span class="pl-c1">false</span>, <span class="pl-c1">false</span>)
  <span class="pl-k">return</span></pre></div>

<h2>
<a id="user-content-sqlite-plugin-transaction-object-for-batching" class="anchor" href="#sqlite-plugin-transaction-object-for-batching" aria-hidden="true"><span class="octicon octicon-link"></span></a>SQLite plugin transaction object for batching:</h2>

<div class="highlight highlight-coffee"><pre><span class="pl-en">SQLitePluginTransaction </span><span class="pl-k">=</span><span class="pl-smi"> <span class="pl-smi">(db, fn, error, success, txlock, readOnly)</span></span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
  <span class="pl-c"># FUTURE TBD check this earlier:</span>
  <span class="pl-k">if</span> <span class="pl-k">typeof</span>(fn) <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">"</span>function<span class="pl-pds">"</span></span>
    <span class="pl-c">###</span>
<span class="pl-c">    This is consistent with the implementation in Chrome -- it</span>
<span class="pl-c">    throws if you pass anything other than a function. This also</span>
<span class="pl-c">    prevents us from stalling our txQueue if somebody passes a</span>
<span class="pl-c">    false value for fn.</span>
<span class="pl-c">    ###</span>
    <span class="pl-k">throw</span> newSQLError <span class="pl-s"><span class="pl-pds">"</span>transaction expected a function<span class="pl-pds">"</span></span>

  <span class="pl-smi">@db</span> <span class="pl-k">=</span> db
  <span class="pl-smi">@fn</span> <span class="pl-k">=</span> fn
  <span class="pl-smi">@error</span> <span class="pl-k">=</span> error
  <span class="pl-smi">@success</span> <span class="pl-k">=</span> success
  <span class="pl-smi">@txlock</span> <span class="pl-k">=</span> txlock
  <span class="pl-smi">@readOnly</span> <span class="pl-k">=</span> readOnly
  <span class="pl-smi">@executes</span> <span class="pl-k">=</span> []

  <span class="pl-k">if</span> txlock
    <span class="pl-smi">@addStatement</span> <span class="pl-s"><span class="pl-pds">"</span>BEGIN<span class="pl-pds">"</span></span>, [], <span class="pl-c1">null</span>, <span class="pl-smi">(tx, err)</span> <span class="pl-k">-&gt;</span>
      <span class="pl-k">throw</span> newSQLError <span class="pl-s"><span class="pl-pds">"</span>unable to begin transaction: <span class="pl-pds">"</span></span> <span class="pl-k">+</span> err.message, err.code

  <span class="pl-k">return</span>

<span class="pl-en">SQLitePluginTransaction::start </span><span class="pl-k">=</span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
  <span class="pl-k">try</span>
    <span class="pl-smi">@fn</span> <span class="pl-v">this</span>
    <span class="pl-smi">@run</span>()
  <span class="pl-k">catch</span> err
    <span class="pl-c"># If "fn" throws, we must report the whole transaction as failed.</span>
    txLocks[<span class="pl-smi">@db</span>.dbname].<span class="pl-v"><span class="pl-v">inProgress <span class="pl-k">=</span></span></span> <span class="pl-c1">false</span>
    <span class="pl-smi">@db</span>.startNextTransaction()
    <span class="pl-k">if</span> <span class="pl-smi">@error</span>
      <span class="pl-smi">@error</span> newSQLError err
  <span class="pl-k">return</span>

<span class="pl-en">SQLitePluginTransaction::executeSql </span><span class="pl-k">=</span><span class="pl-smi"> <span class="pl-smi">(sql, values, success, error)</span></span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>

  <span class="pl-k">if</span> <span class="pl-smi">@finalized</span>
    <span class="pl-k">throw</span> {<span class="pl-v"><span class="pl-v">message:</span></span> <span class="pl-s"><span class="pl-pds">'</span>InvalidStateError: DOM Exception 11: This transaction is already finalized. Transactions are committed after its success or failure handlers are called. If you are using a Promise to handle callbacks, be aware that implementations following the A+ standard adhere to run-to-completion semantics and so Promise resolution occurs on a subsequent tick and therefore after the transaction commits.<span class="pl-pds">'</span></span>, <span class="pl-v"><span class="pl-v">code:</span></span> <span class="pl-c1">11</span>}
    <span class="pl-k">return</span>

  <span class="pl-k">if</span> <span class="pl-smi">@readOnly</span> <span class="pl-k">&amp;&amp;</span> READ_ONLY_REGEX.test(sql)
    <span class="pl-smi">@handleStatementFailure</span>(error, {<span class="pl-v"><span class="pl-v">message:</span></span> <span class="pl-s"><span class="pl-pds">'</span>invalid sql for a read-only transaction<span class="pl-pds">'</span></span>})
    <span class="pl-k">return</span>

  <span class="pl-smi">@addStatement</span>(sql, values, success, error)
  <span class="pl-k">return</span>

<span class="pl-c"># This method adds the SQL statement to the transaction queue but does not check for</span>
<span class="pl-c"># finalization since it is used to execute COMMIT and ROLLBACK.</span>
<span class="pl-en">SQLitePluginTransaction::addStatement </span><span class="pl-k">=</span><span class="pl-smi"> <span class="pl-smi">(sql, values, success, error)</span></span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>

  <span class="pl-v"><span class="pl-v">params <span class="pl-k">=</span></span></span> []
  <span class="pl-k">if</span> <span class="pl-k">!!</span>values <span class="pl-k">&amp;&amp;</span> values.constructor <span class="pl-k">==</span> <span class="pl-c1">Array</span>
    <span class="pl-k">for</span> v <span class="pl-k">in</span> values
      <span class="pl-v"><span class="pl-v">t <span class="pl-k">=</span></span></span> <span class="pl-k">typeof</span> v
      params.<span class="pl-c1">push</span> (
        <span class="pl-k">if</span> v <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> v <span class="pl-k">==</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> t <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">'</span>number<span class="pl-pds">'</span></span> <span class="pl-k">||</span> t <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">'</span>string<span class="pl-pds">'</span></span> <span class="pl-k">then</span> v
        <span class="pl-k">else</span> <span class="pl-k">if</span> v <span class="pl-k">instanceof</span> <span class="pl-c1">Blob</span> <span class="pl-k">then</span> v.<span class="pl-c1">valueOf</span>()
        <span class="pl-k">else</span> v.<span class="pl-c1">toString</span>()
      )

  <span class="pl-smi">@executes</span>.<span class="pl-c1">push</span>
    <span class="pl-v"><span class="pl-v">success:</span></span> success
    <span class="pl-v"><span class="pl-v">error:</span></span> error

    <span class="pl-v"><span class="pl-v">sql:</span></span> sql
    <span class="pl-v"><span class="pl-v">params:</span></span> params

  <span class="pl-k">return</span>

<span class="pl-en">SQLitePluginTransaction::handleStatementSuccess </span><span class="pl-k">=</span><span class="pl-smi"> <span class="pl-smi">(handler, response)</span></span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
  <span class="pl-k">if</span> <span class="pl-k">!</span>handler
    <span class="pl-k">return</span>

  <span class="pl-v"><span class="pl-v">rows <span class="pl-k">=</span></span></span> response.rows <span class="pl-k">||</span> []
  <span class="pl-v"><span class="pl-v">payload <span class="pl-k">=</span></span></span>
    <span class="pl-v"><span class="pl-v">rows:</span></span>
      <span class="pl-en">item</span><span class="pl-k">:</span><span class="pl-smi"> <span class="pl-smi">(i)</span></span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
        rows[i]

      <span class="pl-v"><span class="pl-v">length:</span></span> rows.length

    <span class="pl-v"><span class="pl-v">rowsAffected:</span></span> response.rowsAffected <span class="pl-k">or</span> <span class="pl-c1">0</span>
    <span class="pl-v"><span class="pl-v">insertId:</span></span> response.insertId <span class="pl-k">or</span> <span class="pl-c1">undefined</span>

  handler <span class="pl-v">this</span>, payload

  <span class="pl-k">return</span>

<span class="pl-en">SQLitePluginTransaction::handleStatementFailure </span><span class="pl-k">=</span><span class="pl-smi"> <span class="pl-smi">(handler, response)</span></span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
  <span class="pl-k">if</span> <span class="pl-k">!</span>handler
    <span class="pl-k">throw</span> newSQLError <span class="pl-s"><span class="pl-pds">"</span>a statement with no error handler failed: <span class="pl-pds">"</span></span> <span class="pl-k">+</span> response.message, response.code
  <span class="pl-k">if</span> handler(<span class="pl-v">this</span>, response) <span class="pl-k">isnt</span> <span class="pl-c1">false</span>
    <span class="pl-k">throw</span> newSQLError <span class="pl-s"><span class="pl-pds">"</span>a statement error callback did not return false: <span class="pl-pds">"</span></span> <span class="pl-k">+</span> response.message, response.code
  <span class="pl-k">return</span>

<span class="pl-en">SQLitePluginTransaction::run </span><span class="pl-k">=</span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
  <span class="pl-v"><span class="pl-v">txFailure <span class="pl-k">=</span></span></span> <span class="pl-c1">null</span>

  <span class="pl-v"><span class="pl-v">tropts <span class="pl-k">=</span></span></span> []
  <span class="pl-v"><span class="pl-v">batchExecutes <span class="pl-k">=</span></span></span> <span class="pl-smi">@executes</span>
  <span class="pl-v"><span class="pl-v">waiting <span class="pl-k">=</span></span></span> batchExecutes.length
  <span class="pl-smi">@executes</span> <span class="pl-k">=</span> []
  <span class="pl-v"><span class="pl-v">tx <span class="pl-k">=</span></span></span> <span class="pl-v">this</span>

  <span class="pl-en">handlerFor </span><span class="pl-k">=</span><span class="pl-smi"> <span class="pl-smi">(index, didSucceed)</span></span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
    <span class="pl-smi">(response)</span> <span class="pl-k">-&gt;</span>
      <span class="pl-k">try</span>
        <span class="pl-k">if</span> didSucceed
          tx.handleStatementSuccess batchExecutes[index].success, response
        <span class="pl-k">else</span>
          tx.handleStatementFailure batchExecutes[index].error, newSQLError(response)
      <span class="pl-k">catch</span> err
        <span class="pl-k">if</span> <span class="pl-k">!</span>txFailure
          <span class="pl-v"><span class="pl-v">txFailure <span class="pl-k">=</span></span></span> newSQLError(err)

      <span class="pl-k">if</span> <span class="pl-k">--</span>waiting <span class="pl-k">==</span> <span class="pl-c1">0</span>
        <span class="pl-k">if</span> txFailure
          tx.abort txFailure
        <span class="pl-k">else</span> <span class="pl-k">if</span> tx.executes.length <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>
          <span class="pl-c"># new requests have been issued by the callback</span>
          <span class="pl-c"># handlers, so run another batch.</span>
          tx.run()
        <span class="pl-k">else</span>
          tx.finish()

      <span class="pl-k">return</span>

  <span class="pl-v"><span class="pl-v">i <span class="pl-k">=</span></span></span> <span class="pl-c1">0</span>

  <span class="pl-v"><span class="pl-v">mycbmap <span class="pl-k">=</span></span></span> {}

  <span class="pl-k">while</span> i <span class="pl-k">&lt;</span> batchExecutes.length
    <span class="pl-v"><span class="pl-v">request <span class="pl-k">=</span></span></span> batchExecutes[i]

    mycbmap[i] <span class="pl-k">=</span>
      <span class="pl-v"><span class="pl-v">success:</span></span> handlerFor(i, <span class="pl-c1">true</span>)
      <span class="pl-v"><span class="pl-v">error:</span></span> handlerFor(i, <span class="pl-c1">false</span>)

    tropts.<span class="pl-c1">push</span>
      <span class="pl-v"><span class="pl-v">qid:</span></span> <span class="pl-c1">1111</span>
      <span class="pl-v"><span class="pl-v">sql:</span></span> request.sql
      <span class="pl-v"><span class="pl-v">params:</span></span> request.params

    i<span class="pl-k">++</span>

  <span class="pl-en">mycb </span><span class="pl-k">=</span><span class="pl-smi"> <span class="pl-smi">(result)</span></span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
    <span class="pl-c">#console.log "mycb result #{JSON.stringify result}"</span>

    <span class="pl-v"><span class="pl-v">last <span class="pl-k">=</span></span></span> result.length<span class="pl-k">-</span><span class="pl-c1">1</span>
    <span class="pl-k">for</span> i <span class="pl-k">in</span> [<span class="pl-c1">0</span><span class="pl-k">..</span>last]
      <span class="pl-v"><span class="pl-v">r <span class="pl-k">=</span></span></span> result[i]
      <span class="pl-v"><span class="pl-v">type <span class="pl-k">=</span></span></span> r.type
      <span class="pl-c"># NOTE: r.qid can be ignored</span>
      <span class="pl-v"><span class="pl-v">res <span class="pl-k">=</span></span></span> r.result

      <span class="pl-v"><span class="pl-v">q <span class="pl-k">=</span></span></span> mycbmap[i]

      <span class="pl-k">if</span> q
        <span class="pl-k">if</span> q[type]
          q[type] res

    <span class="pl-k">return</span>

  cordova.exec mycb, <span class="pl-c1">null</span>, <span class="pl-s"><span class="pl-pds">"</span>SQLitePlugin<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>backgroundExecuteSqlBatch<span class="pl-pds">"</span></span>, [{<span class="pl-v"><span class="pl-v">dbargs:</span></span> {<span class="pl-v"><span class="pl-v">dbname:</span></span> <span class="pl-smi">@db</span>.dbname}, <span class="pl-v"><span class="pl-v">executes:</span></span> tropts}]

  <span class="pl-k">return</span>

<span class="pl-en">SQLitePluginTransaction::abort </span><span class="pl-k">=</span><span class="pl-smi"> <span class="pl-smi">(txFailure)</span></span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
  <span class="pl-k">if</span> <span class="pl-smi">@finalized</span> <span class="pl-k">then</span> <span class="pl-k">return</span>
  <span class="pl-v"><span class="pl-v">tx <span class="pl-k">=</span></span></span> <span class="pl-smi">@</span>

  <span class="pl-en">succeeded </span><span class="pl-k">=</span><span class="pl-smi"> <span class="pl-smi">(tx)</span></span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
    txLocks[tx.db.dbname].<span class="pl-v"><span class="pl-v">inProgress <span class="pl-k">=</span></span></span> <span class="pl-c1">false</span>
    tx.db.startNextTransaction()
    <span class="pl-k">if</span> tx.error <span class="pl-k">then</span> tx.error txFailure
    <span class="pl-k">return</span>

  <span class="pl-en">failed </span><span class="pl-k">=</span><span class="pl-smi"> <span class="pl-smi">(tx, err)</span></span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
    txLocks[tx.db.dbname].<span class="pl-v"><span class="pl-v">inProgress <span class="pl-k">=</span></span></span> <span class="pl-c1">false</span>
    tx.db.startNextTransaction()
    <span class="pl-k">if</span> tx.error <span class="pl-k">then</span> tx.error newSQLError(<span class="pl-s"><span class="pl-pds">"</span>error while trying to roll back: <span class="pl-pds">"</span></span> <span class="pl-k">+</span> err.message, err.code)
    <span class="pl-k">return</span>

  <span class="pl-smi">@finalized</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>

  <span class="pl-k">if</span> <span class="pl-smi">@txlock</span>
    <span class="pl-smi">@addStatement</span> <span class="pl-s"><span class="pl-pds">"</span>ROLLBACK<span class="pl-pds">"</span></span>, [], succeeded, failed
    <span class="pl-smi">@run</span>()
  <span class="pl-k">else</span>
    succeeded(tx)

  <span class="pl-k">return</span>

<span class="pl-en">SQLitePluginTransaction::finish </span><span class="pl-k">=</span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
  <span class="pl-k">if</span> <span class="pl-smi">@finalized</span> <span class="pl-k">then</span> <span class="pl-k">return</span>
  <span class="pl-v"><span class="pl-v">tx <span class="pl-k">=</span></span></span> <span class="pl-smi">@</span>

  <span class="pl-en">succeeded </span><span class="pl-k">=</span><span class="pl-smi"> <span class="pl-smi">(tx)</span></span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
    txLocks[tx.db.dbname].<span class="pl-v"><span class="pl-v">inProgress <span class="pl-k">=</span></span></span> <span class="pl-c1">false</span>
    tx.db.startNextTransaction()
    <span class="pl-k">if</span> tx.success <span class="pl-k">then</span> tx.success()
    <span class="pl-k">return</span>

  <span class="pl-en">failed </span><span class="pl-k">=</span><span class="pl-smi"> <span class="pl-smi">(tx, err)</span></span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
    txLocks[tx.db.dbname].<span class="pl-v"><span class="pl-v">inProgress <span class="pl-k">=</span></span></span> <span class="pl-c1">false</span>
    tx.db.startNextTransaction()
    <span class="pl-k">if</span> tx.error <span class="pl-k">then</span> tx.error newSQLError(<span class="pl-s"><span class="pl-pds">"</span>error while trying to commit: <span class="pl-pds">"</span></span> <span class="pl-k">+</span> err.message, err.code)
    <span class="pl-k">return</span>

  <span class="pl-smi">@finalized</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>

  <span class="pl-k">if</span> <span class="pl-smi">@txlock</span>
    <span class="pl-smi">@addStatement</span> <span class="pl-s"><span class="pl-pds">"</span>COMMIT<span class="pl-pds">"</span></span>, [], succeeded, failed
    <span class="pl-smi">@run</span>()
  <span class="pl-k">else</span>
    succeeded(tx)

  <span class="pl-k">return</span>

<span class="pl-en">SQLitePluginTransaction::abortFromQ </span><span class="pl-k">=</span><span class="pl-smi"> <span class="pl-smi">(sqlerror)</span></span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
  <span class="pl-c"># NOTE: since the transaction is waiting in the queue,</span>
  <span class="pl-c"># the transaction function containing the SQL statements</span>
  <span class="pl-c"># would not be run yet. Simply report the transaction error.</span>
  <span class="pl-k">if</span> <span class="pl-smi">@error</span>
    <span class="pl-smi">@error</span> sqlerror

  <span class="pl-k">return</span></pre></div>

<h2>
<a id="user-content-sqlite-plugin-object-factory" class="anchor" href="#sqlite-plugin-object-factory" aria-hidden="true"><span class="octicon octicon-link"></span></a>SQLite plugin object factory:</h2>

<div class="highlight highlight-coffee"><pre><span class="pl-v"><span class="pl-v">dblocations <span class="pl-k">=</span></span></span> [ <span class="pl-s"><span class="pl-pds">"</span>docs<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>libs<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>nosync<span class="pl-pds">"</span></span> ]

<span class="pl-v"><span class="pl-v">SQLiteFactory <span class="pl-k">=</span></span></span>
  <span class="pl-c">###</span>
<span class="pl-c">  NOTE: this function should NOT be translated from Javascript</span>
<span class="pl-c">  back to CoffeeScript by js2coffee.</span>
<span class="pl-c">  If this function is edited in Javascript then someone will</span>
<span class="pl-c">  have to translate it back to CoffeeScript by hand.</span>
<span class="pl-c">  ###</span>
  <span class="pl-v"><span class="pl-v">opendb:</span></span> argsArray <span class="pl-smi">(args)</span> <span class="pl-k">-&gt;</span>
    <span class="pl-k">if</span> args.length <span class="pl-k">&lt;</span> <span class="pl-c1">1</span> <span class="pl-k">then</span> <span class="pl-k">return</span> <span class="pl-c1">null</span>

    <span class="pl-v"><span class="pl-v">first <span class="pl-k">=</span></span></span> args[<span class="pl-c1">0</span>]
    <span class="pl-v"><span class="pl-v">openargs <span class="pl-k">=</span></span></span> <span class="pl-c1">null</span>
    <span class="pl-v"><span class="pl-v">okcb <span class="pl-k">=</span></span></span> <span class="pl-c1">null</span>
    <span class="pl-v"><span class="pl-v">errorcb <span class="pl-k">=</span></span></span> <span class="pl-c1">null</span>

    <span class="pl-k">if</span> first.constructor <span class="pl-k">==</span> <span class="pl-c1">String</span>
      <span class="pl-v"><span class="pl-v">openargs <span class="pl-k">=</span></span></span> {<span class="pl-v"><span class="pl-v">name:</span></span> first}

      <span class="pl-k">if</span> args.length <span class="pl-k">&gt;=</span> <span class="pl-c1">5</span>
        <span class="pl-v"><span class="pl-v">okcb <span class="pl-k">=</span></span></span> args[<span class="pl-c1">4</span>]
        <span class="pl-k">if</span> args.length <span class="pl-k">&gt;</span> <span class="pl-c1">5</span> <span class="pl-k">then</span> <span class="pl-v"><span class="pl-v">errorcb <span class="pl-k">=</span></span></span> args[<span class="pl-c1">5</span>]

    <span class="pl-k">else</span>
      <span class="pl-v"><span class="pl-v">openargs <span class="pl-k">=</span></span></span> first

      <span class="pl-k">if</span> args.length <span class="pl-k">&gt;=</span> <span class="pl-c1">2</span>
        <span class="pl-v"><span class="pl-v">okcb <span class="pl-k">=</span></span></span> args[<span class="pl-c1">1</span>]
        <span class="pl-k">if</span> args.length <span class="pl-k">&gt;</span> <span class="pl-c1">2</span> <span class="pl-k">then</span> <span class="pl-v"><span class="pl-v">errorcb <span class="pl-k">=</span></span></span> args[<span class="pl-c1">2</span>]

    <span class="pl-v"><span class="pl-v">dblocation <span class="pl-k">=</span></span></span> <span class="pl-k">if</span> <span class="pl-k">!!</span>openargs.location <span class="pl-k">then</span> dblocations[openargs.location] <span class="pl-k">else</span> <span class="pl-c1">null</span>
    <span class="pl-v"><span class="pl-v">openargs.dblocation <span class="pl-k">=</span></span></span> dblocation <span class="pl-k">||</span> dblocations[<span class="pl-c1">0</span>]

    <span class="pl-k">if</span> <span class="pl-k">!!</span>openargs.createFromLocation <span class="pl-k">and</span> openargs.createFromLocation <span class="pl-k">==</span> <span class="pl-c1">1</span>
      <span class="pl-v"><span class="pl-v">openargs.createFromResource <span class="pl-k">=</span></span></span> <span class="pl-s"><span class="pl-pds">"</span>1<span class="pl-pds">"</span></span>

    <span class="pl-k">if</span> <span class="pl-k">!!</span>openargs.androidDatabaseImplementation <span class="pl-k">and</span> openargs.androidDatabaseImplementation <span class="pl-k">==</span> <span class="pl-c1">2</span>
      <span class="pl-v"><span class="pl-v">openargs.androidOldDatabaseImplementation <span class="pl-k">=</span></span></span> <span class="pl-c1">1</span>

    <span class="pl-k">if</span> <span class="pl-k">!!</span>openargs.androidLockWorkaround <span class="pl-k">and</span> openargs.androidLockWorkaround <span class="pl-k">==</span> <span class="pl-c1">1</span>
      <span class="pl-v"><span class="pl-v">openargs.androidBugWorkaround <span class="pl-k">=</span></span></span> <span class="pl-c1">1</span>

    <span class="pl-k">new</span> <span class="pl-en">SQLitePlugin</span> openargs, okcb, errorcb

  <span class="pl-en">deleteDb</span><span class="pl-k">:</span><span class="pl-smi"> <span class="pl-smi">(first, success, error)</span></span> <span class="pl-k"><span class="pl-k">-&gt;</span></span>
    <span class="pl-v"><span class="pl-v">args <span class="pl-k">=</span></span></span> {}

    <span class="pl-k">if</span> first.constructor <span class="pl-k">==</span> <span class="pl-c1">String</span>
      <span class="pl-c">#console.log "delete db name: #{first}"</span>
      <span class="pl-v"><span class="pl-v">args.path <span class="pl-k">=</span></span></span> first
      <span class="pl-v"><span class="pl-v">args.dblocation <span class="pl-k">=</span></span></span> dblocations[<span class="pl-c1">0</span>]

    <span class="pl-k">else</span>
      <span class="pl-c">#console.log "delete db args: #{JSON.stringify first}"</span>
      <span class="pl-k">if</span> <span class="pl-k">!</span>(first <span class="pl-k">and</span> first[<span class="pl-s"><span class="pl-pds">'</span>name<span class="pl-pds">'</span></span>]) <span class="pl-k">then</span> <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span> <span class="pl-s"><span class="pl-pds">"</span>Please specify db name<span class="pl-pds">"</span></span>
      <span class="pl-v"><span class="pl-v">args.path <span class="pl-k">=</span></span></span> first.name
      <span class="pl-v"><span class="pl-v">dblocation <span class="pl-k">=</span></span></span> <span class="pl-k">if</span> <span class="pl-k">!!</span>first.location <span class="pl-k">then</span> dblocations[first.location] <span class="pl-k">else</span> <span class="pl-c1">null</span>
      <span class="pl-v"><span class="pl-v">args.dblocation <span class="pl-k">=</span></span></span> dblocation <span class="pl-k">||</span> dblocations[<span class="pl-c1">0</span>]

    <span class="pl-c"># XXX [BUG #210] TODO: when closing or deleting a db, abort any pending transactions (with error callback)</span>
    <span class="pl-k">delete</span> SQLitePlugin<span class="pl-k">::</span>openDBs[args.path]
    cordova.exec success, error, <span class="pl-s"><span class="pl-pds">"</span>SQLitePlugin<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>delete<span class="pl-pds">"</span></span>, [ args ]</pre></div>

<h2>
<a id="user-content-exported-api" class="anchor" href="#exported-api" aria-hidden="true"><span class="octicon octicon-link"></span></a>Exported API:</h2>

<div class="highlight highlight-coffee"><pre><span class="pl-v"><span class="pl-v">root.sqlitePlugin <span class="pl-k">=</span></span></span>
  <span class="pl-v"><span class="pl-v">sqliteFeatures:</span></span>
    <span class="pl-v"><span class="pl-v">isSQLitePlugin:</span></span> <span class="pl-c1">true</span>

  <span class="pl-v"><span class="pl-v">openDatabase:</span></span> SQLiteFactory.opendb
  <span class="pl-v"><span class="pl-v">deleteDatabase:</span></span> SQLiteFactory.deleteDb</pre></div>

<h2>
<a id="user-content-vim-directives" class="anchor" href="#vim-directives" aria-hidden="true"><span class="octicon octicon-link"></span></a>vim directives</h2>

<h4>
<a id="user-content-vim-set-filetypecoffee-" class="anchor" href="#vim-set-filetypecoffee-" aria-hidden="true"><span class="octicon octicon-link"></span></a>vim: set filetype=coffee :</h4>

<h4>
<a id="user-content-vim-set-expandtab-" class="anchor" href="#vim-set-expandtab-" aria-hidden="true"><span class="octicon octicon-link"></span></a>vim: set expandtab :</h4>
</article>
  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.05524s from github-fe141-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-5c08de317e4054ec200d36d3b1361ddd3cb30c05c9070a9d72862ee28ab1d7f9.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github/index-b79817a43c4618022b9ecd18dadd96010ccecbb12b56fcc232664db1f897e3a8.js"></script>
      
      

  </body>
</html>

