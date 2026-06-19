/* ====================================================
   矿山设备健康与事件管理平台 - 公共导航与组件
   v1.2: 增加深色/浅色主题切换
   ==================================================== */

/* —— 主题工具：在 head 装载阶段就先应用，避免闪烁 —— */
(function applyThemeEarly(){
  try {
    var saved = localStorage.getItem("xcmg-theme") || "light";
    document.documentElement.setAttribute("data-theme", saved);
  } catch(e){ /* ignore */ }
})();

/* —— 侧边栏折叠状态：在 head 装载阶段就先应用，避免闪烁 —— */
(function applySidebarEarly(){
  try {
    var collapsed = localStorage.getItem("xcmg-sidebar-collapsed") === "1";
    if (collapsed) {
      document.documentElement.setAttribute("data-sidebar", "collapsed");
    }
  } catch(e){ /* ignore */ }
})();

window.XCMG_THEME = {
  get: function() { return document.documentElement.getAttribute("data-theme") || "light"; },
  set: function(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("xcmg-theme", theme); } catch(e){}
    // 同步切换按钮 UI
    var opts = document.querySelectorAll(".theme-toggle .tt-opt");
    opts.forEach(function(o){
      o.classList.toggle("active", o.getAttribute("data-theme") === theme);
    });
    // 派发事件让 ECharts 等监听者重绘
    window.dispatchEvent(new CustomEvent("xcmg:themechange", { detail: { theme: theme } }));
  },
  toggle: function() {
    this.set(this.get() === "dark" ? "light" : "dark");
  },
  // 读取当前主题下的色彩 token，给 ECharts option 用
  palette: function() {
    var dark = this.get() === "dark";
    return {
      textPrimary:   dark ? "#E6ECF7" : "#1F2A3D",
      textSecondary: dark ? "#A8B4CC" : "#5A6478",
      textMuted:     dark ? "#7A8AA8" : "#8A95A8",
      borderLine:    dark ? "#25375A" : "#E5E9F0",
      splitLine:     dark ? "#22324F" : "#F0F1F4",
      axisLine:      dark ? "#2F4570" : "#D7DDE6",
      bgCard:        dark ? "#182742" : "#FFFFFF",
      critical:      dark ? "#FF5A52" : "#E53935",
      warning:       dark ? "#FFB547" : "#FB8C00",
      info:          dark ? "#4FA8FF" : "#0070D6",
      normal:        dark ? "#41D38B" : "#43A047",
      muted:         dark ? "#6E7A92" : "#9E9E9E",
      blue:          dark ? "#4FA8FF" : "#0070D6",
      tooltipBg:     dark ? "rgba(15,23,42,.92)" : "rgba(255,255,255,.96)",
      tooltipBorder: dark ? "#2F4570" : "#D7DDE6",
      tooltipText:   dark ? "#E6ECF7" : "#1F2A3D"
    };
  }
};

window.XCMG_NAV = {
  /* —— v1.9.11：导航树展开状态持久化 ——
     localStorage key: xcmg-nav-expanded → { bi:true, data:true, "data-master":true, ... }
     - active 命中该子树时强制展开（保证当前活跃菜单可见）
     - 否则读取 localStorage：用户手动展开/收起的状态会跨页面保留
     - 没有记录时默认收起
  */
  _getExpandMap: function() {
    try {
      var s = localStorage.getItem("xcmg-nav-expanded");
      return s ? JSON.parse(s) : {};
    } catch(e) { return {}; }
  },
  _setExpandMap: function(m) {
    try { localStorage.setItem("xcmg-nav-expanded", JSON.stringify(m)); } catch(e) {}
  },
  _isExpanded: function(key, mustExpand) {
    if (mustExpand) return true;  // active 命中时强制展开
    var m = this._getExpandMap();
    if (m && Object.prototype.hasOwnProperty.call(m, key)) return !!m[key];
    return false;
  },

  // 渲染顶部导航
  renderHeader: function() {
    var lang = (window.XCMG_I18N && window.XCMG_I18N.current) || "zh";
    return '' +
      '<header class="app-header">' +
        '<button class="sidebar-toggle" type="button" title="收起/展开侧边栏" onclick="XCMG_NAV.toggleSidebar()">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>' +
        '</button>' +
        '<div class="logo">' +
          '<img src="assets/logo.png" alt="logo" class="logo-img"/>' +
          '<span class="product-name" data-i18n="header.brand">矿山设备健康与事件管理平台</span>' +
        '</div>' +
        '<div class="header-search">' +
          '<input type="text" placeholder="搜索设备 / 告警 / 事件…" data-i18n-placeholder="filter.searchAssets" />' +
        '</div>' +
        '<div class="header-actions">' +
          '<span class="h-item" onclick="window.location.href=\'index.html\'">' +
            '<span class="h-icon">' +
              '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12l9-9 9 9M5 10v10h5v-6h4v6h5V10"/></svg>' +
            '</span><span data-i18n="header.home">首页</span>' +
          '</span>' +
          // 主题切换开关
          '<div class="theme-toggle" title="切换浅色/深色主题" data-i18n-title="header.theme.title">' +
            '<span class="tt-opt" data-theme="light" onclick="XCMG_THEME.set(\'light\')">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg><span data-i18n="header.theme.light">浅色</span>' +
            '</span>' +
            '<span class="tt-opt" data-theme="dark" onclick="XCMG_THEME.set(\'dark\')">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg><span data-i18n="header.theme.dark">深色</span>' +
            '</span>' +
          '</div>' +
          // 语言切换下拉（v2.0.0）
          '<div class="lang-toggle" tabindex="0" onclick="XCMG_NAV.toggleLangMenu(this, event)" onblur="XCMG_NAV.closeLangMenu(this)">' +
            '<span class="lang-toggle-current">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>' +
              '<span class="lang-toggle-label" data-i18n="' + (lang==="en"?"header.lang.en":(lang==="pt"?"header.lang.pt":"header.lang.zh")) + '">' + (lang==="en"?"English":(lang==="pt"?"Português":"中文")) + '</span>' +
              '<span class="caret">▾</span>' +
            '</span>' +
            '<div class="lang-menu">' +
              '<div class="lang-opt ' + (lang==="zh"?"active":"") + '" onclick="XCMG_NAV.pickLang(\'zh\', event)">' +
                '<span class="lang-flag">中</span><span data-i18n="header.lang.zh">中文</span>' +
              '</div>' +
              '<div class="lang-opt ' + (lang==="en"?"active":"") + '" onclick="XCMG_NAV.pickLang(\'en\', event)">' +
                '<span class="lang-flag">EN</span><span data-i18n="header.lang.en">English</span>' +
              '</div>' +
              '<div class="lang-opt disabled" title="Coming soon" data-i18n-title="header.lang.pt.tip" onclick="XCMG_NAV.pickLang(\'pt\', event)">' +
                '<span class="lang-flag">PT</span><span data-i18n="header.lang.pt">Português (BR)</span>' +
                '<span class="lang-soon">soon</span>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="avatar" title="Emma">EM</div>' +
          '<span class="h-item">' +
            '<span class="h-icon">' +
              '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01"/></svg>' +
            '</span><span data-i18n="header.help">帮助</span>' +
          '</span>' +
        '</div>' +
      '</header>';
  },

  // 语言菜单展开/收起
  toggleLangMenu: function(el, evt) {
    if (evt) { evt.stopPropagation(); }
    if (!el || !el.classList) return;
    el.classList.toggle("open");
  },
  closeLangMenu: function(el) {
    setTimeout(function(){
      if (el && el.classList) el.classList.remove("open");
    }, 180);
  },
  pickLang: function(lang, evt) {
    if (evt) { evt.stopPropagation(); }
    if (lang === "pt") {
      // 葡文未上线，提示
      try {
        var i18n = window.XCMG_I18N;
        var msg = i18n ? i18n.t("header.lang.pt.tip") : "Português (BR) coming soon";
        alert(msg);
      } catch(e){ alert("Coming soon"); }
      return;
    }
    if (window.XCMG_I18N) {
      window.XCMG_I18N.set(lang);
      // 重新挂载 header/sidebar 以让结构性文案（如 active class 等）保持正确
      // 由于 set() 已 apply 一次 data-i18n 文案，这里直接更新当前 label/active 类
      try {
        // 更新 lang-toggle-label 的 data-i18n 指向，避免下次切换时 label 仍指向旧 key
        var lt = document.querySelector(".lang-toggle .lang-toggle-label");
        if (lt) {
          lt.setAttribute("data-i18n", lang === "en" ? "header.lang.en" : (lang === "pt" ? "header.lang.pt" : "header.lang.zh"));
          lt.textContent = window.XCMG_I18N.t(lt.getAttribute("data-i18n"));
        }
        // 更新选项 active 状态
        document.querySelectorAll(".lang-toggle .lang-opt").forEach(function(o){
          var isZh = o.querySelector("[data-i18n='header.lang.zh']") !== null;
          var isEn = o.querySelector("[data-i18n='header.lang.en']") !== null;
          var isPt = o.querySelector("[data-i18n='header.lang.pt']") !== null;
          o.classList.remove("active");
          if (lang === "zh" && isZh) o.classList.add("active");
          if (lang === "en" && isEn) o.classList.add("active");
          if (lang === "pt" && isPt) o.classList.add("active");
        });
        // 关闭菜单
        var lg = document.querySelector(".lang-toggle");
        if (lg) lg.classList.remove("open");
      } catch(e){}
    }
  },

  // 渲染左侧导航（active 标识当前页）
  renderSidebar: function(active) {
    var stats = window.XCMG_DATA.stats;

    // 判断 BI 父级是否需要展开
    var biKeys = ["home", "bi-perf", "bi-trend"];
    var biExpanded = this._isExpanded("bi", biKeys.indexOf(active) !== -1);
    var perfActive = (active === "home" || active === "bi-perf");
    var trendActive = (active === "bi-trend");

    // 判断"数据与管理"父级是否需要展开
    var dataKeys = ["data-oil", "data-fluid", "data-inspect", "data-report", "data-rpt-asset", "data-rpt-minecare", "data-rpt-ops", "data-rpt-wo", "data-master", "data-fault", "data-asset", "data-people", "data-area"];
    var dataExpanded = this._isExpanded("data", dataKeys.indexOf(active) !== -1);
    var masterKeys = ["data-master", "data-fault", "data-asset", "data-people", "data-area"];
    var masterExpanded = this._isExpanded("data-master", masterKeys.indexOf(active) !== -1);
    var reportKeys = ["data-report", "data-rpt-asset", "data-rpt-minecare", "data-rpt-ops", "data-rpt-wo"];
    var reportExpanded = this._isExpanded("data-report", reportKeys.indexOf(active) !== -1);
    var oilKeys = ["data-oil", "data-fluid", "data-inspect"];
    var oilExpanded = this._isExpanded("data-oil", oilKeys.indexOf(active) !== -1);

    var html = '<aside class="app-sidebar">';
    html += '<div class="sidebar-scroll">';

    // 设备运维BI - 父级 + 子菜单
    html += '<div class="nav-parent ' + (biExpanded ? "expanded" : "") + '" data-nav-key="bi">' +
      '<div class="nav-item parent-row" onclick="XCMG_NAV.toggleParent(this)">' +
        '<span class="nav-icon">' +
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18M9 17V9m4 8V5m4 12v-7"/></svg>' +
        '</span>' +
        '<span class="nav-label" data-i18n="nav.bi">设备运维BI</span>' +
        '<span class="caret">▾</span>' +
      '</div>' +
      '<div class="nav-children">' +
        '<a class="nav-child ' + (perfActive ? "active" : "") + '" href="index.html" data-i18n="nav.bi.perf">设备绩效看板</a>' +
        '<a class="nav-child ' + (trendActive ? "active" : "") + '" href="events_trend.html" data-i18n="nav.bi.trend">事件趋势看板</a>' +
      '</div>' +
    '</div>';

    // 资产中心（v1.9.9：参考矿场调度风格的资产中心，简洁卡片墙）
    html += '<a class="nav-item ' + (active === "fleet" ? "active" : "") + '" href="fleet.html" title="资产中心" data-i18n-title="nav.fleet">' +
      '<span class="nav-icon">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="4" rx="1"/><rect x="3" y="10" width="18" height="4" rx="1"/><rect x="3" y="16" width="18" height="4" rx="1"/><circle cx="7" cy="6" r="0.8" fill="currentColor"/><circle cx="7" cy="12" r="0.8" fill="currentColor"/><circle cx="7" cy="18" r="0.8" fill="currentColor"/></svg>' +
      '</span>' +
      '<span class="nav-label" data-i18n="nav.fleet">资产中心</span>' +
    '</a>';

    // 事件中心（v1.9.9：原"待办事件"，新增待办/历史 tab）
    html += '<a class="nav-item ' + (active === "review" ? "active" : "") + '" href="events.html" title="事件中心" data-i18n-title="nav.events">' +
      '<span class="nav-icon">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3 8-8M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>' +
      '</span>' +
      '<span class="nav-label" data-i18n="nav.events">事件中心</span>' +
      (stats.pending_events ? '<span class="badge">' + stats.pending_events + '</span>' : '') +
    '</a>';

    // 设备健康（合并了原"告警视图"）
    html += '<a class="nav-item ' + (active === "assets" || active === "alerts" ? "active" : "") + '" href="assets.html" title="设备健康" data-i18n-title="nav.assets">' +
      '<span class="nav-icon">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l9-4 9 4-9 4-9-4zm0 5l9 4 9-4M3 17l9 4 9-4"/></svg>' +
      '</span>' +
      '<span class="nav-label" data-i18n="nav.assets">设备健康</span>' +
      (stats.active_alerts ? '<span class="badge">' + stats.active_alerts + '</span>' : '') +
    '</a>';

    // 地图视图（v2.0.6：把已有 map.html 接入侧边栏一级菜单）
    html += '<a class="nav-item ' + (active === "map" ? "active" : "") + '" href="map.html" title="地图视图" data-i18n-title="nav.map">' +
      '<span class="nav-icon">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3l-6 3v15l6-3 6 3 6-3V3l-6 3-6-3z"/><path d="M9 3v15"/><path d="M15 6v15"/></svg>' +
      '</span>' +
      '<span class="nav-label" data-i18n="nav.map">地图视图</span>' +
    '</a>';

    // —— 数据与管理（v1.9.6 由顶部下沉到侧边栏）——
    html += '<div class="nav-divider"></div>';
    html += '<div class="nav-parent ' + (dataExpanded ? "expanded" : "") + '" data-nav-key="data">' +
      '<div class="nav-item parent-row" onclick="XCMG_NAV.toggleParent(this)" title="数据与管理" data-i18n-title="nav.dataMgmt">' +
        '<span class="nav-icon">' +
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6"/></svg>' +
        '</span>' +
        '<span class="nav-label" data-i18n="nav.dataMgmt">数据与管理</span>' +
        '<span class="caret">▾</span>' +
      '</div>' +
      '<div class="nav-children">' +
        // 油品/点检结果 - 二级嵌套
        '<div class="nav-parent nav-parent-l2 ' + (oilExpanded ? "expanded" : "") + '" data-nav-key="data-oil">' +
          '<div class="nav-child parent-row-l2" onclick="XCMG_NAV.toggleParent(this)">' +
            '<span class="nav-label" data-i18n="nav.oil">油品/点检结果</span>' +
            '<span class="caret">▾</span>' +
          '</div>' +
          '<div class="nav-children nav-children-l2">' +
            '<a class="nav-child ' + (active === "data-fluid" ? "active" : "") + '" href="fluid_results.html" data-i18n="nav.oil.fluid">油品检测结果</a>' +
            '<a class="nav-child ' + (active === "data-inspect" ? "active" : "") + '" href="inspection_results.html" data-i18n="nav.oil.inspect">点检任务结果</a>' +
          '</div>' +
        '</div>' +
        // 报表管理 - 二级嵌套（v2.0.0：删除"报表分析"占位项，保留 4 项）
        '<div class="nav-parent nav-parent-l2 ' + (reportExpanded ? "expanded" : "") + '" data-nav-key="data-report">' +
          '<div class="nav-child parent-row-l2" onclick="XCMG_NAV.toggleParent(this)">' +
            '<span class="nav-label" data-i18n="nav.report.mgmt">报表管理</span>' +
            '<span class="caret">▾</span>' +
          '</div>' +
          '<div class="nav-children nav-children-l2">' +
            '<a class="nav-child ' + (active === "data-rpt-asset" ? "active" : "") + '" href="report_asset_status.html" data-i18n="nav.report.assetStatus">资产运行状态报表</a>' +
            '<a class="nav-child ' + (active === "data-rpt-minecare" ? "active" : "") + '" href="minecare_events.html" data-i18n="nav.report.minecare">MineCare 事件明细表</a>' +
            '<a class="nav-child ' + (active === "data-rpt-ops" ? "active" : "") + '" href="ops_metrics.html" data-i18n="nav.report.ops">设备运营累计指标表</a>' +
            '<a class="nav-child ' + (active === "data-rpt-wo" ? "active" : "") + '" href="work_orders.html" data-i18n="nav.report.workOrders">工单下发记录表</a>' +
          '</div>' +
        '</div>' +
        // v2.0.5: 移除"数据导入与接口"独立菜单项（导入功能下沉到具体页面按钮）
        // 基础数据管理 - 二级嵌套
        '<div class="nav-parent nav-parent-l2 ' + (masterExpanded ? "expanded" : "") + '" data-nav-key="data-master">' +
          '<div class="nav-child parent-row-l2" onclick="XCMG_NAV.toggleParent(this)">' +
            '<span class="nav-label" data-i18n="nav.master">基础数据管理</span>' +
            '<span class="caret">▾</span>' +
          '</div>' +
          '<div class="nav-children nav-children-l2">' +
            '<a class="nav-child ' + (active === "data-fault" ? "active" : "") + '" href="fault_registry.html" data-i18n="nav.master.fault">注册告警与等级维护</a>' +
            '<a class="nav-child ' + (active === "data-asset" ? "active" : "") + '" href="asset_master.html" data-i18n="nav.master.asset">设备主数据</a>' +
            '<a class="nav-child ' + (active === "data-people" ? "active" : "") + '" href="placeholder.html?m=人员与组织" data-i18n="nav.master.people">人员与组织</a>' +
            '<a class="nav-child ' + (active === "data-area" ? "active" : "") + '" href="placeholder.html?m=矿区与工作面" data-i18n="nav.master.area">矿区与工作面</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';

    html += '</div>'; // /sidebar-scroll
    html += '<div class="sidebar-footer" data-i18n="footer.copyright">© 2025 矿山设备 · v2.0.8</div>';
    html += '</aside>';
    return html;
  },

  // 父级菜单展开/折叠
  toggleParent: function(el) {
    var parent = el.parentElement;
    if (!parent || !parent.classList) return;
    parent.classList.toggle("expanded");
    // v1.9.11：持久化展开状态，让二级菜单跨页面保持
    var key = parent.getAttribute("data-nav-key");
    if (key) {
      var m = this._getExpandMap();
      m[key] = parent.classList.contains("expanded");
      this._setExpandMap(m);
    }
  },

  // 侧边栏折叠/展开（持久化到 localStorage）
  toggleSidebar: function() {
    var html = document.documentElement;
    var collapsed = html.getAttribute("data-sidebar") === "collapsed";
    if (collapsed) {
      html.removeAttribute("data-sidebar");
      try { localStorage.setItem("xcmg-sidebar-collapsed", "0"); } catch(e){}
    } else {
      html.setAttribute("data-sidebar", "collapsed");
      try { localStorage.setItem("xcmg-sidebar-collapsed", "1"); } catch(e){}
    }
    // 等过渡动画结束后通知 ECharts 等监听者重排（CSS transition 是 .22s）
    window.dispatchEvent(new CustomEvent("xcmg:sidebartoggle"));
    setTimeout(function(){
      try { window.dispatchEvent(new Event("resize")); } catch(e){}
    }, 240);
  },

  // 一键挂载
  mount: function(active) {
    var headerHost = document.getElementById("xcmg-header");
    var sidebarHost = document.getElementById("xcmg-sidebar");
    if (headerHost) headerHost.outerHTML = this.renderHeader();
    if (sidebarHost) sidebarHost.outerHTML = this.renderSidebar(active);
    // 初始化主题按钮高亮
    var current = XCMG_THEME.get();
    document.querySelectorAll(".theme-toggle .tt-opt").forEach(function(o){
      o.classList.toggle("active", o.getAttribute("data-theme") === current);
    });
    // v2.0.0 应用 i18n（renderHeader / renderSidebar 已写默认中文 + data-i18n 标记）
    try { if (window.XCMG_I18N) window.XCMG_I18N.apply(); } catch(e){}
  }
};

// 通用工具
window.XCMG_UTIL = {
  // 设备缩略图
  assetThumb: function(asset) {
    return '<div class="asset-thumb" style="background:' + (asset.thumb_color || "#fff7e6") +
      ';border-color:' + (asset.thumb_border || "#f0e1c5") + '">' +
      '<svg width="36" height="26" viewBox="0 0 36 26" fill="none">' +
        '<rect x="3" y="14" width="30" height="6" rx="1" fill="#FFB300"/>' +
        '<rect x="6" y="6" width="14" height="9" rx="1" fill="#FF8F00"/>' +
        '<rect x="20" y="9" width="13" height="6" rx="1" fill="#FFA000"/>' +
        '<circle cx="9" cy="22" r="3" fill="#37474F"/>' +
        '<circle cx="27" cy="22" r="3" fill="#37474F"/>' +
        '<text x="18" y="13" text-anchor="middle" fill="#5D4037" font-size="6" font-weight="bold" font-family="Arial">' + asset.thumb_letter + '</text>' +
      '</svg>' +
    '</div>';
  },

  // 状态徽章
  pill: function(status, text) {
    var def = window.XCMG_DATA.statusToPill(status);
    return '<span class="status-pill ' + def.cls + '"><span class="dot"></span>' + (text || def.text) + '</span>';
  },

  // 严重等级竖条
  severityBar: function(level) {
    return '<span class="severity-bar bar-' + level + '"></span>';
  },

  fromNow: function(timeStr) {
    return timeStr;
  }
};
