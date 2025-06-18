import p_img1_1 from './p_img1_1.png'
import p_img1_2 from './p_img1_2.png'
import p_img1_3 from './p_img1_3.png'
import p_img1_4 from './p_img1_4.png'
import p_img2_1 from './p_img2_1.png'
import p_img2_2 from './p_img2_2.png'
import p_img2_3 from './p_img2_3.png'
import p_img2_4 from './p_img2_4.png'
import p_img3_1 from './p_img3_1.png'
import p_img3_3 from './p_img3_3.png'
import p_img4_1 from './p_img4_1.png'
import p_img4_2 from './p_img4_2.png'
import p_img5_1 from './p_img5_1.png'
import p_img5_2 from './p_img5_2.png'
import p_img6_1 from './p_img6_1.png'
import p_img6_2 from './p_img6_2.png'
import p_img7_1 from './p_img7_1.png'
import p_img7_2 from './p_img7_2.png'
import p_img8_1 from './p_img8_1.png'
import p_img8_2 from './p_img8_2.png'
import p_img8_3 from './p_img8_3.png'
import p_img9_1 from './p_img9_1.png'
import p_img9_2 from './p_img9_2.png'
import p_img10_1 from './p_img10_1.png'
import p_img10_2 from './p_img10_2.png'
import p_img11_1 from './p_img11_1.png'
import p_img11_2 from './p_img11_2.png'
import p_img11_3 from './p_img11_3.png'
import p_img12_1 from './p_img12_1.png'
import p_img12_2 from './p_img12_2.png'
import p_img12_3 from './p_img12_3.png'
import p_img13_1 from './p_img13_1.png'
import p_img13_2 from './p_img13_2.png'
import p_img14_1 from './p_img14_1.png'
import p_img14_2 from './p_img14_2.png'
import p_img14_3 from './p_img14_3.png'
import p_img15_1 from './p_img15_1.png'
import p_img15_2 from './p_img15_2.png'
import p_img15_3 from './p_img15_3.png'
import p_img16_1 from './p_img16_1.png'
import p_img16_2 from './p_img16_2.png'
import p_img17 from './p_img17.png'
import p_img18 from './p_img18.png'
import p_img19 from './p_img19.png'
import p_img20 from './p_img20.png'
import p_img21 from './p_img21.png'
import p_img22 from './p_img22.png'
import p_img23 from './p_img23.png'
import p_img24 from './p_img24.png'
import p_img25 from './p_img25.png'
import p_img26 from './p_img26.png'
import p_img27 from './p_img27.png'
import p_img28 from './p_img28.png'
import p_img29 from './p_img29.png'
import p_img30 from './p_img30.png'
import p_img31 from './p_img31.png'
import p_img32 from './p_img32.png'
import p_img33 from './p_img33.png'
import p_img34 from './p_img34.png'
import p_img35 from './p_img35.png'
import p_img36 from './p_img36.png'
import p_img37 from './p_img37.png'
import p_img38 from './p_img38.png'
import p_img39 from './p_img39.png'
import p_img40 from './p_img40.png'


import logo from './logo.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}



export const products = [
    {
        _id: "aaaaa",
        name: "Herbal Anti-Dandruff Shampoo",
        description: "A refreshing shampoo infused with herbal extracts to combat dandruff and nourish the scalp, leaving hair soft and manageable.",
        ingredients: ["Aloe Vera", "Neem Extract", "Tea Tree Oil", "Rosemary", "Lemon Extract"],
        benefits: ["Fights dandruff", "Soothes itchy scalp", "Strengthens hair roots", "Adds shine"],
        stockStatus: "In Stock",
        price: { S: { value: 12, display: "12.00" }, M: { value: 30, display: "30.00" }, L: { value: 51, display: "51.00" }, XL: { value: 100, display: "100.00" } },
        image: [p_img1_1, p_img1_2, p_img1_3, p_img1_4],
        category: "Shampoo",
        subCategory: "Haircare",
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Men Volumizing Shampoo",
        description: "A specially formulated shampoo for men to add volume and strength to hair, with a refreshing scent.",
        ingredients: ["Biotin", "Caffeine", "Peppermint Oil", "Saw Palmetto", "Keratin"],
        benefits: ["Adds volume", "Reduces thinning", "Stimulates hair growth", "Refreshes scalp"],
        stockStatus: "In Stock",
        price: { S: { value: 12, display: "12.00" }, M: { value: 19, display: "19.00" }, L: { value: 37, display: "37.00" }, XL: { value: 90, display: "90.00" } },
        image: [p_img2_1, p_img2_2, p_img2_3, p_img2_4],
        category: "Shampoo",
        subCategory: "Haircare",
        date: 1716621345448,
        bestseller: false
    },
    {
        _id: "aaaac",
        name: "Kids Gentle Shampoo",
        description: "A mild, tear-free shampoo for kids, enriched with natural ingredients to keep hair soft and tangle-free.",
        ingredients: ["Chamomile", "Oat Extract", "Coconut Oil", "Aloe Vera", "Vitamin E"],
        benefits: ["Tear-free formula", "Gentle cleansing", "Reduces tangles", "Safe for daily use"],
        stockStatus: "In Stock",
        price: { S: { value: 14, display: "14.00" }, M: { value: 23, display: "23.00" }, L: { value: 47, display: "47.00" }, XL: { value: 81, display: "81.00" } },
        image: [p_img3_1, p_img3_3],
        category: "Shampoo",
        subCategory: "Haircare",
        date: 1716234545448,
        bestseller: false
    },
    {
        _id: "aaaad",
        name: "Men Anti-Hairfall Shampoo",
        description: "A powerful shampoo designed for men to reduce hair fall and strengthen hair roots with natural extracts.",
        ingredients: ["Biotin", "Niacin", "Ginseng Extract", "Horsetail Plant", "Argan Oil"],
        benefits: ["Reduces hair fall", "Strengthens roots", "Improves hair density", "Nourishes scalp"],
        stockStatus: "In Stock",
        price: { S: { value: 17, display: "17.00" }, M: { value: 29, display: "29.00" }, L: { value: 90, display: "90.00" }, XL: { value: 130, display: "130.00" } },
        image: [p_img4_1, p_img4_2],
        category: "Shampoo",
        subCategory: "Haircare",
        date: 1716621345448,
        bestseller: false
    },
    {
        _id: "aaaae",
        name: "Women Moisturizing Shampoo",
        description: "A hydrating shampoo for women, infused with essential oils to restore moisture and shine to dry hair.",
        ingredients: ["Argan Oil", "Shea Butter", "Jojoba Oil", "Avocado Oil", "Vitamin B5"],
        benefits: ["Deep hydration", "Reduces frizz", "Adds shine", "Repairs damage"],
        stockStatus: "In Stock",
        price: { S: { value: 22, display: "22.00" }, M: { value: 49, display: "49.00" }, L: { value: 80, display: "80.00" }, XL: { value: 140, display: "140.00" } },
        image: [p_img5_1, p_img5_2],
        category: "Shampoo",
        subCategory: "Haircare",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaaf",
        name: "Kids Bubble Shampoo",
        description: "A fun, bubble-filled shampoo for kids, gentle on the scalp and infused with a fruity fragrance.",
        ingredients: ["Glycerin", "Aloe Vera", "Vitamin E", "Natural Fruit Extracts", "Chamomile"],
        benefits: ["Fun bubble formula", "Gentle cleansing", "Tear-free", "Pleasant fragrance"],
        stockStatus: "In Stock",
        price: { S: { value: 25, display: "25.00" }, M: { value: 50, display: "50.00" }, L: { value: 77, display: "77.00" }, XL: { value: 140, display: "140.00" } },
        image: [p_img6_1, p_img6_2],
        category: "Shampoo",
        subCategory: "Haircare",
        date: 1716623423448,
        bestseller: false
    },
    {
        _id: "aaaag",
        name: "Men Deep Cleansing Shampoo",
        description: "A deep-cleansing shampoo for men, designed to remove excess oil and impurities while keeping hair fresh.",
        ingredients: ["Charcoal", "Tea Tree Oil", "Peppermint", "Salicylic Acid", "Witch Hazel"],
        benefits: ["Deep cleanses", "Controls oil", "Refreshes scalp", "Removes buildup"],
        stockStatus: "In Stock",
        price: { S: { value: 30, display: "30.00" }, M: { value: 53, display: "53.00" }, L: { value: 88, display: "88.00" }, XL: { value: 150, display: "150.00" } },
        image: [p_img7_1, p_img7_2],
        category: "Shampoo",
        subCategory: "Haircare",
        date: 1716621542448,
        bestseller: false
    },
    {
        _id: "aaaah",
        name: "Women Daily Use Shampoo",
        description: "A gentle daily-use shampoo for women, formulated to cleanse and refresh hair without stripping natural oils.",
        ingredients: ["Aloe Vera", "Green Tea Extract", "Chamomile", "Panthenol", "Rosemary Oil"],
        benefits: ["Mild cleansing", "Maintains moisture", "Suitable for daily use", "Adds shine"],
        stockStatus: "In Stock",
        price: { S: { value: 40, display: "40.00" }, M: { value: 60, display: "60.00" }, L: { value: 90, display: "90.00" }, XL: { value: 130, display: "130.00" } },
        image: [p_img8_1, p_img8_2, p_img8_3],
        category: "Shampoo",
        subCategory: "Haircare",
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaai",
        name: "Kids Nourishing Shampoo",
        description: "A nourishing shampoo for kids, enriched with vitamins to promote healthy hair growth and shine.",
        ingredients: ["Sweet Almond Oil", "Vitamin E", "Honey Extract", "Oat Protein", "Chamomile"],
        benefits: ["Nourishes hair", "Promotes growth", "Adds softness", "Gentle formula"],
        stockStatus: "In Stock",
        price: { S: { value: 45, display: "45.00" }, M: { value: 70, display: "70.00" }, L: { value: 95, display: "95.00" }, XL: { value: 128, display: "128.00" } },
        image: [p_img9_1, p_img9_2],
        category: "Shampoo",
        subCategory: "Haircare",
        date: 1716621235448,
        bestseller: false
    },
    {
        _id: "aaaaj",
        name: "Men Cooling Shampoo",
        description: "A cooling shampoo with menthol extracts, providing a refreshing sensation and clean scalp.",
        ingredients: ["Menthol", "Peppermint Oil", "Eucalyptus", "Tea Tree Oil", "Aloe Vera"],
        benefits: ["Cooling effect", "Soothes scalp", "Refreshes hair", "Controls oil"],
        stockStatus: "In Stock",
        price: { S: { value: 43, display: "43.00" }, M: { value: 69, display: "69.00" }, L: { value: 94, display: "94.00" }, XL: { value: 130, display: "130.00" } },
        image: [p_img10_1, p_img10_2],
        category: "Shampoo",
        subCategory: "Haircare",
        date: 1716622235448,
        bestseller: false
    },
    {
        _id: "aaaak",
        name: "Men Charcoal Soap",
        description: "A deep-cleansing charcoal soap for men, designed to remove dirt and impurities while keeping skin hydrated.",
        ingredients: ["Activated Charcoal", "Bentonite Clay", "Tea Tree Oil", "Aloe Vera", "Glycerin"],
        benefits: ["Deep cleansing", "Detoxifies skin", "Controls oil", "Prevents acne"],
        stockStatus: "In Stock",
        price: { S: { value: 23, display: "23.00" }, M: { value: 50, display: "50.00" }, L: { value: 90, display: "90.00" }, XL: { value: 160, display: "160.00" } },
        image: [p_img11_1, p_img11_2, p_img11_3],
        category: "Soap",
        subCategory: "Skincare",
        date: 1716623345448,
        bestseller: false
    },
    {
        _id: "aaaal",
        name: "Men Sandalwood Soap",
        description: "A luxurious sandalwood soap for men, providing a rich lather and a soothing fragrance for daily use.",
        ingredients: ["Sandalwood Oil", "Glycerin", "Almond Oil", "Coconut Oil", "Vitamin E"],
        benefits: ["Antiseptic properties", "Soothes skin", "Rich lather", "Aromatic fragrance"],
        stockStatus: "In Stock",
        price: { S: { value: 26, display: "26.00" }, M: { value: 59, display: "59.00" }, L: { value: 80, display: "80.00" }, XL: { value: 140, display: "140.00" } },
        image: [p_img12_1, p_img12_2, p_img12_3],
        category: "Soap",
        subCategory: "Skincare",
        date: 1716624445448,
        bestseller: true
    },
    {
        _id: "aaaam",
        name: "Women Rose Petal Soap",
        description: "A gentle rose petal soap for women, enriched with natural oils to moisturize and leave skin soft.",
        ingredients: ["Rose Extract", "Shea Butter", "Glycerin", "Almond Oil", "Vitamin E"],
        benefits: ["Moisturizes skin", "Antioxidant properties", "Calming fragrance", "Gentle cleansing"],
        stockStatus: "In Stock",
        price: { S: { value: 20, display: "20.00" }, M: { value: 48, display: "48.00" }, L: { value: 90, display: "90.00" }, XL: { value: 120, display: "120.00" } },
        image: [p_img13_1, p_img13_2],
        category: "Soap",
        subCategory: "Skincare",
        date: 1716625545448,
        bestseller: false
    },
    {
        _id: "aaaan",
        name: "Kids Strawberry Soap",
        description: "A fun strawberry-scented soap for kids, gentle on the skin and perfect for baths.",
        ingredients: ["Strawberry Extract", "Cocoa Butter", "Glycerin", "Aloe Vera", "Vitamin E"],
        benefits: ["Gentle cleansing", "Fun fragrance", "Moisturizes skin", "Tear-free formula"],
        stockStatus: "Low Stock",
        price: { S: { value: 23, display: "23.00" }, M: { value: 60, display: "60.00" }, L: { value: 91, display: "91.00" }, XL: { value: 160, display: "160.00" } },
        image: [p_img14_1, p_img14_2, p_img14_3],
        category: "Soap",
        subCategory: "Skincare",
        date: 1716626645448,
        bestseller: false
    },
    {
        _id: "aaaao",
        name: "Men Neem Soap",
        description: "A neem-infused soap for men, known for its antibacterial properties to keep skin clean and healthy.",
        ingredients: ["Neem Extract", "Turmeric", "Aloe Vera", "Glycerin", "Tea Tree Oil"],
        benefits: ["Antibacterial", "Treats acne", "Soothes irritation", "Purifies skin"],
        stockStatus: "In Stock",
        price: { S: { value: 30, display: "30.00" }, M: { value: 60, display: "60.00" }, L: { value: 90, display: "90.00" }, XL: { value: 130, display: "130.00" } },
        image: [p_img15_1, p_img15_2, p_img15_3],
        category: "Soap",
        subCategory: "Skincare",
        date: 1716627745448,
        bestseller: false
    },
    {
        _id: "aaaap",
        name: "Kids Bubblegum Soap",
        description: "A bubblegum-scented soap for kids, making bath time fun while gently cleansing the skin.",
        ingredients: ["Glycerin", "Coconut Oil", "Bubblegum Fragrance", "Aloe Vera", "Vitamin E"],
        benefits: ["Fun fragrance", "Gentle cleansing", "Moisturizes skin", "Encourages bathing"],
        stockStatus: "In Stock",
        price: { S: { value: 35, display: "35.00" }, M: { value: 70, display: "70.00" }, L: { value: 120, display: "120.00" }, XL: { value: 150, display: "150.00" } },
        image: [p_img16_1, p_img16_2],
        category: "Soap",
        subCategory: "Skincare",
        date: 1716628845448,
        bestseller: false
    },
    {
        _id: "aaaaq",
        name: "Men Turmeric Soap",
        description: "A turmeric soap for men, formulated to brighten skin and reduce blemishes with natural ingredients.",
        ingredients: ["Turmeric", "Sandalwood", "Aloe Vera", "Glycerin", "Lemon Extract"],
        benefits: ["Brightens skin", "Reduces blemishes", "Antioxidant properties", "Even skin tone"],
        stockStatus: "In Stock",
        price: { S: { value: 15, display: "15.00" }, M: { value: 55, display: "55.00" }, L: { value: 89, display: "89.00" }, XL: { value: 133, display: "133.00" } },
        image: [p_img17],
        category: "Soap",
        subCategory: "Skincare",
        date: 1716629945448,
        bestseller: false
    },
    {
        _id: "aaaar",
        name: "Kids Mango Soap",
        description: "A mango-scented soap for kids, enriched with moisturizing agents for soft and healthy skin.",
        ingredients: ["Mango Extract", "Shea Butter", "Glycerin", "Coconut Oil", "Vitamin E"],
        benefits: ["Moisturizes skin", "Pleasant fragrance", "Gentle formula", "Nourishes skin"],
        stockStatus: "In Stock",
        price: { S: { value: 43, display: "43.00" }, M: { value: 80, display: "80.00" }, L: { value: 110, display: "110.00" }, XL: { value: 160, display: "160.00" } },
        image: [p_img18],
        category: "Soap",
        subCategory: "Skincare",
        date: 1716631045448,
        bestseller: false
    },
    {
        _id: "aaaas",
        name: "Kids Orange Soap",
        description: "A citrusy orange soap for kids, gentle on the skin with a refreshing scent for daily use.",
        ingredients: ["Orange Extract", "Glycerin", "Aloe Vera", "Coconut Oil", "Vitamin C"],
        benefits: ["Refreshing scent", "Vitamin C boost", "Gentle cleansing", "Brightens skin"],
        stockStatus: "In Stock",
        price: { S: { value: 44, display: "44.00" }, M: { value: 67, display: "67.00" }, L: { value: 100, display: "100.00" }, XL: { value: 130, display: "130.00" } },
        image: [p_img19],
        category: "Soap",
        subCategory: "Skincare",
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaaat",
        name: "Women Lavender Soap",
        description: "A calming lavender soap for women, designed to cleanse and relax the skin with a soothing fragrance.",
        ingredients: ["Lavender Oil", "Shea Butter", "Glycerin", "Aloe Vera"],
        benefits: ["Calming fragrance", "Relaxes mind", "Moisturizes skin", "Antioxidant properties"],
        stockStatus: "In Stock",
        price: { S: { value: 23, display: "23.00" }, M: { value: 40, display: "40.00" }, L: { value: 70, display: "70.00" }, XL: { value: 130, display: "130.00" } },
        image: [p_img20],
        category: "Soap",
        subCategory: "Skincare",
        date: 1716633245448,
        bestseller: false
    },
    {
        _id: "aaaau",
        name: "Women Argan Hair Oil",
        description: "A nourishing argan oil for women, designed to strengthen hair, reduce frizz, and add a natural shine.",
        ingredients: ["100% Pure Argan Oil", "Vitamin E", "Essential Fatty Acids", "Antioxidants"],
        benefits: ["Reduces frizz", "Adds shine", "Repairs damage", "Protects from heat"],
        stockStatus: "In Stock",
        price: { S: { value: 25, display: "25.00" }, M: { value: 50, display: "50.00" }, L: { value: 120, display: "120.00" }, XL: { value: 130, display: "130.00" } },
        image: [p_img21],
        category: "Oil",
        subCategory: "Moisturizer",
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaav",
        name: "Women Coconut Body Oil",
        description: "A hydrating coconut body oil for women, perfect for moisturizing dry skin and leaving it soft and smooth.",
        ingredients: ["Virgin Coconut Oil", "Vitamin E", "Jojoba Oil", "Almond Oil"],
        benefits: ["Deep hydration", "Softens skin", "Improves elasticity", "Natural glow"],
        stockStatus: "In Stock",
        price: { S: { value: 30, display: "30.00" }, M: { value: 50, display: "50.00" }, L: { value: 90, display: "90.00" }, XL: { value: 130, display: "130.00" } },
        image: [p_img22],
        category: "Oil",
        subCategory: "Moisturizer",
        date: 1716635445448,
        bestseller: false
    },
    {
        _id: "aaaaw",
        name: "Kids Almond Hair Oil",
        description: "A gentle almond oil for kids, formulated to nourish hair and promote healthy growth with a mild scent.",
        ingredients: ["Sweet Almond Oil", "Vitamin E", "Jojoba Oil", "Rosemary Extract"],
        benefits: ["Promotes growth", "Reduces tangles", "Nourishes scalp", "Gentle formula"],
        stockStatus: "In Stock",
        price: { S: { value: 19, display: "19.00" }, M: { value: 50, display: "50.00" }, L: { value: 130, display: "130.00" }, XL: { value: 180, display: "180.00" } },
        image: [p_img23],
        category: "Oil",
        subCategory: "Moisturizer",
        date: 1716636545448,
        bestseller: false
    },
    {
        _id: "aaaax",
        name: "Kids Olive Body Oil",
        description: "A lightweight olive oil for kids, designed to moisturize and protect delicate skin with natural ingredients.",
        ingredients: ["Extra Virgin Olive Oil", "Vitamin E", "Chamomile Extract", "Aloe Vera"],
        benefits: ["Lightweight moisture", "Protects skin", "Soothes irritation", "Non-greasy"],
        stockStatus: "In Stock",
        price: { S: { value: 33, display: "33.00" }, M: { value: 50, display: "50.00" }, L: { value: 90, display: "90.00" }, XL: { value: 130, display: "130.00" } },
        image: [p_img24],
        category: "Oil",
        subCategory: "Moisturizer",
        date: 1716637645448,
        bestseller: false
    },
    {
        _id: "aaaay",
        name: "Kids Jojoba Hair Oil",
        description: "A nourishing jojoba oil for kids, perfect for keeping hair soft, shiny, and tangle-free.",
        ingredients: ["Pure Jojoba Oil", "Vitamin E", "Lavender Oil", "Chamomile Extract"],
        benefits: ["Mimics natural oils", "Reduces tangles", "Adds shine", "Lightweight"],
        stockStatus: "In Stock",
        price: { S: { value: 43, display: "43.00" }, M: { value: 50, display: "50.00" }, L: { value: 130, display: "130.00" }, XL: { value: 150, display: "150.00" } },
        image: [p_img25],
        category: "Oil",
        subCategory: "Moisturizer",
        date: 1716638745448,
        bestseller: false
    },
    {
        _id: "aaaaz",
        name: "Women Essential Oil Blend",
        description: "A calming blend of essential oils for women, ideal for relaxation and aromatherapy with a floral scent.",
        ingredients: ["Lavender Oil", "Chamomile Oil", "Ylang Ylang", "Bergamot", "Jojoba Carrier Oil"],
        benefits: ["Promotes relaxation", "Reduces stress", "Aromatherapy benefits", "Skin nourishment"],
        stockStatus: "In Stock",
        price: { S: { value: 20, display: "20.00" }, M: { value: 50, display: "50.00" }, L: { value: 140, display: "140.00" }, XL: { value: 150, display: "150.00" } },
        image: [p_img26],
        category: "Oil",
        subCategory: "Moisturizer",
        date: 1716639845448,
        bestseller: false
    },
    {
        _id: "aaaba",
        name: "Kids Castor Hair Oil",
        description: "A strengthening castor oil for kids, formulated to promote hair growth and thickness with a gentle touch.",
        ingredients: ["Cold-Pressed Castor Oil", "Almond Oil", "Vitamin E", "Rosemary Oil"],
        benefits: ["Strengthens hair", "Promotes growth", "Reduces breakage", "Conditions scalp"],
        stockStatus: "In Stock",
        price: { S: { value: 26, display: "26.00" }, M: { value: 50, display: "50.00" }, L: { value: 150, display: "150.00" }, XL: { value: 170, display: "170.00" } },
        image: [p_img27],
        category: "Oil",
        subCategory: "Moisturizer",
        date: 1716640945448,
        bestseller: false
    },
    {
        _id: "aaabb",
        name: "Men Beard Oil",
        description: "A nourishing beard oil for men, designed to soften facial hair and moisturize the skin underneath.",
        ingredients: ["Jojoba Oil", "Argan Oil", "Vitamin E", "Cedarwood Oil", "Peppermint Oil"],
        benefits: ["Softens beard", "Reduces itchiness", "Promotes growth", "Conditions skin"],
        stockStatus: "In Stock",
        price: { S: { value: 38, display: "38.00" }, M: { value: 50, display: "50.00" }, L: { value: 200, display: "200.00" }, XL: { value: 230, display: "230.00" } },
        image: [p_img28],
        category: "Oil",
        subCategory: "Moisturizer",
        date: 1716642045448,
        bestseller: false
    },
    {
        _id: "aaabc",
        name: "Women Almond Body Oil",
        description: "A rich almond body oil for women, perfect for deep hydration and leaving skin with a healthy glow.",
        ingredients: ["Sweet Almond Oil", "Vitamin E", "Rosehip Oil", "Jojoba Oil", "Lavender Oil"],
        benefits: ["Deep hydration", "Improves elasticity", "Reduces stretch marks", "Even skin tone"],
        stockStatus: "In Stock",
        price: { S: { value: 40, display: "40.00" }, M: { value: 50, display: "50.00" }, L: { value: 170, display: "170.00" }, XL: { value: 230, display: "230.00" } },
        image: [p_img29],
        category: "Oil",
        subCategory: "Moisturizer",
        date: 1716643145448,
        bestseller: false
    },
    {
        _id: "aaabd",
        name: "Kids Avocado Hair Oil",
        description: "A hydrating avocado oil for kids, formulated to nourish hair and scalp with a gentle, natural formula.",
        ingredients: ["Avocado Oil", "Jojoba Oil", "Vitamin E", "Chamomile Extract", "Aloe Vera"],
        benefits: ["Deep conditioning", "Repairs damage", "Adds shine", "Soothes scalp"],
        stockStatus: "In Stock",
        price: { S: { value: 23, display: "23.00" }, M: { value: 50, display: "50.00" }, L: { value: 180, display: "180.00" }, XL: { value: 200, display: "200.00" } },
        image: [p_img30],
        category: "Oil",
        subCategory: "Moisturizer",
        date: 1716644245448,
        bestseller: false
    },
    {
        _id: "aaabe",
        name: "Men Daily Moisturizing Cream",
        description: "A lightweight daily moisturizing cream for men, designed to hydrate and protect skin from dryness.",
        ingredients: ["Hyaluronic Acid", "Vitamin E", "Aloe Vera", "Green Tea Extract", "Glycerin"],
        benefits: ["Lightweight hydration", "Non-greasy", "Protects skin", "Quick absorption"],
        stockStatus: "In Stock",
        price: { S: { value: 33, display: "33.00" }, M: { value: 50, display: "50.00" }, L: { value: 120, display: "120.00" }, XL: { value: 130, display: "130.00" } },
        image: [p_img31],
        category: "Cream",
        subCategory: "Face Care",
        date: 1716645345448,
        bestseller: false
    },
    {
        _id: "aaabf",
        name: "Men Anti-Aging Cream",
        description: "An anti-aging cream for men, formulated to reduce fine lines and keep skin firm and youthful.",
        ingredients: ["Retinol", "Vitamin C", "Hyaluronic Acid", "Peptides", "Niacinamide"],
        benefits: ["Reduces wrinkles", "Firms skin", "Improves elasticity", "Brightens complexion"],
        stockStatus: "In Stock",
        price: { S: { value: 35, display: "35.00" }, M: { value: 50, display: "50.00" }, L: { value: 95, display: "95.00" }, XL: { value: 190, display: "190.00" } },
        image: [p_img32],
        category: "Cream",
        subCategory: "Face Care",
        date: 1716646445448,
        bestseller: true
    },
    {
        _id: "aaabg",
        name: "Kids Baby Cream",
        description: "A gentle baby cream for kids, enriched with natural ingredients to soothe and protect delicate skin.",
        ingredients: ["Zinc Oxide", "Calendula Extract", "Shea Butter", "Chamomile", "Aloe Vera"],
        benefits: ["Diaper rash prevention", "Soothes irritation", "Protects skin", "Gentle formula"],
        stockStatus: "In Stock",
        price: { S: { value: 30, display: "30.00" }, M: { value: 50, display: "50.00" }, L: { value: 90, display: "90.00" }, XL: { value: 130, display: "130.00" } },
        image: [p_img33],
        category: "Cream",
        subCategory: "Face Care",
        date: 1716647545448,
        bestseller: false
    },
    {
        _id: "aaabh",
        name: "Women Hydrating Day Cream",
        description: "A hydrating day cream for women, formulated with SPF to protect and moisturize skin all day.",
        ingredients: ["Hyaluronic Acid", "SPF 30", "Vitamin E", "Niacinamide", "Green Tea Extract"],
        benefits: ["Daily hydration", "Sun protection", "Brightens skin", "Lightweight"],
        stockStatus: "In Stock",
        price: { S: { value: 18, display: "18.00" }, M: { value: 50, display: "50.00" }, L: { value: 160, display: "160.00" }, XL: { value: 180, display: "180.00" } },
        image: [p_img34],
        category: "Cream",
        subCategory: "Face Care",
        date: 1716648645448,
        bestseller: false
    },
    {
        _id: "aaabi",
        name: "Women Night Repair Cream",
        description: "A nourishing night cream for women, designed to repair and rejuvenate skin while you sleep.",
        ingredients: ["Retinol", "Peptides", "Ceramides", "Niacinamide", "Hyaluronic Acid"],
        benefits: ["Overnight repair", "Boosts collagen", "Reduces fine lines", "Deep hydration"],
        stockStatus: "In Stock",
        price: { S: { value: 30, display: "30.00" }, M: { value: 50, display: "50.00" }, L: { value: 200, display: "200.00" }, XL: { value: 330, display: "330.00" } },
        image: [p_img35],
        category: "Cream",
        subCategory: "Face Care",
        date: 1716649745448,
        bestseller: false
    },
    {
        _id: "aaabj",
        name: "Women Brightening Cream",
        description: "A brightening cream for women, formulated to reduce dark spots and even out skin tone.",
        ingredients: ["Vitamin C", "Niacinamide", "Licorice Root Extract", "Alpha Arbutin", "Hyaluronic Acid"],
        benefits: ["Reduces dark spots", "Even skin tone", "Brightens complexion", "Hydrates skin"],
        stockStatus: "In Stock",
        price: { S: { value: 23, display: "23.00" }, M: { value: 50, display: "50.00" }, L: { value: 150, display: "150.00" }, XL: { value: 180, display: "180.00" } },
        image: [p_img36],
        category: "Cream",
        subCategory: "Face Care",
        date: 1716650845448,
        bestseller: true
    },
    {
        _id: "aaabk",
        name: "Women Anti-Wrinkle Cream",
        description: "An anti-wrinkle cream for women, designed to reduce fine lines and improve skin elasticity.",
        ingredients: ["Retinol", "Matrixyl", "Hyaluronic Acid", "Peptides", "Vitamin E"],
        benefits: ["Reduces wrinkles", "Firms skin", "Improves elasticity", "Hydrates deeply"],
        stockStatus: "In Stock",
        price: { S: { value: 33, display: "33.00" }, M: { value: 50, display: "50.00" }, L: { value: 120, display: "120.00" }, XL: { value: 130, display: "130.00" } },
        image: [p_img37],
        category: "Cream",
        subCategory: "Face Care",
        date: 1716651945448,
        bestseller: false
    },
    {
        _id: "aaabl",
        name: "Men After-Shave Cream",
        description: "A soothing after-shave cream for men, formulated to calm skin and reduce irritation post-shaving.",
        ingredients: ["Aloe Vera", "Witch Hazel", "Chamomile", "Allantoin", "Panthenol"],
        benefits: ["Soothes razor burn", "Reduces irritation", "Calms skin", "Hydrates"],
        stockStatus: "In Stock",
        price: { S: { value: 25, display: "25.00" }, M: { value: 50, display: "50.00" }, L: { value: 130, display: "130.00" }, XL: { value: 130, display: "130.00" } },
        image: [p_img38],
        category: "Cream",
        subCategory: "Face Care",
        date: 1716653045448,
        bestseller: false
    },
    {
        _id: "aaabm",
        name: "Men Hydrating Face Cream",
        description: "A hydrating face cream for men, designed to lock in moisture and keep skin soft all day.",
        ingredients: ["Hyaluronic Acid", "Ceramides", "Squalane", "Vitamin E", "Glycerin"],
        benefits: ["Long-lasting hydration", "Strengthens skin barrier", "Non-greasy", "Quick absorption"],
        stockStatus: "In Stock",
        price: { S: { value: 27, display: "27.00" }, M: { value: 50, display: "50.00" }, L: { value: 110, display: "110.00" }, XL: { value: 130, display: "130.00" } },
        image: [p_img39],
        category: "Cream",
        subCategory: "Face Care",
        date: 1716654145448,
        bestseller: false
    },
    {
        _id: "aaabn",
        name: "Men Skin Repair Cream",
        description: "A skin repair cream for men, formulated to heal dryness and improve skin texture with daily use.",
        ingredients: ["Niacinamide", "Ceramides", "Panthenol", "Allantoin", "Shea Butter"],
        benefits: ["Repairs skin barrier", "Reduces dryness", "Soothes irritation", "Improves texture"],
        stockStatus: "In Stock",
        price: { S: { value: 20, display: "20.00" }, M: { value: 50, display: "50.00" }, L: { value: 100, display: "100.00" }, XL: { value: 130, display: "130.00" } },
        image: [p_img40],
        category: "Cream",
        subCategory: "Face Care",
        date: 1716655245448,
        bestseller: false
    }
];
