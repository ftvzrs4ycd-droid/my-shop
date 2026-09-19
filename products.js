// ============================================
// 商品数据文件
// 以后加商品、改价格、改库存，都只改这个文件
// ============================================

// 顶部大分类（横向滚动的图标）
const TOP_CATEGORIES = [
  { id: 1, name: '山姆烘焙', icon: '🥐' },
  { id: 2, name: '饮品牛奶', icon: '🥛' },
  { id: 3, name: '休闲零食', icon: '🍪' },
  { id: 4, name: '速食冻品', icon: '🧊' },
  { id: 5, name: '精选蔬菜', icon: '🥬' },
  { id: 6, name: '粮油干货', icon: '🍚' },
  { id: 7, name: '家清纸品', icon: '🧴' },
  { id: 8, name: '禽类肉蛋', icon: '🥩' },
];

// 左侧小分类
const SUB_CATEGORIES = [
  { id: 101, parentId: 1, name: '全部' },
  { id: 102, parentId: 1, name: '瑞士卷' },
  { id: 103, parentId: 1, name: '蛋糕' },
  { id: 104, parentId: 1, name: '面包' },
  { id: 105, parentId: 1, name: '麻薯' },
  { id: 201, parentId: 2, name: '全部' },
  { id: 202, parentId: 2, name: '牛奶' },
  { id: 203, parentId: 2, name: '酸奶' },
  { id: 204, parentId: 2, name: '饮料' },
  { id: 301, parentId: 3, name: '全部' },
  { id: 302, parentId: 3, name: '饼干' },
  { id: 303, parentId: 3, name: '糖果' },
  { id: 304, parentId: 3, name: '坚果' },
  { id: 401, parentId: 4, name: '全部' },
  { id: 402, parentId: 4, name: '冷冻' },
  { id: 403, parentId: 4, name: '速食' },
  { id: 501, parentId: 5, name: '全部' },
  { id: 502, parentId: 5, name: '叶菜' },
  { id: 503, parentId: 5, name: '根茎' },
  { id: 601, parentId: 6, name: '全部' },
  { id: 602, parentId: 6, name: '大米' },
  { id: 603, parentId: 6, name: '食用油' },
  { id: 701, parentId: 7, name: '全部' },
  { id: 702, parentId: 7, name: '纸巾' },
  { id: 703, parentId: 7, name: '清洁' },
  { id: 801, parentId: 8, name: '全部' },
  { id: 802, parentId: 8, name: '鸡蛋' },
  { id: 803, parentId: 8, name: '肉类' },
];

// ============================================
// 商品列表
// 每行一个商品，字段含义：
// id      ：商品唯一编号（不能重复）
// catId   ：所属大分类（对应上面 TOP_CATEGORIES 的 id）
// name    ：商品名称
// img     ：图片链接
// price   ：现价
// oldPrice：原价（划线价，没有就填一样的）
// sold    ：已售数量（首页爆款按这个排序）
// stock   ：库存
// isNew   ：是否显示 NEW 标签
// ============================================
const PRODUCTS = [
  { id: 1, catId: 1, name: 'MM 有机胡萝卜 1kg', img: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400', price: 29.9, oldPrice: 35, sold: 16, stock: 5, isNew: true },
  { id: 2, catId: 2, name: '朝日唯品 百香果青瓜风味', img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400', price: 22.8, oldPrice: 28, sold: 27, stock: 10, isNew: true },
  { id: 3, catId: 1, name: 'MM 椰奶布丁酥皮挞', img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400', price: 19.9, oldPrice: 25, sold: 22, stock: 8, isNew: true },
  { id: 4, catId: 3, name: 'MM 麻薯', img: 'https://images.unsplash.com/photo-1587241321921-91a834d6d191?w=400', price: 15, oldPrice: 18, sold: 6, stock: 20 },
  { id: 5, catId: 8, name: 'MM 精选鲜鸡蛋 1.59kg', img: 'https://images.unsplash.com/photo-1587486913049-af64b90cfb2e?w=400', price: 31.9, oldPrice: 38, sold: 8, stock: 15 },
  { id: 6, catId: 1, name: 'MM 新款原味伯爵瑞士卷', img: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400', price: 26, oldPrice: 32, sold: 15, stock: 6 },
  { id: 7, catId: 1, name: 'MM 榴芒班戟', img: 'https://images.unsplash.com/photo-1563729768-397acd398e13?w=400', price: 19.9, oldPrice: 24, sold: 12, stock: 4 },
  { id: 8, catId: 3, name: 'MM 歌剧院蛋糕', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400', price: 39.9, oldPrice: 45, sold: 5, stock: 3 },
  { id: 9, catId: 1, name: 'MM 荔枝芒椰瑞士卷', img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400', price: 34.9, oldPrice: 40, sold: 9, stock: 7 },
  { id: 10, catId: 2, name: '轻养诺 花青莓莓冻干粉 24杯', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400', price: 95, oldPrice: 120, sold: 3, stock: 2 },
  { id: 11, catId: 5, name: '春菜 新蒜苔 500g', img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400', price: 29.9, oldPrice: 35, sold: 7, stock: 12 },
  { id: 12, catId: 1, name: '墨江紫米吐司面包 500g', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400', price: 39.9, oldPrice: 45, sold: 11, stock: 9 },
  { id: 13, catId: 1, name: 'MM 有机胡萝卜 1kg', img: '...', price: 29.9, oldPrice: 35, sold: 16, stock: 5, isNew: true },
  { id: 14, catId: 1, name: '888888 500g', img: '...', price: 39.9, oldPrice: 45, sold: 11, stock: 9 },
  { id: 15, catId: 1, name: '666666666 500g', img: '...', price: 39.9, oldPrice: 45, sold: 11, stock: 9 },
];
