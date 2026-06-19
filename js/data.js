/* ====================================================
   XCMG 设备运维监控系统 - 模拟数据
   ==================================================== */

window.XCMG_DATA = {

  /* ===== 资产清单·汇总数据（用于资产清单顶部 KPI / 状态 tabs） ===== */
  fleet_summary: {
    total: 52,
    running: 38,
    stopped: 7,
    maintenance: 7,
    high_risk: 6,
    open_events: 24,
    recovered_today: 14
  },

  /* ===== 设备清单 ===== */
  assets: [
    {
      id: "XE5600-001",
      name: "XE5600",
      model: "XE5600",
      sn: "SN-XE5600-2021-0891",
      category: "挖掘机",
      location: "内蒙古鄂尔多斯煤矿A区",
      site: "鄂尔多斯煤矿A区",
      status: "normal",
      net_status: "online",
      dispatch_status: "working",
      health: 96,
      uptime_hours: 4821,
      work_hours_today: 9.5,
      last_alarm_time: "2025-01-11 14:23",
      fleet: "一号线采掘队",
      spec: "斗容: 28m³ | 额定功率: 1880kW",
      thumb_letter: "XE",
      thumb_color: "#fff3e0",
      thumb_border: "#ffcc80",
      next_pm: "2026-06-23"
    },
    {
      id: "XE2000-001",
      name: "XE2000",
      model: "XE2000",
      sn: "SN-XE2000-2020-2156",
      category: "挖掘机",
      location: "内蒙古鄂尔多斯煤矿A区",
      site: "鄂尔多斯煤矿A区",
      status: "warning",
      net_status: "online",
      dispatch_status: "working",
      health: 72,
      uptime_hours: 7632,
      work_hours_today: 11.2,
      last_alarm_time: "2025-01-12 08:05",
      fleet: "二号线采掘队",
      spec: "斗容: 9.5m³ | 额定功率: 729kW",
      thumb_letter: "XE",
      thumb_color: "#fff3e0",
      thumb_border: "#ffcc80",
      next_pm: "2026-06-25"
    },
    {
      id: "GR5505-001",
      name: "GR5505",
      model: "GR5505",
      sn: "SN-GR5505-2022-0342",
      category: "平地机",
      location: "内蒙古鄂尔多斯煤矿B区",
      site: "鄂尔多斯煤矿B区",
      status: "critical",
      net_status: "online",
      dispatch_status: "locked",
      health: 38,
      uptime_hours: 3198,
      work_hours_today: 0,
      last_alarm_time: "2025-01-12 18:47",
      fleet: "道路维护组",
      spec: "发动机功率: 224kW | 刮刀宽度: 4270mm",
      thumb_letter: "GR",
      thumb_color: "#e8f5e9",
      thumb_border: "#a5d6a7",
      next_pm: "2026-07-02"
    },
    {
      id: "LW1200KN-001",
      name: "LW1200KN",
      model: "LW1200KN",
      sn: "SN-LW1200KN-2019-1107",
      category: "装载机",
      location: "内蒙古鄂尔多斯煤矿A区",
      site: "鄂尔多斯煤矿A区",
      status: "normal",
      net_status: "online",
      dispatch_status: "ready",
      health: 88,
      uptime_hours: 12450,
      work_hours_today: 8.1,
      last_alarm_time: "2025-01-10 16:30",
      fleet: "一号线辅助车队",
      spec: "额定载重量: 12t | 额定功率: 420kW",
      thumb_letter: "LW",
      thumb_color: "#e3f2fd",
      thumb_border: "#90caf9",
      next_pm: "2026-07-08"
    },
    {
      id: "LW1000KN-001",
      name: "LW1000KN",
      model: "LW1000KN",
      sn: "SN-LW1000KN-2021-0723",
      category: "装载机",
      location: "内蒙古鄂尔多斯煤矿C区",
      site: "鄂尔多斯煤矿C区",
      status: "warning",
      net_status: "offline",
      dispatch_status: "maintenance",
      health: 65,
      uptime_hours: 8920,
      work_hours_today: 6.3,
      last_alarm_time: "2025-01-12 20:15",
      fleet: "三号线运输队",
      spec: "额定载重量: 10t | 额定功率: 392kW",
      thumb_letter: "LW",
      thumb_color: "#e3f2fd",
      thumb_border: "#90caf9",
      next_pm: "2026-07-15"
    }
  ],

  /* ===== 告警记录 ===== */
  alerts: [
    { id: "ALM-20250112-001", code: "301", title: "发动机水温高报警", desc: "发动机冷却液温度突破上限阈值（出水口 ≥ 105°C）", level: "critical", asset_id: "XE5600-001", asset_name: "XE5600", first_occurred: "2025-01-12 18:30", last_occurred: "2025-01-12 21:05", occurrence_count: 3, status: "active", downtime: "yes", trend: [82,95,107,103,108], fault_code: "301", category_cn: "故障", desc_en: "Engine Coolant Temperature High", event_type: "OEM 原始事件", operator: "--", accept_status: "accepted", source: "系统总线", final_value: "107.0 °C", event_type_id: "1693460838", area: "鄂尔多斯煤矿A区·一号采掘面", oem_protocol: "6 - SAE J1939 总线", data_source: "系统自动捕获", snapshot_status: "已触发捕获", root_cause: "1. 散热水箱表面被矿尘堵塞导致换热效率下降；2. 节温器卡滞在小循环；3. 冷却液长期未更换出现老化沉积。", trouble_guide: "停机怠速 5 分钟散热，使用诊断仪读取节温器开启温度并比对工况曲线。", recommended_action: "通知值班维保组在下个换班窗口反吹散热水箱，记录冷却液 pH 值。", driver: "刘建国", beacon: "EDS-A-N1-CV3 工作面", last_dispatch: "按一号采掘面计划继续作业", carga: "满载装车作业", gps_coord: "39.834251 ; 109.973618", next_flow: "待装(下一斗)" },
    { id: "ALM-20250110-002", code: "305", title: "空滤堵塞报警", desc: "空气滤清器主滤压差超过设定阈值", level: "info", asset_id: "XE5600-001", asset_name: "XE5600", first_occurred: "2025-01-10 13:00", last_occurred: "2025-01-10 17:45", occurrence_count: 1, status: "ignored", downtime: "no", trend: [62,68,74,78,72], fault_code: "305", category_cn: "警告", desc_en: "Air Filter Clogged", event_type: "OEM 原始事件", operator: "82015632", accept_status: "accepted", source: "系统总线", final_value: "6.2 kPa", event_type_id: "1689204089", area: "鄂尔多斯煤矿A区·一号采掘面", oem_protocol: "6 - SAE J1939 总线", data_source: "系统自动捕获", snapshot_status: "未触发捕获", root_cause: "1. 空滤纸芯使用周期接近上限；2. 雨季湿度过大导致纸芯潮湿堵塞；3. 进气前置预滤器未清理。", trouble_guide: "拆下空滤目视检查并称重，重量增加 30% 以上判定堵塞。", recommended_action: "下班次更换空滤芯。", driver: "刘建国", beacon: "EDS-A-N1-CV3 工作面", last_dispatch: "按一号采掘面计划继续作业", carga: "满载装车作业", gps_coord: "39.834251 ; 109.973618", next_flow: "待装(下一斗)" },
    { id: "ALM-20250112-003", code: "0001", title: "GPS一级锁车", desc: "车载终端进入一级锁车保护，已限制启动", level: "critical", asset_id: "XE2000-001", asset_name: "XE2000", first_occurred: "2025-01-12 08:00", last_occurred: "2025-01-12 22:00", occurrence_count: 7, status: "active", downtime: "yes", trend: [32,28,25,22,20], fault_code: "0001", category_cn: "故障", desc_en: "GPS Lock Level 1", event_type: "智能算法事件", operator: "--", accept_status: "pending", source: "智能算法", final_value: "锁车状态", event_type_id: "1630632057", area: "鄂尔多斯煤矿A区·二号采掘面", oem_protocol: "1 - GPS-CAN 总线", data_source: "终端上报", snapshot_status: "已触发捕获", root_cause: "1. 整车进入 GPS 一级锁车区域；2. 工时超期未审批；3. 后台主动锁车指令。", trouble_guide: "查看车载终端锁车原因码，对比调度后台日志。", recommended_action: "联系调度中心审批解锁，禁止强制移动设备。", driver: "王福顺", beacon: "EDS-A-N2-CV1 工作面", last_dispatch: "维持当前作业循环", carga: "间歇性挖装", gps_coord: "39.832104 ; 109.969872", next_flow: "待装(下一斗)" },
    { id: "ALM-20250109-004", code: "341", title: "左分动箱液位低报警", desc: "左分动箱齿轮油液位低于报警刻度", level: "warning", asset_id: "XE2000-001", asset_name: "XE2000", first_occurred: "2025-01-09 10:15", last_occurred: "2025-01-11 14:20", occurrence_count: 4, status: "active", downtime: "no", trend: [0.8,0.6,0.4,0.3], fault_code: "341", category_cn: "警告", desc_en: "Left Transfer Box Level Low", event_type: "趋势异常事件", operator: "--", accept_status: "pending", source: "系统总线", final_value: "液位偏低", event_type_id: "1635300512", area: "鄂尔多斯煤矿A区·二号采掘面", oem_protocol: "6 - SAE J1939 总线", data_source: "系统自动捕获", snapshot_status: "已触发捕获", root_cause: "1. 左分动箱长期未补加齿轮油；2. 油底密封圈渗漏；3. 液位开关漂移。", trouble_guide: "拆下加油口螺塞用金属丝测量液位。", recommended_action: "维保组在下次停机窗口检查左分动箱密封并补加齿轮油。", driver: "王福顺", beacon: "EDS-A-N2-CV1 工作面", last_dispatch: "维持当前作业循环", carga: "间歇性挖装", gps_coord: "39.832104 ; 109.969872", next_flow: "待装(下一斗)" },
    { id: "ALM-20250108-005", code: "305", title: "空滤堵塞报警", desc: "空气滤清器主滤压差超过设定阈值", level: "info", asset_id: "XE2000-001", asset_name: "XE2000", first_occurred: "2025-01-08 09:00", last_occurred: "2025-01-10 16:00", occurrence_count: 2, status: "ignored", downtime: "no", trend: [1.2,2.1,3.0,2.8], fault_code: "305", category_cn: "警告", desc_en: "Air Filter Clogged", event_type: "OEM 原始事件", operator: "86022193", accept_status: "accepted", source: "系统总线", final_value: "6.2 kPa", event_type_id: "1663886124", area: "鄂尔多斯煤矿A区·二号采掘面", oem_protocol: "6 - SAE J1939 总线", data_source: "系统自动捕获", snapshot_status: "未触发捕获", root_cause: "1. 空滤纸芯使用周期接近上限；2. 雨季湿度过大导致纸芯潮湿堵塞；3. 进气前置预滤器未清理。", trouble_guide: "拆下空滤目视检查并称重，重量增加 30% 以上判定堵塞。", recommended_action: "下班次更换空滤芯。", driver: "王福顺", beacon: "EDS-A-N2-CV1 工作面", last_dispatch: "维持当前作业循环", carga: "间歇性挖装", gps_coord: "39.832104 ; 109.969872", next_flow: "待装(下一斗)" },
    { id: "ALM-20250112-006", code: "0005", title: "GPS二级锁车", desc: "车载终端进入二级锁车保护，已停机锁定", level: "critical", asset_id: "GR5505-001", asset_name: "GR5505", first_occurred: "2025-01-12 06:00", last_occurred: "2025-01-12 22:00", occurrence_count: 9, status: "active", downtime: "yes", trend: [220,195,178,165,150], fault_code: "0005", category_cn: "故障", desc_en: "GPS Lock Level 2", event_type: "智能算法事件", operator: "--", accept_status: "pending", source: "智能算法", final_value: "二级锁车", event_type_id: "1638270709", area: "鄂尔多斯煤矿B区·主运输干线", oem_protocol: "1 - GPS-CAN 总线", data_source: "终端上报", snapshot_status: "已触发捕获", root_cause: "1. 整车进入 GPS 二级锁车区域；2. 重大违章触发后台锁车。", trouble_guide: "对比调度日志和违章记录。", recommended_action: "联系调度安全员现场审批解锁。", driver: "赵海涛", beacon: "EDS-B-RD-MAIN-K3+200", last_dispatch: "暂停作业·已锁车", carga: "道路平整作业", gps_coord: "39.819773 ; 109.961240", next_flow: "返回B区路面养护点" },
    { id: "ALM-20250111-007", code: "503", title: "急停开关(驾驶室)", desc: "驾驶室急停开关已触发", level: "critical", asset_id: "GR5505-001", asset_name: "GR5505", first_occurred: "2025-01-11 14:00", last_occurred: "2025-01-12 20:00", occurrence_count: 5, status: "active", downtime: "yes", trend: [0,0,1,0,1], fault_code: "503", category_cn: "故障", desc_en: "E-Stop Switch (Cab)", event_type: "OEM 原始事件", operator: "--", accept_status: "pending", source: "系统总线", final_value: "急停触发", event_type_id: "1650459749", area: "鄂尔多斯煤矿B区·主运输干线", oem_protocol: "5 - 车身 CAN 总线", data_source: "系统自动捕获", snapshot_status: "已触发捕获", root_cause: "驾驶室急停按钮被触发。", trouble_guide: "确认现场无人员紧急情况后旋拧复位急停按钮。", recommended_action: "上报当班记录并核查触发原因。", driver: "赵海涛", beacon: "EDS-B-RD-MAIN-K3+200", last_dispatch: "暂停作业·已锁车", carga: "道路平整作业", gps_coord: "39.819773 ; 109.961240", next_flow: "返回B区路面养护点" },
    { id: "ALM-20250110-008", code: "323", title: "发动机机油液位低报警", desc: "发动机机油底壳液位低于下限刻度", level: "warning", asset_id: "GR5505-001", asset_name: "GR5505", first_occurred: "2025-01-10 11:00", last_occurred: "2025-01-11 15:00", occurrence_count: 3, status: "converted", downtime: "no", trend: [80,88,95,92,85], fault_code: "323", category_cn: "警告", desc_en: "Engine Oil Level Low", event_type: "趋势异常事件", operator: "82015632", accept_status: "accepted", source: "系统总线", final_value: "液位偏低", event_type_id: "1650759671", area: "鄂尔多斯煤矿B区·主运输干线", oem_protocol: "6 - SAE J1939 总线", data_source: "系统自动捕获", snapshot_status: "未触发捕获", root_cause: "1. 长期未补加机油；2. 机油底壳渗漏；3. 油位传感器漂移。", trouble_guide: "怠速静置 5 分钟后读取油位传感器原始值。", recommended_action: "通知配油车补加机油至上限。", driver: "赵海涛", beacon: "EDS-B-RD-MAIN-K3+200", last_dispatch: "暂停作业·已锁车", carga: "道路平整作业", gps_coord: "39.819773 ; 109.961240", next_flow: "返回B区路面养护点" },
    { id: "ALM-20250107-009", code: "325", title: "燃油油位低开关报警", desc: "燃油油位低开关已接通（液位 < 10%）", level: "info", asset_id: "GR5505-001", asset_name: "GR5505", first_occurred: "2025-01-07 08:30", last_occurred: "2025-01-09 09:00", occurrence_count: 1, status: "ignored", downtime: "no", trend: [24,23.8,24.2], fault_code: "325", category_cn: "警告", desc_en: "Fuel Low-Level Switch", event_type: "OEM 原始事件", operator: "83056721", accept_status: "accepted", source: "系统总线", final_value: "开关闭合", event_type_id: "1640202289", area: "鄂尔多斯煤矿B区·主运输干线", oem_protocol: "6 - SAE J1939 总线", data_source: "系统自动捕获", snapshot_status: "未触发捕获", root_cause: "油位低开关接通。", trouble_guide: "目视油标尺确认液位。", recommended_action: "立即补加燃油。", driver: "赵海涛", beacon: "EDS-B-RD-MAIN-K3+200", last_dispatch: "暂停作业·已锁车", carga: "道路平整作业", gps_coord: "39.819773 ; 109.961240", next_flow: "返回B区路面养护点" },
    { id: "ALM-20250110-010", code: "501", title: "电瓶充电异常报警", desc: "蓄电池充电电压偏低（< 13.5V）", level: "warning", asset_id: "LW1200KN-001", asset_name: "LW1200KN", first_occurred: "2025-01-10 15:00", last_occurred: "2025-01-10 18:00", occurrence_count: 2, status: "converted", downtime: "no", trend: [88,95,102,105,95], fault_code: "501", category_cn: "警告", desc_en: "Battery Charging Abnormal", event_type: "趋势异常事件", operator: "85067411", accept_status: "accepted", source: "系统总线", final_value: "13.2 V", event_type_id: "1661500643", area: "鄂尔多斯煤矿A区·破碎站", oem_protocol: "5 - 车身 CAN 总线", data_source: "系统自动捕获", snapshot_status: "未触发捕获", root_cause: "1. 蓄电池老化；2. 充电机调压器故障；3. 充电线束接触不良。", trouble_guide: "怠速测量电瓶端电压（标准 13.8-14.4V）。", recommended_action: "通知维保组带万用表上车排查充电系统。", driver: "陈志远", beacon: "EDS-A-CR-N1 装车点", last_dispatch: "前往一号装车点接班", carga: "Vazio (空载回程中)", gps_coord: "39.835420 ; 109.974912", next_flow: "Chegada (即将到达装载点)" },
    { id: "ALM-20250106-011", code: "302", title: "燃油油位低报警", desc: "燃油液位低于油箱容量 15%，需立即补加", level: "info", asset_id: "LW1200KN-001", asset_name: "LW1200KN", first_occurred: "2025-01-06 09:00", last_occurred: "2025-01-06 09:00", occurrence_count: 1, status: "ignored", downtime: "no", trend: [60,85,100], fault_code: "302", category_cn: "警告", desc_en: "Fuel Level Low", event_type: "OEM 原始事件", operator: "86022193", accept_status: "accepted", source: "系统总线", final_value: "12.4 %", event_type_id: "1647324964", area: "鄂尔多斯煤矿A区·破碎站", oem_protocol: "6 - SAE J1939 总线", data_source: "系统自动捕获", snapshot_status: "未触发捕获", root_cause: "1. 油位长期亏液未及时补充；2. 油位传感器浮子卡滞；3. 长距离怠速空驶导致油耗超预期。", trouble_guide: "用直尺测量油标尺读数与传感器原始值是否吻合，差值超 5% 视为传感器异常。", recommended_action: "通知配油车在 30 分钟内到位补加。", driver: "陈志远", beacon: "EDS-A-CR-N1 装车点", last_dispatch: "前往一号装车点接班", carga: "Vazio (空载回程中)", gps_coord: "39.835420 ; 109.974912", next_flow: "Chegada (即将到达装载点)" },
    { id: "ALM-20250112-012", code: "517", title: "急停开关(动力仓)", desc: "动力仓急停开关已触发", level: "critical", asset_id: "LW1000KN-001", asset_name: "LW1000KN", first_occurred: "2025-01-12 20:10", last_occurred: "2025-01-12 21:30", occurrence_count: 2, status: "active", downtime: "yes", trend: [6.2,5.0,4.5,4.2], fault_code: "517", category_cn: "故障", desc_en: "E-Stop Switch (Power Bay)", event_type: "OEM 原始事件", operator: "--", accept_status: "pending", source: "系统总线", final_value: "急停触发", event_type_id: "1631018823", area: "鄂尔多斯煤矿C区·三号转运点", oem_protocol: "5 - 车身 CAN 总线", data_source: "系统自动捕获", snapshot_status: "已触发捕获", root_cause: "动力仓急停按钮被触发。", trouble_guide: "确认动力仓安全后复位急停按钮。", recommended_action: "上报当班记录并核查触发原因。", driver: "孙家辉", beacon: "EDS-C-TR-N3 转运点", last_dispatch: "完成本斗后转运至破碎站", carga: "实时载重 9.4t", gps_coord: "39.812338 ; 109.954771", next_flow: "前往C区破碎站卸料" },
    { id: "ALM-20250111-013", code: "312", title: "发动机2水温高报警", desc: "副发动机冷却液温度突破上限阈值", level: "critical", asset_id: "LW1000KN-001", asset_name: "LW1000KN", first_occurred: "2025-01-11 16:00", last_occurred: "2025-01-11 20:00", occurrence_count: 3, status: "active", downtime: "yes", trend: [85,95,105,112,108], fault_code: "312", category_cn: "故障", desc_en: "Engine 2 Coolant Temperature High", event_type: "OEM 原始事件", operator: "--", accept_status: "accepted", source: "系统总线", final_value: "108.0 °C", event_type_id: "1688946457", area: "鄂尔多斯煤矿C区·三号转运点", oem_protocol: "6 - SAE J1939 总线", data_source: "系统自动捕获", snapshot_status: "已触发捕获", root_cause: "1. 副发动机散热水箱堵塞；2. 节温器卡滞；3. 冷却液不足。", trouble_guide: "停机散热并读取副机节温器开启温度。", recommended_action: "通知维保组检查副机散热系统。", driver: "孙家辉", beacon: "EDS-C-TR-N3 转运点", last_dispatch: "完成本斗后转运至破碎站", carga: "实时载重 9.4t", gps_coord: "39.812338 ; 109.954771", next_flow: "前往C区破碎站卸料" },
    { id: "ALM-20250109-014", code: "341", title: "左分动箱液位低报警", desc: "左分动箱齿轮油液位低于报警刻度", level: "warning", asset_id: "LW1000KN-001", asset_name: "LW1000KN", first_occurred: "2025-01-09 10:00", last_occurred: "2025-01-12 14:00", occurrence_count: 6, status: "active", downtime: "no", trend: [0,1,2,3,5], fault_code: "341", category_cn: "警告", desc_en: "Left Transfer Box Level Low", event_type: "趋势异常事件", operator: "--", accept_status: "pending", source: "系统总线", final_value: "液位偏低", event_type_id: "1635172222", area: "鄂尔多斯煤矿C区·三号转运点", oem_protocol: "6 - SAE J1939 总线", data_source: "系统自动捕获", snapshot_status: "已触发捕获", root_cause: "1. 左分动箱长期未补加齿轮油；2. 油底密封圈渗漏；3. 液位开关漂移。", trouble_guide: "拆下加油口螺塞用金属丝测量液位。", recommended_action: "维保组在下次停机窗口检查左分动箱密封并补加齿轮油。", driver: "孙家辉", beacon: "EDS-C-TR-N3 转运点", last_dispatch: "完成本斗后转运至破碎站", carga: "实时载重 9.4t", gps_coord: "39.812338 ; 109.954771", next_flow: "前往C区破碎站卸料" },
    { id: "ALM-20250108-015", code: "314", title: "发动机2空滤堵塞报警", desc: "副发动机空气滤清器主滤压差超阈值", level: "info", asset_id: "LW1000KN-001", asset_name: "LW1000KN", first_occurred: "2025-01-08 09:00", last_occurred: "2025-01-11 11:00", occurrence_count: 2, status: "ignored", downtime: "no", trend: [1.5,2.8,3.2,2.5], fault_code: "314", category_cn: "警告", desc_en: "Engine 2 Air Filter Clogged", event_type: "OEM 原始事件", operator: "83056721", accept_status: "accepted", source: "系统总线", final_value: "6.4 kPa", event_type_id: "1638919792", area: "鄂尔多斯煤矿C区·三号转运点", oem_protocol: "6 - SAE J1939 总线", data_source: "系统自动捕获", snapshot_status: "未触发捕获", root_cause: "副发动机空滤纸芯堵塞。", trouble_guide: "目视检查副机空滤纸芯。", recommended_action: "下班次更换副机空滤芯。", driver: "孙家辉", beacon: "EDS-C-TR-N3 转运点", last_dispatch: "完成本斗后转运至破碎站", carga: "实时载重 9.4t", gps_coord: "39.812338 ; 109.954771", next_flow: "前往C区破碎站卸料" },
    { id: "ALM-20250111-016", code: "323", title: "发动机机油液位低报警", desc: "发动机机油底壳液位低于下限刻度", level: "warning", asset_id: "XE5600-001", asset_name: "XE5600", first_occurred: "2025-01-11 10:00", last_occurred: "2025-01-11 16:00", occurrence_count: 2, status: "converted", downtime: "no", trend: [3.0,2.8,2.1,2.4], fault_code: "323", category_cn: "警告", desc_en: "Engine Oil Level Low", event_type: "趋势异常事件", operator: "85067411", accept_status: "accepted", source: "系统总线", final_value: "液位偏低", event_type_id: "1660064298", area: "鄂尔多斯煤矿A区·一号采掘面", oem_protocol: "6 - SAE J1939 总线", data_source: "系统自动捕获", snapshot_status: "未触发捕获", root_cause: "1. 长期未补加机油；2. 机油底壳渗漏；3. 油位传感器漂移。", trouble_guide: "怠速静置 5 分钟后读取油位传感器原始值。", recommended_action: "通知配油车补加机油至上限。", driver: "刘建国", beacon: "EDS-A-N1-CV3 工作面", last_dispatch: "按一号采掘面计划继续作业", carga: "满载装车作业", gps_coord: "39.834251 ; 109.973618", next_flow: "待装(下一斗)" },
    { id: "ALM-20250112-017", code: "0002", title: "GPS通讯异常", desc: "GPS 终端心跳上报中断超过 30 分钟", level: "info", asset_id: "XE2000-001", asset_name: "XE2000", first_occurred: "2025-01-12 09:00", last_occurred: "2025-01-12 21:00", occurrence_count: 1, status: "active", downtime: "no", trend: [-110,-120,-128,-132], fault_code: "0002", category_cn: "故障", desc_en: "GPS Communication Lost", event_type: "智能算法事件", operator: "--", accept_status: "accepted", source: "智能算法", final_value: "通讯中断", event_type_id: "1682912165", area: "鄂尔多斯煤矿A区·二号采掘面", oem_protocol: "1 - GPS-CAN 总线", data_source: "终端上报", snapshot_status: "已触发捕获", root_cause: "1. 通讯模块天线松动；2. 矿区信号盲区；3. SIM 卡欠费。", trouble_guide: "在通讯良好区域测试上报心跳，对比信号强度。", recommended_action: "通知通讯组检查模块状态与流量。", driver: "王福顺", beacon: "EDS-A-N2-CV1 工作面", last_dispatch: "维持当前作业循环", carga: "间歇性挖装", gps_coord: "39.832104 ; 109.969872", next_flow: "待装(下一斗)" },
    { id: "ALM-20250110-018", code: "304", title: "机油压力低报警", desc: "机油主油道压力低于额定阈值 0.5 bar", level: "critical", asset_id: "LW1200KN-001", asset_name: "LW1200KN", first_occurred: "2025-01-10 11:00", last_occurred: "2025-01-10 17:00", occurrence_count: 2, status: "converted", downtime: "yes", trend: [100,90,82,85], fault_code: "304", category_cn: "故障", desc_en: "Engine Oil Pressure Low", event_type: "OEM 原始事件", operator: "81099842", accept_status: "accepted", source: "系统总线", final_value: "1.8 bar", event_type_id: "1620642227", area: "鄂尔多斯煤矿A区·破碎站", oem_protocol: "6 - SAE J1939 总线", data_source: "系统自动捕获", snapshot_status: "未触发捕获", root_cause: "1. 机油机油泵磨损导致出口压力下降；2. 机油黏度等级不符；3. 主油道压力调节阀卡开。", trouble_guide: "用机械压力表对比 ECU 上传压力，差值超 0.5 bar 视为传感器漂移。", recommended_action: "立即停机，禁止继续运转避免拉缸。", driver: "陈志远", beacon: "EDS-A-CR-N1 装车点", last_dispatch: "前往一号装车点接班", carga: "Vazio (空载回程中)", gps_coord: "39.835420 ; 109.974912", next_flow: "Chegada (即将到达装载点)" },
    { id: "ALM-20250111-019", code: "342", title: "右分动箱液位低报警", desc: "右分动箱齿轮油液位低于报警刻度", level: "warning", asset_id: "XE2000-001", asset_name: "XE2000", first_occurred: "2025-01-11 08:00", last_occurred: "2025-01-11 18:00", occurrence_count: 2, status: "active", downtime: "no", trend: [1.0,0.7,0.5,0.6], fault_code: "342", category_cn: "警告", desc_en: "Right Transfer Box Level Low", event_type: "趋势异常事件", operator: "--", accept_status: "pending", source: "系统总线", final_value: "液位偏低", event_type_id: "1698819363", area: "鄂尔多斯煤矿A区·二号采掘面", oem_protocol: "6 - SAE J1939 总线", data_source: "系统自动捕获", snapshot_status: "已触发捕获", root_cause: "1. 右分动箱齿轮油亏损；2. 密封圈渗漏。", trouble_guide: "拆下加油口螺塞测量液位。", recommended_action: "维保组检查右分动箱密封并补加齿轮油。", driver: "王福顺", beacon: "EDS-A-N2-CV1 工作面", last_dispatch: "维持当前作业循环", carga: "间歇性挖装", gps_coord: "39.832104 ; 109.969872", next_flow: "待装(下一斗)" },
    { id: "ALM-20250109-020", code: "0004", title: "GPS天线异常", desc: "GPS 天线信号丢失或天线连接异常", level: "info", asset_id: "GR5505-001", asset_name: "GR5505", first_occurred: "2025-01-09 08:00", last_occurred: "2025-01-09 08:00", occurrence_count: 1, status: "converted", downtime: "no", trend: [490,500,505], fault_code: "0004", category_cn: "故障", desc_en: "GPS Antenna Fault", event_type: "智能算法事件", operator: "82015632", accept_status: "accepted", source: "智能算法", final_value: "天线异常", event_type_id: "1622378907", area: "鄂尔多斯煤矿B区·主运输干线", oem_protocol: "1 - GPS-CAN 总线", data_source: "终端上报", snapshot_status: "未触发捕获", root_cause: "1. GPS 天线连接器松动；2. 天线馈线被老鼠咬破。", trouble_guide: "用万用表测量天线馈线对地阻抗。", recommended_action: "更换天线或修复馈线。", driver: "赵海涛", beacon: "EDS-B-RD-MAIN-K3+200", last_dispatch: "暂停作业·已锁车", carga: "道路平整作业", gps_coord: "39.819773 ; 109.961240", next_flow: "返回B区路面养护点" },
    { id: "ALM-20250107-021", code: "315", title: "发动机2空滤2堵塞报警", desc: "副发动机空气滤清器副滤压差超阈值", level: "info", asset_id: "LW1000KN-001", asset_name: "LW1000KN", first_occurred: "2025-01-07 14:00", last_occurred: "2025-01-09 10:00", occurrence_count: 1, status: "converted", downtime: "no", trend: [320,305,290,280], fault_code: "315", category_cn: "警告", desc_en: "Engine 2 Air Filter 2 Clogged", event_type: "OEM 原始事件", operator: "83056721", accept_status: "accepted", source: "系统总线", final_value: "5.5 kPa", event_type_id: "1676367445", area: "鄂尔多斯煤矿C区·三号转运点", oem_protocol: "6 - SAE J1939 总线", data_source: "系统自动捕获", snapshot_status: "未触发捕获", root_cause: "副发动机副空滤纸芯堵塞。", trouble_guide: "目视检查副机副空滤纸芯。", recommended_action: "下班次更换副机副空滤芯。", driver: "孙家辉", beacon: "EDS-C-TR-N3 转运点", last_dispatch: "完成本斗后转运至破碎站", carga: "实时载重 9.4t", gps_coord: "39.812338 ; 109.954771", next_flow: "前往C区破碎站卸料" },
    { id: "ALM-20250106-022", code: "306", title: "空滤2堵塞报警", desc: "空气滤清器副滤压差超过设定阈值", level: "info", asset_id: "LW1200KN-001", asset_name: "LW1200KN", first_occurred: "2025-01-06 10:00", last_occurred: "2025-01-06 10:00", occurrence_count: 1, status: "converted", downtime: "no", trend: [20,15,18], fault_code: "306", category_cn: "警告", desc_en: "Air Filter 2 Clogged", event_type: "OEM 原始事件", operator: "85067411", accept_status: "accepted", source: "系统总线", final_value: "5.8 kPa", event_type_id: "1605151470", area: "鄂尔多斯煤矿A区·破碎站", oem_protocol: "6 - SAE J1939 总线", data_source: "系统自动捕获", snapshot_status: "未触发捕获", root_cause: "1. 副空滤纸芯堵塞；2. 主滤通过后副滤承担大量颗粒。", trouble_guide: "拆下副空滤目视检查，必要时直接更换。", recommended_action: "随车备件更换副空滤芯。", driver: "陈志远", beacon: "EDS-A-CR-N1 装车点", last_dispatch: "前往一号装车点接班", carga: "Vazio (空载回程中)", gps_coord: "39.835420 ; 109.974912", next_flow: "Chegada (即将到达装载点)" },
    { id: "ALM-20250105-023", code: "313", title: "发动机2机油压力低报警", desc: "副发动机机油主油道压力低于额定阈值", level: "critical", asset_id: "XE5600-001", asset_name: "XE5600", first_occurred: "2025-01-05 10:00", last_occurred: "2025-01-07 14:00", occurrence_count: 2, status: "converted", downtime: "yes", trend: [180,165,155,170], fault_code: "313", category_cn: "故障", desc_en: "Engine 2 Oil Pressure Low", event_type: "OEM 原始事件", operator: "86022193", accept_status: "accepted", source: "系统总线", final_value: "1.6 bar", event_type_id: "1655058494", area: "鄂尔多斯煤矿A区·一号采掘面", oem_protocol: "6 - SAE J1939 总线", data_source: "系统自动捕获", snapshot_status: "未触发捕获", root_cause: "1. 副发动机机油泵磨损；2. 黏度等级偏低；3. 主油道压力调节阀异常。", trouble_guide: "用外接压力表对比 ECU 数据。", recommended_action: "立即停机，避免拉缸。", driver: "刘建国", beacon: "EDS-A-N1-CV3 工作面", last_dispatch: "按一号采掘面计划继续作业", carga: "满载装车作业", gps_coord: "39.834251 ; 109.973618", next_flow: "待装(下一斗)" },
    { id: "ALM-20250104-024", code: "514", title: "急停开关(油散)", desc: "油散急停开关已触发", level: "critical", asset_id: "GR5505-001", asset_name: "GR5505", first_occurred: "2025-01-04 13:00", last_occurred: "2025-01-06 11:00", occurrence_count: 4, status: "converted", downtime: "yes", trend: [0.2,0.5,0.8,0.6], fault_code: "514", category_cn: "故障", desc_en: "E-Stop Switch (Oil Cooler)", event_type: "OEM 原始事件", operator: "81099842", accept_status: "accepted", source: "系统总线", final_value: "急停触发", event_type_id: "1616783466", area: "鄂尔多斯煤矿B区·主运输干线", oem_protocol: "5 - 车身 CAN 总线", data_source: "系统自动捕获", snapshot_status: "未触发捕获", root_cause: "油散区急停按钮被触发。", trouble_guide: "确认油散区域安全后复位急停按钮。", recommended_action: "核查触发记录并补充安全告知。", driver: "赵海涛", beacon: "EDS-B-RD-MAIN-K3+200", last_dispatch: "暂停作业·已锁车", carga: "道路平整作业", gps_coord: "39.819773 ; 109.961240", next_flow: "返回B区路面养护点" },
    { id: "ALM-20250104-025", code: "0003", title: "GPS电源切断", desc: "GPS 模块主电源被切断", level: "info", asset_id: "XE2000-001", asset_name: "XE2000", first_occurred: "2025-01-04 09:00", last_occurred: "2025-01-04 17:00", occurrence_count: 1, status: "ignored", downtime: "no", trend: [15,8,12], fault_code: "0003", category_cn: "故障", desc_en: "GPS Power Cut", event_type: "智能算法事件", operator: "81044754", accept_status: "accepted", source: "智能算法", final_value: "电源切断", event_type_id: "1643624949", area: "鄂尔多斯煤矿A区·二号采掘面", oem_protocol: "1 - GPS-CAN 总线", data_source: "终端上报", snapshot_status: "未触发捕获", root_cause: "1. GPS 模块电源保险丝熔断；2. 主线路接触不良。", trouble_guide: "检查 GPS 模块供电电压与保险丝。", recommended_action: "更换保险丝并紧固线束。", driver: "王福顺", beacon: "EDS-A-N2-CV1 工作面", last_dispatch: "维持当前作业循环", carga: "间歇性挖装", gps_coord: "39.832104 ; 109.969872", next_flow: "待装(下一斗)" },
    { id: "ALM-20250103-026", code: "324", title: "发动机2机油液位低报警", desc: "副发动机机油底壳液位低于下限刻度", level: "warning", asset_id: "LW1200KN-001", asset_name: "LW1200KN", first_occurred: "2025-01-03 10:00", last_occurred: "2025-01-05 15:00", occurrence_count: 2, status: "converted", downtime: "no", trend: [18,22,25,23], fault_code: "324", category_cn: "警告", desc_en: "Engine 2 Oil Level Low", event_type: "趋势异常事件", operator: "82015632", accept_status: "accepted", source: "系统总线", final_value: "液位偏低", event_type_id: "1619351365", area: "鄂尔多斯煤矿A区·破碎站", oem_protocol: "6 - SAE J1939 总线", data_source: "系统自动捕获", snapshot_status: "未触发捕获", root_cause: "副发动机机油液位低，原因同 323。", trouble_guide: "怠速静置 5 分钟后读取副机油位。", recommended_action: "通知配油车补加副机机油。", driver: "陈志远", beacon: "EDS-A-CR-N1 装车点", last_dispatch: "前往一号装车点接班", carga: "Vazio (空载回程中)", gps_coord: "39.835420 ; 109.974912", next_flow: "Chegada (即将到达装载点)" },
    { id: "ALM-20250102-027", code: "518", title: "急停开关(走道)", desc: "走道急停开关已触发", level: "critical", asset_id: "LW1000KN-001", asset_name: "LW1000KN", first_occurred: "2025-01-02 14:00", last_occurred: "2025-01-04 16:00", occurrence_count: 3, status: "converted", downtime: "yes", trend: [1,2,3,1,2], fault_code: "518", category_cn: "故障", desc_en: "E-Stop Switch (Walkway)", event_type: "OEM 原始事件", operator: "83056721", accept_status: "accepted", source: "系统总线", final_value: "急停触发", event_type_id: "1631933853", area: "鄂尔多斯煤矿C区·三号转运点", oem_protocol: "5 - 车身 CAN 总线", data_source: "系统自动捕获", snapshot_status: "未触发捕获", root_cause: "走道急停按钮被触发。", trouble_guide: "确认走道无人员后复位急停按钮。", recommended_action: "上报当班记录并核查触发原因。", driver: "孙家辉", beacon: "EDS-C-TR-N3 转运点", last_dispatch: "完成本斗后转运至破碎站", carga: "实时载重 9.4t", gps_coord: "39.812338 ; 109.954771", next_flow: "前往C区破碎站卸料" },
    { id: "ALM-20250101-028", code: "342", title: "右分动箱液位低报警", desc: "右分动箱齿轮油液位低于报警刻度", level: "warning", asset_id: "XE2000-001", asset_name: "XE2000", first_occurred: "2025-01-01 09:00", last_occurred: "2025-01-03 11:00", occurrence_count: 2, status: "converted", downtime: "no", trend: [0.3,0.6,0.9,0.7], fault_code: "342", category_cn: "警告", desc_en: "Right Transfer Box Level Low", event_type: "趋势异常事件", operator: "85067411", accept_status: "accepted", source: "系统总线", final_value: "液位偏低", event_type_id: "1624668495", area: "鄂尔多斯煤矿A区·二号采掘面", oem_protocol: "6 - SAE J1939 总线", data_source: "系统自动捕获", snapshot_status: "未触发捕获", root_cause: "1. 右分动箱齿轮油亏损；2. 密封圈渗漏。", trouble_guide: "拆下加油口螺塞测量液位。", recommended_action: "维保组检查右分动箱密封并补加齿轮油。", driver: "王福顺", beacon: "EDS-A-N2-CV1 工作面", last_dispatch: "维持当前作业循环", carga: "间歇性挖装", gps_coord: "39.832104 ; 109.969872", next_flow: "待装(下一斗)" },
    { id: "ALM-20250102-029", code: "0006", title: "GPS卡异常", desc: "GPS SD 卡读写异常", level: "info", asset_id: "GR5505-001", asset_name: "GR5505", first_occurred: "2025-01-02 02:00", last_occurred: "2025-01-02 02:35", occurrence_count: 1, status: "ignored", downtime: "no", trend: [1,0,0,1], fault_code: "0006", category_cn: "故障", desc_en: "GPS Card Error", event_type: "智能算法事件", operator: "86022193", accept_status: "accepted", source: "智能算法", final_value: "卡异常", event_type_id: "1639624135", area: "鄂尔多斯煤矿B区·主运输干线", oem_protocol: "1 - GPS-CAN 总线", data_source: "终端上报", snapshot_status: "未触发捕获", root_cause: "1. SD 卡接触不良；2. 卡槽进尘；3. 卡片自身损坏。", trouble_guide: "重新插拔 SD 卡并清洁卡槽。", recommended_action: "更换 SD 卡并恢复终端配置。", driver: "赵海涛", beacon: "EDS-B-RD-MAIN-K3+200", last_dispatch: "暂停作业·已锁车", carga: "道路平整作业", gps_coord: "39.819773 ; 109.961240", next_flow: "返回B区路面养护点" },
    { id: "ALM-20250101-030", code: "302", title: "燃油油位低报警", desc: "燃油液位低于油箱容量 15%，需立即补加", level: "info", asset_id: "XE5600-001", asset_name: "XE5600", first_occurred: "2025-01-01 13:00", last_occurred: "2025-01-02 15:00", occurrence_count: 2, status: "ignored", downtime: "no", trend: [38,45,52,48,42], fault_code: "302", category_cn: "警告", desc_en: "Fuel Level Low", event_type: "OEM 原始事件", operator: "81099842", accept_status: "accepted", source: "系统总线", final_value: "12.4 %", event_type_id: "1697587918", area: "鄂尔多斯煤矿A区·一号采掘面", oem_protocol: "6 - SAE J1939 总线", data_source: "系统自动捕获", snapshot_status: "未触发捕获", root_cause: "1. 油位长期亏液未及时补充；2. 油位传感器浮子卡滞；3. 长距离怠速空驶导致油耗超预期。", trouble_guide: "用直尺测量油标尺读数与传感器原始值是否吻合，差值超 5% 视为传感器异常。", recommended_action: "通知配油车在 30 分钟内到位补加。", driver: "刘建国", beacon: "EDS-A-N1-CV3 工作面", last_dispatch: "按一号采掘面计划继续作业", carga: "满载装车作业", gps_coord: "39.834251 ; 109.973618", next_flow: "待装(下一斗)" },
    { id: "ALM-20250111-031", code: "313", title: "发动机2机油压力低报警", desc: "副发动机机油主油道压力低于额定阈值", level: "critical", asset_id: "LW1000KN-001", asset_name: "LW1000KN", first_occurred: "2025-01-11 12:00", last_occurred: "2025-01-11 18:00", occurrence_count: 2, status: "active", downtime: "yes", trend: [19,24,27,25], fault_code: "313", category_cn: "故障", desc_en: "Engine 2 Oil Pressure Low", event_type: "OEM 原始事件", operator: "--", accept_status: "pending", source: "系统总线", final_value: "1.6 bar", event_type_id: "1699275892", area: "鄂尔多斯煤矿C区·三号转运点", oem_protocol: "6 - SAE J1939 总线", data_source: "系统自动捕获", snapshot_status: "已触发捕获", root_cause: "1. 副发动机机油泵磨损；2. 黏度等级偏低；3. 主油道压力调节阀异常。", trouble_guide: "用外接压力表对比 ECU 数据。", recommended_action: "立即停机，避免拉缸。", driver: "孙家辉", beacon: "EDS-C-TR-N3 转运点", last_dispatch: "完成本斗后转运至破碎站", carga: "实时载重 9.4t", gps_coord: "39.812338 ; 109.954771", next_flow: "前往C区破碎站卸料" },
    { id: "ALM-20250112-032", code: "304", title: "机油压力低报警", desc: "机油主油道压力低于额定阈值 0.5 bar", level: "critical", asset_id: "XE5600-001", asset_name: "XE5600", first_occurred: "2025-01-12 16:00", last_occurred: "2025-01-12 21:00", occurrence_count: 4, status: "active", downtime: "yes", trend: [0.9,0.5,0.3,0.2], fault_code: "304", category_cn: "故障", desc_en: "Engine Oil Pressure Low", event_type: "OEM 原始事件", operator: "--", accept_status: "pending", source: "系统总线", final_value: "1.8 bar", event_type_id: "1658965039", area: "鄂尔多斯煤矿A区·一号采掘面", oem_protocol: "6 - SAE J1939 总线", data_source: "系统自动捕获", snapshot_status: "已触发捕获", root_cause: "1. 机油机油泵磨损导致出口压力下降；2. 机油黏度等级不符；3. 主油道压力调节阀卡开。", trouble_guide: "用机械压力表对比 ECU 上传压力，差值超 0.5 bar 视为传感器漂移。", recommended_action: "立即停机，禁止继续运转避免拉缸。", driver: "刘建国", beacon: "EDS-A-N1-CV3 工作面", last_dispatch: "按一号采掘面计划继续作业", carga: "满载装车作业", gps_coord: "39.834251 ; 109.973618", next_flow: "待装(下一斗)" }
  ],

  /* ===== 事件工单 ===== */
  events: [
    { id: "EVT-20250112-001", alert_id: "ALM-20250112-006", title: "GR5505 发动机功率下降故障", desc: "现场反映 GR5505 平地机作业时明显动力不足，经诊断为高压油泵磨损导致。", level: "critical", asset_id: "GR5505-001", asset_name: "GR5505", status: "pending", priority: "high", created_at: "2025-01-12 08:30", updated_at: "2025-01-12 21:00", handler: "张伟", category: "发动机系统",
      steps: [
        { time: "2025-01-12 08:30", actor: "系统", action: "自动创建事件工单", note: "检测到 E501 告警持续触发" },
        { time: "2025-01-12 09:15", actor: "张伟", action: "现场诊断", note: "确认高压油泵磨损，需要更换" },
        { time: "2025-01-12 10:00", actor: "张伟", action: "提交维修申请", note: "已申请备件，预计 24h 内到货" },
        { time: "2025-01-12 21:00", actor: "张伟", action: "状态更新", note: "等待备件中，设备已停机" }
      ], handling_opinion: "" },
    { id: "EVT-20250112-002", alert_id: "ALM-20250112-012", title: "LW1000KN 制动气压异常", desc: "制动系统气压持续偏低，存在安全隐患，需立即处理。", level: "critical", asset_id: "LW1000KN-001", asset_name: "LW1000KN", status: "processing", priority: "high", created_at: "2025-01-12 20:30", updated_at: "2025-01-12 21:30", handler: "李强", category: "制动系统",
      steps: [
        { time: "2025-01-12 20:30", actor: "系统", action: "自动创建事件工单", note: "E702 告警触发" },
        { time: "2025-01-12 21:00", actor: "李强", action: "现场检查", note: "空压机工作正常，气路存在微漏" },
        { time: "2025-01-12 21:30", actor: "李强", action: "处理中", note: "正在查找气路泄漏点" }
      ], handling_opinion: "经检查为空压机出气管路接头松动，已安排紧固处理。" },
    { id: "EVT-20250112-003", alert_id: "ALM-20250112-003", title: "XE2000 液压系统压力异常", desc: "XE2000 挖掘机主泵压力持续偏低，作业效率下降明显。", level: "critical", asset_id: "XE2000-001", asset_name: "XE2000", status: "processing", priority: "high", created_at: "2025-01-12 10:00", updated_at: "2025-01-12 22:00", handler: "王磊", category: "液压系统",
      steps: [
        { time: "2025-01-12 10:00", actor: "系统", action: "自动创建事件工单", note: "E203 告警触发" },
        { time: "2025-01-12 11:30", actor: "王磊", action: "初步诊断", note: "怀疑主泵变量机构故障" },
        { time: "2025-01-12 15:00", actor: "王磊", action: "进一步检查", note: "变量电磁阀线路正常，泵体磨损需拆解检查" },
        { time: "2025-01-12 22:00", actor: "王磊", action: "处理中", note: "拆解主泵，发现柱塞磨损严重" }
      ], handling_opinion: "主泵柱塞磨损超限，需要更换主泵总成，备件已在调配中。" },
    { id: "EVT-20250111-004", alert_id: "ALM-20250111-007", title: "GR5505 刮刀控制器通信故障", desc: "CAN 总线通信中断，刮刀自动控制功能不可用。", level: "critical", asset_id: "GR5505-001", asset_name: "GR5505", status: "processing", priority: "high", created_at: "2025-01-11 14:30", updated_at: "2025-01-12 18:00", handler: "陈刚", category: "电控系统",
      steps: [
        { time: "2025-01-11 14:30", actor: "系统", action: "自动创建事件工单", note: "E502 告警触发" },
        { time: "2025-01-11 15:30", actor: "陈刚", action: "检查线路", note: "CAN 总线终端电阻正常" },
        { time: "2025-01-11 17:00", actor: "陈刚", action: "更换传感器", note: "更换刮刀角度传感器，故障依旧" },
        { time: "2025-01-12 18:00", actor: "陈刚", action: "处理中", note: "排查控制器本体，预计明早出结果" }
      ], handling_opinion: "传感器已更换未解决，怀疑控制器 CAN 端口损坏，需进一步排查。" },
    { id: "EVT-20250112-005", alert_id: "ALM-20250112-001", title: "XE5600 冷却液温度过高", desc: "XE5600 在持续高负荷作业后冷却液温度超出正常范围。", level: "critical", asset_id: "XE5600-001", asset_name: "XE5600", status: "pending", priority: "medium", created_at: "2025-01-12 19:00", updated_at: "2025-01-12 21:00", handler: "赵军", category: "冷却系统",
      steps: [
        { time: "2025-01-12 19:00", actor: "系统", action: "自动创建事件工单", note: "E101 告警触发" },
        { time: "2025-01-12 20:00", actor: "赵军", action: "初步判断", note: "冷却液液位正常，散热器可能堵塞" },
        { time: "2025-01-12 21:00", actor: "赵军", action: "状态更新", note: "等待停机冷却后检查散热器" }
      ], handling_opinion: "" },
    { id: "EVT-20250111-006", alert_id: "ALM-20250111-014", title: "LW1000KN 举升液压缸渗漏", desc: "左前举升液压缸出现微量渗油，需关注。", level: "warning", asset_id: "LW1000KN-001", asset_name: "LW1000KN", status: "processing", priority: "medium", created_at: "2025-01-11 14:00", updated_at: "2025-01-12 20:00", handler: "李强", category: "液压系统",
      steps: [
        { time: "2025-01-11 14:00", actor: "系统", action: "自动创建事件工单", note: "W704 告警触发" },
        { time: "2025-01-11 16:00", actor: "李强", action: "现场确认", note: "确认为缸头密封圈老化渗油" },
        { time: "2025-01-12 20:00", actor: "李强", action: "处理中", note: "已申请密封圈备件" }
      ], handling_opinion: "确认为缸头密封圈老化，已申请备件，预计本周内更换。" },
    { id: "EVT-20250111-007", alert_id: "ALM-20250111-019", title: "XE2000 冷却液液位低", desc: "XE2000 冷却液液位传感器告警，需及时补充。", level: "warning", asset_id: "XE2000-001", asset_name: "XE2000", status: "closed", priority: "low", created_at: "2025-01-11 08:30", updated_at: "2025-01-11 12:00", handler: "王磊", category: "冷却系统",
      steps: [
        { time: "2025-01-11 08:30", actor: "系统", action: "自动创建事件工单", note: "W205 告警触发" },
        { time: "2025-01-11 09:00", actor: "王磊", action: "补充冷却液", note: "检查无泄漏后补充冷却液至正常液位" },
        { time: "2025-01-11 12:00", actor: "王磊", action: "已闭环", note: "告警消除，设备恢复正常" }
      ], handling_opinion: "冷却系统无泄漏，补液后正常。已建议增加巡检频次。" },
    { id: "EVT-20250110-008", alert_id: "ALM-20250110-010", title: "LW1200KN 变矩器油温偏高", desc: "变矩器油温持续偏高，可能影响传动效率。", level: "warning", asset_id: "LW1200KN-001", asset_name: "LW1200KN", status: "closed", priority: "low", created_at: "2025-01-10 15:30", updated_at: "2025-01-10 20:00", handler: "周涛", category: "传动系统",
      steps: [
        { time: "2025-01-10 15:30", actor: "系统", action: "自动创建事件工单", note: "W601 告警触发" },
        { time: "2025-01-10 16:30", actor: "周涛", action: "检查冷却器", note: "变矩器油冷却器表面尘土过多" },
        { time: "2025-01-10 18:00", actor: "周涛", action: "清理完成", note: "清理冷却器后油温恢复正常" },
        { time: "2025-01-10 20:00", actor: "周涛", action: "已闭环", note: "告警消除" }
      ], handling_opinion: "变矩器油冷却器尘土堵塞，清理后正常。建议定期清理冷却器。" },
    { id: "EVT-20250109-009", alert_id: "ALM-20250109-004", title: "XE2000 回转轴承润滑不足", desc: "XE2000 回转轴承润滑脂压力持续偏低，存在磨损风险。", level: "warning", asset_id: "XE2000-001", asset_name: "XE2000", status: "processing", priority: "medium", created_at: "2025-01-09 11:00", updated_at: "2025-01-12 22:00", handler: "王磊", category: "润滑系统",
      steps: [
        { time: "2025-01-09 11:00", actor: "系统", action: "自动创建事件工单", note: "E204 告警触发" },
        { time: "2025-01-09 14:00", actor: "王磊", action: "润滑脂补充", note: "补充润滑脂后压力暂时恢复" },
        { time: "2025-01-10 09:00", actor: "王磊", action: "再次告警", note: "润滑脂消耗异常快，可能存在内泄" },
        { time: "2025-01-12 22:00", actor: "王磊", action: "处理中", note: "计划停机后拆检回转轴承密封" }
      ], handling_opinion: "润滑脂消耗异常，可能存在密封损坏导致的内泄，需拆检处理。" },
    { id: "EVT-20250112-010", alert_id: "ALM-20250112-013", title: "LW1000KN 传动轴温度过高", desc: "传动轴轴承温度持续超标，存在烧毁风险。", level: "critical", asset_id: "LW1000KN-001", asset_name: "LW1000KN", status: "pending", priority: "high", created_at: "2025-01-12 20:00", updated_at: "2025-01-12 21:00", handler: "李强", category: "传动系统",
      steps: [
        { time: "2025-01-12 20:00", actor: "系统", action: "自动创建事件工单", note: "E703 告警触发" },
        { time: "2025-01-12 21:00", actor: "李强", action: "初步检查", note: "设备已停机待检，传动轴轴承需重点关注" }
      ], handling_opinion: "" }
  ],

  /* ===== 油品分析 ===== */
  fluidAnalysis: [
    { id: "FLD-20260612-001", asset_id: "XE5600-001", asset_name: "XE5600", category: "挖掘机", area: "A区", service_meter: 4821, sample_date: "2026-06-12", lab: "徐工检测中心", engine_oil: { score: 88, iron: 12, water: 0.2, tbn: 8.5, viscosity_dev: 3.2 }, hydraulic_oil: { score: 92, water: 0.1, particle: 14 }, status: "normal", verdict: "各项指标正常，继续使用",
      totals: { critical: 0, normal: 5 },
      details: [
        { part: "动力引擎 (ENGINE)", code: "D100-53242-0312", sampled_at: "2026-06-12", spectrum: "normal", advice: "所有测试参数均落入标定绿色基准线区间。无需安排额外维护。" },
        { part: "液压主泵 (HYD-PUMP)", code: "D100-53242-0319", sampled_at: "2026-06-12", spectrum: "normal", advice: "颗粒度 14、含水 0.1%，处于优良区间。" },
        { part: "冷却散热器 (RADIATOR)", code: "D100-53242-0322", sampled_at: "2026-06-12", spectrum: "normal", advice: "冷却液 pH 与电导率正常，散热效能稳定。" },
        { part: "齿轮传动箱 (GEARBOX)", code: "D100-53242-0327", sampled_at: "2026-06-12", spectrum: "normal", advice: "金属磨损物含量低，齿面状态良好。" },
        { part: "差速主桥 (AXLE)", code: "D100-53242-0331", sampled_at: "2026-06-12", spectrum: "normal", advice: "润滑指标稳定，无异常磨损。" }
      ] },
    { id: "FLD-20260611-002", asset_id: "XE2000-001", asset_name: "XE2000", category: "挖掘机", area: "A区", service_meter: 7632, sample_date: "2026-06-11", lab: "徐工检测中心", engine_oil: { score: 65, iron: 28, water: 0.5, tbn: 4.2, viscosity_dev: 12.5 }, hydraulic_oil: { score: 70, water: 0.3, particle: 32 }, status: "warning", verdict: "铁含量偏高，建议近期更换机油",
      totals: { critical: 0, normal: 3, warning: 1 },
      details: [
        { part: "动力引擎 (ENGINE)", code: "D100-53241-0207", sampled_at: "2026-06-11", spectrum: "warning", advice: "机油铁含量 28ppm 偏高、TBN 4.2 接近报废阈值。建议 200 小时内更换机油及滤芯。" },
        { part: "液压主泵 (HYD-PUMP)", code: "D100-53241-0215", sampled_at: "2026-06-11", spectrum: "warning", advice: "颗粒度 32 接近 NAS9 上限，建议同步更换液压油滤芯。" },
        { part: "冷却散热器 (RADIATOR)", code: "D100-53241-0218", sampled_at: "2026-06-11", spectrum: "normal", advice: "冷却液参数正常。" },
        { part: "齿轮传动箱 (GEARBOX)", code: "D100-53241-0220", sampled_at: "2026-06-11", spectrum: "normal", advice: "无异常磨损物。" },
        { part: "差速主桥 (AXLE)", code: "D100-53241-0223", sampled_at: "2026-06-11", spectrum: "normal", advice: "润滑指标稳定。" }
      ] },
    { id: "FLD-20260610-003", asset_id: "GR5505-001", asset_name: "GR5505", category: "平地机", area: "B区", service_meter: 3198, sample_date: "2026-06-10", lab: "徐工检测中心", engine_oil: { score: 55, iron: 35, water: 0.8, tbn: 3.1, viscosity_dev: 18.2 }, hydraulic_oil: { score: 60, water: 0.5, particle: 48 }, status: "critical", verdict: "多项指标异常，必须采取行动",
      totals: { critical: 2, normal: 2, warning: 1 },
      details: [
        { part: "动力引擎 (ENGINE)", code: "D100-53240-0118", sampled_at: "2026-06-10", spectrum: "critical", advice: "检测到机油中钠/钾元素超标。判定冷却循环液微幅内漏，必须随车服务组就地消除软管渗漏。" },
        { part: "液压主泵 (HYD-PUMP)", code: "D100-53240-0124", sampled_at: "2026-06-10", spectrum: "critical", advice: "颗粒度 48 已超 NAS10 上限，必须立即更换液压油及全部滤芯，并冲洗系统。" },
        { part: "冷却散热器 (RADIATOR)", code: "D100-53240-0127", sampled_at: "2026-06-10", spectrum: "warning", advice: "电导率偏高，冷却液有轻度污染，建议本周内更换。" },
        { part: "齿轮传动箱 (GEARBOX)", code: "D100-53240-0131", sampled_at: "2026-06-10", spectrum: "normal", advice: "齿面磨损物在正常区间。" },
        { part: "差速主桥 (AXLE)", code: "D100-53240-0134", sampled_at: "2026-06-10", spectrum: "normal", advice: "润滑指标稳定。" }
      ] },
    { id: "FLD-20260609-004", asset_id: "LW1200KN-001", asset_name: "LW1200KN", category: "装载机", area: "A区", service_meter: 12450, sample_date: "2026-06-09", lab: "徐工检测中心", engine_oil: { score: 85, iron: 15, water: 0.3, tbn: 7.8, viscosity_dev: 5.1 }, hydraulic_oil: { score: 90, water: 0.1, particle: 18 }, status: "normal", verdict: "指标良好，可继续使用",
      totals: { critical: 0, normal: 5 },
      details: [
        { part: "动力引擎 (ENGINE)", code: "D100-53239-0506", sampled_at: "2026-06-09", spectrum: "normal", advice: "所有测试参数处于绿色基准区间。" },
        { part: "液压主泵 (HYD-PUMP)", code: "D100-53239-0511", sampled_at: "2026-06-09", spectrum: "normal", advice: "颗粒度 18、含水 0.1%，状态良好。" },
        { part: "冷却散热器 (RADIATOR)", code: "D100-53239-0514", sampled_at: "2026-06-09", spectrum: "normal", advice: "冷却液参数稳定。" },
        { part: "齿轮传动箱 (GEARBOX)", code: "D100-53239-0518", sampled_at: "2026-06-09", spectrum: "normal", advice: "齿面磨损物在正常区间。" },
        { part: "制动气路 (BRAKE-AIR)", code: "D100-53239-0521", sampled_at: "2026-06-09", spectrum: "normal", advice: "制动气压衰减率 ≤2%/h，符合标准。" }
      ] },
    { id: "FLD-20260608-005", asset_id: "LW1000KN-001", asset_name: "LW1000KN", category: "装载机", area: "C区", service_meter: 8920, sample_date: "2026-06-08", lab: "徐工检测中心", engine_oil: { score: 72, iron: 22, water: 0.4, tbn: 5.5, viscosity_dev: 8.3 }, hydraulic_oil: { score: 75, water: 0.3, particle: 28 }, status: "warning", verdict: "粘度变化较大，建议关注",
      totals: { critical: 0, normal: 3, warning: 2 },
      details: [
        { part: "动力引擎 (ENGINE)", code: "D100-53238-0402", sampled_at: "2026-06-08", spectrum: "warning", advice: "机油粘度偏离基准值 8.3%，临近预警线。建议下次保养同步采样复测。" },
        { part: "液压主泵 (HYD-PUMP)", code: "D100-53238-0406", sampled_at: "2026-06-08", spectrum: "warning", advice: "颗粒度 28 接近 NAS9 边缘，建议提前更换滤芯。" },
        { part: "冷却散热器 (RADIATOR)", code: "D100-53238-0410", sampled_at: "2026-06-08", spectrum: "normal", advice: "冷却液参数正常。" },
        { part: "齿轮传动箱 (GEARBOX)", code: "D100-53238-0413", sampled_at: "2026-06-08", spectrum: "normal", advice: "齿面磨损物无异常。" },
        { part: "制动气路 (BRAKE-AIR)", code: "D100-53238-0416", sampled_at: "2026-06-08", spectrum: "normal", advice: "气压衰减率符合标准。" }
      ] }
  ],

  /* ===== 点检结果（按设备聚合 / 4 色缺陷计数 / 可展开缺陷明细） ===== */
  inspections: [
    /* —— 1. XE5600-001 整体正常，少量轻度缺陷 —— */
    { id: "INS-20260618-001", asset_id: "XE5600-001", asset_name: "XE5600", model: "XE5600 大型矿用挖掘机",
      date: "2026-06-18", time: "12:34", inspector: "张三", overall: "normal",
      service_meter: 4821, service_meter_time: "2026-06-18; 12:34 AM",
      form_count: 1,
      gps: "内蒙古鄂尔多斯煤矿 A 区·一号采掘面",
      totals: { red: 2, yellow: 3, green: 68, grey: 8 },
      items: [
        { category: "机身外部与照明",         item_code: "INS-EXT01-LP",  severity: "GREEN",  tech_desc: "前后大灯、警示灯亮度均正常，开关响应灵敏。",                          guide: "维持现状，按 500h 周期巡检。" },
        { category: "电气与动力线束",         item_code: "INS-ELE02-WH",  severity: "GREEN",  tech_desc: "主线束与端子无松动、外护套无破损。",                                  guide: "无需处理。" },
        { category: "液压系统",               item_code: "INS-HYD03-OL",  severity: "GREEN",  tech_desc: "液压油液位、外观、温度均处正常区间。",                                guide: "按计划取样监测。" },
        { category: "回转机构",               item_code: "INS-SLW04-BR",  severity: "YELLOW", tech_desc: "回转轴承注脂处有少量旧脂渗出，未见异响。",                            guide: "下次班保清理并按 8h 周期补脂。" },
        { category: "铲斗与连杆",             item_code: "INS-BKT05-TH",  severity: "YELLOW", tech_desc: "铲齿磨损 38%，距更换阈值（50%）尚有余量。",                          guide: "纳入下次保养更换计划。" },
        { category: "履带行走机构",           item_code: "INS-TRK06-TS",  severity: "GREEN",  tech_desc: "履带张紧度正常，链节、托链轮无明显异常。",                            guide: "无需处理。" },
        { category: "冷却与散热系统",         item_code: "INS-CLG07-RD",  severity: "RED",    tech_desc: "散热水箱表面积尘较厚，影响散热风量约 15%。",                          guide: "立即停机使用压缩空气反向吹扫；持续高温须排查节温器。" },
        { category: "驾驶室与操控",           item_code: "INS-CAB08-AC",  severity: "YELLOW", tech_desc: "驾驶室空调制冷略弱，出风温度 16℃。",                                  guide: "检查制冷剂量，必要时补氟并清洗蒸发器。" },
        { category: "燃油与排放系统",         item_code: "INS-FUE09-DPF", severity: "RED",    tech_desc: "DPF 压差近上限值，再生提示已亮 2 个班次未完成。",                     guide: "联系厂家做强制再生，再生后复测压差。" },
        { category: "GPS 与远程管理终端",     item_code: "INS-GPS10-COM", severity: "GREEN",  tech_desc: "GPS 心跳正常、定位偏差 < 5m。",                                       guide: "维持现状。" }
      ] },

    /* —— 2. XE2000-001 警告，缺陷明显增多 —— */
    { id: "INS-20260618-002", asset_id: "XE2000-001", asset_name: "XE2000", model: "XE2000 中型矿用挖掘机",
      date: "2026-06-18", time: "11:08", inspector: "李四", overall: "warning",
      service_meter: 7632, service_meter_time: "2026-06-18; 11:08 AM",
      form_count: 1,
      gps: "内蒙古鄂尔多斯煤矿 A 区·二号剥离面",
      totals: { red: 8, yellow: 12, green: 45, grey: 15 },
      items: [
        { category: "履带行走机构",           item_code: "INS-TRK01-TS",  severity: "YELLOW", tech_desc: "左侧履带张紧度偏松，运行有轻微抖动。",                                guide: "调整张紧油缸至额定力矩，复测履带松紧。" },
        { category: "回转机构",               item_code: "INS-SLW02-BR",  severity: "RED",    tech_desc: "回转减速机壳体异响明显，工作温度较周边轴承高 12℃。",                  guide: "停机检查齿轮油是否乳化，必要时拆检小齿轮。" },
        { category: "液压系统",               item_code: "INS-HYD03-MP",  severity: "RED",    tech_desc: "主泵出口压力 28.6MPa，低于额定 32MPa 约 11%。",            guide: "按 KB-E203-001 流程排查变量机构与滤芯。" },
        { category: "电气与动力线束",         item_code: "INS-ELE04-WH",  severity: "YELLOW", tech_desc: "驾驶室底部线束护套破损约 8cm，线芯未外露。",                          guide: "清洁后用波纹管包覆并扎带固定。" },
        { category: "铲斗与连杆",             item_code: "INS-BKT05-PIN", severity: "YELLOW", tech_desc: "动臂销轴润滑脂偏少，伴随轻微干磨声。",                                guide: "立即注脂，检查注脂嘴是否堵塞。" },
        { category: "冷却与散热系统",         item_code: "INS-CLG06-FAN", severity: "GREEN",  tech_desc: "风扇叶片完好，转速正常。",                                            guide: "无需处理。" },
        { category: "燃油与排放系统",         item_code: "INS-FUE07-FLT", severity: "RED",    tech_desc: "燃油粗滤器压差报警，目视含水迹。",                                    guide: "排放沉淀水并更换滤芯，检查油箱呼吸器。" },
        { category: "驾驶室与操控",           item_code: "INS-CAB08-SW",  severity: "YELLOW", tech_desc: "右控制手柄按键回位略迟，无误动作。",                                  guide: "拆解清洁手柄按键，必要时更换微动开关。" },
        { category: "GPS 与远程管理终端",     item_code: "INS-GPS09-ANT", severity: "GREEN",  tech_desc: "GPS 信号正常，告警上报成功。",                                        guide: "无需处理。" },
        { category: "机身外部与照明",         item_code: "INS-EXT10-LP",  severity: "YELLOW", tech_desc: "右侧大灯支架轻微变形，灯光偏移约 5°。",                              guide: "校正支架并复核照射角。" }
      ] },

    /* —— 3. GR5505-001 严重，缺陷集中 —— */
    { id: "INS-20260618-003", asset_id: "GR5505-001", asset_name: "GR5505", model: "GR5505 矿用平地机",
      date: "2026-06-18", time: "10:22", inspector: "王五", overall: "critical",
      service_meter: 3198, service_meter_time: "2026-06-18; 10:22 AM",
      form_count: 1,
      gps: "内蒙古鄂尔多斯煤矿 B 区·主运输道",
      totals: { red: 19, yellow: 14, green: 32, grey: 10 },
      items: [
        { category: "刮刀与铲刃",             item_code: "INS-BLD01-EDG", severity: "RED",    tech_desc: "刮刀刃口磨损 72%，且左端崩缺约 6cm。",                                guide: "立即更换刃口总成，作业前必须复检。" },
        { category: "动力总成",               item_code: "INS-PWR02-EOP", severity: "RED",    tech_desc: "发动机机油压力低报警 (304)，机械表复测仅 0.18MPa。",                  guide: "按 KB-E101 类似流程；停机检查机油泵与限压阀。" },
        { category: "传动系统",               item_code: "INS-DRV03-TRC", severity: "RED",    tech_desc: "分动箱液位低开关报警 (341)，外部可见油渍。",                          guide: "查找渗漏点修复；补加齿轮油至刻线。" },
        { category: "GPS 与远程管理终端",     item_code: "INS-GPS04-LCK", severity: "RED",    tech_desc: "GPS 一级锁车告警 (0001) 已生效，平台显示授权过期。",                  guide: "联系运维后台续期授权后再启动。" },
        { category: "制动系统",               item_code: "INS-BRK05-AIR", severity: "YELLOW", tech_desc: "气压建立至 6.0bar 用时偏长 (≈3min30s)。",                            guide: "检查空压机滤清器、皮带、气路接头。" },
        { category: "底盘与车桥",             item_code: "INS-CHA06-AXL", severity: "YELLOW", tech_desc: "后桥油液色偏暗，有轻微金属反光。",                                    guide: "尽快取样化验，必要时换油并清洗。" },
        { category: "液压系统",               item_code: "INS-HYD07-CYL", severity: "RED",    tech_desc: "提升油缸活塞杆有 2 处明显划痕，伴轻微外漏。",                        guide: "拆检密封件，必要时镀铬修复或更换油缸。" },
        { category: "电气与动力线束",         item_code: "INS-ELE08-FUS", severity: "YELLOW", tech_desc: "保险盒内 5A 保险有更换痕迹但功能正常。",                              guide: "排查相关回路是否曾过载，记录追溯。" },
        { category: "驾驶室与操控",           item_code: "INS-CAB09-SEAT",severity: "GREEN",  tech_desc: "座椅减震、安全带、操控件均正常。",                                    guide: "无需处理。" },
        { category: "机身外部与照明",         item_code: "INS-EXT10-LP",  severity: "RED",    tech_desc: "驾驶室顶部警示频闪灯不亮，影响夜间作业安全。",                        guide: "立即更换灯泡或灯具总成。" }
      ] },

    /* —— 4. LW1200KN-001 待运行（ready），缺陷少 —— */
    { id: "INS-20260617-004", asset_id: "LW1200KN-001", asset_name: "LW1200KN", model: "LW1200KN 大型矿用装载机",
      date: "2026-06-17", time: "15:46", inspector: "赵六", overall: "normal",
      service_meter: 12450, service_meter_time: "2026-06-17; 03:46 PM",
      form_count: 1,
      gps: "内蒙古鄂尔多斯煤矿 A 区·待命停车场",
      totals: { red: 1, yellow: 2, green: 72, grey: 10 },
      items: [
        { category: "轮胎与轮辋",             item_code: "INS-TIR01-PRS", severity: "GREEN",  tech_desc: "四轮气压均处于规定区间，胎面磨损均匀。",                              guide: "无需处理。" },
        { category: "制动系统",               item_code: "INS-BRK02-PAD", severity: "GREEN",  tech_desc: "制动片厚度 13mm，仍处全寿命前段。",                                  guide: "下次定保再测。" },
        { category: "工作装置",               item_code: "INS-WRK03-BKT", severity: "YELLOW", tech_desc: "铲斗副刀板螺栓有 1 处力矩衰减约 8%。",                                guide: "复紧至额定力矩并做防松标记。" },
        { category: "驾驶室与操控",           item_code: "INS-CAB04-AC",  severity: "YELLOW", tech_desc: "空调制冷效果一般，最低出风 14℃。",                                  guide: "检测制冷剂压力，必要时清洗冷凝器。" },
        { category: "GPS 与远程管理终端",     item_code: "INS-GPS05-COM", severity: "GREEN",  tech_desc: "通讯心跳与告警链路均正常。",                                          guide: "无需处理。" },
        { category: "电气与动力线束",         item_code: "INS-ELE06-BAT", severity: "RED",    tech_desc: "蓄电池端电压 23.6V，低于额定 24V 阈值。",                            guide: "充电后复测；若仍低需检测电芯并更换。" },
        { category: "动力总成",               item_code: "INS-PWR07-COL", severity: "GREEN",  tech_desc: "冷却液量正常，外观无异常。",                                          guide: "无需处理。" },
        { category: "传动系统",               item_code: "INS-DRV08-TM",  severity: "GREEN",  tech_desc: "变速箱换挡平顺，无冲击。",                                            guide: "无需处理。" },
        { category: "燃油与排放系统",         item_code: "INS-FUE09-LV",  severity: "GREEN",  tech_desc: "油箱液位 78%，呼吸器通畅。",                                          guide: "无需处理。" },
        { category: "底盘与车桥",             item_code: "INS-CHA10-FRM", severity: "GREEN",  tech_desc: "前后车架未见裂纹和明显焊缝缺陷。",                                    guide: "无需处理。" }
      ] },

    /* —— 5. LW1000KN-001 维护中（warning），缺陷中等偏多 —— */
    { id: "INS-20260616-005", asset_id: "LW1000KN-001", asset_name: "LW1000KN", model: "LW1000KN 中型矿用装载机",
      date: "2026-06-16", time: "09:15", inspector: "孙七", overall: "warning",
      service_meter: 8920, service_meter_time: "2026-06-16; 09:15 AM",
      form_count: 1,
      gps: "内蒙古鄂尔多斯煤矿 C 区·维修工位",
      totals: { red: 6, yellow: 10, green: 50, grey: 12 },
      items: [
        { category: "轮胎与轮辋",             item_code: "INS-TIR01-PRS", severity: "YELLOW", tech_desc: "左后轮胎压偏低 (480kPa, 标定 540kPa)，胎面有钉印 1 处。",            guide: "补气并检查是否慢漏；扎钉处做内补处理。" },
        { category: "工作装置",               item_code: "INS-WRK02-CYL", severity: "RED",    tech_desc: "左前举升油缸活塞杆根部存在外漏，速度 1 滴/分。",                      guide: "停机更换油封，复测内泄。" },
        { category: "传动系统",               item_code: "INS-DRV03-DSF", severity: "RED",    tech_desc: "传动轴动平衡偏差，运行 30km/h 以上有低频振动。",                      guide: "拆下传动轴做动平衡校正，必要时更换十字轴。" },
        { category: "电气与动力线束",         item_code: "INS-ELE04-LMP", severity: "YELLOW", tech_desc: "右后转向灯偶发不亮，疑似线束接触不良。",                              guide: "检查灯尾线插头，清洁端子。" },
        { category: "制动系统",               item_code: "INS-BRK05-AIR", severity: "YELLOW", tech_desc: "气路某处轻微漏气，但建压时间未超时。",                                guide: "肥皂水排查接头并紧固。" },
        { category: "GPS 与远程管理终端",     item_code: "INS-GPS06-COM", severity: "RED",    tech_desc: "GPS 通讯异常告警 (0002)，过去 24h 心跳缺失 18%。",                   guide: "检查 SIM、天线和工位信号；必要时更换通信模组。" },
        { category: "驾驶室与操控",           item_code: "INS-CAB07-SEAT",severity: "GREEN",  tech_desc: "座椅减震正常，安全带固定可靠。",                                      guide: "无需处理。" },
        { category: "动力总成",               item_code: "INS-PWR08-OIL", severity: "YELLOW", tech_desc: "机油液位略低于上限，油色发暗。",                                      guide: "补油至上限；按 500h 计划做下次换油。" },
        { category: "冷却与散热系统",         item_code: "INS-CLG09-RD",  severity: "GREEN",  tech_desc: "散热水箱清洁，温度正常。",                                            guide: "无需处理。" },
        { category: "底盘与车桥",             item_code: "INS-CHA10-AXL", severity: "RED",    tech_desc: "后驱动桥差速器箱体下沿渗油明显。",                                    guide: "排查油封并清洁，渗漏严重需停机检修。" }
      ] }
  ],
  /* ============================================================
     MineCare 事件明细（导入自 MineCare / Time Tracking）
     —— 字段对齐用户给出的 31 列标准表头 ——
     ============================================================ */
  minecareEvents: [
    /* 1 */ { start_time:"2026-06-18 14:20", end_time:"2026-06-18 16:45",
              asset_id:"EXC-XE5600-001", asset_group:"挖掘机/XE5600",
              dispatch_code:"D-601", dispatch_desc:"故障停机-液压系统",
              repair_status:"维修完成-主泵芯总成更换", primary_key:"MC-20260618-001",
              parent_key:"-", location:"Carajás N4-East·一号采掘面",
              comment:"主泵噪音异常，拆解发现泵芯磨损超限。",
              work_order:"WO-2026061801", system:"液压系统", assembly:"主泵总成",
              part:"主泵芯", problem:"主泵噪音异常、流量下降",
              solution:"拆解更换主泵芯并重新调压",
              est_release_time:"2026-06-18 17:00", update_time:"2026-06-18 16:45",
              owner:"张工", status_code:90, status:"closed",
              record_type:"维修工单", stat_start:"2026-06-18 14:20",
              stat_end:"2026-06-18 16:45", duration_min:145,
              occur_id:"OC-001", validation:"VERIFIED", occur_count:1,
              day:18, month:6, year:2026 },

    /* 2 */ { start_time:"2026-06-18 09:10", end_time:"2026-06-18 10:35",
              asset_id:"EXC-XE2000-001", asset_group:"挖掘机/XE2000",
              dispatch_code:"D-301", dispatch_desc:"加油保养",
              repair_status:"完成", primary_key:"MC-20260618-002",
              parent_key:"-", location:"Carajás N4-North·加油区",
              comment:"按 500h 计划加油 600L。",
              work_order:"WO-2026061802", system:"动力系统", assembly:"燃油系统",
              part:"燃油泵", problem:"-", solution:"加注柴油 600L",
              est_release_time:"2026-06-18 10:30", update_time:"2026-06-18 10:35",
              owner:"李工", status_code:90, status:"closed",
              record_type:"日常作业", stat_start:"2026-06-18 09:10",
              stat_end:"2026-06-18 10:35", duration_min:85,
              occur_id:"OC-002", validation:"VERIFIED", occur_count:1,
              day:18, month:6, year:2026 },

    /* 3 */ { start_time:"2026-06-17 22:48", end_time:"2026-06-17 23:55",
              asset_id:"GR5505-001", asset_group:"平地机/GR5505",
              dispatch_code:"D-501", dispatch_desc:"班前检查",
              repair_status:"完成-发现冷却水箱积尘", primary_key:"MC-20260617-003",
              parent_key:"-", location:"Carajás N5-South·维护工棚",
              comment:"班前发现散热风量不足，已现场清理。",
              work_order:"WO-2026061703", system:"冷却系统", assembly:"散热模块",
              part:"水箱表面", problem:"积尘较厚、风量下降 15%",
              solution:"压缩空气反向吹扫散热器表面",
              est_release_time:"2026-06-18 00:00", update_time:"2026-06-17 23:55",
              owner:"王班长", status_code:90, status:"closed",
              record_type:"班前点检", stat_start:"2026-06-17 22:48",
              stat_end:"2026-06-17 23:55", duration_min:67,
              occur_id:"OC-003", validation:"VERIFIED", occur_count:1,
              day:17, month:6, year:2026 },

    /* 4 */ { start_time:"2026-06-17 15:02", end_time:"2026-06-17 19:30",
              asset_id:"LW1200KN-002", asset_group:"装载机/LW1200KN",
              dispatch_code:"D-602", dispatch_desc:"故障停机-发动机",
              repair_status:"进行中-等待备件", primary_key:"MC-20260617-004",
              parent_key:"MC-20260617-003", location:"Carajás N4-East·检修工位 B",
              comment:"DPF 强制再生失败，怀疑差压传感器异常。",
              work_order:"WO-2026061704", system:"动力系统", assembly:"后处理总成",
              part:"DPF 差压传感器", problem:"DPF 强制再生失败",
              solution:"待差压传感器到货后更换",
              est_release_time:"2026-06-19 14:00", update_time:"2026-06-19 09:12",
              owner:"赵工", status_code:30, status:"in_progress",
              record_type:"维修工单", stat_start:"2026-06-17 15:02",
              stat_end:"-", duration_min:268,
              occur_id:"OC-004", validation:"PENDING", occur_count:1,
              day:17, month:6, year:2026 },

    /* 5 */ { start_time:"2026-06-16 06:30", end_time:"2026-06-16 14:30",
              asset_id:"EXC-XE5600-002", asset_group:"挖掘机/XE5600",
              dispatch_code:"D-001", dispatch_desc:"正常生产",
              repair_status:"-", primary_key:"MC-20260616-005",
              parent_key:"-", location:"Carajás N4-East·一号采掘面",
              comment:"早班生产 8h 无异常。",
              work_order:"-", system:"-", assembly:"-", part:"-",
              problem:"-", solution:"-",
              est_release_time:"-", update_time:"2026-06-16 14:30",
              owner:"早班·胡操作", status_code:10, status:"closed",
              record_type:"生产作业", stat_start:"2026-06-16 06:30",
              stat_end:"2026-06-16 14:30", duration_min:480,
              occur_id:"OC-005", validation:"VERIFIED", occur_count:1,
              day:16, month:6, year:2026 },

    /* 6 */ { start_time:"2026-06-15 03:11", end_time:"2026-06-15 03:52",
              asset_id:"LW1000KN-001", asset_group:"装载机/LW1000KN",
              dispatch_code:"D-401", dispatch_desc:"等待-供料中断",
              repair_status:"-", primary_key:"MC-20260615-006",
              parent_key:"-", location:"Carajás N5-South·破碎站前",
              comment:"上游破碎站故障导致下料中断。",
              work_order:"-", system:"-", assembly:"-", part:"-",
              problem:"等待上游恢复", solution:"-",
              est_release_time:"2026-06-15 03:55", update_time:"2026-06-15 03:52",
              owner:"夜班·刘操作", status_code:10, status:"closed",
              record_type:"等待停机", stat_start:"2026-06-15 03:11",
              stat_end:"2026-06-15 03:52", duration_min:41,
              occur_id:"OC-006", validation:"VERIFIED", occur_count:1,
              day:15, month:6, year:2026 },

    /* 7 */ { start_time:"2026-06-12 10:24", end_time:"2026-06-12 12:05",
              asset_id:"GR5505-001", asset_group:"平地机/GR5505",
              dispatch_code:"D-201", dispatch_desc:"非计划停机-行走系统",
              repair_status:"维修完成-销轴更换", primary_key:"MC-20260612-007",
              parent_key:"-", location:"Carajás N4-North·二号运输道",
              comment:"行走履带销轴磨损过限，现场更换。",
              work_order:"WO-2026061207", system:"行走系统", assembly:"履带组",
              part:"销轴", problem:"履带销轴磨损过限、运行异响",
              solution:"现场更换销轴一组",
              est_release_time:"2026-06-12 12:00", update_time:"2026-06-12 12:05",
              owner:"周工", status_code:90, status:"closed",
              record_type:"维修工单", stat_start:"2026-06-12 10:24",
              stat_end:"2026-06-12 12:05", duration_min:101,
              occur_id:"OC-007", validation:"VERIFIED", occur_count:1,
              day:12, month:6, year:2026 },

    /* 8 */ { start_time:"2026-06-08 20:15", end_time:"2026-06-09 02:40",
              asset_id:"EXC-XE2000-001", asset_group:"挖掘机/XE2000",
              dispatch_code:"D-101", dispatch_desc:"计划维护-500h 保养",
              repair_status:"维修完成", primary_key:"MC-20260608-008",
              parent_key:"-", location:"Carajás N4-East·维护工棚",
              comment:"按 500h 周期完成机油、机滤、燃滤更换。",
              work_order:"WO-2026060808", system:"动力系统", assembly:"润滑系统",
              part:"机油/机滤/燃滤", problem:"周期保养",
              solution:"更换机油 22L、机滤 1、燃滤 2",
              est_release_time:"2026-06-09 03:00", update_time:"2026-06-09 02:40",
              owner:"夜班·吕工", status_code:90, status:"closed",
              record_type:"计划维护", stat_start:"2026-06-08 20:15",
              stat_end:"2026-06-09 02:40", duration_min:385,
              occur_id:"OC-008", validation:"VERIFIED", occur_count:1,
              day:8, month:6, year:2026 },

    /* 9 */ { start_time:"2026-06-05 11:20", end_time:"2026-06-05 11:48",
              asset_id:"EXC-XE5600-001", asset_group:"挖掘机/XE5600",
              dispatch_code:"D-301", dispatch_desc:"加油保养",
              repair_status:"完成", primary_key:"MC-20260605-009",
              parent_key:"-", location:"Carajás N4-East·加油区",
              comment:"白班加油 580L。",
              work_order:"-", system:"动力系统", assembly:"燃油系统",
              part:"燃油加注口", problem:"-", solution:"加注柴油 580L",
              est_release_time:"2026-06-05 11:50", update_time:"2026-06-05 11:48",
              owner:"白班·谢操作", status_code:90, status:"closed",
              record_type:"日常作业", stat_start:"2026-06-05 11:20",
              stat_end:"2026-06-05 11:48", duration_min:28,
              occur_id:"OC-009", validation:"VERIFIED", occur_count:1,
              day:5, month:6, year:2026 },

    /* 10 */ { start_time:"2026-05-30 08:00", end_time:"2026-05-30 08:00",
              asset_id:"LW1200KN-002", asset_group:"装载机/LW1200KN",
              dispatch_code:"D-901", dispatch_desc:"取消-误报",
              repair_status:"任务取消", primary_key:"MC-20260530-010",
              parent_key:"-", location:"Carajás N5-South·维护工棚",
              comment:"派工后核实为传感器误报。",
              work_order:"WO-2026053010", system:"电气系统", assembly:"传感器组",
              part:"水温传感器", problem:"误报",
              solution:"清洁端子，复位告警",
              est_release_time:"-", update_time:"2026-05-30 08:30",
              owner:"调度中心", status_code:99, status:"cancelled",
              record_type:"误报取消", stat_start:"2026-05-30 08:00",
              stat_end:"2026-05-30 08:00", duration_min:0,
              occur_id:"OC-010", validation:"VOIDED", occur_count:0,
              day:30, month:5, year:2026 },

    /* 11 */ { start_time:"2026-05-22 16:40", end_time:"2026-05-23 02:15",
              asset_id:"EXC-XE5600-002", asset_group:"挖掘机/XE5600",
              dispatch_code:"D-602", dispatch_desc:"故障停机-工作装置",
              repair_status:"维修完成-动臂油缸密封更换", primary_key:"MC-20260522-011",
              parent_key:"-", location:"Carajás N4-East·检修工位 A",
              comment:"动臂油缸渗油严重，更换密封件后回装。",
              work_order:"WO-2026052211", system:"液压系统", assembly:"工作装置",
              part:"动臂油缸密封圈", problem:"动臂油缸渗油",
              solution:"更换密封圈一套并重新加注液压油",
              est_release_time:"2026-05-23 02:30", update_time:"2026-05-23 02:15",
              owner:"赵工", status_code:90, status:"closed",
              record_type:"维修工单", stat_start:"2026-05-22 16:40",
              stat_end:"2026-05-23 02:15", duration_min:575,
              occur_id:"OC-011", validation:"VERIFIED", occur_count:1,
              day:22, month:5, year:2026 },

    /* 12 */ { start_time:"2026-05-18 09:00", end_time:"2026-05-18 09:00",
              asset_id:"EXC-XE2000-001", asset_group:"挖掘机/XE2000",
              dispatch_code:"D-701", dispatch_desc:"待派工",
              repair_status:"待安排", primary_key:"MC-20260518-012",
              parent_key:"-", location:"调度中心",
              comment:"待计划维护时间窗。",
              work_order:"-", system:"-", assembly:"-", part:"-",
              problem:"等待派工", solution:"-",
              est_release_time:"-", update_time:"2026-05-18 09:00",
              owner:"调度中心", status_code:0, status:"pending",
              record_type:"工单待派", stat_start:"2026-05-18 09:00",
              stat_end:"-", duration_min:0,
              occur_id:"OC-012", validation:"PENDING", occur_count:0,
              day:18, month:5, year:2026 }
  ],

  /* ============================================================
     设备运营累计指标（Carajás 周期性运营 KPI）
     —— 字段对齐用户给出的 31 列标准表头 ——
     ============================================================ */
  opsMetrics: [
    /* 1 */ { asset_id:"EXC-XE5600-001", asset_type:"挖掘机", model:"XE5600",
              period:"周", period_start:"2026-06-12", period_end:"2026-06-18",
              h_hef:168, h_hti:155, h_hao:148, h_hoe:142, h_hoi:6, h_htd:13,
              h_hmc:4.5, h_hac:1.5, h_mps:6, h_mpns:1, h_corr:6, h_prev:7,
              h_repair_total:13, h_work:142, h_calendar:168, output:32540,
              df_avail:92.3, ut_util:88.4, ro_run:84.5, prod_rate:229.2,
              n_corr:1, n_prev:2, n_repair_total:3,
              mtbf:145.6, mttr:6.0, mtbs:84.0, mtts:3.5,
              dispatch:"调度中心 A·张调度" },

    /* 2 */ { asset_id:"EXC-XE5600-002", asset_type:"挖掘机", model:"XE5600",
              period:"周", period_start:"2026-06-12", period_end:"2026-06-18",
              h_hef:168, h_hti:140, h_hao:132, h_hoe:125, h_hoi:7, h_htd:28,
              h_hmc:11, h_hac:3, h_mps:8, h_mpns:6, h_corr:14, h_prev:14,
              h_repair_total:28, h_work:125, h_calendar:168, output:28210,
              df_avail:83.3, ut_util:78.6, ro_run:74.4, prod_rate:225.7,
              n_corr:2, n_prev:1, n_repair_total:3,
              mtbf:62.5, mttr:14.0, mtbs:84.0, mtts:8.0,
              dispatch:"调度中心 A·张调度" },

    /* 3 */ { asset_id:"EXC-XE2000-001", asset_type:"挖掘机", model:"XE2000",
              period:"周", period_start:"2026-06-12", period_end:"2026-06-18",
              h_hef:168, h_hti:160, h_hao:152, h_hoe:148, h_hoi:4, h_htd:8,
              h_hmc:1, h_hac:0.5, h_mps:5, h_mpns:1.5, h_corr:1.5, h_prev:6.5,
              h_repair_total:8, h_work:148, h_calendar:168, output:18920,
              df_avail:95.2, ut_util:92.5, ro_run:88.1, prod_rate:127.8,
              n_corr:0, n_prev:1, n_repair_total:1,
              mtbf:160.0, mttr:0, mtbs:160.0, mtts:8.0,
              dispatch:"调度中心 B·李调度" },

    /* 4 */ { asset_id:"GR5505-001", asset_type:"平地机", model:"GR5505",
              period:"周", period_start:"2026-06-12", period_end:"2026-06-18",
              h_hef:168, h_hti:150, h_hao:142, h_hoe:136, h_hoi:6, h_htd:18,
              h_hmc:3, h_hac:1, h_mps:8, h_mpns:6, h_corr:4, h_prev:14,
              h_repair_total:18, h_work:136, h_calendar:168, output:0,
              df_avail:89.3, ut_util:85.4, ro_run:80.9, prod_rate:0,
              n_corr:1, n_prev:2, n_repair_total:3,
              mtbf:148.0, mttr:4.0, mtbs:74.5, mtts:9.0,
              dispatch:"调度中心 B·李调度" },

    /* 5 */ { asset_id:"LW1200KN-002", asset_type:"装载机", model:"LW1200KN",
              period:"周", period_start:"2026-06-12", period_end:"2026-06-18",
              h_hef:168, h_hti:128, h_hao:118, h_hoe:110, h_hoi:8, h_htd:40,
              h_hmc:18, h_hac:6, h_mps:8, h_mpns:8, h_corr:24, h_prev:16,
              h_repair_total:40, h_work:110, h_calendar:168, output:24180,
              df_avail:76.2, ut_util:70.2, ro_run:65.5, prod_rate:219.8,
              n_corr:3, n_prev:2, n_repair_total:5,
              mtbf:35.3, mttr:8.0, mtbs:33.6, mtts:8.0,
              dispatch:"调度中心 C·王调度" },

    /* 6 */ { asset_id:"LW1000KN-001", asset_type:"装载机", model:"LW1000KN",
              period:"周", period_start:"2026-06-12", period_end:"2026-06-18",
              h_hef:168, h_hti:158, h_hao:150, h_hoe:144, h_hoi:6, h_htd:10,
              h_hmc:1.5, h_hac:0.5, h_mps:6, h_mpns:2, h_corr:2, h_prev:8,
              h_repair_total:10, h_work:144, h_calendar:168, output:21540,
              df_avail:94.0, ut_util:90.5, ro_run:85.7, prod_rate:149.6,
              n_corr:1, n_prev:1, n_repair_total:2,
              mtbf:152.0, mttr:2.0, mtbs:76.0, mtts:5.0,
              dispatch:"调度中心 C·王调度" },

    /* 7 */ { asset_id:"EXC-XE5600-001", asset_type:"挖掘机", model:"XE5600",
              period:"周", period_start:"2026-06-05", period_end:"2026-06-11",
              h_hef:168, h_hti:158, h_hao:152, h_hoe:148, h_hoi:4, h_htd:10,
              h_hmc:2, h_hac:1, h_mps:5, h_mpns:2, h_corr:3, h_prev:7,
              h_repair_total:10, h_work:148, h_calendar:168, output:33860,
              df_avail:94.0, ut_util:90.5, ro_run:88.1, prod_rate:228.8,
              n_corr:0, n_prev:1, n_repair_total:1,
              mtbf:158.0, mttr:0, mtbs:158.0, mtts:10.0,
              dispatch:"调度中心 A·张调度" },

    /* 8 */ { asset_id:"EXC-XE5600-002", asset_type:"挖掘机", model:"XE5600",
              period:"周", period_start:"2026-06-05", period_end:"2026-06-11",
              h_hef:168, h_hti:148, h_hao:140, h_hoe:135, h_hoi:5, h_htd:20,
              h_hmc:7, h_hac:2, h_mps:7, h_mpns:4, h_corr:9, h_prev:11,
              h_repair_total:20, h_work:135, h_calendar:168, output:30340,
              df_avail:88.1, ut_util:83.3, ro_run:80.4, prod_rate:224.7,
              n_corr:1, n_prev:1, n_repair_total:2,
              mtbf:135.0, mttr:9.0, mtbs:67.5, mtts:5.5,
              dispatch:"调度中心 A·张调度" },

    /* 9 */ { asset_id:"GR5505-001", asset_type:"平地机", model:"GR5505",
              period:"周", period_start:"2026-06-05", period_end:"2026-06-11",
              h_hef:168, h_hti:152, h_hao:144, h_hoe:138, h_hoi:6, h_htd:16,
              h_hmc:2, h_hac:1, h_mps:9, h_mpns:4, h_corr:3, h_prev:13,
              h_repair_total:16, h_work:138, h_calendar:168, output:0,
              df_avail:90.5, ut_util:86.9, ro_run:82.1, prod_rate:0,
              n_corr:0, n_prev:2, n_repair_total:2,
              mtbf:152.0, mttr:0, mtbs:76.0, mtts:8.0,
              dispatch:"调度中心 B·李调度" },

    /* 10 */ { asset_id:"LW1200KN-002", asset_type:"装载机", model:"LW1200KN",
              period:"周", period_start:"2026-06-05", period_end:"2026-06-11",
              h_hef:168, h_hti:142, h_hao:135, h_hoe:128, h_hoi:7, h_htd:26,
              h_hmc:10, h_hac:3, h_mps:8, h_mpns:5, h_corr:13, h_prev:13,
              h_repair_total:26, h_work:128, h_calendar:168, output:25920,
              df_avail:84.5, ut_util:80.4, ro_run:76.2, prod_rate:202.5,
              n_corr:2, n_prev:1, n_repair_total:3,
              mtbf:64.0, mttr:6.5, mtbs:47.3, mtts:6.5,
              dispatch:"调度中心 C·王调度" },

    /* 11 */ { asset_id:"EXC-XE5600-001", asset_type:"挖掘机", model:"XE5600",
              period:"月", period_start:"2026-05-01", period_end:"2026-05-31",
              h_hef:744, h_hti:692, h_hao:660, h_hoe:632, h_hoi:28, h_htd:52,
              h_hmc:18, h_hac:6, h_mps:18, h_mpns:10, h_corr:24, h_prev:28,
              h_repair_total:52, h_work:632, h_calendar:744, output:142680,
              df_avail:93.0, ut_util:88.7, ro_run:84.9, prod_rate:225.8,
              n_corr:3, n_prev:4, n_repair_total:7,
              mtbf:210.7, mttr:8.0, mtbs:106.3, mtts:7.0,
              dispatch:"调度中心 A·张调度" },

    /* 12 */ { asset_id:"LW1200KN-002", asset_type:"装载机", model:"LW1200KN",
              period:"月", period_start:"2026-05-01", period_end:"2026-05-31",
              h_hef:744, h_hti:580, h_hao:548, h_hoe:512, h_hoi:36, h_htd:164,
              h_hmc:64, h_hac:18, h_mps:42, h_mpns:40, h_corr:82, h_prev:82,
              h_repair_total:164, h_work:512, h_calendar:744, output:108720,
              df_avail:78.0, ut_util:73.7, ro_run:68.8, prod_rate:212.3,
              n_corr:9, n_prev:5, n_repair_total:14,
              mtbf:56.9, mttr:9.1, mtbs:36.6, mtts:8.2,
              dispatch:"调度中心 C·王调度" }
  ],

  /* ============================================================
     工单下发记录（v1.9.17 新增；与 alh_modal.js 工单生成面板格式一致）
     ============================================================ */
  workOrders: [
    /* 1 重大风险 - YEM 紧急维修 */
    { wo_no:"202606181201", type:"YEM", alert_id:"ALM-20250112-001", alert_code:"301",
      asset_id:"XE5600-001", asset_name:"XE5600", repair:"Corretiva", prio:"Alta", turma:"A",
      plan_date:"2026-06-18", work_center:"PMCMB1", ctrl_center:"PMCMB1EM", pts:"Sim",
      subject:"发动机水温高报警 - XE5600-001", trouble_subj:"Engine Coolant Temperature High",
      desc:"主水温突破上限 107°C，怠速 5min 后仍未回落，怀疑节温器卡滞或散热水箱堵塞。",
      recom:"反吹散热水箱 + 检查节温器开启温度，必要时停机维修。",
      sap_no:"SAP-20260618-1042", dispatch_time:"2026-06-18 12:01",
      dispatch_status:"dispatched", validate_status:"passed", creator:"Emma · 矿山调度" },

    /* 2 重大风险 - YEM */
    { wo_no:"202606171830", type:"YEM", alert_id:"ALM-20250112-003", alert_code:"0001",
      asset_id:"XE2000-001", asset_name:"XE2000", repair:"Corretiva", prio:"Alta", turma:"B",
      plan_date:"2026-06-17", work_center:"PMCMB1", ctrl_center:"PMCMB1EM", pts:"Sim",
      subject:"GPS一级锁车 - XE2000-001", trouble_subj:"GPS Lock Level 1",
      desc:"车辆进入 GPS 一级锁车区域已停机 4h，需调度中心审批解锁后再恢复作业。",
      recom:"联系调度中心审批解锁，禁止强制移动设备。",
      sap_no:"SAP-20260617-2185", dispatch_time:"2026-06-17 18:30",
      dispatch_status:"dispatched", validate_status:"passed", creator:"Emma · 矿山调度" },

    /* 3 中等风险 - YCO 纠正性 */
    { wo_no:"202606160942", type:"YCO", alert_id:"ALM-20250109-004", alert_code:"341",
      asset_id:"XE2000-001", asset_name:"XE2000", repair:"Corretiva", prio:"Média", turma:"A",
      plan_date:"2026-06-18", work_center:"PMCMB1", ctrl_center:"PMCMB1EM", pts:"Sim",
      subject:"左分动箱液位低报警 - XE2000-001", trouble_subj:"Left Transfer Box Level Low",
      desc:"左分动箱齿轮油液位连续 3 个班次低于刻度线，伴随轻微渗漏。",
      recom:"下次停机窗口检查左分动箱密封并补加齿轮油至上限。",
      sap_no:"SAP-20260616-3027", dispatch_time:"2026-06-16 09:42",
      dispatch_status:"dispatched", validate_status:"passed", creator:"Emma · 矿山调度" },

    /* 4 重大风险 - YEM */
    { wo_no:"202606152105", type:"YEM", alert_id:"ALM-20250112-006", alert_code:"0005",
      asset_id:"GR5505-001", asset_name:"GR5505", repair:"Corretiva", prio:"Alta", turma:"C",
      plan_date:"2026-06-15", work_center:"PMCMB1", ctrl_center:"PMCMB1EM", pts:"Sim",
      subject:"GPS二级锁车 - GR5505-001", trouble_subj:"GPS Lock Level 2",
      desc:"重大违章触发后台二级锁车，整车已停机超 8h。",
      recom:"联系调度安全员现场审批解锁并安排重新培训。",
      sap_no:"SAP-20260615-4881", dispatch_time:"2026-06-15 21:05",
      dispatch_status:"dispatched", validate_status:"passed", creator:"Emma · 矿山调度" },

    /* 5 重大风险 - YEM */
    { wo_no:"202606141430", type:"YEM", alert_id:"ALM-20250111-007", alert_code:"503",
      asset_id:"GR5505-001", asset_name:"GR5505", repair:"Corretiva", prio:"Alta", turma:"D",
      plan_date:"2026-06-14", work_center:"PMCMB1", ctrl_center:"PMCMB1EM", pts:"Sim",
      subject:"急停开关(驾驶室) - GR5505-001", trouble_subj:"E-Stop Switch (Cab)",
      desc:"驾驶室急停按钮触发，原因待核查（疑似误碰或紧急避让）。",
      recom:"现场核查无人员紧急情况后旋拧复位急停按钮，记录台账。",
      sap_no:"SAP-20260614-5612", dispatch_time:"2026-06-14 14:30",
      dispatch_status:"dispatched", validate_status:"passed", creator:"Emma · 矿山调度" },

    /* 6 中等风险 - YCO */
    { wo_no:"202606131115", type:"YCO", alert_id:"ALM-20250110-008", alert_code:"323",
      asset_id:"GR5505-001", asset_name:"GR5505", repair:"Corretiva", prio:"Média", turma:"A",
      plan_date:"2026-06-15", work_center:"PMCMB1", ctrl_center:"PMCMB1EM", pts:"Sim",
      subject:"发动机机油液位低报警 - GR5505-001", trouble_subj:"Engine Oil Level Low",
      desc:"机油底壳液位低于下限刻度，怠速静置后传感器读数仍偏低。",
      recom:"通知配油车补加机油至上限，并复测下个班次油位。",
      sap_no:"SAP-20260613-6204", dispatch_time:"2026-06-13 11:15",
      dispatch_status:"dispatched", validate_status:"passed", creator:"Emma · 矿山调度" },

    /* 7 重大风险 - YEM */
    { wo_no:"202606121040", type:"YEM", alert_id:"ALM-20250110-018", alert_code:"304",
      asset_id:"LW1200KN-001", asset_name:"LW1200KN", repair:"Corretiva", prio:"Alta", turma:"B",
      plan_date:"2026-06-12", work_center:"PMCMB1", ctrl_center:"PMCMB1EM", pts:"Sim",
      subject:"机油压力低报警 - LW1200KN-001", trouble_subj:"Engine Oil Pressure Low",
      desc:"机油主油道压力 1.8 bar 低于额定阈值，存在拉缸风险。",
      recom:"立即停机禁止继续运转，检查机油泵及主油道压力调节阀。",
      sap_no:"SAP-20260612-7819", dispatch_time:"2026-06-12 10:40",
      dispatch_status:"dispatched", validate_status:"passed", creator:"Emma · 矿山调度" },

    /* 8 中等风险 - YCO */
    { wo_no:"202606101633", type:"YCO", alert_id:"ALM-20250110-010", alert_code:"501",
      asset_id:"LW1200KN-001", asset_name:"LW1200KN", repair:"Corretiva", prio:"Média", turma:"C",
      plan_date:"2026-06-11", work_center:"PMCMB1", ctrl_center:"PMCMB1EM", pts:"Sim",
      subject:"电瓶充电异常报警 - LW1200KN-001", trouble_subj:"Battery Charging Abnormal",
      desc:"蓄电池充电电压偏低 13.2V，怀疑充电机调压器或线束问题。",
      recom:"维保组带万用表上车排查充电系统，必要时更换调压器。",
      sap_no:"SAP-20260610-8423", dispatch_time:"2026-06-10 16:33",
      dispatch_status:"dispatched", validate_status:"passed", creator:"Emma · 矿山调度" },

    /* 9 重大风险 - YEM */
    { wo_no:"202606091622", type:"YEM", alert_id:"ALM-20250112-012", alert_code:"517",
      asset_id:"LW1000KN-001", asset_name:"LW1000KN", repair:"Corretiva", prio:"Alta", turma:"A",
      plan_date:"2026-06-09", work_center:"PMCMB1", ctrl_center:"PMCMB1EM", pts:"Sim",
      subject:"急停开关(动力仓) - LW1000KN-001", trouble_subj:"E-Stop Switch (Power Bay)",
      desc:"动力仓急停按钮触发，整机已停机锁定。",
      recom:"现场核查动力仓安全后复位急停按钮，记录触发原因。",
      sap_no:"SAP-20260609-9176", dispatch_time:"2026-06-09 16:22",
      dispatch_status:"dispatched", validate_status:"passed", creator:"Emma · 矿山调度" },

    /* 10 重大风险 - YEM */
    { wo_no:"202606080910", type:"YEM", alert_id:"ALM-20250111-013", alert_code:"312",
      asset_id:"LW1000KN-001", asset_name:"LW1000KN", repair:"Corretiva", prio:"Alta", turma:"B",
      plan_date:"2026-06-08", work_center:"PMCMB1", ctrl_center:"PMCMB1EM", pts:"Sim",
      subject:"发动机2水温高报警 - LW1000KN-001", trouble_subj:"Engine 2 Coolant Temperature High",
      desc:"副发动机水温 108°C 超阈值，停机散热后仍偏高。",
      recom:"维保组检查副机散热水箱清洁度与节温器开启温度。",
      sap_no:"SAP-20260608-1037", dispatch_time:"2026-06-08 09:10",
      dispatch_status:"dispatched", validate_status:"passed", creator:"Emma · 矿山调度" },

    /* 11 维修通知 - Nota */
    { wo_no:"202606051420", type:"Nota", alert_id:"ALM-20250109-014", alert_code:"341",
      asset_id:"LW1000KN-001", asset_name:"LW1000KN", repair:"Preventiva", prio:"Baixa", turma:"D",
      plan_date:"2026-06-12", work_center:"PMCMB1", ctrl_center:"PMCMB1EM", pts:"Não",
      subject:"左分动箱液位巡检通知 - LW1000KN-001", trouble_subj:"Left Transfer Box Level Low",
      desc:"6 个班次累计触发液位低，建议系统记录维修需求由 SAP 侧规划 OM。",
      recom:"安排进入下个 PM 计划窗口，统一处理分动箱密封与油位补加。",
      sap_no:"SAP-20260605-2461", dispatch_time:"2026-06-05 14:20",
      dispatch_status:"dispatched", validate_status:"passed", creator:"Emma · 矿山调度" },

    /* 12 中等风险 - YCO */
    { wo_no:"202606031145", type:"YCO", alert_id:"ALM-20250111-016", alert_code:"323",
      asset_id:"XE5600-001", asset_name:"XE5600", repair:"Corretiva", prio:"Média", turma:"A",
      plan_date:"2026-06-04", work_center:"PMCMB1", ctrl_center:"PMCMB1EM", pts:"Sim",
      subject:"发动机机油液位低报警 - XE5600-001", trouble_subj:"Engine Oil Level Low",
      desc:"机油底壳液位连续低位，疑似底壳渗漏或传感器漂移。",
      recom:"配油车补加并排查油底密封，3 个班次后复测。",
      sap_no:"SAP-20260603-3590", dispatch_time:"2026-06-03 11:45",
      dispatch_status:"dispatched", validate_status:"passed", creator:"Emma · 矿山调度" }
  ],


  /* ===== 知识库 =====
  knowledgeBase: {
    "E101": [
      { id: "KB-E101-001", title: "发动机冷却液温度过高处理步骤", alarm_code: "E101", type: "处理步骤", equipment: "通用",
        steps: ["立即降低负载或停机", "检查冷却液液位，补充至标准线", "检查散热水箱是否堵塞，用压缩空气反向吹扫", "检查风扇皮带张紧度及工作情况", "检查节温器是否卡滞", "若温度持续不降，检查水泵叶轮", "清理散热器表面杂物后重新运行观测"] },
      { id: "KB-E101-002", title: "冷却系统维护规范", alarm_code: "E101", type: "维修步骤", equipment: "通用",
        steps: ["建议每 2000 小时更换冷却液", "每 500 小时检查散热水箱清洁度", "每 1000 小时检查节温器工作状态", "使用徐工指定冷却液（型号：CF-4 15W-40）"] }
    ],
    "E203": [
      { id: "KB-E203-001", title: "液压系统压力异常诊断流程", alarm_code: "E203", type: "处理步骤", equipment: "挖掘机",
        steps: ["检查液压油箱液位是否正常", "测量主泵出口压力，对比额定值", "检查变量机构电磁阀供电及工作情况", "听泵体是否有异常噪音", "若压力低于额定值 15% 以上，建议停机拆检", "检查液压油滤芯是否堵塞", "记录相关参数数据提交给液压工程师"] },
      { id: "KB-E203-002", title: "主泵维护标准作业", alarm_code: "E203", type: "维修步骤", equipment: "XE系列",
        steps: ["主泵检修周期：每 8000 小时", "变量机构清洗周期：每 4000 小时", "更换液压油及滤芯周期：每 2000 小时", "主泵压力调整值：32MPa（额定）"] }
    ],
    "E501": [
      { id: "KB-E501-001", title: "发动机功率下降故障排查", alarm_code: "E501", type: "处理步骤", equipment: "平地机",
        steps: ["连接诊断仪读取发动机数据流", "检查燃油压力（低压 2.5-6bar，高压 300-1600bar）", "检查进气系统有无堵塞", "逐一断缸测试各缸工作情况", "检查高压油泵供油量", "确认 EGR 阀是否卡滞", "如确认高压油泵问题，需更换总成"] },
      { id: "KB-E501-002", title: "高压油泵更换作业指导", alarm_code: "E501", type: "维修步骤", equipment: "GR系列",
        steps: ["泄压后断电，标记油管位置", "拆卸高压油泵进油管和回油管", "拆卸泵体固定螺栓，取下旧泵", "安装新泵，调整喷油正时", "排气后启动发动机，观测压力", "路试后确认无异响和数据异常"] }
    ],
    "E702": [
      { id: "KB-E702-001", title: "制动系统气压异常处理", alarm_code: "E702", type: "处理步骤", equipment: "装载机",
        steps: ["检查空压机工作状态和皮带", "检查气路各接头是否漏气（肥皂水检测）", "检查干燥器工作状态", "检查制动气压传感器信号", "若气压持续低，检查空压机排气阀片", "安全提示：气压低于 4bar 时禁止移动设备"] },
      { id: "KB-E702-002", title: "制动系统日常检查规范", alarm_code: "E702", type: "维修步骤", equipment: "LW系列",
        steps: ["每日启动前检查气压表读数（应 ≥ 5.5bar）", "每周检查制动气路接头是否松动", "每 500 小时更换干燥器滤芯", "每 1000 小时检查空压机气阀"] }
    ],
    "E703": [
      { id: "KB-E703-001", title: "传动轴温度过高应急处理", alarm_code: "E703", type: "处理步骤", equipment: "装载机",
        steps: ["立即停止作业，使传动轴怠速运转散热", "检查传动轴护套是否破裂导致润滑脂流失", "用手触摸轴承座感受温度分布", "检查传动轴平衡片是否脱落", "若轴承损坏异响，立即更换传动轴总成", "禁止继续运转导致烧毁"] }
    ]
  },

  /* ===== 统计摘要 ===== */
  stats: {
    total_assets: 5,
    online_count: 5,
    total_alerts: 32,
    active_alerts: 13,
    pending_events: 4,
    processing_events: 4,
    closed_events: 2,
    critical_count: 8,
    warning_count: 17,
    info_count: 7,
    resolution_rate: 59.4,
    online_rate: 100,
    avg_health: 71.8
  },

  /* ===== 故障码主数据（faultCatalog）—— 注册告警与等级维护 ===== */
  faultCatalog: [
    { code:"301", name:"发动机水温高报警", name_en:"Engine Coolant Temperature High", level:3, category:"故障", description:"发动机冷却液温度超过设定阈值，继续重载运行可能导致功率降额、缸垫损坏或发动机保护停机。", root_cause:"冷却液不足或泄漏；散热器/水散堵塞；风扇、皮带或水泵故障；节温器异常；长时间高负荷或环境温度过高；温度传感器误报。", trouble_guide:"1) 降载怠速观察温度趋势；2) 检查冷却液位、泄漏和水箱盖；3) 清理散热器并检查风扇转速/皮带；4) 对比仪表温度与诊断数据，必要时测量传感器。", recommended_action:"按三级/严重告警处理：优先降载或停机保护，完成现场确认后再恢复作业。温度继续上升时立即停机冷却；补液、清洁散热器或修复冷却系统，确认无泄漏后恢复作业。", applicable_models:["XE5600", "XE2000", "GR5505", "LW1200KN", "LW1000KN"], status:"active", updated_at:"2025-12-15 09:30", updated_by:"运维管理员" },
    { code:"302", name:"燃油油位低报警", name_en:"Fuel Level Low", level:1, category:"警告", description:"燃油液位低于报警阈值，可能造成发动机吸空、熄火或生产中断。", root_cause:"燃油实际不足；油位传感器/开关卡滞或漂移；油箱线束接触不良；油箱吸油管、通气或回油异常；燃油泄漏。", trouble_guide:"1) 现场核实油箱液位与燃油消耗；2) 检查油位传感器/开关连接和输出；3) 检查燃油管路泄漏、堵塞和通气；4) 加油后确认告警是否消除。", recommended_action:"按一级告警处理：现场确认并纳入班次点检/计划检修跟踪。及时补充合格燃油并排查泄漏；若液位正常仍报警，检修或更换油位传感器/开关。", applicable_models:["XE5600", "XE2000", "GR5505", "LW1200KN", "LW1000KN"], status:"active", updated_at:"2025-12-15 09:30", updated_by:"运维管理员" },
    { code:"304", name:"机油压力低报警", name_en:"Engine Oil Pressure Low", level:3, category:"故障", description:"发动机润滑油压力低于安全阈值，存在轴瓦、曲轴和增压器润滑不足风险。", root_cause:"机油不足或粘度不合适；机油滤清器堵塞；机油泵/调压阀异常；油路泄漏；发动机磨损导致间隙过大；压力传感器或线路故障。", trouble_guide:"1) 立即降低转速并核实机油液位；2) 检查外部泄漏和滤清器状态；3) 用机械压力表复测实际油压；4) 对比传感器信号和线束状态。", recommended_action:"按三级/严重告警处理：优先降载或停机保护，完成现场确认后再恢复作业。油压确认偏低时停机处理，补油/换滤芯/检修润滑系统；严禁带低油压继续重载作业。", applicable_models:["XE5600", "XE2000", "GR5505", "LW1200KN", "LW1000KN"], status:"active", updated_at:"2025-12-15 09:30", updated_by:"运维管理员" },
    { code:"305", name:"空滤堵塞报警", name_en:"Air Filter Clogged", level:1, category:"警告", description:"发动机主空滤阻力过高或堵塞，进气受限可能导致冒黑烟、功率下降和燃油消耗升高。", root_cause:"滤芯积尘堵塞；进气管路塌陷或异物堵塞；预滤器积灰；压差开关/传感器故障；矿区粉尘工况超出保养周期。", trouble_guide:"1) 查看空滤堵塞指示和进气压差；2) 检查滤芯、预滤器和进气管路；3) 清理空滤壳体积尘；4) 更换滤芯后确认报警消除。", recommended_action:"按一级告警处理：现场确认并纳入班次点检/计划检修跟踪。按保养规范清洁或更换空滤，禁止用破损滤芯继续运行；粉尘重工况下缩短检查周期。", applicable_models:["XE5600", "XE2000", "GR5505", "LW1200KN", "LW1000KN"], status:"active", updated_at:"2025-12-15 09:30", updated_by:"运维管理员" },
    { code:"306", name:"空滤2堵塞报警", name_en:"Air Filter 2 Clogged", level:1, category:"警告", description:"发动机二级/副空滤阻力过高或堵塞，进气受限可能导致冒黑烟、功率下降和燃油消耗升高。", root_cause:"滤芯积尘堵塞；进气管路塌陷或异物堵塞；预滤器积灰；压差开关/传感器故障；矿区粉尘工况超出保养周期。", trouble_guide:"1) 查看空滤堵塞指示和进气压差；2) 检查滤芯、预滤器和进气管路；3) 清理空滤壳体积尘；4) 更换滤芯后确认报警消除。", recommended_action:"按一级告警处理：现场确认并纳入班次点检/计划检修跟踪。按保养规范清洁或更换空滤，禁止用破损滤芯继续运行；粉尘重工况下缩短检查周期。", applicable_models:["XE5600", "XE2000", "GR5505", "LW1200KN", "LW1000KN"], status:"active", updated_at:"2025-12-15 09:30", updated_by:"运维管理员" },
    { code:"312", name:"发动机2水温高报警", name_en:"Engine 2 Coolant Temperature High", level:3, category:"故障", description:"发动机2冷却液温度超过设定阈值，继续重载运行可能导致功率降额、缸垫损坏或发动机保护停机。", root_cause:"冷却液不足或泄漏；散热器/水散堵塞；风扇、皮带或水泵故障；节温器异常；长时间高负荷或环境温度过高；温度传感器误报。", trouble_guide:"1) 降载怠速观察温度趋势；2) 检查冷却液位、泄漏和水箱盖；3) 清理散热器并检查风扇转速/皮带；4) 对比仪表温度与诊断数据，必要时测量传感器。", recommended_action:"按三级/严重告警处理：优先降载或停机保护，完成现场确认后再恢复作业。温度继续上升时立即停机冷却；补液、清洁散热器或修复冷却系统，确认无泄漏后恢复作业。", applicable_models:["XE5600", "XE2000", "GR5505", "LW1200KN", "LW1000KN"], status:"active", updated_at:"2025-12-15 09:30", updated_by:"运维管理员" },
    { code:"313", name:"发动机2机油压力低报警", name_en:"Engine 2 Oil Pressure Low", level:3, category:"故障", description:"发动机2润滑油压力低于安全阈值，存在轴瓦、曲轴和增压器润滑不足风险。", root_cause:"机油不足或粘度不合适；机油滤清器堵塞；机油泵/调压阀异常；油路泄漏；发动机磨损导致间隙过大；压力传感器或线路故障。", trouble_guide:"1) 立即降低转速并核实机油液位；2) 检查外部泄漏和滤清器状态；3) 用机械压力表复测实际油压；4) 对比传感器信号和线束状态。", recommended_action:"按三级/严重告警处理：优先降载或停机保护，完成现场确认后再恢复作业。油压确认偏低时停机处理，补油/换滤芯/检修润滑系统；严禁带低油压继续重载作业。", applicable_models:["XE5600", "XE2000", "GR5505", "LW1200KN", "LW1000KN"], status:"active", updated_at:"2025-12-15 09:30", updated_by:"运维管理员" },
    { code:"314", name:"发动机2空滤堵塞报警", name_en:"Engine 2 Air Filter Clogged", level:1, category:"警告", description:"发动机2主空滤阻力过高或堵塞，进气受限可能导致冒黑烟、功率下降和燃油消耗升高。", root_cause:"滤芯积尘堵塞；进气管路塌陷或异物堵塞；预滤器积灰；压差开关/传感器故障；矿区粉尘工况超出保养周期。", trouble_guide:"1) 查看空滤堵塞指示和进气压差；2) 检查滤芯、预滤器和进气管路；3) 清理空滤壳体积尘；4) 更换滤芯后确认报警消除。", recommended_action:"按一级告警处理：现场确认并纳入班次点检/计划检修跟踪。按保养规范清洁或更换空滤，禁止用破损滤芯继续运行；粉尘重工况下缩短检查周期。", applicable_models:["XE5600", "XE2000", "GR5505", "LW1200KN", "LW1000KN"], status:"active", updated_at:"2025-12-15 09:30", updated_by:"运维管理员" },
    { code:"315", name:"发动机2空滤2堵塞报警", name_en:"Engine 2 Air Filter 2 Clogged", level:1, category:"警告", description:"发动机二级/副空滤阻力过高或堵塞，进气受限可能导致冒黑烟、功率下降和燃油消耗升高。", root_cause:"滤芯积尘堵塞；进气管路塌陷或异物堵塞；预滤器积灰；压差开关/传感器故障；矿区粉尘工况超出保养周期。", trouble_guide:"1) 查看空滤堵塞指示和进气压差；2) 检查滤芯、预滤器和进气管路；3) 清理空滤壳体积尘；4) 更换滤芯后确认报警消除。", recommended_action:"按一级告警处理：现场确认并纳入班次点检/计划检修跟踪。按保养规范清洁或更换空滤，禁止用破损滤芯继续运行；粉尘重工况下缩短检查周期。", applicable_models:["XE5600", "XE2000", "GR5505", "LW1200KN", "LW1000KN"], status:"active", updated_at:"2025-12-15 09:30", updated_by:"运维管理员" },
    { code:"323", name:"发动机机油液位低报警", name_en:"Engine Oil Level Low", level:2, category:"警告", description:"发动机油液位低于设定阈值，可能导致润滑不足和发动机早期磨损。", root_cause:"机油消耗过大；外部泄漏；保养补油不足；液位传感器失效或线束异常；设备停放姿态导致液位读数偏差。", trouble_guide:"1) 在安全平整位置按规定等待后复查油尺/液位；2) 检查油底壳、滤清器、管路和密封处泄漏；3) 查看传感器输出与实际液位是否一致；4) 补油后复位观察。", recommended_action:"按二级告警处理：限制工况并尽快安排检查，避免故障扩大。补充符合规格的机油并查明消耗/泄漏原因；液位正常仍报警时检修液位传感器与线路。", applicable_models:["XE5600", "XE2000", "GR5505", "LW1200KN", "LW1000KN"], status:"active", updated_at:"2025-12-15 09:30", updated_by:"运维管理员" },
    { code:"324", name:"发动机2机油液位低报警", name_en:"Engine 2 Oil Level Low", level:2, category:"警告", description:"发动机2机油液位低于设定阈值，可能导致润滑不足和发动机早期磨损。", root_cause:"机油消耗过大；外部泄漏；保养补油不足；液位传感器失效或线束异常；设备停放姿态导致液位读数偏差。", trouble_guide:"1) 在安全平整位置按规定等待后复查油尺/液位；2) 检查油底壳、滤清器、管路和密封处泄漏；3) 查看传感器输出与实际液位是否一致；4) 补油后复位观察。", recommended_action:"按二级告警处理：限制工况并尽快安排检查，避免故障扩大。补充符合规格的机油并查明消耗/泄漏原因；液位正常仍报警时检修液位传感器与线路。", applicable_models:["XE5600", "XE2000", "GR5505", "LW1200KN", "LW1000KN"], status:"active", updated_at:"2025-12-15 09:30", updated_by:"运维管理员" },
    { code:"325", name:"燃油油位低开关报警", name_en:"Fuel Level Low Switch", level:1, category:"警告", description:"油位开关触发，可能造成发动机吸空、熄火或生产中断。", root_cause:"燃油实际不足；油位传感器/开关卡滞或漂移；油箱线束接触不良；油箱吸油管、通气或回油异常；燃油泄漏。", trouble_guide:"1) 现场核实油箱液位与燃油消耗；2) 检查油位传感器/开关连接和输出；3) 检查燃油管路泄漏、堵塞和通气；4) 加油后确认告警是否消除。", recommended_action:"按一级告警处理：现场确认并纳入班次点检/计划检修跟踪。及时补充合格燃油并排查泄漏；若液位正常仍报警，检修或更换油位传感器/开关。", applicable_models:["XE5600", "XE2000", "GR5505", "LW1200KN", "LW1000KN"], status:"active", updated_at:"2025-12-15 09:30", updated_by:"运维管理员" },
    { code:"341", name:"左分动箱液位低报警", name_en:"Left Transfer Case Oil Level Low", level:2, category:"警告", description:"左分动箱润滑油液位低于报警阈值，可能造成齿轮和轴承润滑不足、温升和异常磨损。", root_cause:"分动箱漏油；补油不足；油封/放油螺栓渗漏；油位开关或传感器故障；设备倾斜导致读数异常。", trouble_guide:"1) 车辆停稳后按规定检查油位；2) 检查油封、壳体、油管和放油口渗漏；3) 核对油位传感器/开关信号；4) 补油后观察报警和温度变化。", recommended_action:"按二级告警处理：限制工况并尽快安排检查，避免故障扩大。补充规定牌号齿轮油/润滑油并修复泄漏；若伴随异响或高温，应停机进一步检查。", applicable_models:["XE5600", "XE2000", "GR5505", "LW1200KN", "LW1000KN"], status:"active", updated_at:"2025-12-15 09:30", updated_by:"运维管理员" },
    { code:"342", name:"右分动箱液位低报警", name_en:"Right Transfer Case Oil Level Low", level:2, category:"警告", description:"右分动箱润滑油液位低于报警阈值，可能造成齿轮和轴承润滑不足、温升和异常磨损。", root_cause:"分动箱漏油；补油不足；油封/放油螺栓渗漏；油位开关或传感器故障；设备倾斜导致读数异常。", trouble_guide:"1) 车辆停稳后按规定检查油位；2) 检查油封、壳体、油管和放油口渗漏；3) 核对油位传感器/开关信号；4) 补油后观察报警和温度变化。", recommended_action:"按二级告警处理：限制工况并尽快安排检查，避免故障扩大。补充规定牌号齿轮油/润滑油并修复泄漏；若伴随异响或高温，应停机进一步检查。", applicable_models:["XE5600", "XE2000", "GR5505", "LW1200KN", "LW1000KN"], status:"active", updated_at:"2025-12-15 09:30", updated_by:"运维管理员" },
    { code:"0001", name:"GPS一级锁车", name_en:"GPS Level-1 Vehicle Lock", level:3, category:"故障", description:"GPS/远程管理系统触发一级锁车，设备可能被限制启动或运行，需要确认授权、定位与远程管理状态。", root_cause:"远程锁车策略触发；服务/租赁授权到期；GPS定位或通信异常导致状态未更新；车载终端配置、SIM卡或后台账号异常。", trouble_guide:"1) 确认后台锁车状态、授权期限和设备编号；2) 检查GPS终端供电、天线、SIM卡和通信信号；3) 核对终端与平台绑定信息；4) 清除告警后进行启动/运行验证。", recommended_action:"按三级/严重告警处理：优先降载或停机保护，完成现场确认后再恢复作业。联系设备管理/服务后台解除或更新授权，修复GPS通信后再复位告警，禁止通过非正式方式绕过锁车。", applicable_models:["XE5600", "XE2000", "GR5505", "LW1200KN", "LW1000KN"], status:"active", updated_at:"2025-12-15 09:30", updated_by:"运维管理员" },
    { code:"0002", name:"GPS通讯异常", name_en:"GPS Communication Fault", level:1, category:"故障", description:"GPS终端与远程管理平台通讯中断，定位/工况上报和远程指令链路受影响，业务侧可能无法实时跟踪设备状态。", root_cause:"基站或专网信号弱；SIM卡欠费/未激活；终端模组异常；天线馈线松动或被遮挡；APN/平台地址配置错误；矿区盲区干扰。", trouble_guide:"1) 检查终端通信指示灯和心跳状态；2) 核对SIM卡状态、套餐、APN和平台地址；3) 检查GPS天线接头、馈线和遮挡情况；4) 更换工位重连或重启终端。", recommended_action:"按一级告警处理：现场确认并纳入班次点检/计划检修跟踪。优先排查信号与SIM；持续异常时联系运营商或更换通信终端，确保锁车保护链路可用。", applicable_models:["XE5600", "XE2000", "GR5505", "LW1200KN", "LW1000KN"], status:"active", updated_at:"2025-12-15 09:30", updated_by:"运维管理员" },
    { code:"0003", name:"GPS电源切断", name_en:"GPS Power Cutoff", level:1, category:"故障", description:"GPS终端供电被切断，可能存在恶意拆除、线路开路或保险熔断，存在监管失效风险。", root_cause:"终端供电保险熔断；电瓶电压过低或断电；终端电源线被拆除/破损；点火信号异常；后备电池失效。", trouble_guide:"1) 现场检查终端是否被拆除、电源线是否完好；2) 检查保险与电压；3) 验证点火信号；4) 测试后备电池续航并必要时更换。", recommended_action:"按一级告警处理：现场确认并纳入班次点检/计划检修跟踪。立即排查并恢复终端供电；如发现拆除迹象上报安全/运维部门，并按制度问责处理。", applicable_models:["XE5600", "XE2000", "GR5505", "LW1200KN", "LW1000KN"], status:"active", updated_at:"2025-12-15 09:30", updated_by:"运维管理员" },
    { code:"0004", name:"GPS天线异常", name_en:"GPS Antenna Fault", level:1, category:"故障", description:"GPS天线信号异常或开路/短路，定位精度下降或无法定位，影响调度和电子围栏触发。", root_cause:"天线接头松动或氧化；馈线断裂；天线被金属遮挡或安装位置异常；终端天线检测电路故障；雷击/进水损坏。", trouble_guide:"1) 检查天线接头是否松动、氧化；2) 万用表测量馈线通断；3) 调整天线安装位置避免遮挡；4) 必要时更换天线或终端。", recommended_action:"按一级告警处理：现场确认并纳入班次点检/计划检修跟踪。修复或更换天线/馈线后复测定位精度；持续异常时整机送检。", applicable_models:["XE5600", "XE2000", "GR5505", "LW1200KN", "LW1000KN"], status:"active", updated_at:"2025-12-15 09:30", updated_by:"运维管理员" },
    { code:"0005", name:"GPS二级锁车", name_en:"GPS Level-2 Vehicle Lock", level:3, category:"故障", description:"GPS/远程管理系统触发二级锁车（强制停车策略），设备运行被严格限制，必须立即处置。", root_cause:"严重违规/超时未续约；连续多次拒绝授权；账号或设备管控状态升级；后台风控策略升级。", trouble_guide:"1) 立即联系后台确认锁车策略与解除条件；2) 核对授权和合同状态；3) 现场确认设备和驾驶员；4) 解除后做完整的运行验证。", recommended_action:"按三级/严重告警处理：优先降载或停机保护，完成现场确认后再恢复作业。严禁现场绕过锁车强行运行，必须经授权流程恢复。", applicable_models:["XE5600", "XE2000", "GR5505", "LW1200KN", "LW1000KN"], status:"active", updated_at:"2025-12-15 09:30", updated_by:"运维管理员" },
    { code:"0006", name:"GPS卡异常", name_en:"GPS SIM Card Fault", level:1, category:"故障", description:"GPS终端SIM卡识别异常或鉴权失败，导致通信中断或位置/工况上报失败。", root_cause:"SIM卡欠费、停机或注销；金属触点氧化、卡座松动；卡损坏；APN或运营商策略变更；终端SIM驱动异常。", trouble_guide:"1) 取出SIM卡观察触点；2) 用其他终端验证卡状态；3) 检查卡座和锁紧；4) 联系运营商核对账户和APN。", recommended_action:"按一级告警处理：现场确认并纳入班次点检/计划检修跟踪。修复或更换SIM卡，必要时换卡或激活；恢复后观察通讯心跳。", applicable_models:["XE5600", "XE2000", "GR5505", "LW1200KN", "LW1000KN"], status:"active", updated_at:"2025-12-15 09:30", updated_by:"运维管理员" },
    { code:"501", name:"电瓶充电异常报警", name_en:"Battery Charging Fault", level:2, category:"警告", description:"充电系统异常，电瓶电压偏低或充电指示异常，可能导致频繁打火困难、电控异常或夜间用电不足。", root_cause:"发电机/调节器故障；皮带打滑或断裂；电瓶老化、亏电；线路压降过大；车载用电过载；温度过低影响电池容量。", trouble_guide:"1) 检查电瓶电压和密度；2) 检查皮带松紧与磨损；3) 测量发电机输出电压和波形；4) 检查接线柱腐蚀和总线压降。", recommended_action:"按二级告警处理：限制工况并尽快安排检查，避免故障扩大。修复或更换发电机/电瓶/皮带；夜间停机做整充并核对静态漏电流。", applicable_models:["XE5600", "XE2000", "GR5505", "LW1200KN", "LW1000KN"], status:"active", updated_at:"2025-12-15 09:30", updated_by:"运维管理员" },
    { code:"503", name:"主驾室急停开关报警", name_en:"Cab Emergency Stop Pressed", level:3, category:"故障", description:"主驾驶室急停开关被按下，整车进入紧急保护状态，发动机和液压系统被强制停止。", root_cause:"驾驶员主动按下急停；急停开关误触/卡死；安全联锁判定异常；线路短路使开关常闭信号反转。", trouble_guide:"1) 现场询问驾驶员触发原因；2) 释放急停开关并复位；3) 检查急停开关回路和线路；4) 排除安全风险后再启动整机。", recommended_action:"按三级/严重告警处理：优先降载或停机保护，完成现场确认后再恢复作业。原因不明前严禁强制启动；如属设备故障须维修后方能解除联锁。", applicable_models:["XE5600", "XE2000", "GR5505", "LW1200KN", "LW1000KN"], status:"active", updated_at:"2025-12-15 09:30", updated_by:"运维管理员" },
    { code:"507", name:"地面急停开关报警", name_en:"Ground Emergency Stop Pressed", level:3, category:"故障", description:"地面/外侧急停开关被触发，整车切断动力，常见于检修人员或巡查发现风险时启用。", root_cause:"检修/巡查人员主动触发；急停按钮卡死或被异物按压；线路接触不良产生误信号；雨水/灰尘渗入按钮触点。", trouble_guide:"1) 现场确认地面急停按钮位置和触发原因；2) 复位急停按钮并清洁触点；3) 检查回路通断和电压；4) 完成安全检查后再启动。", recommended_action:"按三级/严重告警处理：优先降载或停机保护，完成现场确认后再恢复作业。必须确认现场无人员或设备风险后方可解除急停。", applicable_models:["XE5600", "XE2000", "GR5505", "LW1200KN", "LW1000KN"], status:"active", updated_at:"2025-12-15 09:30", updated_by:"运维管理员" },
    { code:"514", name:"前部急停开关报警", name_en:"Front Emergency Stop Pressed", level:3, category:"故障", description:"设备前部急停开关被触发，整车切断动力进入安全保护，常用于前端作业或维修过程中的安全锁定。", root_cause:"作业/维修人员触发；前部急停按钮卡死；线路短路或接触不良；安装位置受冲击变形。", trouble_guide:"1) 现场询问触发原因和位置；2) 复位急停按钮；3) 检查急停回路和按钮触点；4) 启动前完成安全确认。", recommended_action:"按三级/严重告警处理：优先降载或停机保护，完成现场确认后再恢复作业。如属硬件故障需维修按钮/线路后方能恢复。", applicable_models:["XE5600", "XE2000", "GR5505", "LW1200KN", "LW1000KN"], status:"active", updated_at:"2025-12-15 09:30", updated_by:"运维管理员" },
    { code:"516", name:"后部急停开关报警", name_en:"Rear Emergency Stop Pressed", level:3, category:"故障", description:"设备后部急停开关被触发，整车切断动力，常见于后部维修、加油或装料作业过程。", root_cause:"作业/维修人员触发；后部急停按钮卡死；线路短路或接触不良；雨水/粉尘渗入触点。", trouble_guide:"1) 现场询问触发原因；2) 复位急停按钮并清洁触点；3) 检查急停回路和电压；4) 启动前确认人员撤离。", recommended_action:"按三级/严重告警处理：优先降载或停机保护，完成现场确认后再恢复作业。严禁强行复位绕过急停；必要时维修硬件后再解除联锁。", applicable_models:["XE5600", "XE2000", "GR5505", "LW1200KN", "LW1000KN"], status:"active", updated_at:"2025-12-15 09:30", updated_by:"运维管理员" },
    { code:"517", name:"左侧急停开关报警", name_en:"Left Emergency Stop Pressed", level:3, category:"故障", description:"设备左侧急停开关被触发，整车切断动力，常用于左侧作业、检修或人员避险。", root_cause:"作业/维修人员触发；急停按钮卡死/损坏；线路短路或接触不良；剧烈振动导致误触。", trouble_guide:"1) 现场询问触发原因和人员位置；2) 复位并检查急停按钮；3) 检查急停回路；4) 完成安全检查后启动。", recommended_action:"按三级/严重告警处理：优先降载或停机保护，完成现场确认后再恢复作业。必须确认现场安全后再解除急停。", applicable_models:["XE5600", "XE2000", "GR5505", "LW1200KN", "LW1000KN"], status:"active", updated_at:"2025-12-15 09:30", updated_by:"运维管理员" },
    { code:"518", name:"右侧急停开关报警", name_en:"Right Emergency Stop Pressed", level:3, category:"故障", description:"设备右侧急停开关被触发，整车切断动力，常用于右侧作业、检修或安全联锁场景。", root_cause:"作业/维修人员触发；急停按钮卡死/损坏；线路短路或接触不良；剧烈振动或外物撞击导致误触。", trouble_guide:"1) 现场询问触发原因；2) 复位急停按钮并检查触点；3) 检查急停回路和供电；4) 启动前完成安全检查。", recommended_action:"按三级/严重告警处理：优先降载或停机保护，完成现场确认后再恢复作业。如属硬件故障须维修后方能解除联锁。", applicable_models:["XE5600", "XE2000", "GR5505", "LW1200KN", "LW1000KN"], status:"active", updated_at:"2025-12-15 09:30", updated_by:"运维管理员" }
  ],

  /* ===== 工具方法 ===== */
  getAssetById: function(id) {
    for (var i = 0; i < this.assets.length; i++) {
      if (this.assets[i].id === id) return this.assets[i];
    }
    return null;
  },
  getAssetTimeline: function(assetId) {
    var events = [];
    var asset = this.getAssetById(assetId);
    if (!asset) return [];
    events.push({
      time: asset.last_alarm_time,
      type: "running",
      title: "设备运行状态",
      desc: "今日作业 " + asset.work_hours_today + " 小时，累计 " + asset.uptime_hours + " 小时",
      dotClass: "dot-normal"
    });
    for (var i = 0; i < this.alerts.length; i++) {
      var a = this.alerts[i];
      if (a.asset_id === assetId) {
        events.push({
          time: a.last_occurred,
          type: "alert",
          title: "[告警] " + a.title,
          desc: "[" + a.code + "] " + a.desc,
          dotClass: a.level === "critical" ? "dot-critical" : a.level === "warning" ? "dot-warning" : "dot-normal"
        });
      }
    }
    var statusText = { pending: "待处理", processing: "处理中", closed: "已闭环" };
    for (var j = 0; j < this.events.length; j++) {
      var e = this.events[j];
      if (e.asset_id === assetId) {
        events.push({
          time: e.updated_at,
          type: "event",
          title: "[工单] " + e.title,
          desc: "状态: " + statusText[e.status] + " | 处理人: " + e.handler,
          dotClass: e.status === "closed" ? "dot-normal" : e.level === "critical" ? "dot-critical" : "dot-warning"
        });
      }
    }
    events.sort(function(a, b) { return b.time.localeCompare(a.time); });
    return events;
  },
  /* ===== 车队视图 - 左侧树形分组 ===== */
  fleet_groups: [
    {
      id: "all", name: "全局设备资产", expanded: true,
      children: [
        {
          id: "g-excavator", name: "采掘运输车群", expanded: true,
          children: [
            { id: "f-XE5600",   name: "XE5600 矿用挖掘机车队",   asset_ids: ["XE5600-001"] },
            { id: "f-XE2000",   name: "XE2000 矿用挖掘机车队",   asset_ids: ["XE2000-001"] }
          ]
        },
        {
          id: "g-loader", name: "辅助装载机群", expanded: true,
          children: [
            { id: "f-LW1200KN", name: "LW1200KN 大吨位装载机车队", asset_ids: ["LW1200KN-001"] },
            { id: "f-LW1000KN", name: "LW1000KN 装载机车队",       asset_ids: ["LW1000KN-001"] }
          ]
        },
        {
          id: "g-grader", name: "道路平整与维护车群", expanded: false,
          children: [
            { id: "f-GR5505",   name: "GR5505 矿用平地机车队",     asset_ids: ["GR5505-001"] }
          ]
        }
      ]
    }
  ],

  /* ===== 实时监测 - 硬件总线 + 通道目录 ===== */
  monitor_channels: {
    bus_options: [
      { id: "bus-plm",  name: "PlmLegacy 串行总线",     desc: "矿用车载老协议总线 · 支持兼容慢采样" },
      { id: "bus-vims", name: "Vims3G 原生协议网关",     desc: "新一代车机网关 · 高频实时采样" }
    ],
    channels: [
      { id: "ch-engine-rpm",   bus: "bus-vims", group: "动力总成",   name: "发动机实时转速",            unit: "Rpm", range: 2200, baseline: 1500, jitter: 80, color: "#F26B6B", oem_unit: "转每分钟", desc: "发动机曲轴瞬时转速 · 全景满标度 2,000" },
      { id: "ch-oil-pressure", bus: "bus-vims", group: "动力总成",   name: "发动机机油主油道实时压力",  unit: "kPa", range: 800,  baseline: 580,  jitter: 25, color: "#5DA8FF", oem_unit: "千帕",     desc: "主油道实时压力 · 瞬时平均值 580" },
      { id: "ch-oil-filter-dp",bus: "bus-vims", group: "润滑系统",   name: "机油滤清器主被动滤芯进出压差", unit: "kPa", range: 60,   baseline: 28,   jitter: 6,  color: "#5DD39E", oem_unit: "千帕",     desc: "过滤阻力微幅爬升，滤芯面临轻度堵塞", warning: "过滤阻力微幅爬升，滤芯面临轻度堵塞" },
      { id: "ch-coolant-temp", bus: "bus-vims", group: "冷却系统",   name: "发动机冷却液出口温度",      unit: "°C",  range: 120,  baseline: 88,   jitter: 3,  color: "#FFB547", oem_unit: "摄氏度",   desc: "出口冷却液温度 · 正常区间 80-95°C" },
      { id: "ch-tire-pressure",bus: "bus-plm",  group: "轮胎监测",   name: "11号左前轮瞬时气压",        unit: "kPa", range: 900,  baseline: 720,  jitter: 12, color: "#A78BFA", oem_unit: "千帕",     desc: "矿用无线胎压接口" },
      { id: "ch-tire-temp",    bus: "bus-plm",  group: "轮胎监测",   name: "11号左前轮实时运行温度",    unit: "°C",  range: 100,  baseline: 65,   jitter: 5,  color: "#FF7AB6", oem_unit: "摄氏度",   desc: "矿用无线胎压接口" },
      { id: "ch-fuel-level",   bus: "bus-vims", group: "燃油系统",   name: "燃油液位百分比",            unit: "%",   range: 100,  baseline: 62,   jitter: 1,  color: "#22D3EE", oem_unit: "百分比",   desc: "燃油箱液位实时百分比" },
      { id: "ch-hyd-pressure", bus: "bus-vims", group: "液压系统",   name: "液压主泵实时压力",          unit: "MPa", range: 38,   baseline: 18,   jitter: 2,  color: "#FACC15", oem_unit: "兆帕",     desc: "液压主泵出口压力" }
    ]
  },

  /* ===== 取设备所属"车队组" ===== */
  fleetOfAsset: function(assetId) {
    var groups = this.fleet_groups[0].children;
    for (var i=0;i<groups.length;i++) {
      var subs = groups[i].children || [];
      for (var j=0;j<subs.length;j++) {
        if ((subs[j].asset_ids||[]).indexOf(assetId) !== -1) {
          return { group: groups[i].name, fleet: subs[j].name };
        }
      }
    }
    return { group: "全局设备资产", fleet: "" };
  },

  statusToPill: function(status) {
    var map = {
      "normal":   { cls: "pill-normal",   text: "正常" },
      "warning":  { cls: "pill-warning",  text: "中等" },
      "critical": { cls: "pill-critical", text: "严重" },
      "muted":    { cls: "pill-muted",    text: "无数据" },
      "info":     { cls: "pill-info",     text: "低" }
    };
    return map[status] || map.muted;
  },
  levelToPill: function(level) {
    var map = {
      "critical": { cls: "pill-critical", text: "严重" },
      "warning":  { cls: "pill-warning",  text: "中等" },
      "info":     { cls: "pill-info",     text: "低" },
      "normal":   { cls: "pill-normal",   text: "正常" }
    };
    return map[level] || map.info;
  },
  eventStatusToPill: function(status) {
    var map = {
      "pending":    { cls: "pill-warning",  text: "待处理" },
      "processing": { cls: "pill-info",     text: "处理中" },
      "closed":     { cls: "pill-normal",   text: "已闭环" }
    };
    return map[status] || map.pending;
  },

  /* ===== 设备主数据 v2.0.4（按客户导入模板字段） ===== */
  assetMaster: [
    { model: "XE5600",   pin: "XCMG5600A21X891", hy_id: "HY-00023891", tbox_id: "TBOX-98231", sim_no: "898600A001234", customer: "淡水河谷 (Vale)", customer_asset_id: "Excavator801",  mine_area: "S11D",         fleet: "Excavator Fleet",  status: "active",      remark: "MARC 合同设备",  updated_at: "2025-01-12 09:30", updated_by: "李强" },
    { model: "XE5600",   pin: "XCMG5600A21X892", hy_id: "HY-00023892", tbox_id: "TBOX-98232", sim_no: "898600A001235", customer: "淡水河谷 (Vale)", customer_asset_id: "Excavator802",  mine_area: "S11D",         fleet: "Excavator Fleet",  status: "active",      remark: "MARC 合同设备",  updated_at: "2025-01-12 09:32", updated_by: "李强" },
    { model: "XE2000",   pin: "XCMG2000A20X156", hy_id: "HY-00021156", tbox_id: "TBOX-95302", sim_no: "898600A002301", customer: "淡水河谷 (Vale)", customer_asset_id: "Excavator901",  mine_area: "Carajás N4E",  fleet: "Excavator Fleet",  status: "active",      remark: "—",              updated_at: "2024-12-20 14:08", updated_by: "Emma" },
    { model: "XE2000",   pin: "XCMG2000A20X157", hy_id: "HY-00021157", tbox_id: "TBOX-95303", sim_no: "898600A002302", customer: "国家能源",         customer_asset_id: "EM-2A-019",      mine_area: "鄂尔多斯A区",  fleet: "二号线采掘队",     status: "active",      remark: "—",              updated_at: "2024-11-05 10:12", updated_by: "Emma" },
    { model: "GR5505",   pin: "XCMG5505B22X342", hy_id: "HY-00033342", tbox_id: "TBOX-77011", sim_no: "898600B005511", customer: "国家能源",         customer_asset_id: "GR-B1-007",      mine_area: "鄂尔多斯B区",  fleet: "道路维护组",       status: "maintenance", remark: "整机大修中",     updated_at: "2025-01-10 16:50", updated_by: "陈刚" },
    { model: "GR5505",   pin: "XCMG5505B22X343", hy_id: "HY-00033343", tbox_id: "TBOX-77012", sim_no: "898600B005512", customer: "国家能源",         customer_asset_id: "GR-B1-008",      mine_area: "鄂尔多斯B区",  fleet: "道路维护组",       status: "active",      remark: "—",              updated_at: "2024-10-22 11:30", updated_by: "陈刚" },
    { model: "LW1200KN", pin: "XCMG1200A19X107", hy_id: "HY-00041107", tbox_id: "TBOX-66023", sim_no: "898600A011200", customer: "淡水河谷 (Vale)", customer_asset_id: "Loader501",     mine_area: "Carajás N4E",  fleet: "Loader Fleet",     status: "active",      remark: "MARC 合同设备",  updated_at: "2024-12-28 08:15", updated_by: "李强" },
    { model: "LW1200KN", pin: "XCMG1200A19X108", hy_id: "HY-00041108", tbox_id: "TBOX-66024", sim_no: "898600A011201", customer: "国家能源",         customer_asset_id: "LD-A1-022",      mine_area: "鄂尔多斯A区",  fleet: "一号线辅助车队",   status: "active",      remark: "—",              updated_at: "2024-09-30 09:00", updated_by: "Emma" },
    { model: "LW1000KN", pin: "XCMG1000A21X723", hy_id: "HY-00051723", tbox_id: "TBOX-44012", sim_no: "898600A013010", customer: "国家能源",         customer_asset_id: "LD-C3-105",      mine_area: "鄂尔多斯C区",  fleet: "三号线运输队",     status: "inactive",    remark: "已停机待评估",   updated_at: "2025-01-05 15:00", updated_by: "周涛" },
    { model: "LW1000KN", pin: "XCMG1000A21X724", hy_id: "HY-00051724", tbox_id: "TBOX-44013", sim_no: "898600A013011", customer: "Glencore",         customer_asset_id: "GLN-LD-72",      mine_area: "Mount Owen",   fleet: "Loader Fleet",     status: "active",      remark: "海外项目",       updated_at: "2024-08-12 13:45", updated_by: "Emma" },
    { model: "XE5600",   pin: "XCMG5600A21X893", hy_id: "HY-00023893", tbox_id: "TBOX-98233", sim_no: "898600A001236", customer: "Glencore",         customer_asset_id: "GLN-EX-44",      mine_area: "Mount Owen",   fleet: "Excavator Fleet",  status: "scrapped",    remark: "事故损毁报废",   updated_at: "2024-06-15 10:00", updated_by: "陈刚" },
    { model: "XE2000",   pin: "XCMG2000A20X158", hy_id: "HY-00021158", tbox_id: "TBOX-95304", sim_no: "898600A002303", customer: "国家能源",         customer_asset_id: "EM-2A-020",      mine_area: "鄂尔多斯A区",  fleet: "二号线采掘队",     status: "active",      remark: "—",              updated_at: "2024-12-01 09:20", updated_by: "Emma" }
  ]
};
