/**
 * core-case-data.js
 * -----------------------------------------------------------
 * SE×シリーズ 案件・要件マスタ「コア層」
 *
 * 複数ゲーム(要件定義デスゲーム / アジャイル見積ミステリー 等)で
 * 共有するデータのみを持つ。ゲーム固有の追加属性(匂わせ文、
 * MoSCoW用の候補指定、複雑さ、観点 等)はここに含めない。
 *
 * 各ゲーム側は、このファイルをscriptタグ(core-case-data.js)
 * で読み込んだ後、自分専用の「ラッパー」ファイルで
 * CORE_REQUIREMENTS / CORE_CASES を拡張・合成して使う。
 *
 * ---- 要件(CORE_REQUIREMENTS) ----
 *   id            : 要件ID(一意)
 *   name          : 要件名
 *   correctTarget : 正解相手('顧客'|'営業'|'現場')
 *   death         : { name, detail } — この要件を見落とした場合の
 *                   汎用的な死因/失敗描写(案件側でdeathOverridesに
 *                   より上書きされることがある)
 *
 * ---- 案件(CORE_CASES) ----
 *   id    : 案件ID(一意)
 *   name  : 案件名
 *   desc  : 案件の一言説明
 *   pool  : この案件で使う要件ID(10件)
 *   base  : 顧客/営業/現場/資料 それぞれの基本フレーバーテキスト
 * -----------------------------------------------------------
 */

const CORE_REQUIREMENTS = {
  "overseas": {
    "id": "overseas",
    "name": "海外拠点対応(通貨・法規制含む)",
    "correctTarget": "顧客",
    "death": {
      "name": "「海外は聞いてません」案件、爆誕",
      "detail": "国内のみとは一言も言われていないのに国内前提で作ってしまい、海外拠点の存在は本番稼働後、始発の電車より早く発覚した。"
    }
  },
  "csv": {
    "id": "csv",
    "name": "CSV出力(他システム連携)",
    "correctTarget": "現場",
    "death": {
      "name": "転記職人、爆誕",
      "detail": "自動連携を作らなかったため、毎月同じ数字を手入力する係が誕生。ミスが出るたびに「今月も転記職人が本気出した」と呼ばれるようになった。"
    }
  },
  "permission": {
    "id": "permission",
    "name": "権限管理(閲覧制限)",
    "correctTarget": "顧客",
    "death": {
      "name": "見放題システム、爆誕",
      "detail": "閲覧制限をつけ忘れたまま本番稼働。全社員が売上データを見放題の状態になり、経営会議で「これ誰でも見れるの今知った」と言われた。"
    }
  },
  "approval": {
    "id": "approval",
    "name": "承認フロー(多段階承認)",
    "correctTarget": "営業",
    "death": {
      "name": "まさかのもう一段階",
      "detail": "課長承認だけで済むと思って作ったら、実は部長承認も必須だった。リリース前日に差し戻され、稟議という名の時限爆弾が起動した。"
    }
  },
  "format": {
    "id": "format",
    "name": "帳票フォーマット指定",
    "correctTarget": "現場",
    "death": {
      "name": "帳票、原型をとどめず",
      "detail": "新システムの出力が旧フォーマットと違いすぎて経営会議資料として却下された。「見た目は要件じゃない」と思っていたのは自分だけだった。"
    }
  },
  "realtime": {
    "id": "realtime",
    "name": "リアルタイム集計",
    "correctTarget": "現場",
    "death": {
      "name": "日次集計、時代遅れ認定",
      "detail": "リアルタイム性を確認せず日次バッチで実装したところ、「なんで昨日の数字なの」と現場から冷たい視線を浴びる日々が始まった。"
    }
  },
  "batch": {
    "id": "batch",
    "name": "夜間バッチ",
    "correctTarget": "現場",
    "death": {
      "name": "サーバ、締め日に力尽きる",
      "detail": "夜間バッチを組まなかったため、締め日にアクセスが集中しシステムが白目を剥いて停止した。"
    }
  },
  "migration": {
    "id": "migration",
    "name": "過去データ移行",
    "correctTarget": "営業",
    "death": {
      "name": "過去は消えた",
      "detail": "過去データを移行しなかったため前年比較のレポートが作れなくなり、「今年は絶好調です」の根拠が消滅した。"
    }
  },
  "mobile": {
    "id": "mobile",
    "name": "モバイル対応",
    "correctTarget": "顧客",
    "death": {
      "name": "役員、圏外で激怒",
      "detail": "モバイル対応をしなかったため、出先の役員から「見れないんだけど」と電話が入り、なぜか対応したのは自分だった。"
    }
  },
  "department": {
    "id": "department",
    "name": "部門別集計",
    "correctTarget": "顧客",
    "death": {
      "name": "部門別、闇に葬られる",
      "detail": "部門別の集計軸を作らなかったため決算後の分析が不可能になり、「全社まとめてどんぶり勘定」が爆誕した。"
    }
  },
  "inv_barcode": {
    "id": "inv_barcode",
    "name": "バーコード/QRスキャン運用",
    "correctTarget": "現場",
    "death": {
      "name": "手カウント、限界突破",
      "detail": "バーコード運用を導入しなかったため手作業カウントのミスが積み重なり、気づいたら在庫が幽霊になっていた。"
    }
  },
  "inv_alert": {
    "id": "inv_alert",
    "name": "在庫アラート",
    "correctTarget": "顧客",
    "death": {
      "name": "発注、勘に頼った代償",
      "detail": "在庫アラートを実装しなかったため発注タイミングを逃し、主要部品が欠品。生産ラインに「休憩中」の張り紙が下がった。"
    }
  },
  "inv_unit": {
    "id": "inv_unit",
    "name": "単位換算",
    "correctTarget": "現場",
    "death": {
      "name": "箱と個数、永遠にすれ違う",
      "detail": "単位換算を考慮しなかったため仕入れと出庫の数字が噛み合わなくなり、棚卸のたび「あれ、また合わない」の合唱が始まった。"
    }
  },
  "inv_lot": {
    "id": "inv_lot",
    "name": "ロット/シリアル管理",
    "correctTarget": "現場",
    "death": {
      "name": "ロット不明、全品回収のフルコース",
      "detail": "ロット管理を実装しなかったため不良品の対象範囲を特定できず、倉庫まるごと回収する羽目になった。"
    }
  },
  "inv_transfer": {
    "id": "inv_transfer",
    "name": "複数倉庫間の在庫移動記録",
    "correctTarget": "現場",
    "death": {
      "name": "在庫、忽然と別倉庫へ",
      "detail": "倉庫間移動を記録する仕組みがなく、在庫がどちらの倉庫にあるのか誰にも分からなくなった。倉庫がバミューダトライアングル化した。"
    }
  },
  "inv_diff": {
    "id": "inv_diff",
    "name": "棚卸差異の扱い",
    "correctTarget": "現場",
    "death": {
      "name": "小さなズレ、積もって大惨事",
      "detail": "差異対応フローを用意しなかったため小さなズレが積み重なり、決算時に帳簿と現実が別々の物語を語り始めた。"
    }
  },
  "inv_expiry": {
    "id": "inv_expiry",
    "name": "賞味期限/使用期限管理",
    "correctTarget": "現場",
    "death": {
      "name": "期限切れ、堂々の出荷",
      "detail": "期限管理を実装しなかったため期限切れの部材がそのまま出荷され、クレーム対応チームの結成記念日になった。"
    }
  },
  "inv_accounting": {
    "id": "inv_accounting",
    "name": "会計システムとの在庫評価額連携",
    "correctTarget": "営業",
    "death": {
      "name": "評価額、二度打ちの悲劇",
      "detail": "会計連携をしなかったため評価額を手入力で転記する運用になり、転記ミスで決算数値がパラレルワールドに突入した。"
    }
  },
  "wh_pricing": {
    "id": "wh_pricing",
    "name": "保管料金体系",
    "correctTarget": "営業",
    "death": {
      "name": "請求書、謎の金額",
      "detail": "顧客ごとの料金体系の違いを考慮しなかったため請求金額に誤りが発生。「この金額どこから来たんですか」への回答は謝罪だった。"
    }
  },
  "wh_misship": {
    "id": "wh_misship",
    "name": "誤出荷対応フロー",
    "correctTarget": "現場",
    "death": {
      "name": "荷物、違うお家に到着",
      "detail": "誤出荷対応フローを整備しなかったため同じミスが繰り返され、主要顧客からの信頼が配送中に紛失した。"
    }
  },
  "wh_temperature": {
    "id": "wh_temperature",
    "name": "温度帯管理",
    "correctTarget": "顧客",
    "death": {
      "name": "常温で冷蔵品、爆誕",
      "detail": "温度帯管理を考慮しなかったため冷蔵保管が必要な荷物が常温保管され、商品が「常温チャレンジ」の犠牲になった。"
    }
  },
  "wh_location": {
    "id": "wh_location",
    "name": "庫内ロケーション管理",
    "correctTarget": "現場",
    "death": {
      "name": "どこにあるか、誰も知らない",
      "detail": "庫内ロケーション管理を実装しなかったため荷物を探すのに時間がかかり、出庫が「宝探し」と化した。"
    }
  },
  "wh_cutoff": {
    "id": "wh_cutoff",
    "name": "入出庫の締め時間",
    "correctTarget": "現場",
    "death": {
      "name": "締め時間、誰得ルール",
      "detail": "締め時間ルールを考慮しなかったため当日出荷分の取りこぼしが発生。「間に合わなかった」が日々の挨拶になった。"
    }
  },
  "wh_shift": {
    "id": "wh_shift",
    "name": "繁忙期の人員シフト調整",
    "correctTarget": "現場",
    "death": {
      "name": "繁忙期、人手ゼロ人間ドラマ",
      "detail": "繁忙期のシフト調整を仕組み化しなかったため出荷遅延が慢性化し、現場のスタミナだけで乗り切る日々が始まった。"
    }
  },
  "wh_return": {
    "id": "wh_return",
    "name": "返品入庫の扱い",
    "correctTarget": "現場",
    "death": {
      "name": "返品、良品に紛れ込む",
      "detail": "返品入庫を別フロー化しなかったため良品在庫に返品品が混入し、在庫誤差という名の迷宮が完成した。"
    }
  },
  "wh_insurance": {
    "id": "wh_insurance",
    "name": "貨物保険/損害賠償の扱い",
    "correctTarget": "営業",
    "death": {
      "name": "賠償範囲、聞いてない",
      "detail": "貨物保険や賠償範囲を確認しなかったため、事故発生時に「どこまで払うんですか」の押し問答が始まった。"
    }
  },
  "payroll_calc": {
    "id": "payroll_calc",
    "name": "給与計算ロジック(諸手当・控除)",
    "correctTarget": "現場",
    "death": {
      "name": "給与計算、桁がずれる悲劇",
      "detail": "諸手当・控除の複雑なルールを甘く見て実装したため、初回給与計算で金額がずれ、全社員への謝罪メールが飛び交った。"
    }
  },
  "expense_ocr": {
    "id": "expense_ocr",
    "name": "領収書OCR読み取り",
    "correctTarget": "現場",
    "death": {
      "name": "手入力地獄、終わらない",
      "detail": "OCR自動化を見送ったため、毎月の経費精算がすべて手入力のまま残り、経理部門から怨嗟の声が上がった。"
    }
  },
  "crm_pipeline": {
    "id": "crm_pipeline",
    "name": "商談進捗管理(パイプライン)",
    "correctTarget": "営業",
    "death": {
      "name": "商談、行方不明多発",
      "detail": "パイプライン管理を実装しなかったため、担当者交代のたびに商談状況が引き継がれず、いくつもの商談が行方不明になった。"
    }
  },
  "ec_payment": {
    "id": "ec_payment",
    "name": "決済代行サービス連携",
    "correctTarget": "営業",
    "death": {
      "name": "決済手段、後から怒涛の追加要望",
      "detail": "決済代行連携の範囲を確認しなかったため、リリース後に複数の決済手段対応を求められ、急遽外部サービスとの追加接続に追われた。"
    }
  },
  "attendance_alert": {
    "id": "attendance_alert",
    "name": "残業アラート通知",
    "correctTarget": "現場",
    "death": {
      "name": "残業、気づいた時には青天井",
      "detail": "残業アラートを実装しなかったため、特定の社員の残業時間が上限を大幅に超えるまで誰も気づかず、労基署対応に追われた。"
    }
  },
  "helpdesk_sla": {
    "id": "helpdesk_sla",
    "name": "SLA(対応時間)管理",
    "correctTarget": "顧客",
    "death": {
      "name": "対応遅延、クレームの山",
      "detail": "SLA管理を実装しなかったため対応時間にばらつきが出て、遅い対応が続いた顧客から苦情が殺到した。"
    }
  },
  "membership_point": {
    "id": "membership_point",
    "name": "ポイント失効ルール",
    "correctTarget": "顧客",
    "death": {
      "name": "ポイント、無限に貯まり続ける事件",
      "detail": "失効ルールを実装しなかったため、ポイントが無期限に貯まり続け、想定外の負債的コストが発生した。"
    }
  }
};

const CORE_CASES = {
  "sales": {
    "id": "sales",
    "name": "売上管理システム",
    "desc": "中堅商社・Excel管理からの脱却案件",
    "pool": [
      "overseas",
      "csv",
      "permission",
      "approval",
      "format",
      "realtime",
      "batch",
      "migration",
      "mobile",
      "department"
    ],
    "base": {
      "顧客": "Excel管理をやめたいんです。",
      "営業": "基本は今の業務フローの置き換えですね。難しい話ではないと思います。",
      "現場": "毎月の締め処理が地味に大変で、他部署への共有も一手間かかるんですよね。",
      "資料": "業務フロー図(月次集計 → 承認 → 出力の3ステップ)"
    }
  },
  "inventory": {
    "id": "inventory",
    "name": "在庫管理システム",
    "desc": "製造業・部品在庫の一元管理案件",
    "pool": [
      "overseas",
      "permission",
      "inv_barcode",
      "inv_alert",
      "inv_unit",
      "inv_lot",
      "inv_transfer",
      "inv_diff",
      "inv_expiry",
      "inv_accounting"
    ],
    "base": {
      "顧客": "在庫の数がどうも合わなくて困っているんです。",
      "営業": "基本的には今の在庫運用のやり方を大きく変えるつもりはないと聞いています。",
      "現場": "棚卸のたびに手作業で数えてるのが本当に大変で……。",
      "資料": "在庫管理フロー図(入庫 → 保管 → 出庫 → 棚卸の4ステップ)"
    }
  },
  "warehouse": {
    "id": "warehouse",
    "name": "倉庫管理システム",
    "desc": "3PL・複数拠点での保管/出荷代行案件",
    "pool": [
      "permission",
      "overseas",
      "wh_pricing",
      "wh_misship",
      "wh_temperature",
      "wh_location",
      "wh_cutoff",
      "wh_shift",
      "wh_return",
      "wh_insurance"
    ],
    "base": {
      "顧客": "保管や出荷まわりをまとめてお願いしたくて。",
      "営業": "基本的には今の運用フローに近い形で進める想定です。",
      "現場": "毎日の入出庫だけでも結構バタバタしていて。",
      "資料": "倉庫運用フロー図(入庫 → 保管 → 出荷指示 → 出荷の4ステップ)"
    }
  },
  "hr_payroll": {
    "id": "hr_payroll",
    "name": "人事給与システム",
    "desc": "中堅企業・属人化した給与計算からの脱却案件",
    "pool": [
      "overseas",
      "permission",
      "csv",
      "approval",
      "format",
      "batch",
      "migration",
      "mobile",
      "department",
      "payroll_calc"
    ],
    "base": {
      "顧客": "給与計算がブラックボックス化していて、担当者以外誰も触れないんです。",
      "営業": "基本的には今の給与体系を維持したまま、システム化するだけです。",
      "現場": "毎月の給与計算、正直属人化してて綱渡り状態なんですよね。",
      "資料": "給与計算フロー図(勤怠取込 → 計算 → 振込データ作成の3ステップ)"
    }
  },
  "expense_report": {
    "id": "expense_report",
    "name": "経費精算システム",
    "desc": "紙とハンコからの脱却を目指す経費精算案件",
    "pool": [
      "overseas",
      "permission",
      "csv",
      "approval",
      "format",
      "batch",
      "migration",
      "mobile",
      "department",
      "expense_ocr"
    ],
    "base": {
      "顧客": "経費精算の紙とハンコの運用、そろそろ卒業したいんです。",
      "営業": "基本は今の申請フローをそのままシステム化するイメージです。",
      "現場": "月末の経費精算、領収書の整理だけでも一苦労なんですよね。",
      "資料": "経費精算フロー図(申請 → 承認 → 経理確認の3ステップ)"
    }
  },
  "crm_sales": {
    "id": "crm_sales",
    "name": "CRM営業支援システム",
    "desc": "属人化した営業活動を可視化する案件",
    "pool": [
      "overseas",
      "permission",
      "csv",
      "approval",
      "format",
      "batch",
      "migration",
      "mobile",
      "department",
      "crm_pipeline"
    ],
    "base": {
      "顧客": "営業の動きが見えなくて、正直どんぶり勘定になってるんです。",
      "営業": "基本は今の営業活動を可視化するだけのシステムですね。",
      "現場": "商談の記録、人によって書いたり書かなかったりでバラバラで。",
      "資料": "営業活動フロー図(リード獲得 → 商談 → 受注の3ステップ)"
    }
  },
  "ec_renewal": {
    "id": "ec_renewal",
    "name": "ECサイトリニューアル",
    "desc": "老朽化したECサイトの刷新案件",
    "pool": [
      "overseas",
      "permission",
      "csv",
      "approval",
      "format",
      "batch",
      "migration",
      "mobile",
      "department",
      "ec_payment"
    ],
    "base": {
      "顧客": "古いECサイトのデザインも仕組みも、そろそろ限界なんです。",
      "営業": "基本的には見た目を新しくするだけの想定でいます。",
      "現場": "注文対応、今のシステムだと結構手作業が多いんですよね。",
      "資料": "EC運用フロー図(注文 → 決済 → 出荷手配の3ステップ)"
    }
  },
  "attendance_mgmt": {
    "id": "attendance_mgmt",
    "name": "勤怠管理システム",
    "desc": "タイムカードからの脱却を目指す勤怠案件",
    "pool": [
      "overseas",
      "permission",
      "csv",
      "approval",
      "format",
      "batch",
      "migration",
      "mobile",
      "department",
      "attendance_alert"
    ],
    "base": {
      "顧客": "勤怠管理、いまだにタイムカードで正直古いなと思ってます。",
      "営業": "基本は今の勤怠ルールをそのままシステム化するだけです。",
      "現場": "打刻の集計、月末に手作業でやってて結構大変なんですよね。",
      "資料": "勤怠管理フロー図(打刻 → 集計 → 承認の3ステップ)"
    }
  },
  "helpdesk_support": {
    "id": "helpdesk_support",
    "name": "問い合わせ管理システム",
    "desc": "品質にムラのある問い合わせ対応を整える案件",
    "pool": [
      "overseas",
      "permission",
      "csv",
      "approval",
      "format",
      "batch",
      "migration",
      "mobile",
      "department",
      "helpdesk_sla"
    ],
    "base": {
      "顧客": "問い合わせ対応がバラバラで、品質にムラがあるのが悩みです。",
      "営業": "基本は今の問い合わせ対応フローを整理するだけの想定です。",
      "現場": "問い合わせの対応、正直誰が何をやってるか見えづらいんですよね。",
      "資料": "問い合わせ対応フロー図(受付 → 一次対応 → エスカレの3ステップ)"
    }
  },
  "membership_mgmt": {
    "id": "membership_mgmt",
    "name": "会員管理システム",
    "desc": "古い会員基盤からの脱却を目指す案件",
    "pool": [
      "overseas",
      "permission",
      "csv",
      "approval",
      "format",
      "batch",
      "migration",
      "mobile",
      "department",
      "membership_point"
    ],
    "base": {
      "顧客": "会員情報の管理が古いシステムのままで、そろそろ限界なんです。",
      "営業": "基本は今の会員特典の仕組みをそのままシステム化するだけです。",
      "現場": "会員データの更新、手作業が多くて地味に大変なんですよね。",
      "資料": "会員管理フロー図(登録 → 特典付与 → 更新の3ステップ)"
    }
  }
};
