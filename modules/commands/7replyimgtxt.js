module.exports.config = {
    name: "replyimgtxt",
    version: "1.0.0",
    credits: "Hemang Sheoran",
    hasPermssion: 2,
    description: "Agar ap replyimgtxt ko on krdenge to bot botadmins or .mygang k members ko chorke sbke msg k reply m gali + image dega",
    usages: "replyimgtxt on/off",
    commandCategory: "Created By Hemang Sheoran",
    cooldowns: 0
};







module.exports.handleEvent = async ({ event, Threads, Users, api, args }) => {

const fs = require('fs');
const { threadID, messageID, senderID } = event;
const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
//	const { join } =  global.nodemodule["path"];
const { join } = require('path');
  
let datahs = (await Threads.getData(event.threadID)).data || {};
 if (typeof datahs["replyimgtxt"] == "undefined" || datahs.replyimgtxt == false) return;
 if (event.senderID == api.getCurrentUserID()) return;



  
const json1Data = fs.readFileSync(__dirname + "/hemang/apnebande.json",'utf-8');

const data1hs = JSON.parse(json1Data);

const isapnabanda = data1hs.includes(event.senderID);


const { ADMINBOT } = global.config;
const listAdmin = ADMINBOT || config.ADMINBOT || [];
let adminfind = false;
  for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)==event.senderID) {
      adminfind = true;
                  break;
                }
  }


if(!isapnabanda && !adminfind){

var hemang = 
["HATT MADHARCHOD TERA BAAP HU TO PAPA BOL CHAL😆 ", "TERI MA KO PREGNANT KRDU🤣", "LOL TATATE TERI MA KI KALI CHUT PR CHAPPAL MAARU", "GANDU SALE OKAT BNALE FYT KRME KI TB AANA PAPA SE FYT KRNE😌😈", "SUWAR KI OLAD😅", "SALE RANDI KE BACHHE TERI MA KO BHGA BHGA KR CHODU","TERII MAA KAA FUDDA FAADU😈😊", "TERII MAA KO GB ROAD PR LE JAAKR CHODUNGA😛", "LUND KE BAAL🤣😆", "GAWAR MAA KE GAWAR BACHHE TERI MAA KAA KALA BHOSDA FAADU🤪😈", "TERI BEHEN KO KALI PAHADI PR LEE JAAKR CHODU SALE RANDI KE BIIJJ", "AREE FATE CONDOM KI PIDAIS TERI MA KO ITNA CHOD THA PHIR BHI TUJHE SMJH NHI AAYA KI MUJHSE PANGA LENA MTLB APNE BAAP SE PANGA LENA HUA😒😒", " AAP MAA KII RASILI CHUT CHATU SALE","FATE CONDOM KI OLAD CHAL AAJ MAIN BHI DEKHTA HU KITNE DER TK TU COVER KR PAAYEGA APNE PAPA KOO",":O 8-) TEERII MAA KII CHUUT MAARU LAND BHOOSSDIIKEE MAADARCHOD KE BAACHE BEHEENN CHUUDA APNII :D",":O 8-) CHAAL BEETA AUKAAT BNAA BAAP BOOL TERII MAA CHODU LAAND KE TOPE :P",":O 8-) TERII MAA KE CHUUT MA KE LOODEE LAND KE BAAL TERE BAAP KE GAAND ME LAAND MAARU SALLE DOGLII MAA KE BACHE :D ",":O 8-) TEREE KHANDAN KE EK EK AURATE RANDII BNAA KEE CHOODU SAALE DOGLII MA KE BACHHE :P",":O 8-) MEERE LAAND KE JIITNE AUKAAT H OR TU KREEGA RAANDII KE BAACHHE BAAP SE FYYT :P","(^^^) :D CHAAL BE KUTE NASAALL KE BACHHE TERII BEHEN KI CHUUT MAAR KE MMERE BHAAII KE NAAM KRUU 2 KOODII KE BAACHE 3:)","(^^^) :D TEERE BAHENN KE CHUUT ME LAAT MAARU SAALE KUUTE NAASEELL KE BAACHHEE CHAAL KAAR TU TYP 3:)","(^^^) :D TEREE DADI KE GAANDD ME MERE NANA KAA LUND DAALU LAAND KE JHAAT SAALEE 3:)","(^^^) :D TEREE MAA KE CHUUT KA KIMAA BNAAU SSAALE L00DE KE BAAL JHAAT BHAAR KE KIID 3:)","(^^^) :D TAAARE MAA KI OR BAHENN KI CCHUUT MAARU 0R UNKEE CHUUT MEE TEEZAAB DAALUU 3:) ","(^^^) :D CHAL KUUTE KEE BAACHE TERE DADI KI CHUUT MAARU JHAAT BHAR KE KIID :D","(^^^) :D BEEHEEN CH0D KE BAACHHE TERII RAANDII GF KI CHUUT MAARU SALE D0GLI BEHENCHOOD (Y)","(^^^) :D TERII MAA KE CHUUT ME BEAR KI B00TAL DAAL KEE F00DU LAAND KE T00PE (Y)","(^^^) :D TEERI MA KI BHUUR MAARU SAALE GANDU KE BACHE TERI MA KI BUUR ME THUK DU (Y)","(^^^) :D TEERI BEEHENN KI FUUDI MAARU SAALE GAAND KEE BAAL TEERI MAA KIII CHUT (Y) ","(^^^) :D TERII MAA KE CHUUT ME BHOSDAA MAARU TERII BEHENN KE SAATH JIINHA KRUU (Y) ","(^^^) :D PEEN DE FUUDI NU CHIIRA GASTII KE BACHHE TERE BAAJI KE GAAND MAARU (Y) ","(^^^) :D TERII BAAJI KE GAAND MEE LAND DAAL KEE GHUMAAU TEERII BEEHENN KE BUND CHIIRU (y)","(^^^) :D TEERE MAA KE CHUT ME MAREE CHOOTEE BHAAII KAA L00DAA MAARU SAALE D0GLII MA KE BACHHE (Y)",":) (Y) TERII MAA KII CHUTTT",":) (Y) MADHARXCHOOD KEE BACHHEE",":) (Y) TERII BEHENN KII CHHUTT MAARUU",":) (Y) LANDD KE BAAL",":) (Y) TERII BEHEEN KII CHUTT MAAAR KE BHAAG JAAUU",":) (Y) KAALLEE GANND KEE BANDERR TEREE GANND SUJAA DUU",":) (Y) TERII MAA KII CHUT FAAR KEE BHAAG JAAUU 0R HATH BHII NAA AAU",":) <3 TERI MA KE GAAND MAAR KE ANDER INJECTII0N DAALU :-)",":) <3 TERII KHANDAN KE HAR EK AURAT K0 RANDII BNAADU",":) (Y) TERII BEHEEN KEE CHUTT MAAR KEE AIISE HSUU KE W0 BHII DAR JAAYEE",":) <3 BEHEN KE LODE SALE D0GLII MA KE BACHE :-)",":) <3 TERII RANDIII MA KE CHUT KHAAUUU SALE D0GLI MA KE BACHE :-)",":) <3 TERE BEHENN KE PANTYI FAARUU MADHARCHOD KE BACHE :-)",":) <3 TERII NANII KE GAAND MAAR KEE USKE HIISE AA KRDUU :-)",":) <3 TERE BEHEN KE BRA ME CHIBKALII CH00RU :-)",":O 8-) TERE DADII KE GAAND ME SARIIYA DAAL KE MAARDU MADHARCH00D :) ",":) (Y) TEREEE NALEE BEHEEN KEE CHUTT MAAR KEE GUNHEGAAR HO JAAUNGAAA",":) (Y) TEREEE BHUAA KEE BHURR MEE NAMAKK DAALL KEE CHATUUU",":) (Y) TEREE MAA KE CHUTT MEE MAKHHAN LGAA KEE CHATUU",":) (Y) TERII DADII KEE CHUTT MEE SEHEDD LGAAA KEE CHAATUU",":) (Y) MADHARXCHOOD TU KREGAA BAAP SE FADDA TERE AUKAAT BNAA",":) (Y) MADHARXCHOOD TU KREGAA MEREE SEE FYYT TERII BEHEEN K0 NANGA KRU",":D :P. SALEE NALEE BEHEEN KEE BHAAIIIII",":D :P TERII MAA KEE GANDDDD ME BOTTLE F0RUU",":D :P TERII MAA KE CHUTT ME TEJAABB DAAL KE JLAAUU",":D :P TERII MA K0 NANGII KRKE CH0RAHE ME LTKAA KEE CHH00DUU",":D :P TERIII BEHEN KEE CHUCHIYOOO DBAAUUUU",":D :P TERII MAA KO CHOOD KE GIRFTAAR HO JAAUUUU",":D :P TERII BEHENN KEE CHUUT KEE JHAATEE KHIICHUU",":D :P TERII MAA KE BRAA FAAR DU",":D :P TERII BEHEEBNN KEE JHAAT JLA KE CHODUUU",":D :P TERII MOSII KEE CHUTT MEE HAATHH DAAL KE FAARUU",":D :P TERII NALLE BEHEN KII CHUTT MAAR KEE NIILAAM KRDUUU",":D :P KAALLEE CHUTT KEE KIIDEE TERII BEHEN KEE BHURR MAAR DU",":D :P TERII DADIII KEE CHUTT ME THUUK DUU",":D :P TERII MAA KE CHUTT ME CORONA THUUK KEE MAARUU",":D :P TEXII MAA KE BACHHE ",":D :P GANDII GHASTEE KIII OLAADD ",":D :P TU AAJ RO ETNAA RO KE TERII BEHEEN BHE DAR KE MR JAAYE",":D :P TU JIITNAA KALPEGA MEKO UTNA MAZA AAYEGA OR KAALP",":D :P TERII MAA KE BUURR MARNE WALA HU BETA TERI MA KA SACHHA AASIIIQ HU ME",":D :P TERII BEHEEN KE GANND MAAR KEE BHAAGNE WALA KHUNKHAR DARIIINDA HU ME",":D :P TERII BEHEN KA SACHHA AASHIIQ HU TERII DADII KA JAMAII HU",":D :P RANDII NASLL KE BACHEE",":D :P TERII MAA KO BADNAAM KRDUU MADHARXCHOOD",":D :P BEHEENCH0D KR TU TYYP",":D :P TERII MAA KE GANND MAAR KE BHAAG JAAUNGA ME",":D :P BHAAG MT RANDII KE BACHEE",":D :P BHAGA TO TERII MA MR JAAYEE MADHARXCHOOD","<() :) TERII MA KE CHUT ME RASGULA DAL KE CHOODUU","<() :) KIID BHAAGE HUEE MA KE BACHEE","<() :) TERII MAA KE GAND ME BOMB DAALU","<() :) TERII CHOTII BEHEEN KEE CHUTT MEE FAARU","<() :) TERII BEHENN KE BRAA ME HAATH DAAALU","<() :) TERII RANDII MAA KE CHUTT ME HATHII KA LAAND MAARUY","<() :) DOGLE MAA KEE BACHHE BHAAG MT TERII BEHEN KAA BUR MAARUU","<() :) SADI HUYI CHUT KE KIDEE TERII MAA KI CHUTT KHAA JAAU","<() :) SASTE BESYAA KE BACHE","<() :) TERE DADII KE CHUT ME LAAT GHUSSAA DUU","<() :) TERE BHEN KE CHUT ME LODE KE BARSAAT KRUU","<() :) TERE MAIYA KA SAIIYA HU ME BETAAA ABU BOL MUJHE AB","<() :) TERII KHALA KA BH0SDAA MENE FAAR DALA AB TU BAN GYA MERE SALE","<() :) TERII SAADII HUE CHUT KA KIIMAA BNAAU","<() :) TERII SAAGII BEHEN KE CHUT MAARUU","<() :) TERII BEHEN KE BRAA KH0L KE FEEKUU","<() :) MADHARCHOD BHAAG RHAA H TEREE MA CHUD JAAYEGII","<() :) BHAAG MT TERII BEHEN KI CHUCHII NOCHU","<() :) DEKH MADHARXCHOOD BHAAG RHAA TERI BHUAA KE GAND ME DANDA MAARU","<() :) BHAGA TO TERE NANI KE CHUTT FT JAAYE",";* <3 TAARIII DIDI KE CHADII FAARUU",";* <3 TARII KHALAA KE CHUTT KA PAANII NIIKAALU",";* <3 TERII BHUAA KE GAAND ME KHUUN NIIKAALU",";* <3 TERII BEHEEN KE GAAND ME BOMB FIIT KRUU",";* <3 TERII RANDII BEEHEENN KEE CHUTT KA KIIMAA BNAAUUU",";* <3 TERII DIDI KE CHUTT MEE NAMAAK DAAL KE CHAATUU",";* <3 TERII DIDI KE BOOBS DBAAUUU OR UNKA DUD PIIJAAUUU",";* <3 SASTII RANDIII KEE BAACHEE TU KREEGA BAAP KE SAAMNE TYYP TERII BEHEEN CHOOD DUNGAA MEE",";* <3 CHAAL AUKAAT BNAA RANDII KE BACHE TERII BEHEN KE CHUT MAARUU",";* <3 CHAAL AUKAAT BNAA GASTII KE BACHE TERII BEHEN KE GAANDA ME LAAT MAARU",";* <3 CHAAL AUKAAT BNA RANDIII KE BACHE TERII BEHEN KE CHUT KE SILAAII KRUU",";* <3 TERI JHAAT BHAR KE AUKAAT H TERII MA KO MERE JHATO ME LATKA KE MARDU",";* <3 SASTII RANDIII MA KE BACHE TERE CHOTII BEHEN KE CHUT CHAAT KE LAL KRUU",";* <3 TERE KUTII MA KE BOOBS DBAUU OR UNKA DUD NIKAAL KE COFII PIUU",";* <3 TEERII NANIII KE GAAND ME CHAPPAL MAAR KE LAL KRUU",";* <3 TEREE DIDI KE GAAND ME LAAT MAAR KE USKA PLAY GROUND BNAUU",";* <3 SASTII RAANDII KE SASTII BACHE TERE MA KO NILAAM KRUU",";* <3 TERE BEHEN KE CHUT ME RASGULAA DAALU OR FEER JHTKEE DU",";* <3 TERE MAA KE CHUUT ME JALEEBII DAAL KE CHODUU",";* <3 TEREE BEEHEN KE MUH ME MUUTH MAARU RANDIII KE BACHE",";* <3 TEREE MA KE BOOBS ME LOODAA DAALU OR HILAAU",";* <3 KUTII KE BAACHE TEREE BEHEN KE CHUT ME JIIBH DAAL KE RUUF KRUUU",";* <3 TEREE NANII KE GAAND ME SARIIYA DAALU :-)",";* <3 TEREE DADII KE GAAND ME THPEEED MAARU :-)",";* <3 LOODA KII SAKAALL KE BANDERR TERE GAAND ME CHPAAL MAAR KE SUJA DUNGAAA",";* <3 TEREE JHAAT JAAIISEE AUKAAT H BEETA OR TU CHLAA H BAAP SE PANGAA KRNEE :-)",";* <3 TEREE KO GAALII DETE BHEE SARAM AARI H BUT KYAA KRUU DENA PAD RHA H TU H HE MADHARCHOOD :D",";* <3 TERII BEHEENN KE CHUCHUIIYAA PAAKAD KE JHULU :-)",";* <3 CHAAL BEETA TU KRTAA RH AAJ TYYP TERII MAA CHOOD KE MAAR DUNGAA RE RANDIII KEE BAACHEE :-)",";* <3 SASTII CHIINAAL KEE BAACHEE TEREE MAA KE CHUTT KHAAJAUNGAA :-)",";* <3 TEREE MAA KE CHUT KE BAAL KHIICHU RANDIII KE BACHHE :-)",";* <3 TERII RANDII MAA KEE GAAND ME LAAT MAARU USKE GAAND ME KHUUN NIIKAALU :-)",";* <3 TEREE NANI KE GAAND SUJAA DU USME LATH DAAL KE HIILA DU :-)",":) <3 TEEREE MA KEE CHUUUT MAARUU :-)",":) <3 KAALII GAAND KE BANDAR TEEREE NANI KE CHUT KHAJAU :-)",":) <3 KAALII CHUTT KE KIIDEE TERE BEHEN KE CHUT CHMAAT :-)",":) <3 TERE BEHEN KE BRA ME CHIBKALII CHOORU :-)",":) <3 TEREE NANII KE GAAND MAAR KE USKE HIISE AA KRDUU :-)",":O 8-) TERE KHALA KE CHUUT MAAR KE CHIIRM CHIIR KRDU :) ",":O 8-) TERE NANII KE CHUUT SAATH ME BHAAG KE MAAR DU LAAND KE TOPEE :P ",":O 8-) TEREE KHALA KE CHUUT MAAR KE USKE HIIDE ME MIIRCHE DAAL DU LAAND KE BAAL :P ",":O 8-) TERE BEHEEN KO PAARK ME LEJAAKE CHOODU LAANND KE JHAAT SAALE BAAP KE SAMNE AUKAAT BNAA :) ",":O 8-) TERE MA KE CHUUT ME HAATH DAAL KE FAAR DU :P ",":O 8-) TEREE RANDIII MA KEE CHUUT KA KIIMAA BNAAU BEHEENCHOOD KE BACHHE LAAND KE JHAAT SAALE :P",":O 8-) MAADHARCHOOD KE BACHE TERE BEHEN KE CHUUT ME THPEED MAAR KE USKEE CHIITDE UDAAU :P",":O 8-) TEREE DADI KE GAAND KE KITNE BURAAN HAAL H RE MADHARCHOOD KE BACHEE :P",":O 8-) TEREE PUREE KHANDAAN KE AURATE MADHARCHOOD RAANDI H B9EHEEN KE LOODE :P ",":O 8-) AREE MUNAA KIITNAA ROYEEGA MAADHARCHOOD KE BACHEE TU RO MT TEERE BEHEEN KE CHUUT ABHII FTEGII RUKK TU :D",":O 8-) LAAND KEE JHAAT SALE TERE MA KE CHUUT MA KE LAAND KE BAAL TEERE MAA CHOOD DUNGAA LAAND KE BAAL :P",":O 8-) JHAAT BHAAR KE KIIDSS TEERE MA KE CHUUT MAARDU LAAND KE TOPE :P","TERI AMMI KO KUTTE KA LUND PASAND H YE NEWS PADSO AKHWAR M DEKHI MENE","BABA RAMDEV YAAD KR RHE TERI AMMA KO AAJ MUTH MARTE HUE","TEEERIII MAA KI CHHUTT M LAAND BSDDDK MCC","TERRI MAA KA KUTTA MAARU SALE LAWDEE BSDK","KUTTIIAAA K PILLE K BACHHEE BSDDKKK","TERI MAA KI GAAND M DANDA CHLA GYA 12 METRE KA","TERI BEHEN KI GAND MRVANE AA NA IDHR","TERI MAA MIA KHALIFA KO TAKKAR DEGI","TERI MAA OR BEHEN ROJ MERE KAMRE P AATI H KYA KRVANE YE TU PTA LGA","TERI MAA KO JOHNNY SINS K TUTION M DEKHA THA PADSO","TERI MAA KI CHUT M SAAP DALO RE KOI","TERI MAA M JOHNNY SINS KA DOUBLE LAWDA","TERI MAA KI CHUT KI RADIUS AAJ 1 CM OR BAD GAI","TERI MAA KA BHOSHDE M CAMEL KA LAWDA 🤣🤣🤣","TERI MAA KO AAJ MENE GB ROAD K EK KAMRE M DEKHA","PANGA LIA HI H TO GAAND MARUNGAA DHANG SE TERE JESE CHELO KO NHI JANE DUNGA AB M SASTE M 😂","PRATHVI LGAATI H CHAKKAR SURYAA KA ✌️✌️\nTU H NATIJAA MERE VIRYA KA🔥🔥🔥🤣🤣😂😂","TERI MAA KI GAAND KO KO HI DELETE KRDUNGA BSDK","TERI MAA SUBH KO KUTTE KI TATTI KHATI H OR SAAM KO MERI","TERI MAA KI CHUT M SAAP DALO RE KOI","SDII HUI CHHUT K BACHHE TEERII MAA CHOKEE TEREKO MENE HI PAIDAA KIA H BKL🤣🤣","TERE KHAANDAAN KI GAAND MAARDU EK JHAATKE M TU H MERE LUNDD K JHAATKE MM 😂","SBKKO DRAANE K LIEE SHEER MAARTA H DHAAD TEREI MAA KO CHODDKE USKKI GAAND KO BNAA DUNGAA PHAAD🔥🔥🔥🤣🤣😂😂😂🤣🤣🔥🔥🔥","PATLLI LAKDDI KO HAAM KEHTE H DANDI TERI MAA H SASTI RAANDI🤣🤣","PANGA LIA HI H TO GAAND MARUNGAA DHANG SE TERE JESE CHELO KO NHI JANE DUNGA AB M SASTE M 😂","PATLLI LAKDDI KO HAAM KEHTE H DANDI TERI MAA H SASTI RAANDI🤣🤣","SBKKO DRAANE K LIEE SHEER MAARTA H DHAAD \nTEREI MAA KO CHODDKE USKKI GAAND KO BNAA DUNGAA PHAAD🔥🔥🔥🤣🤣😂😂😂🤣🤣🔥🔥🔥","TERE KHAANDAAN KI GAAND MAARDU EK JHAATKE M TU H MERE LUNDD K JHAATKE MM 😂","SDII HUI CHHUT K BACHHE TEERII MAA CHOKEE TEREKO MENE HI PAIDAA KIA H BKL🤣🤣","AAJ TU BHI CHUDEEGA TERII MAA BHI CHHUDEGI TERRI BEHEN BHI CHHUDEGGI 😂😂","TERII GAAND M MITTI KAA TEL LGAAKE TERRI GAAND MAARDUNGAA BSDK MC KUTIAA KI CHUT SE NIKLE HUEE MC,😂😂🔥","TERII MAA M OR KUTIAA M DIFFERENCE DHUDA MENE TO KOI DIFFERENCE NHII MILAA🤣🤣","TERI AMMA KO CHHOD CHHOD K CHHAAND TAAK PAHUCHAA DUNGAA TERRI MAA K CHHUCHE","RAAND K BACHHE BAAP SE PANGAA LEGA TU KUTIAA KI CHHUT SE PAIDAA HUE BHAADWE😂😂","SDI HUII KUTTIA K PILLE RAAND K BACHHE MC GAANDU MERE LUNDD K BRAABAR K JHAANTU TERRI MAA CHODU","KUTIIA K SDEE HUEE PILLE TEERII GAAND H YAA KUAA KITNNO P MRVVAI H TENE AAJ TAAK😂😂🤣","DDONNALD TRUUMMP KAA LUNDD MUH M. LETTI H TERRI AMMY OR TTU AONEE HATH SE MUTH MAARTA H USSKI🤣🤣😂😂","MMERAA LUNDD MUH M LELLE PURAA KA PURAA JHAADUNGA TERE MUH M🤣🤣😂😂","TERII GAAND M CHAANTA TARE SURAAJ SAB GHUSAA DUNGAA BKL RAAND MERI RANDDI🤣🤣😂😂👌👌👌👌🔥🔥","TERII MAA KI BBUR FAADU MADHARCHOD TEREKO RAANDI KI CHUT BNAAU SALE GAANDU😂","TERRI GAAND FAAD DU LUNND KO TEREE MUH M DAAL DU BSSDK TERRI MAA KO PREGNAANT BNAA DU🤣🤣🤣😂😂","MAGGARMACHH KI SHAAKAL KUTIAA K BACHHE OR TAATTI KI AUKAAT WALEE CHUDAKKKAD😂😂🤣🤣","MAHATMAA GAANDHI KI DAANDI MAARCH M TERRI MAA NE RAAT KO GAANDHI KAA BAHUT SATH DIYAA JISSKA RESSULT AAJ FB P MRVAA RHA H🔥🔥🔥🔥😂😂👌👌","TU H CHUTIA TERI MAA OR BAHAN H RANDI TERA BAAP H HIJDA OR TERA KHANDAN H KUTTO KA PARIVAR","TERII MAA H RAAND OR TERRI BAHAN H TERRI MAA SEE BHI BAADI RAANDI","AAPNI MAA SE BOLLNA MERA LUNDD GAAND M LENE KO TERAA BHAI BHI BNANA H MUJHE😂😂🤣🤣","BSSDK MEREE LUNDD KI GAADBAD K NATIJEE RAAND K BACHHE MC LUND BKL RAAND🤣🤣😂😂","SSUBH SSAAM PURV DDISHHA M GHHODI BNNKE GHODE K LUNND KO CHUSKE MERE P CHHUT MRVVAKE TERE JESE BACHHE KI PRAPTI HITII H 🔥🔥🔥👌👌👌😂😂😂","TEERI MAA KO KUTIIA BNAAKE KUTTTE SSE CHHUDVAAKE TEERE JESE PILLE KAA JANAAM HUAA H BKL😂😂🔥🔥","BKLL KACCHI PEHNNE WAALE CHHAKEE TIKTOKER MC GAAND FATI K BHAADWE FAATI CONDOM KI PEDAAISH😂😂😂🤣🤣","TERRI MAA KO MODDI JI CHHOD CCHODD K ECONOMMY KI TAARAH TRRI MAA KI FAADNE K BAAD TU HUAA BHADWE😂😂😂🤣🤣","ESI MAA CHODDUNGAA NA FATI CONDDOM KI PEDDAISH TERI K CHAAND TAK AWAAJ JAEGI😂😂","BSSDK RAAND K PILLE HAANUMANN JI SEE TERRI GAAND MM LGII AAG BHI BHUJVAAUNGAA MC GAAND MRE BHADWEE BC MC😂😂😂🤣","TERRI MAA KI CHHUT MADHARCHOD BSDIWALE LUNND KI PEDAAISH BKL GAANDU MC RAAND 😂😂😂🤣🤣","TERII MAA KI CHUT BHN KI GAND SAB CHUDE 1000 BAAR PURI DUNIYA P","MEERAA LUNND HI TEREE KHAANDAN KO CHOODNE K LIEE KAAFI H MERE LUNDD KI PEDAAISH 🤣🤣😂😂","SAALE RANDI K PILLE MERRI JHAANT KI BRABAR K AUKAAT WALE LONDU TERII MAA CHODU BHN K LAWDE","TERRI MAA BEHEN SAAB KO RAAND BNAA DUNGAA AAJ CHOOD CHHOD KE UNKI GAAND CHHUT KO POKHAAR BNAA DUNGA😂😂😂🤣🤣🤣","TEERI MAA KI CHUTT H POKHAR TU H BHN KAA LAWDA","ESI MAA CHODDUNGAA NA FATI CONDDOM KI PEDDAISH TERI K CHAAND TAK AWAAJ JAEGI😂😂","TERRI MAA 12 INCHH MOTAA LAWDA LE JAATI H AAB TO ITNA LUND LIA H MUHALLE KA USNE","MC BHADWEE ANNA HJAARE SEE GAAND MRVAAKE KESAA LGA TERE KO FB KI CHAALTI FIRTI RAAND😂😂","TEERII MAA KI CHHUT MAARU BHADWEE BKL GAANDU MC KUTTIA K PILLE MACHHAR KI JHAANT😂😂🤣","MC KUTIAA K PILLE GADHEE K AAND JESSI SAKAAL K LAWDE GAANDU","TEERRII MAA ORR BAAHAN KO OYO M LE JAKE CHODUNGA BHN K LUND TEL LGAKE","TERII GAAND KAA SITARA BN JAAEGA AAJ BHNN K LAWDEE TEERII MAA KI CHHUT MAARU BC","CHAL BE BAHAN K LAWDE RANDI K PILLE MC","TERI MAA KUTTO SE CHUDAI THI TAB TU PAIDA HUA THA BAHAN K LUND","PORN STAR PURI ZINDGI M NA CHUDATI ITNA JITNA TERI MAA OR BAHAN EK DIN M CHUDWA LETI HEIN","HAHAHAH BSDK TERI MAA CHOD DUNGAA","TERI GAND M ATOM BOMB LGAKE CHANDA TARE DIKHA DUNGA","RANDI K PILLE TERI MAA 50 PILLE DE DEGI M AA GYA TO","RAND K PILLE RANDI K BCHHE TERI MAA PURE MUHALLE KO 2 RS M DETI H","RAND K PILLE RANDI K BCHHE TERI MAA PURE MUHALLE KO 2 RS M DETI H","TERI BAHAN OR MAA KOTHA CHLATI H BECH CHORAHE P","TERI MAA 9 MAHINA KI GYAVHAN HO CHUKI H SBKE LUND LE LEKE","GANDU TERI GAND FAT JAEGI BSDK MADHARCHOD KUTIA K PILLE","TERI MAA KI CHUT VO BHI FATI HUI VO BHI PURE MUHALLE K LUND SE","तेरी बहन का भोसड़ा","तेरी मां की चूत में लोड़ा 🙂😅","बताया नही तूने कैसी है तेरी बहन की चूत 🙂","तेरी बहन की चुत मै लात मारु रण्डीके बोट से तेरी बहन चुदवाएगा!!!🤔","एक बाप की ओलाद है तो अपनी बहन की चूत दिखा अभी 🙂🙂","तेरी बहन को gb रोड के टॉप रंडी बनाऊंगा एक बाप ki औलाद है तो नंबर कॉल कर 😇","तेरी बहन ki चुत म लोडा देदू 😒","तेरी बहन की चूत लिख के जा रहा हूं इसको पढ़ते रहना 🙂🙂🙂","तू रण्डी के चूतिया है 😅😅😅😅","सुन तू अपनी बहन की चूत में मेरा नाम लेके उंगली देता रह \n\nमेरा अभी मूड खराब है में बाद में आता हूं 🙂🙂🙂","तेरी बहन की। चूत कितनी बार बताऊं में बस तेरी बहन के नम्बर पे कॉल करूंगा 🙂🙂🙂","तेरी बहन ki गांड रंडी के पिले बने बदमाश ईब","तेरी मां की चूत में लोड़ा रण्डी के बालक तू झांट भर का पिल्ला बात चोदने की करे 😅😅😅😅","रण्डी के गलती से पैदा हुआ है तू तेरी मां की चूत मजाक मजाक में किसी पे गिर गया तू 😅😅😅 ना तो तेरी मां हर बार बच्चा गिरा दिया करती थी 😅😅 \nवो उस दिन कॉन्डम फटा रह गया 😅","भेण के लंड तेरी बहन न चोदके आया hu","तेरी बहन की तूने भरे बाजार मै नीलाम कर दी रण्डी की बच्चे 🙂","तेरी छोटली बहन ki bhosdi 🙄","भेण के लंड नंबर प कॉल करले कुत्ता ki ढाल भोकन लाग रया","तेरी बहन। के नम्बर पे करूंगा कॉल तो बस चूत के बाल 😅😅😅😅","तेरी मां की चूत कह तो दी तुझ से जीत गया तू फिर क्यों अपनी बहन को चूद बा रहा है 😅😅😅","तेरी भाण का भोसड़ा","तूने पढ़ी नही क्या तेरी बहन की चूत लिखी थी अभी मेने 🙂","तेरी बहन की चूत लिख के जारा हूं इसे पढ़ जब तक 🙂","तेरी बहन ki चुत रंडी के पिले नंबर तो तू ब्लेक लिस्ट म गेरी बैठा मेरा बने बदमाश 😂😂","मुझे बस तेरी बहन से बात करनी है और किसी से नहीं 😅😅😅😅","चूद गई तेरा मां भाग गया दिखे 😅😅😅","तेरी मम्मी की चूत में लन्ड का गुलदस्ता बना दिया जाएगा आज 😅😅😅","न यकीन तो देख अपनी बहन की चूत पे उसकी चूत पे आज भी मेरे लोड़े के निशान है 😅😅😅😅😅","तू बस अपनी बहन चूद बाने का है 😅😅😅","रियल में भी गुंडा ही हूं में वहां भी तेरी बहन चोद दूंगा 😅😅😅😅","तेरी बहन से जाके पूछ वो आज भी मेरा नाम लेके अपनी चूत में उंगली करती है 😅😅😅😅","अपनी बहन का नम्बर दे में करू कॉल अभी 😅😅😅😅😅😅 \n\nतेरी बहन को कॉल पे ही चोद के प्रेगनेंट कर दूंगा 😅","तेरी बहन की चूत पे लगे सुनहरे बालों की कसम तेरी मम्मी को तेरी बहन की चूत में खड़ा कर के चोदूं 😅😅😅🎈","तुझे कसम है तेरी बहन की चूत की उसकी गांड़ के दर्शन करवा दे बच्चे 😅😅😅😅😅","अगर तूने अपनी बहन की चूत न दिखाई तो तू रण्डी का बच्चा होगा 😅😅😅😅","अगर तूने अपनी बहन का नंबर नही दिया तो तू सो बाप का 😅😅😅😅","एक बाप की ओलाद है तो अपनी बहन का नंबर दे 😅😅😅😅","तेरी बहन को बिहार लेजा के ही चोद दूंगा 😅😅😅😅😅😅😅","तेरी बहन को रोहतक जाट कोलीज के सामने चोदू 🙄","तेरी बहन की झांटों की रस्सी बना कर तुझे फांसी लगा दूंगा 😅😅😅😅😅😅","तेरी बहन को प्रेग्नेंट करदु bhosdi के 🤨","सुना है तेरी मम्मी चूत से सिगरेट पी के मुंह से धुआं निकाल देती है 🙂🙂🙂🙂","अपनी बहन की छाती पे रण्डी लिख वा के दिल्ली भेज दे 🙂🙂🙂","तेरी बहन ki चुत प बाटा ki चपल मारु रंडी के पिले 🤨","मेने सुना है तेरी मम्मी लाल चड्डी पहर के ट्रेन के आगे खड़ी हो जाए तो ट्रेन रुक जाती है 🙂","तेरी बहन को पटक पटक के चोदू रंडी के बच्चे 🙄","तेरी बहन को रंडी बणा दू मादरचोद 🙄","तेरी बहन की चूत में लोड़ा रण्डी के भाई 🙂🙂🙂🙂🙂","तेरी मम्मी की भोंसड़ी में लट्ठ गाड़ दूंगा रण्डी पुत्र 🙂","मेने सुना है तेरी मम्मी लाल चड्डी पहर के ट्रेन के आगे खड़ी हो जाए तो ट्रेन रुक जाती है 🙂","तेरे पुरे खानदान को जीबी रोड पर चोदू 😅😅😅😅😅😅","तेरी बहन चुद गई अब तुझे कैसा लगा 😅😅😅😅","तेरी बहन को लोडा चूसा चूसा की मोटी कर दू इने को आ","तेरी बहन की फोटो भेज की डिलीट कर दिया मेरे लोडे की पैदाइश 🤔🤔🤔🤔","तेरी माँ मेरी रखेल है और तू मेरे फटे कंडोम की पैदाइस 😅😅😅😅😅😅","बता तेरी छोटी बहन की चुत की रेट आज रात ही खरीद लू 😹😹😹😹","तेरी माँ को नग्गा देख के लोडा खड़ा हो गया 😅😅😅😅","तेरी बहन मेरा लोडा चूस चूस के बड़ी हुई है पूछ मै कोण हूँ 😅😅😅😅","तेरी एकलौती बहन को मुर्गी छाप चोदू भग गया 😹😹😹😹😹","तेरी माँ को एक तरफा चोदू वो मेरे बाप का लंड था काला काला जो देखा 😅😅😅😅😅😅😅","तेरी बहन मेरा लोडा चूस चूस के बड़ी हुई है पूछ मै कोण हूँ 😅😅😅😅","तेरी बहन की चुत मै लंड दे के भूल जाऊ इने को आ 😅","तेरी बहन को कुत्ता चोदू रंडी के बच्चे इधर आ 😅😅","तेरे पुरे खानदान को खडे लंड से चोदू रण्डी के bachhe😅","तुझे तेरी बेबे की चुत की कसम हिंदी टाइपिंग कर 😅😅😅😅😅😅"];
  
const nameofauthor = await Users.getNameUser(event.senderID);
  
var sheoran = hemang[Math.floor(Math.random() * hemang.length)]
  
const randomPathstartcall = readdirSync(join(__dirname, "HemangSheoran", "hsboss"));


const pathRandomstartcall = join(__dirname, "HemangSheoran", "hsboss",`${randomPathstartcall[Math.floor(Math.random() * randomPathstartcall.length)]}`);
var mentions = [];
mentions.push({ id: event.senderID, tag: `${nameofauthor}`, fromIndex: 0 });
var msgstart = `${nameofauthor}, ${sheoran}`;

formPushstartcall = { body: msgstart, mentions, attachment: createReadStream(pathRandomstartcall) }
  
api.sendMessage(formPushstartcall, threadID, messageID);


}







  
};




























module.exports.run = async({ api, event, Threads}) => {
const fs = require('fs');
  
const mention = Object.keys(event.mentions);

const jsonData = fs.readFileSync(__dirname + "/hemang/apnebande.json",'utf-8');

const data1 = JSON.parse(jsonData);  
for (const id of mention) {

// Check if the id is not already present
if (!data1.includes(id)) {
  // If not present, push the id
  data1.push(id);
} }
  const updatedJsonData = JSON.stringify(data1, null, 2);
  
  fs.writeFileSync(__dirname + "/hemang/apnebande.json", updatedJsonData, 'utf-8');



  

api.sendMessage(`${mention}`, event.threadID); 
  
    let data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data["replyimgtxt"] == "undefined" || data["replyimgtxt"] == false) data["replyimgtxt"] = true;
    else data["replyimgtxt"] = false;
if(data["replyimgtxt"] == true){
  data["reply"] = false;
  data["replycp"] = false;
 data["replyimg"] = false;
 data["replyhang"] = false;
// data["replyimgtxt"] = false;
}    
    await Threads.setData(event.threadID, { data });
    global.data.threadData.set(parseInt(event.threadID), data);
    
    return api.sendMessage(`𝗗𝗼𝗻𝗲 ${(data["replyimgtxt"] == true) ? "𝗧𝗨𝗥𝗡 𝗢𝗡 ✅✅✅ 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆\nBot ab .𝗺𝘆𝗴𝗮𝗻𝗴 wale bndo ko chorke sbko text+image dono m gali dega\n👉[ But other Reply commands (replyimg, replycp etc..) ko bnd krdiya gya h processor pr load km krne k liye ]👈\nThis Command is Created BY 𝑯𝑬𝑴𝑨𝑵𝑮 𝑺𝑯𝑬𝑶𝑹𝑨𝑵 𝑱𝑨𝑨𝑻\n𝗜𝗗 𝗟𝗜𝗡𝗞- https://www.facebook.com/hemang.sheoran.16" : "𝗧𝗨𝗥𝗡 𝗢𝗙𝗙 ❌❌❌ Successfully\nThis Command is Created BY 𝑯𝑬𝑴𝑨𝑵𝑮 𝑺𝑯𝑬𝑶𝑹𝑨𝑵 𝑱𝑨𝑨𝑻\n𝗜𝗗 𝗟𝗜𝗡𝗞- https://www.facebook.com/hemang.sheoran.16"} `, event.threadID, event.messageID);

 }