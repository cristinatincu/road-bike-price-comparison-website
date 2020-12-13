module.exports = {
    get: jest
        .fn()
        .mockImplementation((url) => {
            if (url.match(/.*\d+/g)) // if url contains bike id send comparison
                return Promise.resolve(comparisons)
            else if (!url.includes("undefined")) // if url doesn't include undefined then send road bikes
                return Promise.resolve(roadBikes)
            else
                return Promise.resolve({data: null})
        })
}

const roadBikes = {
    data: {
        count: 26,
        rows: [{
            "id": 1,
            "name": "VITUS VITESSE EVO CRS",
            "image_url": "//www.wigglestatic.com/product-media/104684117/Vitus-Vitesse-EVO-CRS-Road-Bike-Ultegra-2021_01.jpg?w=960&h=430&a=7",
            "description": "Setting the standard for other"
        }, {
            "id": 2,
            "name": "VITUS RAZOR VR",
            "image_url": "//www.wigglestatic.com/product-media/104680995/Vitus-Razor-VR-Disc-Road-Bike-Sora-2021_01.jpg?w=960&h=430&a=7",
            "description": "With its light alloy frame and carbon fork"
        }, {
            "id": 3,
            "name": "VITUS ZENIUM",
            "image_url": "//www.wigglestatic.com/product-media/104681145/Vitus-Zenium-Road-Bike-Tiagra-2021_01.jpg?w=960&h=430&a=7",
            "description": "Bringing you an ideal mix of performance"
        }, {
            "id": 4,
            "name": "VITUS RAZOR",
            "image_url": "//www.wigglestatic.com/product-media/101845390/prod190319_Black-Silver_NE_01.jpg?w=960&h=430&a=7",
            "description": "A race bike for efficient, comfort a style, the Vitus Razor is equipped with a Shimano Claris 2x8 gearset, mechanical disc brakes and superb finishing kit to ensure you have the confidence, control and poise for a great road cycling experience."
        }, {
            "id": 5,
            "name": "VITUS VITESSE EVO TEAM ETAP",
            "image_url": "//www.wigglestatic.com/product-media/101847941/prod183347_Red_NE_01.jpg?w=960&h=430&a=7",
            "description": "Engineered for race-winning excellence, this Vitesse EVO Team model provides exceptional rider comfort, agility and efficiency, and is equipped with a SRAM eTap wireless 2x12 drivetrain, hydraulic disc brakes and top-level finishing kit."
        }, {
            "id": 6,
            "name": "ORRO GOLD",
            "image_url": "//www.wigglestatic.com/product-media/106030749/Orro-Gold-SMU-Road-Bike-2021_red_01.jpg?w=960&h=430&a=7",
            "description": "The Orro Gold Road Bike is a versatile endurance-optimised road bike for long-distance events, weekend group rides and intense training sessions - plus it features a full carbon frameset and a Shimano Tiagra 2x10 groupset."
        }, {
            "id": 7,
            "name": "RIDLEY FENIX SLA",
            "image_url": "//www.wigglestatic.com/product-media/105610765/Ridley-Fenix%20SLA%20Disc%20Tiagra%20Road%20Bike-red01.jpg?w=960&h=430&a=7",
            "description": "The Ridley Fenix SLA Disc Tiagra Road Bike features an aluminium frame with a Shimano Tiagra 2x10-Speed drivetrain, disc brakes and a superb finishing kit, giving it performance for racing, training, group rides and club outings."
        }, {
            "id": 8,
            "name": "BRAND-X",
            "image_url": "//www.wigglestatic.com/product-media/100375136/Brand-X-Road-Bike-Road-Bikes-Black-2017-BRNDXROADXL-0.jpg?w=960&h=430&a=7",
            "description": "The Brand-X road bike offers unrivalled value for money, with a full Shimano Tourney 2x7 speed gear system and lightweight aluminium frame, this bike is built with reliable components to make every ride the best of your life."
        }, {
            "id": 9,
            "name": "VITUS VITESSE EVO CRX ETAP AXS",
            "image_url": "//www.wigglestatic.com/product-media/104684208/Vitus-Vitesse-EVO-CRX-eTap-AXS-Road-Bike-Red-2021_01.jpg?w=960&h=430&a=7",
            "description": "With modern features and modern geometry, the Vitus Vitesse EVO CRX eTap AXS Road Bike will have you leading the pack. SRAM's top-end RED eTap wireless gearing and carbon Reynolds wheels combine to give you the edge on race day."
        }, {
            "id": 10,
            "name": "CUBE AXIAL WS PRO",
            "image_url": "//www.wigglestatic.com/product-media/106295821/Cube-Axial-WS-pro-Hardtail-Bike-429200_01.jpg?w=960&h=430&a=7",
            "description": "The Cube Axial WS Pro Road Bike features a Superlite aluminium frame and carbon forks with women's specific geometry, a Shimano 2x9-Speed groupset with disc brakes and Cube RA Aero wheels for efficient road racing and training."
        }, {
            "id": 11,
            "name": "CUBE AXIAL WS RACE",
            "image_url": "//www.wigglestatic.com/product-media/106121487/Cube-Axial-WS-Race-Road-Bike_01.jpg?w=960&h=430&a=7",
            "description": "The Cube Axial WS Race Road Bike is a fast, agile and versatile road bike that's engineered for a balance of performance and fun. Plus, it features an aluminium Superlite frame, carbon forks and a Shimano 105 2x11-Speed groupset."
        }, {
            "id": 12,
            "name": "VITUS VITESSE EVO CRX ETAP",
            "image_url": "//www.wigglestatic.com/product-media/101847952/prod183344_Black%20Chameleon_NE_01.jpg?w=960&h=430&a=7",
            "description": "Engineered and equipped for the best performance imaginable, this Vitus Vitesse EVO CRX Road Bike features a SRAM Red eTap 2x12 drivetrain, hydraulic disc brakes and a superb finishing kit to blast you past the race-pack towards the silverware."
        }, {
            "id": 13,
            "name": "VITUS ZENIUM CRS",
            "image_url": "//www.wigglestatic.com/product-media/104681065/Vitus-Zenium-CRS-Di2-Road-Bike-Ultegra-Di2-2021_01.jpg?w=960&h=430&a=7",
            "description": "Versatile, fast and comfortable, the Vitus Zenium CRS Di2 Road bike is perfect for day-long rides, Crit races and hard training use. The UD carbon frameset is paired with Shimano's electronic Ultegra gearing and hydraulic disc brakes."
        }, {
            "id": 14,
            "name": "ZANNATA Z21",
            "image_url": "//www.wigglestatic.com/product-media/106093037/prod200922_Black%20-%20Red_NE_01.jpg?w=960&h=430&a=7",
            "description": "The Zannata Z21 Road Bike is a comfortable and reliable ladies road bike that features a full aluminium frameset, a Shimano Claris drivetrain, caliper rim brakes and Michelin Dynamic Sport tyres."
        }, {
            "id": 15,
            "name": "ZANNATA Z25",
            "image_url": "//www.wigglestatic.com/product-media/106093040/Zannata-Z25-Road-Bike.jpg?w=960&h=430&a=7",
            "description": "Bringing you responsive handling and efficient power delivery, the Zannata Z25 Road Bike is ideal for new road cyclists. Its light aluminium frame is built up with reliable Shimano Claris 3x8 gearing and Velox Roadrunner wheels."
        }, {
            "id": 16,
            "name": "VITUS RAZOR W",
            "image_url": "//www.wigglestatic.com/product-media/104681077/Vitus-Razor-W-Disc-Road-Bike-Claris-2021_01.jpg?w=960&h=430&a=7",
            "description": "Perfect for all types of road rides, the Vitus Razor W Disc Road Bike has a strong and light aluminium frame and carbon forks. These combine with the reliable Shimano Claris gears and Tektro disc brakes for a reliable, responsive ride."
        }, {
            "id": 17,
            "name": "SPECIALIZED ALLEZ ELITE 2021",
            "image_url": "https://dbyvw4eroffpi.cloudfront.net/product-media/2N2U/1000/1000/Specialized-Allez-Elite-Road-Bike-2020-Satin-Black-Blue-Reflective-Clean.jpg",
            "description": "The Allez is Specialized's entry-level road bike and this Elite model features Shimano 105 shifting and Axis 1.0 caliper brakes. The E5 alloy frame is paired with a carbon fork for a stiff, strong construction together with stable, responsive handling. The FACT carbon also helps to damp vibrations for smoother riding. A versatile geometry suits a range of rider positions, and although it's slightly more relaxed than some, it's still oriented towards performance. "
        }, {
            "id": 18,
            "name": "PINNACLE LATERITE 3 2020",
            "image_url": "https://www.evanscycles.com/images/products/93262001_l.jpg",
            "description": "ABOUT THE BIKE\nIntroducing the Pinnacle Laterite. Features and details that have given the Pinnacle Dolomite its coveted and award winning name can be found all over the Laterite. The design, which is ideal for the UK conditions see's all the cabling hidden in the frame out of harm’s way. A threaded bottom bracket means easy maintenance and mudguard fittings mean dry and clean kit all year round. Combined with performance enhancing features including a carbon bladed fork and low overall weight which the Laterite punches well above. Comfort is not forgotten with an ergonomic handlebar shape, thick comfort bar tape and geometry that is also borrowed from its sibling to give a balanced riding position, somewhere between out and out race and up right sportive. Looking for some performance but on a budget. Maybe your first introduction to road bikes, it could be an upgrade, or just a winter bike for those chilly mornings. Look no further than the Laterite 3, at under 10kg it has it all with a stiff 24mm axle chainset and Shimano's excellent 105 11 speed groupset. Finished off with high quality rubber from Schwalbe will all help get you down the road pretty quickly.\nKEY FEATURES\n6061-T6 heat treated Aluminium Frame for stiff but light constuction allows you to convert more of your power into speed\nCarbon Fork is engineered to flex to absorb shock and vibration\nShimano 105 22 Speed Drivetrain for precise gear changes and making it easier to ride up steep hills\nTektro R315 Caliper Brakes for controlled stopping in all conditions\nContinental Ultra Sport 700 x 25c Tyres for the fastest speed on the tarmac\n\nABOUT THE BRAND\nPinnacle is a UK bike brand whose mission is to make better bikes available for all riders and for 2019 we’re offering our most exciting line up to date. We make drop-bar bikes with fatter tyres that can go further than the traditional road bike, mountain bikes that are more engaging to ride on difficult terrain and city bikes that are truly practical for everyday city use. Our fitness bikes are more comfortable than you might expect and our leisure bikes are simply wonderfully leisurely and easy to ride. Even our children’s bikes draw on both our own memories of childhood cycling and our experience as parents. We hope you’ll find the perfect bike for you within our range.\nBIKE SIZING\nChoosing the bike size depends on the type of bike, your height, your riding style, and your preference. A correct fitting bike will be more comfortable, more efficient and more fun to ride. This bike size guide gives our customers general advice on choosing the right size. It is a guide only and we always recommend visiting one of our stores or contacting one of our experts.\nRoad Bike Size Guide\n\nRoad Bike Buying Guide\nProduct code: 932620"
        }, {
            "id": 19,
            "name": "VITUS VITESSE EVO CR",
            "image_url": "//www.wigglestatic.com/product-media/104683874/Vitus-Vitesse-EVO-CR-Road-Bike-105-2021_01.jpg?w=960&h=430&a=7",
            "description": "The updated Vitus Vitesse Evo CR Road Bike has been completely overhauled. Now with increased rigidity and a race-optimised riding position, the full carbon frameset is combined with Shimano 105 gearing and hydraulic disc brakes."
        }, {
            "id": 20,
            "name": "FUJI FEATHER URBAN BIKE 2021",
            "image_url": "//www.wigglestatic.com/product-media/105701270/Fuji-Feather-Urban-Bike-2021_01.jpg?w=960&h=430&a=7",
            "description": "The Fuji Feather Urban Bike has classic track bike looks, a comfortable Reynolds steel frame, drop handlebars and a single-speed drivetrain. Ready for urban rides, its rear wheel can be run as a fixed or freewheel type."
        }, {
            "id": 21,
            "name": "ORRO GOLD 2021",
            "image_url": "https://media.chainreactioncycles.com/is/image/ChainReactionCycles/prod199724_Black_NE_01?wid=960&hei=498",
            "description": "The Orro Gold is a versatile, powerful and efficient road bike that's ideal for weekend races, club rides, intense training sessions and relaxing afterwork fitness loops. It features a high-quality Orro carbon frameset that's optimised to provide exceptional stiffness and agility while retaining a low weight. Plus, it's equipped with a Shimano Tiagra 2x10-Speed groupset with powerful caliper rim brakes and Fulcrum Racing R900 wheels wrapped in Continental Race tyres, giving a sublime balance of smooth gear shifting, fast speeds and dependable performance anywhere."
        }, {
            "id": 22,
            "name": "VITUS ZENIUM CRW",
            "image_url": "//www.wigglestatic.com/product-media/104681061/Vitus-Zenium-CRW-Road-Bike-105-2021_01.jpg?w=960&h=430&a=7",
            "description": "Light, strong and comfortable to ride, the Vitus Zenium CRW Road bike has a UD Carbon frameset with female-specific geometry and components. This is combined with reliable Shimano 105 gears with powerful hydraulic disc brakes."
        }, {
            "id": 23,
            "name": "MERIDA REACTO 6000 2020",
            "image_url": "https://tredz.azureedge.net/prodimg/219174-700534_1_Zoom.jpg",
            "description": "Product Description\nTried and tested on stages of the world’s most prestigious races, the Reacto is Merida’s aero road bike. With a range to suit any budget the fantastic Reacto aero road bike retains its reputation for incredible value. Lighter and more aerodynamically efficient, the new Reacto is 8 watts more efficient than previous versions of the bikes.\nKey Features:\nCarbon frame and fork with CF2 slightly relaxed geo\nShimano Ultegra 2x11 drivetrain for the smooth shifting\nFulcrum Racing 900 DB wheelset for speed and control\nShimano Ultegra hydraulic disc brakes give powerful stopping power\nSizes: 47, 50, 52, 54, 56, 59cm\nColours: Gloss Black/Dark Silver\nThe Merida Reacto Disc 6000 is available with 0% APR finance\nMerida Reacto Review\nHighlights:\nX-Taper Headtube\nInternal Cable Routing\nDi2 Routing\nNano Matrix Carbon\nAnti Wrinkle System\nS-Flex\nCarbon Fork\nDisc Cooler\nInternal Clamp\nFlip Flop Head\nAll Tredz bikes are:\nFully built & ready to ride\nFully checked & tested by Cytech qualified mechanics\nAvailable with 0% APR finance on any basket over £99\n365 day no hassle returns\nFree delivery in the UK Mainland on a date that suits you\nIn the box with every Tredz bike is:\nFree Tredz 9 key trail tool\nFree Tredz pedal spanner\nFree basic pedals\nTredz drawstring kit bag\n16 point quality control check sheet\nBasic bike setup instructions\nFree Cycle Plan insurance voucher (8 weeks)\nOccasionally, without notice, manufacturers change product design and/or specifications."
        }, {
            "id": 24,
            "name": "FUJI SPORTIF 2.1",
            "image_url": "//www.wigglestatic.com/product-media/105701191/Fuji-Sportif-21-Road-Bike_2021_01.jpg?w=960&h=430&a=7",
            "description": "Taking its frame geometry from Fuji's top-end endurance model, the Fuji Sportif 2.1 Road Bike is versatile and comfortable to ride. Its aluminium frame is paired with reliable Shimano Sora 18-Speed gears and dual-pivot brakes."
        }, {
            "id": 25,
            "name": "FUJI TRANSONIC 2.1",
            "image_url": "//www.wigglestatic.com/product-media/105701261/2021_Fuji_TRANSONIC_21_D_Gray.jpg?w=960&h=430&a=7",
            "description": "Fast, agile and stable for versatile race performance, the Fuji Transonic 2.1 Road Bike features a carbon C10 frameset, a Shimano Ultegra 2x11 groupset, hydraulic disc brakes, FSA Trimax Tubeless wheels and Vittoria Rubino Pro tyres."
        }, {
            "id": 26,
            "name": "CUBE ATTAIN RACE",
            "image_url": "//www.wigglestatic.com/product-media/106100559/476300_light.jpg?w=960&h=430&a=7",
            "description": "Ready for racing, the Cube Attain Race Road Bike (2021) features an aluminium Superlite frame with Road Comfort geometry for excellent strength, speed and reliability."
        }]
    }
}

const comparisons = {
    data: {
        "id": 3,
        "name": "VITUS ZENIUM",
        "image_url": "//www.wigglestatic.com/product-media/104681145/Vitus-Zenium-Road-Bike-Tiagra-2021_01.jpg?w=960&h=430&a=7",
        "description": "Bringing you an ideal mix of performance and comfort, the Vitus Zenium Road Bike combines a lightweight T700 UD carbon frame with reliable Shimano Tiagra gears. Plus, its disc brakes ensure reliable braking power, even in the wet.",
        "roadBikes": [{
                "id": 1089,
                "size": "XS",
                "url": "https://www.wiggle.co.uk/vitus-zenium-road-bike-tiagra-2021",
                "color": "Anthracite",
                "price": "£1,099.99",
                "name": "VITUS ZENIUM",
                "road_bike_id": 3
            }, {
            "id": 1090,
            "size": "S",
            "url": "https://www.wiggle.co.uk/vitus-zenium-road-bike-tiagra-2021",
            "color": "Anthracite",
            "price": "£1,099.99",
            "name": "VITUS ZENIUM",
            "road_bike_id": 3
        }, {
            "id": 1091,
            "size": "M",
            "url": "https://www.wiggle.co.uk/vitus-zenium-road-bike-tiagra-2021",
            "color": "Anthracite",
            "price": "£1,099.99",
            "name": "VITUS ZENIUM",
            "road_bike_id": 3
        }, {
            "id": 1092,
            "size": "L",
            "url": "https://www.wiggle.co.uk/vitus-zenium-road-bike-tiagra-2021",
            "color": "Anthracite",
            "price": "£1,099.99",
            "name": "VITUS ZENIUM",
            "road_bike_id": 3
        }, {
            "id": 1093,
            "size": "XL",
            "url": "https://www.wiggle.co.uk/vitus-zenium-road-bike-tiagra-2021",
            "color": "Anthracite",
            "price": "£1,099.99",
            "name": "VITUS ZENIUM",
            "road_bike_id": 3
        }, {
            "id": 1094,
            "size": "XXL",
            "url": "https://www.wiggle.co.uk/vitus-zenium-road-bike-tiagra-2021",
            "color": "Anthracite",
            "price": "£1,099.99",
            "name": "VITUS ZENIUM",
            "road_bike_id": 3
        }, {
            "id": 1094,
            "size": "XXL",
            "url": "https://www.tredz.co.uk/vitus-zenium-road-bike-tiagra-2021",
            "color": "Anthracite",
            "price": "£1,099.99",
            "name": "VITUS ZENIUM",
            "road_bike_id": 3
        }]
    }
}