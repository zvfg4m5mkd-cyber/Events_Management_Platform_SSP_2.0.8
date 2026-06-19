/* ====================================================
   矿山设备健康与事件管理平台 - 国际化（i18n）
   v2.0.0：中文 / English / Português (BR) 三语切换
   - 默认中文；localStorage key: xcmg-lang
   - 通过 data-i18n / data-i18n-placeholder / data-i18n-title 属性标记
   - 也可在 JS 中调用 XCMG_I18N.t("key") 取文案
   - 葡萄牙语字典暂为空，回退到中文（"Coming soon"）
   ==================================================== */

(function applyLangEarly(){
  try {
    var saved = localStorage.getItem("xcmg-lang") || "zh";
    if (saved !== "zh" && saved !== "en" && saved !== "pt") saved = "zh";
    document.documentElement.setAttribute("lang", saved === "zh" ? "zh-CN" : (saved === "en" ? "en" : "pt-BR"));
    document.documentElement.setAttribute("data-lang", saved);
  } catch(e){}
})();

window.XCMG_I18N = {
  current: (function(){
    try { var s = localStorage.getItem("xcmg-lang"); return (s==="en"||s==="pt"||s==="zh") ? s : "zh"; }
    catch(e){ return "zh"; }
  })(),

  dict: {
    /* ============== 中文（基准） ============== */
    zh: {
      // 通用
      "common.search": "搜索",
      "common.export": "导出",
      "common.export.csv": "导出CSV",
      "common.refresh": "刷新",
      "common.reset": "重置",
      "common.apply": "应用筛选",
      "common.confirm": "确定",
      "common.cancel": "取消",
      "common.close": "关闭",
      "common.detail": "详情",
      "common.detail.view": "查看详情",
      "common.all": "全部",
      "common.allTypes": "全部类型",
      "common.allStatus": "全部状态",
      "common.allLevels": "全部等级",
      "common.allPrio": "全部优先级",
      "common.allModels": "全部机型",
      "common.allAreas": "全部区域",
      "common.placeholder": "功能开发中",
      "common.loading": "加载中…",
      "common.empty": "暂无数据",
      "common.last7d": "最近7天",
      "common.last30d": "最近30天",
      "common.last90d": "最近90天",
      "common.allTime": "全部时间",
      "common.unit.units": "台",
      "common.unit.events": "条",
      "common.unit.times": "次",
      "common.unit.h": "小时",
      "common.unit.percent": "%",
      "common.yes": "是",
      "common.no": "否",
      // ===== v2.0.1 扩展（首页主体 + 卡片 + 选项 + 等级 + 表头）=====
      "common.viewNow": "立即查看 →",
      "common.viewAll": "查看全部 →",
      "common.viewMore": "更多 →",
      "common.unit.cond": "条",
      "common.unit.assets": "台",
      "report.export": "导出报告",
      "common.deltaText.lastWeek": "较上周",
      "common.deltaText.urgent": "需立即处理",
      "common.deltaText.uptime": "在线率",
      "common.health.good": "运行良好",
      "common.health.attn": "需关注",
      "common.health.urgent": "亟需维护",
      "kpi.totalEvt": "总事件数",
      "kpi.critEvt": "高危事件",
      "kpi.onlineDev": "在线设备",
      "kpi.healthAvg": "平均健康度",
      "card.evtLevel": "事件等级分布",
      "card.evtTrend": "事件趋势",
      "card.assetStatus": "设备状态概览",
      "card.evtTrend.sub": "最近 24 小时 · 高危 / 中等 / 低",
      "card.evtLevel.subFmt": "总 {n} 条",
      "card.assetStatus.subFmt": "共 {n} 台",
      "card.topType": "Top 10 事件类型",
      "card.topAsset": "Top 10 事件设备",
      "card.topType.sub": "按发生次数",
      "card.topAsset.sub": "按事件总数",
      "card.urgentEvt": "紧急待处理事项",
      "breadcrumb.index": "设备绩效看板 · 数据更新于",
      "alert.critUnresolvedFmt": "当前有 {n} 条严重告警未处理，需立即关注",
      "level.high": "高危",
      "level.mid": "中等",
      "level.low": "低",
      "status.running": "运行中",
      "th.faultDesc": "故障描述",
      "th.level": "等级",
      "opt.dashboard.p0": "P0 全局看板",
      "opt.dashboard.excavator": "挖掘机绩效",
      "opt.dashboard.loader": "装载机绩效",
      "opt.dashboard.grader": "平地机绩效",
      "opt.last24h": "最近 24 小时",
      "opt.last7d": "近 7 天",
      "opt.last30d": "近 30 天",
      "opt.thisQuarter": "本季度",
      "opt.custom": "自定义",
      "opt.normal": "正常",
      "opt.warning": "警告",
      "opt.critical": "严重",
      "opt.offline": "离线",
      "opt.type.excavator": "挖掘机",
      "opt.type.loader": "装载机",
      "opt.type.grader": "平地机",
      "opt.area.openpit": "露天矿区",
      "opt.area.dump": "排土场",
      "opt.area.workshop": "维修车间",
      "opt.area.station": "装运站",
      "filter.prio": "优先级",
      "filter.woType": "工单类型",
      "filter.dispatchStatus": "下发状态",
      "filter.severity": "事件等级",


      // Header
      "header.brand": "矿山设备健康与事件管理平台",
      "header.brand.short": "MineCare 设备健康平台",
      "header.home": "首页",
      "header.help": "帮助",
      "header.lang": "语言",
      "header.lang.zh": "中文",
      "header.lang.en": "English",
      "header.lang.pt": "Português (BR)",
      "header.lang.pt.tip": "葡萄牙语版本即将上线",
      "header.theme.light": "浅色",
      "header.theme.dark": "深色",
      "header.theme.title": "切换浅色/深色主题",

      // Sidebar
      "nav.bi": "设备运维BI",
      "nav.bi.perf": "设备绩效看板",
      "nav.bi.trend": "事件趋势看板",
      "nav.fleet": "资产中心",
      "nav.events": "事件中心",
      "nav.assets": "设备健康",
      "nav.map": "地图视图",
      "nav.dataMgmt": "数据与管理",
      "nav.oil": "油品/点检结果",
      "nav.oil.fluid": "油品检测结果",
      "nav.oil.inspect": "点检任务结果",
      "nav.report.analysis": "报表分析",
      "nav.report.mgmt": "报表管理",
      "nav.report.assetStatus": "资产运行状态报表",
      "nav.report.minecare": "MineCare 事件明细表",
      "nav.report.ops": "设备运营累计指标表",
      "nav.report.workOrders": "工单下发记录表",
      "nav.dataImport": "数据导入与接口",
      "nav.master": "基础数据管理",
      "nav.master.fault": "注册告警与等级维护",
      "nav.master.asset": "设备主数据",
      "nav.master.people": "人员与组织",
      "nav.master.area": "矿区与工作面",
      "footer.copyright": "© 2025 矿山设备 · v2.0.8",

      // 设备绩效看板（index）
      "page.index.title": "设备绩效看板",
      "page.index.sub": "设备健康与事件实时概览",
      "kpi.totalAssets": "总台数",
      "kpi.online": "在线设备",
      "kpi.alerts": "活跃告警",
      "kpi.pending": "待办事件",
      "kpi.uptime": "在线率",
      "kpi.mttr": "平均修复时长",
      "kpi.mtbf": "平均故障间隔",
      "kpi.utilization": "利用率",
      "section.statusBy": "按状态分布",
      "section.alertsByModel": "按机型告警量",
      "section.eventsTrend": "事件趋势",
      "section.topAssets": "重点关注设备",
      "section.recentAlerts": "最新告警",

      // 资产中心（fleet）
      "page.fleet.title": "资产中心",
      "page.fleet.sub": "全部矿山作业设备",
      "filter.model": "机型",
      "filter.area": "区域",
      "filter.status": "状态",
      "filter.time": "时间范围",
      "filter.assetType": "设备类型",
      "filter.board": "看板",
      "filter.searchAssets": "搜索设备/编号/区域…",
      "status.online": "在线",
      "status.offline": "离线",
      "status.maint": "维护",
      "status.standby": "待机",
      "status.fault": "故障",

      // 事件中心（events）
      "page.events.title": "事件中心",
      "page.events.sub": "故障事件全生命周期管理",
      "tab.pending": "待办事件",
      "tab.history": "历史事件",
      "th.eventNo": "事件编号",
      "th.eventTime": "发生时间",
      "th.asset": "设备",
      "th.assetId": "设备编号",
      "th.assetName": "设备名称",
      "th.alertCode": "告警代码",
      "th.alertName": "告警描述",
      "th.severity": "严重等级",
      "th.area": "区域",
      "th.status": "状态",
      "th.handler": "处理人",
      "th.duration": "持续时长",
      "th.action": "操作",
      "evt.status.pending": "待处理",
      "evt.status.progress": "处理中",
      "evt.status.closed": "已关闭",
      "evt.status.critical": "紧急",
      "filter.searchEvents": "搜索事件/设备/告警…",

      // 设备健康（assets）& 告警（alerts）
      "page.assets.title": "设备健康",
      "page.assets.sub": "设备维度健康概览与告警追踪",
      "view.byAsset": "按设备查看",
      "view.byAlert": "按告警查看",
      "page.alerts.title": "告警视图",
      "page.alerts.sub": "实时活跃告警全景",
      "th.healthScore": "健康度",
      "th.lastAlert": "最近告警",
      "th.alertCount": "告警数",
      "filter.searchAlerts": "搜索告警/设备…",
      "level.critical": "紧急",
      "level.warning": "警告",
      "level.info": "提示",

      // 报表 - 资产运行状态
      "page.rptAsset.title": "资产运行状态报表",
      "page.rptAsset.sub": "全矿设备运行状态与可用性快照",

      // 报表 - MineCare 事件明细
      "page.minecare.title": "MineCare 事件明细表",
      "page.minecare.sub": "MineCare 系统采集的事件原始数据",
      "kpi.totalEvents": "事件总数",
      "kpi.criticalEvents": "紧急事件",
      "kpi.warningEvents": "警告事件",
      "kpi.infoEvents": "提示事件",

      // 报表 - 运营指标
      "page.ops.title": "设备运营累计指标表",
      "page.ops.sub": "设备运营累计统计指标快照",
      "kpi.totalHours": "累计运行时长",
      "kpi.totalFuel": "累计油耗",
      "kpi.totalLoad": "累计载重",
      "kpi.avgUtil": "平均利用率",

      // 报表 - 工单下发记录
      "page.wo.title": "工单下发记录表",
      "page.wo.sub": "SAP 工单下发台账与执行记录",
      "kpi.woTotal": "工单总数",
      "kpi.woYem": "YEM 紧急",
      "kpi.woYco": "YCO 常规",
      "kpi.woDispatched": "已下发",
      "th.woNo": "工单编号",
      "th.woType": "工单类型",
      "th.repair": "维修类型",
      "th.prio": "优先级",
      "th.turma": "班组",
      "th.planDate": "计划日期",
      "th.workCenter": "工作中心",
      "th.ctrlCenter": "控制中心",
      "th.pts": "PTS",
      "th.subject": "工单主题",
      "th.troubleSubj": "诊断主题",
      "th.desc": "工单描述",
      "th.recom": "处理建议",
      "th.creator": "创建人",
      "th.dispatchTime": "下发时间",
      "th.validateStatus": "校验状态",
      "th.dispatchStatus": "下发状态",
      "th.sapNo": "SAP 工单号",
      "wo.status.dispatched": "已下发",
      "wo.status.processing": "下发中",
      "wo.status.draft": "草稿",
      "wo.status.failed": "下发失败",
      "wo.validate.passed": "已通过",
      "wo.validate.pending": "待校验",
      "wo.validate.failed": "校验失败",
      "filter.searchWo": "搜索工单/设备/SAP号…",

      // alh-modal 工单生成面板
      "wo.btn.generate": "生成工单",
      "wo.btn.collapse": "收起生成工单",
      "wo.btn.viewSnap": "查看快照",
      "wo.btn.createEvent": "创建事件",
      "wo.btn.close": "完成关闭",
      "wo.btn.fixFail": "请先修正校验失败项",
      "wo.step.fill": "填写工单信息",
      "wo.step.validate": "生成工单校验",
      "wo.step.dispatch": "完成下发 SAP",
      "wo.sec.fillTitle": "工单类型与服务工单信息",
      "wo.sec.validateTitle": "生成工单校验",
      "wo.sec.dispatchTitle": "完成下发",
      "wo.sub.intro": "填写 → 校验 → 下发，全流程在此完成",
      "wo.sub.draftLoaded": "已加载草稿",
      "wo.draft.saved": "草稿已保存",
      "wo.type.title": "工单类型 · Tipo de Ordem",
      "wo.type.yem.title": "YEM · 重大风险事件",
      "wo.type.yem.desc": "Evento de Risco Maior",
      "wo.type.yco.title": "YCO · 常规维修工单",
      "wo.type.yco.desc": "Ordem Corretiva",
      "wo.type.nota.title": "Nota · 通知/记录",
      "wo.type.nota.desc": "Apenas Notificação",
      "wo.field.repair": "维修类型 · Tipo de Reparo",
      "wo.field.prio": "优先级 · Prioridade",
      "wo.field.turma": "执行班组 · Turma",
      "wo.field.planDate": "计划日期 · Data Plan.",
      "wo.field.workCenter": "工作中心 · Centro Trabalho",
      "wo.field.ctrlCenter": "控制中心 · Ctrl Centro",
      "wo.field.pts": "PTS",
      "wo.field.subject": "工单主题 · Assunto",
      "wo.field.troubleSubj": "诊断主题 · Diagnóstico",
      "wo.field.desc": "工单描述 · Descrição",
      "wo.field.recom": "处理建议 · Recomendação",
      "wo.btn.saveDraft": "保存草稿",
      "wo.btn.toValidate": "下一步：校验",
      "wo.btn.toDispatch": "下发 SAP",
      "wo.btn.viewRecords": "查看已下发工单",
      "wo.btn.backToFill": "返回修改",
      "wo.preview.title": "工单预览",
      "wo.validate.title": "校验项",
      "wo.draft.tag": "已加载草稿",
      "wo.dispatch.success": "下发成功",
      "wo.dispatch.failed": "下发失败",

      // 占位页 placeholder
      "placeholder.title": "功能开发中",
      "placeholder.desc": "该模块正在迭代中，敬请期待。",

      // 故障维护 fault_registry
      "page.fault.title": "注册告警与等级维护",
      "page.fault.sub": "维护系统采集的故障代码与等级映射",

      // 监测 monitor
      "page.monitor.title": "设备监测",
      "page.monitor.sub": "实时数据曲线与设备遥测",
      "page.monitor.chart.title": "设备监测",
      "page.monitor.select.title": "设备监测 · 选择设备",

      // 地图 map
      "page.map.title": "矿区地图",
      "page.map.sub": "全矿设备实时位置与状态",

      // 设备详情 asset_detail
      "page.assetDetail.title": "设备详情",

      // 油品/点检
      "page.fluid.title": "油品检测结果",
      "page.fluid.sub": "油液采样化验结果记录",
      "page.inspect.title": "点检任务结果",
      "page.inspect.sub": "日常点检任务执行记录",

      // 事件趋势
      "page.eventsTrend.title": "事件趋势看板",
      "page.eventsTrend.sub": "事件量与构成趋势分析"
    },

    /* ============== English ============== */
    en: {
      // Common
      "common.search": "Search",
      "common.export": "Export",
      "common.export.csv": "Export CSV",
      "common.refresh": "Refresh",
      "common.reset": "Reset",
      "common.apply": "Apply Filter",
      "common.confirm": "Confirm",
      "common.cancel": "Cancel",
      "common.close": "Close",
      "common.detail": "Details",
      "common.detail.view": "View",
      "common.all": "All",
      "common.allTypes": "All Types",
      "common.allStatus": "All Statuses",
      "common.allLevels": "All Levels",
      "common.allPrio": "All Priorities",
      "common.allModels": "All Models",
      "common.allAreas": "All Areas",
      "common.placeholder": "Coming Soon",
      "common.loading": "Loading…",
      "common.empty": "No data",
      "common.last7d": "Last 7 days",
      "common.last30d": "Last 30 days",
      "common.last90d": "Last 90 days",
      "common.allTime": "All time",
      "common.unit.units": "units",
      "common.unit.events": "events",
      "common.unit.times": "times",
      "common.unit.h": "h",
      "common.unit.percent": "%",
      "common.yes": "Yes",
      "common.no": "No",
      // ===== v2.0.1 extended (home main + cards + options + level + th) =====
      "common.viewNow": "View Now →",
      "common.viewAll": "View All →",
      "common.viewMore": "More →",
      "common.unit.cond": "",
      "common.unit.assets": " units",
      "report.export": "Export Report",
      "common.deltaText.lastWeek": "vs last week",
      "common.deltaText.urgent": "Action required",
      "common.deltaText.uptime": "Uptime",
      "common.health.good": "Healthy",
      "common.health.attn": "Needs attention",
      "common.health.urgent": "Critical",
      "kpi.totalEvt": "Total Events",
      "kpi.critEvt": "Critical Events",
      "kpi.onlineDev": "Online Equipment",
      "kpi.healthAvg": "Avg Health",
      "card.evtLevel": "Event Severity Distribution",
      "card.evtTrend": "Event Trend",
      "card.assetStatus": "Equipment Status Overview",
      "card.evtTrend.sub": "Last 24h · High / Medium / Low",
      "card.evtLevel.subFmt": "{n} total",
      "card.assetStatus.subFmt": "{n} units",
      "card.topType": "Top 10 Event Types",
      "card.topAsset": "Top 10 Equipment by Events",
      "card.topType.sub": "By occurrences",
      "card.topAsset.sub": "By event count",
      "card.urgentEvt": "Urgent Pending Events",
      "breadcrumb.index": "Performance Dashboard · Updated at",
      "alert.critUnresolvedFmt": "{n} critical alerts unresolved — immediate attention required",
      "level.high": "High",
      "level.mid": "Medium",
      "level.low": "Low",
      "status.running": "Running",
      "th.faultDesc": "Fault Description",
      "th.level": "Level",
      "opt.dashboard.p0": "P0 Global Dashboard",
      "opt.dashboard.excavator": "Excavator KPI",
      "opt.dashboard.loader": "Loader KPI",
      "opt.dashboard.grader": "Grader KPI",
      "opt.last24h": "Last 24h",
      "opt.last7d": "Last 7 days",
      "opt.last30d": "Last 30 days",
      "opt.thisQuarter": "This Quarter",
      "opt.custom": "Custom",
      "opt.normal": "Normal",
      "opt.warning": "Warning",
      "opt.critical": "Critical",
      "opt.offline": "Offline",
      "opt.type.excavator": "Excavator",
      "opt.type.loader": "Loader",
      "opt.type.grader": "Grader",
      "opt.area.openpit": "Open-Pit",
      "opt.area.dump": "Dump Site",
      "opt.area.workshop": "Workshop",
      "opt.area.station": "Loading Station",
      "filter.prio": "Priority",
      "filter.woType": "Work Order Type",
      "filter.dispatchStatus": "Dispatch Status",
      "filter.severity": "Severity",


      // Header
      "header.brand": "Mining Equipment Health & Event Management",
      "header.brand.short": "MineCare Equipment Platform",
      "header.home": "Home",
      "header.help": "Help",
      "header.lang": "Language",
      "header.lang.zh": "中文",
      "header.lang.en": "English",
      "header.lang.pt": "Português (BR)",
      "header.lang.pt.tip": "Portuguese version coming soon",
      "header.theme.light": "Light",
      "header.theme.dark": "Dark",
      "header.theme.title": "Toggle Light/Dark Theme",

      // Sidebar
      "nav.bi": "Equipment BI",
      "nav.bi.perf": "Performance Dashboard",
      "nav.bi.trend": "Event Trend Dashboard",
      "nav.fleet": "Asset Center",
      "nav.events": "Event Center",
      "nav.assets": "Equipment Health",
      "nav.map": "Map View",
      "nav.dataMgmt": "Data & Management",
      "nav.oil": "Fluid / Inspection",
      "nav.oil.fluid": "Fluid Test Results",
      "nav.oil.inspect": "Inspection Results",
      "nav.report.analysis": "Report Analytics",
      "nav.report.mgmt": "Reports",
      "nav.report.assetStatus": "Asset Operation Status",
      "nav.report.minecare": "MineCare Event Details",
      "nav.report.ops": "Operational Metrics",
      "nav.report.workOrders": "Work Order Records",
      "nav.dataImport": "Data Import & API",
      "nav.master": "Master Data",
      "nav.master.fault": "Alert Code & Severity",
      "nav.master.asset": "Asset Master",
      "nav.master.people": "People & Org",
      "nav.master.area": "Mine Area & Faces",
      "footer.copyright": "© 2025 Mining Equipment · v2.0.8",

      // Performance dashboard
      "page.index.title": "Performance Dashboard",
      "page.index.sub": "Real-time overview of equipment health & events",
      "kpi.totalAssets": "Total Assets",
      "kpi.online": "Online",
      "kpi.alerts": "Active Alerts",
      "kpi.pending": "Pending Events",
      "kpi.uptime": "Uptime Rate",
      "kpi.mttr": "MTTR",
      "kpi.mtbf": "MTBF",
      "kpi.utilization": "Utilization",
      "section.statusBy": "Status Distribution",
      "section.alertsByModel": "Alerts by Model",
      "section.eventsTrend": "Event Trend",
      "section.topAssets": "Key Assets",
      "section.recentAlerts": "Recent Alerts",

      // Fleet
      "page.fleet.title": "Asset Center",
      "page.fleet.sub": "All mining operation equipment",
      "filter.model": "Model",
      "filter.area": "Area",
      "filter.status": "Status",
      "filter.time": "Time Range",
      "filter.assetType": "Asset Type",
      "filter.board": "Dashboard",
      "filter.searchAssets": "Search asset / ID / area…",
      "status.online": "Online",
      "status.offline": "Offline",
      "status.maint": "Maintenance",
      "status.standby": "Standby",
      "status.fault": "Fault",

      // Events
      "page.events.title": "Event Center",
      "page.events.sub": "Full lifecycle of fault events",
      "tab.pending": "Pending",
      "tab.history": "History",
      "th.eventNo": "Event No.",
      "th.eventTime": "Time",
      "th.asset": "Asset",
      "th.assetId": "Asset ID",
      "th.assetName": "Asset Name",
      "th.alertCode": "Alert Code",
      "th.alertName": "Alert",
      "th.severity": "Severity",
      "th.area": "Area",
      "th.status": "Status",
      "th.handler": "Handler",
      "th.duration": "Duration",
      "th.action": "Action",
      "evt.status.pending": "Pending",
      "evt.status.progress": "In Progress",
      "evt.status.closed": "Closed",
      "evt.status.critical": "Critical",
      "filter.searchEvents": "Search event / asset / alert…",

      // Assets & Alerts
      "page.assets.title": "Equipment Health",
      "page.assets.sub": "Asset-centric health & alert tracking",
      "view.byAsset": "By Asset",
      "view.byAlert": "By Alert",
      "page.alerts.title": "Alert View",
      "page.alerts.sub": "Real-time active alerts panorama",
      "th.healthScore": "Health",
      "th.lastAlert": "Last Alert",
      "th.alertCount": "Alerts",
      "filter.searchAlerts": "Search alert / asset…",
      "level.critical": "Critical",
      "level.warning": "Warning",
      "level.info": "Info",

      // Reports
      "page.rptAsset.title": "Asset Operation Status Report",
      "page.rptAsset.sub": "Snapshot of mine-wide asset status & availability",

      "page.minecare.title": "MineCare Event Details",
      "page.minecare.sub": "Raw event data captured by MineCare",
      "kpi.totalEvents": "Total Events",
      "kpi.criticalEvents": "Critical",
      "kpi.warningEvents": "Warning",
      "kpi.infoEvents": "Info",

      "page.ops.title": "Operational Cumulative Metrics",
      "page.ops.sub": "Snapshot of cumulative operating metrics",
      "kpi.totalHours": "Total Run Hours",
      "kpi.totalFuel": "Total Fuel",
      "kpi.totalLoad": "Total Load",
      "kpi.avgUtil": "Avg Utilization",

      "page.wo.title": "Work Order Dispatch Records",
      "page.wo.sub": "SAP work order dispatch ledger",
      "kpi.woTotal": "Total Orders",
      "kpi.woYem": "YEM Critical",
      "kpi.woYco": "YCO Routine",
      "kpi.woDispatched": "Dispatched",
      "th.woNo": "Work Order No.",
      "th.woType": "Type",
      "th.repair": "Repair Type",
      "th.prio": "Priority",
      "th.turma": "Crew",
      "th.planDate": "Plan Date",
      "th.workCenter": "Work Center",
      "th.ctrlCenter": "Control Center",
      "th.pts": "PTS",
      "th.subject": "Subject",
      "th.troubleSubj": "Diagnosis",
      "th.desc": "Description",
      "th.recom": "Recommendation",
      "th.creator": "Creator",
      "th.dispatchTime": "Dispatch Time",
      "th.validateStatus": "Validation",
      "th.dispatchStatus": "Dispatch",
      "th.sapNo": "SAP No.",
      "wo.status.dispatched": "Dispatched",
      "wo.status.processing": "Processing",
      "wo.status.draft": "Draft",
      "wo.status.failed": "Failed",
      "wo.validate.passed": "Passed",
      "wo.validate.pending": "Pending",
      "wo.validate.failed": "Failed",
      "filter.searchWo": "Search WO / asset / SAP…",

      // alh-modal work order panel
      "wo.btn.generate": "Generate Order",
      "wo.btn.collapse": "Collapse Order Panel",
      "wo.btn.viewSnap": "View Snapshot",
      "wo.btn.createEvent": "Create Event",
      "wo.btn.close": "Done & Close",
      "wo.btn.fixFail": "Fix failed checks first",
      "wo.step.fill": "Fill Info",
      "wo.step.validate": "Validate",
      "wo.step.dispatch": "Dispatch to SAP",
      "wo.sec.fillTitle": "Order Type & Service Info",
      "wo.sec.validateTitle": "Order Validation",
      "wo.sec.dispatchTitle": "Dispatch Complete",
      "wo.sub.intro": "Fill → Validate → Dispatch",
      "wo.sub.draftLoaded": "Draft loaded",
      "wo.draft.saved": "Draft saved",
      "wo.type.title": "Order Type · Tipo de Ordem",
      "wo.type.yem.title": "YEM · Major Risk Event",
      "wo.type.yem.desc": "Evento de Risco Maior",
      "wo.type.yco.title": "YCO · Routine Repair",
      "wo.type.yco.desc": "Ordem Corretiva",
      "wo.type.nota.title": "Nota · Notification",
      "wo.type.nota.desc": "Apenas Notificação",
      "wo.field.repair": "Repair Type · Tipo de Reparo",
      "wo.field.prio": "Priority · Prioridade",
      "wo.field.turma": "Crew · Turma",
      "wo.field.planDate": "Plan Date · Data Plan.",
      "wo.field.workCenter": "Work Center · Centro Trabalho",
      "wo.field.ctrlCenter": "Control Center · Ctrl Centro",
      "wo.field.pts": "PTS",
      "wo.field.subject": "Subject · Assunto",
      "wo.field.troubleSubj": "Diagnosis · Diagnóstico",
      "wo.field.desc": "Description · Descrição",
      "wo.field.recom": "Recommendation · Recomendação",
      "wo.btn.saveDraft": "Save Draft",
      "wo.btn.toValidate": "Next: Validate",
      "wo.btn.toDispatch": "Dispatch to SAP",
      "wo.btn.viewRecords": "View Dispatched Orders",
      "wo.btn.backToFill": "Back to Edit",
      "wo.preview.title": "Order Preview",
      "wo.validate.title": "Checks",
      "wo.draft.tag": "Draft Loaded",
      "wo.dispatch.success": "Dispatched Successfully",
      "wo.dispatch.failed": "Dispatch Failed",

      // Placeholder
      "placeholder.title": "Coming Soon",
      "placeholder.desc": "This module is under development.",

      // Fault registry
      "page.fault.title": "Alert Code & Severity Registry",
      "page.fault.sub": "Maintain fault codes and severity mapping",

      // Monitor
      "page.monitor.title": "Equipment Monitoring",
      "page.monitor.sub": "Real-time data curves & telemetry",
      "page.monitor.chart.title": "Equipment Monitoring",
      "page.monitor.select.title": "Equipment Monitoring · Select Asset",

      // Map
      "page.map.title": "Mine Map",
      "page.map.sub": "Real-time equipment location & status",

      // Asset detail
      "page.assetDetail.title": "Asset Details",

      // Fluid / Inspection
      "page.fluid.title": "Fluid Test Results",
      "page.fluid.sub": "Oil sampling lab test records",
      "page.inspect.title": "Inspection Results",
      "page.inspect.sub": "Daily inspection task records",

      // Event trend
      "page.eventsTrend.title": "Event Trend Dashboard",
      "page.eventsTrend.sub": "Volume & composition trend analysis"
    },

    /* ============== Português (BR) - 占位，后续补充 ============== */
    pt: {}
  },

  /** 取文案，缺失时回退到中文，再回退到 fallback / key；
   *  支持模板变量：t("key.fmt", null, {n: 8}) → "当前有 8 条..." */
  t: function(key, fallback, vars) {
    // 兼容老调用：t(key, {n:8}) —— 第二参作为 vars
    if (fallback && typeof fallback === "object" && vars == null) {
      vars = fallback; fallback = null;
    }
    var d = this.dict[this.current];
    var v = (d && d[key] != null) ? d[key] : null;
    if (v == null) {
      var zh = this.dict.zh;
      if (zh && zh[key] != null) v = zh[key];
    }
    if (v == null) v = (fallback != null) ? fallback : key;
    if (vars && typeof v === "string") {
      Object.keys(vars).forEach(function(k){
        v = v.split("{" + k + "}").join(vars[k]);
      });
    }
    return v;
  },

  /** 切换语言 */
  set: function(lang) {
    if (!this.dict[lang]) lang = "zh";
    if (lang === "pt") {
      // 葡文未上线，回退到中文并提示
      try {
        var tip = this.dict[this.current === "en" ? "en" : "zh"]["header.lang.pt.tip"];
        if (window.console && console.info) console.info(tip);
      } catch(e){}
      lang = this.current; // 不切换
    }
    this.current = lang;
    try { localStorage.setItem("xcmg-lang", lang); } catch(e){}
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : (lang === "en" ? "en" : "pt-BR"));
    document.documentElement.setAttribute("data-lang", lang);
    this.apply();
    // 通知监听者重渲染（如 ECharts、动态构建的表格）
    try { window.dispatchEvent(new CustomEvent("xcmg:langchange", { detail: { lang: lang } })); } catch(e){}
  },

  /** 应用 i18n：扫描 [data-i18n*] 属性，替换文本/属性 */
  apply: function(root) {
    root = root || document;
    var self = this;
    // textContent
    var nodes = root.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute("data-i18n");
      var v = self.t(key, null);
      if (v !== null) el.textContent = v;
    }
    // placeholder
    var phs = root.querySelectorAll("[data-i18n-placeholder]");
    for (var j = 0; j < phs.length; j++) {
      var el2 = phs[j];
      var k2 = el2.getAttribute("data-i18n-placeholder");
      var v2 = self.t(k2, null);
      if (v2 !== null) el2.setAttribute("placeholder", v2);
    }
    // title
    var tts = root.querySelectorAll("[data-i18n-title]");
    for (var m = 0; m < tts.length; m++) {
      var el3 = tts[m];
      var k3 = el3.getAttribute("data-i18n-title");
      var v3 = self.t(k3, null);
      if (v3 !== null) el3.setAttribute("title", v3);
    }
    // value（如 input button 的 value）
    var vls = root.querySelectorAll("[data-i18n-value]");
    for (var n = 0; n < vls.length; n++) {
      var el4 = vls[n];
      var k4 = el4.getAttribute("data-i18n-value");
      var v4 = self.t(k4, null);
      if (v4 !== null) el4.setAttribute("value", v4);
    }
    // 同步 document.title（页面 head 中 <title data-i18n="..."> 的也会被替换）
    var titleEl = document.querySelector("title[data-i18n]");
    if (titleEl) {
      try { document.title = titleEl.textContent; } catch(e){}
    }
  },

  /** 初始化（DOMContentLoaded 后调用 / 或 nav.mount() 之后调用） */
  init: function() {
    // current 已在构造时确定，这里 apply 一次
    this.apply();
  }
};

// DOM 就绪后自动 apply 一次（兜底；nav.mount 会再 apply 一次）
document.addEventListener("DOMContentLoaded", function(){
  try { window.XCMG_I18N.apply(); } catch(e){}
});
