// 中医体质测试数据 —— 参照《中医体质分类与判定》（ZYYXH/T157-2009）九种体质
// 简化版：每种体质 5 题，共 45 题；每题按"没有/很少/有时/经常/总是"记 1~5 分
// 转化分 = (原始分 - 条目数) / (条目数 × 4) × 100

// 九种体质档案（四语）
export const constitutionTypes = {
  pinghe: {
    glyph: '和',
    name: { zh: '平和质', en: 'Balanced Constitution', es: 'Constitución Equilibrada', fr: 'Constitution Équilibrée' },
    pinyin: 'píng hé zhì',
    tagline: {
      zh: '精力充沛、心态平和的理想体质',
      en: 'The ideal state: vigorous, calm and adaptable',
      es: 'El estado ideal: vigoroso, sereno y adaptable',
      fr: "L'état idéal : vigoureux, serein et adaptable",
    },
    desc: {
      zh: '平和质是中医认为最理想的体质状态：精力充沛、睡眠良好、情绪稳定、适应力强、很少生病。形体匀称、面色红润有光泽，是脏腑功能协调、气血阴阳平衡的表现。',
      en: 'The Balanced constitution is the ideal state in TCM: full of energy, sleeping well, emotionally steady, adaptable and rarely ill. A harmonious body reflects internal balance of Qi, blood, Yin and Yang.',
      es: 'La constitución Equilibrada es el estado ideal en la MTC: plena de energía, buen sueño, emociones estables, gran capacidad de adaptación y poca enfermedad. Refleja el equilibrio interno del Qi, la sangre, el Yin y el Yang.',
      fr: "La constitution Équilibrée est l'état idéal en MTC : pleine d'énergie, bon sommeil, émotions stables, grande capacité d'adaptation et rarement malade. Elle reflète l'équilibre interne du Qi, du sang, du Yin et du Yang.",
    },
    traits: {
      zh: ['精力充沛，不易疲劳', '睡眠安稳，醒后解乏', '情绪平稳，乐观开朗', '适应力强，很少生病'],
      en: ['Energetic and rarely tired', 'Sound sleep, waking refreshed', 'Stable, optimistic mood', 'Adaptable and seldom ill'],
      es: ['Con energía y rara vez cansado', 'Sueño reparador', 'Ánimo estable y optimista', 'Gran adaptabilidad, poca enfermedad'],
      fr: ['Énergique et rarement fatigué', 'Sommeil réparateur', 'Humeur stable et optimiste', "Bonne adaptation, tombe rarement malade"],
    },
    advice: {
      zh: ['顺应四季：春夏养阳、秋冬养阴，饮食有节', '保持规律作息与适度运动（快走、太极）', '饮食均衡，不偏寒不偏热，粗细搭配', '保持良好心态，节制不过度'],
      en: ['Live with the seasons; eat moderately and regularly', 'Keep a steady routine with gentle exercise (walking, Tai Chi)', 'Eat a balanced diet — neither too cooling nor too warming', 'Preserve your good habits; avoid excess in anything'],
      es: ['Vive según las estaciones; come con moderación y orden', 'Mantén una rutina regular con ejercicio suave (caminar, Taichí)', 'Dieta equilibrada, ni muy fría ni muy caliente', 'Conserva tus buenos hábitos y evita los excesos'],
      fr: ["Vivez au rythme des saisons ; mangez avec modération et régularité", 'Gardez une routine stable et un exercice doux (marche, Taï-chi)', 'Alimentation équilibrée, ni trop froide ni trop chaude', 'Préservez vos bonnes habitudes et évitez tout excès'],
    },
  },
  qixu: {
    glyph: '气',
    name: { zh: '气虚质', en: 'Qi Deficiency', es: 'Deficiencia de Qi', fr: 'Déficience de Qi' },
    pinyin: 'qì xū zhì',
    tagline: {
      zh: '容易疲乏、气短、爱出汗',
      en: 'Tires easily, short of breath, sweats lightly',
      es: 'Se cansa fácil, falta de aliento, sudor ligero',
      fr: 'Fatigue facile, souffle court, légère transpiration',
    },
    desc: {
      zh: '气虚质就像身体的"发动机动力不足"：气的推动力减弱，容易疲乏、说话声低、稍动即喘或出汗，防御力下降而容易感冒。多见于先天不足、久病、过度劳累或缺乏运动的人。',
      en: 'Qi Deficiency is like a body running on a low-power engine: reduced vitality brings easy fatigue, a weak voice, breathlessness or sweating after light activity, and weaker resistance to colds.',
      es: 'La Deficiencia de Qi es como un motor con poca potencia: la fatiga llega pronto, la voz es débil, aparece jadeo o sudor con poco esfuerzo y la resistencia a los resfriados disminuye.',
      fr: "La Déficience de Qi ressemble à un moteur sous-alimenté : fatigue rapide, voix faible, essoufflement ou transpiration au moindre effort, et moindre résistance aux rhumes.",
    },
    traits: {
      zh: ['容易疲乏，说话声低', '稍动即气短或出汗', '容易感冒、头晕', '面色偏黄或苍白'],
      en: ['Tires easily, weak voice', 'Short of breath or sweaty after light effort', 'Prone to colds and dizziness', 'Pale or sallow complexion'],
      es: ['Se cansa fácil, voz débil', 'Jadeo o sudor con poco esfuerzo', 'Propenso a resfriados y mareos', 'Cutis pálido o amarillento'],
      fr: ['Fatigue facile, voix faible', "Souffle court ou sue au moindre effort", 'Sujette aux rhumes et vertiges', 'Teint pâle ou jaunâtre'],
    },
    advice: {
      zh: ['饮食：山药、大枣、小米、黄芪炖汤等补气食物', '运动宜缓和（散步、太极），避免大汗淋漓', '起居规律，避免过度劳累与熬夜', '可按揉足三里穴保健'],
      en: ['Diet: Qi-nourishing foods — yam, jujube dates, millet, Huang Qi (astragalus) soup', 'Exercise gently (walking, Tai Chi); avoid heavy sweating', 'Keep regular hours; avoid overwork and late nights', 'Try acupressure at Zusanli (ST-36) for daily support'],
      es: ['Dieta: alimentos que nutren el Qi — ñame, dátiles jujuba, mijo, sopa de astrágalo', 'Ejercicio suave (caminar, Taichí); evita sudar en exceso', 'Horarios regulares; evita el exceso de trabajo y trasnochar', 'Prueba la digitopresión en Zusanli (EST-36)'],
      fr: ["Alimentation : aliments qui nourrissent le Qi — igname, jujubes, millet, soupe d'astragale", 'Exercice doux (marche, Taï-chi) ; évitez de trop transpirer', 'Horaires réguliers ; évitez le surmenage et les nuits tardives', 'Essayez la digitopression au point Zusanli (EST-36)'],
    },
  },
  yangxu: {
    glyph: '阳',
    name: { zh: '阳虚质', en: 'Yang Deficiency', es: 'Deficiencia de Yang', fr: 'Déficience de Yang' },
    pinyin: 'yáng xū zhì',
    tagline: {
      zh: '怕冷、手脚凉、喜温热',
      en: 'Sensitive to cold, cold limbs, prefers warmth',
      es: 'Sensible al frío, extremidades frías, prefiere el calor',
      fr: 'Sensible au froid, membres froids, aime la chaleur',
    },
    desc: {
      zh: '阳虚质是身体的"火力不足"：温煦功能减弱，常年怕冷、手脚冰凉，吃凉的东西容易腹泻，喜欢温暖的环境。多因先天阳弱、久居寒凉或贪食生冷所致。',
      en: 'Yang Deficiency means the body\'s "inner fire" is low: warming functions weaken, so you feel cold year-round, have icy hands and feet, and may get loose stools after cold food.',
      es: 'La Deficiencia de Yang significa que el «fuego interno» es bajo: la función de calentar se debilita, sientes frío todo el año, tienes manos y pies helados y la comida fría puede soltarte el vientre.',
      fr: "La Déficience de Yang signifie un « feu intérieur » bas : la fonction de réchauffement faiblit, vous avez froid toute l'année, les mains et pieds glacés, et les aliments froids peuvent provoquer des selles molles.",
    },
    traits: {
      zh: ['怕冷，手脚常年冰凉', '胃脘、背部或腰膝怕冷', '吃凉的东西不舒服或腹泻', '大便偏稀、小便清长'],
      en: ['Always cold; icy hands and feet', 'Cold-sensitive stomach, back or knees', 'Discomfort or loose stools from cold food', 'Loose stools, pale and profuse urine'],
      es: ['Siempre con frío; manos y pies helados', 'Estómago, espalda o rodillas sensibles al frío', 'Molestias o diarrea con comida fría', 'Heces blandas, orina clara y abundante'],
      fr: ['Toujours froid ; mains et pieds glacés', 'Estomac, dos ou genoux sensibles au froid', 'Gêne ou selles molles après le froid', 'Selles molles, urine claire et abondante'],
    },
    advice: {
      zh: ['饮食：生姜、羊肉、桂圆、韭菜等温阳食物，少食生冷', '注意保暖，尤其腰腹与足部；可艾灸关元、足三里', '白天晒太阳，做缓和运动以生阳气', '避免长期处于空调冷环境'],
      en: ['Diet: warming foods — ginger, lamb, longan, chives; cut back on raw and cold items', 'Stay warm, especially the lower back, abdomen and feet; consider moxibustion', 'Get gentle sunshine and light exercise to build Yang', 'Avoid long hours in air-conditioned chill'],
      es: ['Dieta: alimentos calientes — jengibre, cordero, longan, cebolleta; menos crudo y frío', 'Abriga bien, sobre todo espalda baja, abdomen y pies; considera la moxibustión', 'Toma sol suave y haz ejercicio ligero para tonificar el Yang', 'Evita pasar muchas horas en aire acondicionado'],
      fr: ['Alimentation réchauffante — gingembre, agneau, longane, ciboule ; moins de cru et de froid', 'Restez au chaud, surtout lombes, ventre et pieds ; pensez à la moxibustion', 'Exposition douce au soleil et exercice léger pour tonifier le Yang', 'Évitez les longues heures sous la climatisation'],
    },
  },
  yinxu: {
    glyph: '阴',
    name: { zh: '阴虚质', en: 'Yin Deficiency', es: 'Deficiencia de Yin', fr: 'Déficience de Yin' },
    pinyin: 'yīn xū zhì',
    tagline: {
      zh: '手足心热、口干、易盗汗',
      en: 'Hot palms and soles, dry mouth, night sweats',
      es: 'Calor en palmas y plantas, boca seca, sudores nocturnos',
      fr: 'Chaleur aux paumes et plantes, bouche sèche, sueurs nocturnes',
    },
    desc: {
      zh: '阴虚质是身体的"津液不足"：滋润作用下降，出现手足心热、口干咽燥、皮肤偏干、睡眠中出汗（盗汗）等"内热"表现。多见于嗜食辛辣、熬夜或久病耗阴者。',
      en: 'Yin Deficiency means the body\'s "cooling fluids" run low: heat signs appear — hot palms and soles, dry mouth and throat, dry skin, and sweating during sleep.',
      es: 'La Deficiencia de Yin significa que los «líquidos refrescantes» escasean: aparecen signos de calor — palmas y plantas calientes, boca y garganta secas, piel seca y sudores nocturnos.',
      fr: "La Déficience de Yin signifie que les « liquides rafraîchissants » manquent : des signes de chaleur apparaissent — paumes et plantes chaudes, bouche et gorge sèches, peau sèche et sueurs nocturnes.",
    },
    traits: {
      zh: ['手足心发热、阵阵烘热', '口干咽燥、总想喝水', '皮肤口唇偏干', '睡眠不佳、睡着后出汗'],
      en: ['Hot palms and soles, flushes of heat', 'Dry mouth and throat, frequent thirst', 'Dry skin and lips', 'Restless sleep with night sweats'],
      es: ['Palmas y plantas calientes, oleadas de calor', 'Boca y garganta secas, sed frecuente', 'Piel y labios secos', 'Sueño inquieto con sudores nocturnos'],
      fr: ['Paumes et plantes chaudes, bouffées de chaleur', 'Bouche et gorge sèches, soif fréquente', 'Peau et lèvres sèches', 'Sommeil agité avec sueurs nocturnes'],
    },
    advice: {
      zh: ['饮食：银耳、百合、梨、鸭肉等滋阴食物，少吃辛辣煎炸', '避免熬夜，中午可小憩以养阴', '运动不宜剧烈，游泳、瑜伽较适宜', '保持情绪平和，避免急躁耗阴'],
      en: ['Diet: Yin-nourishing foods — white fungus, lily bulb, pear, duck; less spicy and fried food', 'Avoid late nights; a midday nap helps restore Yin', 'Prefer calm exercise like swimming or yoga', 'Keep emotions even; agitation drains Yin'],
      es: ['Dieta: alimentos que nutren el Yin — hongo blanco, bulbo de lirio, pera, pato; menos picante y frito', 'Evita trasnochar; una siesta corta ayuda a restaurar el Yin', 'Prefiere ejercicio sereno como natación o yoga', 'Mantén la calma; la agitación consume el Yin'],
      fr: ['Aliments qui nourrissent le Yin — champignon blanc, bulbe de lys, poire, canard ; moins d\u2019épicé et de frit', 'Évitez les nuits tardives ; une sieste restaure le Yin', 'Préférez un exercice calme comme la natation ou le yoga', 'Gardez votre calme ; l\u2019agitation épuise le Yin'],
    },
  },
  tanshi: {
    glyph: '痰',
    name: { zh: '痰湿质', en: 'Phlegm-Dampness', es: 'Flema-Humedad', fr: 'Glaires-Humidité' },
    pinyin: 'tán shī zhì',
    tagline: {
      zh: '身重困倦、腹部松软、口中黏腻',
      en: 'Heavy body, soft belly, sticky mouth feel',
      es: 'Cuerpo pesado, abdomen blando, boca pastosa',
      fr: 'Corps lourd, ventre mou, bouche collante',
    },
    desc: {
      zh: '痰湿质是身体的"水液代谢迟缓"：湿浊内停，常觉身体沉重、胸闷腹胀、额头出油、口中黏腻，腹部肥满松软。多与嗜食肥甘厚味、缺乏运动有关。',
      en: 'Phlegm-Dampness means the body\'s "water metabolism" is sluggish: dampness accumulates, bringing a heavy body, chest tightness and bloating, an oily forehead and a sticky mouth feel.',
      es: 'Flema-Humedad significa que el «metabolismo del agua» va lento: la humedad se acumula y trae cuerpo pesado, opresión en el pecho, hinchazón, frente grasosa y boca pastosa.',
      fr: "Glaires-Humidité signifie un « métabolisme de l'eau » ralenti : l'humidité s'accumule, d'où un corps lourd, oppression thoracique, ballonnements, front gras et bouche collante.",
    },
    traits: {
      zh: ['身体沉重、容易困倦', '腹部肥满松软', '额头油脂多、口中黏腻', '痰多、大便不畅'],
      en: ['Heavy body, easily drowsy', 'Soft, full abdomen', 'Oily forehead, sticky mouth', 'Much phlegm, sluggish stools'],
      es: ['Cuerpo pesado, somnolencia fácil', 'Abdomen blando y prominente', 'Frente grasosa, boca pastosa', 'Mucho flema, evacuación perezosa'],
      fr: ['Corps lourd, somnolence facile', 'Ventre mou et plein', 'Front gras, bouche collante', 'Beaucoup de mucus, selles paresseuses'],
    },
    advice: {
      zh: ['饮食清淡：薏米、冬瓜、白萝卜、陈皮；少肥甘厚味与甜食', '加强运动（慢跑、快走）以化湿', '居处避潮湿，出汗后及时擦干', '控制体重，戒宵夜'],
      en: ['Light diet: Job\'s tears, winter melon, radish, dried tangerine peel; less rich, sweet food', 'Move more (jogging, brisk walking) to transform dampness', 'Keep your living space dry; towel off promptly after sweating', 'Watch your weight; skip late-night snacks'],
      es: ['Dieta ligera: lágrimas de Job, calabaza blanca, rábano, piel de mandarina; menos comida rica y dulce', 'Muévete más (trote, caminata rápida) para transformar la humedad', 'Mantén la vivienda seca; sécate pronto tras sudar', 'Controla el peso; evita cenar tarde'],
      fr: ['Alimentation légère : larmes de Job, courge cireuse, radis, écorce de mandarine ; moins de riches et de sucré', 'Bougez davantage (jogging, marche rapide) pour transformer l’humidité', 'Gardez le logement sec ; essuyez-vous vite après avoir transpiré', 'Surveillez le poids ; évitez les repas tardifs'],
    },
  },
  shire: {
    glyph: '湿',
    name: { zh: '湿热质', en: 'Damp-Heat', es: 'Humedad-Calor', fr: 'Humidité-Chaleur' },
    pinyin: 'shī rè zhì',
    tagline: {
      zh: '面部油光、易生痘、口苦',
      en: 'Oily face, acne-prone, bitter taste',
      es: 'Cara grasosa, propenso al acné, sabor amargo',
      fr: 'Visage gras, sujet à l’acné, goût amer',
    },
    desc: {
      zh: '湿热质是身体里"湿与热胶结"：面部油光发亮、易生痤疮，口苦口臭，大便黏滞不爽，小便色深。多见于嗜食辛辣油腻烟酒、长期熬夜者。',
      en: 'Damp-Heat is "moisture stuck with heat" inside the body: a shiny oily face, acne, a bitter taste or bad breath, sticky stools and dark urine.',
      es: 'Humedad-Calor es «humedad unida al calor» en el cuerpo: cara grasa y brillante, acné, sabor amargo o mal aliento, heces pegajosas y orina oscura.',
      fr: "L'Humidité-Chaleur est de « l'humidité collée à la chaleur » : visage gras et luisant, acné, goût amer ou mauvaise haleine, selles collantes et urine foncée.",
    },
    traits: {
      zh: ['面部或鼻部油亮发光', '易生痤疮、疮疖', '口苦口臭、大便黏滞', '小便色深'],
      en: ['Shiny oily face or nose', 'Prone to pimples and boils', 'Bitter taste, bad breath, sticky stools', 'Dark-colored urine'],
      es: ['Cara o nariz grasosa y brillante', 'Propenso a granos y furúnculos', 'Sabor amargo, mal aliento, heces pegajosas', 'Orina oscura'],
      fr: ['Visage ou nez gras et luisant', 'Sujet aux boutons et furoncles', 'Goût amer, mauvaise haleine, selles collantes', 'Urine foncée'],
    },
    advice: {
      zh: ['饮食清淡：绿豆、苦瓜、芹菜、莲藕；忌烟酒辛辣烧烤', '保证睡眠，避免熬夜助热', '加强运动、保持大便通畅', '皮肤注意清洁，衣物透气'],
      en: ['Light diet: mung beans, bitter melon, celery, lotus root; skip alcohol, spice and BBQ', 'Protect your sleep; late nights feed the heat', 'Exercise regularly and keep the bowels moving', 'Keep skin clean and wear breathable clothing'],
      es: ['Dieta ligera: frijol mungo, melón amargo, apio, raíz de loto; evita alcohol, picante y asados', 'Cuida el sueño; trasnochar aviva el calor', 'Haz ejercicio con regularidad y mantiene el tránsito intestinal', 'Limpia bien la piel y usa ropa transpirable'],
      fr: ['Alimentation légère : haricots mungo, melon amer, céleri, racine de lotus ; évitez alcool, épices et grillades', 'Protégez votre sommeil ; les nuits courtes attisent la chaleur', 'Exercice régulier et bon transit intestinal', 'Peau propre et vêtements respirants'],
    },
  },
  xueyu: {
    glyph: '瘀',
    name: { zh: '血瘀质', en: 'Blood Stasis', es: 'Estasis de Sangre', fr: 'Stase de Sang' },
    pinyin: 'xuè yū zhì',
    tagline: {
      zh: '肤色晦暗、易有瘀斑、局部刺痛',
      en: 'Dull complexion, easy bruising, stabbing pain',
      es: 'Cutis apagado, moretones fáciles, dolor punzante',
      fr: 'Teint terne, ecchymoses faciles, douleur en piqûre',
    },
    desc: {
      zh: '血瘀质是"血液运行不畅"：面色晦暗或有褐斑、口唇偏暗、皮肤容易青紫瘀斑，身体某些部位有固定刺痛。多与久坐、受寒、情志不畅或年老相关。',
      en: 'Blood Stasis means " sluggish blood flow": a dull complexion or dark spots, darker lips, easy bruising, and fixed stabbing pains in certain places.',
      es: 'La Estasis de Sangre significa una «circulación lenta»: cutis apagado o manchas oscuras, labios oscuros, moretones fáciles y dolores punzantes fijos.',
      fr: "La Stase de Sang signifie une « circulation ralentie » : teint terne ou taches foncées, lèvres foncées, ecchymoses faciles et douleurs fixes en piqûre.",
    },
    traits: {
      zh: ['皮肤易见青紫瘀斑', '面色晦暗、有褐斑', '口唇颜色偏暗', '固定部位刺痛、健忘'],
      en: ['Skin bruises into purple marks easily', 'Dull complexion, dark spots', 'Darker-colored lips', 'Fixed stabbing pain, forgetfulness'],
      es: ['La piel se marca de moretones con facilidad', 'Cutis apagado, manchas oscuras', 'Labios de color oscuro', 'Dolor punzante fijo, olvidadizo'],
      fr: ['La peau marque facilement des ecchymoses', 'Teint terne, taches foncées', 'Lèvres foncées', 'Douleur fixe en piqûre, oublis'],
    },
    advice: {
      zh: ['饮食：山楂、黑木耳、玫瑰花茶、少量黄酒以活血', '坚持有氧运动（快走、跳舞）促血行', '注意保暖，寒则血凝', '保持心情舒畅，久坐时定时起身活动'],
      en: ['Diet: hawthorn, black fungus, rose tea, a little rice wine to move blood', 'Keep up aerobic exercise (brisk walking, dancing)', 'Stay warm — cold congeals blood', 'Stay upbeat; break up long sitting with movement'],
      es: ['Dieta: espino, hongo negro, té de rosa, un poco de vino de arroz para mover la sangre', 'Mantén ejercicio aeróbico (caminata rápida, baile)', 'Abrígate — el frío congela la sangre', 'Anímate; interrumpe las horas sentado con movimiento'],
      fr: ['Alimentation : aubépine, champignon noir, tisane de rose, un peu de vin de riz pour mobiliser le sang', "Maintenez un exercice aérobie (marche rapide, danse)", 'Restez au chaud — le froid coagule le sang', 'Restez de bonne humeur ; levez-vous régulièrement si vous restez assis'],
    },
  },
  qiyu: {
    glyph: '郁',
    name: { zh: '气郁质', en: 'Qi Stagnation', es: 'Estancamiento de Qi', fr: 'Stagnation de Qi' },
    pinyin: 'qì yù zhì',
    tagline: {
      zh: '情绪低落、多愁善感、胁肋胀闷',
      en: 'Low mood, oversensitive, chest tightness',
      es: 'Ánimo bajo, muy sensible, opresión en el pecho',
      fr: 'Morosité, hypersensible, oppression thoracique',
    },
    desc: {
      zh: '气郁质是"气的运行郁滞"：情绪容易低落、紧张焦虑，多愁善感，常觉胸胁胀闷、爱叹气。多与长期压力、情志不遂有关。',
      en: 'Qi Stagnation means the "flow of Qi is stuck": moods sink easily, tension and anxiety build, feelings run sensitive, and the chest and ribs often feel tight.',
      es: 'El Estancamiento de Qi significa que «el Qi no fluye»: el ánimo baja con facilidad, se acumulan tensión y ansiedad, los sentimientos son intensos y el pecho se siente oprimido.',
      fr: "La Stagnation de Qi signifie un « Qi bloqué » : l'humeur chute facilement, tension et anxiété s'accumulent, les sentiments sont à fleur de peau et la poitrine se sent oppressée.",
    },
    traits: {
      zh: ['闷闷不乐、易焦虑', '多愁善感、易受惊吓', '胁肋或乳房胀痛', '常叹气、咽有异物感'],
      en: ['Gloomy, easily anxious', 'Oversensitive, easily startled', 'Distending pain in ribs or chest', 'Frequent sighing, lump-in-throat feeling'],
      es: ['Triste, ansioso con facilidad', 'Muy sensible, se sobresalta fácil', 'Dolor distendente en costados o pecho', 'Suspiros frecuentes, nudo en la garganta'],
      fr: ['Triste, anxieux facilement', 'Hypersensible, sursaute facilement', 'Douleur de distension aux côtes ou à la poitrine', 'Soupirs fréquents, boule dans la gorge'],
    },
    advice: {
      zh: ['饮食：玫瑰花茶、陈皮、佛手、萝卜等行气食物', '多到户外活动，晒太阳、亲近自然', '倾诉表达情绪，培养兴趣爱好', '练习腹式呼吸或冥想疏解压力'],
      en: ['Diet: rose tea, tangerine peel, finger citron, radish — foods that move Qi', 'Get outdoors; sunshine and nature lift the flow', 'Talk out your feelings; cultivate hobbies', 'Practice belly breathing or meditation to ease stress'],
      es: ['Dieta: té de rosa, piel de mandarina, cidra, rábano — alimentos que mueven el Qi', 'Sal al exterior; el sol y la naturaleza elevan el flujo', 'Expresa lo que sientes; cultiva aficiones', 'Practica respiración abdominal o meditación'],
      fr: ['Alimentation : tisane de rose, écorce de mandarine, cédrat, radis — des aliments qui font circuler le Qi', 'Sortez ; soleil et nature favorisent la circulation', 'Exprimez vos émotions ; cultivez des loisirs', 'Pratiquez la respiration abdominale ou la méditation'],
    },
  },
  tebing: {
    glyph: '禀',
    name: { zh: '特禀质（过敏）', en: 'Special/Allergic', es: 'Especial/Alergica', fr: 'Spéciale/Allergique' },
    pinyin: 'tè bǐng zhì',
    tagline: {
      zh: '容易过敏、起疹、打喷嚏',
      en: 'Allergy-prone: rashes, sneezing fits',
      es: 'Propenso a alergias: erupciones, estornudos',
      fr: 'Sujet aux allergies : éruptions, éternuements',
    },
    desc: {
      zh: '特禀质多指"先天禀赋特殊"的过敏体质：容易对药物、食物、花粉、尘螨过敏，皮肤一抓就红、起荨麻疹，不感冒也常打喷嚏、流清涕。调理重在避开过敏原、增强卫气。',
      en: 'The Special constitution usually refers to an inborn allergic tendency: allergies to medicines, foods, pollen or dust mites, skin that flares into hives, and sneezing or runny nose without a cold.',
      es: 'La constitución Especial suele referirse a una tendencia alérgica congénita: alergias a medicamentos, alimentos, polen o ácaros, piel que se roncha y estornudos o moqueo sin resfriado.',
      fr: "La constitution Spéciale désigne souvent une tendance allergique innée : allergies aux médicaments, aliments, pollens ou acariens, peau qui s'urtique, éternuements ou nez qui coule sans rhume.",
    },
    traits: {
      zh: ['不感冒也打喷嚏、流清涕', '皮肤易起荨麻疹、一抓就红', '对药物或食物过敏', '季节变化或异味诱发不适'],
      en: ['Sneezes and runny nose without a cold', 'Skin prone to hives, reddens when scratched', 'Allergic to certain drugs or foods', 'Flares with season changes or odors'],
      es: ['Estornuda y moquea sin resfriado', 'Piel propensa a urticaria, se enrojece al rascar', 'Alergia a ciertos fármacos o alimentos', 'Brota con cambios de estación u olores'],
      fr: ['Éternue et nez qui coule sans rhume', 'Peau sujette à l’urticaire, rougit au grattage', 'Allergique à certains médicaments ou aliments', 'Réagit aux changements de saison ou aux odeurs'],
    },
    advice: {
      zh: ['查明并避开过敏原（花粉、海鲜、尘螨等）', '饮食清淡均衡，慎食已知过敏食物', '循序渐进锻炼以增强卫气，可按揉迎香穴', '发病期间及时就医，勿自行用药'],
      en: ['Identify and avoid your allergens (pollen, shellfish, mites…)', 'Eat simply and evenly; be careful with known trigger foods', 'Exercise progressively to strengthen defensive Qi; try Yingxiang (LI-20)', 'Seek prompt medical care during flare-ups'],
      es: ['Identifica y evita tus alérgenos (polen, mariscos, ácaros…)', 'Come simple y equilibrado; cautela con alimentos desencadenantes', 'Ejercicio progresivo para fortalecer el Qi defensivo; prueba Yingxiang (IG-20)', 'Acude pronto al médico ante brotes'],
      fr: ['Identifiez et évitez vos allergènes (pollens, crustacés, acariens…)', 'Mangez simple et équilibré ; prudence avec les aliments déclencheurs', 'Exercice progressif pour renforcer le Qi défensif ; essayez Yingxiang (GI-20)', 'Consultez vite un médecin en cas de poussée'],
    },
  },
};

// 45 道测试题：每种体质 5 题，t 指向 constitutionTypes 的键
export const constitutionQuestions = [
  // 平和质（正向）
  { t: 'pinghe', q: { zh: '您平时精力充沛吗？', en: 'Do you feel full of energy in daily life?', es: '¿Te sientes lleno/a de energía en tu vida diaria?', fr: 'Vous sentez-vous plein(e) d\u2019énergie au quotidien ?' } },
  { t: 'pinghe', q: { zh: '您睡眠良好、醒来后感觉解乏吗？', en: 'Do you sleep well and wake up refreshed?', es: '¿Duermes bien y te despiertas descansado/a?', fr: 'Dormez-vous bien et vous réveillez-vous reposé(e) ?' } },
  { t: 'pinghe', q: { zh: '您心态平和、很少闷闷不乐吗？', en: 'Is your mood usually calm, rarely feeling down?', es: '¿Tu ánimo suele ser sereno y rara vez estás desanimado/a?', fr: 'Votre humeur est-elle sereine, rarement abattue ?' } },
  { t: 'pinghe', q: { zh: '您能较快适应天气或环境的变化吗？', en: 'Can you adapt quickly to weather or environment changes?', es: '¿Te adaptas rápido a los cambios de clima o entorno?', fr: 'Vous adaptez-vous vite aux changements de climat ou d\u2019environnement ?' } },
  { t: 'pinghe', q: { zh: '您平时很少感冒或生病吗？', en: 'Do you rarely catch colds or fall ill?', es: '¿Rara vez te resfrías o enfermas?', fr: 'Attrapez-vous rarement froid ou tombez rarement malade ?' } },
  // 气虚质
  { t: 'qixu', q: { zh: '您容易感到疲乏吗？', en: 'Do you tire easily?', es: '¿Te cansas con facilidad?', fr: 'Vous fatiguez-vous facilement ?' } },
  { t: 'qixu', q: { zh: '您说话声音低弱无力吗？', en: 'Is your voice weak and low?', es: '¿Tu voz es débil y baja?', fr: 'Votre voix est-elle faible et basse ?' } },
  { t: 'qixu', q: { zh: '您容易气短、呼吸短促吗？', en: 'Do you get short of breath easily?', es: '¿Te falta el aliento con facilidad?', fr: 'Êtes-vous vite essoufflé(e) ?' } },
  { t: 'qixu', q: { zh: '您稍一活动就容易出汗吗？', en: 'Do you sweat easily with light activity?', es: '¿Sudas con facilidad ante un esfuerzo ligero?', fr: 'Transpirez-vous facilement au moindre effort ?' } },
  { t: 'qixu', q: { zh: '您容易头晕或站起时眼前发黑吗？', en: 'Do you get dizzy or see black spots when standing up?', es: '¿Te mareas o se te nubla la vista al levantarte?', fr: 'Avez-vous des vertiges ou un voile noir en vous levant ?' } },
  // 阳虚质
  { t: 'yangxu', q: { zh: '您手脚发凉吗？', en: 'Are your hands and feet cold?', es: '¿Tienes frío en manos y pies?', fr: 'Avez-vous les mains et les pieds froids ?' } },
  { t: 'yangxu', q: { zh: '您胃脘部、背部或腰膝部怕冷吗？', en: 'Do your stomach, back or knees feel sensitive to cold?', es: '¿Sientes frío en el estómago, la espalda o las rodillas?', fr: 'Votre estomac, dos ou genoux sont-ils sensibles au froid ?' } },
  { t: 'yangxu', q: { zh: '您比别人怕冷、衣服穿得更多吗？', en: 'Are you more sensitive to cold than others, wearing more layers?', es: '¿Sientes más frío que los demás y te abrigas más?', fr: 'Êtes-vous plus sensible au froid que les autres, plus couvert(e) ?' } },
  { t: 'yangxu', q: { zh: '您吃或喝凉的东西会感到不舒服吗？', en: 'Do cold food or drinks make you uncomfortable?', es: '¿La comida o bebida fría te resulta molesta?', fr: 'Les aliments ou boissons froids vous incommodent-ils ?' } },
  { t: 'yangxu', q: { zh: '您受凉或吃凉的东西后容易腹泻吗？', en: 'Do you easily get loose stools after catching cold or eating cold food?', es: '¿Te da diarrea con facilidad tras enfriarte o comer algo frío?', fr: 'Avez-vous facilement la diarrhée après avoir eu froid ou mangé froid ?' } },
  // 阴虚质
  { t: 'yinxu', q: { zh: '您手脚心发热吗？', en: 'Do your palms and soles feel hot?', es: '¿Notas calor en palmas y plantas?', fr: 'Vos paumes et plantes sont-elles chaudes ?' } },
  { t: 'yinxu', q: { zh: '您感觉身体或脸上阵阵发热吗？', en: 'Do you feel waves of heat in your body or face?', es: '¿Sientes oleadas de calor en el cuerpo o la cara?', fr: 'Ressentez-vous des bouffées de chaleur dans le corps ou le visage ?' } },
  { t: 'yinxu', q: { zh: '您口干咽燥、总想喝水吗？', en: 'Is your mouth or throat dry, making you want to drink often?', es: '¿Tienes boca y garganta secas y bebes a menudo?', fr: 'Avez-vous la bouche et la gorge sèches, besoin de boire souvent ?' } },
  { t: 'yinxu', q: { zh: '您皮肤或口唇干燥吗？', en: 'Is your skin or lips dry?', es: '¿Tienes la piel o los labios secos?', fr: 'Votre peau ou vos lèvres sont-elles sèches ?' } },
  { t: 'yinxu', q: { zh: '您睡着后容易出汗（盗汗）吗？', en: 'Do you sweat during sleep (night sweats)?', es: '¿Sudas mientras duermes (sudores nocturnos)?', fr: 'Transpirez-vous pendant le sommeil (sueurs nocturnes) ?' } },
  // 痰湿质
  { t: 'tanshi', q: { zh: '您感到胸闷或腹部胀满吗？', en: 'Do you feel chest tightness or abdominal bloating?', es: '¿Sientes opresión en el pecho o hinchazón abdominal?', fr: 'Ressentez-vous une oppression thoracique ou des ballonnements ?' } },
  { t: 'tanshi', q: { zh: '您感到身体沉重、不轻松吗？', en: 'Does your body feel heavy and sluggish?', es: '¿Sientes el cuerpo pesado y lento?', fr: 'Votre corps vous paraît-il lourd et lent ?' } },
  { t: 'tanshi', q: { zh: '您腹部肥满松软吗？', en: 'Is your abdomen soft and full?', es: '¿Tu abdomen es blando y prominente?', fr: 'Votre ventre est-il mou et plein ?' } },
  { t: 'tanshi', q: { zh: '您额头油脂分泌多吗？', en: 'Is your forehead oily?', es: '¿Tienes la frente grasosa?', fr: 'Votre front est-il gras ?' } },
  { t: 'tanshi', q: { zh: '您嘴里常有黏腻感或痰多吗？', en: 'Does your mouth feel sticky, or do you have much phlegm?', es: '¿Notas la boca pastosa o tienes mucho flema?', fr: 'Avez-vous la bouche collante ou beaucoup de mucus ?' } },
  // 湿热质
  { t: 'shire', q: { zh: '您面部或鼻部油腻发亮吗？', en: 'Is your face or nose oily and shiny?', es: '¿Tienes la cara o la nariz grasosa y brillante?', fr: 'Votre visage ou nez est-il gras et luisant ?' } },
  { t: 'shire', q: { zh: '您容易生痤疮或疮疖吗？', en: 'Do you easily get pimples or boils?', es: '¿Te salen granos o furúnculos con facilidad?', fr: 'Avez-vous facilement de l\u2019acné ou des furoncles ?' } },
  { t: 'shire', q: { zh: '您感到口苦或口中有异味吗？', en: 'Do you have a bitter taste or bad breath?', es: '¿Sientes la boca amarga o mal aliento?', fr: 'Avez-vous un goût amer ou mauvaise haleine ?' } },
  { t: 'shire', q: { zh: '您大便黏滞不爽、有排不净的感觉吗？', en: 'Are your stools sticky and hard to finish?', es: '¿Tienes heces pegajosas y sensación de evacuación incompleta?', fr: 'Vos selles sont-elles collantes et incomplètes ?' } },
  { t: 'shire', q: { zh: '您小便色深或尿道有灼热感吗？', en: 'Is your urine dark, or with a burning sensation?', es: '¿Tu orina es oscura o arde al orinar?', fr: 'Votre urine est-elle foncée ou brûle-t-elle ?' } },
  // 血瘀质
  { t: 'xueyu', q: { zh: '您的皮肤容易青紫或出现瘀斑吗？', en: 'Does your skin bruise easily into purple marks?', es: '¿Tu piel se marca de moretones con facilidad?', fr: 'Votre peau marque-t-elle facilement des ecchymoses ?' } },
  { t: 'xueyu', q: { zh: '您两颧部有细微红丝吗？', en: 'Do you have fine red veins on your cheeks?', es: '¿Tienes finas venas rojas en las mejillas?', fr: 'Avez-vous de fins vaisseaux rouges sur les joues ?' } },
  { t: 'xueyu', q: { zh: '您面色晦暗或有褐斑吗？', en: 'Is your complexion dull or with dark spots?', es: '¿Tu cutis es apagado o con manchas oscuras?', fr: 'Votre teint est-il terne ou taché ?' } },
  { t: 'xueyu', q: { zh: '您口唇颜色偏暗吗？', en: 'Are your lips darker in color?', es: '¿Tus labios tienen un color oscuro?', fr: 'Vos lèvres sont-elles foncées ?' } },
  { t: 'xueyu', q: { zh: '您身体某些部位有固定的刺痛感吗？', en: 'Do you have fixed, stabbing pains somewhere?', es: '¿Sientes dolores punzantes en un punto fijo?', fr: 'Avez-vous des douleurs fixes en piqûre ?' } },
  // 气郁质
  { t: 'qiyu', q: { zh: '您常感到闷闷不乐吗？', en: 'Do you often feel gloomy or low?', es: '¿Sueles sentirte triste o desanimado/a?', fr: 'Vous sentez-vous souvent triste ou abattu(e) ?' } },
  { t: 'qiyu', q: { zh: '您容易精神紧张、焦虑不安吗？', en: 'Are you easily tense or anxious?', es: '¿Te pones tenso/a o ansioso/a con facilidad?', fr: 'Êtes-vous facilement tendu(e) ou anxieux(se) ?' } },
  { t: 'qiyu', q: { zh: '您多愁善感、感情脆弱吗？', en: 'Are you oversensitive and easily moved?', es: '¿Eres muy sentimental y te afecta todo?', fr: 'Êtes-vous hypersensible et émotif(ve) ?' } },
  { t: 'qiyu', q: { zh: '您容易受惊吓或感到害怕吗？', en: 'Are you easily startled or fearful?', es: '¿Te sobresaltas o asustas con facilidad?', fr: 'Sursautez-vous ou avez-vous peur facilement ?' } },
  { t: 'qiyu', q: { zh: '您胁肋部或乳房有胀痛感吗？', en: 'Do your ribs or chest feel distended or sore?', es: '¿Sientes distensión o dolor en costados o pecho?', fr: 'Ressentez-vous une tension aux côtes ou à la poitrine ?' } },
  // 特禀质
  { t: 'tebing', q: { zh: '您不感冒也会打喷嚏或流鼻涕吗？', en: 'Do you sneeze or get a runny nose without a cold?', es: '¿Estornudas o te moquea sin estar resfriado/a?', fr: 'Éternuez-vous ou avez-vous le nez qui coule sans rhume ?' } },
  { t: 'tebing', q: { zh: '您会因季节变化、异味或花粉而咳嗽吗？', en: 'Do you cough from season changes, odors or pollen?', es: '¿Toses por cambios de estación, olores o polen?', fr: 'Toussez-vous aux changements de saison, odeurs ou pollens ?' } },
  { t: 'tebing', q: { zh: '您容易对药物、食物或花粉过敏吗？', en: 'Are you allergic to medicines, foods or pollen?', es: '¿Tienes alergias a medicamentos, alimentos o polen?', fr: 'Êtes-vous allergique aux médicaments, aliments ou pollens ?' } },
  { t: 'tebing', q: { zh: '您的皮肤容易起荨麻疹（风团）吗？', en: 'Does your skin easily break out in hives?', es: '¿Te sale urticaria con facilidad?', fr: 'Faites-vous facilement de l\u2019urticaire ?' } },
  { t: 'tebing', q: { zh: '您的皮肤一抓就红、容易出抓痕吗？', en: 'Does your skin turn red and marked when scratched?', es: '¿Tu piel se enrojece y se marca al rascarte?', fr: 'Votre peau rougit-elle et se marque-t-elle au grattage ?' } },
];

// 体质判定阈值（参照标准的转化分规则）
export const CONSTITUTION_RULES = {
  biasedYes: 40, // 偏颇体质转化分 ≥40 判为"是"
  biasedTendency: 30, // 30~39 为"倾向是"
  balancedYes: 60, // 平和质 ≥60 且其他偏颇 <30
  balancedMostly: 40, // 平和质 ≥60 且其他偏颇 <40 为"基本是"
};
