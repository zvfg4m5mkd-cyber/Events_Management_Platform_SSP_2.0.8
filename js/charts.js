/* ====================================================
   XCMG 设备运维监控系统 - 图表辅助工具
   注：各页面的具体图表配置直接写在对应 HTML 中以保持可读性，
   本文件提供通用的 ECharts 主题 / 配色 / 工具函数。
   ==================================================== */

window.XCMG_CHARTS = {

  // 统一配色方案（与 CSS 状态色一致）
  COLORS: {
    critical: "#E53935",
    warning:  "#FB8C00",
    info:     "#0070D6",
    normal:   "#43A047",
    muted:    "#9E9E9E",
    primary:  "#0070D6",
    primaryLight: "rgba(0,112,214,0.1)"
  },

  // 通用 grid 配置（紧凑布局）
  defaultGrid: { left: 8, right: 8, top: 24, bottom: 8, containLabel: true },

  // 通用 tooltip
  defaultTooltip: {
    trigger: "axis",
    backgroundColor: "rgba(31,42,61,0.92)",
    borderColor: "transparent",
    textStyle: { color: "#fff", fontSize: 12 }
  },

  // X / Y 轴默认样式
  defaultAxis: function(type) {
    return {
      type: type || "value",
      axisLine: { lineStyle: { color: "#E5E9F0" } },
      axisTick: { show: false },
      splitLine: { lineStyle: { color: "#F0F1F4", type: "dashed" } },
      axisLabel: { fontSize: 11, color: "#5A6478" }
    };
  },

  // 根据 level 返回颜色
  levelColor: function(level) {
    return this.COLORS[level] || this.COLORS.info;
  },

  // 健康分对应颜色
  healthColor: function(score) {
    if (score >= 80) return this.COLORS.normal;
    if (score >= 50) return this.COLORS.warning;
    return this.COLORS.critical;
  }
};
