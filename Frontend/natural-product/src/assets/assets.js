import p_img1 from './p_img1.png'
import p_img2 from './p_img2.png'
import p_img3 from './p_img3.png'
import p_img4 from './p_img4.png'
import p_img5 from './p_img5.png'
import p_img6 from './p_img6.png'
import p_img7 from './p_img7.png'
import p_img8 from './p_img8.png'
import p_img9 from './p_img9.png'
import p_img10 from './p_img10.png'
import p_img11 from './p_img11.png'
import p_img12 from './p_img12.png'
import p_img13 from './p_img13.png'
import p_img14 from './p_img14.png'
import p_img15 from './p_img15.png'
import p_img16 from './p_img16.png'
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
import p_img41 from './p_img41.png'
import p_img42 from './p_img42.png'
import p_img43 from './p_img43.png'


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
// import about_img from './about_img.png'
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
    // about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
    // Shampoos (Images 1-10)
    {
        _id: "aaaaa",
        name: "Herbal Anti-Dandruff Shampoo",
        description: "A refreshing shampoo infused with herbal extracts to combat dandruff and nourish the scalp, leaving hair soft and manageable.",
        price: 100,
        image: [p_img1],
        category: "Women",
        subCategory: "Haircare",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Men Volumizing Shampoo",
        description: "A specially formulated shampoo for men to add volume and strength to hair, with a refreshing scent.",
        price: 200,
        image: [p_img2],
        category: "Men",
        subCategory: "Haircare",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: false
    },
    {
        _id: "aaaac",
        name: "Kids Gentle Shampoo",
        description: "A mild, tear-free shampoo for kids, enriched with natural ingredients to keep hair soft and tangle-free.",
        price: 220,
        image: [p_img3],
        category: "Kids",
        subCategory: "Haircare",
        sizes: ["S", "L", "XL"],
        date: 1716234545448,
        bestseller: false
    },
    {
        _id: "aaaad",
        name: "Men Anti-Hairfall Shampoo",
        description: "A powerful shampoo designed for men to reduce hair fall and strengthen hair roots with natural extracts.",
        price: 110,
        image: [p_img4],
        category: "Men",
        subCategory: "Haircare",
        sizes: ["S", "M", "XXL"],
        date: 1716621345448,
        bestseller: false
    },
    {
        _id: "aaaae",
        name: "Women Moisturizing Shampoo",
        description: "A hydrating shampoo for women, infused with essential oils to restore moisture and shine to dry hair.",
        price: 130,
        image: [p_img5],
        category: "Women",
        subCategory: "Haircare",
        sizes: ["M", "L", "XL"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaaf",
        name: "Kids Bubble Shampoo",
        description: "A fun, bubble-filled shampoo for kids, gentle on the scalp and infused with a fruity fragrance.",
        price: 140,
        image: [p_img6],
        category: "Kids",
        subCategory: "Haircare",
        sizes: ["S", "L", "XL"],
        date: 1716623423448,
        bestseller: false
    },
    {
        _id: "aaaag",
        name: "Men Deep Cleansing Shampoo",
        description: "A deep-cleansing shampoo for men, designed to remove excess oil and impurities while keeping hair fresh.",
        price: 190,
        image: [p_img7],
        category: "Men",
        subCategory: "Haircare",
        sizes: ["S", "L", "XL"],
        date: 1716621542448,
        bestseller: false
    },
    {
        _id: "aaaah",
        name: "Women Daily Use Shampoo",
        description: "A gentle daily-use shampoo for men, formulated to cleanse and refresh hair without stripping natural oils.",
        price: 140,
        image: [p_img8],
        category: "Men",
        subCategory: "Haircare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaai",
        name: "Kids Nourishing Shampoo",
        description: "A nourishing shampoo for kids, enriched with vitamins to promote healthy hair growth and shine.",
        price: 100,
        image: [p_img9],
        category: "Kids",
        subCategory: "Haircare",
        sizes: ["M", "L", "XL"],
        date: 1716621235448,
        bestseller: false
    },
    {
        _id: "aaaaj",
        name: "Women Cooling Shampoo",
        description: "A cooling shampoo for men with menthol extracts, providing a refreshing sensation and clean scalp.",
        price: 110,
        image: [p_img10],
        category: "Men",
        subCategory: "Haircare",
        sizes: ["S", "L", "XL"],
        date: 1716622235448,
        bestseller: false
    },
    // Soaps (Images 11-20)
    {
        _id: "aaaak",
        name: "Men Charcoal Soap",
        description: "A deep-cleansing charcoal soap for men, designed to remove dirt and impurities while keeping skin hydrated.",
        price: 120,
        image: [p_img11],
        category: "Men",
        subCategory: "Skincare",
        sizes: ["S", "M", "L"],
        date: 1716623345448,
        bestseller: false
    },
    {
        _id: "aaaal",
        name: "Men Sandalwood Soap",
        description: "A luxurious sandalwood soap for men, providing a rich lather and a soothing fragrance for daily use.",
        price: 150,
        image: [p_img12],
        category: "Men",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716624445448,
        bestseller: true
    },
    {
        _id: "aaaam",
        name: "Women Rose Petal Soap",
        description: "A gentle rose petal soap for women, enriched with natural oils to moisturize and leave skin soft.",
        price: 130,
        image: [p_img13],
        category: "Women",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716625545448,
        bestseller: false
    },
    {
        _id: "aaaan",
        name: "Kids Strawberry Soap",
        description: "A fun strawberry-scented soap for kids, gentle on the skin and perfect for daily bathing.",
        price: 160,
        image: [p_img14],
        category: "Kids",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716626645448,
        bestseller: false
    },
    {
        _id: "aaaao",
        name: "Men Neem Soap",
        description: "A neem-infused soap for men, known for its antibacterial properties to keep skin clean and healthy.",
        price: 140,
        image: [p_img15],
        category: "Men",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716627745448,
        bestseller: false
    },
    {
        _id: "aaaap",
        name: "Kids Bubblegum Soap",
        description: "A bubblegum-scented soap for kids, making bath time fun while gently cleansing the skin.",
        price: 170,
        image: [p_img16],
        category: "Kids",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716628845448,
        bestseller: false
    },
    {
        _id: "aaaaq",
        name: "Men Turmeric Soap",
        description: "A turmeric soap for men, formulated to brighten skin and reduce blemishes with natural ingredients.",
        price: 150,
        image: [p_img17],
        category: "Men",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716629945448,
        bestseller: false
    },
    {
        _id: "aaaar",
        name: "Kids Mango Soap",
        description: "A mango-scented soap for kids, enriched with moisturizing agents for soft and healthy skin.",
        price: 180,
        image: [p_img18],
        category: "Kids",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716631045448,
        bestseller: false
    },
    {
        _id: "aaaas",
        name: "Kids Orange Soap",
        description: "A citrusy orange soap for kids, gentle on the skin with a refreshing scent for daily use.",
        price: 160,
        image: [p_img19],
        category: "Kids",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaaat",
        name: "Women Lavender Soap",
        description: "A calming lavender soap for women, designed to cleanse and relax the skin with a soothing fragrance.",
        price: 190,
        image: [p_img20],
        category: "Women",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716633245448,
        bestseller: false
    },
    // Oils (Images 21-30)
    {
        _id: "aaaau",
        name: "Women Argan Hair Oil",
        description: "A nourishing argan oil for women, designed to strengthen hair, reduce frizz, and add a natural shine.",
        price: 170,
        image: [p_img21],
        category: "Women",
        subCategory: "Haircare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaav",
        name: "Women Coconut Body Oil",
        description: "A hydrating coconut body oil for women, perfect for moisturizing dry skin and leaving it soft and smooth.",
        price: 200,
        image: [p_img22],
        category: "Women",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716635445448,
        bestseller: false
    },
    {
        _id: "aaaaw",
        name: "Kids Almond Hair Oil",
        description: "A gentle almond oil for kids, formulated to nourish hair and promote healthy growth with a mild scent.",
        price: 180,
        image: [p_img23],
        category: "Kids",
        subCategory: "Haircare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716636545448,
        bestseller: false
    },
    {
        _id: "aaaax",
        name: "Kids Olive Body Oil",
        description: "A lightweight olive oil for kids, designed to moisturize and protect delicate skin with natural ingredients.",
        price: 210,
        image: [p_img24],
        category: "Kids",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716637645448,
        bestseller: false
    },
    {
        _id: "aaaay",
        name: "Kids Jojoba Hair Oil",
        description: "A nourishing jojoba oil for kids, perfect for keeping hair soft, shiny, and tangle-free.",
        price: 190,
        image: [p_img25],
        category: "Kids",
        subCategory: "Haircare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716638745448,
        bestseller: false
    },
    {
        _id: "aaaaz",
        name: "Women Essential Oil Blend",
        description: "A calming blend of essential oils for women, ideal for relaxation and aromatherapy with a floral scent.",
        price: 220,
        image: [p_img26],
        category: "Women",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716639845448,
        bestseller: false
    },
    {
        _id: "aaaba",
        name: "Kids Castor Hair Oil",
        description: "A strengthening castor oil for kids, formulated to promote hair growth and thickness with a gentle touch.",
        price: 200,
        image: [p_img27],
        category: "Kids",
        subCategory: "Haircare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716640945448,
        bestseller: false
    },
    {
        _id: "aaabb",
        name: "Men Beard Oil",
        description: "A nourishing beard oil for men, designed to soften facial hair and moisturize the skin underneath.",
        price: 230,
        image: [p_img28],
        category: "Men",
        subCategory: "Grooming",
        sizes: ["S", "M", "L", "XL"],
        date: 1716642045448,
        bestseller: false
    },
    {
        _id: "aaabc",
        name: "Women Almond Body Oil",
        description: "A rich almond body oil for women, perfect for deep hydration and leaving skin with a healthy glow.",
        price: 210,
        image: [p_img29],
        category: "Women",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716643145448,
        bestseller: false
    },
    {
        _id: "aaabd",
        name: "Kids Avocado Hair Oil",
        description: "A hydrating avocado oil for kids, formulated to nourish hair and scalp with a gentle, natural formula.",
        price: 240,
        image: [p_img30],
        category: "Kids",
        subCategory: "Haircare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716644245448,
        bestseller: false
    },
    // Creams (Images 31-40)
    {
        _id: "aaabe",
        name: "Men Daily Moisturizing Cream",
        description: "A lightweight daily moisturizing cream for men, designed to hydrate and protect skin from dryness.",
        price: 220,
        image: [p_img31],
        category: "Men",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716645345448,
        bestseller: false
    },
    {
        _id: "aaabf",
        name: "Men Anti-Aging Cream",
        description: "An anti-aging cream for men, formulated to reduce fine lines and keep skin firm and youthful.",
        price: 250,
        image: [p_img32],
        category: "Men",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716646445448,
        bestseller: true
    },
    {
        _id: "aaabg",
        name: "Kids Baby Cream",
        description: "A gentle baby cream for kids, enriched with natural ingredients to soothe and protect delicate skin.",
        price: 230,
        image: [p_img33],
        category: "Kids",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716647545448,
        bestseller: false
    },
    {
        _id: "aaabh",
        name: "Women Hydrating Day Cream",
        description: "A hydrating day cream for women, formulated with SPF to protect and moisturize skin all day.",
        price: 260,
        image: [p_img34],
        category: "Women",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716648645448,
        bestseller: false
    },
    {
        _id: "aaabi",
        name: "Women Night Repair Cream",
        description: "A nourishing night cream for women, designed to repair and rejuvenate skin while you sleep.",
        price: 240,
        image: [p_img35],
        category: "Women",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716649745448,
        bestseller: false
    },
    {
        _id: "aaabj",
        name: "Women Brightening Cream",
        description: "A brightening cream for women, formulated to reduce dark spots and even out skin tone.",
        price: 270,
        image: [p_img36],
        category: "Women",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716650845448,
        bestseller: true
    },
    {
        _id: "aaabk",
        name: "Women Anti-Wrinkle Cream",
        description: "An anti-wrinkle cream for women, designed to reduce fine lines and improve skin elasticity.",
        price: 250,
        image: [p_img37],
        category: "Women",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716651945448,
        bestseller: false
    },
    {
        _id: "aaabl",
        name: "Men After-Shave Cream",
        description: "A soothing after-shave cream for men, formulated to calm skin and reduce irritation post-shaving.",
        price: 280,
        image: [p_img38],
        category: "Men",
        subCategory: "Grooming",
        sizes: ["S", "M", "L", "XL"],
        date: 1716653045448,
        bestseller: false
    },
    {
        _id: "aaabm",
        name: "Men Hydrating Face Cream",
        description: "A hydrating face cream for men, designed to lock in moisture and keep skin soft all day.",
        price: 260,
        image: [p_img39],
        category: "Men",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716654145448,
        bestseller: false
    },
    {
        _id: "aaabn",
        name: "Men Skin Repair Cream",
        description: "A skin repair cream for men, formulated to heal dryness and improve skin texture with daily use.",
        price: 290,
        image: [p_img40],
        category: "Men",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716655245448,
        bestseller: false
    },
    // Face Fresh (Face Wash) (Images 41-43)
    {
        _id: "aaabo",
        name: "Men Refreshing Face Wash",
        description: "A refreshing face wash for men, formulated to cleanse deeply and leave skin feeling fresh and energized.",
        price: 270,
        image: [p_img41],
        category: "Men",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716656345448,
        bestseller: false
    },
    {
        _id: "aaabp",
        name: "Kids Gentle Face Wash",
        description: "A gentle face wash for kids, designed to cleanse without drying, with a mild, tear-free formula.",
        price: 300,
        image: [p_img42],
        category: "Kids",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716657445448,
        bestseller: false
    },
    {
        _id: "aaabq",
        name: "Kids Fruity Face Wash",
        description: "A fruity-scented face wash for kids, formulated to gently cleanse and leave skin soft and refreshed.",
        price: 280,
        image: [p_img43],
        category: "Kids",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716658545448,
        bestseller: false
    },
];