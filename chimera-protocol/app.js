'use strict';
const specimens = [
  ['bahamut_kraken_phoenix', 'バハムート', 'クラーケン', 'フェニックス'],
  ['cyclops_sleipnir_hecatoncheires', 'サイクロプス', 'スレイプニル', 'ヘカトンケイル'],
  ['hecatoncheires_kraken_cyclops', 'ヘカトンケイル', 'クラーケン', 'サイクロプス'],
  ['leviathan_bahamut_cerberus', 'リヴァイアサン', 'バハムート', 'ケルベロス'],
  ['phoenix_cerberus_beelzebub', 'フェニックス', 'ケルベロス', 'ベルゼブブ'],
];
const judges = {
  military_advisor: { name:'ガレス', role:'軍部最高顧問', thesis:['美しさよりも、','戦場での実力を。'], description:'歴戦の軍人が見るのは、実戦上の脅威と戦力。攻撃力に加え、危険性や防御力も含めて、敵として厄介か、味方として頼れるかを判断する。', tags:['攻撃能力','危険性','防御能力'] },
  taxonomist: { name:'ルシアン', role:'魔獣分類学者', thesis:['その造形は、','私の目を楽しませるか。'], description:'自身の審美眼に自信を持つ魔獣分類学者。造形美を重んじ、異なる生物的特徴が一体に共存することにも、分類学的な価値を見出す。', tags:['造形美','生物多様性','形態の組み合わせ'] },
  ecologist: { name:'ミレイユ', role:'生態学者', thesis:['その身体で、','どう生きていくのか。'], description:'身体の構造や器官同士の関係を、冷静に観察する生態学者。動きやすさだけでなく、防御能力や知能も、生き残るための力として評価する。', tags:['生存能力','防御能力','知能'] },
  institute_director: { name:'ヴィクトル', role:'合成獣研究機関主任', thesis:['研究成果として、','総合的に評価する。'], description:'Chimera Protocolの研究主任。特定の能力に執着せず、7つの評価項目を均等に見る。突出した長所も、全体の水準も、研究成果として冷静に見極める。', tags:['総合評価','能力のバランス','全体的な水準'] },
  flight_researcher: { name:'オズワルド', role:'飛行型魔獣研究者', thesis:['翼がある。','それで、飛べるのか。'], description:'長年、飛行型魔獣を研究してきた専門家。翼の有無だけでなく、身体とのバランスや、他の器官が動きを妨げないかまで見極める。', tags:['飛行能力','翼と身体のバランス','器官同士の干渉'] },
  naming_scholar: { name:'エレノア', role:'魔獣図鑑執筆者', thesis:['その名は、','記憶に残る響きか。'], description:'名前そのものに価値を見出す、品のある魔獣図鑑執筆者。音の流れ、発音のしやすさ、リズム。合成された名が、ひとつの名称として持つ魅力を評価する。', tags:['名前の魅力','音の流れ','リズムと響き'] },
  second_prince: { name:'レオニス', role:'第二公子', thesis:['強さを感じるか。','私の美学に響くか。'], description:'ルミナス公国の第二公子。自らの美意識を重んじ、名前の強そうな響きや外見の格好よさ、攻撃力、危険性を評価する。美しさと、彼の好みは同じとは限らない。', tags:['外見の格好よさ','名前の強そうな響き','攻撃力と危険性'] },
};
const specimenButtons = Array.from(document.querySelectorAll('[data-specimen]'));
specimenButtons.forEach(button => button.addEventListener('click', () => {
  const index = Number(button.dataset.specimen);
  const [slug, head, body, limbs] = specimens[index];
  specimenButtons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  const image = document.getElementById('specimen-image');
  image.src = `assets/${slug}.webp`;
  image.alt = `${head}の頭・${body}の体・${limbs}の手足を持つキメラ`;
  document.getElementById('part-head').textContent = head;
  document.getElementById('part-body').textContent = body;
  document.getElementById('part-limbs').textContent = limbs;
  document.getElementById('specimen-number').textContent = `0${index + 1} / 05`;
}));
const judgeButtons = Array.from(document.querySelectorAll('[data-judge]'));
judgeButtons.forEach(button => button.addEventListener('click', () => {
  const id = button.dataset.judge;
  const judge = judges[id];
  judgeButtons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  const portrait = document.getElementById('judge-portrait');
  portrait.src = `assets/${id}.webp`;
  portrait.alt = judge.name;
  document.getElementById('judge-name').textContent = judge.name;
  document.getElementById('judge-role').textContent = judge.role;
  const thesis = document.getElementById('judge-thesis');
  thesis.replaceChildren(document.createTextNode(judge.thesis[0]), document.createElement('br'), document.createTextNode(judge.thesis[1]));
  document.getElementById('judge-description').textContent = judge.description;
  document.getElementById('judge-tags').replaceChildren(...judge.tags.map(tag => {
    const span = document.createElement('span');
    span.textContent = tag;
    return span;
  }));
}));
// Arrow keys complement the normal Tab/Enter behavior in the two selection rows.
for (const buttons of [specimenButtons, judgeButtons]) {
  buttons.forEach((button, index) => button.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % buttons.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + buttons.length) % buttons.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = buttons.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    buttons[next].focus();
    buttons[next].click();
  }));
}
const dialog = document.getElementById('image-dialog');
const dialogImage = document.getElementById('dialog-image');
document.querySelectorAll('[data-lightbox]').forEach(link => link.addEventListener('click', event => {
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  dialogImage.src = link.href;
  dialogImage.alt = link.dataset.caption;
  document.getElementById('dialog-caption').textContent = link.dataset.caption;
  dialog.showModal();
  document.body.classList.add('dialog-open');
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
