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
    // Shampoos (Haircare)
    {
        _id: "aaaaa",
        name: "Herbal Anti-Dandruff Shampoo",
        description: "A refreshing shampoo infused with herbal extracts to combat dandruff and nourish the scalp, leaving hair soft and manageable.",
        ingredients: ["Aloe Vera", "Neem Extract", "Tea Tree Oil", "Rosemary", "Lemon Extract"],
        benefits: ["Fights dandruff", "Soothes itchy scalp", "Strengthens hair roots", "Adds shine"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90 },
        image: [p_img1_1, p_img1_2, p_img1_3, p_img1_4],
        category: "Shampoo",
        subCategory: "Haircare",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true,
        reviews: [
            {
                name: "Emma Wilson",
                rating: 5,
                comment: "This shampoo completely eliminated my dandruff in just 2 weeks! Highly recommend.",
                date: 1716634345448
            },
            {
                name: "Liam Patel",
                rating: 4,
                comment: "Great shampoo, leaves hair feeling clean and fresh. Slight herbal smell but I got used to it.",
                date: 1716623345448
            }
        ]
    },
    {
        _id: "aaaab",
        name: "Men Volumizing Shampoo",
        description: "A specially formulated shampoo for men to add volume and strength to hair, with a refreshing scent.",
        ingredients: ["Biotin", "Caffeine", "Peppermint Oil", "Saw Palmetto", "Keratin"],
        benefits: ["Adds volume", "Reduces thinning", "Stimulates hair growth", "Refreshes scalp"],
        stockStatus: "In Stock",
        price: { M: 23, L: 50, XL :130 },
        image: [p_img2_1, p_img2_2, p_img2_3, p_img2_4],
        category: "Shampoo",
        subCategory: "Haircare",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: false,
        reviews: [
            {
                name: "Noah Carter",
                rating: 5,
                comment: "Noticeable difference in volume after just a few uses. My hair looks thicker!",
                date: 1716610345448
            },
            {
                name: "Ava Thompson",
                rating: 3,
                comment: "Works okay but the scent is a bit strong for my liking.",
                date: 1716609345448
            },
            {
                name: "James Lee",
                rating: 4,
                comment: "Good shampoo, my hair feels stronger and has more body.",
                date: 1716598345448
            }
        ]
    },
    {
        _id: "aaaac",
        name: "Kids Gentle Shampoo",
        description: "A mild, tear-free shampoo for kids, enriched with natural ingredients to keep hair soft and tangle-free.",
        ingredients: ["Chamomile", "Oat Extract", "Coconut Oil", "Aloe Vera", "Vitamin E"],
        benefits: ["Tear-free formula", "Gentle cleansing", "Reduces tangles", "Safe for daily use"],
        stockStatus: "Low Stock",
        price: { S: 23, L: 50, XL :130 },
        image: [p_img3_1, p_img3_3],
        category: "Shampoo",
        subCategory: "Haircare",
        sizes: ["S", "L", "XL"],
        date: 1716234545448,
        bestseller: false,
        reviews: [
            {
                name: "Sophia Brown",
                rating: 5,
                comment: "My toddler doesn't cry during bath time anymore! Truly tear-free.",
                date: 1716223545448
            },
            {
                name: "Ethan Davis",
                rating: 4,
                comment: "Gentle on my child's sensitive scalp and leaves hair soft.",
                date: 1716212545448
            }
        ]
    },
    {
        _id: "aaaad",
        name: "Men Anti-Hairfall Shampoo",
        description: "A powerful shampoo designed for men to reduce hair fall and strengthen hair roots with natural extracts.",
        ingredients: ["Biotin", "Niacin", "Ginseng Extract", "Horsetail Plant", "Argan Oil"],
        benefits: ["Reduces hair fall", "Strengthens roots", "Improves hair density", "Nourishes scalp"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, XXL :130 },
        image: [p_img4_1, p_img4_2],
        category: "Shampoo",
        subCategory: "Haircare",
        sizes: ["S", "M", "XXL"],
        date: 1716621345448,
        bestseller: false,
        reviews: [
            {
                name: "Olivia Martinez",
                rating: 4,
                comment: "Seeing less hair in the drain after a month of use. Will continue!",
                date: 1716610345448
            },
            {
                name: "Lucas Nguyen",
                rating: 3,
                comment: "Helps with hair fall but makes my scalp a bit dry. Need to use conditioner.",
                date: 1716609345448
            },
            {
                name: "Mia Garcia",
                rating: 5,
                comment: "Best anti-hairfall shampoo I've tried. Noticeable results in 3 weeks.",
                date: 1716598345448
            }
        ]
    },
    {
        _id: "aaaae",
        name: "Women Moisturizing Shampoo",
        description: "A hydrating shampoo for women, infused with essential oils to restore moisture and shine to dry hair.",
        ingredients: ["Argan Oil", "Shea Butter", "Jojoba Oil", "Avocado Oil", "Vitamin B5"],
        benefits: ["Deep hydration", "Reduces frizz", "Adds shine", "Repairs damage"],
        stockStatus: "In Stock",
        price: { M: 23, L: 50, XL :130 },
        image: [p_img5_1, p_img5_2],
        category: "Shampoo",
        subCategory: "Haircare",
        sizes: ["M", "L", "XL"],
        date: 1716622345448,
        bestseller: false,
        reviews: [
            {
                name: "Isabella Clark",
                rating: 5,
                comment: "My dry, frizzy hair is now soft and manageable. Love this shampoo!",
                date: 1716611345448
            },
            {
                name: "Elijah Walker",
                rating: 4,
                comment: "Great for colored hair. Keeps my highlights shiny and moisturized.",
                date: 1716600345448
            }
        ]
    },
    {
        _id: "aaaaf",
        name: "Kids Bubble Shampoo",
        description: "A fun, bubble-filled shampoo for kids, gentle on the scalp and infused with a fruity fragrance.",
        ingredients: ["Glycerin", "Aloe Vera", "Vitamin E", "Natural Fruit Extracts", "Chamomile"],
        benefits: ["Fun bubble formula", "Gentle cleansing", "Tear-free", "Pleasant fragrance"],
        stockStatus: "In Stock",
        price: { S: 23, L: 50, XL :130 },
        image: [p_img6_1, p_img6_2],
        category: "Shampoo",
        subCategory: "Haircare",
        sizes: ["S", "L", "XL"],
        date: 1716623423448,
        bestseller: false,
        reviews: [
            {
                name: "Charlotte Young",
                rating: 5,
                comment: "My kids love the bubbles and it doesn't irritate their eyes. Perfect!",
                date: 1716612423448
            },
            {
                name: "Henry Kim",
                rating: 4,
                comment: "Nice fruity smell and gentle formula. Kids enjoy bath time now.",
                date: 1716601423448
            },
            {
                name: "Amelia Adams",
                rating: 3,
                comment: "Good shampoo but I wish the bubbles lasted longer.",
                date: 1716590423448
            }
        ]
    },
    {
        _id: "aaaag",
        name: "Men Deep Cleansing Shampoo",
        description: "A deep-cleansing shampoo for men, designed to remove excess oil and impurities while keeping hair fresh.",
        ingredients: ["Charcoal", "Tea Tree Oil", "Peppermint", "Salicylic Acid", "Witch Hazel"],
        benefits: ["Deep cleanses", "Controls oil", "Refreshes scalp", "Removes buildup"],
        stockStatus: "In Stock",
        price: { S: 23, L: 50, XL :130 },
        image: [p_img7_1, p_img7_2],
        category: "Shampoo",
        subCategory: "Haircare",
        sizes: ["S", "L", "XL"],
        date: 1716621542448,
        bestseller: false,
        reviews: [
            {
                name: "William Turner",
                rating: 5,
                comment: "Finally a shampoo that keeps my oily scalp clean for more than a day!",
                date: 1716610542448
            },
            {
                name: "Sophie Baker",
                rating: 4,
                comment: "The minty feeling is refreshing. Cleans well without drying.",
                date: 1716599542448
            }
        ]
    },
    {
        _id: "aaaah",
        name: "Women Daily Use Shampoo",
        description: "A gentle daily-use shampoo for women, formulated to cleanse and refresh hair without stripping natural oils.",
        ingredients: ["Aloe Vera", "Green Tea Extract", "Chamomile", "Panthenol", "Rosemary Oil"],
        benefits: ["Mild cleansing", "Maintains moisture", "Suitable for daily use", "Adds shine"],
        stockStatus: "Out of Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img8_1, p_img8_2, p_img8_3],
        category: "Shampoo",
        subCategory: "Haircare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716622345448,
        bestseller: false,
        reviews: [
            {
                name: "Oliver Wright",
                rating: 4,
                comment: "Perfect for my fine hair. Doesn't weigh it down and cleans gently.",
                date: 1716611345448
            },
            {
                name: "Harper Evans",
                rating: 5,
                comment: "My go-to shampoo for years. Never disappoints!",
                date: 1716600345448
            },
            {
                name: "Mason Lopez",
                rating: 3,
                comment: "Good for daily use but I need to use more product than usual.",
                date: 1716589345448
            }
        ]
    },
    {
        _id: "aaaai",
        name: "Kids Nourishing Shampoo",
        description: "A nourishing shampoo for kids, enriched with vitamins to promote healthy hair growth and shine.",
        ingredients: ["Sweet Almond Oil", "Vitamin E", "Honey Extract", "Oat Protein", "Chamomile"],
        benefits: ["Nourishes hair", "Promotes growth", "Adds softness", "Gentle formula"],
        stockStatus: "In Stock",
        price: { M: 23, L: 50, XL :130 },
        image: [p_img9_1, p_img9_2],
        category: "Shampoo",
        subCategory: "Haircare",
        sizes: ["M", "L", "XL"],
        date: 1716621235448,
        bestseller: false,
        reviews: [
            {
                name: "Evelyn Scott",
                rating: 5,
                comment: "My child's hair has never been this soft and shiny!",
                date: 1716610235448
            },
            {
                name: "Jack Morris",
                rating: 4,
                comment: "Gentle formula that doesn't irritate my baby's sensitive skin.",
                date: 1716599235448
            }
        ]
    },
    {
        _id: "aaaaj",
        name: "Men Cooling Shampoo",
        description: "A cooling shampoo with menthol extracts, providing a refreshing sensation and clean scalp.",
        ingredients: ["Menthol", "Peppermint Oil", "Eucalyptus", "Tea Tree Oil", "Aloe Vera"],
        benefits: ["Cooling effect", "Soothes scalp", "Refreshes hair", "Controls oil"],
        stockStatus: "In Stock",
        price: { S: 23, L: 50, XL :130 },
        image: [p_img10_1, p_img10_2],
        category: "Shampoo",
        subCategory: "Haircare",
        sizes: ["S", "L", "XL"],
        date: 1716622235448,
        bestseller: false,
        reviews: [
            {
                name: "Aria Hill",
                rating: 5,
                comment: "The cooling sensation is amazing, especially in summer!",
                date: 1716611235448
            },
            {
                name: "Logan Rivera",
                rating: 4,
                comment: "Great shampoo for hot days. Leaves scalp feeling fresh.",
                date: 1716600235448
            },
            {
                name: "Chloe Bennett",
                rating: 3,
                comment: "Too intense cooling for me but cleans well.",
                date: 1716589235448
            }
        ]
    },
    // Soaps (Skincare)
    {
        _id: "aaaak",
        name: "Men Charcoal Soap",
        description: "A deep-cleansing charcoal soap for men, designed to remove dirt and impurities while keeping skin hydrated.",
        ingredients: ["Activated Charcoal", "Bentonite Clay", "Tea Tree Oil", "Aloe Vera", "Glycerin"],
        benefits: ["Deep cleansing", "Detoxifies skin", "Controls oil", "Prevents acne"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90 },
        image: [p_img11_1, p_img11_2, p_img11_3],
        category: "Soap",
        subCategory: "Skincare",
        sizes: ["S", "M", "L"],
        date: 1716623345448,
        bestseller: false,
        reviews: [
            {
                name: "Daniel Foster",
                rating: 5,
                comment: "Cleared up my acne in just 2 weeks! Best soap ever.",
                date: 1716612345448
            },
            {
                name: "Lily Collins",
                rating: 4,
                comment: "Great for oily skin. Leaves face clean but not dry.",
                date: 1716601345448
            }
        ]
    },
    {
        _id: "aaaal",
        name: "Men Sandalwood Soap",
        description: "A luxurious sandalwood soap for men, providing a rich lather and a soothing fragrance for daily use.",
        ingredients: ["Sandalwood Oil", "Glycerin", "Almond Oil", "Coconut Oil", "Vitamin E"],
        benefits: ["Antiseptic properties", "Soothes skin", "Rich lather", "Aromatic fragrance"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img12_1, p_img12_2, p_img12_3],
        category: "Soap",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716624445448,
        bestseller: true,
        reviews: [
            {
                name: "Alexander Reed",
                rating: 5,
                comment: "The scent is divine and lasts all day. Skin feels amazing!",
                date: 1716613445448
            },
            {
                name: "Grace Parker",
                rating: 5,
                comment: "My skin has never been this smooth. Worth every penny!",
                date: 1716602445448
            },
            {
                name: "Benjamin Cook",
                rating: 4,
                comment: "Luxurious feel and wonderful fragrance. A bit pricey but worth it.",
                date: 1716591445448
            }
        ]
    },
    {
        _id: "aaaam",
        name: "Women Rose Petal Soap",
        description: "A gentle rose petal soap for women, enriched with natural oils to moisturize and leave skin soft.",
        ingredients: ["Rose Extract", "Shea Butter", "Glycerin", "Almond Oil", "Vitamin E"],
        benefits: ["Moisturizes skin", "Antioxidant properties", "Calming fragrance", "Gentle cleansing"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img13_1, p_img13_2],
        category: "Soap",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716625545448,
        bestseller: false,
        reviews: [
            {
                name: "Victoria Hayes",
                rating: 5,
                comment: "Smells like fresh roses! Leaves my skin soft and hydrated.",
                date: 1716614545448
            },
            {
                name: "Samuel Ross",
                rating: 4,
                comment: "Beautiful soap with real rose petals. Gentle on sensitive skin.",
                date: 1716603545448
            }
        ]
    },
    {
        _id: "aaaan",
        name: "Kids Strawberry Soap",
        description: "A fun strawberry-scented soap for kids, gentle on the skin and perfect for shafts",
        ingredients: ["Strawberry Extract", "Cocoa Butter", "Glycerin", "Aloe Vera", "Vitamin E"],
        benefits: ["Gentle cleansing", "Fun fragrance", "Moisturizes skin", "Tear-free formula"],
        stockStatus: "Low Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img14_1, p_img14_2, p_img14_3],
        category: "Soap",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716626645448,
        bestseller: false,
        reviews: [
            {
                name: "Ella Brooks",
                rating: 5,
                comment: "My kids love the strawberry smell and it doesn't dry their skin!",
                date: 1716615645448
            },
            {
                name: "Owen Gray",
                rating: 4,
                comment: "Cute soap that makes bath time fun. Gentle formula.",
                date: 1716604645448
            },
            {
                name: "Abigail Ward",
                rating: 3,
                comment: "Smells great but doesn't last very long with daily use.",
                date: 1716593645448
            }
        ]
    },
    {
        _id: "aaaao",
        name: "Men Neem Soap",
        description: "A neem-infused soap for men, known for its antibacterial properties to keep skin clean and healthy.",
        ingredients: ["Neem Extract", "Turmeric", "Aloe Vera", "Glycerin", "Tea Tree Oil"],
        benefits: ["Antibacterial", "Treats acne", "Soothes irritation", "Purifies skin"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img15_1, p_img15_2, p_img15_3],
        category: "Soap",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716627745448,
        bestseller: false,
        reviews: [
            {
                name: "Luke Perry",
                rating: 4,
                comment: "Helped clear my skin breakouts. Natural and effective.",
                date: 1716616745448
            },
            {
                name: "Zoe Mitchell",
                rating: 5,
                comment: "Best soap for acne-prone skin. Noticeable difference in a week.",
                date: 1716605745448
            }
        ]
    },
    {
        _id: "aaaap",
        name: "Kids Bubblegum Soap",
        description: "A bubblegum-scented soap for kids, making bath time fun while gently cleansing the skin.",
        ingredients: ["Glycerin", "Coconut Oil", "Bubblegum Fragrance", "Aloe Vera", "Vitamin E"],
        benefits: ["Fun fragrance", "Gentle cleansing", "Moisturizes skin", "Encourages bathing"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img16_1, p_img16_2],
        category: "Soap",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716628845448,
        bestseller: false,
        reviews: [
            {
                name: "Caleb Fisher",
                rating: 5,
                comment: "My kids actually ask to wash their hands now because of this soap!",
                date: 1716617845448
            },
            {
                name: "Hannah Stewart",
                rating: 4,
                comment: "Fun soap that makes hygiene enjoyable for kids.",
                date: 1716606845448
            },
            {
                name: "Isaac Murray",
                rating: 3,
                comment: "Cute concept but the scent is a bit artificial.",
                date: 1716595845448
            }
        ]
    },
    {
        _id: "aaaaq",
        name: "Men Turmeric Soap",
        description: "A turmeric soap for men, formulated to brighten skin and reduce blemishes with natural ingredients.",
        ingredients: ["Turmeric", "Sandalwood", "Aloe Vera", "Glycerin", "Lemon Extract"],
        benefits: ["Brightens skin", "Reduces blemishes", "Antioxidant properties", "Even skin tone"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img17],
        category: "Soap",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716629945448,
        bestseller: false,
        reviews: [
            {
                name: "Avery Russell",
                rating: 4,
                comment: "Noticeable improvement in skin tone after regular use.",
                date: 1716618945448
            },
            {
                name: "Layla Price",
                rating: 5,
                comment: "Helped fade my dark spots and acne scars. Highly recommend!",
                date: 1716607945448
            }
        ]
    },
    {
        _id: "aaaar",
        name: "Kids Mango Soap",
        description: "A mango-scented soap for kids, enriched with moisturizing agents for soft and healthy skin.",
        ingredients: ["Mango Extract", "Shea Butter", "Glycerin", "Coconut Oil", "Vitamin E"],
        benefits: ["Moisturizes skin", "Pleasant fragrance", "Gentle formula", "Nourishes skin"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img18],
        category: "Soap",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716631045448,
        bestseller: false,
        reviews: [
            {
                name: "Nathan Coleman",
                rating: 5,
                comment: "Smells like fresh mangoes! Kids love it and it's gentle on skin.",
                date: 1716620045448
            },
            {
                name: "Sofia Alexander",
                rating: 4,
                comment: "Great moisturizing soap with a tropical scent.",
                date: 1716609045448
            }
        ]
    },
    {
        _id: "aaaas",
        name: "Kids Orange Soap",
        description: "A citrusy orange soap for kids, gentle on the skin with a refreshing scent for daily use.",
        ingredients: ["Orange Extract", "Glycerin", "Aloe Vera", "Coconut Oil", "Vitamin C"],
        benefits: ["Refreshing scent", "Vitamin C boost", "Gentle cleansing", "Brightens skin"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img19],
        category: "Soap",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716632145448,
        bestseller: false,
        reviews: [
            {
                name: "Eli Hughes",
                rating: 5,
                comment: "Zesty fragrance that wakes up my kids in the morning!",
                date: 1716621145448
            },
            {
                name: "Aubrey Simmons",
                rating: 4,
                comment: "Gentle and refreshing. Perfect for summer.",
                date: 1716610145448
            },
            {
                name: "Gabriel Jordan",
                rating: 3,
                comment: "Nice scent but doesn't last long after washing.",
                date: 1716599145448
            }
        ]
    },
    {
        _id: "aaaat",
        name: "Women Lavender Soap",
        description: "A calming lavender soap for women, designed to cleanse and relax the skin with a soothing fragrance.",
        ingredients: ["Lavender Oil", "Shea Butter", "Glycerin", "AlPillBot"],
        benefits: ["Calming fragrance", "Relaxes mind", "Moisturizes skin", "Antioxidant properties"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img20],
        category: "Soap",
        subCategory: "Skincare",
        sizes: ["S", "M", "L", "XL"],
        date: 1716633245448,
        bestseller: false,
        reviews: [
            {
                name: "Claire Wallace",
                rating: 5,
                comment: "The lavender scent helps me relax before bed. Skin feels nourished.",
                date: 1716622245448
            },
            {
                name: "Dylan Hart",
                rating: 4,
                comment: "Beautiful soap with a genuine lavender fragrance. Very calming.",
                date: 1716611245448
            }
        ]
    },
    // Oils (Moisturizers)
    {
        _id: "aaaau",
        name: "Women Argan Hair Oil",
        description: "A nourishing argan oil for women, designed to strengthen hair, reduce frizz, and add a natural shine.",
        ingredients: ["100% Pure Argan Oil", "Vitamin E", "Essential Fatty Acids", "Antioxidants"],
        benefits: ["Reduces frizz", "Adds shine", "Repairs damage", "Protects from heat"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img21],
        category: "Oil",
        subCategory: "Moisturizer",
        sizes: ["S", "M", "L", "XL"],
        date: 1716634345448,
        bestseller: true,
        reviews: [
            {
                name: "Penelope Bell",
                rating: 5,
                comment: "Transformed my dry, frizzy hair into silky smooth locks! Miracle product.",
                date: 1716623345448
            },
            {
                name: "Wyatt Griffin",
                rating: 5,
                comment: "A little goes a long way. Best hair oil I've ever used.",
                date: 1716612345448
            },
            {
                name: "Lila Sullivan",
                rating: 4,
                comment: "Great for split ends and adding shine. Not too heavy.",
                date: 1716601345448
            }
        ]
    },
    {
        _id: "aaaav",
        name: "Women Coconut Body Oil",
        description: "A hydrating coconut body oil for women, perfect for moisturizing dry skin and leaving it soft and smooth.",
        ingredients: ["Virgin Coconut Oil", "Vitamin E", "Jojoba Oil", "Almond Oil"],
        benefits: ["Deep hydration", "Softens skin", "Improves elasticity", "Natural glow"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img22],
        category: "Oil",
        subCategory: "Moisturizer",
        sizes: ["S", "M", "L", "XL"],
        date: 1716635445448,
        bestseller: false,
        reviews: [
            {
                name: "Julian Fox",
                rating: 5,
                comment: "Absorbs quickly and leaves skin incredibly soft. Love the coconut scent!",
                date: 1716624445448
            },
            {
                name: "Nora Bryant",
                rating: 4,
                comment: "Great for dry winter skin. Not greasy like other oils.",
                date: 1716613445448
            }
        ]
    },
    {
        _id: "aaaaw",
        name: "Kids Almond Hair Oil",
        description: "A gentle almond oil for kids, formulated to nourish hair and promote healthy growth with a mild scent.",
        ingredients: ["Sweet Almond Oil", "Vitamin E", "Jojoba Oil", "Rosemary Extract"],
        benefits: ["Promotes growth", "Reduces tangles", "Nourishes scalp", "Gentle formula"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img23],
        category: "Oil",
        subCategory: "Moisturizer",
        sizes: ["S", "M", "L", "XL"],
        date: 1716636545448,
        bestseller: false,
        reviews: [
            {
                name: "Silas Dunn",
                rating: 5,
                comment: "My child's hair has grown so much thicker since using this oil!",
                date: 1716625545448
            },
            {
                name: "Ruby Pierce",
                rating: 4,
                comment: "Lightweight and doesn't make hair greasy. Perfect for kids.",
                date: 1716614545448
            },
            {
                name: "Ezra Lane",
                rating: 3,
                comment: "Works well but the scent could be more pleasant.",
                date: 1716603545448
            }
        ]
    },
    {
        _id: "aaaax",
        name: "Kids Olive Body Oil",
        description: "A lightweight olive oil for kids, designed to moisturize and protect delicate skin with natural ingredients.",
        ingredients: ["Extra Virgin Olive Oil", "Vitamin E", "Chamomile Extract", "Aloe Vera"],
        benefits: ["Lightweight moisture", "Protects skin", "Soothes irritation", "Non-greasy"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img24],
        category: "Oil",
        subCategory: "Moisturizer",
        sizes: ["S", "M", "L", "XL"],
        date: 1716637645448,
        bestseller: false,
        reviews: [
            {
                name: "Violet Harper",
                rating: 5,
                comment: "Perfect for my baby's sensitive skin. No more dryness!",
                date: 1716626645448
            },
            {
                name: "Micah Walsh",
                rating: 4,
                comment: "Absorbs quickly and doesn't leave a greasy residue.",
                date: 1716615645448
            }
        ]
    },
    {
        _id: "aaaay",
        name: "Kids Jojoba Hair Oil",
        description: "A nourishing jojoba oil for kids, perfect for keeping hair soft, shiny, and tangle-free.",
        ingredients: ["Pure Jojoba Oil", "Vitamin E", "Lavender Oil", "Chamomile Extract"],
        benefits: ["Mimics natural oils", "Reduces tangles", "Adds shine", "Lightweight"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img25],
        category: "Oil",
        subCategory: "Moisturizer",
        sizes: ["S", "M", "L", "XL"],
        date: 1716638745448,
        bestseller: false,
        reviews: [
            {
                name: "Aurora Dean",
                rating: 5,
                comment: "Brushing my child's hair is now tangle-free! Wonderful product.",
                date: 1716627745448
            },
            {
                name: "Jasper Knight",
                rating: 4,
                comment: "Light oil that doesn't weigh down fine hair. Pleasant scent.",
                date: 1716616745448
            }
        ]
    },
    {
        _id: "aaaaz",
        name: "Women Essential Oil Blend",
        description: "A calming blend of essential oils for women, ideal for relaxation and aromatherapy with a floral scent.",
        ingredients: ["Lavender Oil", "Chamomile Oil", "Ylang Ylang", "Bergamot", "Jojoba Carrier Oil"],
        benefits: ["Promotes relaxation", "Reduces stress", "Aromatherapy benefits", "Skin nourishment"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img26],
        category: "Oil",
        subCategory: "Moisturizer",
        sizes: ["S", "M", "L", "XL"],
        date: 1716639845448,
        bestseller: false,
        reviews: [
            {
                name: "Delilah Stone",
                rating: 5,
                comment: "This oil blend helps me sleep so much better. Heavenly scent!",
                date: 1716628845448
            },
            {
                name: "Gideon Burke",
                rating: 4,
                comment: "Great for massage and relaxation. The scent is perfectly balanced.",
                date: 1716617845448
            },
            {
                name: "Freya Palmer",
                rating: 3,
                comment: "Nice but the scent doesn't last as long as I'd like.",
                date: 1716606845448
            }
        ]
    },
    {
        _id: "aaaba",
        name: "Kids Castor Hair Oil",
        description: "A strengthening castor oil for kids, formulated to promote hair growth and thickness with a gentle touch.",
        ingredients: ["Cold-Pressed Castor Oil", "Almond Oil", "Vitamin E", "Rosemary Oil"],
        benefits: ["Strengthens hair", "Promotes growth", "Reduces breakage", "Conditions scalp"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img27],
        category: "Oil",
        subCategory: "Moisturizer",
        sizes: ["S", "M", "L", "XL"],
        date: 1716640945448,
        bestseller: false,
        reviews: [
            {
                name: "Levi Grant",
                rating: 4,
                comment: "Seeing new baby hairs after just a month of use!",
                date: 1716629945448
            },
            {
                name: "Ivy Dixon",
                rating: 5,
                comment: "Thickened my child's thin hair noticeably. Worth every penny!",
                date: 1716618945448
            }
        ]
    },
    {
        _id: "aaabb",
        name: "Men Beard Oil",
        description: "A nourishing beard oil for men, designed to soften facial hair and moisturize the skin underneath.",
        ingredients: ["Jojoba Oil", "Argan Oil", "Vitamin E", "Cedarwood Oil", "Peppermint Oil"],
        benefits: ["Softens beard", "Reduces itchiness", "Promotes growth", "Conditions skin"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img28],
        category: "Oil",
        subCategory: "Moisturizer",
        sizes: ["S", "M", "L", "XL"],
        date: 1716642045448,
        bestseller: false,
        reviews: [
            {
                name: "Declan Wells",
                rating: 5,
                comment: "No more beard itch! Softens my beard and smells amazing.",
                date: 1716631045448
            },
            {
                name: "Phoebe Ford",
                rating: 4,
                comment: "Great oil that keeps my beard manageable and skin moisturized.",
                date: 1716620045448
            },
            {
                name: "Tristan Webb",
                rating: 3,
                comment: "Works well but I wish the scent was stronger.",
                date: 1716609045448
            }
        ]
    },
    {
        _id: "aaabc",
        name: "Women Almond Body Oil",
        description: "A rich almond body oil for women, perfect for deep hydration and leaving skin with a healthy glow.",
        ingredients: ["Sweet Almond Oil", "Vitamin E", "Rosehip Oil", "Jojoba Oil", "Lavender Oil"],
        benefits: ["Deep hydration", "Improves elasticity", "Red anglereuces stretch marks", "Even skin tone"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img29],
        category: "Oil",
        subCategory: "Moisturizer",
        sizes: ["S", "M", "L", "XL"],
        date: 1716643145448,
        bestseller: false,
        reviews: [
            {
                name: "Esme Barrett",
                rating: 5,
                comment: "My skin has never been this soft! Absorbs quickly without feeling greasy.",
                date: 1716632145448
            },
            {
                name: "Finn Howell",
                rating: 4,
                comment: "Love the subtle lavender scent. Great for post-shower moisturizing.",
                date: 1716621145448
            },
            {
                name: "Willow Lawson",
                rating: 4,
                comment: "Helped fade my pregnancy stretch marks noticeably after 2 months of use.",
                date: 1716610145448
            }
        ]
    },
    {
        _id: "aaabd",
        name: "Kids Avocado Hair Oil",
        description: "A hydrating avocado oil for kids, formulated to nourish hair and scalp with a gentle, natural formula.",
        ingredients: ["Avocado Oil", "Jojoba Oil", "Vitamin E", "Chamomile Extract", "Aloe Vera"],
        benefits: ["Deep conditioning", "Repairs damage", "Adds shine", "Soothes scalp"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img30],
        category: "Oil",
        subCategory: "Moisturizer",
        sizes: ["S", "M", "L", "XL"],
        date: 1716644245448,
        bestseller: false,
        reviews: [
            {
                name: "Theodore Bates",
                rating: 5,
                comment: "My daughter's hair tangles less and looks so shiny now! No more tears during brushing.",
                date: 1716633245448
            },
            {
                name: "Matilda Spencer",
                rating: 4,
                comment: "Gentle enough for my toddler's sensitive scalp. Helps with cradle cap too.",
                date: 1716622245448
            },
            {
                name: "Arlo Hanson",
                rating: 3,
                comment: "Works well but the bottle could be more child-proof.",
                date: 1716611245448
            }
        ]
    },
    {
        _id: "aaabe",
        name: "Men Daily Moisturizing Cream",
        description: "A lightweight daily moisturizing cream for men, designed to hydrate and protect skin from dryness.",
        ingredients: ["Hyaluronic Acid", "Vitamin E", "Aloe Vera", "Green Tea Extract", "Glycerin"],
        benefits: ["Lightweight hydration", "Non-greasy", "Protects skin", "Quick absorption"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img31],
        category: "Cream",
        subCategory: "Face Care",
        sizes: ["S", "M", "L", "XL"],
        date: 1716645345448,
        bestseller: false,
        reviews: [
            {
                name: "Evie Rhodes",
                rating: 5,
                comment: "Finally a moisturizer that doesn't feel heavy or sticky. Perfect for daily use.",
                date: 1716634345448
            },
            {
                name: "Rory Gallagher",
                rating: 4,
                comment: "Keeps my face hydrated all day at the office. No more tight feeling.",
                date: 1716623345448
            },
            {
                name: "Cora Fitzgerald",
                rating: 3,
                comment: "Does the job but wish it had SPF protection included.",
                date: 1716612345448
            }
        ]
    },
    {
        _id: "aaabf",
        name: "Men Anti-Aging Cream",
        description: "An anti-aging cream for men, formulated to reduce fine lines and keep skin firm and youthful.",
        ingredients: ["Retinol", "Vitamin C", "Hyaluronic Acid", "Peptides", "Niacinamide"],
        benefits: ["Reduces wrinkles", "Firms skin", "Improves elasticity", "Brightens complexion"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img32],
        category: "Cream",
        subCategory: "Face Care",
        sizes: ["S", "M", "L", "XL"],
        date: 1716646445448,
        bestseller: true,
        reviews: [
            {
                name: "Felix Armstrong",
                rating: 5,
                comment: "Visible reduction in crow's feet after just 6 weeks. My wife noticed first!",
                date: 1716635445448
            },
            {
                name: "Hazel Dawson",
                rating: 4,
                comment: "Great texture - not greasy like other anti-aging products I've tried.",
                date: 1716624445448
            },
            {
                name: "Jude Crawford",
                rating: 4,
                comment: "Makes my skin look refreshed. Using it with their daily moisturizer works best.",
                date: 1716613445448
            }
        ]
    },
    {
        _id: "aaabg",
        name: "Kids Baby Cream",
        description: "A gentle baby cream for kids, enriched with natural ingredients to soothe and protect delicate skin.",
        ingredients: ["Zinc Oxide", "Calendula Extract", "Shea Butter", "Chamomile", "Aloe Vera"],
        benefits: ["Diaper rash prevention", "Soothes irritation", "Protects skin", "Gentle formula"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img33],
        category: "Cream",
        subCategory: "Face Care",
        sizes: ["S", "M", "L", "XL"],
        date: 1716647545448,
        bestseller: false,
        reviews: [
            {
                name: "Rose Elliott",
                rating: 5,
                comment: "Cleared up my baby's diaper rash overnight. Pediatrician approved!",
                date: 1716636545448
            },
            {
                name: "Ellis Porter",
                rating: 5,
                comment: "The only cream that doesn't irritate my son's eczema. We're on our 3rd tub.",
                date: 1716625545448
            },
            {
                name: "Lydia Chambers",
                rating: 4,
                comment: "Great for everyday use. Love that it's fragrance-free.",
                date: 1716614545448
            }
        ]
    },
    {
        _id: "aaabh",
        name: "Women Hydrating Day Cream",
        description: "A hydrating day cream for women, formulated with SPF to protect and moisturize skin all day.",
        ingredients: ["Hyaluronic Acid", "SPF 30", "Vitamin E", "Niacinamide", "Green Tea Extract"],
        benefits: ["Daily hydration", "Sun protection", "Brightens skin", "Lightweight"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img34],
        category: "Cream",
        subCategory: "Face Care",
        sizes: ["S", "M", "L", "XL"],
        date: 1716648645448,
        bestseller: false,
        reviews: [
            {
                name: "Mila Holmes",
                rating: 5,
                comment: "This cream is perfect for daily use! Keeps my skin hydrated and the SPF is a bonus.",
                date: 1716637645448
            },
            {
                name: "Kai Marshall",
                rating: 4,
                comment: "Light and non-greasy, but I wish the scent was a bit milder.",
                date: 1716626645448
            },
            {
                name: "Sienna Lloyd",
                rating: 5,
                comment: "My skin looks brighter and feels so soft after using this for a month!",
                date: 1716615645448
            }
        ]
    },
    {
        _id: "aaabi",
        name: "Women Night Repair Cream",
        description: "A nourishing night cream for women, designed to repair and rejuvenate skin while you sleep.",
        ingredients: ["Retinol", "Peptides", "Ceramides", "Niacinamide", "Hyaluronic Acid"],
        benefits: ["Overnight repair", "Boosts collagen", "Reduces fine lines", "Deep hydration"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img35],
        category: "Cream",
        subCategory: "Face Care",
        sizes: ["S", "M", "L", "XL"],
        date: 1716649745448,
        bestseller: false,
        reviews: [
            {
                name: "Roman Tucker",
                rating: 4,
                comment: "Wakes up with smoother skin! Took a week to get used to the retinol.",
                date: 1716638745448
            },
            {
                name: "Eloise Vaughn",
                rating: 5,
                comment: "Fine lines around my eyes are fading. Love how hydrated my skin feels!",
                date: 1716627745448
            }
        ]
    },
    {
        _id: "aaabj",
        name: "Women Brightening Cream",
        description: "A brightening cream for women, formulated to reduce dark spots and even out skin tone.",
        ingredients: ["Vitamin C", "Niacinamide", "Licorice Root Extract", "Alpha Arbutin", "Hyaluronic Acid"],
        benefits: ["Reduces dark spots", "Even skin tone", "Brightens complexion", "Hydrates skin"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img36],
        category: "Cream",
        subCategory: "Face Care",
        sizes: ["S", "M", "L", "XL"],
        date: 1716650845448,
        bestseller: true,
        reviews: [
            {
                name: "Alfie Myers",
                rating: 5,
                comment: "My dark spots are noticeably lighter after 3 weeks! Amazing product.",
                date: 1716639845448
            },
            {
                name: "Imogen Fuller",
                rating: 4,
                comment: "Brightens my skin well, but it takes time to see results on stubborn spots.",
                date: 1716628845448
            },
            {
                name: "Reuben Blake",
                rating: 5,
                comment: "My complexion looks so even now. Worth every penny!",
                date: 1716617845448
            }
        ]
    },
    {
        _id: "aaabk",
        name: "Women Anti-Wrinkle Cream",
        description: "An anti-wrinkle cream for women, designed to reduce fine lines and improve skin elasticity.",
        ingredients: ["Retinol", "Matrixyl", "Hyaluronic Acid", "Peptides", "Vitamin E"],
        benefits: ["Reduces wrinkles", "Firms skin", "Improves elasticity", "Hydrates deeply"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img37],
        category: "Cream",
        subCategory: "Face Care",
        sizes: ["S", "M", "L", "XL"],
        date: 1716651945448,
        bestseller: false,
        reviews: [
            {
                name: "Pippa Walsh",
                rating: 4,
                comment: "My skin feels firmer, but it stings a bit at first due to retinol.",
                date: 1716640945448
            },
            {
                name: "Oscar Curtis",
                rating: 5,
                comment: "Wrinkles around my mouth are less visible after a month. Great cream!",
                date: 1716629945448
            }
        ]
    },
    {
        _id: "aaabl",
        name: "Men After-Shave Cream",
        description: "A soothing after-shave cream for men, formulated to calm skin and reduce irritation post-shaving.",
        ingredients: ["Aloe Vera", "Witch Hazel", "Chamomile", "Allantoin", "Panthenol"],
        benefits: ["Soothes razor burn", "Reduces irritation", "Calms skin", "Hydrates"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img38],
        category: "Cream",
        subCategory: "Face Care",
        sizes: ["S", "M", "L", "XL"],
        date: 1716653045448,
        bestseller: false,
        reviews: [
            {
                name: "Beatrice Owen",
                rating: 5,
                comment: "No more razor burn! This cream is a game-changer after shaving.",
                date: 1716642045448
            },
            {
                name: "Stanley Fletcher",
                rating: 4,
                comment: "Really soothing, but the scent is a bit strong for me.",
                date: 1716631045448
            },
            {
                name: "Florence Hicks",
                rating: 5,
                comment: "Calms my skin instantly and keeps it hydrated all day.",
                date: 1716620045448
            }
        ]
    },
    {
        _id: "aaabm",
        name: "Men Hydrating Face Cream",
        description: "A hydrating face cream for men, designed to lock in moisture and keep skin soft all day.",
        ingredients: ["Hyaluronic Acid", "Ceramides", "Squalane", "Vitamin E", "Glycerin"],
        benefits: ["Long-lasting hydration", "Strengthens skin barrier", "Non-greasy", "Quick absorption"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img39],
        category: "Cream",
        subCategory: "Face Care",
        sizes: ["S", "M", "L", "XL"],
        date: 1716654145448,
        bestseller: false,
        reviews: [
            {
                name: "Archie Pearson",
                rating: 5,
                comment: "Absorbs fast and keeps my skin hydrated without feeling heavy.",
                date: 1716643145448
            },
            {
                name: "Maisie Gardner",
                rating: 4,
                comment: "Great for daily use, but I need to reapply by evening.",
                date: 1716632145448
            }
        ]
    },
    {
        _id: "aaabn",
        name: "Men Skin Repair Cream",
        description: "A skin repair cream for men, formulated to heal dryness and improve skin texture with daily use.",
        ingredients: ["Niacinamide", "Ceramides", "Panthenol", "Allantoin", "Shea Butter"],
        benefits: ["Repairs skin barrier", "Reduces dryness", "Soothes irritation", "Improves texture"],
        stockStatus: "In Stock",
        price: { S: 23, M: 50, L: 90, XL :130 },
        image: [p_img40],
        category: "Cream",
        subCategory: "Face Care",
        sizes: ["S", "M", "L", "XL"],
        date: 1716655245448,
        bestseller: false,
        reviews: [
            {
                name: "Frankie Burton",
                rating: 5,
                comment: "Fixed my dry patches in just a few days. Feels great on the skin!",
                date: 1716644245448
            },
            {
                name: "Erin Mcdonald",
                rating: 4,
                comment: "Really helps with irritation, but it’s a bit thick for daytime use.",
                date: 1716633245448
            },
            {
                name: "Bobby Riley",
                rating: 5,
                comment: "My skin texture has improved so much. Highly recommend!",
                date: 1716622245448
            }
        ]
    }
];