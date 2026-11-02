export type Category = 'Signatures' | 'Espresso' | 'Manual Brew' | 'Pastries' | 'Main Course';
export type MenuItem = { name: string; price: number | null; notes: string; image: string; alt: string; badge?: string; tone?: 'rose' | 'brown' | 'cream'; illustrative?: boolean };
export const categories: Category[] = ['Signatures', 'Espresso', 'Manual Brew', 'Pastries', 'Main Course'];
export const menu: Record<Category, MenuItem[]> = {
  Signatures: [
    { name: 'Coconut Coffee', price: 25, notes: 'Rich coffee meets pure coconut. Clean, smooth, a little tropical.', image: 'iced', alt: 'Illustrative iced coconut coffee in a clear glass', badge: 'A tropical favorite', tone: 'brown' },
    { name: 'Rose Americano', price: 25, notes: 'A smooth coffee with a floral twist. Your usual, with a little romance.', image: 'tonic', alt: 'Illustrative cold coffee served in a glass', badge: 'Something unexpected', tone: 'rose' },
    { name: 'Black Coffee', price: 20, notes: 'Bold aroma. A clean finish. Sometimes simple says it best.', image: 'brew', alt: 'Freshly brewed black coffee', badge: 'The daily ritual', tone: 'cream' },
    { name: 'Gula Aren Latte', price: null, notes: 'Espresso, creamy milk, and the warm sweetness of palm sugar.', image: 'latte', alt: 'Illustrative creamy latte', tone: 'brown' },
    { name: 'Pistachio Latte', price: null, notes: 'Nutty, creamy, and wonderfully smooth. A new kind of coffee crush.', image: 'latte', alt: 'Illustrative milk coffee with latte art', tone: 'cream' },
    { name: 'Green Tea Espresso', price: null, notes: 'Earthy green tea meets a bold shot of espresso. Unexpectedly refreshing.', image: 'iced', alt: 'Illustrative iced drink in a café glass', tone: 'cream' },
  ],
  Espresso: [
    { name: 'Biki Latte', price: 38, notes: 'Our house blend, fresh milk. Comfort in a cup.', image: 'latte', alt: 'Fresh latte with delicate leaf-shaped latte art', badge: 'Must try', illustrative: true },
    { name: 'Iced Aren Latte', price: 40, notes: 'Double espresso, palm sugar, a little nostalgia.', image: 'iced', alt: 'Iced coffee served in a clear glass', badge: 'Local favorite', illustrative: true },
    { name: 'Espresso Tonic', price: 42, notes: 'Bright espresso, tonic water, a twist of citrus.', image: 'tonic', alt: 'Refreshing espresso and citrus over ice', illustrative: true },
  ],
  'Manual Brew': [
    { name: 'V60 · Gayo Natural', price: 45, notes: 'Aceh single origin. Red berries, cacao, sweet finish.', image: 'brew', alt: 'Carefully prepared pour-over coffee', badge: 'Must try', illustrative: true },
    { name: 'Japanese Iced Filter', price: 45, notes: 'Brewed hot over ice. Floral, crisp, beautifully clear.', image: 'iced', alt: 'Iced filter coffee in a glass', illustrative: true },
    { name: 'Daily Batch Brew', price: 32, notes: 'A rotating Indonesian origin. Ask what’s brewing.', image: 'latte', alt: 'Freshly brewed coffee on a café table', illustrative: true },
  ],
  Pastries: [
    { name: 'Almond Croissant', price: 36, notes: 'Golden layers, almond cream, toasted flakes.', image: 'pastry', alt: 'Golden flaky croissant on a ceramic plate', badge: 'Must try', illustrative: true },
    { name: 'Pain au Chocolat', price: 34, notes: 'Cultured butter, dark chocolate, baked every morning.', image: 'pastry', alt: 'Fresh butter pastry with crisp golden layers', illustrative: true },
    { name: 'Banana Bread', price: 32, notes: 'Ripe banana, warm spice, a generous slice.', image: 'food', alt: 'A comforting café breakfast served on ceramic', illustrative: true },
  ],
  'Main Course': [
    { name: 'Biki Breakfast', price: 68, notes: 'Sourdough, soft eggs, seasonal greens. Take your time.', image: 'food', alt: 'Breakfast toast topped with eggs and fresh greens', badge: 'Must try', illustrative: true },
    { name: 'Mushroom Toast', price: 62, notes: 'Sautéed mushrooms, herbed cream, toasted sourdough.', image: 'food', alt: 'Artisan toast with seasonal ingredients', illustrative: true },
    { name: 'Slow Morning Bowl', price: 58, notes: 'Seasonal fruit, house granola, thick yogurt.', image: 'bowl', alt: 'Colorful breakfast bowl with fresh fruit', illustrative: true },
  ],
};

// Replace these illustrative business details before a public launch.
// Keep personal credentials out of the frontend. A public business number is sufficient.
export const cafe = {
  demo: true,
  whatsapp: null as string | null, // e.g. international digits, without + or spaces
  phone: null as string | null,
  neighborhood: 'Jakarta Creative Zone, Jl. Jenderal Sudirman',
  timezone: 'Asia/Jakarta',
  mapsUrl: 'https://www.google.com/maps/place/Biki+Coffee/@-6.2036223,106.8228471,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f5d24748150b:0xf698e706b0cb8573!8m2!3d-6.2036223!4d106.8228471!16s%2Fg%2F11msl7tp_j',
  mapEmbedUrl: 'https://maps.google.com/maps?q=-6.2036223,106.8228471&z=17&output=embed',
  hours: [
    { day: 'Monday', opens: 6, closes: 20 }, { day: 'Tuesday', opens: 6, closes: 20 },
    { day: 'Wednesday', opens: 6, closes: 20 }, { day: 'Thursday', opens: 6, closes: 20 },
    { day: 'Friday', opens: 6, closes: 20 }, { day: 'Saturday', opens: 6, closes: 18 },
    { day: 'Sunday', opens: 5.5, closes: 18 },
  ],
};
export const formatPrice = (price: number | null) => price === null ? 'Ask our team' : `Rp ${price}.000`;
export const formatHour = (hour: number) => `${String(Math.floor(hour)).padStart(2, '0')}:${hour % 1 ? '30' : '00'}`;
