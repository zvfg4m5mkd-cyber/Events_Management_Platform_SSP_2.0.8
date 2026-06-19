/* ===== v1.9.5 告警处理弹窗（共享组件 alh-modal） =====
 * 用法：在引入 data.js 之后引入此脚本。
 *   <script src="js/data.js"></script>
 *   <script src="js/alh_modal.js"></script>
 * 暴露：openAlertDrawer / closeAlertDrawer / alh_action / alh_telemetry / alh_snapshot / alh_kb_toggle / closeAlhKb / alhKbSwitchTab
 * 依赖：XCMG_DATA.alerts、XCMG_DATA.faultCatalog；DOM 中需有 #drawer-mask（共用），脚本会自动注入 #alh-modal。
 */
(function(){
  if (window.__ALH_MODAL_LOADED) return;
  window.__ALH_MODAL_LOADED = true;

  /* ---------- 1) HTML 注入 ---------- */
  function ensureMask() {
    if (!document.getElementById("drawer-mask")) {
      var mk = document.createElement("div");
      mk.className = "drawer-mask";
      mk.id = "drawer-mask";
      mk.onclick = function(){ closeAlertDrawer(); };
      document.body.appendChild(mk);
    }
  }
  function ensureModal() {
    if (document.getElementById("alh-modal")) return;
    var html =
      '<div class="alh-modal" id="alh-modal">' +
        '<div class="alh-card" role="dialog" aria-modal="true" aria-labelledby="alh-h1">' +
          '<button class="alh-close" onclick="closeAlertDrawer()" title="关闭">×</button>' +
          /* Section 1 */
          '<div class="alh-sec">' +
            '<div class="alh-sec-title">' +
              '<span class="alh-sec-bar"></span>' +
              '<span class="alh-sec-icon">📋</span>' +
              '<span id="alh-h1">工况异常深潜解析明细单 <em>(Notification Details)</em></span>' +
            '</div>' +
            '<div class="alh-grid">' +
              /* 左列 */
              '<div class="alh-col">' +
                '<div class="alh-fld"><div class="alh-lbl">触发源事件<br/><em>(Evento):</em></div><input class="alh-inp" id="alh-evento" readonly/></div>' +
                '<div class="alh-fld"><div class="alh-lbl">中文工况定义:</div><input class="alh-inp alh-inp-strong" id="alh-defcn" readonly/></div>' +
                '<div class="alh-fld"><div class="alh-lbl">受控严重级别<br/><em>(Nível):</em></div><input class="alh-inp" id="alh-nivel" readonly/></div>' +
                '<div class="alh-fld"><div class="alh-lbl">矿山所属区域<br/><em>(Mina):</em></div><input class="alh-inp" id="alh-mina" readonly/></div>' +
                '<div class="alh-fld"><div class="alh-lbl">受控资产编号<br/><em>(Unidade):</em></div><input class="alh-inp" id="alh-unidade" readonly/></div>' +
                '<div class="alh-fld"><div class="alh-lbl">最新遥测反馈<br/><em>(Último):</em></div><input class="alh-inp alh-inp-warn" id="alh-ultimo" readonly/></div>' +
              '</div>' +
              /* 中列 */
              '<div class="alh-col">' +
                '<div class="alh-fld"><div class="alh-lbl">事件全局识别码:</div><input class="alh-inp" id="alh-eid" readonly/></div>' +
                '<div class="alh-fld"><div class="alh-lbl">协议接口<br/><em>(Interface):</em></div><input class="alh-inp" id="alh-interface" readonly/></div>' +
                '<div class="alh-fld"><div class="alh-lbl">数据流捕获源<br/><em>(Fonte):</em></div><input class="alh-inp" id="alh-fonte" readonly/></div>' +
                '<div class="alh-fld"><div class="alh-lbl">快照存储状态<br/><em>(Snapshot):</em></div><input class="alh-inp" id="alh-snapshot" readonly/></div>' +
              '</div>' +
              /* 右列：信息块 */
              '<div class="alh-col alh-col-info">' +
                '<div class="alh-info">' +
                  '<div class="alh-info-title"><span class="alh-info-icon">🔍</span>潜在引发根因 <em>(Causa potencial):</em></div>' +
                  '<div class="alh-info-body" id="alh-cause">—</div>' +
                '</div>' +
                '<div class="alh-info">' +
                  '<div class="alh-info-title"><span class="alh-info-icon">🔧</span>标准排故指南 <em>(Troubleshooting):</em></div>' +
                  '<div class="alh-info-body" id="alh-trouble">—</div>' +
                '</div>' +
                '<div class="alh-info">' +
                  '<div class="alh-info-title"><span class="alh-info-icon">💡</span>建议运维措施 <em>(Ações recomendadas):</em></div>' +
                  '<div class="alh-info-body" id="alh-recommend">—</div>' +
                '</div>' +
                '<div class="alh-info alh-info-edit">' +
                  '<div class="alh-info-title">' +
                    '<span class="alh-info-icon">✍️</span>操作员手动输入附加处理意见与工单备注 <em>(Informação adicional):</em>' +
                    '<span class="alh-edit-tag">🔓 允许编辑</span>' +
                  '</div>' +
                  '<textarea class="alh-info-textarea" id="alh-adicional" placeholder="填写处理意见、跟踪工单编号等..."></textarea>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
          /* Section 2 */
          '<div class="alh-sec">' +
            '<div class="alh-sec-title">' +
              '<span class="alh-sec-bar"></span>' +
              '<span class="alh-sec-icon">🚚</span>' +
              '<span>关联资产调度状态联动 <em>(Estado do Equipamento)</em></span>' +
            '</div>' +
            '<div class="alh-grid alh-grid-2">' +
              '<div class="alh-fld"><div class="alh-lbl">当班操作员<br/><em>(Operador):</em></div><input class="alh-inp" id="alh-operador" readonly/></div>' +
              '<div class="alh-fld"><div class="alh-lbl">精准信标位置<br/><em>(Beacon):</em></div><input class="alh-inp" id="alh-beacon" readonly/></div>' +
              '<div class="alh-fld"><div class="alh-lbl">高精全球GPS坐标:</div><input class="alh-inp" id="alh-gps" readonly/></div>' +
            '</div>' +
          '</div>' +
          /* 多通道快照面板（默认折叠） */
          '<div class="snap-panel alh-snap-wrap" id="alh-snap-panel" style="display:none;">' +
            '<div class="snap-head">' +
              '<div>' +
                '<div class="snap-title-main">触发时刻多通道快照</div>' +
                '<div class="snap-title-sub" id="alh-snap-sub">—</div>' +
              '</div>' +
              '<div class="snap-tools">' +
                '<span class="snap-tools-lab">时间窗口</span>' +
                '<div class="snap-window-group" id="alh-snap-window-group">' +
                  '<button class="snap-w-btn" data-min="5"   onclick="alhSnapSetWindow(5)">5 min</button>' +
                  '<button class="snap-w-btn" data-min="15"  onclick="alhSnapSetWindow(15)">15 min</button>' +
                  '<button class="snap-w-btn" data-min="60"  onclick="alhSnapSetWindow(60)">1 h</button>' +
                  '<button class="snap-w-btn" data-min="240" onclick="alhSnapSetWindow(240)">4 h</button>' +
                '</div>' +
                '<button class="snap-regen" onclick="alhSnapRegen()" title="重新生成"><span class="snap-regen-ico">↻</span> 重新生成</button>' +
                '<button class="snap-collapse" onclick="closeAlhSnap()" title="收起">收起</button>' +
              '</div>' +
            '</div>' +
            '<div class="snap-body">' +
              '<div class="snap-channels" id="alh-snap-channels"></div>' +
              '<div class="snap-chart-wrap">' +
                '<svg class="snap-chart" id="alh-snap-chart" viewBox="0 0 880 320" preserveAspectRatio="none"></svg>' +
                '<div class="snap-axis-x" id="alh-snap-axis-x"></div>' +
              '</div>' +
            '</div>' +
          '</div>' +
          /* 工单生成面板（默认折叠，v1.9.17） */
          '<div class="wo-panel" id="alh-wo-panel" style="display:none;">' +
            '<div class="wo-head">' +
              '<div>' +
                '<div class="wo-title-main"><span data-i18n="wo.btn.generate">生成工单</span> <em>(Geração de Ordem)</em></div>' +
                '<div class="wo-title-sub" id="wo-sub" data-i18n="wo.sub.intro">填写 → 校验 → 下发，全流程在此完成</div>' +
              '</div>' +
              '<div class="wo-tools">' +
                '<span class="wo-draft-tag" id="wo-draft-tag" style="display:none;" data-i18n="wo.draft.tag">草稿已加载</span>' +
                '<button class="wo-collapse" onclick="wo_close()" title="收起">收起</button>' +
              '</div>' +
            '</div>' +
            /* 步骤指示器 */
            '<div class="wo-stepper" id="wo-stepper">' +
              '<div class="wo-step active" data-step="1"><span class="wo-step-num">1</span><span class="wo-step-lab" data-i18n="wo.step.fill">填写工单信息</span></div>' +
              '<div class="wo-step-line"></div>' +
              '<div class="wo-step" data-step="2"><span class="wo-step-num">2</span><span class="wo-step-lab" data-i18n="wo.step.validate">生成工单校验</span></div>' +
              '<div class="wo-step-line"></div>' +
              '<div class="wo-step" data-step="3"><span class="wo-step-num">3</span><span class="wo-step-lab" data-i18n="wo.step.dispatch">完成下发 SAP</span></div>' +
            '</div>' +
            /* Step 1：填写工单 */
            '<div class="wo-stage" id="wo-stage-1">' +
              '<div class="wo-sec-title"><span class="wo-sec-bar"></span><span data-i18n="wo.sec.fillTitle">工单类型与服务工单信息</span> <em>(Informações da Ordem / Nota)</em></div>' +
              '<div class="wo-type-row">' +
                '<div class="wo-type-card wo-type-yem"  data-type="YEM" onclick="wo_pick_type(\'YEM\')">' +
                  '<div class="wo-type-name">YEM</div>' +
                  '<div class="wo-type-desc">紧急维修 / 高风险事件，通常需要快速停机处理或立即响应。</div>' +
                  '<div class="wo-type-flag">已选择</div>' +
                '</div>' +
                '<div class="wo-type-card wo-type-yco active" data-type="YCO" onclick="wo_pick_type(\'YCO\')">' +
                  '<div class="wo-type-name">YCO</div>' +
                  '<div class="wo-type-desc">纠正性维修 / 常规维修工单，适用于已确认的故障处理。</div>' +
                  '<div class="wo-type-flag">已选择</div>' +
                '</div>' +
                '<div class="wo-type-card wo-type-nota" data-type="Nota" onclick="wo_pick_type(\'Nota\')">' +
                  '<div class="wo-type-name">Nota</div>' +
                  '<div class="wo-type-desc">维修通知 / 服务通知，先记录需求，再由 SAP 侧规划生成 OM。</div>' +
                  '<div class="wo-type-flag">已选择</div>' +
                '</div>' +
              '</div>' +
              '<div class="wo-form">' +
                '<div class="wo-fld"><div class="wo-lbl">工单类型 Tipo</div><input class="wo-inp wo-inp-readonly" id="wo-type" readonly/></div>' +
                '<div class="wo-fld"><div class="wo-lbl">生成工单 Ordem Gerada</div><input class="wo-inp wo-inp-readonly" id="wo-no" readonly/></div>' +
                '<div class="wo-fld"><div class="wo-lbl">维修类型</div><select class="wo-sel" id="wo-repair"><option value="Corretiva">Corretiva 纠正性</option><option value="Preventiva">Preventiva 预防性</option><option value="Preditiva">Preditiva 预测性</option></select></div>' +
                '<div class="wo-fld"><div class="wo-lbl">优先级 Prioridade</div><select class="wo-sel" id="wo-prio"><option value="Alta">Alta 高</option><option value="Média" selected>Média 中</option><option value="Baixa">Baixa 低</option></select></div>' +
                '<div class="wo-fld"><div class="wo-lbl">班组 Turma</div><select class="wo-sel" id="wo-turma"><option>A</option><option>B</option><option>C</option><option>D</option></select></div>' +
                '<div class="wo-fld"><div class="wo-lbl">计划日期 Data Planejada</div><input class="wo-inp" type="date" id="wo-date"/></div>' +
                '<div class="wo-fld"><div class="wo-lbl">工作中心 Centro Trabalho</div><input class="wo-inp" id="wo-wc" value="PMCMB1"/></div>' +
                '<div class="wo-fld"><div class="wo-lbl">控制中心 Ctrl/Ctro</div><input class="wo-inp" id="wo-cc" value="PMCMB1EM"/></div>' +
                '<div class="wo-fld"><div class="wo-lbl">是否开单后分配 PTS</div><select class="wo-sel" id="wo-pts"><option value="Sim" selected>Sim 是</option><option value="Não">Não 否</option></select></div>' +
              '</div>' +
              '<div class="wo-form wo-form-2col">' +
                '<div class="wo-fld"><div class="wo-lbl">Descrição da Nota / 工单主题</div><input class="wo-inp" id="wo-subject"/></div>' +
                '<div class="wo-fld"><div class="wo-lbl">Troubleshooting / 诊断主题</div><input class="wo-inp" id="wo-trouble-subj"/></div>' +
              '</div>' +
              '<div class="wo-form wo-form-2col">' +
                '<div class="wo-fld"><div class="wo-lbl">Descrição da Ordem / Nota 工单描述</div><textarea class="wo-txt" id="wo-desc" rows="3"></textarea></div>' +
                '<div class="wo-fld"><div class="wo-lbl">处理建议 / 建议措施</div><textarea class="wo-txt" id="wo-recom" rows="3"></textarea></div>' +
              '</div>' +
              '<div class="wo-stage-actions">' +
                '<button class="wo-btn wo-btn-ghost" onclick="wo_save_draft()" data-i18n="wo.btn.saveDraft">保存草稿</button>' +
                '<button class="wo-btn wo-btn-primary" onclick="wo_goto(2)" data-i18n="wo.btn.toValidate">下一步：校验 →</button>' +
              '</div>' +
            '</div>' +
            /* Step 2：校验 */
            '<div class="wo-stage" id="wo-stage-2" style="display:none;">' +
              '<div class="wo-sec-title"><span class="wo-sec-bar"></span><span data-i18n="wo.sec.validateTitle">生成工单校验</span> <em>(Validação)</em></div>' +
              '<div class="wo-validate-grid">' +
                '<div class="wo-vbox">' +
                  '<div class="wo-vbox-h">关键字段校验</div>' +
                  '<div class="wo-vlist" id="wo-vlist"></div>' +
                '</div>' +
                '<div class="wo-vbox">' +
                  '<div class="wo-vbox-h">工单内容预览</div>' +
                  '<div class="wo-preview" id="wo-preview"></div>' +
                '</div>' +
              '</div>' +
              '<div class="wo-stage-actions">' +
                '<button class="wo-btn wo-btn-ghost" onclick="wo_goto(1)" data-i18n="wo.btn.backToFill">← 返回修改</button>' +
                '<button class="wo-btn wo-btn-ghost" onclick="wo_save_draft()" data-i18n="wo.btn.saveDraft">保存草稿</button>' +
                '<button class="wo-btn wo-btn-success" id="wo-go-3" onclick="wo_goto(3)" data-i18n="wo.btn.toDispatch">下发 SAP →</button>' +
              '</div>' +
            '</div>' +
            /* Step 3：下发完成 */
            '<div class="wo-stage" id="wo-stage-3" style="display:none;">' +
              '<div class="wo-sec-title"><span class="wo-sec-bar"></span><span data-i18n="wo.sec.dispatchTitle">完成下发</span> <em>(Concluído)</em></div>' +
              '<div class="wo-result" id="wo-result"></div>' +
              '<div class="wo-stage-actions">' +
                '<button class="wo-btn wo-btn-ghost" onclick="wo_view_records()" data-i18n="wo.btn.viewRecords">查看已下发工单</button>' +
                '<button class="wo-btn wo-btn-primary" onclick="wo_close()" data-i18n="wo.btn.close">完成关闭</button>' +
              '</div>' +
            '</div>' +
          '</div>' +
          /* v2.0.8 知识库面板（去知识库按钮 → 折叠展开） */
          '<div id="alh-kb-wrap" style="margin:14px 0 4px;"></div>' +
          /* 底部按钮 */
          '<div class="alh-actions">' +
            '<div class="alh-act-left">' +
              '<button class="alh-btn alh-btn-ghost" id="alh-snap-toggle" onclick="alh_snapshot()">' +
                '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></svg>' +
                '<span id="alh-snap-toggle-label">查看多通道快照</span> <span class="caret-down" id="alh-snap-toggle-caret"></span>' +
              '</button>' +
              '<button class="alh-btn alh-btn-ghost" onclick="alh_telemetry()">' +
                '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2v6M15 2v6M9 22v-6M15 22v-6M2 9h6M2 15h6M22 9h-6M22 15h-6"/><rect x="9" y="9" width="6" height="6" rx="1"/></svg>' +
                '单机遥测监听' +
              '</button>' +
              '<button class="alh-btn alh-btn-ghost" id="alh-kb-toggle" onclick="alh_kb_toggle()">' +
                '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>' +
                '<span id="alh-kb-toggle-label">去知识库</span> <span class="caret-down" id="alh-kb-toggle-caret"></span>' +
              '</button>' +
            '</div>' +
            '<div class="alh-act-right">' +
              '<button class="alh-btn alh-btn-ghost" onclick="alh_action(\'standby\')">' +
                '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>' +
                '动态待命挂起' +
              '</button>' +
              '<button class="alh-btn alh-btn-success" onclick="alh_action(\'accept\')">' +
                '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>' +
                '签收响应' +
              '</button>' +
              '<button class="alh-btn alh-btn-dark" id="alh-wo-toggle" onclick="wo_toggle()">' +
                '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>' +
                '<span id="alh-wo-toggle-label" data-i18n="wo.btn.generate">生成工单</span> <span class="caret-down" id="alh-wo-toggle-caret"></span>' +
              '</button>' +
              '<button class="alh-btn alh-btn-warn" onclick="alh_action(\'close\')">' +
                '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>' +
                '完工闭环' +
              '</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
    var wrap = document.createElement("div");
    wrap.innerHTML = html;
    document.body.appendChild(wrap.firstChild);
  }
  function init() {
    ensureMask(); ensureModal(); ensureWoStyle();
    // v2.0.0: alh-modal 内的 data-i18n 文案在 ensureModal 后注入到 body，需要 apply 一次
    try { if (window.XCMG_I18N) window.XCMG_I18N.apply(); } catch(e){}
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  /* ---------- 2) 工具 ---------- */
  function levelLabel(lv) {
    return lv === "critical" ? "重大风险级别 (Crítico)"
         : lv === "warning"  ? "中等风险级别 (Aviso)"
         : "常规保障级别 (Evento não-crítico)";
  }
  function hash(s) {
    var h = 0; if (!s) return 0;
    for (var i=0;i<s.length;i++){ h = ((h<<5)-h) + s.charCodeAt(i); h |= 0; }
    return h;
  }
  function $(id){ return document.getElementById(id); }
  function findAlert(alertId) {
    var arr = (window.XCMG_DATA && XCMG_DATA.alerts) || [];
    for (var i=0;i<arr.length;i++) if (arr[i].id === alertId) return arr[i];
    return null;
  }

  /* ---------- 3) 公开 API ---------- */
  window.openAlertDrawer = function(alertId) {
    init(); /* 兜底 */
    var a = findAlert(alertId);
    if (!a) { alert("未找到告警：" + alertId); return; }
    /* 用 faultCatalog 主数据覆盖 */
    var meta = (window.XCMG_DATA && XCMG_DATA.faultCatalog || []).find(function(f){ return f.code === a.code; });
    if (meta) {
      a = Object.assign({}, a, {
        desc_en: meta.name_en || a.desc_en,
        root_cause: meta.root_cause || a.root_cause,
        trouble_guide: meta.trouble_guide || a.trouble_guide,
        recommended_action: meta.recommended_action || a.recommended_action
      });
    }
    window.__alhCurrentAlert = a;
    var ticketNo = "XCMG-WIMS-" + new Date().getFullYear() + "-" + String(Math.abs(hash(a.id))%900000 + 100000);

    $("alh-evento").value     = a.desc_en || a.title || "—";
    $("alh-defcn").value      = a.title || "—";
    $("alh-nivel").value      = levelLabel(a.level);
    $("alh-mina").value       = a.area || "—";
    $("alh-unidade").value    = (a.asset_id || a.asset_name || "—");
    $("alh-ultimo").value     = a.final_value || "—";
    $("alh-eid").value        = a.event_type_id || a.id || "—";
    $("alh-interface").value  = a.oem_protocol || a.source || "—";
    $("alh-fonte").value      = a.data_source || "—";
    $("alh-snapshot").value   = a.snapshot_status || "—";
    $("alh-cause").textContent     = a.root_cause || "—";
    $("alh-trouble").textContent   = a.trouble_guide || "—";
    $("alh-recommend").textContent = a.recommended_action || "—";
    $("alh-adicional").value  = "同意应用常识库指南，建议下发中级优先级维保调度单。指定本次跟踪工单自编号：" + ticketNo + "。";
    $("alh-operador").value   = a.driver || a.operator || "—";
    $("alh-beacon").value     = a.beacon || "—";
    $("alh-gps").value        = a.gps_coord || "—";

    var mk = $("drawer-mask"); if (mk) mk.classList.add("show");
    var m = $("alh-modal");    if (m)  m.classList.add("show");
    document.body.style.overflow = "hidden";
  };

  window.closeAlertDrawer = function() {
    var mk = $("drawer-mask"); if (mk) mk.classList.remove("show");
    var m  = $("alh-modal");   if (m)  m.classList.remove("show");
    document.body.style.overflow = "";
    /* 关闭时同步收起内嵌的知识库面板 */
    if (typeof window.closeAlhKb === "function") window.closeAlhKb();
  };

  window.alh_action = function(action) {
    var a = window.__alhCurrentAlert; if (!a) { closeAlertDrawer(); return; }
    var ticketMatch = ($("alh-adicional").value.match(/XCMG-WIMS-\d+-\d+/) || ["—"])[0];
    var msg = ({
      "standby":  "已将告警「" + a.code + " · " + a.title + "」标记为【动态待命挂起】，等待下一次心跳更新。",
      "accept":   "已签收响应告警「" + a.code + "」，状态切换为【处理中】，已记录到事件流水。",
      "dispatch": "已派发抢修工单 → " + (a.asset_id || a.asset_name) + "\n工单编号：" + ticketMatch,
      "close":    "已完工闭环告警「" + a.code + "」，本次事件已归档至运维历史台账。"
    })[action] || "操作已记录。";
    alert(msg);
    closeAlertDrawer();
  };

  window.alh_telemetry = function() {
    var a = window.__alhCurrentAlert;
    var url = "monitor_select.html";
    if (a && a.asset_id) url += "?asset=" + encodeURIComponent(a.asset_id);
    location.href = url;
  };

  window.alh_snapshot = function() {
    var p = $("alh-snap-panel");
    if (!p) return;
    if (p.style.display === "block") { closeAlhSnap(); return; }
    openAlhSnap();
  };

  /* ============================================================
   * v1.9.10 多通道快照（alh-modal 内嵌版）
   * ctx 从 __alhCurrentAlert 取
   * ============================================================ */
  var _alhSnapCtx = { alertId: "", assetName: "", triggerAt: "", windowMin: 5 };
  var _alhSnapChannels = [
    { key: "ch1", name: "自动缓速器状态",          color: "#FFB300", unit: "%",   base: 60,  amp: 25,  seed: 1, on: true  },
    { key: "ch2", name: "回转泵腔粒子浓度",        color: "#43A047", unit: "ppm", base: 22,  amp: 14,  seed: 2, on: true  },
    { key: "ch3", name: "1号空气滤清器限制压力",   color: "#FB8C00", unit: "kPa", base: 4.2, amp: 1.6, seed: 3, on: true  },
    { key: "ch4", name: "2号空气滤清器限制压力",   color: "#4FA8FF", unit: "kPa", base: 3.6, amp: 1.4, seed: 4, on: true  },
    { key: "ch5", name: "发动机排气歧管瞬时温差",  color: "#E53935", unit: "°C",  base: 48,  amp: 20,  seed: 5, on: true  },
    { key: "ch6", name: "液压主泵出口压力",        color: "#9C27B0", unit: "MPa", base: 28,  amp: 6,   seed: 6, on: false },
    { key: "ch7", name: "冷却液出水温度",          color: "#00ACC1", unit: "°C",  base: 92,  amp: 8,   seed: 7, on: false }
  ];

  function openAlhSnap() {
    var a = window.__alhCurrentAlert || {};
    _alhSnapCtx.alertId   = a.id || "";
    _alhSnapCtx.assetName = a.asset_name || a.asset_id || "—";
    _alhSnapCtx.triggerAt = a.last_occurred || a.first_occurred || a.created_at || "";
    var p = $("alh-snap-panel");
    if (!p) return;
    p.style.display = "block";
    var lab = $("alh-snap-toggle-label");  if (lab) lab.textContent = "收起多通道快照";
    var car = $("alh-snap-toggle-caret");  if (car) car.className = "caret-up";
    document.querySelectorAll("#alh-snap-window-group .snap-w-btn").forEach(function(b){
      b.classList.toggle("is-active", String(b.dataset.min) === String(_alhSnapCtx.windowMin || 5));
    });
    setTimeout(function(){ p.scrollIntoView({ behavior: "smooth", block: "start" }); }, 30);
    alhSnapRender();
  }

  window.closeAlhSnap = function() {
    var p = $("alh-snap-panel");
    if (p) p.style.display = "none";
    var lab = $("alh-snap-toggle-label"); if (lab) lab.textContent = "查看多通道快照";
    var car = $("alh-snap-toggle-caret"); if (car) car.className = "caret-down";
  };

  window.alhSnapSetWindow = function(min) {
    _alhSnapCtx.windowMin = min;
    document.querySelectorAll("#alh-snap-window-group .snap-w-btn").forEach(function(b){
      b.classList.toggle("is-active", String(b.dataset.min) === String(min));
    });
    alhSnapRender();
  };

  window.alhSnapRegen = function() {
    _alhSnapChannels.forEach(function(c){ c.seed = (c.seed * 7 + 13) % 997; });
    alhSnapRender();
  };

  window.alhSnapToggleChannel = function(key) {
    var c = _alhSnapChannels.find(function(x){ return x.key === key; });
    if (c) c.on = !c.on;
    alhSnapRender();
  };

  function alhSnapRender() {
    var win = _alhSnapCtx.windowMin || 5;
    var subEl = $("alh-snap-sub");
    if (subEl) subEl.textContent =
      win + " 分钟窗口 · 触发时刻 " + (_alhSnapCtx.triggerAt || "—") + " · " + (_alhSnapCtx.assetName || "");

    var chHtml = _alhSnapChannels.map(function(c){
      return '<div class="snap-ch ' + (c.on ? 'is-on' : '') + '" onclick="alhSnapToggleChannel(\'' + c.key + '\')">' +
        '<span class="snap-ch-box">' + (c.on ? '<span class="snap-ch-tick">✓</span>' : '') + '</span>' +
        '<span class="snap-ch-dot" style="background:' + c.color + ';"></span>' +
        '<span class="snap-ch-name">' + c.name + '</span>' +
        '<span class="snap-ch-unit">' + c.unit + '</span>' +
      '</div>';
    }).join("");
    var chEl = $("alh-snap-channels"); if (chEl) chEl.innerHTML = chHtml;

    var axisLabels = alhSnapAxisLabels(_alhSnapCtx.triggerAt, win);
    var axEl = $("alh-snap-axis-x");
    if (axEl) axEl.innerHTML = axisLabels.map(function(t){
      return '<span class="snap-axis-x-tick">' + t + '</span>';
    }).join("");

    alhDrawSnapChart();
  }

  function alhSnapAxisLabels(triggerAt, win) {
    var trig = null;
    if (triggerAt) {
      var s = String(triggerAt).replace(' ', 'T');
      trig = new Date(s);
      if (isNaN(trig.getTime())) trig = null;
    }
    if (!trig) trig = new Date();
    var halfMs = win * 60 * 1000 / 2;
    var startMs = trig.getTime() - halfMs;
    var stepMs = (win * 60 * 1000) / 4;
    var pad2 = function(n){ return n < 10 ? "0" + n : "" + n; };
    var fmt = function(d){ return pad2(d.getHours()) + ":" + pad2(d.getMinutes()) + ":" + pad2(d.getSeconds()); };
    var arr = [];
    for (var i = 0; i <= 4; i++) arr.push(fmt(new Date(startMs + i * stepMs)));
    return arr;
  }

  function alhSnapNoise(seed, x) {
    var v = Math.sin(seed * 12.9898 + x * 78.233) * 43758.5453;
    return v - Math.floor(v);
  }

  function alhDrawSnapChart() {
    var W = 880, H = 320;
    var padL = 8, padR = 8, padT = 14, padB = 14;
    var innerW = W - padL - padR;
    var innerH = H - padT - padB;
    var N = 80;

    var svg = '';
    for (var gi = 0; gi <= 6; gi++) {
      var gy = padT + (innerH * gi / 6);
      svg += '<line x1="' + padL + '" y1="' + gy + '" x2="' + (W - padR) + '" y2="' + gy + '" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>';
    }
    for (var gj = 0; gj <= 8; gj++) {
      var gx = padL + (innerW * gj / 8);
      svg += '<line x1="' + gx + '" y1="' + padT + '" x2="' + gx + '" y2="' + (H - padB) + '" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>';
    }

    var trigX = padL + innerW / 2;
    svg += '<line x1="' + trigX + '" y1="' + padT + '" x2="' + trigX + '" y2="' + (H - padB) + '" stroke="rgba(229,57,53,0.7)" stroke-width="1.4" stroke-dasharray="4,3"/>';
    svg += '<text x="' + (trigX + 4) + '" y="' + (padT + 12) + '" fill="#E53935" font-size="11" font-family="ui-monospace,monospace">触发时刻</text>';

    _alhSnapChannels.forEach(function(c){
      if (!c.on) return;
      var pts = [];
      for (var i = 0; i < N; i++) {
        var t = i / (N - 1);
        var trend = c.base + c.amp * Math.sin(t * 6 + c.seed * 0.7);
        var noise = (alhSnapNoise(c.seed, i) - 0.5) * c.amp * 0.4;
        var spike = Math.exp(-Math.pow((t - 0.5) * 6, 2)) * c.amp * 0.55 * (c.key === "ch5" ? 1.2 : 0.7);
        var v = trend + noise + spike;
        var ymin = c.base - c.amp * 1.8;
        var ymax = c.base + c.amp * 1.8;
        var ny = (v - ymin) / (ymax - ymin);
        ny = Math.max(0.05, Math.min(0.95, ny));
        var x = padL + innerW * t;
        var y = padT + innerH * (1 - ny);
        pts.push([x, y]);
      }
      var d = "M" + pts[0][0].toFixed(1) + "," + pts[0][1].toFixed(1);
      for (var k = 0; k < pts.length - 1; k++) {
        var p0 = pts[k === 0 ? 0 : k - 1];
        var p1 = pts[k];
        var p2 = pts[k + 1];
        var p3 = pts[k + 2 < pts.length ? k + 2 : pts.length - 1];
        var c1x = p1[0] + (p2[0] - p0[0]) / 6;
        var c1y = p1[1] + (p2[1] - p0[1]) / 6;
        var c2x = p2[0] - (p3[0] - p1[0]) / 6;
        var c2y = p2[1] - (p3[1] - p1[1]) / 6;
        d += " C" + c1x.toFixed(1) + "," + c1y.toFixed(1) +
             " "  + c2x.toFixed(1) + "," + c2y.toFixed(1) +
             " "  + p2[0].toFixed(1) + "," + p2[1].toFixed(1);
      }
      svg += '<path d="' + d + '" fill="none" stroke="' + c.color + '" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" opacity="0.92"/>';
    });

    var chartEl = $("alh-snap-chart");
    if (chartEl) chartEl.innerHTML = svg;
  }

  /* ---------- 4) ESC 关闭 ---------- */
  document.addEventListener("keydown", function(e){
    if (e.key === "Escape") {
      var m = $("alh-modal");
      if (m && m.classList.contains("show")) closeAlertDrawer();
    }
  });

  /* ============================================================
   * v1.9.17 工单生成面板：CSS + 状态机 + localStorage 持久化
   * ============================================================ */
  function ensureWoStyle() {
    if (document.getElementById("alh-wo-style")) return;
    var s = document.createElement("style");
    s.id = "alh-wo-style";
    s.textContent = [
      ".wo-panel{margin:14px 0 4px;background:#FAFCFF;border:1px solid #DCE5F2;border-radius:10px;overflow:hidden;}",
      "[data-theme='dark'] .wo-panel{background:#16223a;border-color:#2a3a5c;}",
      ".wo-head{display:flex;justify-content:space-between;align-items:center;padding:12px 16px;background:linear-gradient(90deg,#0A4DA1 0%,#1565C0 100%);color:#fff;}",
      ".wo-title-main{font-size:15px;font-weight:700;}",
      ".wo-title-main em{font-style:italic;font-weight:400;opacity:.85;font-size:13px;margin-left:4px;}",
      ".wo-title-sub{font-size:12px;opacity:.85;margin-top:2px;}",
      ".wo-tools{display:flex;align-items:center;gap:10px;}",
      ".wo-draft-tag{background:rgba(255,193,7,.95);color:#1F2A3D;border-radius:10px;padding:2px 10px;font-size:11px;font-weight:600;}",
      ".wo-collapse{background:transparent;border:1px solid rgba(255,255,255,.5);color:#fff;border-radius:6px;padding:4px 12px;cursor:pointer;font-size:12px;}",
      ".wo-collapse:hover{background:rgba(255,255,255,.15);}",
      ".wo-stepper{display:flex;align-items:center;padding:14px 18px;background:#fff;border-bottom:1px solid #E3EAF5;}",
      "[data-theme='dark'] .wo-stepper{background:#0f1a30;border-color:#2a3a5c;}",
      ".wo-step{display:flex;align-items:center;gap:8px;color:#7B8AA3;font-size:13px;}",
      ".wo-step-num{width:24px;height:24px;border-radius:50%;background:#E3EAF5;color:#7B8AA3;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;}",
      ".wo-step.active{color:#0A4DA1;font-weight:700;}",
      ".wo-step.active .wo-step-num{background:#0A4DA1;color:#fff;}",
      ".wo-step.done{color:#43A047;}",
      ".wo-step.done .wo-step-num{background:#43A047;color:#fff;}",
      ".wo-step-line{flex:1;height:2px;background:#E3EAF5;margin:0 12px;}",
      "[data-theme='dark'] .wo-step-line{background:#2a3a5c;}",
      ".wo-stage{padding:16px 18px 18px;}",
      ".wo-sec-title{display:flex;align-items:center;gap:8px;font-size:14px;font-weight:600;color:#1F2A3D;margin-bottom:12px;}",
      "[data-theme='dark'] .wo-sec-title{color:#dde7f7;}",
      ".wo-sec-title em{font-style:italic;font-weight:400;color:#7B8AA3;font-size:12px;}",
      ".wo-sec-bar{display:inline-block;width:3px;height:14px;background:#0A4DA1;border-radius:2px;}",
      ".wo-type-row{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:14px;}",
      ".wo-type-card{background:#fff;border:1px solid #DCE5F2;border-radius:10px;padding:12px 14px;cursor:pointer;position:relative;transition:all .15s;}",
      "[data-theme='dark'] .wo-type-card{background:#16223a;border-color:#2a3a5c;}",
      ".wo-type-card:hover{box-shadow:0 2px 8px rgba(10,77,161,.12);transform:translateY(-1px);}",
      ".wo-type-card.active{border-width:2px;padding:11px 13px;}",
      ".wo-type-yem .wo-type-name{color:#E53935;}",
      ".wo-type-yco .wo-type-name{color:#F9A825;}",
      ".wo-type-nota .wo-type-name{color:#1565C0;}",
      ".wo-type-yem.active{border-color:#E53935;background:#FFF5F5;}",
      ".wo-type-yco.active{border-color:#F9A825;background:#FFFAE6;}",
      ".wo-type-nota.active{border-color:#1565C0;background:#F0F7FF;}",
      "[data-theme='dark'] .wo-type-yem.active{background:#3a1f1f;}",
      "[data-theme='dark'] .wo-type-yco.active{background:#3a2f1a;}",
      "[data-theme='dark'] .wo-type-nota.active{background:#1a2a4a;}",
      ".wo-type-name{font-size:22px;font-weight:700;letter-spacing:1px;}",
      ".wo-type-desc{font-size:12px;color:#5B6A82;margin-top:6px;line-height:1.55;}",
      "[data-theme='dark'] .wo-type-desc{color:#9aa8c2;}",
      ".wo-type-flag{display:none;position:absolute;top:8px;right:8px;background:#F9A825;color:#1F2A3D;font-size:11px;font-weight:700;padding:2px 8px;border-radius:10px;}",
      ".wo-type-card.active .wo-type-flag{display:block;}",
      ".wo-type-yem.active .wo-type-flag{background:#E53935;color:#fff;}",
      ".wo-type-nota.active .wo-type-flag{background:#1565C0;color:#fff;}",
      ".wo-form{display:grid;grid-template-columns:repeat(5,1fr);gap:10px 12px;margin-bottom:12px;}",
      ".wo-form-2col{grid-template-columns:1fr 1fr;}",
      ".wo-fld{display:flex;flex-direction:column;gap:4px;}",
      ".wo-lbl{font-size:12px;color:#5B6A82;font-weight:500;}",
      "[data-theme='dark'] .wo-lbl{color:#9aa8c2;}",
      ".wo-inp,.wo-sel,.wo-txt{border:1px solid #DCE5F2;border-radius:6px;padding:7px 10px;font-size:13px;color:#1F2A3D;background:#fff;font-family:inherit;}",
      "[data-theme='dark'] .wo-inp,[data-theme='dark'] .wo-sel,[data-theme='dark'] .wo-txt{background:#16223a;border-color:#2a3a5c;color:#dde7f7;}",
      ".wo-inp:focus,.wo-sel:focus,.wo-txt:focus{outline:none;border-color:#0A4DA1;box-shadow:0 0 0 2px rgba(10,77,161,.15);}",
      ".wo-inp-readonly{background:#F4F7FB;color:#7B8AA3;}",
      "[data-theme='dark'] .wo-inp-readonly{background:#0f1a30;color:#7a8aa8;}",
      ".wo-txt{resize:vertical;min-height:64px;}",
      ".wo-stage-actions{display:flex;justify-content:flex-end;gap:10px;margin-top:14px;padding-top:12px;border-top:1px dashed #DCE5F2;}",
      "[data-theme='dark'] .wo-stage-actions{border-top-color:#2a3a5c;}",
      ".wo-btn{border:1px solid #DCE5F2;border-radius:6px;padding:8px 18px;font-size:13px;font-weight:600;cursor:pointer;background:#fff;color:#1F2A3D;transition:all .15s;}",
      "[data-theme='dark'] .wo-btn{background:#16223a;border-color:#2a3a5c;color:#dde7f7;}",
      ".wo-btn:hover{transform:translateY(-1px);box-shadow:0 2px 6px rgba(0,0,0,.10);}",
      ".wo-btn-primary{background:#0A4DA1;border-color:#0A4DA1;color:#fff;}",
      ".wo-btn-primary:hover{background:#083A7C;border-color:#083A7C;}",
      ".wo-btn-success{background:#43A047;border-color:#43A047;color:#fff;}",
      ".wo-btn-success:hover{background:#388E3C;border-color:#388E3C;}",
      ".wo-btn-ghost{background:#fff;}",
      ".wo-btn[disabled]{opacity:.5;cursor:not-allowed;}",
      ".wo-validate-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;}",
      ".wo-vbox{background:#fff;border:1px solid #DCE5F2;border-radius:8px;padding:12px 14px;}",
      "[data-theme='dark'] .wo-vbox{background:#16223a;border-color:#2a3a5c;}",
      ".wo-vbox-h{font-size:13px;font-weight:600;color:#0A4DA1;margin-bottom:10px;}",
      "[data-theme='dark'] .wo-vbox-h{color:#7BB3F0;}",
      ".wo-vlist{display:flex;flex-direction:column;gap:6px;}",
      ".wo-vitem{display:flex;align-items:center;gap:8px;font-size:13px;padding:6px 8px;border-radius:6px;}",
      ".wo-vitem.pass{background:#E8F5E9;color:#1B5E20;}",
      ".wo-vitem.fail{background:#FFEBEE;color:#B71C1C;}",
      ".wo-vitem.warn{background:#FFF8E1;color:#7B5800;}",
      "[data-theme='dark'] .wo-vitem.pass{background:#1b3a1b;color:#a3e0a3;}",
      "[data-theme='dark'] .wo-vitem.fail{background:#3a1b1b;color:#f0a3a3;}",
      "[data-theme='dark'] .wo-vitem.warn{background:#3a3019;color:#f0d9a3;}",
      ".wo-vitem-ico{font-weight:700;font-size:14px;width:18px;text-align:center;}",
      ".wo-preview{font-size:12.5px;color:#1F2A3D;line-height:1.7;}",
      "[data-theme='dark'] .wo-preview{color:#dde7f7;}",
      ".wo-preview .pv-row{display:flex;border-bottom:1px dashed #E3EAF5;padding:4px 0;}",
      "[data-theme='dark'] .wo-preview .pv-row{border-bottom-color:#2a3a5c;}",
      ".wo-preview .pv-k{flex:0 0 110px;color:#7B8AA3;}",
      ".wo-preview .pv-v{flex:1;font-weight:500;word-break:break-all;}",
      ".wo-result{padding:18px;background:#F0F7FF;border:1px solid #BBD4EF;border-radius:10px;}",
      "[data-theme='dark'] .wo-result{background:#1a2a4a;border-color:#2a3a5c;}",
      ".wo-result.ok{background:#E8F5E9;border-color:#A5D6A7;}",
      "[data-theme='dark'] .wo-result.ok{background:#1b3a1b;border-color:#2d6a2d;}",
      ".wo-result.fail{background:#FFEBEE;border-color:#EF9A9A;}",
      "[data-theme='dark'] .wo-result.fail{background:#3a1b1b;border-color:#6a2d2d;}",
      ".wo-result-h{display:flex;align-items:center;gap:10px;font-size:15px;font-weight:700;margin-bottom:10px;}",
      ".wo-result-ico{width:36px;height:36px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:20px;color:#fff;}",
      ".wo-result.ok .wo-result-ico{background:#43A047;}",
      ".wo-result.fail .wo-result-ico{background:#E53935;}",
      ".wo-result-meta{display:grid;grid-template-columns:repeat(2,1fr);gap:8px 18px;font-size:13px;color:#1F2A3D;}",
      "[data-theme='dark'] .wo-result-meta{color:#dde7f7;}",
      ".wo-result-meta .pv-k{color:#7B8AA3;display:inline-block;width:96px;}",
      ".wo-progress{height:6px;background:#DCE5F2;border-radius:3px;overflow:hidden;margin:8px 0 12px;}",
      "[data-theme='dark'] .wo-progress{background:#2a3a5c;}",
      ".wo-progress-bar{height:100%;background:linear-gradient(90deg,#0A4DA1,#43A047);width:0;transition:width .35s;}",
      "@media(max-width:1100px){.wo-form{grid-template-columns:repeat(3,1fr);}.wo-validate-grid{grid-template-columns:1fr;}}",
      ".caret-down.flip{transform:rotate(180deg);}"
    ].join("\n");
    document.head.appendChild(s);
  }

  function _woHash(s) {
    var h = 0; if (!s) return 0;
    for (var i=0;i<s.length;i++){ h = ((h<<5)-h) + s.charCodeAt(i); h |= 0; }
    return h;
  }
  function _woFmtDate(d) {
    var pad = function(n){ return n<10 ? "0"+n : ""+n; };
    return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate());
  }
  function _woFmtDT(d) {
    var pad = function(n){ return n<10 ? "0"+n : ""+n; };
    return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate())+" "+pad(d.getHours())+":"+pad(d.getMinutes());
  }
  var _WO_DRAFT_KEY = "xcmg_wo_draft_v1";
  var _WO_LOG_KEY   = "xcmg_wo_log_v1";

  function _woLoadAll(key) {
    try { return JSON.parse(localStorage.getItem(key) || "{}"); }
    catch(e){ return {}; }
  }
  function _woLoadList(key) {
    try { var v = JSON.parse(localStorage.getItem(key) || "[]"); return Array.isArray(v) ? v : []; }
    catch(e){ return []; }
  }
  function _woSave(key, v) {
    try { localStorage.setItem(key, JSON.stringify(v)); } catch(e){}
  }

  function _woGenWoNo(alertId) {
    var d = new Date();
    var seed = Math.abs(_woHash((alertId||"") + d.getTime())) % 900000 + 100000;
    return ""+d.getFullYear()+("0"+(d.getMonth()+1)).slice(-2)+seed;
  }
  function _woGenSapNo() {
    var d = new Date();
    return "SAP-"+d.getFullYear()+("0"+(d.getMonth()+1)).slice(-2)+("0"+d.getDate()).slice(-2)+"-"+(Math.floor(Math.random()*9000)+1000);
  }

  /* 给页面引用：当前 wo-panel 是否打开 */
  window.__alhWoOpen = false;

  window.wo_toggle = function() {
    var p = $("alh-wo-panel"); if (!p) return;
    if (p.style.display === "block") { wo_close(); } else { wo_open(); }
  };

  window.wo_open = function() {
    ensureWoStyle();
    var a = window.__alhCurrentAlert; if (!a) { return; }
    var p = $("alh-wo-panel"); if (!p) return;
    p.style.display = "block";
    window.__alhWoOpen = true;
    var caret = $("alh-wo-toggle-caret"); if (caret) caret.classList.add("flip");
    var lab = $("alh-wo-toggle-label"); if (lab) { lab.setAttribute("data-i18n", "wo.btn.collapse"); lab.textContent = (window.XCMG_I18N ? window.XCMG_I18N.t("wo.btn.collapse") : "收起生成工单"); }
    /* 加载默认值 + 草稿 */
    var drafts = _woLoadAll(_WO_DRAFT_KEY);
    var d = drafts[a.id];
    if (d) {
      $("wo-draft-tag").style.display = "inline-block";
      var _woI18N = window.XCMG_I18N; $("wo-sub").textContent = (_woI18N ? _woI18N.t("wo.sub.draftLoaded") : "已加载草稿") + "（" + (d.saved_at || "") + "）";
    } else {
      $("wo-draft-tag").style.display = "none";
      var _woI18N = window.XCMG_I18N; $("wo-sub").textContent = _woI18N ? _woI18N.t("wo.sub.intro") : "填写 → 校验 → 下发，全流程在此完成";
    }
    /* 工单类型默认 YCO */
    var defType = (d && d.type) || (a.level === "critical" ? "YEM" : "YCO");
    wo_pick_type(defType);
    /* 工单号 */
    $("wo-no").value = (d && d.wo_no) || _woGenWoNo(a.id);
    /* 维修类型 / 优先级 / 班组 */
    $("wo-repair").value = (d && d.repair) || (defType === "YEM" ? "Corretiva" : "Corretiva");
    $("wo-prio").value   = (d && d.prio)   || (a.level === "critical" ? "Alta" : a.level === "warning" ? "Média" : "Baixa");
    $("wo-turma").value  = (d && d.turma)  || "A";
    /* 计划日期：今天起 */
    var defDate = new Date();
    if (a.level === "warning") defDate.setDate(defDate.getDate()+1);
    if (a.level === "info")    defDate.setDate(defDate.getDate()+3);
    $("wo-date").value   = (d && d.plan_date) || _woFmtDate(defDate);
    $("wo-wc").value     = (d && d.work_center) || "PMCMB1";
    $("wo-cc").value     = (d && d.ctrl_center) || "PMCMB1EM";
    $("wo-pts").value    = (d && d.pts)         || "Sim";
    $("wo-subject").value     = (d && d.subject)       || ((a.title || "事件") + " - " + (a.asset_id || ""));
    $("wo-trouble-subj").value= (d && d.trouble_subj)  || (a.desc_en || a.title || "");
    $("wo-desc").value         = (d && d.desc)          || (a.trouble_guide || "");
    $("wo-recom").value        = (d && d.recom)         || (a.recommended_action || "");
    /* 默认进入 Step1 */
    wo_goto(d && d.step ? d.step : 1);
  };

  window.wo_close = function() {
    var p = $("alh-wo-panel"); if (!p) return;
    p.style.display = "none";
    window.__alhWoOpen = false;
    var caret = $("alh-wo-toggle-caret"); if (caret) caret.classList.remove("flip");
    var lab = $("alh-wo-toggle-label"); if (lab) { lab.setAttribute("data-i18n", "wo.btn.generate"); lab.textContent = (window.XCMG_I18N ? window.XCMG_I18N.t("wo.btn.generate") : "生成工单"); }
  };

  window.wo_pick_type = function(t) {
    var cards = document.querySelectorAll(".wo-type-card");
    for (var i=0;i<cards.length;i++) {
      cards[i].classList.toggle("active", cards[i].getAttribute("data-type") === t);
    }
    var inp = $("wo-type"); if (inp) inp.value = t;
  };

  window.wo_goto = function(step) {
    var stages = [1,2,3];
    for (var i=0;i<stages.length;i++) {
      var el = $("wo-stage-"+stages[i]);
      if (el) el.style.display = (stages[i] === step) ? "block" : "none";
    }
    var steps = document.querySelectorAll(".wo-step");
    for (var j=0;j<steps.length;j++) {
      var sn = parseInt(steps[j].getAttribute("data-step"),10);
      steps[j].classList.remove("active","done");
      if (sn < step) steps[j].classList.add("done");
      else if (sn === step) steps[j].classList.add("active");
    }
    if (step === 2) wo_render_validate();
    if (step === 3) wo_dispatch();
  };

  function _woCollect() {
    var a = window.__alhCurrentAlert || {};
    return {
      alert_id:   a.id || "",
      alert_code: a.code || "",
      asset_id:   a.asset_id || "",
      asset_name: a.asset_name || "",
      type:       $("wo-type").value || "YCO",
      wo_no:      $("wo-no").value || "",
      repair:     $("wo-repair").value || "",
      prio:       $("wo-prio").value || "",
      turma:      $("wo-turma").value || "",
      plan_date:  $("wo-date").value || "",
      work_center:$("wo-wc").value || "",
      ctrl_center:$("wo-cc").value || "",
      pts:        $("wo-pts").value || "",
      subject:    $("wo-subject").value || "",
      trouble_subj: $("wo-trouble-subj").value || "",
      desc:       $("wo-desc").value || "",
      recom:      $("wo-recom").value || ""
    };
  }

  window.wo_save_draft = function() {
    var a = window.__alhCurrentAlert; if (!a) return;
    var drafts = _woLoadAll(_WO_DRAFT_KEY);
    var data = _woCollect();
    data.saved_at = _woFmtDT(new Date());
    /* 记录当前所在 step */
    var activeStep = document.querySelector(".wo-step.active");
    data.step = activeStep ? parseInt(activeStep.getAttribute("data-step"),10) : 1;
    drafts[a.id] = data;
    _woSave(_WO_DRAFT_KEY, drafts);
    var tag = $("wo-draft-tag"); if (tag) { tag.style.display="inline-block"; tag.textContent = (window.XCMG_I18N ? window.XCMG_I18N.t("wo.draft.saved") : "草稿已保存") + " " + data.saved_at.substring(11); }
    $("wo-sub").textContent = (window.XCMG_I18N ? window.XCMG_I18N.t("wo.draft.saved") : "草稿已保存") + "（" + data.saved_at + "）";
  };

  function _esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){
      return c==="&"?"&amp;":c==="<"?"&lt;":c===">"?"&gt;":"&quot;";
    });
  }

  window.wo_render_validate = function() {
    var d = _woCollect();
    /* 校验项 */
    var checks = [];
    checks.push({ ok: !!d.type,        label: "工单类型已选择 (" + (d.type||"-") + ")" });
    checks.push({ ok: !!d.wo_no && d.wo_no.length >= 8, label: "工单编号已生成 (" + (d.wo_no||"-") + ")" });
    checks.push({ ok: !!d.asset_id,    label: "受控资产编号已绑定 (" + (d.asset_id||"-") + ")" });
    checks.push({ ok: !!d.subject,     label: "工单主题不能为空" });
    checks.push({ ok: !!d.desc,        label: "工单描述不能为空", warn: !!d.desc && d.desc.length < 20 });
    checks.push({ ok: !!d.plan_date,   label: "计划日期已选择 (" + (d.plan_date||"-") + ")" });
    checks.push({ ok: !!d.work_center, label: "工作中心 / 控制中心已填写" });
    checks.push({ ok: !!d.recom,       label: "处理建议存在", warn: !!d.recom && d.recom.length < 10 });
    /* 重大风险时强制 YEM/Alta */
    var a = window.__alhCurrentAlert || {};
    if (a.level === "critical" && d.type !== "YEM") {
      checks.push({ ok: false, label: "重大风险事件建议工单类型选 YEM (当前: " + d.type + ")", warn:true });
    } else {
      checks.push({ ok: true, label: "工单类型与告警等级匹配" });
    }
    var html = checks.map(function(c){
      var cls = c.ok ? (c.warn ? "warn" : "pass") : "fail";
      var ico = c.ok ? (c.warn ? "!" : "✓") : "✗";
      return '<div class="wo-vitem '+cls+'"><span class="wo-vitem-ico">'+ico+'</span><span>'+_esc(c.label)+'</span></div>';
    }).join("");
    $("wo-vlist").innerHTML = html;
    /* 预览 */
    var rows = [
      ["工单编号", d.wo_no],
      ["工单类型", d.type],
      ["维修类型", d.repair],
      ["优先级",   d.prio],
      ["班组",     d.turma],
      ["计划日期", d.plan_date],
      ["工作中心", d.work_center],
      ["控制中心", d.ctrl_center],
      ["分配 PTS", d.pts],
      ["设备编号", d.asset_id],
      ["关联告警", (d.alert_code||"-") + " · " + (a.title||"")],
      ["工单主题", d.subject],
      ["诊断主题", d.trouble_subj],
      ["工单描述", d.desc],
      ["处理建议", d.recom]
    ];
    $("wo-preview").innerHTML = rows.map(function(r){
      return '<div class="pv-row"><span class="pv-k">'+_esc(r[0])+'</span><span class="pv-v">'+_esc(r[1]||"-")+'</span></div>';
    }).join("");
    /* 是否允许下发 */
    var hasFail = checks.some(function(c){ return !c.ok && !c.warn; });
    var btn = $("wo-go-3");
    if (btn) {
      btn.disabled = hasFail;
      btn.textContent = hasFail ? (window.XCMG_I18N ? window.XCMG_I18N.t("wo.btn.fixFail") : "请先修正校验失败项") : (window.XCMG_I18N ? window.XCMG_I18N.t("wo.btn.toDispatch") : "下发 SAP →");
    }
  };

  window.wo_dispatch = function() {
    var a = window.__alhCurrentAlert; if (!a) return;
    var data = _woCollect();
    /* 模拟下发流程：渐进显示 */
    var box = $("wo-result");
    box.className = "wo-result";
    box.innerHTML =
      '<div class="wo-result-h"><span class="wo-result-ico" style="background:#1565C0;">…</span><span>正在向 SAP 下发工单…</span></div>' +
      '<div class="wo-progress"><div class="wo-progress-bar" id="wo-progress-bar" style="width:0;"></div></div>' +
      '<div style="font-size:12.5px;color:#5B6A82;" id="wo-progress-msg">请求生产网关 → 校验 SAP 主数据 → 写入 OM/Notification …</div>';
    var bar = $("wo-progress-bar");
    var msg = $("wo-progress-msg");
    var steps = [
      { p:25,  m:"已建立 SAP 安全连接，正在校验设备 / 工作中心主数据…" },
      { p:55,  m:"主数据校验通过，正在写入 Notification（"+data.type+"）…" },
      { p:85,  m:"Notification 写入成功，正在生成 SAP Order Number…" }
    ];
    var i = 0;
    var run = function() {
      if (i < steps.length) {
        if (bar) bar.style.width = steps[i].p + "%";
        if (msg) msg.textContent = steps[i].m;
        i++;
        setTimeout(run, 420);
      } else {
        if (bar) bar.style.width = "100%";
        _woFinishDispatch(data);
      }
    };
    setTimeout(run, 250);
  };

  function _woFinishDispatch(data) {
    var a = window.__alhCurrentAlert || {};
    var sapNo = _woGenSapNo();
    var now = new Date();
    var rec = Object.assign({}, data, {
      sap_no:        sapNo,
      dispatch_time: _woFmtDT(now),
      dispatch_status: "dispatched",
      validate_status: "passed",
      creator:       "Emma · 矿山调度"
    });
    /* 写入 localStorage */
    var list = _woLoadList(_WO_LOG_KEY);
    list.unshift(rec);
    _woSave(_WO_LOG_KEY, list);
    /* 删除草稿 */
    var drafts = _woLoadAll(_WO_DRAFT_KEY);
    if (a.id && drafts[a.id]) { delete drafts[a.id]; _woSave(_WO_DRAFT_KEY, drafts); }
    /* 渲染成功卡片 */
    var box = $("wo-result");
    box.className = "wo-result ok";
    box.innerHTML =
      '<div class="wo-result-h"><span class="wo-result-ico">✓</span><span>工单下发成功 (' + data.type + ' / ' + data.prio + ')</span></div>' +
      '<div class="wo-result-meta">' +
        '<div><span class="pv-k">工单编号</span>' + _esc(data.wo_no) + '</div>' +
        '<div><span class="pv-k">SAP 编号</span>' + _esc(sapNo) + '</div>' +
        '<div><span class="pv-k">设备</span>' + _esc(data.asset_id) + '</div>' +
        '<div><span class="pv-k">下发时间</span>' + _esc(rec.dispatch_time) + '</div>' +
        '<div><span class="pv-k">优先级</span>' + _esc(data.prio) + '</div>' +
        '<div><span class="pv-k">班组</span>' + _esc(data.turma) + '</div>' +
        '<div style="grid-column:1/-1;"><span class="pv-k">工单主题</span>' + _esc(data.subject) + '</div>' +
      '</div>';
  }

  window.wo_view_records = function() {
    location.href = "work_orders.html";
  };

  /* ============================================================
   * v2.0.8 知识库面板（"去知识库"按钮 → 折叠展开 + X-GSS 跳转）
   * 9 个 tab：基本信息 / 故障现象 / 故障码 / 用户反馈 / 故障分析 / 诊断步骤 / 维修方案 / 经验总结 / 相关案例
   * 全部基于当前告警 a 字段动态渲染（数据来源：__alhCurrentAlert）
   * ============================================================ */
  var _alhKbCurrentTab = "basic";

  window.alh_kb_toggle = function() {
    var wrap = $("alh-kb-wrap");
    var btn  = $("alh-kb-toggle");
    var lab  = $("alh-kb-toggle-label");
    var car  = $("alh-kb-toggle-caret");
    if (!wrap) return;
    var isOpen = wrap.innerHTML.trim() !== "";
    if (isOpen) {
      window.closeAlhKb();
      return;
    }
    var a = window.__alhCurrentAlert;
    if (!a) return;
    _alhKbCurrentTab = "basic";
    wrap.innerHTML = renderKbPanel(a);
    if (btn) btn.classList.add("is-open");
    if (lab) lab.textContent = "收起知识库";
    if (car) car.className = "caret-up";
    setTimeout(function(){ wrap.scrollIntoView({ behavior:"smooth", block:"start" }); }, 30);
  };

  window.closeAlhKb = function() {
    var wrap = $("alh-kb-wrap");
    var btn  = $("alh-kb-toggle");
    var lab  = $("alh-kb-toggle-label");
    var car  = $("alh-kb-toggle-caret");
    if (wrap) wrap.innerHTML = "";
    if (btn) btn.classList.remove("is-open");
    if (lab) lab.textContent = "去知识库";
    if (car) car.className = "caret-down";
  };

  window.alhKbSwitchTab = function(tabKey) {
    _alhKbCurrentTab = tabKey;
    var a = window.__alhCurrentAlert;
    if (!a) return;
    /* 仅刷新 .kb-tab.is-active 和 #kb-content */
    var tabs = document.querySelectorAll("#alh-kb-wrap .kb-tab");
    tabs.forEach(function(t){
      t.classList.toggle("is-active", t.dataset.kbtab === tabKey);
    });
    var content = document.getElementById("kb-content");
    if (content) content.innerHTML = renderKbTabContent(a, tabKey);
  };

  function _kbId(a) {
    var fo = (a.first_occurred || "").replace(/[^0-9]/g, "").slice(0, 8);
    if (!fo || fo.length < 6) fo = "20260104";
    return "KB" + fo + (a.code || "0000");
  }

  function _esc(s) {
    if (s === undefined || s === null) return "";
    return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  }

  function renderKbPanel(a) {
    var kbId = _kbId(a);
    var title = a.title || "—";
    var code = a.code || "—";
    var xgssUrl = "placeholder.html?m=" + encodeURIComponent("X-GSS · 故障码 " + code + " · " + title);
    /* 同 code 历史告警数 */
    var related = (window.XCMG_DATA && XCMG_DATA.alerts || []).filter(function(x){ return x.code === a.code && x.id !== a.id; });
    var tabs = [
      { key:"basic",    label:"基本信息" },
      { key:"phenom",   label:"故障现象" },
      { key:"code",     label:"故障码" },
      { key:"feedback", label:"用户反馈" },
      { key:"analyze",  label:"故障分析" },
      { key:"diag",     label:"诊断步骤" },
      { key:"repair",   label:"维修方案" },
      { key:"summary",  label:"经验总结" },
      { key:"cases",    label:"相关案例", count: related.length }
    ];
    var tabsHtml = tabs.map(function(t){
      var cnt = (t.count !== undefined) ? '<span class="kb-tab-count">' + t.count + '</span>' : "";
      var cls = "kb-tab" + (t.key === _alhKbCurrentTab ? " is-active" : "");
      return '<button class="' + cls + '" data-kbtab="' + t.key + '" onclick="alhKbSwitchTab(\'' + t.key + '\')">' + _esc(t.label) + cnt + '</button>';
    }).join("");
    return (
      '<div class="kb-panel">' +
        '<div class="kb-panel-head">' +
          '<div class="kb-head-title">' +
            '<span class="kb-head-id">#' + _esc(kbId) + '</span>' +
            '<span>' + _esc(title) + '</span>' +
          '</div>' +
          '<div class="kb-head-actions">' +
            '<a class="kb-btn-xgss" href="' + xgssUrl + '" title="跳转到 X-GSS 系统">去 X-GSS 查看 ↗</a>' +
            '<button class="kb-btn-close-mini" onclick="closeAlhKb()" title="收起">✕</button>' +
          '</div>' +
        '</div>' +
        '<div class="kb-tabs">' + tabsHtml + '</div>' +
        '<div class="kb-content" id="kb-content">' + renderKbTabContent(a, _alhKbCurrentTab) + '</div>' +
      '</div>'
    );
  }

  function renderKbTabContent(a, tabKey) {
    var code = a.code || "—";
    var title = a.title || "—";
    if (tabKey === "basic") {
      return (
        '<div class="kb-section-block">' +
          '<div class="kb-section-title"><span class="kb-section-title-icon">📋</span>基本信息</div>' +
          '<table class="kb-table">' +
            '<tr><th style="width:140px;">故障码</th><td>' + _esc(code) + '</td></tr>' +
            '<tr><th>中文名</th><td>' + _esc(title) + '</td></tr>' +
            '<tr><th>英文名</th><td>' + _esc(a.desc_en || "—") + '</td></tr>' +
            '<tr><th>故障类别</th><td>' + _esc(a.category_cn || a.event_type || "—") + '</td></tr>' +
            '<tr><th>严重等级</th><td>' + _esc(a.level === "critical" ? "重大风险 (Crítico)" : (a.level === "warning" ? "中等风险 (Aviso)" : "常规保障 (Evento não-crítico)")) + '</td></tr>' +
            '<tr><th>OEM 协议</th><td>' + _esc(a.oem_protocol || "—") + '</td></tr>' +
            '<tr><th>数据源</th><td>' + _esc(a.data_source || "—") + '</td></tr>' +
            '<tr><th>关联资产</th><td>' + _esc((a.asset_name || "") + (a.asset_id ? " (" + a.asset_id + ")" : "") || "—") + '</td></tr>' +
            '<tr><th>所属矿区</th><td>' + _esc(a.area || "—") + '</td></tr>' +
          '</table>' +
        '</div>'
      );
    }
    if (tabKey === "phenom") {
      var fxId = "FX" + code;
      return (
        '<div class="kb-section-block">' +
          '<div class="kb-section-title"><span class="kb-section-title-icon">👁</span>故障现象</div>' +
          '<table class="kb-table">' +
            '<tr><th style="width:140px;">现象编号</th><td><a class="kb-link" href="placeholder.html?m=' + encodeURIComponent("故障现象 · " + fxId) + '">' + _esc(fxId) + '</a></td></tr>' +
            '<tr><th>现象描述</th><td>' + _esc(a.desc || a.title || "—") + '</td></tr>' +
            '<tr><th>触发条件</th><td>' + _esc(a.final_value ? "最新遥测值 " + a.final_value : "由 OEM 协议自动触发") + '</td></tr>' +
            '<tr><th>影响范围</th><td>' + _esc(a.area || "—") + ' · ' + _esc(a.asset_name || a.asset_id || "—") + '</td></tr>' +
          '</table>' +
        '</div>'
      );
    }
    if (tabKey === "code") {
      return (
        '<div class="kb-section-block">' +
          '<div class="kb-section-title"><span class="kb-section-title-icon">🔢</span>故障码</div>' +
          '<table class="kb-table">' +
            '<tr><th style="width:140px;">故障码</th><td><strong>' + _esc(code) + '</strong></td></tr>' +
            '<tr><th>OEM 协议</th><td>' + _esc(a.oem_protocol || "—") + '</td></tr>' +
            '<tr><th>事件类型</th><td>' + _esc(a.event_type || "—") + '</td></tr>' +
            '<tr><th>类别</th><td>' + _esc(a.category_cn || "—") + '</td></tr>' +
          '</table>' +
        '</div>'
      );
    }
    if (tabKey === "feedback") {
      return (
        '<div class="kb-section-block">' +
          '<div class="kb-section-title"><span class="kb-section-title-icon">💬</span>用户反馈</div>' +
          '<table class="kb-table">' +
            '<tr><th style="width:140px;">驾驶员/操作员</th><td>' + _esc(a.driver || "—") + '</td></tr>' +
            '<tr><th>设备</th><td>' + _esc((a.asset_name || "") + (a.asset_id ? " · " + a.asset_id : "")) + '</td></tr>' +
            '<tr><th>矿区/位置</th><td>' + _esc(a.area || "—") + '</td></tr>' +
            '<tr><th>遥测值反馈</th><td>' + _esc(a.final_value || "—") + '</td></tr>' +
            '<tr><th>停机时长</th><td>' + _esc(a.downtime || "—") + '</td></tr>' +
            '<tr><th>首次发生时间</th><td>' + _esc(a.first_occurred || "—") + '</td></tr>' +
          '</table>' +
        '</div>'
      );
    }
    if (tabKey === "analyze") {
      return (
        '<div class="kb-section-block">' +
          '<div class="kb-section-title"><span class="kb-section-title-icon">🔍</span>故障分析（潜在引发根因）</div>' +
          '<div class="kb-text-block">' + _esc(a.root_cause || "—") + '</div>' +
        '</div>'
      );
    }
    if (tabKey === "diag") {
      var guide = a.trouble_guide || "";
      var steps;
      if (/\d\)/.test(guide)) {
        /* 按 1) 2) 3) 拆 */
        steps = guide.split(/\s*\d\)\s*/).filter(function(s){ return s.trim(); });
      } else {
        steps = guide.split(/[；;]\s*/).filter(function(s){ return s.trim(); });
      }
      var stepsHtml = steps.length
        ? '<ol class="kb-step-list">' + steps.map(function(s){ return '<li>' + _esc(s.trim()) + '</li>'; }).join("") + '</ol>'
        : '<div class="kb-empty">暂无诊断步骤</div>';
      return (
        '<div class="kb-section-block">' +
          '<div class="kb-section-title"><span class="kb-section-title-icon">🛠</span>诊断步骤（标准排故指南）</div>' +
          stepsHtml +
        '</div>'
      );
    }
    if (tabKey === "repair") {
      var sptkId = "SPTK" + code + "001";
      return (
        '<div class="kb-section-block">' +
          '<div class="kb-section-title"><span class="kb-section-title-icon">📝</span>维修方案（建议运维措施）</div>' +
          '<table class="kb-table">' +
            '<tr><th style="width:140px;">方案编号</th><td><a class="kb-link" href="placeholder.html?m=' + encodeURIComponent("维修方案 · " + sptkId) + '">' + _esc(sptkId) + '</a></td></tr>' +
            '<tr><th>处理建议</th><td>' + _esc(a.recommended_action || "—") + '</td></tr>' +
          '</table>' +
        '</div>'
      );
    }
    if (tabKey === "summary") {
      return (
        '<div class="kb-section-block">' +
          '<div class="kb-section-title"><span class="kb-section-title-icon">💡</span>经验总结</div>' +
          '<ul class="kb-summary-list">' +
            '<li><span class="kb-summary-tag">快速判断</span><span>结合 ' + _esc(a.oem_protocol || "OEM 协议") + ' 实时数据 + 现场司机确认双源核验，避免误报。</span></li>' +
            '<li><span class="kb-summary-tag">处置原则</span><span>优先恢复设备到安全状态（停机 / 降载），再走维修工单流程；高风险等级必须立即响应。</span></li>' +
            '<li><span class="kb-summary-tag">预防复发</span><span>纳入 ' + _esc(a.asset_id || a.asset_name || "本设备") + ' 季度健康度评估指标，连续触发同码 3 次进入预警黑名单。</span></li>' +
          '</ul>' +
        '</div>'
      );
    }
    if (tabKey === "cases") {
      var related = (window.XCMG_DATA && XCMG_DATA.alerts || []).filter(function(x){ return x.code === a.code && x.id !== a.id; });
      if (!related.length) return '<div class="kb-empty">暂无同故障码 ' + _esc(code) + ' 的历史案例</div>';
      var rows = related.slice(0, 12).map(function(r){
        return (
          '<tr>' +
            '<td><a class="kb-link" href="placeholder.html?m=' + encodeURIComponent("历史告警 · " + r.id) + '"><span class="kb-link-name">' + _esc(r.id) + '</span></a></td>' +
            '<td>' + _esc(r.asset_name || r.asset_id || "—") + '</td>' +
            '<td>' + _esc(r.area || "—") + '</td>' +
            '<td>' + _esc(r.first_occurred || "—") + '</td>' +
            '<td>' + _esc(r.final_value || "—") + '</td>' +
          '</tr>'
        );
      }).join("");
      return (
        '<div class="kb-section-block">' +
          '<div class="kb-section-title"><span class="kb-section-title-icon">📂</span>相关案例（同故障码 ' + _esc(code) + '）</div>' +
          '<table class="kb-table">' +
            '<thead><tr><th>告警 ID</th><th>设备</th><th>矿区</th><th>首次发生</th><th>遥测值</th></tr></thead>' +
            '<tbody>' + rows + '</tbody>' +
          '</table>' +
        '</div>'
      );
    }
    return '<div class="kb-empty">未知 tab</div>';
  }

})();
