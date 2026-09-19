// ============================================
// 商品数据文件
// 以后加商品、改价格、改库存，都只改这个文件
// ============================================

const TOP_CATEGORIES = [
  { id: 1, name: '肉蛋果蔬', icon: '🥐' },
  { id: 2, name: '乳品烘焙', icon: '🥛' },
  { id: 3, name: '速食冷冻', icon: '🍪' },
  { id: 4, name: '休闲零食', icon: '🧊' },
  { id: 5, name: '酒水饮料', icon: '🥬' },
  { id: 6, name: '粮油干货', icon: '🍚' },
  { id: 7, name: '个护美妆', icon: '🧴' },
];

const SUB_CATEGORIES = [
  { id: 101, parentId: 1, name: '全部' },
  { id: 102, parentId: 1, name: '水果' },
  { id: 103, parentId: 1, name: '精选蔬菜' },
  { id: 104, parentId: 1, name: '有机蔬菜' },
  { id: 105, parentId: 1, name: '牛肉' },
  { id: 106, parentId: 1, name: '牛排' },
  { id: 107, parentId: 1, name: '海鲜水产' },
  { id: 108, parentId: 1, name: '猪肉' },
  { id: 109, parentId: 1, name: '禽类/蛋' },
  { id: 110, parentId: 1, name: '羊肉' },
  { id: 111, parentId: 1, name: '豆制品' },
  { id: 112, parentId: 1, name: '速冻果蔬' },
  { id: 201, parentId: 2, name: '全部' },
  { id: 202, parentId: 2, name: '面包/点心' },
  { id: 203, parentId: 2, name: '蛋糕' },
  { id: 204, parentId: 2, name: '鲜奶/鲜咖' },
  { id: 205, parentId: 2, name: '常温牛奶' },
  { id: 206, parentId: 2, name: '酸奶/乳酸菌' },
  { id: 207, parentId: 2, name: '冷藏饮品' },
  { id: 208, parentId: 2, name: '常温果汁' },
  { id: 209, parentId: 2, name: '谷物冲调' },
  { id: 210, parentId: 2, name: '黄油/奶酪' },
  { id: 211, parentId: 2, name: '咖啡/茶' },
  { id: 301, parentId: 3, name: '全部' },
  { id: 302, parentId: 3, name: '快手菜' },
  { id: 303, parentId: 3, name: '速食肉制品' },
  { id: 304, parentId: 3, name: '香肠/火腿' },
  { id: 305, parentId: 3, name: '熟食' },
  { id: 306, parentId: 3, name: '佐餐速食' },
  { id: 307, parentId: 3, name: '冰淇淋/甜品' },
  { id: 308, parentId: 3, name: '冷冻面点' },
  { id: 309, parentId: 3, name: '火锅丸滑' },
  { id: 310, parentId: 3, name: '冷冻果蔬' },
  { id: 311, parentId: 3, name: '冷冻肉禽' },
  { id: 312, parentId: 3, name: '冷冻水产' },
  { id: 703, parentId: 7, name: '清洁' },
  { id: 801, parentId: 8, name: '全部' },
  { id: 802, parentId: 8, name: '鸡蛋' },
  { id: 803, parentId: 8, name: '肉类' },
];

// ============================================
// 商品列表
// ============================================
const PRODUCTS = [
  { id: 1, catId: 104, name: 'MM 有机胡萝卜 1kg', img: 'https://cdn.jsdelivr.net/gh/ftvzrs4ycd-droid/my-shop@main/images/5fe317698fb16276c5128263cb639a75.jpg', price: 29.9, oldPrice: 35, sold: 16, stock: 5, isNew: true },
  { id: 2, catId: 2, name: '朝日唯品 百香果青瓜风味', img: 'https://github.com/ftvzrs4ycd-droid/my-shop/blob/main/images/3f501ac07b40662bc7606e599dcaab80.jpg?raw=true', price: 22.8, oldPrice: 28, sold: 27, stock: 10, isNew: true },
  { id: 3, catId: 1, name: 'MM 椰奶布丁酥皮挞', img: 'https://github.com/ftvzrs4ycd-droid/my-shop/blob/main/images/c218cfd5355de0d5b40aa422706cc137.jpg?raw=true', price: 19.9, oldPrice: 25, sold: 22, stock: 8, isNew: true },
  { id: 4, catId: 3, name: 'MM 麻薯', img: 'https://github.com/ftvzrs4ycd-droid/my-shop/blob/main/images/debc6fc3e90462738afe2ed17134852c.jpg?raw=true', price: 15, oldPrice: 18, sold: 6, stock: 20 },
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
  { id: 15, catId: 1, name: '123456789 500g', img: '...', price: 50, oldPrice: 45, sold: 100, stock: 9 },
  { id: 16, catId: 1, subCatId: 104, name: '有几', img: 'https://cdn.jsdelivr.net/gh/ftvzrs4ycd-droid/my-shop@main/images/5fe317698fb16276c5128263cb639a75.jpg', price: 50, oldPrice: 50, sold: 0, stock: 100, isNew: true },
];
