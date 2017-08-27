var lang = null;

// Get language we should display in
var urlLangParam = decodeURIComponent((new RegExp('[?|&]lang=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;

if(urlLangParam === 'en'){
    lang = 'EN';
}else{
    lang = 'AL';
}

var i18n = {
    title:{
        AL: 'Glassin',
        EN: 'Glassin',
    },
    nav:{
        about:{
            AL: 'Rreth Nesh',
            EN: 'About Us'
        },
        services:{
            AL: 'Sherbimet',
            EN: 'Services'
        },
        portfolio:{
            AL: 'Portfolio',
            EN: 'Portfolio'
        },
        contact:{
            AL: 'Kontakti',
            EN: 'Contact'
        }
    },
    section:{
        aboutTitle:{
            AL: 'Historiku i Kompanise',
            EN: 'Company History'
        },
        about:{
            EN: 'KON-AL was the first company that brought aluminum trends in the country. It was founded in 1992 and it stayed active until 1999, when it changed its name to Metaj. Metaj brought innovations to the market by adding plastic and glass products to its product assortments thus guaranteeing the production of reliable and qualitative product variety.Expanding the product collection resulted in the creation of GlassIN brand, a bigger company dominated by modern minimalism, accuracy, quality and visual refinement in all products of all types and materials.GlassIN has a modest place in all the buildings with architectural identity in the country. Constituted by experienced engineers in the field architecture, construction and electronics, GlassIN achieves the production of maximum quality products. GlassIN In is an impressive conjunction of trade and high-end professionalism.',
            AL: 'KON-AL ishte kompania e pare qe solli aluminin ne trend ketu. Filloi punen me 1992 dhe qendroi deri ne vitin 1999, kur iu nderrua emri ne Metaj. Metaj solli inovacione ne market duke shtuar plastiken dhe xhamin ne produktet e saja duke garantuar produksionin dhe qualitetin e produkteve te ndryshme. Zgjerimi i vazhdueshem i koleksionit te produkteve rezultoi ne krijimin e brendit GlassIN, nje kompani e dominuar nga modernja, saktesia, kualiteti dhe pamja e bukur e produkteve te te gjitha llojeve dhe materialeve.'
        }
    }
};

// Display selected language
$(function() {
    if(urlLangParam === 'en'){
        $('.selected-language').html('English');
    }else{
        $('.selected-language').html('Shqip');
    }
});
