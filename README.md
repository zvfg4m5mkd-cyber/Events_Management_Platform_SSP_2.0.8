# XCMG 徐工设备运维监控系统 — HTML 高保真原型

> 本原型用于快速沟通 UI/UX 设计方向，覆盖 BI 看板 / 资产中心 / 事件中心 / 设备健康 / 地图视图 / 数据与管理 共 6 大模块、19 个页面，支持中英双语，可直接在浏览器中打开并体验完整跳转与交互。

---

## 启动方式

**方式一（推荐）：双击直接打开**
```bash
# 在文件管理器中双击 index.html
```
> 提示：推荐使用 Chrome 90+、Edge、Firefox 最新版。部分页面使用 ECharts CDN，加载时需保证网络连接。

**方式二：本地 HTTP 服务器**
```bash
cd 系统原型_XCMG设备运维
python3 -m http.server 8080
# 访问 http://localhost:8080/index.html
```

---

## 页面跳转关系

### 侧边栏菜单结构（v2.0.6）

```
顶部 Logo / 主题切换 / 中英切换
└─ 侧边栏（一级 8 项 · 二级嵌套 3 组）
   ├─ BI 看板
   │   ├─ 设备绩效看板          → index.html
   │   └─ 事件趋势看板          → events_trend.html
   ├─ 资产中心                  → fleet.html
   ├─ 事件中心                  → events.html
   ├─ 设备健康                  → assets.html  (含 alerts.html 子视图)
   ├─ 地图视图                  → map.html              ← v2.0.6 新增
   ├─ ──── 数据与管理 ────
   │   ├─ 油品/点检结果
   │   │   ├─ 油品检测结果      → fluid_results.html
   │   │   └─ 点检任务结果      → inspection_results.html
   │   ├─ 报表管理
   │   │   ├─ 资产运行状态报表  → report_asset_status.html
   │   │   ├─ MineCare 事件明细表 → minecare_events.html
   │   │   ├─ 设备运营累计指标表 → ops_metrics.html
   │   │   └─ 工单下发记录表    → work_orders.html
   │   └─ 基础数据管理
   │       ├─ 注册告警与等级维护 → fault_registry.html
   │       ├─ 设备主数据        → asset_master.html
   │       ├─ 人员与组织        → placeholder.html?m=人员与组织
   │       └─ 矿区与工作面      → placeholder.html?m=矿区与工作面
```

### 主要业务流跳转（页面间深链）

```
首页 (index.html)
  ├─ 各 KPI 卡 / 摘要 → 各模块（资产中心 / 事件中心 / 设备健康 / 报表）
  └─ 事件趋势 → events_trend.html

资产中心 (fleet.html)
  └─ 设备卡片 → 设备详情 (asset_detail.html?id=xxx)

设备详情 (asset_detail.html)
  ├─ 实时监控按钮     → 监控选择 (monitor_select.html?id=xxx)
  ├─ 创建工单按钮     → 事件中心 (events.html)
  └─ 历史告警时间轴   → 告警视图 (alerts.html)

监控选择 (monitor_select.html)
  ├─ 返回设备详情     → asset_detail.html
  └─ 选完测点 → 监控曲线 (monitor_chart.html?id=xxx&signals=...)

监控曲线 (monitor_chart.html)
  └─ 重新选择测点     → monitor_select.html

设备健康 / 告警视图 (assets.html / alerts.html)
  ├─ 设备行 → 设备详情 (asset_detail.html)
  ├─ 位置链接 → 地图视图 (map.html?asset=xxx)
  ├─ 创建事件 → 事件中心 (events.html)
  └─ Tab 切换：故障码 / 油品分析 / 点检结果

事件中心 (events.html)
  ├─ 列表 → 右侧详情面板（状态步进 / 处理意见 / 知识库召回）
  ├─ 「新建事件」三步式工单生成（v1.9.17）
  ├─ 草稿保存 → localStorage(xcmg_wo_draft_v1)
  └─ 工单台账 → localStorage(xcmg_wo_log_v1)

地图视图 (map.html)
  ├─ 设备标记点击 → 弹出简要卡片
  └─ 详情按钮 → asset_detail.html

报表管理（4 张）
  ├─ 资产运行状态报表行 → asset_detail.html
  ├─ MineCare 事件明细表（v2.0.5 增「导入」按钮）
  ├─ 设备运营累计指标表（v2.0.5 增「导入」按钮）
  └─ 工单下发记录表

基础数据管理
  ├─ 注册告警与等级维护：编辑抽屉 / 批量导入 modal
  ├─ 设备主数据 (v2.0.4)：14 列表格 / PIN 唯一性校验 / 双列编辑抽屉
  └─ 人员与组织 / 矿区与工作面：占位页（placeholder.html）
```

### 页面与 active key 映射

| 一级菜单 | active key | 页面 |
| --- | --- | --- |
| 设备绩效看板 | `bi-perf` | index.html |
| 事件趋势看板 | `bi-trend` | events_trend.html |
| 资产中心 | `fleet` | fleet.html |
| 事件中心 | `review` | events.html |
| 设备健康 | `assets` / `alerts` | assets.html / alerts.html |
| 地图视图 | `map` | map.html |
| 油品检测结果 | `data-fluid` | fluid_results.html |
| 点检任务结果 | `data-inspect` | inspection_results.html |
| 资产运行状态报表 | `data-rpt-asset` | report_asset_status.html |
| MineCare 事件明细表 | `data-rpt-minecare` | minecare_events.html |
| 设备运营累计指标表 | `data-rpt-ops` | ops_metrics.html |
| 工单下发记录表 | `data-rpt-wo` | work_orders.html |
| 注册告警与等级维护 | `data-fault` | fault_registry.html |
| 设备主数据 | `data-asset` | asset_master.html |
| 人员与组织 | `data-people` | placeholder.html?m=人员与组织 |
| 矿区与工作面 | `data-area` | placeholder.html?m=矿区与工作面 |

> 各 HTML 顶部通过 `XCMG_NAV.mount("active-key")` 调用 `js/nav.js` 渲染统一侧边栏并高亮当前项。

---

## 文件结构

```
系统原型_XCMG设备运维/
├── index.html                  # 设备绩效看板（首页：KPI / 图表 / 事件趋势）
├── events_trend.html           # 事件趋势看板
├── fleet.html                  # 资产中心（卡片墙）
├── events.html                 # 事件中心（列表 + 三步式新建工单 + 知识库）
├── assets.html                 # 设备健康（设备列表 + 告警 Tab）
├── alerts.html                 # 告警视图（与设备健康共用 active key）
├── asset_detail.html           # 设备详情（参数 / 时间轴 / 实时监控入口）
├── monitor_select.html         # 实时监控测点选择
├── monitor_chart.html          # 实时监控曲线
├── map.html                    # 地图视图（SVG 矿区 + 设备标记）
├── fluid_results.html          # 油品检测结果
├── inspection_results.html     # 点检任务结果
├── report_asset_status.html    # 资产运行状态报表
├── minecare_events.html        # MineCare 事件明细表（v2.0.5 加导入按钮）
├── ops_metrics.html            # 设备运营累计指标表（v2.0.5 加导入按钮）
├── work_orders.html            # 工单下发记录表
├── fault_registry.html         # 注册告警与等级维护
├── asset_master.html           # 设备主数据（v2.0.4 新增）
├── placeholder.html            # 占位页（人员与组织 / 矿区与工作面）
├── css/
│   └── main.css                # 全局样式（CSS 变量 / 组件库 / 二级菜单视觉）
├── js/
│   ├── nav.js                  # 公共导航（顶部 / 侧边栏 / 主题 / i18n hook）
│   ├── i18n.js                 # 中英双语字典 + 切换逻辑
│   ├── data.js                 # 模拟数据（设备 / 告警 / 事件 / 主数据 等）
│   ├── charts.js               # ECharts 通用配置 / 配色
│   ├── echarts.min.js          # ECharts 离线包（v5）
│   └── alh_modal.js            # 三步式新建工单 modal
└── README.md                   # 本文件
```

---

## 模拟数据说明

### 设备（5 台）
| 设备编号 | 型号 | 健康评分 | 状态 |
|---------|------|---------|------|
| XE5600-001 | XE5600 大型矿用挖掘机 | 96 | 正常 |
| XE2000-001 | XE2000 中大型挖掘机 | 72 | 中等 |
| GR5505-001 | GR5505 平地机 | 38 | 严重 |
| LW1200KN-001 | LW1200KN 大型装载机 | 88 | 正常 |
| LW1000KN-001 | LW1000KN 大型装载机 | 65 | 中等 |

### 告警（32 条）
- **严重** 8 条（E101 / E203 / E501 / E502 / E601 / E702 / E703 / E204 各有活跃）
- **中等** 17 条（液压 / 润滑 / 冷却 / 制动等各类 W 码）
- **低** 7 条（I 码：尿素 / GPS / DPF / 通信等提示信息）
- 时间分布：2025-01-01 ~ 2025-01-12（最近 12 天）

### 事件工单（10 条）
- **待处理** 4 条（E501 / E703 / E101 / E702 相关）
- **处理中** 4 条（E203 / E502 / W704 / E204 相关）
- **已闭环** 2 条（W205 / W601 已解决）

### 油品分析（5 条）
每台设备各 1 条，GR5505 / XE2000 / LW1000KN 判定为"警告"级别。

### 知识库（5 个告警码 × 各 1-2 条）
E101 / E203 / E501 / E702 / E703 各含"处理步骤"和"维修步骤"。

---

## 视觉设计规范

### 状态色（强制统一）
| 含义 | 色值 | CSS 变量 |
|------|------|---------|
| 🔴 严重 / Action Required | `#E53935` | `--status-critical` |
| 🟠 中等 / Warning | `#FB8C00` | `--status-warning` |
| 🔵 低 / Info | `#0070D6` | `--xcmg-blue` / `--status-info` |
| 🟢 正常 / Resolved | `#43A047` | `--status-normal` |
| ⚪ 无数据 / Dismissed | `#9E9E9E` | `--status-muted` |

### 主色
- **徐工蓝深** `#0A4DA1` — header 背景
- **徐工蓝** `#0070D6` — 主按钮 / 链接 / 强调色
- **徐工蓝浅** `#E8F2FB` — hover / active 行背景

### 字体
- 主字体：系统字体栈（`-apple-system / PingFang SC / Microsoft YaHei / Helvetica Neue / Arial`）
- 无外部字体依赖，保证离线可用

### 外部依赖（仅 CDN）
- **ECharts 5.4.3** — 图表库（`https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js`）
- 其余全部为内联 CSS/JS，无需网络

---

## 技术说明

- **无构建工具**：双击 `index.html` 即可运行
- **CDN 兜底**：ECharts 使用 jsDelivr CDN（全球节点覆盖），若网络不通请使用内网镜像
- **IE 不支持**：建议 Chrome 90+ / Edge / Firefox
- **移动端**：原型针对桌面端优化，移动端布局可能需要调整
- **事件处理页交互**：可真实切换事件状态（点击"开始处理"/"标记闭环"），数据变更在页面生命周期内生效，刷新后恢复默认数据

---

## 关键设计决策

1. **地图采用 SVG 矿区示意**：因原型无法访问真实地图 API，使用 SVG 绘制的矿区示意图作为替代，包含矿坑轮廓、道路、维修车间等地理参照，设备以 Pin 标注定位，点击弹出设备卡片
2. **ECharts 图标颜色使用内联配置**：而非 charts.js 工具函数，以保证每个图表的配色与数据语义精确对应
3. **知识库联动**：events.html 根据当前选中事件关联的告警码自动过滤知识条目，kb-search 支持手动搜索
4. **侧边栏 badge 动态**：active alerts 数量 badge 随 data.js 中的 stats 数据联动更新

---

*原型版本：v2.0.8 | 2026-06-20 | XCMG 设备运维监控平台 · 中英双语 · 事件中心支持手动新建事件 · 设备主数据导入管理 · 二级菜单视觉强化 · MineCare/运营指标表新增导入按钮 · 侧边栏新增「地图视图」一级入口（map.html）· 告警列表统一接入「告警处理弹窗」（alh-modal）· 告警处理弹窗内新增「去知识库」按钮（折叠展开 9 大 tab + X-GSS 跳转）*
