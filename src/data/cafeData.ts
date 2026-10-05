import { MenuItem, ReviewItem, GalleryItem } from '../types/cafe';

export const CAFE_INFO = {
  name: 'Urban Brew Café',
  tagline: 'Good Coffee. Great Food. Better Moments.',
  city: 'Kathmandu',
  country: 'Nepal',
  address: 'Lazimpat Marg (Opposite Embassy of France), Kathmandu, Nepal',
  phone: '+977 9800000000',
  phoneFormatted: '+977 9800000000',
  email: 'hello@urbanbrewcafe.com',
  hours: '7:00 AM – 9:00 PM',
  days: 'Everyday (Mon – Sun)',
  googleMapsUrl: 'https://maps.google.com/?q=Lazimpat,+Kathmandu,+Nepal',
  whatsappUrl: 'https://wa.me/9779800000000?text=Hello%20Urban%20Brew%20Caf%C3%A9%2C%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation.',
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
  tiktok: 'https://tiktok.com',
};

export const SPECIALS: MenuItem[] = [
  {
    id: 'special-cappuccino',
    name: 'Signature Cappuccino',
    category: 'Coffee',
    price: 220,
    shortDescription: 'Double shot of high-altitude Nuwakot Arabica, velvety microfoam & organic Himalayan cinnamon dust.',
    description: 'Our pride and joy. Pulled from hand-selected 100% Arabica beans grown in Nuwakot, steamed with fresh velvety microfoam, and finished with a delicate dusting of aromatic Himalayan mountain cinnamon.',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
    isSpecial: true,
    isPopular: true,
    isChefSpecial: true,
    prepTime: '4 - 6 mins',
    calories: '120 kcal',
    ingredients: ['Double Ristretto Arabica', 'Full-cream Himalayan Milk', 'Organic Cinnamon Dust', 'Demerara sugar on request'],
    tastingNotes: 'Velvety mouthfeel, dark cocoa undertones, toasted almond finish.'
  },
  {
    id: 'special-sandwich',
    name: 'Chicken Cheese Sandwich',
    category: 'Snacks',
    price: 350,
    shortDescription: 'Herb-marinated chicken breast, melted Himalayan cheddar, caramelized onions on sourdough.',
    description: 'Tender free-range chicken breast grilled with fresh thyme and rosemary, smothered in melted aged Himalayan cheddar and mozzarella, sweet caramelized shallots, and house-made basil garlic aioli pressed between toasted sourdough slices.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    isSpecial: true,
    isPopular: true,
    prepTime: '12 - 15 mins',
    calories: '540 kcal',
    ingredients: ['Char-grilled Chicken Breast', 'Aged Himalayan Cheddar', 'Fresh Mozzarella', 'Artisan Sourdough', 'Caramelized Onions', 'Basil Aioli', 'Crisp Seasoned Wedges'],
    tastingNotes: 'Savory, rich, golden-crusted crunch with herb butter aroma.'
  },
  {
    id: 'special-brownie',
    name: 'Chocolate Brownie',
    category: 'Desserts',
    price: 250,
    shortDescription: 'Warm Belgian fudge dark chocolate brownie with roasted walnuts and vanilla bean gelato.',
    description: 'Baked fresh every morning in our open kitchen. Dense 70% dark Belgian chocolate brownie loaded with roasted walnuts, served warm with a molten center and accompanied by a scoop of artisanal vanilla bean gelato.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    isSpecial: true,
    isPopular: true,
    isChefSpecial: true,
    isVegetarian: true,
    prepTime: '6 - 8 mins',
    calories: '420 kcal',
    ingredients: ['70% Belgian Dark Chocolate', 'Roasted Walnuts', 'Cultured Butter', 'Vanilla Bean Gelato', 'Warm Dark Chocolate Drizzle'],
    tastingNotes: 'Ultra-fudgy, bittersweet chocolate symphony with roasted nutty contrast.'
  }
];

export const ALL_MENU_ITEMS: MenuItem[] = [
  // COFFEE
  {
    id: 'coffee-espresso',
    name: 'Espresso Doppio',
    category: 'Coffee',
    price: 180,
    shortDescription: 'Bold double shot pulled with thick golden crema from our signature roast.',
    description: 'Intense, concentrated extraction boasting balanced acidity, dense golden crema, and notes of roasted hazelnut and stone fruit.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    isPopular: false,
    prepTime: '3 mins',
    calories: '5 kcal',
    ingredients: ['Double Shot Arabica Beans', 'Filtered Mountain Spring Water'],
    tastingNotes: 'Bright citrus start, roasted hazelnut body, lingering dark chocolate.'
  },
  {
    id: 'coffee-americano',
    name: 'Classic Americano',
    category: 'Coffee',
    price: 190,
    shortDescription: 'Espresso poured over hot or iced filtered water for a clean, rich sip.',
    description: 'Two shots of rich espresso poured gracefully over mineral-balanced hot water, preserving the nuanced aromas of our mountain-grown beans.',
    image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=800&q=80',
    prepTime: '3 mins',
    calories: '10 kcal',
    ingredients: ['Double Espresso', 'Hot or Iced Mineral Water'],
    tastingNotes: 'Crisp, clean, subtle notes of toasted walnuts and dark cherry.'
  },
  {
    id: 'coffee-cappuccino',
    name: 'Signature Cappuccino',
    category: 'Coffee',
    price: 220,
    shortDescription: 'Double shot of high-altitude Arabica, velvety microfoam & cinnamon dust.',
    description: 'Our pride and joy. Pulled from hand-selected 100% Arabica beans, steamed with velvety microfoam, and dusted with fragrant Himalayan cinnamon.',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
    isSpecial: true,
    isPopular: true,
    isChefSpecial: true,
    prepTime: '5 mins',
    calories: '120 kcal',
    ingredients: ['Double Espresso', 'Steamed Whole Milk', 'Microfoam', 'Cinnamon Dust'],
    tastingNotes: 'Silky smooth, rich chocolate finish, sweet dairy sweetness.'
  },
  {
    id: 'coffee-flatwhite',
    name: 'Artisan Flat White',
    category: 'Coffee',
    price: 240,
    shortDescription: 'Expertly textured microfoam folded over a potent double ristretto.',
    description: 'A coffee connoisseur favorite: intense ristretto base blended with velvety microfoam for a stronger coffee profile and glossy texture.',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
    prepTime: '5 mins',
    calories: '130 kcal',
    ingredients: ['Double Ristretto', 'Glossy Microfoam Milk'],
    tastingNotes: 'Creamy body, toasted malt, caramelized brown sugar aroma.'
  },
  {
    id: 'coffee-latte',
    name: 'Vanilla Bean Café Latte',
    category: 'Coffee',
    price: 260,
    shortDescription: 'Smooth espresso with steamed milk and a touch of Madagascar vanilla.',
    description: 'Silky steamed milk infused with real Madagascar vanilla bean syrup, gently blended into our rich espresso.',
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=80',
    prepTime: '5 mins',
    calories: '160 kcal',
    ingredients: ['Espresso', 'Steamed Milk', 'Natural Vanilla Bean Extract'],
    tastingNotes: 'Gentle sweetness, warming vanilla, smooth dairy profile.'
  },
  {
    id: 'coffee-pourover',
    name: 'V60 Single-Origin Pour Over',
    category: 'Coffee',
    price: 260,
    shortDescription: 'Hand-poured single origin bean with clean floral and berry clarity.',
    description: 'Brewed to order using the Hario V60 dripper. Highlights the delicate florals, bright citric acidity, and berry aromatics of our high-altitude Nepali harvest.',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
    isChefSpecial: true,
    prepTime: '7 mins',
    calories: '5 kcal',
    ingredients: ['Freshly Ground Nuwakot Peaberry', 'Precision 92°C Spring Water'],
    tastingNotes: 'Jasmine blossom, lemongrass, honeyed blackcurrant.'
  },
  {
    id: 'coffee-coldbrew',
    name: 'Slow-Drip Cold Brew Tonic',
    category: 'Coffee',
    price: 290,
    shortDescription: '18-hour cold brew layered over artisan tonic and fresh blood orange slice.',
    description: 'Steeped for 18 hours at low temperatures, resulting in zero bitterness. Served over craft botanical tonic water with fresh citrus garnish.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
    prepTime: '3 mins',
    calories: '45 kcal',
    ingredients: ['18h Steeped Cold Brew', 'Artisan Tonic Water', 'Dehydrated Orange Wheel'],
    tastingNotes: 'Effervescent, cocoa nibs, sparkling citrus zest.'
  },

  // TEA
  {
    id: 'tea-masala',
    name: 'Himalayan Spiced Masala Chai',
    category: 'Tea',
    price: 160,
    shortDescription: 'CTC organic black tea slow-simmered with cardamom, ginger, cloves, and milk.',
    description: 'Authentic Nepali recipe brewed with crushed green cardamom, black pepper, fresh ginger, cinnamon bark, and fresh local milk.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
    isVegetarian: true,
    prepTime: '6 mins',
    calories: '110 kcal',
    ingredients: ['Ilam Organic Tea', 'Fresh Ginger', 'Crushed Green Cardamom', 'Cinnamon', 'Whole Milk'],
    tastingNotes: 'Warming spice, creamy comfort, sweet aromatic finish.'
  },
  {
    id: 'tea-green',
    name: 'Ilam First Flush Green Tea',
    category: 'Tea',
    price: 180,
    shortDescription: 'Hand-plucked high elevation tea leaves steeped with delicate floral notes.',
    description: 'Sourced from organic tea gardens in eastern Nepal. Rich in antioxidants with a smooth, natural grassy sweetness and zero astringency.',
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
    prepTime: '4 mins',
    calories: '2 kcal',
    ingredients: ['High Mountain First Flush Green Tea Leaves'],
    tastingNotes: 'Crisp orchid, fresh bamboo, soothing vegetal sweetness.'
  },
  {
    id: 'tea-peach',
    name: 'Iced Peach & Mint Oolong',
    category: 'Tea',
    price: 220,
    shortDescription: 'Cold-steeped roasted oolong with white peach puree and garden mint.',
    description: 'Refreshing and revitalizing. Fragrant roasted oolong tea shaken with natural peach nectar, crushed garden mint, and crushed ice.',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
    prepTime: '4 mins',
    calories: '90 kcal',
    ingredients: ['Roasted Oolong Tea', 'Peach Puree', 'Garden Mint', 'Lemon Twist'],
    tastingNotes: 'Juicy summer peach, gentle roasted tea depth, cool mint finish.'
  },
  {
    id: 'tea-lemongrass',
    name: 'Wild Lemongrass & Ginger Tisane',
    category: 'Tea',
    price: 190,
    shortDescription: 'Caffeine-free herbal blend with wild honey and zesty sun-dried lemongrass.',
    description: 'A restorative herbal brew made with wild Himalayan lemongrass stalks, spicy fresh ginger root, and organic cliff honey on the side.',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
    prepTime: '5 mins',
    calories: '35 kcal',
    ingredients: ['Fresh Lemongrass', 'Crushed Ginger', 'Organic Honey'],
    tastingNotes: 'Zesty lemon, warming ginger heat, comforting floral honey.'
  },

  // BREAKFAST
  {
    id: 'b-avotoast',
    name: 'Avocado & Poached Egg Toast',
    category: 'Breakfast',
    price: 420,
    shortDescription: 'Creamy smashed avocado, two soft poached eggs, chili flakes on sourdough.',
    description: 'Toasted artisanal country sourdough topped with lemon-infused smashed avocado, two perfectly poached farm-fresh eggs, baby radish, and dukkah seed crunch.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
    isChefSpecial: true,
    isVegetarian: true,
    prepTime: '10 - 12 mins',
    calories: '430 kcal',
    ingredients: ['House Sourdough', 'Ripe Hass Avocado', 'Farm Poached Eggs', 'Egyptian Dukkah', 'Extra Virgin Olive Oil'],
    tastingNotes: 'Velvety egg yolk, bright citrus avocado, nutty toasted crust.'
  },
  {
    id: 'b-pancakes',
    name: 'Fluffy Banana & Berry Pancakes',
    category: 'Breakfast',
    price: 340,
    shortDescription: 'Golden buttermilk pancake stack with caramelized bananas and maple butter.',
    description: 'Three tall, fluffy buttermilk pancakes stacked with sweet caramelized mountain bananas, fresh seasonal berries, toasted pecans, and pure maple syrup.',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
    prepTime: '12 mins',
    calories: '490 kcal',
    ingredients: ['Cultured Buttermilk', 'Farm Eggs', 'Caramelized Bananas', 'Fresh Berries', 'Canadian Maple Butter'],
    tastingNotes: 'Pillow-soft, buttery, sweet caramel and tart berry accents.'
  },
  {
    id: 'b-shakshuka',
    name: 'Spiced Tomato & Feta Shakshuka',
    category: 'Breakfast',
    price: 380,
    shortDescription: 'Eggs gently baked in rich spiced bell pepper and tomato ragù with feta.',
    description: 'Served sizzling in an iron skillet. Two farm eggs nestled in a simmered sauce of San Marzano tomatoes, roasted bell peppers, cumin, paprika, and crumbled feta with crusty sourdough bread.',
    image: 'https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
    prepTime: '15 mins',
    calories: '410 kcal',
    ingredients: ['San Marzano Tomatoes', 'Roasted Peppers', 'Farm Eggs', 'Greek Feta', 'Warm Sourdough Toast'],
    tastingNotes: 'Smoky, tangy, rich savory warmth with herbaceous finish.'
  },
  {
    id: 'b-granola',
    name: 'Granola & Greek Yogurt Bowl',
    category: 'Breakfast',
    price: 310,
    shortDescription: 'House-toasted oats, organic honey, Greek yogurt, chia seeds & fresh kiwi.',
    description: 'Creamy thick strained Greek yogurt layered with our house-baked maple pecan granola, chia seed pudding, fresh kiwi slices, and a drizzle of local raw honey.',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
    prepTime: '5 mins',
    calories: '320 kcal',
    ingredients: ['Strained Greek Yogurt', 'Oat & Nut Granola', 'Organic Honey', 'Fresh Kiwi & Strawberries'],
    tastingNotes: 'Crisp crunch, tangy creaminess, vibrant fresh fruit.'
  },

  // SNACKS
  {
    id: 'special-sandwich-snack',
    name: 'Chicken Cheese Sandwich',
    category: 'Snacks',
    price: 350,
    shortDescription: 'Herb grilled chicken breast, melted cheddar, caramelized onions on sourdough.',
    description: 'Tender chicken breast marinated in herbs, sharp cheddar, melted mozzarella, caramelized onions, house basil aioli on thick sourdough with crisp potato wedges.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    isSpecial: true,
    isPopular: true,
    prepTime: '12 - 15 mins',
    calories: '540 kcal',
    ingredients: ['Grilled Chicken Breast', 'Aged Cheddar', 'Mozzarella', 'Sourdough Bread', 'Seasoned Wedges'],
    tastingNotes: 'Gooey, savory, herb-infused golden toast.'
  },
  {
    id: 'snack-bruschetta',
    name: 'Truffle & Wild Mushroom Bruschetta',
    category: 'Snacks',
    price: 320,
    shortDescription: 'Sautéed forest mushrooms, white truffle oil, shaved parmesan on garlic bread.',
    description: 'Slices of toasted artisan baguette rubbed with confit garlic, piled high with button and oyster mushrooms sautéed in thyme butter, finished with white truffle oil and parmesan.',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
    isChefSpecial: true,
    prepTime: '8 - 10 mins',
    calories: '310 kcal',
    ingredients: ['Oyster & Button Mushrooms', 'White Truffle Oil', 'Shaved Grana Padano', 'Toasted Baguette'],
    tastingNotes: 'Earthy, fragrant truffle, crispy garlic crunch.'
  },
  {
    id: 'snack-fries',
    name: 'Crispy Peri-Peri Handcut Fries',
    category: 'Snacks',
    price: 210,
    shortDescription: 'Skin-on local potato fries tossed in zesty peri-peri dust with smoked mayo.',
    description: 'Double-fried hand-cut local potatoes tossed in our proprietary chili-lime peri-peri seasoning. Served piping hot with smoked paprika dipping mayo.',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
    prepTime: '8 mins',
    calories: '340 kcal',
    ingredients: ['Local Potatoes', 'House Peri-Peri Blend', 'Smoked Paprika Dip'],
    tastingNotes: 'Extra crispy exterior, fluffy interior, zesty kick.'
  },
  {
    id: 'snack-paneer-wrap',
    name: 'Grilled Paneer & Basil Pesto Wrap',
    category: 'Snacks',
    price: 330,
    shortDescription: 'Tender paneer cubes, sweet peppers, house pine nut pesto in a toasted tortilla.',
    description: 'Charred cubes of fresh dairy paneer tossed in aromatic basil pesto, crisp bell peppers, pickled red onions, and mozzarella wrapped tightly and grilled to golden perfection.',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
    prepTime: '10 mins',
    calories: '420 kcal',
    ingredients: ['Fresh Paneer', 'Basil Pine Nut Pesto', 'Bell Peppers', 'Tortilla Flatbread'],
    tastingNotes: 'Creamy cheese, herbaceous pesto aroma, charred flatbread.'
  },

  // MAIN COURSE
  {
    id: 'main-burger',
    name: 'Urban Brew Smash Burger',
    category: 'Main Course',
    price: 490,
    shortDescription: 'Double smashed beef/chicken patty, secret burger glaze, cheddar on brioche.',
    description: 'Two crispy-edged smashed patties with melted double cheddar, sweet dill pickles, crispy shredded lettuce, and our house secret café burger sauce inside a butter-toasted brioche bun. Served with golden wedges.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
    isChefSpecial: true,
    prepTime: '15 - 18 mins',
    calories: '680 kcal',
    ingredients: ['Fresh Ground Patty', 'Cheddar Cheese', 'Brioche Bun', 'Dill Pickles', 'House Secret Sauce', 'Seasoned Wedges'],
    tastingNotes: 'Juicy, savory umami bomb, caramelized crust, melt-in-mouth cheddar.'
  },
  {
    id: 'main-pasta',
    name: 'Creamy Tuscan Chicken Fettuccine',
    category: 'Main Course',
    price: 520,
    shortDescription: 'Fresh egg fettuccine, pan-seared chicken, sun-dried tomatoes, and baby spinach.',
    description: 'Al dente fettuccine ribbons tossed in a rich garlic cream sauce with sun-dried Italian tomatoes, tender herb-seared chicken slices, baby spinach, and aged parmesan cheese.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d628169e?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
    prepTime: '16 mins',
    calories: '620 kcal',
    ingredients: ['Fettuccine', 'Herb Chicken', 'Sun-dried Tomatoes', 'Heavy Cream', 'Aged Parmesan', 'Baby Spinach'],
    tastingNotes: 'Silky, creamy, garlic depth with sweet sun-dried tomato bursts.'
  },
  {
    id: 'main-trout',
    name: 'Pan-Seared Himalayan River Trout',
    category: 'Main Course',
    price: 620,
    shortDescription: 'Fresh Trisuli trout fillet with lemon caper butter, roasted baby potatoes & greens.',
    description: 'Locally sourced fresh river trout with crispy skin, basted in brown lemon-caper butter sauce, accompanied by thyme-roasted baby potatoes and charred seasonal garden greens.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    isChefSpecial: true,
    prepTime: '20 mins',
    calories: '530 kcal',
    ingredients: ['Fresh Himalayan Trout', 'Lemon Caper Sauce', 'Roasted Baby Potatoes', 'Sautéed Garden Greens'],
    tastingNotes: 'Delicate flaky fish, golden crisp skin, zesty citrus butter.'
  },
  {
    id: 'main-risotto',
    name: 'Wild Forest Mushroom Risotto',
    category: 'Main Course',
    price: 480,
    shortDescription: 'Arborio rice slow-cooked in vegetable broth with porcini, parmesan & herbs.',
    description: 'Creamy slow-simmered Arborio rice with a medley of wild forest and shiitake mushrooms, deglazed with white grape reduction, finished with creamy butter and grated Parmigiano-Reggiano.',
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
    prepTime: '18 mins',
    calories: '490 kcal',
    ingredients: ['Arborio Rice', 'Wild Porcini & Shiitake', 'Parmesan', 'Fresh Thyme', 'Vegetable Stock'],
    tastingNotes: 'Deep umami richness, creamy grain texture, aromatic earthiness.'
  },

  // DESSERTS
  {
    id: 'special-brownie-dessert',
    name: 'Chocolate Brownie',
    category: 'Desserts',
    price: 250,
    shortDescription: 'Warm Belgian fudge dark chocolate brownie with roasted walnuts and vanilla bean gelato.',
    description: 'Baked fresh every morning in our open kitchen. Dense 70% dark Belgian chocolate brownie loaded with roasted walnuts, served warm with a molten center and accompanied by a scoop of artisanal vanilla bean gelato.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    isSpecial: true,
    isPopular: true,
    isChefSpecial: true,
    isVegetarian: true,
    prepTime: '6 - 8 mins',
    calories: '420 kcal',
    ingredients: ['70% Belgian Dark Chocolate', 'Roasted Walnuts', 'Cultured Butter', 'Vanilla Bean Gelato'],
    tastingNotes: 'Fudge center, bittersweet chocolate warmth, cooling vanilla gelato.'
  },
  {
    id: 'dessert-cheesecake',
    name: 'Classic New York Baked Cheesecake',
    category: 'Desserts',
    price: 360,
    shortDescription: 'Velvety baked cream cheese with buttery graham crust and wild berry compote.',
    description: 'Slow-baked New York style cheesecake with a dense, silky cream cheese filling, toasted graham cracker base, and crowned with a tart forest berry reduction.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
    isPopular: true,
    prepTime: '5 mins',
    calories: '390 kcal',
    ingredients: ['Philadelphia Cream Cheese', 'Graham Cracker Crust', 'Organic Berry Compote'],
    tastingNotes: 'Tangy, rich creaminess with buttery crumble and tart berry swirl.'
  },
  {
    id: 'dessert-tiramisu',
    name: 'Tiramisu Della Casa',
    category: 'Desserts',
    price: 380,
    shortDescription: 'Espresso-soaked ladyfingers, whipped mascarpone cream & Valrhona cocoa.',
    description: 'Layered Italian classic made with savoiardi ladyfingers soaked in our freshly pulled espresso, velvety whipped egg yolk and mascarpone mousse, generously dusted with cocoa.',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
    isChefSpecial: true,
    isVegetarian: true,
    prepTime: '5 mins',
    calories: '410 kcal',
    ingredients: ['Urban Brew Espresso', 'Italian Savoiardi', 'Mascarpone Cream', 'Valrhona Cocoa Powder'],
    tastingNotes: 'Delicate coffee soak, cloud-like cream, bittersweet cocoa finish.'
  },
  {
    id: 'dessert-apple-crumble',
    name: 'Warm Cinnamon Apple Crumble',
    category: 'Desserts',
    price: 290,
    shortDescription: 'Spiced Mustang apples baked under a golden oat crumble with vanilla custard.',
    description: 'Fresh apples from Mustang orchards stewed with cinnamon and brown sugar, topped with an oat-almond butter crumble and served piping warm with velvety pouring custard.',
    image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
    prepTime: '8 mins',
    calories: '350 kcal',
    ingredients: ['Mustang Apples', 'Cinnamon Spice', 'Rolled Oats & Almond Crumble', 'Vanilla Custard'],
    tastingNotes: 'Tender spiced fruit, crunchy sweet topping, warm comfort.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Artisan Latte Art Craft',
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=85',
    caption: 'Our certified baristas pour every cup with meticulous precision.'
  },
  {
    id: 'gal-2',
    title: 'Sunlit Indoor Garden Lounge',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=85',
    caption: 'A quiet, sun-drenched sanctuary nestled in the heart of Lazimpat.'
  },
  {
    id: 'gal-3',
    title: 'Avocado Toast & Brunch Spread',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=85',
    caption: 'Made from scratch every morning using seasonal organic produce.'
  },
  {
    id: 'gal-4',
    title: 'Handcrafted Chocolate Brownie',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=85',
    caption: 'Warm Belgian fudge brownie paired with artisanal gelato.'
  },
  {
    id: 'gal-5',
    title: 'Slow Drip V60 Pour Over',
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1000&q=85',
    caption: 'Unlocking single-origin tasting profiles through manual pour over brewing.'
  },
  {
    id: 'gal-6',
    title: 'Outdoor Garden Courtyard',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1000&q=85',
    caption: 'Lush greenery, fresh breeze, and comfortable seating for relaxed afternoons.'
  },
  {
    id: 'gal-7',
    title: 'Artisan Chicken Cheese Sourdough',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1000&q=85',
    caption: 'Crisp pressed sandwich with gooey melted Himalayan cheddar.'
  },
  {
    id: 'gal-8',
    title: 'Signature Espresso Extraction',
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=85',
    caption: 'Freshly roasted beans ground moments before extraction.'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Anuj Shrestha',
    role: 'Freelance Architect & Remote Worker',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '2 days ago',
    comment: 'The ambiance at Urban Brew is truly unmatched in Kathmandu. Reliable Wi-Fi, peaceful acoustics, and by far the best flat white in the valley. It has become my default creative sanctuary.',
    tag: 'Remote Work & Coffee'
  },
  {
    id: 'rev-2',
    name: 'Maya Adhikari',
    role: 'Food & Lifestyle Photographer',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '1 week ago',
    comment: 'Their Chicken Cheese Sandwich on house sourdough is phenomenal! Perfectly toasted with real cheddar, and the warm chocolate brownie with gelato was heavenly. The presentation is so camera-ready.',
    tag: 'Brunch & Desserts'
  },
  {
    id: 'rev-3',
    name: 'Pradeep Maharjan',
    role: 'Specialty Coffee Enthusiast',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '3 weeks ago',
    comment: 'As a home barista, I am very critical of espresso extraction. Urban Brew consistently nails the balance of bright fruitiness and velvety chocolate finish. The baristas know their craft intimately.',
    tag: 'Espresso Bar'
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'why-fresh',
    title: 'Fresh Ingredients',
    description: 'We source daily from organic Himalayan valleys, smallholder farmers, and artisanal bakeries for wholesome plates.',
    badge: 'Farm to Fork'
  },
  {
    id: 'why-coffee',
    title: 'Premium Coffee',
    description: '100% specialty grade Arabica roasted in precision small batches, dialed in daily to deliver pure aromatic perfection.',
    badge: '100% Arabica'
  },
  {
    id: 'why-cozy',
    title: 'Cozy Atmosphere',
    description: 'Thoughtfully designed interior with natural sunlit wood, lush garden courtyard, ergonomic corners, and warm soothing jazz.',
    badge: 'Sanctuary'
  },
  {
    id: 'why-service',
    title: 'Friendly Service',
    description: 'Warm Nepali hospitality delivered by passionate certified baristas and culinary staff who love making your day brighter.',
    badge: 'Heartfelt Care'
  }
];
