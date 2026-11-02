export type Category = 'Espresso' | 'Manual Brew' | 'Pastries' | 'Main Course';
export type MenuItem = { name: string; price: number; notes: string; image: string; alt: string; badge?: string };
export const categories: Category[] = ['Espresso', 'Manual Brew', 'Pastries', 'Main Course'];
export const menu: Record<Category, MenuItem[]> = {
  Espresso: [
    { name: 'Ruang Latte', price: 38, notes: 'Our house blend, fresh milk. Comfort in a cup.', image: 'latte', alt: 'Fresh latte with delicate leaf-shaped latte art', badge: 'Must try' },
    { name: 'Iced Aren Latte', price: 40, notes: 'Double espresso, palm sugar, a little nostalgia.', image: 'iced', alt: 'Iced coffee served in a clear glass', badge: 'Local favorite' },
    { name: 'Espresso Tonic', price: 42, notes: 'Bright espresso, tonic water, a twist of citrus.', image: 'tonic', alt: 'Refreshing espresso and citrus over ice' },
  ],
  'Manual Brew': [
    { name: 'V60 · Gayo Natural', price: 45, notes: 'Aceh single origin. Red berries, cacao, sweet finish.', image: 'brew', alt: 'Carefully prepared pour-over coffee', badge: 'Must try' },
    { name: 'Japanese Iced Filter', price: 45, notes: 'Brewed hot over ice. Floral, crisp, beautifully clear.', image: 'iced', alt: 'Iced filter coffee in a glass' },
    { name: 'Daily Batch Brew', price: 32, notes: 'A rotating Indonesian origin. Ask what’s brewing.', image: 'latte', alt: 'Freshly brewed coffee on a café table' },
  ],
  Pastries: [
    { name: 'Almond Croissant', price: 36, notes: 'Golden layers, almond cream, toasted flakes.', image: 'pastry', alt: 'Golden flaky croissant on a ceramic plate', badge: 'Must try' },
    { name: 'Pain au Chocolat', price: 34, notes: 'Cultured butter, dark chocolate, baked every morning.', image: 'pastry', alt: 'Fresh butter pastry with crisp golden layers' },
    { name: 'Banana Bread', price: 32, notes: 'Ripe banana, warm spice, a generous slice.', image: 'food', alt: 'A comforting café breakfast served on ceramic' },
  ],
  'Main Course': [
    { name: 'Ruang Breakfast', price: 68, notes: 'Sourdough, soft eggs, seasonal greens. Take your time.', image: 'food', alt: 'Breakfast toast topped with eggs and fresh greens', badge: 'Must try' },
    { name: 'Mushroom Toast', price: 62, notes: 'Sautéed mushrooms, herbed cream, toasted sourdough.', image: 'food', alt: 'Artisan toast with seasonal ingredients' },
    { name: 'Slow Morning Bowl', price: 58, notes: 'Seasonal fruit, house granola, thick yogurt.', image: 'bowl', alt: 'Colorful breakfast bowl with fresh fruit' },
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
    { day: 'Monday', opens: 8, closes: 22 }, { day: 'Tuesday', opens: 8, closes: 22 },
    { day: 'Wednesday', opens: 8, closes: 22 }, { day: 'Thursday', opens: 8, closes: 22 },
    { day: 'Friday', opens: 8, closes: 22 }, { day: 'Saturday', opens: 8, closes: 22 },
    { day: 'Sunday', opens: 8, closes: 22 },
  ],
};
export const formatPrice = (price: number) => `Rp ${price}.000`;
