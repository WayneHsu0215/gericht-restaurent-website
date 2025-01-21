import React from "react";

const MenuPage = () => {
  const menuSections = [
    {
      id: "soup-base",
      title: "湯底",
      items: [
        { name: "昆布湯底", price: "0" },
        { name: "濃郁沙茶", price: "15" },
        { name: "川味麻辣", price: "20" },
        { name: "三鮮豚骨", price: "30" },
        { name: "韓式泡菜", price: "35" },
        { name: "牛奶起司", price: "45" },
        { name: "半斤蛤蠣", price: "60" },
      ],
    },
    {
      id: "secret-soup",
      title: "拾吾秘製湯底",
      items: [
        { name: "濃郁番茄", price: "45" },
        { name: "酸菜魚", price: "50" },
        { name: "金湯", price: "50" },
        { name: "菌菇", price: "50" },
        { name: "泰式冬蔭功", price: "50" },
      ],
    },
    {
      id: "special-dishes",
      title: "拾吾精選鍋物（免選湯底）",
      items: [
        { name: "酸菜魚（鱸魚 or 鯛魚 2選1）",note:"加購（牛、雞、羊、五花肉）+50", price: "250" },
        { name: "黃金雞肉鍋", price: "260" },
      ],
    },
    {
      id: "main-dishes",
      title: "主鍋",
      items: [
        { name: "拾吾牛肉鍋", price: "169" },
        { name: "梅花豬肉鍋", price: "169" },
        { name: "拾吾羊肉鍋", price: "180" },
        { name: "五花牛肉鍋", price: "190" },
        { name: "拾吾雞肉鍋", price: "210" },
        { name: "松阪豬肉鍋", price: "220" },
        { name: "拾吾鯛魚鍋", price: "200" },
        { name: "深海草蝦鍋", price: "230" },
        { name: "美國板腱牛肉鍋", price: "260" },
        { name: "肉肉雙拼（4選2）", note: "拾吾牛、梅花豬、羊肉、五花牛 + 10 元", price: "220" },
        { name: "海陸雙拼（6選2）", note: "五花牛、梅花豬、羊肉、鯛魚、鱸魚、巴沙魚", price: "250" },
        { name: "海鮮拼盤鍋", note: "草蝦x3 + 蛤蜊半斤 + 鯛魚 + 干貝", price: "399" },
        { name: "素食菇菇鍋", price: "160" },
      ],
      items: [
        { name: "火烤兩吃", note: "五花牛/梅花豬/羊肉/松阪豬", price: "260" },
        { name: "火烤雙拼肉盤", note: "五花牛 + 梅花豬", price: "300" },
        { name: "火烤三種肉一次擁有",  note:"五花牛 + 梅花豬 + 松阪豬", price: "400" },
      ]
    },
    {
      id: "appetizers",
      title: "開胃熱食",
      items: [
        { name: "韓式泡菜", price: "40" },
        { name: "麻辣鴨血", price: "45" },
        { name: "麻辣豆腐", price: "45" },
        { name: "麻辣綜合", price: "55" },
      ],
    },
    {
      id: "meats",
      title: "肉品單點",
      items: [
        { name: "拾吾牛肉", price: "70" },
        { name: "梅花豬肉", price: "70" },
        { name: "拾吾羊肉", price: "70" },
        { name: "五花牛肉", price: "90" },
        { name: "去骨雞腿肉", price: "90" },
        { name: "美國板腱牛肉", price: "160" },
        { name: "火烤五花牛", price: "160" },
        { name: "火烤梅花豬", price: "110" },
        { name: "火烤羊肉", price: "120" },
        { name: "火烤松阪豬", price: "150" },
      ],
    },
    {
      id: "vegetables",
      title: "蔬菜",
      items: [
        { name: "香菇", price: "35" },
        { name: "玉米筍", price: "35" },
        { name: "黑木耳", price: "35" },
        { name: "高麗菜", price: "35" },
        { name: "杏鮑菇", price: "35" },
        { name: "金針菇", price: "35" },
        { name: "鴻喜菇", price: "35" },
        { name: "青江菜", price: "35" },
        { name: "白蘿蔔", price: "35" },
        { name: "花椰菜", price: "35" },
        { name: "大陸妹", price: "35" },
        { name: "小白菜", price: "35" },
        { name: "茼萵（冬季限定）", price: "35"},
      ],
    },
    {
      id: "hot-pot-ingredients",
      title: "火鍋底料",
      items: [
        { name: "貢丸", price: "35" },
        { name: "魚餃", price: "35" },
        { name: "蝦餃", price: "35" },
        { name: "蛋餃", price: "35" },
        { name: "豆皮", price: "35" },
        { name: "芋頭", price: "35" },
        { name: "鑫鑫腸", price: "35" },
        { name: "蟹味棒", price: "35" },
        { name: "板豆腐", price: "35" },
        { name: "凍豆腐", price: "35" },
        { name: "米血糕", price: "35" },
        { name: "爆漿球", note: "鮮蝦、芋泥、綜合", price: "35" },
        { name: "麻吉燒", note: "花生、芝麻、綜合", price: "35" },
        { name: "魚卵捲", price: "35" },
        { name: "芋頭鮮肉丸", price: "35" },
        { name: "香酥老油條", price: "35" },
        { name: "龍蝦沙拉丸", price: "35" },
      ],
    },
    {
      id: "seafood",
      title: "海鮮單點",
      items: [
        { name: "蛤蜊（半斤）", price: "60" },
        { name: "手工花枝漿", price: "70" },
        { name: "手工蝦仁漿", price: "70" },
        { name: "白蝦", price: "90" },
        { name: "草蝦", price: "105" },
        { name: "鯛魚片", price: "80" },
        { name: "鱸魚片", price: "90" },
        { name: "巴沙魚片", price: "80" },
        { name: "海鮮拼盤", note: "草蝦x3 + 蛤蜊半斤 + 鱸魚 + 干貝", price: "300" },
      ],
    },
    {
      id: "side-dishes",
      title: "附食",
      items: [
        { name: "雞蛋", price: "15" },
        { name: "烏龍麵", price: "20" },
        { name: "豬油拌飯", price: "20" },
      ],
    },
    {
      id: "drinks",
      title: "酒水（550ml）",
      items: [
        { name: "BAR", price: "45" },
        { name: "百威", price: "55" },
        { name: "金尊", price: "60" },
        { name: "海尼根", price: "65" },
      ],
    },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", backgroundColor: "#0a0a0a", paddingBottom: "50px" }}>
      <nav style={{ backgroundColor: "#0a0a0a", padding: "10px 0", position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
        {menuSections.map((section) => (
          <button
            key={section.id}
            style={{
              backgroundColor: "#f4a460",
              border: "none",
              color: "white",
              padding: "10px 20px",
              margin: "0 5px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
            onClick={() => {
              document.getElementById(section.id).scrollIntoView({ behavior: "smooth" });
            }}
          >
            {section.title}
          </button>
        ))}
      </nav>

      <div style={{ paddingTop: "60px" }}>
        {menuSections.map((section) => (
          <div
            id={section.id}
            key={section.id}
            style={{
              backgroundColor: "#0a0a0a",
              margin: "20px auto",
              padding: "20px",
              maxWidth: "900px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(255, 255, 255, 0.1)",
            }}
          >
            <h2 style={{ borderBottom: "2px solidrgb(151, 82, 32)", paddingBottom: "10px", color: "#713f12" }}>{section.title}</h2>
            {section.items.map((item, index) => (
            <div key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px dashedrgb(205, 207, 169)", padding: "10px 0" }}>
              <span style={{ color: "#fef3c7" }}>{item.name}</span>
              <div style={{ display: "flex", justifyContent: "left", alignItems: "center", flex: 1 }}>
                {item.note && (
                  <span style={{ fontStyle: "italic", color: "white", textAlign: "center" , marginLeft: "16px"}}>{item.note}</span>
                )}
              </div>
              <span style={{ color: "white", fontWeight: "bold" }}>${item.price}</span>
            </div>
          ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
