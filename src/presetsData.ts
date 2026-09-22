import { ItineraryItem, CategoryType } from './types';

export interface RouteTemplate {
  id: string;
  nameFr: string;
  nameTh: string;
  descFr: string;
  descTh: string;
  steps: {
    placeName: string;
    category: 'Camping' | 'Lodging' | 'Attraction' | 'Restaurant' | 'Activity';
    notesFr: string;
    notesTh: string;
    lat: number;
    lng: number;
    budgetPerNight: number;
    detailedTipsFr: string;
    detailedTipsTh: string;
    maxInfoFr: string;
    maxInfoTh: string;
  }[];
}

export const ROUTE_TEMPLATES: RouteTemplate[] = [
  {
    id: "route-1",
    nameFr: "🪵 L'Ouest Nature (Kanchanaburi & Ratchaburi)",
    nameTh: "🪵 เส้นทางธรรมชาติภาคตะวันตก (กาญจนบุรีและราชบุรี)",
    descFr: "Explorez les rivières mythiques, les parcs nationaux d'eau turquoise et les dômes brumeux de Suan Phueng à la frontière birmane.",
    descTh: "เส้นทางตะลุยป่าและแม่น้ำภาคตะวันตก ทะเลหมอกสวนผึ้งและน้ำตกเอราวัณอันลือชื่อ",
    steps: [
      {
        placeName: "123/99 Sarintara 1 Village, Samut Sakhon",
        category: "Lodging",
        notesFr: "Point de départ - Logement chez l'habitant gratuit",
        notesTh: "จุดเริ่มต้นเดินทาง - ที่พักโฮมสเตย์ฟรีและเช็คอุปกรณ์เตรียมตัว",
        lat: 13.5266,
        lng: 100.3161,
        budgetPerNight: 0,
        detailedTipsFr: "Logement chez l'habitant gratuit à Samut Sakhon. Idéal pour faire les derniers ajustements de réchaud.",
        detailedTipsTh: "ที่พักฟรีเป็นกันเองในสมุทรสาคร เหมาะอย่างยิ่งสำหรับเช็คความพร้อมเตาแก๊สและเสบียงเริ่มต้น",
        maxInfoFr: "Un départ serein et chaleureux pour votre grande aventure.",
        maxInfoTh: "จุดรวมพลแสนอบอุ่นก่อนออกเดินทางสู่การผจญภัยครั้งใหญ่"
      },
      {
        placeName: "Khao Bin Cave (Ratchaburi)",
        category: "Attraction",
        notesFr: "Merveilleuses stalactites illuminées à Ratchaburi",
        notesTh: "เที่ยวชมถ้ำเขาบิน ยลความงามหินงอกหินย้อยตระการตา",
        lat: 13.5936,
        lng: 99.6739,
        budgetPerNight: 350,
        detailedTipsFr: "Une grotte de 300 mètres de profondeur dotée de huit chambres fantastiques éclairées de néons colorés.",
        detailedTipsTh: "ถ้ำขนาดใหญ่อากาศด้านในอุ่นชื้น แนะนำให้พกพัดลมพกพาขนาดเล็กและน้ำดื่มติดตัวระหว่างเดินชม",
        maxInfoFr: "Considérée comme la plus belle grotte de la province de Ratchaburi.",
        maxInfoTh: "ถ้ำท่องเที่ยวธรรมชาติระดับแนวหน้าของราชบุรี แบ่งออกเป็น 8 ห้องจัดแสดงแสงสีอย่างสวยงาม"
      },
      {
        placeName: "Suan Phueng (Ratchaburi)",
        category: "Camping",
        notesFr: "Bivouac au frais dans les vallées de Ratchaburi",
        notesTh: "กางเต็นท์ท่ามกลางขุนเขาตะนาวศรี และชมสวนแกะอิตาลี",
        lat: 13.5414,
        lng: 99.3414,
        budgetPerNight: 150,
        detailedTipsFr: "Installez votre campement face aux montagnes de la chaîne de Tenasserim. Les soirées y sont agréablement fraîches.",
        detailedTipsTh: "จุดชมวิวห้วยคอกหมูและเขากระโจมเป็นจุดชมทะเลหมอกที่สวยงามมากบริเวณชายแดนไทย-พม่า",
        maxInfoFr: "Suan Phueng est réputé pour son climat montagnard frais et ses décors de glamping idylliques.",
        maxInfoTh: "อำเภอท่องเที่ยวแนวธรรมชาติและรีสอร์ตบูติคแสนสวย โอบล้อมด้วยภูเขาและป่าไม้เขียวขจี"
      },
      {
        placeName: "Erawan National Park",
        category: "Camping",
        notesFr: "Camping au bord du légendaire cours d'eau turquoise aux 7 niveaux",
        notesTh: "กางเต็นท์ริมน้ำตกเอราวัณ 7 ชั้นอันเลื่องชื่อ",
        lat: 14.3686,
        lng: 99.1436,
        budgetPerNight: 100,
        detailedTipsFr: "Commencez l'ascension vers le niveau 7 dès le matin pour éviter l'affluence de l'après-midi.",
        detailedTipsTh: "เดินขึ้นชมชั้น 7 ที่สวยงามที่สุด ควรเริ่มเดินแต่เช้าตรู่เพื่อหลีกเลี่ยงฝูงชนและเตรียมมัดจำขวดน้ำตามระเบียบ",
        maxInfoFr: "L'une des cascades les plus magnifiques du monde, formée par de l'eau calcaire translucide.",
        maxInfoTh: "น้ำตกหินปูนสีเขียวมรกตใสสะอาด มีความยาว 1,500 เมตร แบ่งเป็น 7 ชั้น มีแอ่งน้ำให้ลงเล่นกับปลาธรรมชาติ"
      },
      {
        placeName: "Srinakarin Dam",
        category: "Camping",
        notesFr: "Bivouac panoramique au bord de la grande retenue d'eau",
        notesTh: "พักผ่อนแพริมน้ำ ท่องเที่ยวชมน้ำตกห้วยแม่ขมิ้น",
        lat: 14.5000,
        lng: 99.0000,
        budgetPerNight: 150,
        detailedTipsFr: "Nuit au camping de Huay Mae Khamin (niveau 4), réputé pour sa pelouse impeccable faisant face au lac de retenue.",
        detailedTipsTh: "ลานกางเต็นท์อุทยานแห่งชาติเขื่อนศรีนครินทร์ (น้ำตกห้วยแม่ขมิ้น) ถือเป็นจุดแคมป์ปิ้งที่วิวสวยเป็นอันต้นๆ ของไทย",
        maxInfoFr: "Un immense lac de retenue entouré par des montagnes denses et sauvages.",
        maxInfoTh: "หนึ่งในเขื่อนอเนกประสงค์ที่ใหญ่ที่สุดของไทย ล้อมรอบด้วยภูเขาสลับซับซ้อนและน้ำตกห้วยแม่ขมิ้นแสนสวย"
      },
      {
        placeName: "Sai Yok National Park",
        category: "Camping",
        notesFr: "Camping au bord de la rivière Kwai et cascades suspendues",
        notesTh: "กางเต็นท์ริมแม่น้ำแควน้อย - ชมน้ำตกไทรโยคใหญ่ตกสู่แม่น้ำ",
        lat: 14.4344,
        lng: 98.8546,
        budgetPerNight: 100,
        detailedTipsFr: "Visitez le pont de la rivière Kwai et explorez les grottes de stalactites qui longent les berges du parc.",
        detailedTipsTh: "เช่าแพไม้ไผ่เพื่อล่องชมวิวน้ำตกไทรโยคใหญ่ตกกระทบแม่น้ำแควน้อยแบบใกล้ชิดจากผิวน้ำ",
        maxInfoFr: "Un parc historique d'importance majeure ayant accueilli le tracé de la voie ferrée de la mort.",
        maxInfoTh: "แหล่งธรรมชาติประวัติศาสตร์สงครามโลกครั้งที่ 2 มีทั้งทางรถไฟสายมรณะ ถ้ำโบราณ และลานกางเต็นท์ร่มรื่น"
      },
      {
        placeName: "Pilok Mine & Ban Etong",
        category: "Lodging",
        notesFr: "Village brumeux hors du temps perché sur les crêtes birmanes",
        notesTh: "ชมหมู่บ้านในสายหมอก เหมืองปิล๊อก และทิวทัศน์ช่องทางมิตรภาพไทย-พม่า",
        lat: 14.6722,
        lng: 98.3617,
        budgetPerNight: 500,
        detailedTipsFr: "Prévoyez des vêtements chauds, la brume y est constante. La route de montagne compte 399 virages.",
        detailedTipsTh: "เส้นทางขึ้นสู่บ้านอีต่องมีโค้งชันและแคบ ควรใช้เกียร์ต่ำในการขับขี่ และพกเสื้อหนาวเนื่องจากมีอากาศเย็นตลอดปี",
        maxInfoFr: "Une ancienne mine de tungstène transformée en un charmant havre de paix enveloppé de brume.",
        maxInfoTh: "อดีตเมืองเหมืองแร่ดีบุกเก่าที่ซ่อนตัวท่ามกลางหุบเขาชายแดนไทย-พม่า บรรยากาศสุดคลาสสิก"
      },
      {
        placeName: "Sangkhlaburi (Mon Bridge)",
        category: "Lodging",
        notesFr: "Visite du grand pont en bois et immersion culturelle",
        notesTh: "ชมวิถีชีวิตชาวมอญยามเช้า และตักบาตรพระสงฆ์สะพานมอญ",
        lat: 15.1436,
        lng: 98.4519,
        budgetPerNight: 600,
        detailedTipsFr: "Levez-vous à 5h30 pour assister au rituel bouddhiste traditionnel d'offrande de nourriture aux moines.",
        detailedTipsTh: "ข้ามสะพานอุตตมานุสรณ์ (สะพานมอญ) เพื่อใส่บาตรพระสงฆ์ฝั่งมอญ และเช่าเรือหางยาวไปชมโบสถ์เก่าใต้น้ำ",
        maxInfoFr: "Sangkhlaburi est un carrefour culturel vibrant entre les ethnies môn, karen et thaïe.",
        maxInfoTh: "ดินแดนแห่งความหลากหลายทางวัฒนธรรมริมแม่น้ำซองกาเลียสุดขอบชายแดนตะวันตกของประเทศ"
      },
      {
        placeName: "Bangkok",
        category: "Lodging",
        notesFr: "Retour à la capitale, fin de l'épopée de l'Ouest sauvage",
        notesTh: "เดินทางกลับกรุงเทพฯ คืนรถเช่า และฉลองมื้อค่ำริมเจ้าพระยา",
        lat: 13.7563,
        lng: 100.5018,
        budgetPerNight: 800,
        detailedTipsFr: "Profitez d'un massage thaï bien mérité pour détendre vos muscles après cette longue route.",
        detailedTipsTh: "แวะคืนรถเช่าและอุปกรณ์แคมป์ปิ้ง ลิ้มรสซีฟู้ดบาร์บีคิวมื้อค่ำฉลองความสำเร็จริมเจ้าพระยาก่อนจบทริป",
        maxInfoFr: "Fin de votre inoubliable périple de l'Ouest thaïlandais.",
        maxInfoTh: "จบทริปโรดทริปฝั่งตะวันตก สะสมภาพความสุขและความประทับใจเต็มกระเป๋าเดินทาง"
      }
    ]
  },
  {
    id: "route-2",
    nameFr: "⛰️ Les Oasis Sauvages (Saraburi & Nakhon Nayok)",
    nameTh: "⛰️ เส้นทางสวรรค์น้ำตกภาคกลาง (สระบุรีและนครนายก)",
    descFr: "Un road trip reposant axé sur les cours d'eau calmes, les cascades en gradins et les panoramas de barrage.",
    descTh: "โรดทริปพักผ่อนดื่มด่ำน้ำตกเจ็ดสาวน้อย เขื่อนขุนด่านปราการชลและแหล่งโอเอซิสธรรมชาติสระบุรี-นครนายก",
    steps: [
      {
        placeName: "123/99 Sarintara 1 Village, Samut Sakhon",
        category: "Lodging",
        notesFr: "Point de départ - Logement chez l'habitant gratuit",
        notesTh: "จุดเริ่มต้นเดินทาง - ที่พักโฮมสเตย์ฟรีและเช็คอุปกรณ์เตรียมตัว",
        lat: 13.5266,
        lng: 100.3161,
        budgetPerNight: 0,
        detailedTipsFr: "Assurez-vous que vos piquets de tente et votre bâche sont bien emballés avant le départ.",
        detailedTipsTh: "ตรวจอุปกรณ์กางเต็นท์ให้ครบถ้วนก่อนออกเดินทาง มุ่งหน้าสู่ภาคกลางตอนบนสระบุรี",
        maxInfoFr: "Un accueil chaleureux et gratuit chez l'habitant.",
        maxInfoTh: "จุดรวมพลแสนอบอุ่นก่อนออกเดินทางสู่การผจญภัยครั้งใหญ่"
      },
      {
        placeName: "Khao Sam Lan National Park (Saraburi)",
        category: "Camping",
        notesFr: "Bivouac paisible au bord de l'étang forestier de Saraburi",
        notesTh: "กางเต็นท์ริมอ่างเก็บน้ำสามหลัน และเดินป่าศึกษาธรรมชาติ",
        lat: 14.4414,
        lng: 100.9547,
        budgetPerNight: 100,
        detailedTipsFr: "Installez votre tente au plus près du bord de l'eau pour admirer la brume matinale flotter sur le lac.",
        detailedTipsTh: "ลานกางเต็นท์ริมอ่างเก็บน้ำมีบรรยากาศเงียบสงบมาก เหมาะแก่การพักผ่อนหลีกหนีความวุ่นวาย",
        maxInfoFr: "Un parc forestier d'une grande sérénité, idéal pour l'observation des oiseaux et la randonnée légère.",
        maxInfoTh: "อุทยานธรรมชาติใกล้กรุงเทพฯ ที่อุดมด้วยป่าเบญจพรรณและอ่างเก็บน้ำขนาดใหญ่วิวงดงาม"
      },
      {
        placeName: "Muak Lek Waterfall (Saraburi)",
        category: "Attraction",
        notesFr: "Pique-nique ombragé au bord du ruisseau de Muak Lek",
        notesTh: "แวะทานอาหารกลางวันและซื้อกะหรี่ปั๊บมวกเหล็กของฝากริมลำธาร",
        lat: 14.6582,
        lng: 101.1969,
        budgetPerNight: 400,
        detailedTipsFr: "Dégustez d'excellents curry puffs locaux de Muak Lek tout en profitant du son rafraîchissant de l'eau courant sous le pont suspendu.",
        detailedTipsTh: "ซื้อขนมกะหรี่ปั๊บไส้ไก่ชื่อดังมานั่งทานเล่นริมลำธารป่ารุกขชาติมวกเหล็กที่มีสะพานแขวนข้ามจังหวัด",
        maxInfoFr: "Un superb parc d'arbres tropicaux traversé par un courant d'eau fraîche venant du massif de Khao Yai.",
        maxInfoTh: "สวนรุกขชาติร่มรื่นริมธารธรรมชาติมวกเหล็ก พันธุ์ไม้แปลกตาและลำธารใสเย็นคลายร้อน"
      },
      {
        placeName: "Namtok Chet Sao Noi (Saraburi)",
        category: "Camping",
        notesFr: "Bivouac au chant mélodieux des sept paliers de cascade",
        notesTh: "ลานกางเต็นท์ริมน้ำตกเจ็ดสาวน้อย ฟังเสียงน้ำไหลเอื่อยและพักผ่อน",
        lat: 14.7300,
        lng: 101.1917,
        budgetPerNight: 100,
        detailedTipsFr: "L'aire de camping est très propre et herbeuse. Emportez un matelas de sol épais pour un confort optimal.",
        detailedTipsTh: "จุดกางเต็นท์ริมแม่น้ำมีความร่มรื่น ป่าไม้สมบูรณ์ มีจุดบริการพ่วงไฟและห้องน้ำสะอาดสะดวกสบาย",
        maxInfoFr: "Chet Sao Noi (les sept jeunes filles) propose une série de petits gradins de calcaire aux eaux limpides.",
        maxInfoTh: "น้ำตกหินปูนเตี้ยๆ 7 ชั้นที่มีน้ำไหลผ่านตลอดทั้งปี ลำธารกว้างใหญ่ร่มรื่น เหมาะแก่การเล่นน้ำพึ่งกาย"
      },
      {
        placeName: "Sarika Waterfall (Nakhon Nayok)",
        category: "Attraction",
        notesFr: "Randonnée le long des falaises abruptes du géant de Nakhon Nayok",
        notesTh: "ชมน้ำตกสาริกายักษ์ 9 ชั้นตกลงมาจากหน้าผาสูงชันใต้เขาใหญ่",
        lat: 14.2989,
        lng: 101.2589,
        budgetPerNight: 450,
        detailedTipsFr: "Portez des chaussures de marche antidérapantes, les rochers près de la cascade peuvent être glissants sous l'effet de l'humidité.",
        detailedTipsTh: "ทางเดินขึ้นชมน้ำตกแต่ละชั้นร่มรื่นด้วยพืชพันธุ์ป่าดงดิบ ควรเตรียมเสื้อผ้าไปเปลี่ยนหากลงเล่นน้ำ",
        maxInfoFr: "Une cascade spectaculaire plongeant en 9 niveaux majestueux depuis la jungle d'altitude de Khao Yai.",
        maxInfoTh: "น้ำตกขนาดใหญ่ที่มีความสูงถึง 9 ชั้น ผาสวยงามอุดมสมบูรณ์อุ่นไอธรรมชาติ"
      },
      {
        placeName: "Khun Dan Prakan Chon Dam (Nakhon Nayok)",
        category: "Camping",
        notesFr: "Bivouac grandiose face au lac de barrage géant",
        notesTh: "ล่องเรือหางยาวชม 3 น้ำตกลับหลังเขื่อน และกางเต็นท์ริมน้ำ",
        lat: 14.3128,
        lng: 101.3217,
        budgetPerNight: 150,
        detailedTipsFr: "Louez un bateau traditionnel le matin pour naviguer vers les vallons sauvages cachés derrière le barrage.",
        detailedTipsTh: "แวะไปขึ้นชมวิวบนสันเขื่อนขุนด่านฯ และห้ามพลาดการนั่งเรือล่องช่องเขาเข้าไปชมน้ำตกลับข้างใน",
        maxInfoFr: "Le plus long barrage en béton compacté du monde, régulant le flux des eaux de Khao Yai.",
        maxInfoTh: "เขื่อนคอนกรีตบดอัดที่ยาวที่สุดในโลก ทิวทัศน์กว้างไกลสุดตา ด้านหลังเขื่อนมีหุบเขาลับสวยงาม"
      },
      {
        placeName: "Wang Takrai Park (Nakhon Nayok)",
        category: "Activity",
        notesFr: "Descente en bouée le long du torrent forestier",
        notesTh: "ล่องห่วงยางพลาสติกไปตามลำธารน้ำใสผืนป่าหนาทึบ",
        lat: 14.3256,
        lng: 101.3012,
        budgetPerNight: 400,
        detailedTipsFr: "Louez une chambre à air de camionnette pour descendre le cours d'eau en rigolant. Idéal en groupe !",
        detailedTipsTh: "เช่าห่วงยางลอยน้ำล่องผ่านแก่งโขดหินร่มไม้ร่มรื่น ทะลุผ่านผืนป่าธรรมชาติ สนุกสนานไม่อันตราย",
        maxInfoFr: "Un immense parc paysager privé réputé pour sa rivière de montagne peu profonde et ses grands arbres.",
        maxInfoTh: "อุทยานส่วนตัวขนาดใหญ่ ร่มรื่นด้วยพืชสวนแปลกตาและลำธารใสเย็นจากผืนป่าใหญ่เขาใหญ่"
      },
      {
        placeName: "Bangkok",
        category: "Lodging",
        notesFr: "Fin de l'expédition des cascades de l'Est",
        notesTh: "เดินทางกลับกรุงเทพฯ คืนรถเช่า และนวดแผนไทยคลายเมื่อยล้า",
        lat: 13.7563,
        lng: 100.5018,
        budgetPerNight: 800,
        detailedTipsFr: "Passez par la rue Sukhumvit pour un dernier dîner de spécialités culinaires thaïlandaises raffinées.",
        detailedTipsTh: "คืนรถเช่าและคืนอุปกรณ์กางเต็นท์ เดินเล่นในห้างสรรพสินค้าก่อนเตรียมตัวเดินทางกลับโดยสวัสดิภาพ",
        maxInfoFr: "Retour à Bangkok après une fantastique escapade au fil de l'eau.",
        maxInfoTh: "จบทริปท่องเที่ยวธรรมชาติสระบุรี-นครนายก โอเอซิสอันแสนสงบและร่มรื่นริมเมืองหลวง"
      }
    ]
  },
  {
    id: "route-3",
    nameFr: "🚴 La Grande Boucle des 4 Provinces (Le Grand Tour)",
    nameTh: "🚴 เส้นทางแกรนด์ทัวร์ 4 จังหวัด (กาญจน์-ราชบุรี-สระบุรี-นครนายก)",
    descFr: "Un parcours d'aventure complet traversant successivement les vallées de l'Ouest et les parcs rafraîchissants de l'Est.",
    descTh: "เส้นทางรอบใหญ่เชื่อมต่อ 4 จังหวัดท่องเที่ยวธรรมชาติที่ดีที่สุดรายรอบกรุงเทพฯ ครบทุกรสชาติ",
    steps: [
      {
        placeName: "123/99 Sarintara 1 Village, Samut Sakhon",
        category: "Lodging",
        notesFr: "Point de départ - Logement chez l'habitant gratuit",
        notesTh: "จุดเริ่มต้นเดินทาง - ที่พักโฮมสเตย์ฟรีและเช็คอุปกรณ์เตรียมตัว",
        lat: 13.5266,
        lng: 100.3161,
        budgetPerNight: 0,
        detailedTipsFr: "Préparez votre voiture pour un grand tour circulaire englobant l'Ouest et l'Est.",
        detailedTipsTh: "เตรียมวางแผนขับรถข้ามโซนตะวันตกและตะวันออก เช็คสภาพลมยางและน้ำมันเครื่องให้พร้อม",
        maxInfoFr: "Une aventure complète vous attend !",
        maxInfoTh: "จุดรวมพลแสนอบอุ่นก่อนออกเดินทางสู่การผจญภัยครั้งใหญ่"
      },
      {
        placeName: "Suan Phueng (Ratchaburi)",
        category: "Camping",
        notesFr: "Bivouac sur les prairies brumeuses de Ratchaburi",
        notesTh: "กางเต็นท์รับลมหนาวในอ้อมกอดภูเขาตะนาวศรี สวนผึ้ง",
        lat: 13.5414,
        lng: 99.3414,
        budgetPerNight: 150,
        detailedTipsFr: "Visitez le village d'art de Suan Phueng et achetez du miel de forêt sauvage locale.",
        detailedTipsTh: "สัมผัสบรรยากาศฟาร์มแกะอิตาลีริมเขา ชิมกาแฟสดอร่อยท่ามกลางธรรมชาติร่มรื่น",
        maxInfoFr: "Un bol d'air frais au pied des montagnes de Tenasserim.",
        maxInfoTh: "อำเภอธรรมชาติวิวงดงาม อากาศเย็นสบายในยามค่ำคืนด้วยเงาป่าภูเขา"
      },
      {
        placeName: "Erawan National Park",
        category: "Camping",
        notesFr: "Camping près des splendides bassins calcaires d'Erawan",
        notesTh: "กางเต็นท์ริมน้ำตกเอราวัณอันเลื่องชื่อ เล่นน้ำใสไหลเย็น",
        lat: 14.3686,
        lng: 99.1436,
        budgetPerNight: 100,
        detailedTipsFr: "Privilégiez les bassins des niveaux 3 et 5, particulièrement propices à la baignade tranquille.",
        detailedTipsTh: "น้ำใสสะอาดมีฝูงปลาคอยต้อนรับ เดินขึ้นสู่ชั้นบนด้วยความระมัดระวัง สวมรองเท้าผ้าใบที่ดี",
        maxInfoFr: "Le parc dispose de superbes installations de camping herbeuses longeant la rivière.",
        maxInfoTh: "อุทยานแห่งชาติชั้นนำของไทย มีลานกางเต็นท์ริมลำธารกว้างขวางและบริการอุปกรณ์ครบครัน"
      },
      {
        placeName: "Srinakarin Dam",
        category: "Camping",
        notesFr: "Bivouac face aux flots étincelants du barrage",
        notesTh: "พักผ่อนแพริมน้ำ ท่องเที่ยวชมน้ำตกห้วยแม่ขมิ้น",
        lat: 14.5000,
        lng: 99.0000,
        budgetPerNight: 150,
        detailedTipsFr: "Le coucher de soleil sur l'immense réservoir d'eau est une expérience visuelle absolument somptueuse.",
        detailedTipsTh: "กางเต็นท์บนสนามหญ้าน้ำตกห้วยแม่ขมิ้นชั้น 4 ชมอ่างเก็บน้ำเขื่อนกว้างไกลสุดลูกหูลูกตา",
        maxInfoFr: "Une zone lacustre sauvage encadrée de forêts de bambous géants.",
        maxInfoTh: "เขื่อนอเนกประสงค์ขนาดใหญ่ อุดมด้วยธรรมชาติบริสุทธิ์และน้ำตกป่าดิบชื้นที่เย็นชื่นใจ"
      },
      {
        placeName: "Muak Lek Waterfall (Saraburi)",
        category: "Attraction",
        notesFr: "Halte forestière ombragée à la frontière de Saraburi",
        notesTh: "พักผ่อนรับประทานอาหารกลางวันริมลำธารใสสะพานแขวนมวกเหล็ก",
        lat: 14.6582,
        lng: 101.1969,
        budgetPerNight: 400,
        detailedTipsFr: "Dégustez des fruits frais du verger local achetés le long de la route nationale.",
        detailedTipsTh: "แวะเดินเล่นบนสะพานแขวนป่ารุกขชาติมวกเหล็กและซื้อของฝากท้องถิ่นเช่นองุ่นสดและนมวัวแท้",
        maxInfoFr: "Une oasis d'arbres rares et de ruisseaux clairs serpentant vers les plaines.",
        maxInfoTh: "สวนป่าสงบและเย็นสบายริมน้ำตกธรรมชาติ อากาศบริสุทธิ์ตลอดทั่งวัน"
      },
      {
        placeName: "Namtok Chet Sao Noi (Saraburi)",
        category: "Camping",
        notesFr: "Bivouac reposant au chant continu de la rivière",
        notesTh: "ลานกางเต็นท์ริมน้ำตกเจ็ดสาวน้อย ดื่มด่ำไออุ่นแคมป์ไฟและลำธาร",
        lat: 14.7300,
        lng: 101.1917,
        budgetPerNight: 100,
        detailedTipsFr: "N'hésitez pas à vous baigner dans les zones délimitées, surveillées par les rangers du parc.",
        detailedTipsTh: "จอดรถใกล้จุดกางเต็นท์ริมน้ำไหลเย็น สั่งอาหารส้มตำไก่ย่างท้องถิ่นมาทานปิคนิคแสนอร่อย",
        maxInfoFr: "Un parc familial exceptionnellement bien préservé et verdoyant.",
        maxInfoTh: "จุดกางเต็นท์ที่มีสระน้ำธรรมชาติไหลเอื่อยให้ลงแช่ตัวผ่อนคลายความเหนื่อยล้าจากการขับขี่"
      },
      {
        placeName: "Khun Dan Prakan Chon Dam (Nakhon Nayok)",
        category: "Camping",
        notesFr: "Camping panoramique au pied du majestueux barrage",
        notesTh: "ล่องเรือชมธรรมชาติ 3 น้ำตกลับหลังเขื่อนขุนด่านและตั้งแคมป์",
        lat: 14.3128,
        lng: 101.3217,
        budgetPerNight: 150,
        detailedTipsFr: "Visitez le sanctuaire de Sarika situé à proximité pour en apprendre plus sur la faune locale.",
        detailedTipsTh: "ตื่นเช้าขึ้นชมทัศนียภาพสายหมอกลอยต่ำพาดผ่านสันเขื่อนยักษ์ ลมอู่อากาศบริสุทธิ์มาก",
        maxInfoFr: "Une étape mémorable scellant la fin de la traversée de l'Est.",
        maxInfoTh: "เขื่อนคอนกรีตยาวที่สุดในโลก จุดท่องเที่ยวธรรมชาติที่ไม่ควรพลาดในจังหวัดนครนายก"
      },
      {
        placeName: "Wang Takrai Park (Nakhon Nayok)",
        category: "Activity",
        notesFr: "Activités nautiques amusantes au parc Wang Takrai",
        notesTh: "ล่องห่วงยางพลาสติกไปตามลำธารน้ำใสผืนป่าเขาใหญ่หนาทึบ",
        lat: 14.3256,
        lng: 101.3012,
        budgetPerNight: 400,
        detailedTipsFr: "Faites l'expérience du rafting en bouée à travers les méandres de ce superbe parc paysager.",
        detailedTipsTh: "เช่าห่วงยางจากร้านค้าท้องถิ่นลอยตัวไหลตามน้ำใสเย็นฉ่ำใต้เงาไม้ใหญ่ สนุกสนานเพลิดเพลิน",
        maxInfoFr: "Un jardin d'Eden tropical idéal pour se rafraîchir en fin de road trip.",
        maxInfoTh: "สวนพรรณไม้ธรรมชาติขนาดใหญ่ที่โอบล้อมด้วยลำธารป่าดิบชื้นเขาใหญ่แสนร่มรื่น"
      },
      {
        placeName: "Bangkok",
        category: "Lodging",
        notesFr: "Retour triomphal à la capitale après la grande boucle",
        notesTh: "เดินทางกลับกรุงเทพฯ คืนรถเช่า และนวดแผนโบราณผ่อนคลาย",
        lat: 13.7563,
        lng: 100.5018,
        budgetPerNight: 800,
        detailedTipsFr: "Dégustez un dernier dîner de poissons grillés de mer le long du fleuve Chao Phraya.",
        detailedTipsTh: "เช็คอินโรงแรมในเมืองหลวงเพื่อความสบาย ส่งคืนรถและอุปกรณ์กางเต็นท์ เตรียมจบทริปแสนวิเศษ",
        maxInfoFr: "Fin de votre aventure inoubliable sur la boucle des 4 provinces.",
        maxInfoTh: "จบทริปแกรนด์ทัวร์ครอบคลุม 4 จังหวัดป่าและน้ำตกที่ดีที่สุดรายรอบกรุงเทพฯ"
      }
    ]
  },
  {
    id: "route-4",
    nameFr: "⛺ Escapade Bivouac & Camping Nature",
    nameTh: "⛺ เส้นทางแคมป์ปิ้งลุยป่าและลานกางเต็นท์ธรรมชาติ",
    descFr: "Sélection rigoureuse des meilleurs campings en bord de rivière et d'étang forestier de la région.",
    descTh: "รวบรวมสุดยอดจุดกางเต็นท์และลานแคมป์ปิ้งริมน้ำตกริมอ่างเก็บน้ำที่สวยที่สุดใน 4 จังหวัด",
    steps: [
      {
        placeName: "123/99 Sarintara 1 Village, Samut Sakhon",
        category: "Lodging",
        notesFr: "Point de départ - Logement chez l'habitant gratuit",
        notesTh: "จุดเริ่มต้นเดินทาง - ที่พักโฮมสเตย์ฟรีและเช็คอุปกรณ์เตรียมตัว",
        lat: 13.5266,
        lng: 100.3161,
        budgetPerNight: 0,
        detailedTipsFr: "Vérifiez vos sacs de couchage, votre bâche imperméable et votre stock de répulsif moustiques.",
        detailedTipsTh: "เช็คระบบเตาแคมป์ปิ้ง ไฟฉาย และแบตสำรองให้เรียบร้อยเพื่อทริปแคมป์ธรรมชาติที่ไร้กังวล",
        maxInfoFr: "Préparation optimale du paquetage de bivouac.",
        maxInfoTh: "จุดรวมพลแสนอบอุ่นก่อนออกเดินทางสู่การผจญภัยครั้งใหญ่"
      },
      {
        placeName: "Khao Sam Lan National Park (Saraburi)",
        category: "Camping",
        notesFr: "Bivouac lacustre sous la fraîcheur des grands pins de Saraburi",
        notesTh: "กางเต็นท์ริมอ่างเก็บน้ำสามหลัน และเดินป่าศึกษาธรรมชาติ",
        lat: 14.4414,
        lng: 100.9547,
        budgetPerNight: 100,
        detailedTipsFr: "Un camping herbeux et plat très paisible. Un petit feu de camp y est parfois toléré dans les zones balisées.",
        detailedTipsTh: "ผืนหญ้านุ่มริมน้ำในอุทยานสงบเงียบ เหมาะแก่การกางเต็นท์นอนเต็นท์โดมฟังเสียงจิ้งหรีดเรไร",
        maxInfoFr: "Un espace sauvage secret abritant d'agréables cascades en saison humide.",
        maxInfoTh: "อุทยานป่าเบญจพรรณและอ่างเก็บน้ำกว้างใหญ่ อากาศดีตลอดปีใกล้เมืองกรุง"
      },
      {
        placeName: "Namtok Chet Sao Noi (Saraburi)",
        category: "Camping",
        notesFr: "Camping au son cristallin de la rivière calcaire",
        notesTh: "ลานกางเต็นท์ริมน้ำตกเจ็ดสาวน้อย สัมผัสป่าไม้อุดมสมบูรณ์",
        lat: 14.7300,
        lng: 101.1917,
        budgetPerNight: 100,
        detailedTipsFr: "L'équipe de rangers propose de petites extensions électriques pour recharger vos lampes et batteries.",
        detailedTipsTh: "ลานกางเต็นท์หญ้านุ่มติดลำธารธรรมชาติ ปลอดภัยด้วยเจ้าหน้าที่ดูแลตลอด 24 ชั่วโมง มีจุดพ่วงไฟ",
        maxInfoFr: "Les bassins d'eau calcaire translucide invitent à une baignade régénératrice.",
        maxInfoTh: "น้ำตกหินปูนกว้างขวางป่ารุกขชาติร่มรื่น สวรรค์ของการพักผ่อนแคมป์ปิ้งริมธารใส"
      },
      {
        placeName: "Khun Dan Prakan Chon Dam (Nakhon Nayok)",
        category: "Camping",
        notesFr: "Camping face au gigantesque barrage d'eau claire",
        notesTh: "กางเต็นท์แคมป์ปิ้งริมเขื่อนขุนด่าน ลมโชยเย็นสบาย",
        lat: 14.3128,
        lng: 101.3217,
        budgetPerNight: 150,
        detailedTipsFr: "Trouvez un emplacement sur les berges herbeuses faisant face au grand déversoir du barrage.",
        detailedTipsTh: "ลานกางเต็นท์ธรรมชาติริมน้ำไหลจากเขื่อน เหมาะแก่การทำอาหารแคมป์ปิ้งและสรงน้ำคลายร้อน",
        maxInfoFr: "Le barrage retient d'immenses flots d'altitude, garantissant de l'eau claire toute l'année.",
        maxInfoTh: "ทัศนียภาพกว้างไกลของอ่างเก็บน้ำขนาดมหึมา วิวป่าภูเขาใหญ่โอบล้อมเป็นทิวทัศน์หลักล้าน"
      },
      {
        placeName: "Srinakarin Dam",
        category: "Camping",
        notesFr: "Bivouac face aux flots étincelants du barrage",
        notesTh: "กางเต็นท์แคมป์ปิ้งริมเขื่อนศรีนครินทร์ (น้ำตกห้วยแม่ขมิ้น)",
        lat: 14.5000,
        lng: 99.0000,
        budgetPerNight: 150,
        detailedTipsFr: "Le camping de Huay Mae Khamin propose des sanitaires très propres et des vues imprenables sur le lac de retenue.",
        detailedTipsTh: "จุดกางเต็นท์ชั้น 4 ของน้ำตกห้วยแม่ขมิ้น มีวิวอ่างเก็บน้ำเขื่อนทอแสงอาทิตย์สีทองยามเย็นงดงามที่สุด",
        maxInfoFr: "Une des plus somptueuses aires de bivouac publiques de toute la Thaïlande centrale.",
        maxInfoTh: "อุทยานธรรมชาติเขื่อนศรีนครินทร์ แหล่งสวรรค์แคมป์ปิ้งริมน้ำตกเจ็ดชั้นป่าลึกเมืองกาญจน์"
      },
      {
        placeName: "Erawan National Park",
        category: "Camping",
        notesFr: "Dernier bivouac sauvage au paradis de l'eau turquoise",
        notesTh: "กางเต็นท์พักผ่อนท่ามกลางธรรมชาติริมน้ำตกเอราวัณ 7 ชั้น",
        lat: 14.3686,
        lng: 99.1436,
        budgetPerNight: 100,
        detailedTipsFr: "Installez votre campement sous les grands arbres de l'aire de camping longeant la rivière Kwaï Yai.",
        detailedTipsTh: "กางเต็นท์นอนฟังเสียงลำธารธรรมชาติ เล่นน้ำใสไหลเย็นกับฝูงปลาแสนเชื่องยามบ่าย",
        maxInfoFr: "Un complexe de camping de premier choix, idéalement situé et très sauvage.",
        maxInfoTh: "น้ำตกมรกตขึ้นชื่อระบือโลก จุดแคมป์ปิ้งสุดท้ายเพื่อซึมซับธรรมชาติบริสุทธิ์เต็มปอด"
      },
      {
        placeName: "Suan Phueng (Ratchaburi)",
        category: "Camping",
        notesFr: "Bivouac de clôture dans les montagnes de Ratchaburi",
        notesTh: "กางเต็นท์นอนรับลมหนาว ชมวิวทิวเขากระโจมและป่าตะนาวศรี",
        lat: 13.5414,
        lng: 99.3414,
        budgetPerNight: 150,
        detailedTipsFr: "Profitez d'un grand bol de soupe fumante traditionnelle autour du réchaud de camping sous la fraîcheur.",
        detailedTipsTh: "จุดกางเต็นท์สวนผึ้งวิวดอยหญ้าเขียวขจี อากาศหนาวเย็นรวดเร็วในตอนดึก เตรียมเครื่องนอนอุ่นๆ",
        maxInfoFr: "La brise montagnarde scelle magnifiquement ce road trip 100% nature.",
        maxInfoTh: "หุบเขาและป่าไม้แสนบริสุทธิ์ชายแดนไทย-พม่า จุดปิดทริปแคมป์ปิ้งธรรมชาติสุดแสนสมบูรณ์"
      },
      {
        placeName: "Bangkok",
        category: "Lodging",
        notesFr: "Retour à Bangkok, restitution du matériel et repos",
        notesTh: "เดินทางกลับกรุงเทพฯ คืนเต็นท์อุปกรณ์ แวะพักโรงแรมสบาย",
        lat: 13.7563,
        lng: 100.5018,
        budgetPerNight: 800,
        detailedTipsFr: "Rincez et séchez soigneusement votre tente avant de la replier pour éviter les moisissures lors du stockage.",
        detailedTipsTh: "ทำความสะอาดเช็ดเต็นท์และตากให้แห้งสนิทก่อนจัดเก็บ คืนรถเช่าและพักผ่อนในเมืองหลวง",
        maxInfoFr: "Fin de votre formidable boucle de camping 4 provinces.",
        maxInfoTh: "จบทริปแสวงหาธรรมชาติ ลุยป่า แคมป์ปิ้ง 4 จังหวัดหลักแสนสุขใจและสุขภาพดี"
      }
    ]
  },
  {
    id: "route-5",
    nameFr: "💦 Les Rivières et Cascades Secrètes",
    nameTh: "💦 เส้นทางล่องแพเปียกและลำธารลับ",
    descFr: "Suivez le cours des rivières de montagne, explorez les grottes et détendez-vous sur des rafts flottants.",
    descTh: "สัมผัสสายน้ำใสและกิจกรรมทางน้ำ ล่องแพเมืองกาญจน์และแก่งนครนายก",
    steps: [
      {
        placeName: "123/99 Sarintara 1 Village, Samut Sakhon",
        category: "Lodging",
        notesFr: "Point de départ - Logement chez l'habitant gratuit",
        notesTh: "จุดเริ่มต้นเดินทาง - ที่พักโฮมสเตย์ฟรีและเช็คอุปกรณ์เตรียมตัว",
        lat: 13.5266,
        lng: 100.3161,
        budgetPerNight: 0,
        detailedTipsFr: "Préparez des sacs étanches pour vos appareils électroniques lors des futures activités aquatiques.",
        detailedTipsTh: "เตรียมกระเป๋ากันน้ำ ซองกันน้ำมือถือให้พร้อมสำหรับกิจกรรมทางน้ำล่องแพล่องแก่ง",
        maxInfoFr: "Un départ sous le signe de l'eau sauvage !",
        maxInfoTh: "จุดรวมพลแสนอบอุ่นก่อนออกเดินทางสู่การผจญภัยครั้งใหญ่"
      },
      {
        placeName: "Khao Bin Cave (Ratchaburi)",
        category: "Attraction",
        notesFr: "Exploration spéléologique et thermale à Khao Bin",
        notesTh: "เที่ยวชมความลี้ลับของถ้ำเขาบิน ตื่นตาอัญมณีใต้พิภพ",
        lat: 13.5936,
        lng: 99.6739,
        budgetPerNight: 350,
        detailedTipsFr: "Admirez le minéral scintillant des parois rocheuses de stalactites éclairées par le parc.",
        detailedTipsTh: "เดินเข้าชมความยิ่งใหญ่ของห้องโถงทั้ง 8 ห้อง ถ่ายรูปหินงอกรูปปะการังอันอัศจรรย์",
        maxInfoFr: "Une fantastique entrée en matière géologique.",
        maxInfoTh: "ถ้ำหินปูนที่งดงามที่สุดของราชบุรี ซ่อนความสวยงามทางธรณีวิทยาที่น่าอัศจรรย์"
      },
      {
        placeName: "Sai Yok National Park",
        category: "Camping",
        notesFr: "Camping le long des berges sauvages de la rivière Kwai",
        notesTh: "กางเต็นท์นอนริมน้ำ ล่องแพเปียกแม่น้ำแควน้อยไทรโยค",
        lat: 14.4344,
        lng: 98.8546,
        budgetPerNight: 100,
        detailedTipsFr: "Louez un gilet de sauvetage au centre d'accueil pour vous laisser porter en toute sécurité par le courant tiède.",
        detailedTipsTh: "ห้ามพลาดกิจกรรมล่องแพเปียกลอยคอตามกระแสน้ำแควน้อยใต้ร่มไม้ใหญ่ ไหลอย่างปลอดภัย",
        maxInfoFr: "Un parc forestier et fluvial historique bordé de jungle de bambous géants.",
        maxInfoTh: "อุทยานป่าริมแควน้อยอันโด่งดัง วิวน้ำตกไทรโยคใหญ่ตกลอยเข้าสู่แม่น้ำแสนคลาสสิก"
      },
      {
        placeName: "Erawan National Park",
        category: "Camping",
        notesFr: "Baignade féérique dans les eaux émeraude d'Erawan",
        notesTh: "กางเต็นท์ริมธาร เล่นน้ำใสราวกระจกกับฝูงปลาเอราวัณ",
        lat: 14.3686,
        lng: 99.1436,
        budgetPerNight: 100,
        detailedTipsFr: "Profitez des toboggans rocheux polis naturellement par l'eau au niveau 4, une vraie glissade sauvage !",
        detailedTipsTh: "เล่นสไลเดอร์หินปูนธรรมชาติชั้น 4 (อกนางผีเสื้อ) น้ำลึกกำลังดี สนุกตื่นเต้นปลอดภัย",
        maxInfoFr: "L'eau calcaire translucide offre une visibilité sous-marine absolue.",
        maxInfoTh: "สุดยอดน้ำตกสีมรกตยอดนิยมระดับโลก มีแอ่งน้ำสีเทอร์ควอยซ์สว่างไสวสะกดสายตา"
      },
      {
        placeName: "Muak Lek Waterfall (Saraburi)",
        category: "Attraction",
        notesFr: "Halte de fraîcheur au fil de l'eau à Saraburi",
        notesTh: "พักผ่อนหย่อนใจ นั่งแช่เท้าในลำธารใสสวนป่ามวกเหล็ก",
        lat: 14.6582,
        lng: 101.1969,
        budgetPerNight: 400,
        detailedTipsFr: "Asseyez-vous sur les rochers lisses et plongez vos pieds dans la fraîcheur sauvage du cours d'eau.",
        detailedTipsTh: "แวะเดินเล่นบนสะพานแขวนข้ามลำธาร มวกเหล็กถือเป็นแหล่งที่มีน้ำไหลตลอดปีจากเทือกเขาใหญ่",
        maxInfoFr: "Une étape rafraîchissante et revigorante.",
        maxInfoTh: "สวนรุกขชาติร่มรื่น อากาศบริสุทธิ์ใจกลางจังหวัดสระบุรี"
      },
      {
        placeName: "Wang Takrai Park (Nakhon Nayok)",
        category: "Activity",
        notesFr: "Activités nautiques ludiques à Wang Takrai",
        notesTh: "ล่องห่วงยางพลาสติกไปตามลำธารน้ำใสผืนป่าหนาทึบ",
        lat: 14.3256,
        lng: 101.3012,
        budgetPerNight: 400,
        detailedTipsFr: "Louez des chambres à air pour une descente mémorable. Prenez garde aux courants en saison des pluies.",
        detailedTipsTh: "เช่าห่วงยางจากจุดบริการแล้วปล่อยตัวไหลตามลำน้ำ สวมเสื้อชูชีพเพื่อความปลอดภัยทุกครั้ง",
        maxInfoFr: "Idéal pour s'amuser en famille ou entre amis au contact de la nature.",
        maxInfoTh: "ลำธารธรรมชาติกว้างขวาง ร่มรื่นด้วยต้นไม้ใหญ่อายุกว่าร้อยปี"
      },
      {
        placeName: "Bangkok",
        category: "Lodging",
        notesFr: "Fin de la boucle aquatique, retour à la métropole",
        notesTh: "เดินทางกลับกรุงเทพฯ พักผ่อนและฉลองมื้อค่ำ",
        lat: 13.7563,
        lng: 100.5018,
        budgetPerNight: 800,
        detailedTipsFr: "Rincez vos affaires de baignade et profitez de l'animation nocturne de Bangkok pour clore votre voyage.",
        detailedTipsTh: "แวะทานอาหารค่ำแถวเยาวราชเพื่อชิมสตรีทฟู้ดระดับโลกปิดท้ายทริปอย่างสมบูรณ์แบบ",
        maxInfoFr: "Fin de l'expédition aquatique des 4 provinces.",
        maxInfoTh: "จบทริปท่องเที่ยวแนวธรรมชาติและสายน้ำชื่นใจรายรอบกรุงเทพฯ"
      }
    ]
  },
  {
    id: "route-6",
    nameFr: "⛩️ Culture, Grottes & Temples Anciens",
    nameTh: "⛩️ เส้นทางวัฒนธรรม ถ้ำ และวัดลับโบราณ",
    descFr: "Découvrez les grottes sacrées, les ponts historiques et les merveilles spirituelles cachées des provinces.",
    descTh: "ตามรอยอารยธรรมโบราณ วัดลอยน้ำสะพานมอญ ถ้ำเขาบิน และประวัติศาสตร์แม่น้ำแคว",
    steps: [
      {
        placeName: "123/99 Sarintara 1 Village, Samut Sakhon",
        category: "Lodging",
        notesFr: "Point de départ - Logement chez l'habitant gratuit",
        notesTh: "จุดเริ่มต้นเดินทาง - ที่พักโฮมสเตย์ฟรีและเช็คอุปกรณ์เตรียมตัว",
        lat: 13.5266,
        lng: 100.3161,
        budgetPerNight: 0,
        detailedTipsFr: "Un départ sous le signe de l'histoire et de la spiritualité locale.",
        detailedTipsTh: "เตรียมเครื่องสักการะและกล้องถ่ายรูปเพื่อบันทึกภาพโบราณสถานและสถาปัตยกรรมที่งดงาม",
        maxInfoFr: "Départ chaleureux chez l'habitant.",
        maxInfoTh: "จุดรวมพลแสนอบอุ่นก่อนออกเดินทางสู่การผจญภัยครั้งใหญ่"
      },
      {
        placeName: "Khao Bin Cave (Ratchaburi)",
        category: "Attraction",
        notesFr: "Mystères souterrains et formations rocheuses de Khao Bin",
        notesTh: "ชมหินงอกหินย้อยรูปทรงแปลกตาในถ้ำเขาบินอันเลื่องชื่อ",
        lat: 13.5936,
        lng: 99.6739,
        budgetPerNight: 350,
        detailedTipsFr: "Les huit chambres du réseau de grottes abritent des légendes locales fascinantes.",
        detailedTipsTh: "ภายในถ้ำมีความสวยงามทางธรณีวิทยาที่ใช้เวลาก่อตัวยาวนานนับล้านปี ถ่ายภาพด้วยความเคารพธรรมชาติ",
        maxInfoFr: "Une des grottes les plus sacrées et visitées de la région.",
        maxInfoTh: "แหล่งธรณีวิทยาและประวัติศาสตร์ท้องถิ่นที่สำคัญของจังหวัดราชบุรี"
      },
      {
        placeName: "Sai Yok National Park",
        category: "Camping",
        notesFr: "Histoire de la Seconde Guerre mondiale et rivières de Kanchanaburi",
        notesTh: "ศึกษาเส้นทางประวัติศาสตร์รถไฟสายมรณะในอุทยานแห่งชาติไทรโยค",
        lat: 14.4344,
        lng: 98.8546,
        budgetPerNight: 100,
        detailedTipsFr: "Rendez-vous sur les vestiges de la voie ferrée de la mort bâtie par les prisonniers de guerre.",
        detailedTipsTh: "แวะชมถ้ำละว้าและพิพิธภัณฑ์ประวัติศาสตร์ช่องเขาขาดที่อยู่ใกล้เคียงเพื่อรำลึกเหตุการณ์ประวัติศาสตร์สำคัญ",
        maxInfoFr: "Mélange fascinant d'histoire tragique et de nature sauvage exubérante.",
        maxInfoTh: "ลานกางเต็นท์ร่มรื่นริมแม่น้ำแควน้อย บรรยากาศเงียบสงบเหมาะแก่การทบทวนประวัติศาสตร์"
      },
      {
        placeName: "Sangkhlaburi (Mon Bridge)",
        category: "Lodging",
        notesFr: "Monuments bouddhistes et pont d'Uttamanusorn",
        notesTh: "ตักบาตรเช้าสะพานมอญ ชมวิถีชาวพุทธนิกายรามัญริมน้ำซองกาเลีย",
        lat: 15.1436,
        lng: 98.4519,
        budgetPerNight: 600,
        detailedTipsFr: "Habillez-vous respectueusement pour traverser le pont en bois historique et saluer les moines.",
        detailedTipsTh: "เช่าชุดพื้นเมืองชาวมอญมาใส่บาตรยามเช้า และนั่งเรือหางยาวไปชมวัดใต้น้ำ (วัดวังก์วิเวการามเดิม)",
        maxInfoFr: "Une immersion spirituelle unique aux confins occidentaux de la Thaïlande.",
        maxInfoTh: "สะพานไม้ที่ยาวที่สุดในประเทศไทย สัญลักษณ์แห่งความรักความร่วมมือของชาวไทยและชาวมอญ"
      },
      {
        placeName: "Khao Sam Lan National Park (Saraburi)",
        category: "Camping",
        notesFr: "Temples sacrés et forêts paisibles de Saraburi",
        notesTh: "แวะนมัสการรอยพระพุทธบาทสระบุรี และกางเต็นท์เขาสามหลัน",
        lat: 14.4414,
        lng: 100.9547,
        budgetPerNight: 100,
        detailedTipsFr: "Visitez le célèbre temple Wat Phra Phutthabat situé à quelques kilomètres du parc national.",
        detailedTipsTh: "สักการะรอยพระพุทธบาทอันศักดิ์สิทธิ์คู่บ้านคู่เมืองสระบุรี ก่อนกลับมานอนแคมป์ริมอ่างเก็บน้ำที่เงียบสงบ",
        maxInfoFr: "Saraburi est un centre spirituel historique majeur de la plaine centrale thaïlandaise.",
        maxInfoTh: "อุทยานเขาสามหลันโอบล้อมด้วยภูเขาขนาดเล็ก อากาศเย็นสบายและเงียบสงบยิ่ง"
      },
      {
        placeName: "Bangkok",
        category: "Lodging",
        notesFr: "Fin du pèlerinage, retour dans la cité des anges",
        notesTh: "เดินทางกลับกรุงเทพฯ จบทริปสายบุญและวัฒนธรรม",
        lat: 13.7563,
        lng: 100.5018,
        budgetPerNight: 800,
        detailedTipsFr: "Visitez le Grand Palais ou le temple de l'Aube (Wat Arun) pour parfaire votre quête culturelle.",
        detailedTipsTh: "ปิดท้ายทริปด้วยการชมพระแก้วมรกตยามบ่าย และรับประทานอาหารค่ำริมฝั่งแม่น้ำเจ้าพระยาอย่างเป็นสิริมงคล",
        maxInfoFr: "Fin d'une aventure culturelle inoubliable.",
        maxInfoTh: "จบทริปแสวงหาความสงบและเรียนรู้รากเหง้าประวัติศาสตร์ท้องถิ่นรอบกรุงเทพฯ"
      }
    ]
  },
  {
    id: "route-7",
    nameFr: "🌄 Les Sommets et Horizons Brumeux",
    nameTh: "🌄 เส้นทางชมทะเลหมอกและยอดเขาสูง",
    descFr: "Partez à l'assaut des sommets, des belvédères frontaliers et des montagnes enveloppées de brume fraîche.",
    descTh: "ทริปปีนเขาสัมผัสอากาศหนาว ทะเลหมอกเขากระโจม เนินช้างศึก และจุดชมวิวสุดขอบฟ้า",
    steps: [
      {
        placeName: "123/99 Sarintara 1 Village, Samut Sakhon",
        category: "Lodging",
        notesFr: "Départ pour les sommets montagneux",
        notesTh: "จุดเริ่มต้นเดินทาง - เตรียมเสื้อหนาวและเช็คระบบเกียร์รถยนต์",
        lat: 13.5266,
        lng: 100.3161,
        budgetPerNight: 0,
        detailedTipsFr: "Assurez-vous de prendre des vêtements chauds, les nuits en altitude sont très fraîches.",
        detailedTipsTh: "เส้นทางส่วนใหญ่เป็นเขาสูงชัน ควรเตรียมเสื้อหนาวและเช็คน้ำมันเกียร์และเบรกรถยนต์ให้เรียบร้อย",
        maxInfoFr: "Départ pour une expédition en altitude.",
        maxInfoTh: "จุดรวมพลแสนอบอุ่นก่อนออกเดินทางสู่การผจญภัยครั้งใหญ่"
      },
      {
        placeName: "Suan Phueng (Ratchaburi)",
        category: "Camping",
        notesFr: "Le belvédère de Huai Khok Mu et les brumes de Tenasserim",
        notesTh: "กางเต็นท์นอนดูดาว สัมผัสทะเลหมอกยามเช้าที่เขากระโจม สวนผึ้ง",
        lat: 13.5414,
        lng: 99.3414,
        budgetPerNight: 150,
        detailedTipsFr: "Louez un véhicule 4x4 local pour monter au sommet de Khao Krajom à l'aube pour voir la mer de nuages.",
        detailedTipsTh: "ห้ามนำรถเก๋งขึ้นเขากระโจมโดยเด็ดขาด แนะนำให้ใช้บริการรถกระบะขับเคลื่อนสี่ล้อของชาวบ้านในพื้นที่เพื่อความปลอดภัย",
        maxInfoFr: "Un panorama grandiose s'ouvrant sur la jungle préservée de la Birmanie voisine.",
        maxInfoTh: "ยอดเขาสูงจุดกั้นพรมแดนไทย-พม่า อากาศหนาวเย็นตลอดทั้งปีมีไอหมอกงดงาม"
      },
      {
        placeName: "Pilok Mine & Ban Etong",
        category: "Lodging",
        notesFr: "Le col de Noen Chang Suek et le village dans les nuages",
        notesTh: "ชมวิว 360 องศาที่เนินช้างศึก สัมผัสสายหมอกและลมหนาวบ้านอีต่อง",
        lat: 14.6722,
        lng: 98.3617,
        budgetPerNight: 500,
        detailedTipsFr: "Rendez-vous au sommet du belvédère Noen Chang Suek à 6h00 pour voir le soleil se lever au-dessus de la brume.",
        detailedTipsTh: "ตื่นเช้าขึ้นไปรับลมหนาวที่เนินช้างศึก จุดชมทิวทัศน์ที่สามารถมองเห็นฝั่งพม่าได้อย่างกว้างไกลสุดตา",
        maxInfoFr: "Le point culminant de la région, offrant des sensations de bout du monde inoubliables.",
        maxInfoTh: "อดีตค่ายทหารแนวหน้าชายแดน ปัจจุบันคือจุดชมทะเลดาวและทะเลหมอกยอดนิยม"
      },
      {
        placeName: "Srinakarin Dam",
        category: "Camping",
        notesFr: "Bivouac d'altitude à Huay Mae Khamin",
        notesTh: "กางเต็นท์แคมป์ปิ้งริมเขื่อนศรีนครินทร์ (น้ำตกห้วยแม่ขมิ้นชั้น 4)",
        lat: 14.5000,
        lng: 99.0000,
        budgetPerNight: 150,
        detailedTipsFr: "Installez votre camp de base sur la falaise herbeuse dominant l'immense réservoir entouré de collines.",
        detailedTipsTh: "ชมพระอาทิตย์ขึ้นเหนือเทือกเขาเขื่อนศรีนครินทร์จากเต็นท์นอนของคุณ บรรยากาศโรแมนติกยิ่ง",
        maxInfoFr: "L'une des plus belles pelouses de camping de Thaïlande centrale.",
        maxInfoTh: "จุดกางเต็นท์หญ้านุ่ม มีไฟฟ้าพ่วงบริการและเจ้าหน้าที่อุทยานคอยดูแลความปลอดภัยอย่างใกล้ชิด"
      },
      {
        placeName: "Khao Sam Lan National Park (Saraburi)",
        category: "Camping",
        notesFr: "Sentiers de crêtes et panoramas de Saraburi",
        notesTh: "เดินป่าศึกษาธรรมชาติขึ้นยอดเขาโตน ลาดเขาเขาสามหลัน",
        lat: 14.4414,
        lng: 100.9547,
        budgetPerNight: 100,
        detailedTipsFr: "Suivez le sentier balisé de 3km menant aux points de vue sur les plaines agricoles de Saraburi.",
        detailedTipsTh: "พกกล้องส่องทางไกลไปส่องดูนกป่าหลากหลายสายพันธุ์ และสวมใส่รองเท้าผ้าใบเดินป่าที่มีดอกยางลึก",
        maxInfoFr: "Une transition forestière reposante à proximité de la vallée de Khao Yai.",
        maxInfoTh: "ลานกางเต็นท์ริมน้ำอ่างเก็บน้ำสามหลัน มีสายลมโชยเย็นสบายตลอดทั้งคืน"
      },
      {
        placeName: "Bangkok",
        category: "Lodging",
        notesFr: "Descente vers les plaines et retour à la capitale",
        notesTh: "เดินทางกลับกรุงเทพฯ พักผ่อนกายาและจบทริปขุนเขา",
        lat: 13.7563,
        lng: 100.5018,
        budgetPerNight: 800,
        detailedTipsFr: "Reposez-vous et hydratez votre peau après ces nuits fraîches passées en altitude.",
        detailedTipsTh: "แวะซื้อของฝากผลไม้สดจากตลาดไทก่อนเดินทางกลับเข้าพักผ่อนในกรุงเทพมหานครอย่างมีความสุข",
        maxInfoFr: "Fin du voyage sur les toits des provinces centrales.",
        maxInfoTh: "จบทริปพิชิตยอดเขาและทะเลหมอกรอบเมืองหลวง สูดโอโซนบริสุทธิ์เต็มปอด"
      }
    ]
  },
  {
    id: "route-8",
    nameFr: "💧 Le Tour des Barrages et Lacs Majestueux",
    nameTh: "💧 เส้นทางเขื่อนยักษ์และทะเลสาบกว้างขวาง",
    descFr: "Un itinéraire spectaculaire longeant les lacs de retenue monumentaux de Srinakarin et de Khun Dan.",
    descTh: "ท่องเที่ยวลานกางเต็นท์ริมน้ำ ชมทัศนียภาพเขื่อนศรีนครินทร์และเขื่อนขุนด่านปราการชล",
    steps: [
      {
        placeName: "123/99 Sarintara 1 Village, Samut Sakhon",
        category: "Lodging",
        notesFr: "Départ pour le circuit des lacs et barrages",
        notesTh: "จุดเริ่มต้นเดินทาง - พักผ่อนและเตรียมอุปกรณ์สำรวจทางน้ำ",
        lat: 13.5266,
        lng: 100.3161,
        budgetPerNight: 0,
        detailedTipsFr: "Préparez vos cannes à pêche ou vos maillots de bain, l'eau sera notre fil conducteur !",
        detailedTipsTh: "ทริปนี้เน้นจุดพักผ่อนริมเขื่อนขนาดใหญ่ ควรเตรียมบอร์ดพายคายัคหรือเสื้อชูชีพส่วนตัวมาด้วยถ้ามี",
        maxInfoFr: "Un grand tour au fil de l'eau.",
        maxInfoTh: "จุดรวมพลแสนอบอุ่นก่อนออกเดินทางสู่การผจญภัยครั้งใหญ่"
      },
      {
        placeName: "Srinakarin Dam",
        category: "Camping",
        notesFr: "La mer intérieure de Kanchanaburi",
        notesTh: "กางเต็นท์แคมป์ปิ้งริมเขื่อนศรีนครินทร์ ยลโฉมอ่างเก็บน้ำยักษ์",
        lat: 14.5000,
        lng: 99.0000,
        budgetPerNight: 150,
        detailedTipsFr: "N'hésitez pas à louer un kayak pour ramer le long des falaises calcaires bordant la retenue.",
        detailedTipsTh: "ล่องแพเปียกหรือพักรีสอร์ทแพริมน้ำเพื่อสัมผัสสายน้ำใสของเขื่อนศรีนครินทร์อย่างเต็มอิ่ม",
        maxInfoFr: "Un ouvrage d'ingénierie colossal formant un réservoir de plus de 400 kilomètres carrés.",
        maxInfoTh: "เขื่อนอเนกประสงค์ขนาดใหญ่ที่กักเก็บน้ำจากเทือกเขาตะวันตก ทิวทัศน์กว้างไกลน่าตื่นตา"
      },
      {
        placeName: "Erawan National Park",
        category: "Camping",
        notesFr: "Les eaux calmes de la rivière Kwai Yai",
        notesTh: "แวะเล่นน้ำตกเอราวัณที่ไหลหล่อเลี้ยงลงสู่เขื่อนศรีนครินทร์",
        lat: 14.3686,
        lng: 99.1436,
        budgetPerNight: 100,
        detailedTipsFr: "L'eau du parc national alimente directement le bassin hydrographique du barrage de Srinakarin.",
        detailedTipsTh: "เดินศึกษาธรรมชาติเส้นทางป่าไผ่เอราวัณ และลงเล่นน้ำกับฝูงปลาพลวงหินธรรมชาติแสนน่ารัก",
        maxInfoFr: "Une connexion écologique directe entre les cascades et le grand barrage.",
        maxInfoTh: "ลานกางเต็นท์ริมน้ำตกเอราวัณร่มรื่นด้วยต้นไม้ใหญ่คอยบังแสงแดดตลอดวัน"
      },
      {
        placeName: "Khun Dan Prakan Chon Dam (Nakhon Nayok)",
        category: "Camping",
        notesFr: "Le mur de béton monumental de Nakhon Nayok",
        notesTh: "ตั้งแคมป์ริมน้ำหลังเขื่อนขุนด่านปราการชล ชมวิวเขื่อนคอนกรีตยาวที่สุดในโลก",
        lat: 14.3128,
        lng: 101.3217,
        budgetPerNight: 150,
        detailedTipsFr: "Montez au sommet du barrage en fin d'après-midi pour assister au coucher du soleil sur la vallée.",
        detailedTipsTh: "นั่งรถรางนำเที่ยวชมทัศนียภาพบนสันเขื่อนขุนด่านฯ ถ่ายภาพความยิ่งใหญ่ของวิศวกรรมคอนกรีต",
        maxInfoFr: "Ce barrage est l'œuvre de l'ingénierie royale pour réguler les crues du massif de Khao Yai.",
        maxInfoTh: "เขื่อนขุนด่านฯ เป็นแหล่งท่องเที่ยวหลักของนครนายกที่มีกิจกรรมทางน้ำหลากหลายและสนุกสนาน"
      },
      {
        placeName: "Sarika Waterfall (Nakhon Nayok)",
        category: "Attraction",
        notesFr: "La cascade qui alimente le bassin de Nakhon Nayok",
        notesTh: "ชมน้ำตกสาริกายักษ์ 9 ชั้นที่ไหลรินหล่อเลี้ยงผืนดินเบื้องล่าง",
        lat: 14.2989,
        lng: 101.2589,
        budgetPerNight: 450,
        detailedTipsFr: "La cascade est particulièrement impressionnante juste après les pluies, avec un débit spectaculaire.",
        detailedTipsTh: "หลีกเลี่ยงการปีนป่ายโขดหินที่ลาดชันในชั้นที่ 5-7 เนื่องจากหินมีความลื่นและมีตะไคร่น้ำเกาะหนา",
        maxInfoFr: "Une cascade majestueuse s'écoulant au pied des montagnes de Khao Yai.",
        maxInfoTh: "แหล่งธรรมชาติอุดมสมบูรณ์ที่ได้รับการอนุรักษ์อย่างดีเยี่ยมใกล้ตัวเมืองนครนายก"
      },
      {
        placeName: "Bangkok",
        category: "Lodging",
        notesFr: "Fin de la tournée des barrages, retour à la capitale",
        notesTh: "เดินทางกลับกรุงเทพฯ พักผ่อนและแชร์ภาพความประทับใจ",
        lat: 13.7563,
        lng: 100.5018,
        budgetPerNight: 800,
        detailedTipsFr: "Sauvegardez vos superbes photos aériennes des barrages et profitez de votre dernière nuit.",
        detailedTipsTh: "เช็คอินโรงแรมในตัวเมืองแสนสบาย และฉลองทริปแสนสนุกด้วยมื้อค่ำอร่อยๆ ย่านเยาวราชก่อนกลับ",
        maxInfoFr: "Fin d'un road trip axé sur les splendeurs de l'ingénierie hydraulique.",
        maxInfoTh: "จบทริปชมสองเขื่อนยักษ์ที่สวยงามที่สุดรอบกรุงเทพฯ เต็มอิ่มกับทัศนียภาพสายน้ำ"
      }
    ]
  },
  {
    id: "route-9",
    nameFr: "🥘 Le Parcours des Saveurs & Marchés Locaux",
    nameTh: "🥘 เส้นทางอาหารอร่อยและตลาดท้องถิ่นน่าเที่ยว",
    descFr: "Dégustez les curry puffs de Saraburi, le poisson de Samut Sakhon et les fruits frais de Nakhon Nayok.",
    descTh: "ชิมของอร่อยประจำจังหวัด กะหรี่ปั๊บมวกเหล็ก อาหารทะเลสมุทรสาคร และผลไม้สดนครนายก",
    steps: [
      {
        placeName: "123/99 Sarintara 1 Village, Samut Sakhon",
        category: "Lodging",
        notesFr: "Point de départ - Fruits de mer frais de Samut Sakhon",
        notesTh: "จุดเริ่มต้นเดินทาง - ทานอาหารทะเลสดๆ มหาชัย สมุทรสาคร",
        lat: 13.5266,
        lng: 100.3161,
        budgetPerNight: 0,
        detailedTipsFr: "Ne manquez pas de visiter le marché de poissons de Mahachai situé à proximité avant de partir.",
        detailedTipsTh: "ลิ้มลองกุ้งแม่น้ำเผาและปลาทูแม่กลองหน้างอคอหักอันเลื่องชื่อที่ตลาดมหาชัยก่อนออกเดินทาง",
        maxInfoFr: "Samut Sakhon est la capitale thaïlandaise des produits de la mer frais et séchés.",
        maxInfoTh: "จุดเริ่มต้นอิ่มอร่อยที่โฮมสเตย์ ท้องอิ่มพร้อมออกเดินทางท่องเที่ยวตะลุยชิม"
      },
      {
        placeName: "Khao Bin Cave (Ratchaburi)",
        category: "Attraction",
        notesFr: "Les marchés flottants et spécialités de Ratchaburi",
        notesTh: "แวะชิมสับปะรดสวนผึ้งหวานฉ่ำ และยลถ้ำเขาบิน",
        lat: 13.5936,
        lng: 99.6739,
        budgetPerNight: 350,
        detailedTipsFr: "Ratchaburi est célèbre pour son lait frais de vache et ses gâteaux de coco traditionnels (Khanom Mo Kaeng).",
        detailedTipsTh: "ซื้อขนมเปี๊ยะและผลไม้แปรรูปของฝากชื่อดังของจังหวัดราชบุรีบริเวณหน้าทางเข้าถ้ำเขาบินเพื่อทานระหว่างเดินทาง",
        maxInfoFr: "Une province agricole riche en saveurs gourmandes et saines.",
        maxInfoTh: "ราชบุรีอุดมสมบูรณ์ไปด้วยดินภูเขาไฟที่ทำให้ปลูกผลไม้ได้รสชาติดีเลิศ"
      },
      {
        placeName: "Muak Lek Waterfall (Saraburi)",
        category: "Attraction",
        notesFr: "Les célèbres Curry Puffs de Muak Lek",
        notesTh: "ลิ้มลองกะหรี่ปั๊บมวกเหล็กของแท้ แวะฟาร์มโคนมไทย-เดนมาร์ก",
        lat: 14.6582,
        lng: 101.1969,
        budgetPerNight: 400,
        detailedTipsFr: "Achetez une boîte de Curry Puffs chauds à la viande ou au poulet, croustillants et parfumés aux épices.",
        detailedTipsTh: "ซื้อกะหรี่ปั๊บหลากหลายไส้ ทั้งไส้ไก่ ไส้เนื้อ ไส้ถั่ว และไส้องุ่นแห้ง รสชาติอร่อยแป้งบางกรอบสูตรดั้งเดิม",
        maxInfoFr: "Muak Lek est le berceau de l'industrie laitière et des pâtisseries frites en Thaïlande.",
        maxInfoTh: "แวะดื่มนมสดเย็นๆ รสจืดและหวานที่เคาน์เตอร์สหกรณ์ฟาร์มโคนมไทย-เดนมาร์กแสนอร่อย"
      },
      {
        placeName: "Namtok Chet Sao Noi (Saraburi)",
        category: "Camping",
        notesFr: "Pique-nique de Som Tum et poulet grillé au bord de l'eau",
        notesTh: "กางเต็นท์ริมน้ำตก สั่งส้มตำไก่ย่างวิเชียรบุรีปิคนิคริมธารเจ็ดสาวน้อย",
        lat: 14.7300,
        lng: 101.1917,
        budgetPerNight: 100,
        detailedTipsFr: "Les marchands locaux proposent d'excellents Som Tum épicés et du poulet mariné grillé au charbon de bois.",
        detailedTipsTh: "สั่งส้มตำไทยปูม้า ไก่ย่างหนังกรอบ และข้าวเหนียวร้อนๆ มาปูเสื่อนั่งทานริมน้ำตก ฟังเสียงน้ำไหลเพลินๆ",
        maxInfoFr: "L'expérience culinaire classique et conviviale appréciée des familles thaïlandaises.",
        maxInfoTh: "ลานกางเต็นท์เจ็ดสาวน้อยมีโซนจำหน่ายอาหารท้องถิ่นที่จัดระเบียบอย่างสะอาดสะอ้าน"
      },
      {
        placeName: "Wang Takrai Park (Nakhon Nayok)",
        category: "Activity",
        notesFr: "Les fruits tropicaux de Nakhon Nayok",
        notesTh: "ชิมมะยงชิดรสหวานเจี๊ยบชื่อดัง และล่องห่วงยางที่วังตะไคร้",
        lat: 14.3256,
        lng: 101.3012,
        budgetPerNight: 400,
        detailedTipsFr: "Si vous voyagez au printemps, ne manquez pas de goûter aux prunes d'oranges locales (Mayongchid).",
        detailedTipsTh: "หากเดินทางในช่วงฤดูกาลผลไม้ ห้ามพลาดการซื้อไอศกรีมมะยงชิดแปรรูปและมะยงชิดลอยแก้วหวานเย็นชื่นใจ",
        maxInfoFr: "Nakhon Nayok est réputée pour ses vergers fertiles irrigués par l'eau pure venant de Khao Yai.",
        maxInfoTh: "สัมผัสผลไม้สดๆ จากสวนเกษตรกรโดยตรงในราคาเป็นกันเองริมทางหลวง"
      },
      {
        placeName: "Bangkok",
        category: "Lodging",
        notesFr: "Retour à Bangkok, dîner gastronomique de clôture",
        notesTh: "เดินทางกลับกรุงเทพฯ ตะลุยชิมสตรีทฟู้ดระดับมิชลินไกด์",
        lat: 13.7563,
        lng: 100.5018,
        budgetPerNight: 800,
        detailedTipsFr: "Offrez-vous un grand dîner sur les marchés nocturnes de Chinatown pour clore cette aventure des sens.",
        detailedTipsTh: "จองโต๊ะทานอาหารทะเลเผา บัวลอยน้ำขิง หรือปาท่องโก๋ยักษ์ทอดร้อนๆ เพื่อเป็นการส่งท้ายทริปชิมแสนสุขใจ",
        maxInfoFr: "Fin du voyage gastronomique et gourmand à travers les 4 provinces.",
        maxInfoTh: "จบทริปสวรรค์ของนักกิน อิ่มอร่อยตลอดเส้นทางธรรมชาติรอบกรุงเทพมหานคร"
      }
    ]
  },
  {
    id: "route-10",
    nameFr: "👨‍👩‍👧 Le Grand Raid en Famille & Activités Fun",
    nameTh: "👨‍👩‍👧 เส้นทางกิจกรรมสนุกสำหรับครอบครัวและสวนป่าร่มรื่น",
    descFr: "Un itinéraire équilibré pour les parents et les enfants : baignades sécurisées, visites de fermes et rafting doux.",
    descTh: "โรดทริปครอบครัวแสนอบอุ่น เล่นน้ำตกชั้นเตี้ย ชมฟาร์มสัตว์เลี้ยงแสนน่ารัก และกิจกรรมแอดเวนเจอร์เบาๆ",
    steps: [
      {
        placeName: "123/99 Sarintara 1 Village, Samut Sakhon",
        category: "Lodging",
        notesFr: "Point de départ familial",
        notesTh: "จุดเริ่มต้นเดินทาง - พักผ่อนเตรียมพร้อมกิจกรรมครอบครัว",
        lat: 13.5266,
        lng: 100.3161,
        budgetPerNight: 0,
        detailedTipsFr: "Préparez des jeux de société et des vêtements de rechange pour les enfants.",
        detailedTipsTh: "ตรวจเช็คคาร์ซีทสำหรับเด็กเล็ก และเตรียมของเล่นสำหรับปิคนิคกลางแจ้งริมลำธารน้ำตก",
        maxInfoFr: "Un départ confortable et sans stress pour les petits et les grands.",
        maxInfoTh: "จุดรวมพลแสนอบอุ่นก่อนออกเดินทางสู่การผจญภัยครั้งใหญ่"
      },
      {
        placeName: "Suan Phueng (Ratchaburi)",
        category: "Camping",
        notesFr: "Visite des fermes de moutons et glamping",
        notesTh: "พาเด็กๆ ป้อนหญ้าแกะที่ฟาร์มแกะสวนผึ้ง และพักผ่อนแคมป์ปิ้งแสนสบาย",
        lat: 13.5414,
        lng: 99.3414,
        budgetPerNight: 150,
        detailedTipsFr: "Visitez The Scenery Vintage Farm pour assister aux spectacles de chiens de berger et de tonte des moutons.",
        detailedTipsTh: "ฟาร์มแกะมีกิจกรรมสนุกๆ มากมาย ทั้งการป้อนนมลูกแกะ ยิงธนู และขี่ม้าแคระ เหมาะสำหรับเด็กทุกวัย",
        maxInfoFr: "Un décor bucolique rappelant les collines de la Toscane européenne en plein cœur de la Thaïlande.",
        maxInfoTh: "บรรยากาศฟาร์มสไตล์วินเทจน่ารัก โอบล้อมด้วยภูเขาและสายลมเย็นที่เด็กๆ จะต้องชื่นชอบ"
      },
      {
        placeName: "Erawan National Park",
        category: "Camping",
        notesFr: "Baignade sécurisée dans les premiers niveaux d'Erawan",
        notesTh: "เล่นน้ำตกระดับชั้นที่ 1 และ 2 ของน้ำตกเอราวัณที่กระแสน้ำไม่แรงและปลอดภัย",
        lat: 14.3686,
        lng: 99.1436,
        budgetPerNight: 100,
        detailedTipsFr: "Les niveaux 1 (Hlai Keun) et 2 (Wang Macha) sont plats, ombragés et parfaits pour les jeunes enfants.",
        detailedTipsTh: "มีเสื้อชูชีพขนาดเล็กให้เช่าตรงทางเข้าอุทยาน แนะนำให้เด็กๆ สวมใส่ชูชีพทุกครั้งก่อนลงเล่นน้ำเพื่อความปลอดภัย",
        maxInfoFr: "Les rangers du parc surveillent activement les bassins familiaux inférieurs.",
        maxInfoTh: "ลานกางเต็นท์กว้างขวาง มีร้านสวัสดิการจำหน่ายอาหารและเครื่องดื่มบริการครบวงจร"
      },
      {
        placeName: "Namtok Chet Sao Noi (Saraburi)",
        category: "Camping",
        notesFr: "Le paradis des tout-petits au bord de l'eau",
        notesTh: "แช่ตัวในแอ่งน้ำตื้นๆ ของน้ำตกเจ็ดสาวน้อย ปลอดภัยด้วยความดูแลของเจ้าหน้าที่",
        lat: 14.7300,
        lng: 101.1917,
        budgetPerNight: 100,
        detailedTipsFr: "La cascade n'a pas de courants profonds dans les zones de baignade balisées pour enfants.",
        detailedTipsTh: "ลานหญ้ากางเต็นท์ติดลำธารเรียบแบนและนุ่ม เด็กๆ สามารถวิ่งเล่นได้อย่างอิสระภายใต้ร่มเงาป่ารุกขชาติ",
        maxInfoFr: "La cascade la plus familiale et rassurante de la province de Saraburi.",
        maxInfoTh: "อุทยานมีป้ายเตือนความลึกระบุไว้อย่างชัดเจนในทุกจุดบริการ ลงเล่นน้ำได้อย่างมั่นใจ"
      },
      {
        placeName: "Wang Takrai Park (Nakhon Nayok)",
        category: "Activity",
        notesFr: "Pique-nique et descente de rivière douce en bouée",
        notesTh: "ล่องห่วงยางพลาสติกแบบนุ่มนวลริมตลิ่งอุทยานวังตะไคร้",
        lat: 14.3256,
        lng: 101.3012,
        budgetPerNight: 400,
        detailedTipsFr: "Choisissez une zone herbeuse pour poser une natte et préparez un délicieux goûter en famille au bord de l'eau.",
        detailedTipsTh: "จุดบริการเช่าห่วงยางมีห่วงยางขนาดเล็กสำหรับเด็กพร้อมพนักงานคอยแนะนำความปลอดภัยตลอดวัน",
        maxInfoFr: "Un superbe parc d'attraction naturel géré avec soin par une fondation privée.",
        maxInfoTh: "สวนพฤกษศาสตร์ร่มรื่นริมสายน้ำจากเขาใหญ่ สรรค์สร้างกิจกรรมและรอยยิ้มให้ทุกคนในครอบครัว"
      },
      {
        placeName: "Bangkok",
        category: "Lodging",
        notesFr: "Retour à Bangkok, fin de l'aventure familiale",
        notesTh: "เดินทางกลับกรุงเทพฯ จบทริปครอบครัวแสนสุขสันต์",
        lat: 13.7563,
        lng: 100.5018,
        budgetPerNight: 800,
        detailedTipsFr: "Imprimez vos superbes souvenirs de voyage pour garnir votre album photo de famille.",
        detailedTipsTh: "เช็คอินพักผ่อนเพื่อคืนอุปกรณ์กางเต็นท์ เตรียมตัวพักผ่อนและรับประทานอาหารค่ำฉลองความสุขของครอบครัว",
        maxInfoFr: "Fin d'un road trip inoubliable mêlant nature et activités amusantes.",
        maxInfoTh: "จบทริปครอบครัวแสนอบอุ่นและปลอดภัย สะสมรอยยิ้มและเสียงหัวเราะของเด็กๆ ตลอดเส้นทาง"
      }
    ]
  }
];

function getLocalHaversineDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  if (!lat1 || !lng1 || !lat2 || !lng2) return 0;
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function getLocalDrivingHours(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const geoDist = getLocalHaversineDistance(lat1, lng1, lat2, lng2);
  if (geoDist === 0) return 0;
  const roadKm = Math.round(geoDist * 1.3);
  const minutes = Math.round((roadKm / 75) * 60);
  return parseFloat((minutes / 60).toFixed(1));
}

function getDynamicRelayStep(lat1: number, lng1: number, lat2: number, lng2: number, lang: 'fr' | 'th') {
  const midLat = (lat1 + lat2) / 2;
  const midLng = (lng1 + lng2) / 2;
  
  let nameFr = "Escale de Sécurité (Relais)";
  let nameTh = "จุดแวะพักระหว่างทาง (เพื่อความปลอดภัย)";
  let descFr = "Une halte agréable pour couper le trajet de conduite et se reposer conformément à notre charte de sécurité (Maximum 3h de route par jour).";
  let descTh = "จุดแวะพักที่จัดเตรียมขึ้นตามเกณฑ์ความปลอดภัยเพื่อลดความเหนื่อยล้าในการขับขี่ (ขับรถไม่เกิน 3 ชั่วโมงต่อวัน)";
  let detailedTipsFr = "Profitez-en pour vous étirer, faire le plein d'essence et déguster des fruits frais locaux.";
  let detailedTipsTh = "จอดพักยืดเส้นยืดสาย เติมน้ำมันให้เต็มถัง และเพลิดเพลินกับอาหารท้องถิ่นรสเลิศ";
  let maxInfoFr = "Une étape indispensable pour garantir votre confort et votre sécurité sur la route.";
  let maxInfoTh = "จุดพักรถและแคมป์ปิ้งที่ปลอดภัยตามมาตรฐานสากลเพื่อสุขอนามัยที่ดีในการเดินทาง";

  if (midLat > 14.8) {
    nameFr = "Suphan Buri - Escale de Sécurité";
    nameTh = "จังหวัดสุพรรณบุรี - จุดแวะพักเพื่อความปลอดภัย";
    descFr = "Halte charmante à Suphan Buri, à mi-chemin entre l'Ouest sauvage et les cascades de l'Est.";
    descTh = "จุดแวะพักผ่อนที่สุพรรณบุรี ครึ่งทางระหว่างกาญจนบุรีและจังหวัดภาคกลาง";
  } else if (midLat < 14.1) {
    nameFr = "Nakhon Pathom - Relais Route";
    nameTh = "จังหวัดนครปฐม - จุดพักแวะระหว่างทาง";
    descFr = "Faites une halte relaxante à Nakhon Pathom pour admirer le gigantesque Phra Pathom Chedi.";
    descTh = "แวะเที่ยวพระปฐมเจดีย์ที่จังหวัดนครปฐม จุดแวะพักรถที่ดีที่สุดก่อนเข้าเขตตะวันตก";
  } else {
    nameFr = "Bangkok - Relais Central";
    nameTh = "กรุงเทพมหานคร - จุดพักสายใจกลางเมือง";
    descFr = "Une passe bienvenue au cœur de la capitale avant de transiter d'une province à une autre.";
    descTh = "จุดแวะพักใจกลางกรุงเทพมหานคร สะดวกในการเดินทางข้ามระหว่างป่าตะวันตกและน้ำตกตะวันออก";
  }

  return {
    placeName: nameFr,
    category: "Lodging" as CategoryType,
    notesFr: descFr,
    notesTh: descTh,
    lat: midLat,
    lng: midLng,
    budgetPerNight: 400,
    detailedTipsFr,
    detailedTipsTh,
    maxInfoFr,
    maxInfoTh
  };
}

export function generatePresetItinerary(
  routeId: string,
  durationWeeks: 2 | 4 | 6,
  lang: 'fr' | 'th'
): { items: ItineraryItem[]; title: string; description: string } {
  const template = ROUTE_TEMPLATES.find(r => r.id === routeId) || ROUTE_TEMPLATES[0];
  const totalDays = durationWeeks * 7;
  const rawSteps = template.steps;

  // We initially select step indices based on target weeks
  const initialIndices: number[] = [0];
  const midCount = rawSteps.length - 2;

  if (durationWeeks === 2) {
    // Propose up to 3 intermediate indices
    if (midCount > 0) {
      const idx1 = 1;
      const idx3 = rawSteps.length - 2;
      const idx2 = Math.floor(rawSteps.length / 2);
      const mids = Array.from(new Set([idx1, idx2, idx3])).sort((a, b) => a - b);
      initialIndices.push(...mids);
    }
  } else if (durationWeeks === 4) {
    // Propose up to 5 intermediate indices
    if (midCount > 0) {
      if (midCount <= 5) {
        for (let i = 1; i <= midCount; i++) {
          initialIndices.push(i);
        }
      } else {
        for (let i = 0; i < 5; i++) {
          const idx = 1 + Math.floor((i / 4) * (midCount - 1));
          initialIndices.push(idx);
        }
      }
    }
  } else {
    // 6 weeks: keep all intermediate steps
    for (let i = 1; i < rawSteps.length - 1; i++) {
      initialIndices.push(i);
    }
  }

  // Ensure last step index is included
  if (!initialIndices.includes(rawSteps.length - 1)) {
    initialIndices.push(rawSteps.length - 1);
  }

  // Unique and sorted indices
  const selectedIndices = Array.from(new Set(initialIndices)).sort((a, b) => a - b);

  // Dynamic Safety Filter: If any consecutive steps have > 3.0h of driving,
  // we must insert their bypassed intermediate steps from the template to act as relays!
  let idx = 0;
  while (idx < selectedIndices.length - 1) {
    const idxA = selectedIndices[idx];
    const idxB = selectedIndices[idx + 1];
    const stepA = rawSteps[idxA];
    const stepB = rawSteps[idxB];

    const hours = getLocalDrivingHours(stepA.lat, stepA.lng, stepB.lat, stepB.lng);

    if (hours > 3.0 && idxB - idxA > 1) {
      // Find the middle index to split the long driving leg
      const midIdx = Math.floor((idxA + idxB) / 2);
      selectedIndices.splice(idx + 1, 0, midIdx);
      // Recheck from current index to ensure the first half is also safe
    } else {
      idx++;
    }
  }

  // Construct initial list of raw steps
  let finalSteps = selectedIndices.map(index => ({ ...rawSteps[index] }));

  // Second level filter: If ANY consecutive steps in finalSteps STILL have > 3.0h of driving
  // (e.g. consecutive steps in the template itself), we inject a dynamic geographic relay stop!
  let fIdx = 0;
  while (fIdx < finalSteps.length - 1) {
    const stepA = finalSteps[fIdx];
    const stepB = finalSteps[fIdx + 1];
    const hours = getLocalDrivingHours(stepA.lat, stepA.lng, stepB.lat, stepB.lng);

    if (hours > 3.0) {
      const relay = getDynamicRelayStep(stepA.lat, stepA.lng, stepB.lat, stepB.lng, lang);
      finalSteps.splice(fIdx + 1, 0, {
        placeName: relay.placeName,
        category: relay.category,
        notesFr: relay.notesFr,
        notesTh: relay.notesTh,
        lat: relay.lat,
        lng: relay.lng,
        budgetPerNight: relay.budgetPerNight,
        detailedTipsFr: relay.detailedTipsFr,
        detailedTipsTh: relay.detailedTipsTh,
        maxInfoFr: relay.maxInfoFr,
        maxInfoTh: relay.maxInfoTh
      });
      // Do not increment fIdx to recheck the new link (stepA -> relay)
    } else {
      fIdx++;
    }
  }

  const items: ItineraryItem[] = [];
  const stepCount = finalSteps.length;

  for (let i = 0; i < stepCount; i++) {
    const step = finalSteps[i];

    // Day calculation linearly distributed
    let calculatedDay = 1;
    if (i === 0) {
      calculatedDay = 1;
    } else if (i === stepCount - 1) {
      calculatedDay = totalDays;
    } else {
      const dayProgress = stepCount > 2 ? (i - 1) / (stepCount - 2) : 0.5;
      const minDay = 4;
      const maxDay = totalDays - 4;
      calculatedDay = Math.round(minDay + dayProgress * (maxDay - minDay));
    }

    // Estimate stay duration based on gap or preset weeks
    const calculatedNights: number = durationWeeks === 2 ? 2 : durationWeeks === 4 ? 4 : 5;
    const durString = calculatedNights === 1 
      ? (lang === 'fr' ? "1 nuit" : "1 คืน")
      : (lang === 'fr' ? `${calculatedNights} nuits` : `${calculatedNights} คืน`);

    const isStart = i === 0;
    const isEnd = i === stepCount - 1;

    let itemDuration = "";
    if (isStart || isEnd) {
      itemDuration = lang === 'fr' ? "1 nuit" : "1 คืน";
    } else {
      itemDuration = step.category === 'Attraction' || step.category === 'Activity' || step.category === 'Restaurant' 
        ? (lang === 'fr' ? "1 journée" : "1 วัน") 
        : durString;
    }

    const itemBudget = isStart || isEnd 
      ? step.budgetPerNight 
      : step.budgetPerNight * calculatedNights;

    items.push({
      id: isStart ? `${routeId}-step-1` : isEnd ? `${routeId}-step-end` : `${routeId}-step-mid-${i}`,
      placeName: step.placeName,
      day: calculatedDay,
      category: step.category,
      notes: lang === 'fr' ? step.notesFr : step.notesTh,
      lat: step.lat,
      lng: step.lng,
      duration: itemDuration,
      budget: itemBudget || undefined,
      detailedTips: lang === 'fr' ? step.detailedTipsFr : step.detailedTipsTh,
      maxInfo: lang === 'fr' ? step.maxInfoFr : step.maxInfoTh
    });
  }

  // Sort items by day
  items.sort((a, b) => a.day - b.day);

  const routeName = lang === 'fr' ? template.nameFr : template.nameTh;
  const durationText = lang === 'fr' ? `${durationWeeks} semaines` : `${durationWeeks} สัปดาห์`;

  return {
    items,
    title: `${routeName} - ${durationText}`,
    description: lang === 'fr' 
      ? `${template.descFr} (Itinéraire de ${durationWeeks} semaines optimisé au départ de Samut Sakhon).`
      : `${template.descTh} (เส้นทางที่แนะนำ ${durationWeeks} สัปดาห์ เริ่มต้นจากสมุทรสาคร)`
  };
}
